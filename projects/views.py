import os
from django.shortcuts import get_object_or_404, render
from django.contrib.auth.decorators import user_passes_test
from projects.models import Project, Image, Languages

from projects.forms import ProjectForm

# Create your views here.

def view_project(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    images = Image.objects.filter(project=project) 
    image_urls = [image.image.url for image in images] 
    first_image = image_urls[0] if image_urls else None
    description = str(project.description).replace("\\n", "\n")
    context = {
        'project': project,
        'images': image_urls,
        'first_image': first_image,
        'test': description
        
    }
    return render(request, 'view-project.html', context)

def superuser_required(function):
    return user_passes_test(lambda u: u.is_superuser)(function)


@superuser_required
def add_project(request):
    svgs = Languages.get_all_languages()
    
    if request.method == "POST":
        form = ProjectForm(request.POST, request.FILES)
        if not request.FILES.getlist('images'):
            return render(request, 'add-project.html', {'form': form, 'svgs': svgs, 'error': 'Please upload at least one image.'})
        if form.is_valid():
            project = form.save()
            
            for image in request.FILES.getlist('images'):
                Image.objects.create(project=project, image=image)
            
            selected_languages = request.POST.getlist('languages')
            for language_id in selected_languages:
                language = Languages.objects.get(id=language_id)
                project.languages.add(language)
            
            return render(request, 'add-project.html', {'form': form, 'success': True, 'svgs': svgs})
    else:
        form = ProjectForm()
    
    return render(request, 'add-project.html', {'form': form, 'svgs': svgs})


@superuser_required
def edit_project(request, project_id):
    project = get_object_or_404(Project, id=project_id)
    svgs = Languages.get_all_languages()
    
    if request.method == "POST":
        form = ProjectForm(request.POST, request.FILES, instance=project)
        
        if form.is_valid():
            form.save()

            if request.FILES.getlist('images'):
                for image in request.FILES.getlist('images'):
                    Image.objects.create(project=project, image=image)
            
            selected_languages = request.POST.getlist('languages')
            project.languages.clear()
            for language_id in selected_languages:
                language = Languages.objects.get(id=language_id)
                project.languages.add(language)
            
            return render(request, 'edit-project.html', {'form': form, 'success': True, 'svgs': svgs, 'project': project})
    else:
        form = ProjectForm(instance=project)
    
    return render(request, 'edit-project.html', {'form': form, 'svgs': svgs, 'project': project})
