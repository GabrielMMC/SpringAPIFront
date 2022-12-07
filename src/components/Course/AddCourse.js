import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'

const AddCourse = ({data}) => {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [workload, setWorkload] = React.useState('')

  const history = useNavigate()

  React.useEffect(() => {
    if(data){
      setName(data.name)
      setDescription(data.description)
      setPrice(data.price)
      setWorkload(data.workload)
    }
  }, [])

  const save = () => {
    if(data){
      fetch(`${URL}/course/v1`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, workload, id: data.id })
      }).then(async (response) => {
        let resp = await response.json()
        if(resp) history('course/list')
      })
    }else{
      fetch(`${URL}/course/v1`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price, workload })
      }).then(async (response) => {
        let resp = await response.json()
        if(resp) history('course/list')
      })
    }
  }
  return (
    <div className='vh-100' style={{ backgroundColor: '#eaeaea' }}>
      <NavBar />
      <div className='container bg-white rounded mt-5 p-5'>
        <div className='row'>
          <h6 className='display-6'>{data ? 'Editar Curso' : 'Cadastro de Curso'}</h6>
          <div className='col-6 my-3'>
            <TextField label='Nome' fullWidth value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <TextField label='Descrição' fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <TextField label='Preço' fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className='col-6 my-3'>
            <TextField label='Horas' fullWidth value={workload} onChange={(e) => setWorkload(e.target.value)} />
          </div>
          <div className='d-flex'>
            <Button className='ms-auto' variant='contained' onClick={save}>Salvar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCourse
