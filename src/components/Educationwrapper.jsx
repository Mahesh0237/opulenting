import { Card, Container, Grid, Input, Select, Text, TextInput, Group, Button, LoadingOverlay, Loader } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import Datepicklerwrapper from '../components/shared/datepickler/Datepicklerwrapper'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../App';
import { getDatabase, ref, set } from 'firebase/database';
import app from './firebase';
import { notifications } from '@mantine/notifications'
function Educationwrapper() {
    const { userid } = useContext(UserAuth)
    const db = getDatabase(app)
    const navigate = useNavigate()
    const date = new Date();
    const recievedDate = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [education, setEducation] = useState(null)
    const [educationError, setEducationError] = useState('')
    const updateEducation = (value) => {
        setEducation(value)
        setEducationError('')
    }
    const [totalworkExp, setTotaworkExp] = useState('')
    const [totalworkExpError, setTotalworkExpError] = useState('')
    const updateTotalworkExp = (e) => {
        setTotaworkExp(e.currentTarget.value)
        if (!/^[0-50]+$/.test(e.currentTarget.value)) {
            setTotalworkExpError('it should only contain numeric characters , no spaces or special characters')
        } else {
            setTotalworkExpError('');
        }
    }
    const [typeofIndustry, setTypeofIndustry] = useState('')
    const [typeofIndustryError, setTypeofIndustryError] = useState('')
    const updateTypeofIndustry = (e) => {
        setTypeofIndustry(e.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(e.currentTarget.value)) {
            setTypeofIndustryError('it should contain only letters (no numbers or special characters)')
        } else {
            setTypeofIndustryError('')
        }
    }
    const [designation, setDesignation] = useState('')
    const [designationError, setDesignationError] = useState('')
    const updateDesignation = (e) => {
        setDesignation(e.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(e.currentTarget.value)) {
            setDesignationError('it should contain only letters (no numbers or special characters)')
        } else {
            setDesignationError('')
        }
    }
    const [marritalStatus, setMarritalStatus] = useState(null)
    const [marritalStatusError, setMarritalStatusError] = useState('')
    const updateMarritalStatus = (value) => {
        setMarritalStatus(value)
        setMarritalStatusError('')
    }

    const [dateofBirth, setDateofBirth] = useState(null)
    const [dateofBirthError, setDateofBirthError] = useState('')
    const updateDateofBirth = (value) => {
        setDateofBirth(value)
        setDateofBirthError('')
    }

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (
                education ||
                totalworkExp ||
                typeofIndustry ||
                designation ||
                marritalStatus ||
                dateofBirth
            ) {
                // Display a confirmation message to the user
                e.preventDefault()
                e.returnValue = ''
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [education, totalworkExp, typeofIndustry, designation, marritalStatus, dateofBirth])

    const updateProfile = () => {
        setIsLoadingEffect(true)
        if (education === null) {
            setIsLoadingEffect(false)
            setEducationError('select your education')
            return false
        }
        if (totalworkExp === '') {
            setIsLoadingEffect(false)
            setTotalworkExpError('enter your work Exp')
            return false
        }
        if (typeofIndustry === '') {
            setIsLoadingEffect(false)
            setTypeofIndustryError('enter your industry')
            return false
        }
        if (designation === '') {
            setIsLoadingEffect(false)
            setDesignationError('enter your designation')
            return false
        }
        if (marritalStatus === null) {
            setIsLoadingEffect(false)
            setMarritalStatusError('select your marrital Status')
            return false
        }
        if (dateofBirth === null) {
            setIsLoadingEffect(false)
            setDateofBirthError('select the date of birth')
            return false
        }
        let newdob;
        if (dateofBirth !== null) {
            newdob = moment(dateofBirth).format('YYYY-MM-DD')
        } else {
            newdob = null
        }

        // posting the data into the firebase
        set(ref(db, `users/${userid}/userdetails/profiledetails`), {
            education,
            totalworkExp,
            typeofIndustry,
            designation,
            marritalStatus,
            dateofbirth: newdob,
            recievedDate
        })
            .then((res) => {
                setIsLoadingEffect(false)
                navigate('/')
                notifications.show({
                    title: 'Success',
                    message: 'Data stored successfully!',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                setIsLoadingEffect(false)
                console.log('user education data posting failed', error)
            })
    }

    return (
        <Container py={50}>
            <Card withBorder py={20} className='loginform'>
                <Card.Section inheritPadding py={10}>
                    <Text color='rgb(255, 0, 0)' size={18} mb={3} weight={600}>PROFILE DETAILS:</Text>
                </Card.Section>
                <Card.Section inheritPadding withBorder py={20}>
                    <Grid>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <Select
                                label={<Text weight={600} display="inline-block">Highest Education</Text>}
                                searchable
                                nothingFound={<Text size={15} color='red' weight={600}>Nothing Found</Text>}
                                placeholder="select education"
                                withAsterisk
                                data={[
                                    { value: 'Doctrate/PhD', label: 'Doctrate/PhD' },
                                    { value: 'Masters/post graduation', label: 'Masters/post graduation' },
                                    { value: 'Graduation/Diploma', label: 'Graduation/Diploma' },
                                    { value: '12th', label: '12th' },
                                    { value: '10th', label: '10th' }
                                ]}
                                value={education}
                                error={educationError}
                                onChange={updateEducation}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">Total years of work Experience</Text>}
                                placeholder="enter your total work experience"
                                withAsterisk
                                value={totalworkExp}
                                error={totalworkExpError}
                                onChange={updateTotalworkExp}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">Type of Industry</Text>}
                                placeholder="enter your industry"
                                withAsterisk
                                value={typeofIndustry}
                                error={typeofIndustryError}
                                onChange={updateTypeofIndustry}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">Designation</Text>}
                                placeholder="enter your designation"
                                withAsterisk
                                value={designation}
                                error={designationError}
                                onChange={updateDesignation}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <Select
                                label={<Text weight={600} display="inline-block">Marrital Status</Text>}
                                searchable
                                nothingFound={<Text size={15} color='red' weight={600}>Nothing Found</Text>}
                                placeholder="marrital status"
                                withAsterisk
                                data={[
                                    { value: 'Single', label: 'Single' },
                                    { value: 'Married', label: 'Married' },
                                    { value: 'Widowed', label: 'Widowed' },
                                    { value: 'Separated', label: 'Separated' },
                                    { value: 'Divorced', label: 'Divorced' }
                                ]}
                                value={marritalStatus}
                                error={marritalStatusError}
                                onChange={updateMarritalStatus}
                            />
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={4} lg={4}>
                            <Input.Wrapper label={<Text weight={600} display="inline-block">Date of Birth</Text>} withAsterisk error={dateofBirthError} >
                                <Datepicklerwrapper
                                    oldYears={100}
                                    currentYear={new Date().getFullYear()}
                                    value={dateofBirth}
                                    onDateChange={updateDateofBirth}
                                />
                            </Input.Wrapper>
                        </Grid.Col>
                    </Grid>
                </Card.Section>
                <Card.Section inheritPadding pt={10}>
                    <Group position='right'>
                        <Button color='dark' onClick={updateProfile}>Update</Button>
                    </Group>
                </Card.Section>
                <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant='bars' />} />
            </Card>
        </Container >
    )
}

export default Educationwrapper