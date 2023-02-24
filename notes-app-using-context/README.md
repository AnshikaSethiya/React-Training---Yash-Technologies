# Getting Started with useContext Hook

React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.

# How to use the context
Using the context in React requires 3 simple steps: creating the context, providing the context, and consuming the context.

## A. Creating the context
The built-in factory function createContext(default) creates a context instance:

// context.js
import { createContext} from "react";
export const NotesContext = createContext()

The factory function accepts one optional argument: the default value.

## B. Providing the context
Context.Provider component available on the context instance is used to provide the context to its child components, no matter how deep they are.

To set the value of context use the value prop available on the <Context.Provider value={value} />:

//  NotesState.js

<NotesContext.Provider value={{userList, fetchUsers, AddNote, notes, getNotes, DeleteNote}}>
        {props.children}
</NotesContext.Provider>

## C. Consuming the context

Consuming the context can be performed in 2 ways.
The first way, the one I recommend, is to use the useContext(Context) React hook:

import { NotesContext } from "../Context/context";

const notesContext = useContext(NotesContext)

  useEffect(() => {
    notesContext.fetchUsers();
  }, [])
  
  const onFinishLogin = (values) => {
    notesContext.userList.map((item) => {
        if(item.username == values.username && item.password == values.password){
          navigate("/notes")
        }else{
          window.alert("Incorrect username or password!!")
        }
    })
  }

  ### at the end dont miss to wrap all the routes inside App.js in <NotesState.js> </NotesState.js>

