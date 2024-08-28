from django import forms
from projects.models import Project
from django_ckeditor_5.widgets import CKEditor5Widget

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = [
            "title",
            "description",
            "languages"
        ]
        widgets = {
            "title": forms.TextInput(attrs={"placeholder": "Title..."}),
            "description": CKEditor5Widget(attrs={"class": "django_ckeditor_5"}, config_name="description"),
            "languages": forms.CheckboxSelectMultiple(),
        }