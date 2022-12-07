import React from 'react'
import { useParams } from 'react-router-dom'
import AddCourse from './AddCourse'

const EditCourse = () => {
    const [data, setData] = React.useState('')
    const params = useParams()

    React.useEffect(() => {
        console.log('edit')
        getData()
    }, [])

    const getData = () => {
        fetch(`${URL}/course/v1/${params.id}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'application/json',
          },
        }).then(async (response) => {
          let resp = await response.json()
          console.log('resp', resp)
          setData(resp)
        })
      }

  return (
    <>
    {data && <AddCourse data={data}/>}
    </>
  )
}

export default EditCourse
