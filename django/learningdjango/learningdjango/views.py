from django.http import HttpResponse;
from django.shortcuts import render

def home(request): 
    # return HttpResponse("Hello world.You are At Django Home page");
    return render(request,'index.html');
def About(request): 
    return HttpResponse("Hello world.You are At Django About page");
def Contact(request): 
    return HttpResponse("Hello world.You are At Django Contact page");
