from django.db import models

# Createyour models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    languages = models.ManyToManyField('Languages', related_name='languages')
    
    def get_all_projects():
        return Project.objects.all()
    

    def get_all_projects_by_language(language):
        query = Project.objects.filter(languages__name=language)

        print(query)
        return query

    def get_all_images():
        return [project.image for project in Project.objects.all()]


    def __str__(self):
        return self.title
    
class Languages(models.Model):
    name = models.CharField(max_length=100)
    svg = models.CharField(max_length=100, default="placeholder.svg")
    expertise_level = models.IntegerField(default=1, choices=[(i, i) for i in range(1, 6)])

    def get_all_languages():
        return Languages.objects.all()

    def __str__(self):
        return self.name
    
class Image(models.Model):
    image = models.ImageField(upload_to='images/')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def get_all_images():
        return Image.objects.all()

    def get_image_by_project(project):
        return Image.objects.filter(project=project)
