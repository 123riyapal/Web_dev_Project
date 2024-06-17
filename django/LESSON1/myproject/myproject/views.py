# from django.http import HttpResponse
from django.shortcuts import render

def HomePage(request):
    # return HttpResponse("Hey,I am Home Page,What about You?")
    return render(request,'Home.html')

def About(request):
    # return HttpResponse("Hey , I am About Page")
    return render(request,'About.html')
