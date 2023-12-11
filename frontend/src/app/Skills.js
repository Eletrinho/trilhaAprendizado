"use client"
import { useEffect, useState } from 'react'
import SkillAccordion from './SkillAccordion'
import Accordion from 'react-bootstrap/Accordion'
import axios from 'axios'

export default function Skills() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Primeira requisição para obter a lista de objetos e os dados adicionais
        const [skillsResponse, subSkillsResponse] = await Promise.all([
          fetch('http://localhost:8000/api/skill/').then(response => response.json()),
          fetch('http://localhost:8000/api/subskill/').then(response => response.json())
        ]);

        // Mapear skills e criar uma lista de subskills para cada skill
        const updatedDataList = skillsResponse.map(skill => {
          const relatedSubskills = subSkillsResponse.filter(subskill => subskill.skill === skill.id);
          return { ...skill, subskills: relatedSubskills };
        });

        // Atualizar o estado com os dados obtidos
        setDataList(updatedDataList);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []); // O array vazio como segundo argumento garante que o useEffect será executado apenas uma vez, equivalente a componentDidMount

  const rows = dataList.map(skill => (
    <SkillAccordion
      key={skill.id}
      id={skill.id}
      name={skill.name}
      description={skill.description}
      confidence={skill.confidence_about}
      subskills={skill.subskills} // Agora, subskills é uma lista de objetos
    />
  ));

  return (

    <Accordion alwaysOpen>
      {rows.map((row) => (
        <span key={rows.indexOf(row)}>{row}</span>
      ))}
    </Accordion>

  )
}