import React from 'react';

const UserTable = (props) => {
    console.log(props.users)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                        (props.users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="btn btn-primary mr-2"
                                        onClick={() => { props.editRow(user) }}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => { props.deleteUser(user.id) }}>Delete</button>
                                </td>
                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                }

            </tbody>
        </table>
    )
}

export default UserTable;