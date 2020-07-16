from django.shortcuts import render
from . import models
from django.shortcuts import redirect
from django.views.generic import View
from django.core.mail import send_mail


class Index(View):
    def get(self, request):
        return render(request, 'mainsite/index.html')
