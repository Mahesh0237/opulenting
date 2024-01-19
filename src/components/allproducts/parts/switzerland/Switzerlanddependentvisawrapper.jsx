import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Switzerlanddependentvisawrapper() {
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
                <Text size={30} weight={600} color='white' ta="center">Products</Text>
                <Text color='white' ta="center">Home / <Link to="#"> Switzerland Dependent Visa</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                Switzerland offers a welcoming environment for qualified visa holders who wish to reunite with their family members and relatives in a foreign country.
                            </Text>
                            <Text size={16} ta="justify">
                                The primary sponsor has the opportunity to bring the following family members:
                            </Text>
                            <List listStyleType='disc' spacing="xs" size="md">
                                <List.Item>
                                    <Text size={16}>Fiancé(s)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Spouse</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Child</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>(Proposed) same-sex civil partners</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >Sibling</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Other Relatives</Text>
                                </List.Item>
                            </List>
                            {/* style={{ color: '#0042aa' }} */}
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                                <Text size={17} >Checklist for Switzerland Partner Visa and Applicant's Requirements:</Text>
                                <List listStyleType='disc' spacing="xs">
                                    <List.Item>
                                        <Text size={16}>Original Passport</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Two colored photographs with a white background</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Income Tax Returns and Pay slips for the last three years</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} >Bank statements for the last six months including telephone number and address of the bank, name of account holder, address with stamp, and signature of the bank</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} >Health certificates (if applicable)</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Marriage Certificate</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Eligibility Criteria</Text>
                                <Text size={16} ta={"justify"}>
                                    Residents of Switzerland who hold a valid resident permit and are currently living and working
                                    in the country have the opportunity to bring their family members to live with them through the
                                    Switzerland Dependent Visa category. This long-stay visa allows resident permit or employment
                                    visa holders to apply for a Dependant visa for their spouses or children below 18 years of age.
                                    To qualify for this visa, the sponsor needs to demonstrate a stable financial history and
                                    sufficient balance in their account to support the application of their dependents.
                                    The duration of stay for the dependents is limited and is determined by the validity of the primary applicant's visa.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Employment opportunities in Switzerland</Text>
                                <Text size={16} ta="justify">Switzerland has become a hub for foreign labor across various industries in recent years,
                                    and the demand for foreign workers is expected to continue growing in the future.</Text>
                                <Text size={16} ta="justify">While many foreign nationals have the freedom to work and live in Switzerland, some are obligated to obtain a work and residence permit.
                                    The specific requirements for working and residing in Switzerland vary based on an individual's qualifications and nationality.</Text>
                                <Text size={16} ta="justify">Our team is well-equipped to assist you with your Dependent Visa Application.
                                    We will work closely with you to develop a tailored strategy for your case and provide comprehensive
                                    assistance with the entire visa documentation and application process.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                                <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                                <Text size={16} ta="justify">As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Services</Text>
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
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding p={10}>
                        <Group position='right'>
                            <Button size='sm'>Buy Now</Button>
                        </Group>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Switzerlanddependentvisawrapper