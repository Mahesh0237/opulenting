
import { Button, Card, Chip, Container, Grid, Group, Input, LoadingOverlay, Radio, Select, SimpleGrid, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { notifications } from '@mantine/notifications';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../App';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import app from './firebase';
import Monthyearpicklerwrapper from './shared/monthyearpickler/Monthyearpicklerwrapper';
import moment from 'moment';
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage'
import { Dropzone } from '@mantine/dropzone';

function generateUniqueId() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0].toString();
}

function Employmentwrapper() {
  const uniqueId = generateUniqueId();
  const { userid } = useContext(UserAuth)
  const db = getDatabase(app);
  const navigate = useNavigate()
  const date = new Date()
  const recievedDate = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

  const [isLoadingoverlayEffect, setIsLoadingoverlayEffect] = useState(false)
  const [currentlyEmployed, setCurrentlyEmployed] = useState('Yes')
  const updateCurrentlyEmployed = (value) => {
    setCurrentlyEmployed(value)
    setCompanyName('')
    setDesignation('')
    setJoiningDate(null)
    setSkillsUsed('')
    setJobProfile('')
    setNoticePeriod(null)
    setWorkedTill(null)
    setTotalWorkExp('')
    setCurrencyType(null)
    setSalaryAmount('')
  }

  const [companyName, setCompanyName] = useState('')
  const [companyNameError, setCompanyNameError] = useState('')
  const updateCompanyName = (e) => {
    setCompanyName(e.currentTarget.value)
    setCompanyNameError('')
  }

  const [designation, setDesignation] = useState('')
  const [designationError, setDesignationError] = useState('')
  const updateDesignation = (e) => {
    setDesignation(e.currentTarget.value)
    setDesignationError('')
  }
  const [joiningDate, setJoiningDate] = useState(null)
  const [joiningDateError, setJoiningDateError] = useState('')
  const updateJoiningDate = (value) => {
    setJoiningDate(value)
    setJoiningDateError('')
  }

  const [skillsUsed, setSkillsUsed] = useState('')
  const [skillsUsedError, setSkillsUsedError] = useState('')
  const updateSkillsUsed = (e) => {
    setSkillsUsed(e.currentTarget.value)
    setSkillsUsedError('')
  }

  const [jobProfile, setJobProfile] = useState('')
  const [jobProfileError, setJobProfileError] = useState('')
  const updateJobProfile = (e) => {
    setJobProfile(e.currentTarget.value)
    setJobProfileError('')
  }
  const [noticePeriod, setNoticePeriod] = useState(null)
  const [noticePeriodError, setNoticePeriodError] = useState('')
  const updateNoticePeriod = (value) => {
    setNoticePeriod(value)
    setNoticePeriodError('')
  }
  const [workedTill, setWorkedTill] = useState(null)
  const [workedTillError, setWorkedTillError] = useState('')
  const updateWorkedTill = (value) => {
    setWorkedTill(value)
    setWorkedTillError('')
  }

  const [annualSalary, setAnnualSalary] = useState('')
  const [annualSalaryError, setAnnualSalaryError] = useState('')
  const updateAnnualSalary = (e) => {
    setAnnualSalary(e.currentTarget.value)
    setAnnualSalaryError('')
  }
  const [totalWorkExp, setTotalWorkExp] = useState('')
  const [totalWorkexpError, setTotalWorkexpError] = useState('')
  const updateTotalWorkexp = (e) => {
    setTotalWorkExp(e.currentTarget.value)
    if (!/^[0-9]+$/.test(e.currentTarget.value)) {
      setTotalWorkexpError('it should only contain numeric characters (0-9), no spaces or special characters')
    } else {
      setTotalWorkexpError('')
    }

  }

  const [currencyType, setCurrencyType] = useState(null)
  const updateCurrencyType = (value) => {
    setCurrencyType(value)
  }
  const [salaryAmount, setSalaryAmount] = useState('')
  const updateSalaryAmount = (e) => {
    setSalaryAmount(e.currentTarget.value)
  }

  const [cvFile, setCvFile] = useState(null)
  const handleCvFileDrop = (files) => {
    setIsLoadingoverlayEffect(true)
    const [file] = files
    if (file) {
      setCvFile(file)
      const cvDataRef = ref(db, `users/${userid}/resume`)
      const uniqueFileName = `${Date.now()}_${file.name}`
      const storage = getStorage(app)
      const cvRef = storageRef(storage, `resumes/${uniqueFileName}`)

      // Upload the file to Firebase Storage
      uploadBytes(cvRef, file)
        .then(() => {
          // Get the download URL of the uploaded file directly from cvRef
          setIsLoadingoverlayEffect(false)
          return getDownloadURL(cvRef);
        })
        .then((downloadURL) => {
          // Store the download URL in Firebase Realtime Database
          const cvData = {
            downloadURL,
            fileName: file.name,
          }

          // Use the `set` function to set the data at the specified location
          set(cvDataRef, cvData)
            .then(() => {
              setIsLoadingoverlayEffect(false)
            })
            .catch((error) => {
              setIsLoadingoverlayEffect(false);
              console.error('Error uploading CV:', error)
            })
        })
        .catch((error) => {
          setIsLoadingoverlayEffect(false);
          console.error('Error uploading CV:', error)
        })
    }
  }

  const updateForm = () => {
    setIsLoadingoverlayEffect(true)
    if (companyName === '') {
      setCompanyNameError('enter the company name')
      setIsLoadingoverlayEffect(false)
      return false
    }
    if (designation === '') {
      setDesignationError('enter the designation')
      setIsLoadingoverlayEffect(false)
      return false
    }
    if (joiningDate === null) {
      setJoiningDateError('slect the year')
      setIsLoadingoverlayEffect(false)
      return false
    }
    if (currentlyEmployed === 'No') {
      if (workedTill === null) {
        setWorkedTillError('select the year')
        setIsLoadingoverlayEffect(false)
        return false
      }
    } else {
      if (annualSalary === '') {
        setAnnualSalaryError('enter the annual salary')
        setIsLoadingoverlayEffect(false)
        return false
      }
      if (skillsUsed === '') {
        setSkillsUsedError('enter the skills')
        setIsLoadingoverlayEffect(false)
        return false
      }
      if (noticePeriod === null) {
        setNoticePeriodError('selct the noticeperiod0')
        setIsLoadingoverlayEffect(false)
        return false
      }
    }
    if (jobProfile === '') {
      setJobProfileError('enter the jobprofle')
      setIsLoadingoverlayEffect(false)
      return false
    }
    if (totalWorkExp === '') {
      setTotalWorkexpError('enter total work exp')
      setIsLoadingoverlayEffect(false)
      return false
    }

    let joining_date;
    if (joiningDate !== null) {
      joining_date = moment(joiningDate).format('YYYY-MM')
    } else {
      joining_date = null;
    }

    let worked_till;
    if (workedTill !== null) {
      worked_till = moment(workedTill).format('YYYY-MM')
    } else {
      worked_till = null;
    }

    // posting the data into the firebase
    set(ref(db, `users/${userid}/userdetails/Employmentdata/${uniqueId}`), {
      currentlyEmployed,
      companyName,
      designation,
      joining_date,
      currencyType,
      salaryAmount,
      skillsUsed,
      worked_till,
      noticePeriod,
      jobProfile,
      totalWorkExp,
      recievedDate
    })
      .then((res) => {
        setIsLoadingoverlayEffect(false)
        console.log('user employment data posted successfully')
        navigate('/homepage')
        notifications.show({
          title: 'Success',
          message: 'your data stored successfully! 🤥',
          color: 'green',
          zIndex: 9999999,
        })
      })
      .catch((error) => {
        console.log('user employment data posting failed ', error)
        setIsLoadingoverlayEffect(false)
      })
  }
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (
        companyName ||
        designation ||
        joiningDate ||
        currencyType ||
        salaryAmount ||
        skillsUsed ||
        noticePeriod ||
        jobProfile ||
        totalWorkExp ||
        workedTill
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
  }, [companyName, designation, joiningDate, currencyType, salaryAmount, skillsUsed, noticePeriod, jobProfile, totalWorkExp, workedTill])

  useEffect(() => {
    const starCountRef = ref(db, `users/${userid}/Employmentdata`);
    onValue(starCountRef, (snapshot) => {
      const user_data = snapshot.val();
      if (user_data) {
        setCurrentlyEmployed(user_data.currentlyEmployed)
        setCompanyName(user_data.companyName)
        setDesignation(user_data.designation)
        setJoiningDate(user_data.joining_date)
        setSkillsUsed(user_data.skillsUsed)
        setJobProfile(user_data.jobProfile)
        setNoticePeriod(user_data.noticePeriod)
        setWorkedTill(user_data.worked_Till)
        setTotalWorkExp(user_data.totalWorkExp)
        setCurrencyType(user_data.currencyType)
        setSalaryAmount(user_data.salaryAmount)
      }
    });
  }, [])

  return (
    <Container py={50}>
      <Card withBorder py={10} className='loginform'>
        <Card.Section inheritPadding withBorder py={20}>
          <Text color='rgb(255, 0, 0)' size={20} mb={3} weight={600}>Add Your Employment</Text>
          <Text size={15}>Employment details help recruiters understand your background</Text>
        </Card.Section>
        <Card.Section inheritPadding withBorder py={20}>
          <Grid>
            <Grid.Col xs={12} sm={12} md={12} lg={12}>
              <Radio.Group
                label={<Text weight={600} display="inline-block">Are you currently Employed</Text>}
                withAsterisk
                value={currentlyEmployed}
                onChange={updateCurrentlyEmployed}
              >
                <Group mt="xs">
                  <Radio value="Yes" label="Yes" />
                  <Radio value="No" label="No" />
                </Group>
              </Radio.Group>
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <TextInput
                label={
                  currentlyEmployed === 'Yes' ?
                    <Text weight={600} display="inline-block">Current Company Name</Text>
                    :
                    <Text weight={600} display="inline-block">Previous Company Name</Text>
                }
                placeholder='enter the company name'
                withAsterisk
                value={companyName}
                error={companyNameError}
                onChange={updateCompanyName}
              />
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <TextInput
                label={
                  currentlyEmployed === 'Yes' ?
                    <Text weight={600} display="inline-block">Current Designation</Text>
                    :
                    <Text weight={600} display="inline-block">Previous Designation</Text>
                }
                placeholder='enter the designation'
                withAsterisk
                value={designation}
                error={designationError}
                onChange={updateDesignation}
              />
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <Input.Wrapper label={<Text weight={600} display="inline-block">Joining Date</Text>} withAsterisk error={joiningDateError}>
                <Monthyearpicklerwrapper
                  value={joiningDate}
                  oldYears={100}
                  currentYear={new Date().getFullYear()}
                  onDateChange={updateJoiningDate}
                />
              </Input.Wrapper>
            </Grid.Col>
            {
              currentlyEmployed === 'No' ?
                <Grid.Col xs={6} sm={4} md={4} lg={4}>
                  <Input.Wrapper label={<Text weight={600} display="inline-block">Worked Till</Text>} withAsterisk error={workedTillError}>
                    <Monthyearpicklerwrapper
                      value={workedTill}
                      oldYears={100}
                      currentYear={new Date().getFullYear()}
                      onDateChange={updateWorkedTill}
                    />
                  </Input.Wrapper>
                </Grid.Col>
                :
                <>
                  <Grid.Col xs={6} sm={4} md={4} lg={4}>
                    <Input.Wrapper
                      label={<Text weight={600} display="inline-block" withAsterisk>Annual Salary</Text>}
                      value={annualSalary}
                      error={annualSalaryError}
                      onChange={updateAnnualSalary}
                    >
                      <Grid gutter="xs">
                        <Grid.Col span={4}>
                          <Select
                            placeholder='Rs.'
                            searchable
                            value={currencyType}
                            onChange={updateCurrencyType}
                            data={[
                              { value: '₹', label: '₹' },
                              { value: '$', label: '$' }
                            ]}
                          />
                        </Grid.Col>
                        <Grid.Col span={8}>
                          <TextInput
                            placeholder='enter the amount'
                            value={salaryAmount}
                            onChange={updateSalaryAmount}
                          />
                        </Grid.Col>
                      </Grid>
                    </Input.Wrapper>
                  </Grid.Col>
                  <Grid.Col xs={6} sm={4} md={4} lg={4}>
                    <TextInput
                      label={<Text weight={600} display="inline-block">Skills Used</Text>}
                      placeholder='enter your skills'
                      withAsterisk
                      value={skillsUsed}
                      error={skillsUsedError}
                      onChange={updateSkillsUsed}
                    />
                  </Grid.Col>
                  <Grid.Col xs={6} sm={4} md={4} lg={4}>
                    <Select
                      label={<Text weight={600} display="inline-block">Notice Period</Text>}
                      placeholder='select your notice period'
                      withAsterisk
                      searchable
                      value={noticePeriod}
                      error={noticePeriodError}
                      onChange={updateNoticePeriod}
                      data={[
                        { value: '15 days or less', label: '15 days or less' },
                        { value: '1 Month', label: '1 Month' },
                        { value: '2 Months', label: '2 Months' },
                        { value: '3 Months', label: '3 Months' },
                        { value: 'More than 3 Months', label: 'More than 3 Months' }
                      ]}
                    />
                  </Grid.Col>
                </>
            }
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <Textarea
                label={<Text weight={600} display="inline-block">Job Profile</Text>}
                placeholder='enter jobprofile'
                withAsterisk
                autosize
                value={jobProfile}
                error={jobProfileError}
                onChange={updateJobProfile}
              />
            </Grid.Col>
            <Grid.Col xs={6} sm={4} md={4} lg={4}>
              <TextInput
                label={<Text weight={600} display="inline-block">Total work Experience</Text>}
                placeholder="enter your total work experience"
                withAsterisk
                value={totalWorkExp}
                error={totalWorkexpError}
                onChange={updateTotalWorkexp}
              />
            </Grid.Col>
          </Grid>
        </Card.Section>
        <Card.Section inheritPadding withBorder py={20}>
          <Dropzone
            label="Resume"
            onDrop={handleCvFileDrop}
            onReject={() => {
              notifications.show({
                title: 'Failed to Upload CV!',
                message: 'supported format in pdf/msword !',
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
        </Card.Section>
        <Card.Section inheritPadding pt={20}>
          <Group position='apart'>
            <Button variant='default' component='a' href='/education'>Previous</Button>
            <Button color='dark' onClick={updateForm}> Submit</Button>
          </Group>
        </Card.Section>
        <LoadingOverlay visible={isLoadingoverlayEffect} />
      </Card>
    </Container>
  )
}

export default Employmentwrapper