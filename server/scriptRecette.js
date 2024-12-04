import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const addUser = async (userData) => {
        const response = await axios.post('/api/users', userData);
        setUsers([...users, response.data]);
    };

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    {user.name} - {user.email}
                </div>
            ))}
        </div>
    );
}

export default UserList;