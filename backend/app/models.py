from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Skill(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField()
    confidence_about = models.PositiveSmallIntegerField(validators=[
                MaxValueValidator(5),
                MinValueValidator(1)])

    def __str__(self):
        return self.name

class SubSkill(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)

    name = models.CharField(max_length=64)
    description = models.TextField()
    confidence_about = models.PositiveSmallIntegerField(validators=[
                MaxValueValidator(5),
                MinValueValidator(1)])

    def __str__(self):
        return self.name