# Generated by Django 3.0 on 2023-08-24 01:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='data_created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]