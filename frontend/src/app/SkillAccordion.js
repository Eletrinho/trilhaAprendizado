'use client'
import Accordion from 'react-bootstrap/Accordion';

export default function SkillAccordion({ id, name, description, confidence, subskill = [] }) {
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
                <p>{description}</p>
                <p>{confidence}</p>
                {subskill.length > 0 &&
                    <Accordion>
                        {subskill.map((skill) => (
                            <Accordion.Item eventKey={skill.name} key={subskill.indexOf(skill)}>
                                <Accordion.Header> {skill.name}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{skill.description}</p>
                                    <p>{skill.confidence}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                }
            </Accordion.Body>
        </Accordion.Item>
    )
}