from django.db import models
from django.core.validators import MinLengthValidator
from django.utils import timezone


class User(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=30)
    password = models.CharField(max_length=64, validators=[MinLengthValidator(8)])
    phone = models.CharField(max_length=9, validators=[MinLengthValidator(9)])
    created_at = models.DateTimeField(editable=False)
    viewed_at = models.DateTimeField(blank=True, null=True, editable=False)
    modified_at = models.DateTimeField(blank=True, null=True, editable=False)

    def save(self, *args, **kwargs):
        # on save, update timestamps
        if not self.id:
            self.created_at = timezone.now()
        else:
            self.modified_at = timezone.now()
        self.viewed_at = timezone.now()
        return super(User, self).save(*args, **kwargs)

    def __str__(self):
        return self.name
