# Generated by Django 2.0.4 on 2018-05-01 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='modified_at',
            field=models.DateTimeField(blank=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='viewed_at',
            field=models.DateTimeField(blank=True),
        ),
    ]
