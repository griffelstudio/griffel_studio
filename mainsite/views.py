from django.shortcuts import render
from . import models
from django.shortcuts import redirect
from django.views.generic import View
from django.core.mail import send_mail


class Index(View):
    def get(self, request):
        return render(request, 'mainsite/index.html')

class Products(View):
    def get(self, request):
        return render(request, 'mainsite/products.html')

class Exporter(View):
    def get(self, request):
        return render(request, 'mainsite/exporter.html')
class Exporter_api(View):
    def get(self, request):
        return render(request, 'mainsite/exporter_api.html')

class Contacts(View):
    def get(self, request):
        return render(request, 'mainsite/contacts.html')

def form(request,string = '#'):
    if request.method == "POST":
        user = models.Order.objects.create(name=request.POST['name'],
        email=request.POST['email'],
        message=request.POST['message'],
        )
        # send_mail('order',request.POST['phone'],request.POST['email'],
        # ['nicolay.krischenovich@gmail.com'], fail_silently=False,)
        return render(request, 'mainsite/index.html')
