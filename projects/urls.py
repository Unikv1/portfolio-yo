from django.urls import path
from projects import views


urlpatterns = [
    path('add/', views.add_project, name='add-project'),
    path('<project_id>/', views.view_project, name='view-project'),
]
