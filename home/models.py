from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel

from wagtailseo.models import SeoMixin
from wagtailcache.cache import WagtailCacheMixin


class HomePage(WagtailCacheMixin, SeoMixin, Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel("body"),
    ]

    promote_panels = SeoMixin.seo_panels
