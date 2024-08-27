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
    user_state = request.user.is_superuser
    
    # Check if the language exists and is valid
    if language:
        try:
            language = int(language)  # Ensure it's an integer
            results = Project.objects.filter(languages__pk__in=[language]).order_by('title')
        except ValueError:
            results = Project.get_all_projects()  # Fallback to all projects if there's an issue with language
    else:
        results = Project.get_all_projects()

    context = {
        'results': results,
        'user_state': user_state
    }

    return render(request, 'partials/search-results.html', context)
