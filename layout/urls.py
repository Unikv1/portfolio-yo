from django.urls import path
from layout.views import base, home, search

urlpatterns = [
    path('', home, name='home'),
    path('/search/', search, name='search'),

]