from django.urls import path
from layout.views import base, home

urlpatterns = [
    path('', home, name='home'),
]