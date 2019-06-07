import React from "react"
import {useState, useEffect} from "react"
import {firestore} from "../utils/firebase"

const Index = () => {
    const [users, setUsers] = useState([])

    const getUsers = async() => {
        const query = await firestore.collection("users").get()
        const users = query.docs.map(user => {
            return {
                id: user.id,
                ...user.data(),
            }
        })

        setUsers(users)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <p>Hello Next.js</p>
            {users.map(user => (
                <p key={user.id}>
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </div>
    )
}

export default Index
