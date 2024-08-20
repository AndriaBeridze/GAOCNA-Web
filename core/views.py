from django.shortcuts import render
from .models import *

# Create your views here.
def home_ka(request):
    return render(request, 'ka/home-ka.html', {
        'recent_news': News.objects.all().order_by('-date')[:5]
    })