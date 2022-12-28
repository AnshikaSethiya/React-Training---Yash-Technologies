import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap'


const ViewDefectUser = () => {
  const [viewData, setViewData] = useState([])

  const navigate=useNavigate();

  const fetchDefects = async () => {
      const data = await fetch("http://localhost:5000/defects")
      const parsedData = await data.json()
      setViewData(parsedData)
      //console.log("data: ", viewData)
  }
  
  const DeleteAction = async (id) => {
    const data=await fetch(`http://localhost:5000/defects/${id}`, {method:'delete'})
    const response =await data.json();
    fetchDefects();
  }

  useEffect(() => {
   fetchDefects();
  }, [])
  

  return (
    <Container>
       <Table hover>
                <thead>
                   <tr>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                {viewData.map((item) => {
                    return <tr key={item.id}>
                        {/* {console.log("index: ", item)} */}
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.priority}</td>
                        <td>{item.status}</td>
                        {
                          item.status === "open" ? 
                          <td><Button variant="danger" onClick={() => DeleteAction(item.id)}>Delete</Button></td> :
                          <td> - </td>
                        }
                    </tr>
                })}
                </tbody>
            </Table>
    </Container>
  )
}

export default ViewDefectUser