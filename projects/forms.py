from django import forms
from projects.models import Project

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
            "description": forms.TextInput(attrs={"placeholder": "Description..."}),
            "languages": forms.CheckboxSelectMultiple(),
        }