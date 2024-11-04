"""Init and utils."""
from zope.i18nmessageid import MessageFactory

import logging


PACKAGE_NAME = "sykofizz"

_ = MessageFactory("sykofizz")

logger = logging.getLogger("sykofizz")
