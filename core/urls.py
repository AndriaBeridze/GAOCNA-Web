from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

app_name = 'core'
urlpatterns = [
    path('', views.home_ka, name = 'home_ka'),
    path('news/ka/json', views.news_ka_json, name = 'news_ka_json'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)