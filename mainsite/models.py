from django.db import models
from django.utils import timezone

# Create your models here.
class Order(models.Model):
    name = models.CharField(max_length=250)
    phone = models.CharField(max_length=250)
    email = models.EmailField(max_length=250)
    publish = models.DateTimeField(default=timezone.now)
