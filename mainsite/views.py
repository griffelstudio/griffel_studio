from django.shortcuts import render
from . import models
from django.shortcuts import redirect
from django.views.generic import View
from django.core.mail import send_mail
from django.core.mail import EmailMessage
from django.http import HttpResponse


class Index(View):
    def get(self, request):
        return render(request, 'mainsite/index.html')

class Products(View):
    def get(self, request):
        return render(request, 'mainsite/products.html')

class News(View):
    def get(self, request):
        return render(request, 'mainsite/news.html')

class Team(View):
    def get(self, request):
        return render(request, 'mainsite/team.html')

class Exporter(View):
    def get(self, request):
        return render(request, 'mainsite/exporter.html')
class Wmrx(View):
    def get(self, request):
        return render(request, 'mainsite/wmrx.html')
class Exporter_api(View):
    def get(self, request):
        return render(request, 'mainsite/exporter_api.html')

class Contacts(View):
    def get(self, request):
        return render(request, 'mainsite/contacts.html')

class Privacy(View):
    def get(self, request):
        return render(request, 'mainsite/privacy_policy.html')
class Privacy_mobile(View):
    def get(self, request):
        return render(request, 'mainsite/mobile_apps_privacy_policy.html')

def formsend(request):
    if request.method == "POST":
        send_mail('message from {} email: {}'.format(request.POST['name'],request.POST['email'] ),request.POST['message'],'contact@griffelstudio.com' ,
        ['contact@griffelstudio.com'], fail_silently=False,)
        return HttpResponse('succes')
