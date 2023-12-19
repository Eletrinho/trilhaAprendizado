'use client'
import Accordion from 'react-bootstrap/Accordion';
import StarRating from './StarRating';
import SubSkillForm from './SubSkillForm';
import axios from 'axios';

export default function SkillAccordion({ id, name, description, confidence, subskills = [], successSubmit, onDelete }) {

    const handleSubSkillSubmit = async (subSkillData) => {
        try {
            await axios.post('http://localhost:8000/api/subskill/', subSkillData);
            successSubmit();
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubSkillDelete = (subSkillId) => {
        onDelete(subSkillId, false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <Accordion.Item eventKey={id}>
            <Accordion.Header>{name}</Accordion.Header>
            <Accordion.Body>
                <div className='border rounded p-4'>
                    <div className='row justify-content-between'>
                        <div className='col-8'>
                            <p>{description}</p>
                            <StarRating rating={confidence} />
                        </div>
                        <div className='col-4'>
                            <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
                {subskills.length > 0 && (
                    <Accordion>
                        {subskills.map((skill) => (
                            <Accordion.Item eventKey={skill.name} key={skill.id}>
                                <Accordion.Header>{skill.name}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='border rounded p-4'>
                                        <div className='row justify-content-between'>
                                            <div className='col-8'>
                                                <p>{skill.description}</p>
                                                <StarRating rating={skill.confidence_about} />
                                            </div>
                                            <div className='col-4'>
                                                <button className='btn btn-danger' onClick={() => handleSubSkillDelete(skill.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                )}
                <SubSkillForm skillId={id} onSubSkillSubmit={handleSubSkillSubmit} className='mt-4'/>
            </Accordion.Body>
        </Accordion.Item>
    );
}
