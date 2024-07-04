from django.shortcuts import render
from projects.models import Project
# Create your views here.

def view_project(request, project_id):
    project = Project.objects.filter(pk=project_id)[0]
    context = {
        'project': project
    }
    return render(request, 'view-project.html', context)