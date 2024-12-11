from django.conf import settings


def env_vars(request):
    return {"REMARK42": settings.REMARK42}
