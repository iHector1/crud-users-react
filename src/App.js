import React, { useState } from 'react'
import UserTable from './components/UserTable'
import AddForm from './components/AddForm'
import UserFormEdit from './components/UserFormEdit'
import { v4 as uuid4 } from 'uuid'
function App() {
  const usersData = [
    { id: uuid4(), name: 'John', username: 'John' },
    { id: uuid4(), name: 'Lucia', username: 'Lucia' },
    { id: uuid4(), name: 'Lucas', username: 'Lucas' }]
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrrentUser] = useState({
    id: null, name: '', username: ''
  })
  //Agregar usuarios
  const addUsers = (user) => {
    user.id = uuid4()
    setUsers([...users, user])
  }
  //eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }
  //editar usuarios
  const editUser = (id) => {
    setEditing(editing)
  }
  const editRow = (user) => {
    setEditing(true)
    setCurrrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 mb-5 text-primary">Crud Users</h1>
        <div className="container col-6">
          {!editing ? (
            <div>
              <h2>Add User</h2>
              <AddForm addUsers={addUsers} />
            </div>

          ) : (
            <div>
              <h2>Edit User</h2>
              <UserFormEdit currentUser={currentUser} updateUser={updateUser} />
            </div>

          )}


        </div>
        <div className="container col-6">
          <h2>View users</h2>
          <UserTable users={users}
            deleteUser={deleteUser}
            editRow={editRow} />
        </div>
      </div>

    </div>
  );
}

export default App;
