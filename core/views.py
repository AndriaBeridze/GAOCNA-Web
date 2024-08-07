from django.shortcuts import render

# Create your views here.
def home_ka(request):
    return render(request, 'ka/home-ka.html')