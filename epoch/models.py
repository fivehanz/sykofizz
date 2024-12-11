from django.db import models
from wagtail.models import Page
from wagtail.admin.panels import FieldPanel
from wagtail.search import index
from wagtailseo.models import SeoMixin
from wagtailcache.cache import WagtailCacheMixin
from wagtail.fields import RichTextField


class EpochIndexPage(WagtailCacheMixin, SeoMixin, Page):
    """
    EpochIndexPage model represents the index page for the epoch series.
    """

    # Database fields
    intro = models.TextField(
        blank=True,
        help_text="A brief introduction or description for the epoch series.",
    )

    # Search index configuration
    search_fields = Page.search_fields + [
        index.SearchField("intro"),
    ]

    # Editor panels configuration
    content_panels = Page.content_panels + [
        FieldPanel("intro"),
    ]

    promote_panels = SeoMixin.seo_panels

    # Parent page / subpage type rules
    parent_page_types = ["home.HomePage"]
    subpage_types = ["epoch.EpochPage"]

    def get_context(self, request, *args, **kwargs):
        """
        Adds epoch_entries to the template context.

        This method is called whenever the template for this page is rendered.
        It adds a list of live EpochPage instances that are children of this
        EpochIndexPage to the context, allowing the template to display them.

        Args:
            request (HttpRequest): The request object.
            *args: Additional positional arguments.
            **kwargs: Additional keyword arguments.

        Returns:
            dict: The updated context dictionary.
        """

        # Call the get_context method of the parent class to get the default context
        context = super().get_context(request, *args, **kwargs)

        # Add a list of live EpochPage instances that are children of this EpochIndexPage to the context
        context["epoch_entries"] = (
            EpochPage.objects.child_of(self).live().order_by("series_number")
        )

        # Return the updated context dictionary
        return context


class EpochPage(WagtailCacheMixin, SeoMixin, Page):
    """
    EpochPage model represents an individual epoch in the series.
    """

    # Database fields
    series_number = models.IntegerField(help_text="The series number for this epoch.")
    body = RichTextField()
    date = models.DateField("Post date")
    feed_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    # Search index configuration
    search_fields = Page.search_fields + [
        index.SearchField("body"),
        index.FilterField("date"),
    ]

    # Editor panels configuration
    content_panels = Page.content_panels + [
        FieldPanel("series_number"),
        FieldPanel("date"),
        FieldPanel("body"),
    ]

    promote_panels = SeoMixin.seo_panels

    # Parent page / subpage type rules
    parent_page_types = ["epoch.EpochIndexPage"]
    subpage_types = []

    def get_previous_epoch(self):
        """
        Get the previous epoch in the series.

        Returns:
            EpochPage: The previous epoch page, or None if this is the first epoch.
        """
        previous_epoch = (
            EpochPage.objects.filter(
                series_number__lt=self.series_number,
                path__startswith=self.get_parent().path,
            )
            .order_by("-series_number")
            .first()
        )
        return previous_epoch

    def get_next_epoch(self):
        """
        Get the next epoch in the series.

        Returns:
            EpochPage: The next epoch page, or None if this is the last epoch.
        """
        next_epoch = (
            EpochPage.objects.filter(
                series_number__gt=self.series_number,
                path__startswith=self.get_parent().path,
            )
            .order_by("series_number")
            .first()
        )
        return next_epoch

    def get_context(self, request, *args, **kwargs):
        """
        Adds previous_epoch and next_epoch to the template context.

        This method is called whenever the template for this page is rendered.
        It adds the previous and next epoch pages to the context, allowing the template to display them.

        Args:
            request (HttpRequest): The request object.
            *args: Additional positional arguments.
            **kwargs: Additional keyword arguments.

        Returns:
            dict: The updated context dictionary.
        """
        context = super().get_context(request, *args, **kwargs)
        context["previous_epoch"] = self.get_previous_epoch()
        context["next_epoch"] = self.get_next_epoch()
        return context
