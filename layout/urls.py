from django.urls import path
from layout import views
from layout.views import base, home

urlpatterns = [
    path('', home, name='home')
]

htmx_urlPatterns = [
    path('search-language/', views.search_language, name='search-language'), 
]

urlpatterns += htmx_urlPatterns