import React from 'react'
import {auth, provider} from '../firebase'
import styled from 'styled-components';

function Login(props) {

const signIn = () => {
auth.signInWithPopup(provider)
.then((result) => {
    const newUser = {
        name:result.user.displayName,
        photo: result.user.photoURL,
    }
    props.setUser(newUser);
})
.catch((error)=>{
alert(error.message)
})
}

    return (
        <Container onClick={signIn}>
            Login NEW page
        </Container>
    )
}

export default Login

const Container= styled.div`
`