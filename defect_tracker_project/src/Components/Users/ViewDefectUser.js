import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Table, Button, Tooltip, OverlayTrigger } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

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
                          <td>
                           <OverlayTrigger key="top" placement="top" overlay={<Tooltip id='top-tooltip'>Delete Defect</Tooltip>}>
                                {/* <AiOutlineDelete fontSize='1.5rem' cursor='pointer' color='red' onClick={() => DeleteAction(item.id)}/> */}
                                <Button className='btn' variant='danger' onClick={() => DeleteAction(item.id)}><AiOutlineDelete fontSize='1.2rem'/></Button>
                           </OverlayTrigger>
                            </td> :
                          <td> - </td>
                        }
                    </tr>
                })}
                </tbody>
            </Table>
            <Link to="/add">
                <Button variant="secondary">Add Defect</Button>
            </Link>
    </Container>
  )
}

export default ViewDefectUser