"use client"
import { useState, useEffect } from 'react'
import SkillForm from './SkillForm'
import SkillAccordion from './SkillAccordion'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'

export default function Skills() {
  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    try {
      const [skillsResponse, subSkillsResponse] = await Promise.all([
        fetch('http://localhost:8000/api/skill/').then(response => response.json()),
        fetch('http://localhost:8000/api/subskill/').then(response => response.json())
      ]);

      const updatedDataList = skillsResponse.map(skill => {
        const relatedSubskills = subSkillsResponse.filter(subskill => subskill.skill === skill.id);
        return { ...skill, subskills: relatedSubskills };
      });

      setDataList(updatedDataList);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleSubmitForm = async (formData) => {
    try {
      await axios.post('http://localhost:8000/api/skill/', formData)
      fetchData()
    }
    catch (err) {
      console.log('Erro: ', err)
    }
  }

  const handleSubSkillSubmitSuccess = () => {
    fetchData()
  }

  useEffect(() => {
    fetchData();
  }, []);

  const rows = dataList.map(skill => (
    <SkillAccordion
      key={skill.id}
      id={skill.id}
      name={skill.name}
      description={skill.description}
      confidence={skill.confidence_about}
      subskills={skill.subskills}
      successSubmit={handleSubSkillSubmitSuccess}
    />
  ));

  return (
    <>
      <SkillForm onSubmit={handleSubmitForm} />
      <div className='container'>
        <Accordion alwaysOpen>
          {rows}
        </Accordion>
      </div>
    </>
  )
}
