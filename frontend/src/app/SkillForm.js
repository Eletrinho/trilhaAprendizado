"use client"
import { useState } from 'react'
import RadioInput from "./RadioInput.js"

export default function SkillForm() {
    const [inputs, setInputs] = useState()
    const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value
      setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      // console.log(inputs)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label><input name="skill" onChange={handleChange}/></label> <br />
        <label><textarea name="description" onChange={handleChange}/></label> <br />
        <div>
          Confiança sobre o assunto <br />
          <RadioInput option={{'id': 1, 'option': 'Aprendi muito pouco'}} onChange={handleChange} />
          <RadioInput option={{'id': 2, 'option': 'Aprendi pouco'}} onChange={handleChange} />
          <RadioInput option={{'id': 3, 'option': 'Aprendi mais ou menos'}} onChange={handleChange} />
          <RadioInput option={{'id': 4, 'option': 'Aprendi quase tudo'}} onChange={handleChange} />
          <RadioInput option={{'id': 5, 'option': 'Aprendi tudo'}} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
