from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Book

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} # no one can read the password, it can on
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ["id", "title", "content", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}} # no one can change who the author is, we should only see them
        