'use client'
import Accordion from 'react-bootstrap/Accordion';

export default function SkillAccordion({ id, name, description, confidence }) {
    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
                <p>{description}</p>
                <p>{confidence}</p>
            </Accordion.Body>
        </Accordion.Item>
    )
}