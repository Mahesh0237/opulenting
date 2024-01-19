import { Button, Card, Checkbox, Container, Grid, Group, Select, Stack, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber, resetNumber } from '../redux/actions'
function Test() {
  const dispatch = useDispatch()
  const mystate = useSelector((state) => state.changeTheNumber)

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', password: '', agreetm: false, country: null
  })
  const [error, setError] = useState({
    firstnameError: '', lastnameError: '', emailError: '', passwordError: '', agreetmError: false, countryError: null
  })
  const handleChnage = (name, value) => {
    setFormData({ ...formData, [name]: value })
    setError({ ...error, [`${name}Error`]: '' })
  }
  const handleSubmit = () => {
    const { firstname, lastname, email, password, country, agreetm } = formData
    console.log('formData', formData)

    const newErrors = {
      firstnameError: firstname === '' ? 'First name is required' : '',
      lastnameError: lastname === '' ? 'Last name is required' : '',
      emailError: email === '' ? 'Email is required' : '',
      passwordError: password === '' ? 'Password is required' : '',
      agreetmError: !agreetm ? 'You must agree to terms and conditions' : '',
      countryError: country === null ? 'Please select a country' : '',
    }

    setError(newErrors)

    // Check if there are no errors before submitting
    if (Object.values(newErrors).every((err) => err === '')) {
      console.log('Form submitted successfully:', formData);
      const data = {
        firstname: '', lastname: '', email: '', password: '', agreetm: false, country: null
      }
      setFormData(data)
      // Add your logic to submit the form data
    } else {
      console.log('Form has errors. Please correct them.');
    }
  }

  return (
    <Container>
      <Card withBorder py={100}>
        <Group>
          <Button onClick={() => { dispatch(decNumber()) }}>decrement</Button>
          <TextInput
            value={mystate}
          />
          <Button onClick={() => { dispatch(incNumber()) }}>increment</Button>
          <Button onClick={() => { dispatch(resetNumber()) }}>Reset</Button>
        </Group>
      </Card>
      <Grid>
        <Grid.Col md={12}>
          <TextInput
            label="First Name"
            name='firstname'
            placeholder='enter first name'
            value={formData.firstname}
            error={error.firstnameError}
            onChange={(e) => { handleChnage('firstname', e.target.value) }}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            label="Last Name"
            placeholder='enter last name'
            name='lastname'
            value={formData.lastname}
            error={error.lastnameError}
            onChange={(e) => { handleChnage('lastname', e.target.value) }}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            label="email"
            placeholder='enter email'
            name='email'
            value={formData.email}
            error={error.emailError}
            onChange={(e) => { handleChnage('email', e.target.value) }
            } />
        </Grid.Col>
        <Grid.Col md={12}>
          <TextInput
            label="password"
            placeholder='enter password'
            name='password'
            value={formData.password}
            error={error.passwordError}
            onChange={(e) => { handleChnage('password', e.target.value) }}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <Select
            label="country"
            placeholder='select country'
            name='country'
            value={formData.country}
            error={error.countryError}
            onChange={(value) => { handleChnage('country', value) }}
            data={[
              { value: 'India', label: 'India' },
              { value: 'America', label: 'America' },
              { value: 'China', label: 'China' },
              { value: 'Russia', label: 'Russia' },
            ]}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <Checkbox
            label="I agree terms & conditions"
            value={formData.agreetm}
            error={error.agreetmError}
            onChange={(event) => { handleChnage('agreetm', event.currentTarget.checked) }}
          />
        </Grid.Col>
        <Grid.Col md={12}>
          <Button onClick={handleSubmit} fullWidth>Submit Data</Button>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
export default Test

