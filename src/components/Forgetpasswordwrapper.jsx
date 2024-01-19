import React, { useState } from 'react'
import logo1 from '../assets/logo1.png'
import { Button, Card, Container, Group, LoadingOverlay, Stack, Text, TextInput } from '@mantine/core'
import app from './firebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { notifications } from '@mantine/notifications';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator'
const auth = getAuth(app);
function Forgetpasswordwrapper() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [resetLink, setResetLink] = useState(false)
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        if (validator.isEmail(e.currentTarget.value) === false) {
            setEmailError('Enter the valid email address')
            return false
        } else {
            setEmailError('')
        }
    }
    const triggerResetEmail = async (e) => {
        e.preventDefault()
        setIsLoadingEffect(true)
        if (email === '') {
            setIsLoadingEffect(false)
            setEmailError('')
            return false
        }
        if (validator.isEmail(email) === false) {
            setIsLoadingEffect(false)
            setEmailError('Enter the valid email address')
            return false
        }
        await sendPasswordResetEmail(auth, email)
            .then((res) => {
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Please check your email',
                    message: `reset link sent to ${email}`,
                    color: 'green',
                    zIndex: 9999999,
                })
                setResetLink(true)
            })
            .catch((error) => {
                setIsLoadingEffect(false)
                if (error.code === 'auth/user-not-found') {
                    notifications.show({
                        title: 'Failed',
                        message: 'User not found. Please check your email.! 🤥',
                        color: 'red',
                        zIndex: 9999999,
                    })
                    console.log('User not found. Please check your email.');
                }
            })
    }
    return (
        <>
            {
                resetLink ?
                    <div className='container py-5'>
                        <Card withBorder p={50} >
                            <Stack>
                                <Text size={30} weight={700} >Request a password reset</Text>
                                <Text>
                                    We have sent a password reset link to your email
                                    <Text component='a' href='#' size={16} color='red' weight={600} span> {email} </Text>
                                    to reset your password. Please check your email.</Text>
                                <Text>For security reasons, the URL link will expire after 1 hour, after that you need to reset the password again. </Text>
                                <Button component='a' href='/' color='red'>Back to login</Button>
                            </Stack>
                        </Card>
                    </div>
                    :
                    <Container size={550} pt={60} pb={60} className='loginform'>
                        <Card withBorder >
                            <Card.Section inheritPadding py="lg" style={{ background: "#dbdbdb4a" }} >
                                <Group position='center'>
                                    <img src={logo1} alt='logo' width={150} />
                                </Group>
                            </Card.Section>
                            <Card.Section inheritPadding py="lg" withBorder>
                                <form onSubmit={triggerResetEmail}>
                                    <Stack>
                                        <TextInput
                                            label={<Text weight={600} display="inline-block">Email</Text>}
                                            placeholder='enter your email'
                                            withAsterisk
                                            value={email}
                                            error={emailError}
                                            onChange={updateEmail}
                                        />
                                        {/* <Button size='md' color='red' onClick={triggerResetEmail} >Forget Password</Button> */}
                                        <button onClick={triggerResetEmail} style={{ background: "#fa5252", padding: "12px", color: "white", border: "none" }}>Forget Password</button>
                                        <Text ta="center" weight={600} size={15} > don't have an account? <Link to="/signup" style={{ textDecoration: "underline" }}>Sign up</Link></Text>
                                    </Stack>
                                </form>
                            </Card.Section>
                        </Card>
                        <LoadingOverlay visible={isLoadingEffect} />
                    </Container>
            }
        </>
    )
}

export default Forgetpasswordwrapper