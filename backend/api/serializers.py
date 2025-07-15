from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Dog


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class DogSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, required=False)
    
    class Meta:
        model = Dog
        fields = ['id', 'dogID', 'dogName', 'age', 'breed', 'dogType', 
                 'description', 'image', 'created_at', 'updated_at',"author","ownerName","ownerPhone","ownerEmail"]
    
        read_only_fields = ['id', 'created_at', 'updated_at','author']

    def create(self, validated_data):
        # Automatically set the author to the current authenticated user
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)