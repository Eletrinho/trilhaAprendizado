'use client'
import Accordion from 'react-bootstrap/Accordion';
import StarRating from './StarRating';

export default function SkillAccordion({ id, name, description, confidence, subskills = [] }) {
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
                <p>{description}</p>
                <StarRating rating={confidence} />
                {subskills.length > 0 &&
                    <Accordion>
                        {subskills.map((skill) => (
                            <Accordion.Item eventKey={skill.name} key={subskills.indexOf(skill)}>
                                <Accordion.Header> {skill.name}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{skill.description}</p>
                                    <StarRating rating={skill.confidence_about} />
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                }
            </Accordion.Body>
        </Accordion.Item>
    )
}