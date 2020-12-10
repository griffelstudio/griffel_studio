from django.shortcuts import render
from . import models
from django.shortcuts import redirect
from django.views.generic import View
from django.core.mail import send_mail
from django.core.mail import EmailMessage


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

class Privacy(View):
    def get(self, request):
        return render(request, 'mainsite/privacy_policy.html')
class Privacy_mobile(View):
    def get(self, request):
        return render(request, 'mainsite/mobile_apps_privacy_policy.html')

def form(request,string = '#'):
    if request.method == "POST":
        # user = models.Order.objects.create(name=request.POST['name'],
        # email=request.POST['email'],
        # message=request.POST['message'],
        # )

        # msg = EmailMessage(
        #   subject=u'Тема письма',
        #   body = request.POST['message'],
        #   from_email=request.POST['email'],
        #   to=('Nicolay022@yandex.ru',),
        #   headers={'From': request.POST['email']}
        # )
        # msg.content_subtype = 'html'
        # msg.send()
        send_mail('message from {} email: {}'.format(request.POST['name'],request.POST['email'] ),request.POST['message'],'contact@griffelstudio.com' ,
        ['contact@griffelstudio.com'], fail_silently=False,)
        return render(request, 'mainsite/index.html')
