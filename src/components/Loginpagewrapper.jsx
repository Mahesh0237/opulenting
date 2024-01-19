import { Button, Card, Checkbox, Container, LoadingOverlay, PasswordInput, Stack, Group, Text, TextInput, Image, Divider } from '@mantine/core'
import { GoogleAuthProvider, fetchSignInMethodsForEmail, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import linkdinicon from '../assets/linkedin.png'
import googleicon from './../assets/google.png'
import validator from 'validator';
import { notifications } from '@mantine/notifications'
import facebookicon from '../assets/facebook.png'
import app from './firebase'
import { IconCheck, IconX } from '@tabler/icons-react'
import { useUserAuth } from '../zustand/useUserAuth'
const auth = getAuth(app)

function Loginpagewrapper() {
    const { isLoggedin, userLoggedin } = useUserAuth()
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const updatePassword = (e) => {
        setPassword(e.currentTarget.value)
        setPasswordError('')
    }

    const [agreetm, setAgreetm] = useState(true)
    const [agreetmError, setAgreetmError] = useState('')
    const updateAgreetm = (e) => {
        setAgreetm(e.currentTarget.checked)
        setAgreetmError('')
    }

    const updateLogindetails = (e) => {
        e.preventDefault();
        setIsLoadingEffect(true)
        if (email === '') {
            setEmailError('enter email')
            setIsLoadingEffect(false)
            return false
        }
        if (validator.isEmail(email) === false) {
            setEmailError('Enter the valid email address')
            setIsLoadingEffect(false)
            return false;
        }
        if (password === '') {
            setPasswordError('enter the password')
            setIsLoadingEffect(false)
            return false
        }
        if (agreetm === false) {
            setAgreetmError('accept terms and conditions')
            setIsLoadingEffect(false)
            return false
        }
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setIsLoadingEffect(false)
                userLoggedin(true)
                navigate('/')
                notifications.show({
                    title: 'Success',
                    message: 'Logged in successfully!',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                console.log(error)
                setIsLoadingEffect(false)
                if (error.code === 'auth/user-not-found') {
                    notifications.show({
                        title: 'Failed',
                        message: 'User not found. Please check your email.!',
                        color: 'red',
                        zIndex: 9999999,
                    })
                } else if (error.code === 'auth/wrong-password') {
                    notifications.show({
                        title: 'Failed',
                        message: 'Invalid Password. Please check your password.!',
                        color: 'red',
                        zIndex: 9999999,
                    })
                }
            })
    }

    // Login with google
    const loginInWithGoogle = async () => {
        setIsLoadingEffect(true)
        const provider = new GoogleAuthProvider()
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            const emailExists = await fetchSignInMethodsForEmail(auth, user.email)

            if (emailExists && emailExists.length > 0) {
                setIsLoadingEffect(false);
                userLoggedin(true)
                navigate('/');
                notifications.show({
                    title: 'Success',
                    message: 'Logged in successfully',
                    color: 'green',
                    zIndex: 9999999,
                    icon: <IconCheck />
                });
            } else {
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Failed',
                    message: 'User not found. Please check your email',
                    color: 'red',
                    zIndex: 9999999,
                    icon: <IconX />
                })
            }
        }
        catch (error) {
            setIsLoadingEffect(false)
            console.error("Google Login Error:", error);
        }
    }

    return (
        <Container size={555} pt={60} pb={60} className='loginform'>
            <Text weight={700} size={25} ta="center" py={10} fs="italic" td="underline" color='#8c3838' > Sign In</Text>
            <Card withBorder >
                <Card.Section inheritPadding py="lg">
                    <Group position='center' >
                        <Button variant='default' onClick={loginInWithGoogle}> <Image src={googleicon} height={20} width={20} /><Text weight={700} ml={10}>Google</Text></Button>
                        <Button variant='default' > <Image src={facebookicon} height={20} width={20} /><Text weight={700} ml={10}>Facebook</Text></Button>
                        <Button variant='default'> <Image src={linkdinicon} height={20} width={20} /><Text weight={700} ml={10}>Linkdin</Text></Button>
                    </Group>
                    <Divider label={<Text size="sm" weight={600}>or</Text>} labelPosition="center" py={20} size="sm" />
                    <form onSubmit={updateLogindetails}>
                        <Stack>
                            <TextInput
                                label={<Text weight={600} display="inline-block">Email</Text>}
                                placeholder='enter your email'
                                withAsterisk
                                value={email}
                                error={emailError}
                                onChange={updateEmail}
                            />
                            <PasswordInput
                                label={<Text weight={600} display="inline-block">Password</Text>}
                                placeholder='enter your password'
                                withAsterisk
                                value={password}
                                error={passwordError}
                                onChange={updatePassword}
                            />
                            <Group>
                                <Checkbox
                                    label={<Text size={13} weight={600} component='a' href='/privacypolicy' >agree the terms and conditions of opulentus</Text>}
                                    checked={agreetm}
                                    error={agreetmError}
                                    onChange={updateAgreetm}
                                />
                                <Text component='a' href='/forgetpassword' size="sm" color='red' weight={600}>Forget Password?</Text>
                            </Group>
                            {/* <Button size='md' color='red' onClick={updateLogindetails}>Login</Button> */}
                            <button onClick={updateLogindetails} style={{ background: "#fa5252", padding: "12px", color: "white", border: "none" }}>Login</button>
                        </Stack>
                    </form>
                    <Text ta="center" weight={600} size={15} > don't have an account? <Link to="/signup" style={{ textDecoration: "underline" }}>Sign up</Link></Text>
                </Card.Section>
                <LoadingOverlay visible={isLoadingEffect} />
            </Card>
        </Container>
    )
}

export default Loginpagewrapper