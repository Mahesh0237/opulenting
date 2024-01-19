import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function FinlandEubluecardwrapper() {

    return (
        <>
            <BackgroundImage
                src={breadcrumb1}
                radius="sm"
                className='breadcrumbcoaching'
                style={{ position: "relative" }}
            >
                <Center p={100} >

                </Center>
            </BackgroundImage>
            <Stack className='products-position-property'>
                <Text size={30} weight={600} color='white' ta="center">VISA</Text>
                <Text color='white' ta="center">Home / <Link to="#"> Finland EU blue card </Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={17} color='#0042aa' weight={600}>How to Apply for EU Blue Card for Finland?</Text>
                            <Text size={16} ta="justify">
                                Since January 1, 2012, Finland has been welcoming applications for the European Union Blue Card from individuals around
                                the world who are seeking employment opportunities.
                            </Text>
                            <Text size={16} ta="justify">
                                In essence, Finland is actively accepting applicants from non-EU countries who are seeking a residence permit to work
                                in Finland. One of the primary objectives of this Finland EU Blue Card Immigration program is to enhance and strengthen the
                                EU economy by attracting a skilled workforce.
                            </Text>
                            <Text size={16} ta="justify">The Finland EU Blue Card is valid for a duration of 2 years and also provides the opportunity for your family to accompany you during your stay.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase"> Eligibility criteria</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16}>To qualify for the EU Blue Card in Finland, you must meet the following eligibility criteria:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}> You must possess a Master's degree. </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> You should have a minimum of 5 years of work experience.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You must have a valid work contract in Finland with a minimum duration of 1 year.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >Your gross monthly salary should be at least €4,832. This minimum amount was set for monthly salaries in Finland in 2012 and is subject to annual adjustments.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your employment terms and conditions must comply with existing regulations and agreements.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your passport must be valid.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You are required to have travel and medical insurance.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You must have a clean criminal record and not be barred from entering any country worldwide.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase">Program Details</Text>
                            <Text size={16} ta="justify">Applicants are required to submit their applications to the Finnish Embassy before relocating to Finland. However, individuals who have held an EU Blue Card from another EU country for a minimum of 18 months are exempt from this requirement.</Text>
                            <Text size={16} ta="justify">Upon submitting your application, it takes approximately 90 days for the Finnish Immigration Service to process and make a decision on your application for granting the EU Blue Card.</Text>
                            <Text size={16}>Many individuals have taken advantage of this opportunity to move to Finland and establish themselves as permanent residents in the country.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>benefits of programme</Text>
                            <Text size={16}>There are several compelling reasons to consider Finland as your destination:</Text>
                            <List
                                listStyleType='disc'
                                spacing="md"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}><Text component='span' weight={600} color='#0042aa'>Quality Education:</Text> Finland is known for its excellent educational institutions and offers free university education.
                                        Many programs are taught in English, making it accessible for international students.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}><Text component='span' weight={600} color='#0042aa'>English Proficiency:</Text> English is widely spoken and understood in Finland, making communication easy for newcomers.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text weight={600} color='#0042aa' component='span'>Affordable Properties:</Text> The real estate market in Finland provides opportunities to purchase properties at relatively low prices compared to other European countries.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text color='#0042aa' weight={600} component='span'>Healthy Environment:</Text> Finland boasts clean air, abundant green spaces, and a strong emphasis on well-being, contributing to a healthy and high-quality lifestyle.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text color='#0042aa' weight={600} component='span'>Natural Beauty:</Text> The country's breathtaking landscapes, including lakes, forests, and northern lights, offer a unique and visually appealing experience.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text color='#0042aa' weight={600} component='span'>Low Crime Rate:</Text> Finland's low crime rate provides a safe and secure living environment for residents and visitors alike.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}><Text color='#0042aa' component='span' weight={600}>Welcoming Culture:</Text> The friendly and hospitable nature of the Finnish people creates a welcoming atmosphere for newcomers.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> <Text component='span' weight={600} color='#0042aa'>Technological Advancement:</Text> Finland is a leader in technology and innovation, offering access to cutting-edge developments and opportunities in various sectors.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                            <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} mt={10} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                            <Text size={16} ta="justify" >As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>Opulentus Services</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>Expert guidance on the complete process</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Documentation (this defers from country to country)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Checklist of Document stage-wise and help with requisites and choices after the signed copy of service agreement  has been received</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Provision of documents samples</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>We also correspond with the department on your behalf whenever there is a need for it</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Support you in scheduling interview date with the embassy</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Mock visa interviews</Text>
                                </List.Item>
                            </List>
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding p={10}>
                        <Group position='right'>
                            <Button size='sm'>Buy Now</Button>
                        </Group>
                    </Card.Section>
                </Card>
            </Container >
        </>
    )
}

export default FinlandEubluecardwrapper