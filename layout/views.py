from django.shortcuts import render
from projects.models import Languages, Project, Image
from django.views.decorators.csrf import csrf_protect

def base(request):
    return render(request, 'base.html')

def home(request):
    all_projects = Project.get_all_projects()
    all_languages = Languages.get_all_languages().order_by('name')
    all_images = Image.get_all_images()
    context = {
        'projects': all_projects,
        'languages': all_languages,
        'images': all_images
    }

    return render(request, 'home.html', context=context)


def search_language(request):
    language = request.POST.get('search')
    if language:
        results = Project.objects.filter(languages__pk__in=[language]).order_by('title')

    else:
        results = Project.get_all_projects()

    context = {
        'results': results
    }  

    return render(request, 'partials/search-results.html', context)

