from django.contrib import admin
from .models import Dog 

# Register the model to make it visible in the admin panel
admin.site.register(Dog)