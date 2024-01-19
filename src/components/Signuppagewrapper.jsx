import { Button, Card, Checkbox, Container, LoadingOverlay, Grid, Group, Image, PasswordInput, Select, Text, TextInput, Input, Divider, Modal } from '@mantine/core'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import linkdinicon from '../assets/linkedin.png'
import googleicon from './../assets/google.png'
import axios from 'axios'
import { IconCheck } from '@tabler/icons-react'
import validator from 'validator'
import { notifications } from '@mantine/notifications'
import facebookicon from '../assets/facebook.png'
import app from './firebase'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth"
import { Country, State, City } from 'country-state-city'
import { getDatabase, ref, set } from 'firebase/database'
import cryptoRandomString from 'crypto-random-string'
import { UserAuth } from '../App'
import { useUserAuth } from '../zustand/useUserAuth'
const auth = getAuth(app)

function Signuppagewrapper() {
    const { userLoggedin } = useUserAuth()
    const { userid } = useContext(UserAuth)
    const db = getDatabase(app);
    const [allCountries, setAllCountries] = useState([])
    const [allstates, setAllStates] = useState([])
    const [allcities, setAllcities] = useState([])


    const getAllCountries1 = () => {
        const countriesData = Country.getAllCountries();
        const formattedCountries1 = countriesData.map(country => ({
            value: country.name,
            label: `${country.name} (${country.isoCode})`,
            isoCode: country.isoCode,
        }))
        setAllCountries(formattedCountries1);
    }

    const getAllStates1 = (value) => {
        const statesData = State.getAllStates();
        const filteredStates = statesData.filter((state) => state.countryCode === value);
        const formattedStates1 = filteredStates.map(state => ({
            value: state.name,
            label: state.name,
            isoCode: state.isoCode,
        }))
        setAllStates(formattedStates1);
    }

    const getAllCities = (countryisocode, stateisocode) => {
        const citiesData = City.getCitiesOfState(countryisocode, stateisocode)
        const formattedCities = citiesData.map(city => ({
            value: city.name,
            label: city.name,
        }))
        setAllcities(formattedCities);
    }

    const navigate = useNavigate()

    const [otp, setOtp] = useState('')
    const [otpVerify, setOtpVerify] = useState(false)

    const date = new Date()
    const recievedDate = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const [phonecodes, setPhonecodes] = useState([])

    const getCountryCodes = () => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const formattedCountrycodes = response.data.map(country => {
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

    const [isLoadingEffect, setIsLoadingEffect] = useState(false)
    const [fullName, setFullName] = useState('')
    const [fullNameError, setFullNameError] = useState('')

    const updateFullName = (e) => {
        setFullName(e.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(e.currentTarget.value)) {
            setFullNameError('it should contain only letters (no numbers or special characters)')
        } else {
            setFullNameError('')
        }
    }

    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
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

    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        if (validator.isEmail(e.currentTarget.value) === false) {
            setEmailError('Enter the valid email address')
        } else {
            setEmailError('')
        }
    }

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const updatePassword = (e) => {
        setPassword(e.currentTarget.value)
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (!passwordRegex.test(e.currentTarget.value)) {
            setPasswordError('Password must have at least 6 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)');
        } else {
            setPasswordError('')
        }
    }

    const handlePasswordPaste = (event) => {
        event.preventDefault();
    }

    const [confirmPassword, setConfirmpassword] = useState('')
    const [confirmPasswordError, setConfirmpasswordError] = useState('')

    const updateConfirmPassword = (e) => {
        setConfirmpassword(e.currentTarget.value)
        setConfirmpasswordError('')
    }

    const [country, setCountry] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [countryError, setCoutryError] = useState('')
    const [countryIsoCode, setCountryIsoCode] = useState(null)
    const updateCountry = (value) => {
        setPhoneCode(value)
        setCountry(value)
        setCoutryError('')
        const selectedOption = allCountries.find((option) => option.value === value);
        setCountryIsoCode(selectedOption.isoCode)
        getAllStates1(selectedOption.isoCode)
        setState(null)
        setCity(null)
    }

    const [stateError, setStateError] = useState('')
    const updateState = (value) => {
        setState(value)
        setStateError('')
        const selectedOption = allstates.find((option) => option.value === value)
        getAllCities(countryIsoCode, selectedOption.isoCode)
        setCity(null)
    }

    const [cityError, setCityError] = useState('')
    const updateCity = (value) => {
        setCity(value)
        setCityError('')
    }

    const [phoneCode, setPhoneCode] = useState(country)
    const [phoneCodeError, setPhoneCodeError] = useState('')
    const updatePhoneCode = (value) => {
        setPhoneCode(value)
        setPhoneCodeError('')
    }
    const [location, setLocation] = useState('India')
    // Fetch user's location based on IP address using ip-api.com
    useEffect(() => {
        fetch('http://ip-api.com/json')
            .then((response) => response.json())
            .then((data) => {
                setPhoneCode(data.country)
                setCountry(data.country)
                getAllStates1(data.countryCode)
                setCountryIsoCode(data.countryCode)
                setLocation(data.country)
            })
            .catch((error) => {
                console.error('Error fetching location data:', error)
                setPhoneCode('India')
                setCountry('India')
                getAllStates1('IN')
                setCountryIsoCode('IN')
                setLocation('India')
            })
    }, [])

    const [mobileNumber, setMobileNumber] = useState('')
    const [mobileNumberError, SetMobileNumberError] = useState('')
    const updateMobileNumber = (e) => {
        setMobileNumber(e.currentTarget.value)
        if (!/^[0-9]+$/.test(e.currentTarget.value)) {
            SetMobileNumberError('Phone number should only contain numeric characters (0-9), no spaces or special characters')
        } else if (e.currentTarget.value.length !== 10) {
            SetMobileNumberError('Phone number should have exactly 10 numeric characters')
        } else {
            SetMobileNumberError('')
        }
        setOtpVerify(false)
    }
    const [agreetm, setAgreetm] = useState(true)
    const [agreetmError, setAgreetmError] = useState('')
    const updateAgreetm = (e) => {
        setAgreetm(e.currentTarget.checked)
        setAgreetmError('')
    }

    const [captchaStatus, setCaptchStatus] = useState(false)
    // confirmation message for the user when between the data filling in the form if user get refresh the page
    useEffect(() => {
        getAllCountries1()
        getCountryCodes()
        const handleBeforeUnload = (e) => {
            if (
                fullName ||
                lastName ||
                email ||
                password ||
                confirmPassword ||
                country !== location ||
                state ||
                city ||
                mobileNumber ||
                phoneCode !== location
            ) {
                // Display a confirmation message to the user
                e.preventDefault()
                e.returnValue = '';
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [fullName, lastName, email, country, state, city, password, confirmPassword, mobileNumber, phoneCode, location])

    const [otpverifyModal, setOtpverifyModal] = useState(false)
    const openOtpVerifyModal = () => {
        setOtpverifyModal(true)
    }
    const closeOtpVerifyModal = () => {
        setOtpverifyModal(false)
    }

    const onCaptchaVerify = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {})
        setIsLoadingEffect(false)
    }

    const onSendOtp = () => {
        setIsLoadingEffect(true)
        onCaptchaVerify()
        const userPhoneNumber = "+91" + mobileNumber
        const appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, userPhoneNumber, appVerifier)
            .then((confirmationResult) => {
                openOtpVerifyModal()
                setIsLoadingEffect(false)
                window.confirmationResult = confirmationResult;
                setCaptchStatus(true)
                notifications.show({
                    title: 'Success',
                    message: 'OTP Sent to Your mobile successfully!',
                    color: 'green',
                    zIndex: 9999999,
                })
            }).catch((error) => {
                setIsLoadingEffect(false)
                console.log(error)
            })
    }

    const resendOtp = (mobileNumber) => {
        const userPhoneNumber = "+91" + mobileNumber
        const appVerifier = window.recaptchaVerifier
        if (!appVerifier) {
            console.log("recaptchaVerifier is not properly initialized.")
            return;
        }
        console.log('appVerifier', appVerifier)
        console.log("Before signInWithPhoneNumber");
        signInWithPhoneNumber(auth, userPhoneNumber, appVerifier)
            .then((confirmationResult) => {
                console.log("signInWithPhoneNumber Success:", confirmationResult)
                // Rest of your code
            })
            .catch((error) => {
                console.log("signInWithPhoneNumber Error:", error)
                // Handle the error
            })
        console.log("After signInWithPhoneNumber")
    }

    const verifyOtp = () => {
        setIsLoadingEffect(true)
        window.confirmationResult.confirm(otp)
            .then((result) => {
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Success',
                    message: 'OTP verified successfully!',
                    color: 'green',
                    zIndex: 9999999,
                })
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        console.log('user is created')
                    })
                    .catch((error) => {
                        setIsLoadingEffect(false)
                        console.log(error)
                        // if (error.code === 'auth/email-already-in-use') {
                        //     notifications.show({
                        //         title: 'Provided email is already registered with us !',
                        //         message: 'Please login!!!',
                        //         color: 'green',
                        //         zIndex: 9999999,
                        //     })
                        // }
                    })
                setOtpVerify(true)
                closeOtpVerifyModal()
            }).catch((error) => {
                console.log('error', error)
                notifications.show({
                    title: 'Invalid OTP!',
                    message: 'Please try again',
                    color: 'red',
                    zIndex: 9999999,
                })
                setOtp('')
                setIsLoadingEffect(false)
            })
    }

    const updateSignUpform = () => {
        setIsLoadingEffect(true)
        if (fullName === '') {
            setFullNameError('enter first name')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^[A-Za-z\s]+$/.test(fullName)) {
            setFullNameError('it should contain only letters (no numbers or special characters)')
            setIsLoadingEffect(false);
            return false;
        }
        if (lastName === '') {
            setLastNameError('enter your last name')
            setIsLoadingEffect(false)
            return false
        }
        if (email === '') {
            setEmailError('enter email')
            setIsLoadingEffect(false)
            return false
        }
        if (validator.isEmail(email) === false) {
            setEmailError('Enter the valid email address')
            setIsLoadingEffect(false)
            return false
        }
        if (password === '') {
            setPasswordError('enter the password')
            setIsLoadingEffect(false)
            return false
        }
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must have at least 6 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)')
            setIsLoadingEffect(false);
            return false
        }
        if (confirmPassword === '') {
            setConfirmpasswordError('enter the confirm password')
            setIsLoadingEffect(false)
            return false
        }
        if (password !== confirmPassword) {
            setConfirmpasswordError('password is not matching')
            setIsLoadingEffect(false)
            return false
        }
        if (country === null) {
            setCoutryError('select the country')
            setIsLoadingEffect(false)
            return false
        }
        if (state === null) {
            setStateError('select the state')
            setIsLoadingEffect(false)
            return false
        }
        if (city === null) {
            setCityError('select the city')
            setIsLoadingEffect(false)
            return false
        }
        if (mobileNumber === '') {
            SetMobileNumberError('enter the mobile number')
            setIsLoadingEffect(false)
            return false
        }
        if (!/^[0-9]+$/.test(mobileNumber)) {
            SetMobileNumberError('Phone number should only contain numeric characters (0-9)')
            setIsLoadingEffect(false);
            return false
        }
        if (mobileNumber.length !== 10) {
            SetMobileNumberError('Mobile number should contain exactly 10 digits')
            setIsLoadingEffect(false);
            return false
        }
        if (agreetm === false) {
            setAgreetmError('accept terms and conditions')
            setIsLoadingEffect(false)
            return false
        }
        onSendOtp()
    }

    const handleSignup = () => {
        notifications.show({
            title: 'Success',
            message: 'Successfully signed in',
            color: 'green',
            zIndex: 9999999,
        })
        userLoggedin(true)
        navigate('/')
        set(ref(db, `users/${userid}/userSignupdata`), {
            fullName,
            lastName,
            userEmail: email,
            password,
            country,
            state,
            city,
            phoneCode,
            mobileNumber,
            recievedDate,
        })
            .then((res) => {
                console.log('user signup data posted successfully')
            })
            .catch((error) => {
                console.log('user signup error', error)
            })
    }

    // signup with google
    const signInWithGoogle = async () => {
        setIsLoadingEffect(true)
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            const newPassword = cryptoRandomString({ length: 6 })
            createUserWithEmailAndPassword(auth, user.email, newPassword)
                .then((userCredential) => {
                    set(ref(db, `users/${userid}/userSignupdata`), {
                        email: user.email,
                        social: 'Google'
                    })
                        .then((res) => {
                            console.log('user signup data posted successfully')
                        })
                        .catch((error) => {
                            console.log('user signup error', error)
                        })
                    notifications.show({
                        title: 'Success',
                        message: 'successfully signed in! 🤥',
                        color: 'green',
                        zIndex: 9999999,
                    })
                    userLoggedin(true)
                    navigate('/')
                    setIsLoadingEffect(false)
                })
                .catch((error) => {
                    setIsLoadingEffect(false)
                    console.log(error)
                    if (error.code === 'auth/email-already-in-use') {
                        notifications.show({
                            title: 'Success !',
                            message: 'Sucessfully Signed in !',
                            zIndex: 9999999,
                            color: 'green',
                            icon: <IconCheck />,
                        })
                        userLoggedin(true)
                        navigate('/')
                    }
                })
        }
        catch (error) {
            setIsLoadingEffect(false)
            console.error("Google Sign-In Error:", error)
        }
    }


    return (
        <Container size={550} pt={60} pb={60} className='loginform'>
            <Text weight={700} size={25} ta="center" py={10} fs="italic" td="underline" color='#8c3838'>Sign Up</Text>
            <Card withBorder>
                <Card.Section inheritPadding py={20}>
                    <Group position='center'>
                        <Button variant='default' onClick={signInWithGoogle}>
                            <Image src={googleicon} height={20} width={20} />
                            <Text weight={700} ml={10}>Google</Text>
                        </Button>
                        <Button variant='default'>
                            <Image src={facebookicon} height={20} width={20} />
                            <Text weight={700} ml={10}>Facebook</Text>
                        </Button>
                        <Button variant='default'>
                            <Image src={linkdinicon} height={20} width={20} />
                            <Text weight={700} ml={10}>Linkdin</Text>
                        </Button>
                    </Group>
                    <Divider label={<Text size="sm" weight={600}>or</Text>} labelPosition="center" pt={20} size="sm" />
                    <Grid mt={10} mb={10}>
                        <Grid.Col md={6}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">First Name</Text>}
                                placeholder='enter your name'
                                withAsterisk
                                value={fullName}
                                error={fullNameError}
                                onChange={updateFullName}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">LastName</Text>}
                                placeholder='enter your last name'
                                withAsterisk
                                value={lastName}
                                error={lastNameError}
                                onChange={updateLastName}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <TextInput
                                label={<Text weight={600} display="inline-block">Email</Text>}
                                placeholder='enter your email'
                                withAsterisk
                                value={email}
                                error={emailError}
                                onChange={updateEmail}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <PasswordInput
                                label={<Text weight={600} display="inline-block">Password</Text>}
                                placeholder='enter your password'
                                withAsterisk
                                value={password}
                                error={passwordError}
                                onChange={updatePassword}
                                onPaste={handlePasswordPaste}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <PasswordInput
                                label={<Text weight={600} display="inline-block">Confirm Password</Text>}
                                placeholder='enter your password'
                                withAsterisk
                                value={confirmPassword}
                                error={confirmPasswordError}
                                onChange={updateConfirmPassword}
                                onPaste={handlePasswordPaste}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Select
                                label={<Text weight={600} display="inline-block">Country Of Resident</Text>}
                                placeholder="select country"
                                withinPortal
                                data={allCountries}
                                searchable
                                withAsterisk
                                value={country}
                                error={countryError}
                                onChange={updateCountry}
                                nothingFound={<Text color='red' weight={600} size={14}>Nothing Found</Text>}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Select
                                label={<Text weight={600} display="inline-block">State</Text>}
                                placeholder="select state"
                                withAsterisk
                                searchable
                                nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                data={allstates}
                                value={state}
                                error={stateError}
                                onChange={updateState}
                            />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Select
                                label={<Text weight={600} display="inline-block">City</Text>}
                                placeholder="select city"
                                withAsterisk
                                searchable
                                nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                data={allcities}
                                value={city}
                                error={cityError}
                                onChange={updateCity}
                            />
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Input.Wrapper label={<Text weight={600} display="inline-block">Mobile Number</Text>} withAsterisk>
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
                                            placeholder='enter your mobile number'
                                            withAsterisk
                                            value={mobileNumber}
                                            error={mobileNumberError}
                                            onChange={updateMobileNumber}
                                        />
                                    </Grid.Col>
                                </Grid>
                            </Input.Wrapper>
                        </Grid.Col>
                        <Grid.Col md={12}>
                            <Checkbox
                                label={<Text size={15} component='a' href='/privacypolicy'>agree the terms and conditions of opulentus</Text>}
                                checked={agreetm}
                                error={agreetmError}
                                onChange={updateAgreetm}
                            />
                        </Grid.Col>
                        {
                            captchaStatus === false &&
                            <Grid.Col md={12}>
                                <div id="recaptcha-container"></div>
                            </Grid.Col>
                        }
                        <Grid.Col md={12}>
                            {
                                otpVerify ?
                                    <Button size='md' color='red' mt={10} fullWidth onClick={handleSignup}>Signup</Button>
                                    :
                                    <Button size='md' color='red' fullWidth onClick={updateSignUpform} >Send otp</Button>
                            }
                        </Grid.Col>
                    </Grid>
                    <Text ta="center" size={15} weight={600}> already have an account? <Link to="/" style={{ textDecoration: "underline" }}>Sign in</Link></Text>
                </Card.Section>
                <LoadingOverlay visible={isLoadingEffect} />
            </Card>

            {/* otp verify modal */}
            <Modal
                opened={otpverifyModal}
                onClose={closeOtpVerifyModal}
                withCloseButton={false}
                zIndex={999999999}
                closeOnClickOutside={false}
                closeOnEscape={false}
                centered={true}
            >
                <TextInput
                    label={<Text weight={600} display="inline-block">OTP</Text>}
                    placeholder='enter otp'
                    withAsterisk
                    value={otp}
                    onChange={(e) => { setOtp(e.currentTarget.value) }}
                />
                <Group mt={10} position='right'>
                    <Button onClick={verifyOtp} >Verify</Button>
                    <Button onClick={resendOtp} variant='default'>Resend</Button>
                </Group>
                <LoadingOverlay visible={isLoadingEffect} />
            </Modal>
        </Container>
    )
}

export default Signuppagewrapper