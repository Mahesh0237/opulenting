import { Anchor, Divider, Grid, Group, Stack, Text, TextInput, Button, Select, LoadingOverlay, Checkbox, Input, Loader } from '@mantine/core'
import { IconPhone } from '@tabler/icons-react'
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import validator from 'validator';
import { notifications } from '@mantine/notifications';
import { UserAuth } from '../App'
import { getDatabase, ref, set } from 'firebase/database'
import app from './firebase'
function Footer() {
    const db = getDatabase(app)
    const { userid } = useContext(UserAuth)

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
        if (!/^[A-Za-z\s]+$/.test(event.currentTarget.value)) {
            setFirstNameError('it should contain only letters (no numbers or spaces or special characters)')
        } else {
            setFirstNameError('')
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
        setPhoneCode(value)
        setCountryerror('')
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
        if (!/^[0-9]+$/.test(e.currentTarget.value)) {
            setPhoneNumberError('Phone number should only contain numeric characters (0-9), no spaces or special characters')
        } else if (e.currentTarget.value.length !== 10) {
            setPhoneNumberError('Phone number should have exactly 10 numeric characters')
        } else {
            setPhoneNumberError('')
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
                email ||
                country !== 'India' ||
                phoneNumber ||
                phoneCode !== country
            ) {
                // Display a confirmation message to the user
                e.preventDefault();
                e.returnValue = '';
            }
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            // Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [firstName, email, country, phoneNumber, phoneCode])

    // fetching the user current location
    useEffect(() => {
        userLocation()
    }, [])

    const userLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=4b2fb817b25241ee879b438a29911012 `)
                .then((response) => {
                    const country = response.data.results[0].components.country
                    setCountry(country)
                })
                .catch((error) => {
                    console.error('Error fetching country:', error)
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
            setPhoneNumberError('Phone number should contain exactly 10 digits');
            setIsLoadingEffect(false);
            return false;
        }
        if (agreetm === false) {
            setAgreetmError('accept terms and conditions')
            setIsLoadingEffect(false)
            return false
        }
        set(ref(db, `users/${userid}/userRequestedData`), {
            FullName: firstName,
            email,
            phoneNumber,
            country,
            recievedDate
        })
            .then((res) => {
                setIsLoadingEffect(false)
                setFirstName('')
                setEmail('')
                setPhoneCode('India')
                setPhoneNumber('')
                setCountry('India')
                setAgreetm(true)
                notifications.show({
                    title: 'Success',
                    message: 'Request sent successfully!',
                    color: 'green',
                    zIndex: 9999999,
                })
            })
            .catch((error) => {
                console.log(error)
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Failed',
                    message: 'Failed to submit the data! 🤥',
                    color: 'red',
                    zIndex: 9999999,
                })
            })
    }

    return (
        <footer className="pb-5 pt-6">
            <div className='container footerclass'>
                <Grid>
                    <Grid.Col xs={4} sm={4} md={1.5} >
                        <div className="mb-4">
                            <h5 className="text-white mb-0 ls-md">COUNTRY</h5>
                        </div>
                        <ul className="list-unstyled mb-0 lh-lg">
                            <li>
                                <a href="/allproducts" className="text-link">Canada</a>
                            </li>
                            <li>
                                <a href="/allproducts" className="text-link">United States</a>
                            </li>
                            <li>
                                <a href="/allproducts" className="text-link">United Kingdom</a>
                            </li>
                            <li>
                                <a href="/allproducts" className="text-link">Australia</a>
                            </li>
                            <li>
                                <a href="/allproducts" className="text-link">Germany</a>
                            </li>
                            <li>
                                <a href="/upiscan" target='_blank' className="text-link"> Upi scan </a>
                            </li>
                        </ul>
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4} md={1.5}>
                        <div className="mb-4">
                            <h5 className="text-white mb-0 ls-md">VISAS</h5>
                        </div>
                        <ul className="list-unstyled mb-0 lh-lg">
                            <li>
                                <a href="/student_visa" className="text-link">Students Visa</a>
                            </li>
                            <li>
                                <a href="/business_visa" className="text-link">Business Visa</a>
                            </li>
                            <li>
                                <a href="/tourist-visa" className="text-link">Tourist Visa</a>
                            </li>
                            <li>
                                <a href="/dependent_visa" className="text-link">Dependent Visa</a>
                            </li>
                            <li>
                                <a href="/migrate" className="text-link">Migrate Visa</a>
                            </li>
                        </ul>
                    </Grid.Col>
                    <Grid.Col xs={4} sm={4} md={1.5}>
                        <div className="mb-4">
                            <h5 className="text-white mb-0 ls-md">CONNECT</h5>
                        </div>
                        <ul className="list-unstyled mb-0 lh-lg">
                            <li>
                                <a href="https://www.facebook.com/opulenting" target='blank' className="text-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook " viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                                    </svg>
                                    <span className="ms-2">Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/opulentus-consulting/about/?viewAsMember=true" target='blank' className="text-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin " viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                                    </svg>
                                    <span className="ms-2">Linked In</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/send?phone=916309888481&text=Hello,I have a question about opulenting.com" target='blank' className="text-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    <span className="ms-2">Whatsup</span>
                                </a>
                            </li>
                        </ul>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={2.5}>
                        <div className="mb-4">
                            <h5 className="text-white mb-0 ls-md ">HYDERABAD</h5>
                        </div>
                        <Stack spacing="xs">
                            <h6 className='text-link'><IconPhone size={16} /> +91-6309888481</h6>
                            <h5 className='text-link'>
                                Suite 2# 908, 9th Floor ,
                                Kadaris Apurupa Urban II,
                                Botanical Garden Road,
                                Near CHIREC International School,
                                Hyderabad- 500084
                            </h5>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={2.5}>
                        <div className="mb-4">
                            <h5 className="text-white mb-0 ls-md">BENGALURU</h5>
                        </div>
                        <Stack spacing="xs">
                            <h6 className='text-link'><IconPhone size={15} /> +91-6309888481</h6>
                            <h5 className='text-link'>
                                401, 4th Floor, Altair Apartments to Reliaable Acacia Apartments, Green Glen Layout, Bellandur, Bengaluru, Karnataka-560103
                            </h5>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={2.5}>
                        <Grid p={0}>
                            <Grid.Col md={12}>
                                <Text size={15} color='white'>QUICK ENQUIREY</Text>
                            </Grid.Col>
                            <Grid.Col sm={12} md={12} lg={12} xl={12}>
                                <TextInput
                                    placeholder='Full Name'
                                    withAsterisk
                                    value={firstName}
                                    error={firstNameError}
                                    onChange={updateFirstName}
                                    autoComplete='off'
                                />
                            </Grid.Col>
                            <Grid.Col sm={12} md={12} lg={12} xl={12}>
                                <TextInput
                                    placeholder="Email"
                                    required
                                    value={email}
                                    error={emailError}
                                    onChange={updatEmail}
                                />
                            </Grid.Col>
                            <Grid.Col sm={12} md={12} lg={12} xl={12}>
                                <Select
                                    placeholder="Country of Resident"
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
                            <Grid.Col md={12} lg={12} xl={12}>
                                <Input.Wrapper withAsterisk>
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
                                                placeholder='Mobile number'
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
                                    label={<Text size={15} component='a' href='/privacypolicy' color='white' >I agree and accept Privacy Policy</Text>}
                                    checked={agreetm}
                                    error={agreetmError}
                                    onChange={updateAgreetm}
                                />
                            </Grid.Col>
                            <Grid.Col md={12}>
                                <Button variant='default' size='sm' fullWidth onClick={updateForm}> Send Request</Button>
                            </Grid.Col>
                        </Grid>
                        <LoadingOverlay visible={isLoadingEffect} />
                    </Grid.Col>
                </Grid>
                <Divider mt={15} />
                <Group position='apart' mt={3}>
                    <Text className=" mb-0 text-center text-link" size={14}>Copyright © 2023 <Link to="/"> Opulenting</Link>. All Rights Reserved.</Text>
                    <div>
                        <Anchor href='/refund-policy' mr="md"><Text size={14} className='text-link' style={{ display: "inline-block" }}>Refund Policy</Text></Anchor>
                        <Anchor href='/copy-right' mr="md"><Text size={14} className='text-link' style={{ display: "inline-block" }}>Copy Right</Text></Anchor>
                        <Anchor href='/anti_fraudpolicy' mr="md"><Text size={14} className='text-link' style={{ display: "inline-block" }}>Anti fraud Policy</Text></Anchor>
                        <Anchor href='/privacypolicy' mr="md"><Text size={14} className='text-link' style={{ display: "inline-block" }}>Privacy Policy</Text></Anchor>
                        <Anchor href='/return-policy' mr="md"><Text size={14} className='text-link' style={{ display: "inline-block" }}>Return Policy</Text></Anchor>
                    </div>
                </Group>
            </div>
        </footer>
    )
}

export default Footer