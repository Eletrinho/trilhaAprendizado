'use client'
import Accordion from 'react-bootstrap/Accordion';
import StarRating from './StarRating';
import SubSkillForm from './SubSkillForm'
import axios from 'axios'

export default function SkillAccordion({ id, name, description, confidence, subskills = [], successSubmit }) {
    
    const handleSubSkillSubmit = async (subSkillData) => {
        try {
            await axios.post('http://localhost:8000/api/subskill/', subSkillData)
            successSubmit()
        }
        catch (err){
            console.log(err)
        }
    }
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
                <SubSkillForm skillId={id} onSubSkillSubmit={handleSubSkillSubmit}/>
            </Accordion.Body>
        </Accordion.Item>
    )
}