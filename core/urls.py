from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'core'
urlpatterns = [
    path('', views.home_ka, name = 'home_ka')   
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)