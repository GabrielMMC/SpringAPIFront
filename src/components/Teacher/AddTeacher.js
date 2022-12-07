import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'

const AddTeacher = ({data}) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [birth, setBirth] = React.useState('')
  const [cpf, setCpf] = React.useState('')

  const history = useNavigate()

  React.useEffect(() => {
    if(data){
        const date = new Date(data.birth).getDate()
        const month = new Date(data.birth).getMonth()
        const year = new Date(data.birth).getFullYear()

      setName(data.name)
      setEmail(data.email)
      setBirth(`${year}-${month}-${date}`)
      setCpf(data.cpf)
    }
  }, [])

  const save = () => {
    if(data){
      fetch(`${URL}/teacher/v1`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, birth, email, cpf, id: data.id })
      }).then(async (response) => {
        let resp = await response.json()
        if(resp) history('teacher/list')
      })
    }else{
      fetch(`${URL}/teacher/v1`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, birth, email, cpf })
      }).then(async (response) => {
        let resp = await response.json()
        if(resp) history('teacher/list')
      })
    }
  }
  return (
    <div className='vh-100' style={{ backgroundColor: '#eaeaea' }}>
      <NavBar />
      <div className='container bg-white rounded mt-5 p-5'>
        <div className='row'>
          <h6 className='display-6'>{data ? 'Editar Professor' : 'Cadastro de Professor'}</h6>
          <div className='col-6 my-3'>
            <TextField label='Nome' fullWidth value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <TextField label='Email' fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <label>Nascimento</label>
            <input type='date' className='form-control' value={birth} onChange={(e) => setBirth(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <TextField label='CPF' fullWidth value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </div>
          <div className='d-flex'>
            <Button className='ms-auto' variant='contained' onClick={save}>Salvar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTeacher
