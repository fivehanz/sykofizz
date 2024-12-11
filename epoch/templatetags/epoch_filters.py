from django import template
from bs4 import BeautifulSoup

register = template.Library()


@register.filter
def add_heading_ids(value):
    soup = BeautifulSoup(value, "html.parser")
    headings = soup.find_all(["h2", "h3", "h4"])

    for heading in headings:
        heading_text = heading.get_text()
        heading_id = heading.get("id", heading_text.lower().replace(" ", "-"))
        heading["id"] = heading_id

    return str(soup)
