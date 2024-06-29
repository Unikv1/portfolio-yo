from django.shortcuts import render
from projects.models import Languages, Project

def base(request):
    return render(request, 'base.html')

def home(request):
    all_projects = Project.get_all_projects()
    all_languages = Languages.get_all_languages()

    context = {
        'projects': all_projects,
        'languages': all_languages
    }

    return render(request, 'home.html', context=context)

def search(request):
    language = request.GET.get('language')
    projects = Project.get_all_projects_by_language(language)

    context = {
        'projects': projects,
        'language': language
    }

    return render(request, 'search.html', context=context)