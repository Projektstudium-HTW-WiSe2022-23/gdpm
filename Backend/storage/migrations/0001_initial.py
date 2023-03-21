# Generated by Django 4.1.3 on 2023-03-21 20:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Constant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='GDPM_Model',
            fields=[
                ('id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('title', models.CharField(default='default_model', max_length=20)),
                ('body', models.JSONField(default=dict)),
            ],
        ),
        migrations.CreateModel(
            name='PortSpecification',
            fields=[
                ('id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=29)),
                ('type', models.CharField(max_length=29)),
                ('upper', models.CharField(max_length=29)),
                ('lower', models.CharField(max_length=29)),
                ('upperInclusive', models.BooleanField()),
                ('lowerInclusive', models.BooleanField()),
                ('optional', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Support',
            fields=[
                ('id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=29)),
                ('upper', models.CharField(max_length=29)),
                ('lower', models.CharField(max_length=29)),
                ('upperInclusive', models.BooleanField()),
                ('lowerInclusive', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Discrete',
            fields=[
                ('distType', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('url', models.URLField()),
                ('image_url', models.URLField()),
                ('input', models.ManyToManyField(blank=True, to='storage.portspecification')),
                ('output', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='storage.support')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Continuous',
            fields=[
                ('distType', models.CharField(max_length=30)),
                ('name', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('url', models.URLField()),
                ('image_url', models.URLField()),
                ('input', models.ManyToManyField(blank=True, to='storage.portspecification')),
                ('output', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='storage.support')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
