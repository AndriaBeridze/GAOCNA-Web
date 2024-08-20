from django.db import models

# Create your models here.
class News(models.Model):
    thumbnail = models.ImageField(upload_to='news_thumbnails')
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "News"