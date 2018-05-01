from rest_framework import serializers
from .models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'name', 'email', 'password', 'phone', 'created_at', 'viewed_at', 'modified_at')
