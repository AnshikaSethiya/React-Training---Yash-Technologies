import React, { useState, useEffect } from 'react'
import { Container, Table, Button } from 'react-bootstrap'

const Admin = () => {
  const [defects, setDefects] = useState([]);

  const fetchDefects = async () => {
    const data = await fetch("http://localhost:5000/defects")
    const parsedData = await data.json()
    setDefects(parsedData);
  }

  const changeStatus = async (item) => {
    
    const requestOptions={
      'method':'PUT',
      'body':JSON.stringify({
        username: "test_user",
        category: item.category,
        description: item.description,
        priority: item.priority,
        status:"close"
       }),
       'headers':{"Content-type":"application/json"}
  }
  const data=await fetch(`http://localhost:5000/defects/${item.id}`, requestOptions)
  const response =await data.json();
  console.log(item)
  //navigate("/todos")
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
                {defects.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td>{item.priority}</td>
                        <td>{item.status}</td>
                        {
                          item.status === "close" ? <td>No Action Pending</td> : 
                          <td><Button variant="outline-primary" onClick={() => {changeStatus(item)}}>Close Defect</Button></td>
                        }
                    </tr>
                })}
                </tbody>
            </Table>
    </Container>
  )
}

export default Admin