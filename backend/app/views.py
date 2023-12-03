from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SkillSerializer, SubSkillSerializer
from .models import Skill, SubSkill

# Create your views here.

class SkillView(viewsets.ModelViewSet):
    serializer_class = SkillSerializer
    queryset = Skill.objects.all()

class SubSkillView(viewsets.ModelViewSet):
    serializer_class = SubSkillSerializer
    queryset = SubSkill.objects.all()