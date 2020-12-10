from django.urls import path
from . import views
from .views import Index,Products,Contacts,Exporter,Exporter_api,form,Privacy,Privacy_mobile

urlpatterns = [
    path('', Index.as_view(), name='index_url'),
    path('products/', Products.as_view(), name='products_url'),
    path('products/exporter/', Exporter.as_view(), name='exporter_url'),
    path('products/exporter_api/', Exporter_api.as_view(), name='exporter_api_url'),
    path('contacts/', Contacts.as_view(), name='contacts_url'),
    path('form/', views.form, name='form_url'),
    path('privacy_policy/', Privacy.as_view(), name='privacy_url'),
    path('mobile_apps_privacy_policy/', Privacy_mobile.as_view(), name='mobile_privacy_url'),
]
