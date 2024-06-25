from django.db import models

# Createyour models here.
class Project(models.Model):
    image = models.CharField(max_length=100, default="placeholder.svg")
    title = models.CharField(max_length=100)
    description = models.TextField()
    languages = models.ManyToManyField('Languages', related_name='languages')
    
    def get_all_projects():
        return Project.objects.all()

    def __str__(self):
        return self.title
    
class Languages(models.Model):
    name = models.CharField(max_length=100)
    svg = models.CharField(max_length=100, default="placeholder.svg")

    def get_all_languages():
        return Languages.objects.all()

    def __str__(self):
        return self.name