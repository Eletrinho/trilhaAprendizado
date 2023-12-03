import SkillAccordion from './SkillAccordion'
import Accordion from 'react-bootstrap/Accordion';

export default function Skills() {
    const skills = [{
        'id': 1,
        'name': "Python",
        'description': 'linguagem de programação',
        'confidence': 5,
        'subskill': [{
            'name': "Django",
            "description": "Framework",
            "confidence": 4,
        }, {
            'name': "Flask",
            "description": "Framework",
            "confidence": 3,
        }],
    },
    {
        'id': 2,
        'name': "JavaScript",
        'description': 'linguagem de programação 2',
        'confidence': 3
    },
    {
        'id': 3,
        'name': "Java",
        'description': 'linguagem de programação 3',
        'confidence': 2
    }]

    const rows = []

    for (let skill of skills) {
        if (skill.subskill){
            rows.push(<SkillAccordion id={skill.id} name={skill.name} description={skill.description} confidence={skill.confidence} subskill={skill.subskill} />)
        } else {
            rows.push(<SkillAccordion id={skill.id} name={skill.name} description={skill.description} confidence={skill.confidence} />)
        }
            
    }

    return (
        <Accordion alwaysOpen>
            {rows.map((row) => (
                <span key={rows.indexOf(row)}>{row}</span>
            ))}
        </Accordion>
    )
}