import { useState } from 'react'

function App() {
  const [odontologo,  setOdontologo] = useState({nombre: null, apellido: null, matricula: null })

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [code, setCode] = useState("")

  //* Funciones de validación de input

  //validar apellido

  const handlerName = (event) => {
    const name = event.target.value;
    const regex = /
  }

  const handlerLastName = (e) => {}

  const handlerCode= (e) => {}
  return (
    <>
     <h1>Formulario</h1>

     <form>
        <input onChange={handlerName} type="text" name='name' autoComplete='firstname' required/>
        <input onChange={handlerLastName} type="text" name='lastname' autoComplete='lastname' required/>
        <input onChange={handlerCode} type="text" name='code' required/>

        <button type='submit'>Enviar</button>
     </form>
    </>
  )
}

export default App
