import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Eubulgariavisawrapper() {

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
                <Text size={30} weight={600} color='white' ta="center">VISA</Text>
                <Text color='white' ta="center">Home / <Link to="#"> EU blue card Bulgaria</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>Bulgaria EU Blue Card:</Text>
                            <Text size={16} ta="justify">Bulgaria's EU Blue Card shares similarities with the well-known American Green Card. This immigration document provides immigrants with the chance to explore job opportunities available in the vibrant country of Bulgaria.</Text>
                            <Text size={16} ta="justify">The EU Blue Card for Bulgaria is valid for a period of 2 years and also allows the possibility of bringing family members along.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>Eligibility for Italy EU Blue Card Immigration</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>Second degree/Masters Degree or its equivalent.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>At least 5 years of work involvement or experience.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You need a work contract and ought to have a month to month pay of something like 1.5 times the normal gross settled reference year by request of the Minister of Immigration.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A contract of 1 year or more is a must-have.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You must be healthy and have a good character.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Possession of health and travel insurance is mandatory.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>REQUIRED DOCUMENTS</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>Transcripts, certificates, and other educational documents as evidence of completing a higher degree.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Employment contract with a Bulgarian employer or company.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Fully completed standard application form.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Documents to verify work experience, among others.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> BENEFITS OF PROGRAM</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>EU Blue Card- Bulgaria Benefits</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                size="md"
                                
                            >
                                <List.Item>
                                    <Text size={16}> Temporary Permanent Residence Permit with the possibility of a 3-month extension beyond the employment contract, up to a maximum of 2 years.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A pathway to obtaining permanent or long-term residence status.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Family members of the cardholder can easily join them, regardless of the validity of their own permits.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Offers an extended period of employment in Bulgaria.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Simplified and less cumbersome procedures for acquiring the required documents.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                            <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} mt={10} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                            <Text size={16} ta="justify" >As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Opulentus Services</Text>
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

export default Eubulgariavisawrapper