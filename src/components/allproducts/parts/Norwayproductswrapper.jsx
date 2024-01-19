import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Norwayproductswrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Norway Documentation Assistance</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                {/* <Text size={18} weight={600} color='#0042aa'>Hong Kong Dependent Visa</Text> */}
                                <Text size={16} ta="justify">
                                    In certain instances, a Norwegian enterprise may find it necessary to enlist the assistance or
                                    expertise of a foreign individual to accomplish specific tasks within Norway. The Norway Residence Permit for Seconded Employees'
                                    scheme has been established to facilitate such immigration scenarios.
                                    This scheme is strategically tailored to accommodate skilled immigration to Norway.
                                </Text>
                                <Text size={16} ta="justify">
                                    The Norway Residence Permit for Seconded Employees' scheme streamlines the process for foreign professionals to contribute their expertise to Norwegian enterprises,
                                    fostering collaboration and knowledge exchange on an international scale.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Application Costing</Text>
                                <Text size={16} ta="justify">There are certain criteria must be met to be eligible for a Skilled Immigration to Norway as a seconded employee. Below is a list of them:</Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                    withPadding
                                >
                                    <List.Item>
                                        <Text size={16}>The applicant must be 18 years of age or older.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Only skilled employees are eligible for this permit. The skill possessed by the seconded employee must be relevant to the Norwegian enterprise.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The foreign company must have entered into a contract with a Norwegian company.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The contractor must be a foreign company.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The client in Norway must be a Norwegian company.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The Norwegian company must be registered, and the registered business address must be in Norway.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}> The contract must clearly state that the seconded employee is to provide services for a limited duration.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The applicant who is the seconded employee must be working for the foreign company..</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Eligibility Criteria</Text>
                                <Text size={16}>The documents required to be tendered by the applicant are as follows:</Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                    withPadding
                                >
                                    <List.Item>
                                        <Text size={16}> A filled Dependent Application Form. If the child applicant is below 16 years of age,
                                            the form needs to be endorsed by the father, mother or godparent of the child.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The dependent of a sponsor who wants to obtain a visa either for a job, for investment,
                                            for skill acquisition or to study, does not have to fill in a separate form.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A duplicate of your passport page showing your particulars. If you currently reside in Hong Kong, a duplicate of your passport section showing the most recent arrival stamp or elongation of stay label.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A duplicate of your Hong Kong ID card (if any).</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A duplicate is showing your connection with the sponsor, e.g., certificate of marriage, certificate of birth, a photograph of your family.</Text>
                                    </List.Item>
                                </List>
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

export default Norwayproductswrapper