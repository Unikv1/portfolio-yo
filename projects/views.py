import os
from django.shortcuts import render
from projects.models import Project, Image
# Create your views here.

def view_project(request, project_id):
    project = Project.objects.filter(pk=project_id).first()
    images = Image.objects.filter(project=project)
    
    for image in images:
        image.exists = os.path.exists(image.image.path)
        
    context = {
        'project': project,
        'images': images
    }
    return render(request, 'view-project.html', context)