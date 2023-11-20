"use client"
import { useEffect, useState } from 'react'
import RadioInput from "./RadioInput.js"

export default function SkillForm() {
    const [confidence, setConfidence] = useState("")
    // confidence está sendo mudado, agr tem q fazer o submit funcionar
  return (
    <>
      <form>
        <label><input id="skill" /></label> <br />
        <label><textarea id="description" /></label> <br />
        <div>
          Confiança sobre o assunto <br />
          <RadioInput option={{'id': 1, 'option': 'Aprendi muito pouco'}} onChange={setConfidence} />
          <RadioInput option={{'id': 2, 'option': 'Aprendi pouco'}} onChange={setConfidence} />
          <RadioInput option={{'id': 3, 'option': 'Aprendi mais ou menos'}} onChange={setConfidence} />
          <RadioInput option={{'id': 4, 'option': 'Aprendi quase tudo'}} onChange={setConfidence} />
          <RadioInput option={{'id': 5, 'option': 'Aprendi tudo'}} onChange={setConfidence} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
