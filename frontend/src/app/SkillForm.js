'use client'
import { useState } from 'react'
import RadioInput from "./RadioInput.js"
export default function SkillForm({ onSubmit }) {
    const [inputs, setInputs] = useState({
      name: '',
      description: '',
      confidence: null,
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target
      setInputs(values => ({ ...values, [name]: value }))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      onSubmit(inputs)
      setInputs(values => ({ ...values,
        name: '',
        description: '',
      }))
  
    }
    return (
      <div className='container bg-light bg-gradient p-4 rounded-1'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='form-label' htmlFor='name'>Nome da Habilidade</label>
            <input className='form-control' id="name" name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <label className='form-label' htmlFor='description'>Descrição</label>
          <textarea className='form-control' id="description" name="description" value={inputs.description} onChange={handleChange} />
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