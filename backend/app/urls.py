from django.urls import path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'skill', views.SkillView, 'skill')
router.register(r'subskill', views.SubSkillView, 'subskill')