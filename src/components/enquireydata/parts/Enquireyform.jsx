import React, { useState, useEffect } from 'react'
import Datepicklerwrapper from '../../shared/datepickler/Datepicklerwrapper'
import { Button, Card, Grid, Group, Input, Loader, LoadingOverlay, Select, Stack, Text, TextInput, Textarea } from '@mantine/core'
import axios from 'axios'
import { get, getDatabase, ref, set } from 'firebase/database'
import app from '../../firebase'
import { notifications } from '@mantine/notifications'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from '@firebase/storage'
import { Dropzone } from '@mantine/dropzone'
import validator from 'validator'
import moment from 'moment'
function Enquireyform({ freeevaluation, activeTab, userid }) {

    const [isLoadingEffect, setIsLoadingEffect] = useState(false)

    const db = getDatabase(app)

    const date = new Date();
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    const recievedDate = date.toLocaleString('en-IN', options).replace(/[\/:]/g, '_')

    const [countries, setCountries] = useState([])
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
                    return {
                        value: `${country?.idd?.root || ''}${country.idd.suffixes?.[0]}`,
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

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const updateName = (e) => {
        setName(e.currentTarget.value)
        if (!/^[A-Za-z\s]+$/.test(e.currentTarget.value)) {
            setNameError('it should contain only letters (no numbers or special characters)')
            return false
        } else {
            setNameError('')
        }
    }
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const updateEmail = (e) => {
        setEmail(e.currentTarget.value)
        if (validator.isEmail(e.currentTarget.value) === false) {
            setEmailError('enter the valid email')
            return false
        } else {
            setEmailError('')
        }
    }
    const [residingCountry, setResidingCountry] = useState('India')
    const [residingCountryError, setResidingCountryError] = useState('')
    const updateResidingCountry = (value) => {
        setResidingCountry(value)
        setResidingCountryError('')
    }
    const [countryCode, setCountryCode] = useState('+91')
    const [countryCodeError, setCountryCodeError] = useState('')
    const updateCoutryCode = (value) => {
        setCountryCode(value)
        setCountryCodeError('')
    }
    const [mobileNumber, setMobileNumber] = useState('')
    const [mobileNumberError, setMobileNumberError] = useState('')
    const updateMobileNumber = (e) => {
        setMobileNumber(e.currentTarget.value)
        if (!/^[0-9]+$/.test(e.currentTarget.value)) {
            setMobileNumberError('Phone number should only contain numeric characters (0-9), no spaces or special characters')
        } else if (e.currentTarget.value.length !== 10) {
            setMobileNumberError('Phone number should have exactly 10 numeric characters')
        } else {
            setMobileNumberError('')
        }
    }
    const [countryIntrested, setCountryIntrested] = useState('Canada')
    const [countryIntrestedError, setCountryIntrestedError] = useState('')
    const updateCountryIntrested = (value) => {
        setCountryIntrestedError('')
        setCountryIntrested(value)
    }
    const [serviceIntrested, setServiceIntrested] = useState(null)
    const [serviceIntrestedError, setServiceIntrestedError] = useState('')
    const updateServiceIntrested = (value) => {
        setServiceIntrested(value)
        setServiceIntrestedError('')
    }
    const [chosenDate, setChosenDate] = useState(null)
    const [chosenDateError, setChosenDateError] = useState('')
    const updateChosenDate = (value) => {
        setChosenDate(value)
        setChosenDateError('')
    }

    const [timeTocallFrom, setTimeTocallFrom] = useState(null)
    const [timeTocalllFromError, setTimeTocallFromError] = useState('')
    const updateTimetocallfrom = (value) => {
        setTimeTocallFrom(value)
        setTimeTocallFromError('')
    }
    const [timeTocallTo, setTimeTocallTo] = useState(null)
    const [timeTocallToError, setTimeTocallToError] = useState('')
    const updateTimetocallto = (value) => {
        setTimeTocallTo(value)
        setTimeTocallToError('')
    }
    const [enquirey, setEnquirey] = useState('')
    const [enquireyError, setEnquireyError] = useState('')
    const updateEnquirey = (e) => {
        setEnquirey(e.currentTarget.value)
        setEnquireyError('')
    }

    const [cvFile, setCvFile] = useState(null)
    const [resumeUrl, setResumeUrl] = useState({})
    const handleCvFileDrop = (files) => {
        setIsLoadingEffect(true)
        const [file] = files
        if (file) {
            setCvFile(file)
            const uniqueFileName = `${recievedDate}_${file.name}`
            const storage = getStorage(app)
            const cvRef = storageRef(storage, `walkin_enquirey/${uniqueFileName}`)

            // Upload the file to Firebase Storage
            uploadBytes(cvRef, file)
                .then(() => {
                    setIsLoadingEffect(false)
                    return getDownloadURL(cvRef);
                })
                .then((downloadURL) => {
                    const cvData = {
                        downloadURL,
                        fileName: file.name,
                    }
                    setResumeUrl(cvData)
                })
                .catch((error) => {
                    setIsLoadingEffect(false);
                    console.log('Error uploading CV:', error)
                })
        }
    }

    useEffect(() => {
        getCountries()
        getCountryCodes()
    }, [])

    const checkUniqueEmailAndMobile = async (email, mobileNumber) => {
        const usersRef = ref(db, `users/${userid}/user_enquirey_data/${activeTab}`);
        const snapshot = await get(usersRef);

        if (snapshot.exists()) {
            const users = snapshot.val();
            const existingUser = Object.values(users).find(
                (user) => user.email === email || user.mobileNumber === mobileNumber
            );

            if (existingUser) {
                return false;
            }
        }
        return true;
    };

    const [formhide, setFormHide] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoadingEffect(true)
        if (name === '') {
            setIsLoadingEffect(false)
            setNameError('enater the name')
            return false
        }
        if (email === '') {
            setIsLoadingEffect(false)
            setEmailError('enter the email')
            return false
        }
        if (validator.isEmail(email) === false) {
            setIsLoadingEffect(false)
            setEmailError('enter the valid email')
            return false;
        }
        if (mobileNumber === '') {
            setIsLoadingEffect(false)
            setMobileNumberError('enter the mobile number')
            return false
        }
        if (serviceIntrested === null) {
            setIsLoadingEffect(false)
            setServiceIntrestedError('select which service you want')
            return false
        }
        if (freeevaluation) {
            if (enquirey === '') {
                setIsLoadingEffect(false)
                setEnquireyError('enter the message')
                return false
            }
        } else {
            if (chosenDate === null) {
                setIsLoadingEffect(false)
                setChosenDateError('selct the date')
                return false
            }
            if (timeTocallFrom === null) {
                setIsLoadingEffect(false)
                setTimeTocallFromError('select the time')
                return false
            }
            if (timeTocallTo === null) {
                setIsLoadingEffect(false)
                setTimeTocallToError('select the time')
                return false
            }
        }
        let formatedDate;
        if (chosenDate !== null) {
            formatedDate = moment(chosenDate).format('YYYY-MM-DD')
        } else {
            formatedDate = null;
        }
        set(ref(db, `users/${userid}/user_enquirey_data/${activeTab}/${recievedDate}`), {
            name,
            email,
            ResidingCountry: residingCountry,
            countryCode,
            mobileNumber,
            countryIntrested,
            serviceIntrested,
            chosen_Date: formatedDate,
            timeTocallFrom,
            timeTocallTo,
            ResumeUrl: resumeUrl,
            enquirey,
            recievedDate
        })
            .then((res) => {
                setIsLoadingEffect(false)
                notifications.show({
                    title: 'Thank You',
                    message: 'your response has been received, Our team will get back to you soon!',
                    color: 'green',
                    zIndex: 9999999,
                })
                setName('')
                setEmail('')
                setResidingCountry('India')
                setCountryCode('India')
                setMobileNumber('')
                setCountryIntrested('Canada')
                setServiceIntrested(null)
                setChosenDate(null)
                setTimeTocallFrom(null)
                setTimeTocallTo(null)
                setCvFile(null)
                setEnquirey('')
                setFormHide(true)
            })
            .catch((error) => {
                setIsLoadingEffect(false)
                console.log('error', error)
            })
    }

    const handleNextForm = (e) => {
        e.preventDefault()
        setIsLoadingEffect(false)
        if (name === '') {
            setIsLoadingEffect(false)
            setNameError('enater the name')
            return false
        }
        if (email === '') {
            setIsLoadingEffect(false)
            setEmailError('enter the email')
            return false
        }
        if (validator.isEmail(email) === false) {
            setIsLoadingEffect(false)
            setEmailError('enter the valid email')
            return false;
        }
        if (mobileNumber === '') {
            setIsLoadingEffect(false)
            setMobileNumberError('enter the mobile number')
            return false
        }

        const isUnique = checkUniqueEmailAndMobile(email, mobileNumber)
        if (isUnique) {
            setFormHide(false)
            notifications.show({
                title: 'Notification',
                message: 'please fill other details',
                color: 'green',
                zIndex: 9999999,
            })
        } else {
            setFormHide(true)
            notifications.show({
                title: 'Notification',
                message: 'already we have the data with provided email or mobile number',
                color: 'green',
                zIndex: 9999999,
            })
        }
    }

    return (
        <Card withBorder >
            {
                formhide ?
                    <>
                        <form onSubmit={handleNextForm}>
                            <Stack spacing="xs">
                                <TextInput
                                    label={<Text weight={600} size={14} display="inline-block">Name:</Text>}
                                    placeholder='enter the name'
                                    withAsterisk
                                    value={name}
                                    error={nameError}
                                    onChange={updateName}
                                />
                                <TextInput
                                    label={<Text weight={600} size={14} display="inline-block">Email</Text>}
                                    placeholder='enter email'
                                    withAsterisk
                                    value={email}
                                    error={emailError}
                                    onChange={updateEmail}
                                />
                                <Select
                                    label={<Text weight={600} size={14} display="inline-block">Residing Country:</Text>}
                                    placeholder='selct the country'
                                    withAsterisk
                                    searchable
                                    nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                    data={countries}
                                    value={residingCountry}
                                    error={residingCountryError}
                                    onChange={updateResidingCountry}
                                />
                                <Input.Wrapper label={<Text weight={600} size={14} display="inline-block">Mobile Number </Text>} withAsterisk>
                                    <Grid gutter="xs">
                                        <Grid.Col span={5}>
                                            <Select
                                                placeholder='country code'
                                                searchable
                                                data={phonecodes}
                                                nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                                value={countryCode}
                                                error={countryCodeError}
                                                onChange={updateCoutryCode}
                                            />
                                        </Grid.Col>
                                        <Grid.Col span={7}>
                                            <TextInput
                                                placeholder='enter Mobile number'
                                                withAsterisk
                                                value={mobileNumber}
                                                error={mobileNumberError}
                                                onChange={updateMobileNumber}
                                            />
                                        </Grid.Col>
                                    </Grid>
                                </Input.Wrapper>
                                <Group position='right'>
                                    {/* <Button color='teal' onClick={handleNextForm}>Next</Button> */}
                                    <button className='btn btn-success btn-sm' style={{ background: "#12b886", border: "none", padding: "6px 15px" }} onClick={handleNextForm}>Next</button>
                                </Group>
                            </Stack>
                        </form>
                    </>
                    :
                    <>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing="xs">
                                <Select
                                    label={<Text weight={600} size={14} display="inline-block">Country Intrested:</Text>}
                                    placeholder='selct the country'
                                    withAsterisk
                                    searchable
                                    nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                    data={countries}
                                    value={countryIntrested}
                                    error={countryIntrestedError}
                                    onChange={updateCountryIntrested}
                                />
                                <Select
                                    label={<Text weight={600} size={14} display="inline-block">Service Intrested:</Text>}
                                    placeholder='selct the service'
                                    withAsterisk
                                    searchable
                                    nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                    value={serviceIntrested}
                                    error={serviceIntrestedError}
                                    onChange={updateServiceIntrested}
                                    data={[
                                        { value: 'Student Visas', label: 'Student Visas' },
                                        { value: 'Migrate Overseas', label: 'Migrate Overseas' },
                                        { value: 'Temporary Visas', label: 'Temporary Visas' },
                                        { value: 'Work Abroad', label: 'Work Abroad' },
                                        { value: 'Settle Abroad', label: 'Settle Abroad' },
                                        { value: 'Invest Abroad', label: 'Invest Abroad' },
                                        { value: 'Evaluation', label: 'Evaluation' },
                                        { value: 'Dependent Visas', label: 'Dependent Visas' },
                                        { value: 'Concierge Services', label: 'Concierge Services' },
                                        { value: 'Appeals', label: 'Appeals' },
                                        { value: 'Others', label: 'Others' }
                                    ]}
                                />
                                {
                                    freeevaluation ?
                                        <Textarea
                                            label={<Text weight={600} size={14} display="inline-block">Enquiry:</Text>}
                                            withAsterisk
                                            placeholder='message'
                                            value={enquirey}
                                            error={enquireyError}
                                            onChange={updateEnquirey}
                                        />
                                        :
                                        <>
                                            <Input.Wrapper label={<Text weight={600} display="inline-block">Choose Date</Text>} withAsterisk error={chosenDateError} >
                                                <Datepicklerwrapper
                                                    oldYears={100}
                                                    currentYear={new Date().getFullYear()}
                                                    value={chosenDate}
                                                    onDateChange={updateChosenDate}
                                                />
                                            </Input.Wrapper>
                                            <Input.Wrapper label={<Text weight={600} display="inline-block">Best Time To Call</Text>} withAsterisk >
                                                <Grid gutter="xs">
                                                    <Grid.Col span={6}>
                                                        <Select
                                                            placeholder='From time'
                                                            searchable
                                                            data={[
                                                                { value: '09:00 AM', label: '09:00 AM' },
                                                                { value: '10:00 AM', label: '10:00 AM' },
                                                                { value: '11:00 AM', label: '11:00 AM' },
                                                                { value: '12:00 PM', label: '12:00 PM' },
                                                                { value: '01:00 PM', label: '01:00 PM' },
                                                                { value: '02:00 PM', label: '02:00 PM' },
                                                                { value: '03:00 PM', label: '03:00 PM' },
                                                                { value: '04:00 PM', label: '04:00 PM' },
                                                                { value: '05:00 PM', label: '05:00 PM' },
                                                                { value: '06:00 PM', label: '06:00 PM' },
                                                                { value: '06:30 PM', label: '06:30 PM' }
                                                            ]}
                                                            nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                                            value={timeTocallFrom}
                                                            error={timeTocalllFromError}
                                                            onChange={updateTimetocallfrom}
                                                        />
                                                    </Grid.Col>
                                                    <Grid.Col span={6}>
                                                        <Select
                                                            placeholder='To time'
                                                            searchable
                                                            nothingFound={<Text color='red' weight={600}>Nothing Found</Text>}
                                                            data={[
                                                                { value: '09:00 AM', label: '09:00 AM' },
                                                                { value: '10:00 AM', label: '10:00 AM' },
                                                                { value: '11:00 AM', label: '11:00 AM' },
                                                                { value: '12:00 PM', label: '12:00 PM' },
                                                                { value: '01:00 PM', label: '01:00 PM' },
                                                                { value: '02:00 PM', label: '02:00 PM' },
                                                                { value: '03:00 PM', label: '03:00 PM' },
                                                                { value: '04:00 PM', label: '04:00 PM' },
                                                                { value: '05:00 PM', label: '05:00 PM' },
                                                                { value: '06:00 PM', label: '06:00 PM' },
                                                                { value: '06:30 PM', label: '06:30 PM' }
                                                            ]}
                                                            value={timeTocallTo}
                                                            error={timeTocallToError}
                                                            onChange={updateTimetocallto}
                                                        />
                                                    </Grid.Col>
                                                </Grid>
                                            </Input.Wrapper>
                                        </>
                                }
                                <Dropzone
                                    label="Resume"
                                    onDrop={handleCvFileDrop}
                                    onReject={() => {
                                        notifications.show({
                                            title: 'Failed to Upload CV',
                                            message: 'supported format in pdf/msword and not exceed to 5mb',
                                            zIndex: 9999999,
                                            color: 'red',
                                            icon: <IconX />,
                                        })
                                    }}
                                    maxSize={5 * 1024 ** 2}
                                    accept={{
                                        'application/pdf': ['.pdf'],
                                        'application/msword': ['.doc'],
                                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                                    }}
                                >
                                    {cvFile ? (
                                        <Group position="center" spacing="xl" style={{ minHeight: 80 }}>
                                            <Stack align="center" justify="center">
                                                <Text size="xl" inline weight="bold" color="#00A85A">
                                                    {cvFile.name}
                                                </Text>
                                                <Text size="sm" color="dimmed" inline mt={7} align="center">
                                                    File size: {Math.round(cvFile.size / 1024)} KB
                                                </Text>
                                            </Stack>
                                        </Group>
                                    ) : (
                                        <Group position="center" spacing="xl" style={{ minHeight: 80 }}>
                                            <Stack align="center" justify="center">
                                                <Text size="xl" inline weight="bold" color="#00A85A">
                                                    Drop your CV
                                                </Text>
                                                <Text size="sm" color="dimmed" inline mt={7} align="center">
                                                    Attach your Resume, file should not exceed 5mb, supported format's pdf/word
                                                </Text>
                                            </Stack>
                                        </Group>
                                    )}
                                </Dropzone>
                                <Group position='apart'>
                                    <Button onClick={() => { setFormHide(true) }} variant='default'>Back</Button>
                                    {/* <Button color='teal' onClick={handleSubmit}>Submit</Button> */}
                                    <button className='btn btn-success btn-sm' style={{ background: "#12b886", border: "none", padding: "6px 15px" }} onClick={handleSubmit}>Submit</button>
                                </Group>
                            </Stack>
                        </form>
                    </>
            }
            <LoadingOverlay visible={isLoadingEffect} loader={<Loader variant='bars' color='green' />} />
        </Card>
    )
}

export default Enquireyform
