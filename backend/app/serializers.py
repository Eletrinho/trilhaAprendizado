from rest_framework.serializers import ModelSerializer
from .models import Skill, SubSkill

class SkillSerializer(ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class SubSkillSerializer(ModelSerializer):
    class Meta:
        model = SubSkill
        fields = '__all__'