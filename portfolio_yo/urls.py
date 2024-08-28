from django.contrib import admin
from django.urls import include, path
from portfolio_yo import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('layout.urls')),
    path('project/', include('projects.urls')),
]

urlpatterns += [
    path("ckeditor5/", include('django_ckeditor_5.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT),
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT),
