import { useEffect,useState } from "react";

const Effect = () => {
    const[users,setUsers]=useState([]);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data =>{setUsers(data)
            setLoading(false)
        })
        .catch(error=>{
            console.error('Error fetching data:', error);
            setLoading(false);
        })
    },[])

    return(
        <div>
            <h1>Users</h1>
            {loading ? (
                <p>Loading...</p>
                ) : (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
            )}
        </div>
    )

}
export default Effect