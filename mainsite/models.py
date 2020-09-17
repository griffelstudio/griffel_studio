from django.db import models
from django.utils import timezone

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=250)
    message = models.TextField(max_length=3000,default='')
    email = models.EmailField(max_length=250)
    publish = models.DateTimeField(default=timezone.now)
