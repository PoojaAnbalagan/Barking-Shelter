from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

class Dog(models.Model):
    DOG_TYPE_CHOICES = [
        ('withOwner', 'With Owner'),
        ('stray', 'Stray Dog'),
    ]
    
    dogID = models.CharField(max_length=50, unique=True)
    dogName = models.CharField(max_length=100)
    age = models.PositiveIntegerField(validators=[MinValueValidator(0)])
    breed = models.CharField(max_length=100)
    dogType = models.CharField(max_length=20, choices=DOG_TYPE_CHOICES)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='dog_images/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="dogs")
    ownerName = models.CharField(max_length=100, blank=True, null=True)
    ownerPhone = models.CharField(max_length=20, blank=True, null=True)
    ownerEmail = models.EmailField(blank=True, null=True)

    def __str__(self):
        return f"{self.dogName} ({self.dogID})"