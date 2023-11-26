import SkillAccordion from './SkillAccordion'
import Accordion from 'react-bootstrap/Accordion';

export default function Skills() {
    const skills = [{
        'id': 1,
        'name': "Python",
        'description': 'linguagem de programação',
        'confidence': 5
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
        rows.push(<SkillAccordion id={skill.id} name={skill.name} description={skill.description} confidence={skill.confidence}/>)
    }

    return (
        <Accordion>
            {rows.map((row) => (
                <span key={row.id}>{row}</span>
            ))}
        </Accordion>
    )
}