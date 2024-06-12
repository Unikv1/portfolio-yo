from django.urls import path
from layout.views import base

urlpatterns = [
    path('', base, name='base')
]