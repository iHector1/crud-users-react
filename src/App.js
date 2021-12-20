import React, { useState } from 'react'
import UserTable from './components/UserTable'
import { v4 as uuid4 } from 'uuid'
function App() {
  const usersData = [
    { id: uuid4(), name: 'John', username: 'John' },
    { id: uuid4(), name: 'Lucia', username: 'Lucia' },
    { id: uuid4(), name: 'Lucas', username: 'Lucas' }]
  const [users, setUsers] = useState(usersData)
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 mb-5 text-primary">Crud Users</h1>
        <div className="container col-6">
          <h2>Add Users</h2>
        </div>
        <div className="container col-6">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>

    </div>
  );
}

export default App;
