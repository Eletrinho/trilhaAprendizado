'use client'
import { useState } from 'react'
import RadioInput from './RadioInput'

export default function SubSkillForm({ skillId, onSubSkillSubmit }) {
    
    const [subSkillData, setSubSkillData] = useState({
        name: '',
        description: '',
        confidence: null,
        skill: skillId
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setSubSkillData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubSkillSubmit(subSkillData)
        setSubSkillData({
            name: '',
            description: '',
            confidence: null,
            skill: skillId
        })
    }

    return (
        <div className='container bg-light bg-gradient p-4 rounded-1 mt-4'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label' htmlFor='name'>Nome da SubHabilidade</label>
                    <input className='form-control' id="name" name="name" value={subSkillData.name} onChange={handleChange} />
                </div>
                <label className='form-label' htmlFor='description'>Descrição</label>
                <textarea className='form-control' id="description" name="description" value={subSkillData.description} onChange={handleChange} />
                <div>
                    Confiança sobre o assunto <br />
                    <RadioInput option={{ 'id': 1, 'option': 'Aprendi muito pouco' }} onChange={handleChange} />
                    <RadioInput option={{ 'id': 2, 'option': 'Aprendi pouco' }} onChange={handleChange} />
                    <RadioInput option={{ 'id': 3, 'option': 'Aprendi mais ou menos' }} onChange={handleChange} />
                    <RadioInput option={{ 'id': 4, 'option': 'Aprendi quase tudo' }} onChange={handleChange} />
                    <RadioInput option={{ 'id': 5, 'option': 'Aprendi tudo' }} onChange={handleChange} />
                </div>
                <button className='btn btn-outline-primary mt-2' type='submit'>Submit</button>
            </form>
        </div>
    )
}