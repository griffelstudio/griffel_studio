from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('publish', 'name',  'phone', 'email',
                    )
    list_filter = ('publish',)
    search_fields = ('name',)
    date_hierarchy = 'publish'
    ordering = ('publish',)
