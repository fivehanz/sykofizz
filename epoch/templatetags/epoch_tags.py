from django import template
from django.core.cache import cache
from bs4 import BeautifulSoup
import hashlib

register = template.Library()


@register.simple_tag
def generate_toc(body):
    # Generate a unique cache key based on the body content
    cache_key = hashlib.md5(body.encode("utf-8")).hexdigest()

    # Try to get the TOC from the cache
    toc = cache.get(cache_key)

    if not toc:
        # If the TOC is not in the cache, generate it
        soup = BeautifulSoup(body, "html.parser")
        headings = soup.find_all(["h2", "h3", "h4"])
        toc = []

        current_h2 = None
        current_h3 = None

        for heading in headings:
            heading_text = heading.get_text()
            heading_id = heading.get("id", heading_text.lower().replace(" ", "-"))

            if heading.name == "h2":
                current_h2 = (heading_text, heading_id, [])
                toc.append(current_h2)
                current_h3 = None
            elif heading.name == "h3":
                current_h3 = (heading_text, heading_id, [])
                if current_h2:
                    current_h2[2].append(current_h3)
                else:
                    toc.append(current_h3)
            elif heading.name == "h4":
                if current_h3:
                    current_h3[2].append((heading_text, heading_id))
                elif current_h2:
                    current_h2[2].append((heading_text, heading_id))
                else:
                    toc.append((heading_text, heading_id))

        # Cache the generated TOC
        cache.set(cache_key, toc, timeout=60 * 15)  # Cache for 15 minutes

    return toc
