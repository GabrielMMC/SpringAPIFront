import NavBar from '../NavBar';
import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import URL from '../../variables';
import { NavLink, useNavigate } from 'react-router-dom';

function ListTeacher() {
  const [data, setData] = React.useState('')

  const history = useNavigate()

  React.useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(`${URL}/teacher/v1`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      let resp = await response.json()
      console.log('resp', resp)
      setData(resp._embedded.teacherModelList)
    })
  }

  const deleteData = async (id) => {
    fetch(`${URL}/teacher/v1/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      getData()
    })
  }

  function formataCPF(cpf) {
    const elementoAlvo = cpf
    const cpfAtual = cpf  
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     function( regex, argumento1, argumento2, argumento3, argumento4 ) {
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
    })  
    return cpfAtualizado
    } 

  return (
    <div className='vh-100' style={{ backgroundColor: '#eaeaea' }}>
      <NavBar />
      <div className='container bg-white rounded mt-5 p-5'>
        <div>
            <Typography variant='h6'>Lista de Professores</Typography>
          <table className='table table-hover table-stripped'>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>Nascimento</td>
                <td>CPF</td>
                <td className='text-center'>Ações</td>
              </tr>
            </thead>
            <tbody>
              {console.log('data', data)}
              {data && data.map((item, index) => {
                const date = new Date(item.birth).getDate()
                const month = new Date(item.birth).getMonth()
                const year = new Date(item.birth).getFullYear()
                return(
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{date}/{month}/{year}</td>
                  <td>{formataCPF(item.cpf)}</td>
                  <td className='text-center'>
                    <Button variant='contained' color='warning' onClick={() => history('/teacher/edit/' + item.id)}>Editar</Button>
                    <Button variant='contained' color='error' className='ms-2' onClick={() => deleteData(item.id)}>Deletar</Button>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
          {!data &&
            <div className="d-flex justify-content-center"><Typography>CARREGANDO...</Typography></div>}
        </div>
        <div className="d-flex">
          <div className="ms-auto">
            <NavLink to='/teacher/add'><Button variant='contained'>Criar Professor</Button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTeacher;