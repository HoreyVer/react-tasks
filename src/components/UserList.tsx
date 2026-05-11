import React, {useEffect, useState} from 'react';
import axios from 'axios';


type Geo = {
    lat: string;
    lng: string;
}

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}


const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (err: any) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Неизвестная ошибка');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>Загрузка...</div>
    if (error) return (
        <>
            <div>Ошибка: {error}</div>
            <button disabled={loading} onClick={() => {
                fetchUsers()
            }}>Reload
            </button>
        </>
    );
    if (users.length === 0) return <div>No users</div>;
    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
            <button disabled={loading} onClick={() => {
                fetchUsers()
            }}>Reload
            </button>
        </div>
    );
};

export default UserList;