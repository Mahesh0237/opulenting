import { BackgroundImage, Button, Card, Center, Grid, Group, Image, List, Select, Stack, Text, TextInput } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import breadcrumb1 from '../assets/breadcrumb-1.jpg'
import { IconCheck } from '@tabler/icons-react'
import canadaflag from '../assets/canadalogo.png'
import australiaflag from '../assets/australiaflag.png'
import usaflag from '../assets/usaflag.png'
import germanyflag from '../assets/germanyflag.png'
import axios from 'axios'
function Recruitfromopulentuswrapper() {

    useEffect(() => {
        getCountries()
    }, [])

    const [country, setCountry] = useState(null)
    const [countries, setCountries] = useState([])

    const updateCountry = (value) => {
        setCountry(value)
    }

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

    return (
        <>
            <BackgroundImage
                src={breadcrumb1}
                radius="sm"
                className='breadcrumbcoaching'
                style={{ position: "relative" }}
            >
                <Center p={100}  >

                </Center>
            </BackgroundImage>
            <Stack className='products-position-property'>
                <Text size={30} weight={600} color='white' ta="center">OPULENTUS</Text>
                <Text className='policy'></Text>
            </Stack>
            <div className='container py-5'>
                <Card withBorder >
                    <Text weight={700} size={20} ta="center" color='#0042aa' mb={20}>HIRE BEST CANDIDATES</Text>
                    <Grid>
                        <Grid.Col xs={6} sm={4} md={3} lg={3}>
                            <Card withBorder>
                                <Card.Section inheritPadding withBorder py={10}>
                                    <Group position='apart'>
                                        <Text weight={600} size={18}  >CANADA</Text>
                                        <Image src={canadaflag} width={40} alt='imgae' />
                                    </Group>
                                </Card.Section>
                                <Card.Section inheritPadding py={10}>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <IconCheck size="1rem" color='green' />
                                        }
                                    >
                                        <List.Item><Text component='a' href='#'>IT</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Engineer</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Hospitality</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Health Care</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Finance</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Stem</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Others</Text></List.Item>
                                    </List>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={3} lg={3}>
                            <Card withBorder>
                                <Card.Section inheritPadding withBorder py={10}>
                                    <Group position='apart'>
                                        <Text weight={600} size={18}  >AUSTRALIA</Text>
                                        <Image src={australiaflag} width={38} alt='imgae' />
                                    </Group>
                                </Card.Section>
                                <Card.Section inheritPadding py={10}>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <IconCheck size="1rem" color='green' />
                                        }
                                    >
                                        <List.Item><Text component='a' href='#'>IT</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Engineer</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Hospitality</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Health Care</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Finance</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Stem</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Others</Text></List.Item>
                                    </List>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={3} lg={3}>
                            <Card withBorder>
                                <Card.Section inheritPadding withBorder py={10}>
                                    <Group position='apart'>
                                        <Text weight={600} size={18}  >USA</Text>
                                        <Image src={usaflag} width={40} alt='imgae' />
                                    </Group>
                                </Card.Section>
                                <Card.Section inheritPadding py={10}>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <IconCheck size="1rem" color='green' />
                                        }
                                    >
                                        <List.Item><Text component='a' href='#'>IT</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Engineer</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Hospitality</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Health Care</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Finance</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Stem</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Others</Text></List.Item>
                                    </List>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                        <Grid.Col xs={6} sm={4} md={3} lg={3}>
                            <Card withBorder>
                                <Card.Section inheritPadding withBorder py={10}>
                                    <Group position='apart'>
                                        <Text weight={600} size={18}>GERMANY</Text>
                                        <Image src={germanyflag} width={40} alt='imgae' />
                                    </Group>
                                </Card.Section>
                                <Card.Section inheritPadding py={10}>
                                    <List
                                        spacing="xs"
                                        size="sm"
                                        center
                                        icon={
                                            <IconCheck size="1rem" color='green' />
                                        }
                                    >
                                        <List.Item><Text component='a' href='#'>IT</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Engineer</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Hospitality</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Health Care</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Finance</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Stem</Text></List.Item>
                                        <List.Item><Text component='a' href='#'>Others</Text></List.Item>
                                    </List>
                                </Card.Section>
                            </Card>
                        </Grid.Col>
                    </Grid>
                    <Stack mt={50}>
                        <Text size={16} color='#0042aa' weight={600} >There are compelling reasons to select Opulentus as your trusted recruitment partner:</Text>
                        <List listStyleType='number'>
                            <Stack>
                                <List.Item>
                                    <Text component='span' weight={600} size={15}> Verified Candidates: </Text> We meticulously screen and verify candidates, ensuring their qualifications and skills align with your specific requirements.
                                </List.Item>
                                <List.Item>
                                    <Text component='span' weight={600} size={15}>Extensive Database: </Text> With a database of over 10 million potential candidates, we have a vast pool of talent to match your needs.
                                </List.Item>
                                <List.Item>
                                    <Text component='span' weight={600} size={15}>Individual Employer Support: </Text>
                                    Our personalized assistance ensures that your unique business needs are met effectively.
                                </List.Item>
                                <List.Item>
                                    <Text component='span' weight={600} size={15}>Tailored Solutions: </Text> We assist you in finding the ideal candidates who will contribute to the growth and success of your business.
                                </List.Item>
                                <List.Item>
                                    <Text component='span' weight={600} size={15}> High Professional Standard: </Text> Our commitment to maintaining the highest professional standards ensures that you receive top-tier service.
                                </List.Item>
                            </Stack>
                        </List>
                        <Text size={16} ta="justify">
                            Our company has a specialized focus on global recruitment and staffing solutions, catering to a diverse range of
                            industries by delivering high-quality manpower solutions. Our team, consisting of seasoned Talent Acquisition Consultants,
                            is dedicated to providing efficient, cost-effective, and comprehensive solutions to our clients.
                        </Text>
                        <Text size={16} ta="justify">
                            Originating as an overseas career consultant in India back in 1997, we have since evolved into a successful executive and professional search firm.
                            We offer a complete suite of manpower services, including permanent recruitment and staffing solutions, that have benefited numerous multinational
                            corporations.
                        </Text>
                        <Text ta="justify" size={16}>
                            Our key strength lies in the expertise of our committed consultants, hailing from various commercial backgrounds.
                            Drawing from extensive experience across a wide spectrum of industries, we offer efficient and timely human resource and
                            manpower services to our clients.
                        </Text>
                        <Text ta="justify" size={16}>
                            We prioritize understanding our clients' intricacies, corporate ethos, and organizational trajectory, enabling us to deliver exceptional customer service.
                            We leverage advanced technology to support our methodologies and ensure results that can be measured and tracked.
                            Our primary objective is to contribute to our clients' business triumphs by aligning them with the most suitable and adept individuals for the job.
                        </Text>
                        <Text ta="justify" size={16}>
                            In today's competitive business landscape, acquiring the right talent is crucial for sustainable success and expansion.
                            Our company endeavors to surpass our clients' expectations and ensure that their manpower requisites are fulfilled with utmost contentment.
                        </Text>
                    </Stack>
                    <Card withBorder my={20} className='loginform' style={{ background: "#faebd75e" }}>
                        <Stack align='center'>
                            <Text size={20} ta="center" weight={600} mb={20} mt={10} color='blue'>HIRE CANDIDATES</Text>
                            <Grid>
                                <Grid.Col md={4}>
                                    <TextInput
                                        placeholder='Search overseas career opertunities'
                                    />
                                </Grid.Col>
                                <Grid.Col md={4}>
                                    <Select
                                        searchable
                                        placeholder="Select country"
                                        nothingFound="Nothing Found"
                                        data={countries}
                                        value={country}
                                        onChange={updateCountry}
                                    />
                                </Grid.Col>
                                <Grid.Col md={4}>
                                    <Group>
                                        <Button variant='light' size='md' radius="md">Search</Button>
                                    </Group>
                                </Grid.Col>
                            </Grid>
                            <Text ta="center" td="underline" size={16} color='red' component='a' href='#' mb={20} weight={600}>Post a Job</Text>
                        </Stack>
                    </Card>
                </Card>
            </div>
        </>
    )
}

export default Recruitfromopulentuswrapper  