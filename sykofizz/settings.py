"""
Django settings for sykofizz project.

Generated by 'django-admin startproject' using Django 5.0.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

import os
import dj_database_url
from django.conf.global_settings import STORAGES
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get(
    "SECRET_KEY", "django-insecure-9&uy_h53c!3z2qce@_r%u*d@bwgtttpk)-@3^xy29-th!+xrjx"
)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG", False)
WAGTAIL_CACHE = os.environ.get("WAGTAIL_CACHE", not DEBUG)

if DEBUG == False:
    ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "").split(",")
    CSRF_TRUSTED_ORIGINS = os.environ.get("CSRF_TRUSTED_ORIGINS", "").split(",")
    USE_X_FORWARDED_HOST = True
else:
    ALLOWED_HOSTS = ["*"]
    CSRF_TRUSTED_ORIGINS = ["https://*.local", "http://*.local"]

# Application definition

INSTALLED_APPS = [
    "base",
    "home",
    "debug_toolbar",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "compressor",
    "dbbackup",  # django-dbbackup
    "wagtail.contrib.forms",
    "wagtail.contrib.redirects",
    "wagtail.contrib.settings",
    "wagtail.embeds",
    "wagtail.sites",
    "wagtail.users",
    "wagtail.snippets",
    "wagtail.documents",
    "wagtail.images",
    "wagtail.search",
    "wagtail.admin",
    "wagtail",
    "modelcluster",
    "taggit",
    "wagtailcache",
    "wagtailseo",
    "plausible",
    "plausible.contrib.wagtail",
    # 'wagtail.api.v2',
    # "rest_framework",
]

MIDDLEWARE = [
    "wagtailcache.cache.UpdateCacheMiddleware",  # wagtail cache
    "debug_toolbar.middleware.DebugToolbarMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "wagtail.contrib.redirects.middleware.RedirectMiddleware",
    "wagtailcache.cache.FetchFromCacheMiddleware",  # wagtail cache
]

ROOT_URLCONF = "sykofizz.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(BASE_DIR, "templates"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "wagtail.contrib.settings.context_processors.settings",
            ],
        },
    },
]

WSGI_APPLICATION = "sykofizz.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.config(
        default=os.environ.get("DATABASE_URL"),
        conn_max_age=600,
        conn_health_checks=True,
    )
}


# django-dbbackup settings
DBBACKUP_STORAGE = "storages.backends.s3.S3Storage"

DBBACKUP_STORAGE_OPTIONS = {
    "access_key": os.environ.get("DBBACKUP_S3_ACCESS_KEY_ID"),
    "secret_key": os.environ.get("DBBACKUP_S3_SECRET_KEY"),
    "bucket_name": os.environ.get("DBBACKUP_S3_BUCKET_NAME"),
    "endpoint_url": os.environ.get("DBBACKUP_S3_ENDPOINT_URL"),
    "region_name": os.environ.get("DBBACKUP_S3_REGION_NAME", "us-east-1"),
    "default_acl": "private",
}

# CACHE
if DEBUG:
    CACHES = {
        "default": {
            "BACKEND": "django.core.cache.backends.dummy.DummyCache",
        }
    }
else:
    CACHES = {
        "default": {
            "BACKEND": "django.core.cache.backends.redis.RedisCache",
            "LOCATION": os.environ.get("REDIS_URL", "redis://127.0.0.1:6379/1"),
            "TIMEOUT": 60 * 60 * 24 * 7,  # 1 week
        }
    }

# Email
EMAIL_BACKEND = "anymail.backends.resend.EmailBackend"
ANYMAIL = {
    "RESEND_API_KEY": os.environ.get("RESEND_API_KEY"),
}

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "assets"),
]
STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_HOST = os.environ.get("DJANGO_STATIC_HOST", "")
STATIC_URL = STATIC_HOST + "/static/"

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# Storage Backends
STORAGES["default"] = {
    "BACKEND": "storages.backends.s3.S3Storage",
    "OPTIONS": {
        "access_key": os.environ.get("MEDIA_S3_ACCESS_KEY_ID"),
        "secret_key": os.environ.get("MEDIA_S3_SECRET_KEY"),
        "bucket_name": os.environ.get("MEDIA_S3_BUCKET_NAME"),
        "region_name": os.environ.get("MEDIA_S3_REGION_NAME", "us-east-1"),
        "endpoint_url": os.environ.get("MEDIA_S3_ENDPOINT_URL"),
        "use_ssl": os.environ.get("MEDIA_S3_USE_SSL", True) == "True",
        "addressing_style": "path",
        "default_acl": "private",
    },
}

WAGTAIL_SITE_NAME = "sykofizz"
WAGTAILADMIN_BASE_URL = "https://sykofizz.com"
