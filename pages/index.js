import React from "react"
import PropTypes from "prop-types"
import {useState, useEffect} from "react"
import {firestore} from "../utils/firebase"

const Index = ({users}) => {
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

Index.getInitialProps = async() => {
    const query = await firestore.collection("users").get()
    const users = query.docs.map(user => {
        return {
            id: user.id,
            ...user.data(),
        }
    })

    return {users}
}

Index.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Index
