from django.urls import path
from . import views
from .views import Index,Products,Contacts,form

urlpatterns = [
    path('', Index.as_view(), name='index_url'),
    path('products/', Products.as_view(), name='products_url'),
    path('contacts/', Contacts.as_view(), name='contacts_url'),
    path('form/', views.form, name='form_url'),

]
