# Generated by Django 4.2.13 on 2024-06-25 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_rename_image_url_project_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Languages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('svg', models.CharField(default='placeholder.svg', max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='project',
            name='language_svg',
        ),
        migrations.AddField(
            model_name='project',
            name='languages',
            field=models.ManyToManyField(related_name='languages', to='projects.languages'),
        ),
    ]