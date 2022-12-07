import NavBar from '../NavBar';
import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import URL from '../../variables';
import { NavLink, useNavigate } from 'react-router-dom';

function ListCourse() {
  const [data, setData] = React.useState('')

  const history = useNavigate()

  React.useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(`${URL}/course/v1`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      let resp = await response.json()
      console.log('resp', resp)
      setData(resp._embedded.courseModelList)
    })
  }

  const deleteData = async (id) => {
    fetch(`${URL}/course/v1/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/json',
      },
    }).then(async (response) => {
      getData()
    })
  }

  return (
    <div className='vh-100' style={{ backgroundColor: '#eaeaea' }}>
      <NavBar />
      <div className='container bg-white rounded mt-5 p-5'>
        <div>
          <table className='table table-hover table-stripped'>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Preço</td>
                <td>Horas</td>
                <td>Descrição</td>
                <td className='text-center'>Ações</td>
              </tr>
            </thead>
            <tbody>
              {console.log('data', data)}
              {data && data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.workload}</td>
                  <td>{item.description}</td>
                  <td className='text-center'>
                    <Button variant='contained' color='warning' onClick={() => history('/course/edit/' + item.id)}>Editar</Button>
                    <Button variant='contained' color='error' className='ms-2' onClick={() => deleteData(item.id)}>Deletar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!data &&
            <div className="d-flex justify-content-center"><Typography>CARREGANDO...</Typography></div>}
        </div>
        <div className="d-flex">
          <div className="ms-auto">
            <NavLink to='/course/add'><Button variant='contained'>Criar Curso</Button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
