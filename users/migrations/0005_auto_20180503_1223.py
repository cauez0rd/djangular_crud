# Generated by Django 2.0.4 on 2018-05-03 12:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20180502_0048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='viewed_at',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
