import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Button, Container, Card, Text, Select, Grid, LoadingOverlay, Checkbox, Anchor, Input, Loader } from '@mantine/core';
import axios from 'axios';
import validator from 'validator';
import { notifications } from '@mantine/notifications';
import { UserAuth } from '../App';
import app from './firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { IconX } from '@tabler/icons-react';

export const Getintouchformone = () => {
    const { userid } = useContext(UserAuth)
    const db = getDatabase(app);
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [countries, setCountries] = useState([])
    const date = new Date();
    const recievedDate = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const getCountries = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const formattedCountries = response.data.map(country => ({
                    value: country.name.common,
                    label: `${country.name.common} (${country.cca2})`,
                    image: country.flags.png,
                    code: country.cca2,
                }))
                setCountries(formattedCountries);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            })
    }

    const [phonecodes, setPhonecodes] = useState([])

    const getCountryCodes = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const formattedCountrycodes = response.data.map(country => {
                    // const phoneCodeSuffix = country?.idd?.suffixes?.[0] || '';
                    return {
                        value: country.name.common,
                        label: `${country?.idd?.root || ''}${country.idd.suffixes?.[0]}(${country.name.common})`,
                    }
                })
                formattedCountrycodes.sort((a, b) => a.value.localeCompare(b.value))
                setPhonecodes(formattedCountrycodes);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            })
    }
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const updateFirstName = (event) => {
        setFirstName(event.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(event.currentTarget.value)) {
            setFirstNameError('it should contain only letters (no numbers or special characters)')
            // setIsLoadingEffect(false);
            // return false;
        } else {
            setFirstNameError('')
        }
    }
    const [lastName, setLastName] = useState('')
    const [lastNaemError, setLastNameError] = useState('')
    const updateLastName = (e) => {
        setLastName(e.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(e.currentTarget.value)) {
            setLastNameError('it should contain only letters (no numbers or special characters)')
        } else {
            setLastNameError('')
        }
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updatEmail = (e) => {
        setEmail(e.currentTarget.value)
        if (validator.isEmail(e.currentTarget.value) === false) {
            setEmailError('Enter the valid email address')
        } else {
            setEmailError('')
        }
    }

    const [country, setCountry] = useState('India')
    const [countryError, setCountryerror] = useState('')
    const updateCountry = (value) => {
        setCountry(value)
        setCountryerror('')
        setPhoneCode(value)
    }

    const [phoneCode, setPhoneCode] = useState(country)
    const [phoneCodeError, setPhoneCodeError] = useState('')
    const updatePhoneCode = (value) => {
        setPhoneCode(value)
        setPhoneCodeError('')
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const updatePhoneNumber = (e) => {
        setPhoneNumber(e.currentTarget.value)
        if (!/^[0-9]+$/.test(e.currentTarget.value)) {
            setPhoneNumberError('Phone number should only contain numeric characters (0-9), no spaces or special characters')
        } else if (e.currentTarget.value.length !== 10) {
            setPhoneNumberError('Phone number should have exactly 10 numeric characters');
        } else {
            setPhoneNumberError('');
        }
    }
    const [agreetm, setAgreetm] = useState(true)
    const [agreetmError, setAgreetmError] = useState('')
    const updateAgreetm = (e) => {
        setAgreetm(e.currentTarget.checked)
        setAgreetmError('')
    }

    // confirmation message for the user when between the data filling in the form if user get refresh the page
    useEffect(() => {
        getCountries()
        getCountryCodes()
        const handleBeforeUnload = (e) => {
            if (
                firstName ||
                lastName ||
                email ||
                country !== "India" ||
                phoneNumber ||
                phoneCode !== country
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
    }, [firstName, lastName, email, country, phoneNumber, phoneCode])

    // fetching the user current location
    useEffect(() => {
        userLocation()
    }, [])

    const userLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=4b2fb817b25241ee879b438a29911012 `)
                .then((response) => {
                    const data = response.data.results[0].components.country
                    setCountry(data)
                })
                .catch((error) => {
                    console.log('Error fetching country:', error)
                    setCountry('India')
                })
        })
    }

    const updateForm = () => {
        setIsLoadingEffect(true)
        if (firstName === '') {
            setFirstNameError('enter your first name')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^[A-Za-z\s]+$/.test(firstName)) {
            setFirstNameError('it should contain only letters (no numbers or special characters)')
            setIsLoadingEffect(false);
            return false;
        }
        if (lastName === '') {
            setLastNameError('enter the last name')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^[A-Za-z\s]+$/.test(lastName)) {
            setLastNameError('it should contain only letters (no numbers or special characters)')
            setIsLoadingEffect(false);
            return false;
        }
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
        if (country === null) {
            setCountryerror('selct your country')
            setIsLoadingEffect(false)
            return false
        }
        if (phoneNumber === '') {
            setPhoneNumberError('enter the phone number')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^[0-9]+$/.test(phoneNumber)) {
            setPhoneNumberError('Phone number should only contain numeric characters (0-9), no spaces or special characters');
            setIsLoadingEffect(false);
            return false;
        }

        if (phoneNumber.length !== 10) {
            setPhoneNumberError('Phone number should contain exactly 10 digits')
            setIsLoadingEffect(false);
            return false;
        }
        if (agreetm === false) {
            setAgreetmError('accept terms and conditions')
            setIsLoadingEffect(false)
            return false
        }
        // posting the data into the firebase
        userid ?
            set(ref(db, `users/${userid}/userRequestedData`), {
                firstName,
                lastName,
                email,
                phoneNumber,
                country,
                recievedDate
            })
                .then((res) => {
                    setIsLoadingEffect(false)
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhoneCode('India')
                    setPhoneNumber('')
                    setCountry('India')
                    setAgreetm(true)
                    notifications.show({
                        title: 'Request sent successfully',
                        message: 'Our team will get back to you, Thankyou!!',
                        color: 'green',
                        zIndex: 9999999,
                    })

                })
                .catch((error) => {
                    console.log(error)
                    setIsLoadingEffect(false)
                    notifications.show({
                        title: 'Failed',
                        message: 'failed to submit the data!!',
                        color: 'red',
                        icon: <IconX />,
                        zIndex: 9999999,
                    })
                })
            :
            axios.post('https://opulenting-48349-default-rtdb.firebaseio.com/enquireyform_data.json', {
                firstName,
                lastName,
                email,
                phoneNumber,
                country,
                recievedDate
            })
                .then((res) => {
                    setIsLoadingEffect(false)
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhoneCode('India')
                    setPhoneNumber('')
                    setCountry('India')
                    setAgreetm(true)
                    notifications.show({
                        title: 'Request sent successfully',
                        message: 'Our team will get back to you, Thankyou!!',
                        color: 'green',
                        zIndex: 9999999,
                    })

                })
                .catch((error) => {
                    console.log(error)
                    setIsLoadingEffect(false)
                    notifications.show({
                        title: 'Failed',
                        message: 'failed to submit the data!!',
                        color: 'red',
                        icon: <IconX />,
                        zIndex: 9999999,
                    })
                })

    }

    return (
        // style={{ background: "#f4f9fd" }}
        <Card withBorder className='loginform' >
            <Card.Section inheritPadding py="sm">
                <Text align='center' color='#f00' size={20} weight={600}>Quick Enquiry</Text>
            </Card.Section>
            <Card.Section inheritPadding withBorder py="md">
                <Grid>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                        <TextInput
                            label={<Text weight={600} display="inline-block">First Name</Text>}
                            placeholder='enter first name'
                            withAsterisk
                            value={firstName}
                            error={firstNameError}
                            onChange={updateFirstName}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={6} lg={6} xl={6}>
                        <TextInput
                            label={<Text weight={600} display="inline-block">Last Name</Text>}
                            placeholder='enter last name'
                            withAsterisk
                            value={lastName}
                            error={lastNaemError}
                            onChange={updateLastName}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={12} lg={6} xl={6}>
                        <TextInput
                            label={<Text weight={600} display="inline-block">Email</Text>}
                            placeholder="Enter your email"
                            required
                            value={email}
                            error={emailError}
                            onChange={updatEmail}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={12} lg={6} xl={6}>
                        <Select
                            label={<Text weight={600} display="inline-block">Country of Resident</Text>}
                            placeholder="select country"
                            data={countries}
                            searchable
                            withAsterisk
                            transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                            value={country}
                            error={countryError}
                            onChange={updateCountry}
                            nothingFound={<Text color='red' size={14} weight={600}>Nothing Found</Text>}
                        />
                    </Grid.Col>
                    <Grid.Col sm={12} md={12} lg={12} xl={12}>
                        <Input.Wrapper label={<Text weight={600} display="inline-block">Mobile Number</Text>} withAsterisk>
                            <Grid gutter="xs">
                                <Grid.Col span={5}>
                                    <Select
                                        placeholder='country code'
                                        searchable
                                        data={phonecodes}
                                        value={phoneCode}
                                        error={phoneCodeError}
                                        onChange={updatePhoneCode}
                                        nothingFound="nothing found"
                                    />
                                </Grid.Col>
                                <Grid.Col span={7}>
                                    <TextInput
                                        placeholder='enter Mobile number'
                                        withAsterisk
                                        value={phoneNumber}
                                        error={phoneNumberError}
                                        onChange={updatePhoneNumber}
                                    />
                                </Grid.Col>
                            </Grid>
                        </Input.Wrapper>
                    </Grid.Col>
                    <Grid.Col sm={12} md={12} lg={12} xl={12}>
                        <Checkbox
                            label={<Text size={14} component='a' href='/privacypolicy' >Agree the terms and conditions of opulentus</Text>}
                            checked={agreetm}
                            error={agreetmError}
                            onChange={updateAgreetm}
                        />
                    </Grid.Col>
                </Grid>
            </Card.Section>
            <Card.Section inheritPadding pt="md">
                <Button variant='filled' style={{ background: "#f00c" }} size='sm' radius="sm" fullWidth onClick={updateForm}> <Text size={15}>Send Request</Text></Button>
            </Card.Section>
            <LoadingOverlay visible={isLoadingEffect} />
        </Card>
    )
}

function Getintouchform() {
    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [countries, setCountries] = useState([])
    const date = new Date();
    const recievedDate = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    useEffect(() => {
        getCountries()
        getCountryCodes()
    }, [])

    const getCountries = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const formattedCountries = response.data.map(country => ({
                    value: country.name.common,
                    label: `${country.name.common} (${country.cca2})`,
                    image: country.flags.png,
                    code: country.cca2,
                }))
                setCountries(formattedCountries);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            })
    }

    const [phonecodes, setPhonecodes] = useState([])

    const getCountryCodes = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const formattedCountrycodes = response.data.map(country => {
                    // const phoneCodeSuffix = country?.idd?.suffixes?.[0] || '';
                    return {
                        value: country.name.common,
                        label: `${country?.idd?.root || ''}${country.idd.suffixes?.[0]}(${country.name.common})`,
                    }
                })
                formattedCountrycodes.sort((a, b) => a.value.localeCompare(b.value))
                setPhonecodes(formattedCountrycodes);
            })
            .catch(error => {
                console.error('Error fetching countries:', error);
            })
    }
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const updateFirstName = (event) => {
        setFirstName(event.currentTarget.value)
        setFirstNameError('')
    }
    const [lastName, setLastName] = useState('')
    const [lastNaemError, setLastNameError] = useState('')
    const updateLastName = (e) => {
        setLastName(e.currentTarget.value)
        setLastNameError('')
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updatEmail = (e) => {
        setEmail(e.currentTarget.value)
        setEmailError('')
    }
    const [phoneCode, setPhoneCode] = useState('India')
    const [phoneCodeError, setPhoneCodeError] = useState('')
    const updatePhoneCode = (value) => {
        setPhoneCode(value)
        setPhoneCodeError('')
    }
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const updatePhoneNumber = (e) => {
        setPhoneNumber(e.currentTarget.value)
        setPhoneNumberError('')
    }
    const [country, setCountry] = useState(null)
    const [countryError, setCountryerror] = useState('')
    const updateCountry = (value) => {
        setCountry(value)
        setCountryerror('')
    }
    const [agreetm, setAgreetm] = useState(false)
    const [agreetmError, setAgreetmError] = useState('')
    const updateAgreetm = (e) => {
        setAgreetm(e.currentTarget.checked)
        setAgreetmError('')
    }


    const updateForm = () => {
        setIsLoadingEffect(true)
        if (firstName === '') {
            setFirstNameError('enter your first name')
            setIsLoadingEffect(false)
            return false
        }
        if (/\d/.test(firstName)) {
            setFirstNameError('First name should not contain numbers');
            setIsLoadingEffect(false);
            return false;
        }
        if (lastName === '') {
            setLastNameError('enter the last name')
            setIsLoadingEffect(false)
            return false
        }
        if (/\d/.test(lastName)) {
            setLastNameError('Last name should not contain numbers');
            setIsLoadingEffect(false);
            return false;
        }
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
        if (phoneNumber === '') {
            setPhoneNumberError('enter the phone number')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^\d+$/.test(phoneNumber)) {
            setPhoneNumberError('Phone number should not contain characters');
            setIsLoadingEffect(false);
            return false;
        }

        if (phoneNumber.length !== 10) {
            setPhoneNumberError('Phone number should contain exactly 10 digits');
            setIsLoadingEffect(false);
            return false;
        }
        if (country === null) {
            setCountryerror('selct your country')
            setIsLoadingEffect(false)
            return false
        }
        if (agreetm === false) {
            setAgreetmError('accept terms and conditions')
            setIsLoadingEffect(false)
            return false
        }
        axios.post('https://opulenting-48349-default-rtdb.firebaseio.com/userRequestedData.json', {
            firstName,
            lastName,
            email,
            phoneNumber,
            country,
            recievedDate
        })
            .then((res) => {
                setIsLoadingEffect(false)
                setFirstName('')
                setLastName('')
                setEmail('')
                setPhoneCode('India')
                setPhoneNumber('')
                setCountry(null)
                setAgreetm(false)
            })
            .catch((error) => {
                console.log(error)
                setIsLoadingEffect(false)
            })
        notifications.show({
            title: 'Success',
            message: 'Request sent successfully! 🤥',
            color: 'green',
            zIndex: 9999999,
        })

    }
    return (
        <Container size={450}>
            <div className="card bg-dark border-0 ">
                <div className="card-header bg-primary">
                    <h3 className="mb-0 text-white text-center">Free Counselling</h3>
                </div>
                <div className="card-body">
                    {/* <p className="text-white">A short explanatory statement to clarify the purpose of the form and what you’re
                        giving in exchange for the personal data.
                    </p> */}
                    <Grid>
                        <Grid.Col md={12}>
                            <TextInput
                                label={<Text weight={600} display="inline-block" color='white'>First Name</Text>}
                                placeholder='enter first name'
                                withAsterisk
                                value={firstName}
                                error={firstNameError}
                                onChange={updateFirstName}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <TextInput
                                label={<Text weight={600} display="inline-block" color='white'>Last Name</Text>}
                                placeholder='enter last name'
                                withAsterisk
                                value={lastName}
                                error={lastNaemError}
                                onChange={updateLastName}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <TextInput
                                label={<Text weight={600} display="inline-block" color='white'>Email</Text>}
                                placeholder="Enter your email"
                                required
                                value={email}
                                error={emailError}
                                onChange={updatEmail}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Select
                                label={<Text weight={600} display="inline-block" color='white'>Country of Resident</Text>}
                                placeholder="select country"
                                data={countries}
                                searchable
                                withAsterisk
                                transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
                                value={country}
                                error={countryError}
                                onChange={updateCountry}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Input.Wrapper label={<Text weight={600} display="inline-block" color='white'>Mobile Number</Text>} withAsterisk>
                                <Grid gutter="xs">
                                    <Grid.Col span={4}>
                                        <Select
                                            placeholder='country code'
                                            searchable
                                            data={phonecodes}
                                            value={phoneCode}
                                            error={phoneCodeError}
                                            onChange={updatePhoneCode}
                                            nothingFound="nothing found"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={8}>
                                        <TextInput
                                            placeholder='enter Mobile number'
                                            withAsterisk
                                            value={phoneNumber}
                                            error={phoneNumberError}
                                            onChange={updatePhoneNumber}
                                        />
                                    </Grid.Col>
                                </Grid>
                            </Input.Wrapper>

                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Checkbox
                                label={<Anchor href='#'><Text size={15} component='a' href='/privacypolicy'>Agree the terms and conditions of opulentus</Text></Anchor>}
                                checked={agreetm}
                                error={agreetmError}
                                onChange={updateAgreetm}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }} size='md' fullWidth onClick={updateForm}> Send Request</Button>
                        </Grid.Col>
                    </Grid>
                    <LoadingOverlay visible={isLoadingEffect} />
                </div>
            </div>
        </Container>
    )
}

export default Getintouchform