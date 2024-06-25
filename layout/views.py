from django.shortcuts import render
from projects.models import Project, Languages


def base(request):
    return render(request, 'base.html')

def home(request):
    Projects = Project.get_all_projects()

    #left off here

    context = {
        'projects': Projects
    }

    return render(request, 'home.html', context=context)