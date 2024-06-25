from django.shortcuts import render
from projects.models import Languages, Project

def base(request):
    return render(request, 'base.html')

def home(request):
    Projects = Project.get_all_projects()
    Language_list = Languages.get_all_languages()
    #left off here

    context = {
        'projects': Projects,
        'languages': Language_list
    }

    return render(request, 'home.html', context=context)