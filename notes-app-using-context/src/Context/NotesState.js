import { Modal } from 'antd';
import React, { useState } from 'react'
import { NotesContext } from './context'

const NotesState = (props) => {
    const [userList, setUserList] = useState([]);
    const [notes, setNotes] = useState([]);

    const fetchUsers = async () => {
      const data = await fetch("http://localhost:5000/users")
      const parsedData = await data.json()
      setUserList(parsedData)
      // return parsedData;
    }

    const AddNote = (values) => {
      console.log(values)
      console.log("value check: ", values.id);

      const randomId = parseInt(Math.random() * 1000)
      
      if(values.id !== undefined){
        fetch(`http://localhost:5000/notes/${values.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",   
        },
        body: JSON.stringify({
          "title": values.title,
          "description":values.description,
          "priority":values.priority,
        }),
      })
        .then((res) => {
          res.json();
          console.log("data updated!!", res)
        })
        .catch((err) => {
          console.log("error: ", err.message);
        });
      }else{
        fetch("http://localhost:5000/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "title": values.title,
            "description":values.description,
            "priority":values.priority,
            "id":randomId
          }),
        })
          .then((res) => {
            res.json();
          })
          .catch((err) => {
            console.log("error: ", err.message);
          });
      }
    }

    const getNotes = async () => {
      const data = await fetch("http://localhost:5000/notes")
      const parsedData = await data.json()
      setNotes(parsedData)
    }

    const DeleteNote = async (id) => {
      Modal.confirm({
        title: "Are you sure, you want to delete this note?",
        okText: "Yes",
        okType: "danger",
        onOk: async () => {
          const data=await fetch(`http://localhost:5000/notes/${id}`, {method:'delete'})
          const response =await data.json();
          getNotes();
        },
      });
    }
    
  return (
    <NotesContext.Provider value={{userList, fetchUsers, AddNote, notes, getNotes, DeleteNote}}>
        {props.children}
    </NotesContext.Provider>
  )
}

export default NotesState