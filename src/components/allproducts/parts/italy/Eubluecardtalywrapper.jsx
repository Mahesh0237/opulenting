import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Eubluecardtalywrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> EU blue card Italy</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>EU Blue Card Resident Permit for Italy</Text>
                            <Text size={16} ta="justify">The Italy EU Blue Card is a visa that offers skilled professionals from non-EU countries the opportunity to relocate to Sweden, work, and explore various career opportunities in this economically stable and environmentally conscious nation. The design of the Blue Card is reminiscent of the US Green Card, showcasing its significance.</Text>
                            <Text size={16} ta="justify">Functioning as both a work and residence permit, the EU Blue Card is intended for highly skilled individuals who hail from outside the European Union. This permit is tailored for individuals seeking to engage in specialized employment roles. To be eligible for such employment, applicants must possess certifications that verify their high-level vocational qualifications for the intended job.</Text>
                            <Text size={16} ta="justify">Upon being granted the EU Blue Card, recipients gain the privilege to both work and reside in the country. After holding the card in Sweden or any other EU member state for approximately 5 years, applicants can proceed to apply for a resident permit in their country of residence, provided they have been residing there for a minimum of two years.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS AND VALIDITY</Text>
                            <Text size={16} ta="justify" >
                                In order to qualify for the EU Blue Card, applicants are required to possess relevant qualifications or experience in their field of study.
                                Additionally, applicants must meet certain educational criteria. To be eligible for the EU Blue Card, applicants must hold an educational
                                certificate from a recognized institution. This certificate should prove the successful completion of a program with a minimum duration of
                                three years.
                            </Text>
                            <Text size={16} ta="justify">Workers from various professional backgrounds are also eligible to apply for the EU Blue Card based on their work experience. These workers are categorized into three levels: </Text>
                            <Text size={16} ta="justify"><Text weight={600} component='span' color='#0042aa'>Level One:</Text> This category encompasses company managers and executives.</Text>
                            <Text size={16} ta="justify"><Text weight={600} component='span' color='#0042aa'>Level Two:</Text> Professionals such as doctors, nurses, teachers, lawyers, engineers, IT professionals, and more fall under this category.</Text>
                            <Text size={16} ta="justify"><Text component='span' weight={600} color='#0042aa'>Level Three:</Text> Technicians, tour operators, accountants, and others are included in this category.</Text>
                            <Text size={16} ta="justify" color='#0042aa' weight={600}>Employers seeking to sponsor an applicant for the EU Blue Card must adhere to the following requirements:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                size="md"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Advertise the job position to be filled by a skilled professional, with the contract offering a minimum duration of one year.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Provide a minimum annual salary of EUR 25,000.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Submit the job proposal to the Immigration Office, with a response validity period of 90 days.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>VISA APPLICATION DETAILS</Text>
                            <Text></Text>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Critical visa falls within the temporary residency visa stream and permits foreigners to live legally for up to 5 years.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>They approve Critical Visa on the candidate (applicant) having the ability to indicate that they hold the individual work expertise and qualifications required in the specific field of occupation as listed on the Critical Skills</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The applicants need not acquire a letter of advice from the Department of Labor</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>This visa conjointly offers the conveyor the choice to apply as a permanent residency within the country, subject to bound conditions. However, they approve it immediately if the candidate will prove five years of expertise in their field of experience</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>Eligibility for Italy EU Blue Card Immigration</Text>
                            <Text size={16} ta="justify">Certain checkboxes need to be ticked to be eligible for the Italy EU Blue Card. If you meet the requirements, you should be sure of having the Blue Card. They are:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>You must have an employment contract with a company based in Italy.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The employment contract must not be less than a year.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Must possess a Master's Degree</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Must have working experience of not less than five years.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You would be paid a salary of EUR 25,000 at the minimum annually.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Accommodation verification document.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> BENEFITS OF PROGRAM</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>EU Blue Card - Italy benefits</Text>
                            <List
                              listStyleType='disc'
                              spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}> Unification of immediate family</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Relatives can accompany visa holder</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Apply for permanent residency after 5 years as long as you still have the EU Blue Card Visa</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your relative or dependants have the opportunity to get a permit of residence without any consideration of the duration of the worker's card.</Text>
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
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
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

export default Eubluecardtalywrapper