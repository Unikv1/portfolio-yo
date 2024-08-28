from django.contrib import admin
from projects.models import Project, Languages, Image, models
from django_ckeditor_5.widgets import CKEditor5Widget

class ProjectAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditor5Widget(config_name='description')},
    }
    # Add other admin configurations here

admin.site.register(Project, ProjectAdmin)
admin.site.register(Languages)
admin.site.register(Image)


