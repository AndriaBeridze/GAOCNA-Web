from django.shortcuts import render
from django.http import JsonResponse
from .models import *

# Create your views here.
def home_ka(request):
    return render(request, 'ka/home-ka.html', {
        'recent_news': News.objects.all().order_by('-date')[:5]
    })
    


def news_ka_json(request):
    news = News.objects.all().order_by('-date')
    news_list = list(news.values('id', 'title', 'date', 'thumbnail', 'content'))
    
    for item in news_list:
        item['thumbnail'] = News.objects.get(id = item['id']).thumbnail.url
        item['date'] = item['date'].strftime('%d/%m/%Y')
        
    return JsonResponse(news_list, safe=False)