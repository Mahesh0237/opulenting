import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Irelanddependentvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Ireland Dependent Visa</Link></Text>
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
                                    This scheme is specifically designed to ease access to employment for both spouses and dependent unmarried children below 18 years
                                    that have been admitted into Ireland as family members of holders of employment permit.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Program Details</Text>
                                <Text size={18} weight={600} color='#0042aa'>Apply for Ireland Work Permit Visa</Text>
                                <Text size={16} ta="justify">The Irish Dependent/Spouse/Partner Employment Permit allows a specific Irish work permit holder's
                                    family members to live and work in Ireland.
                                    Holders of Spouses and Dependents of employment permit can now apply for work permits without the requirement of a labor market needs a test.</Text>
                                
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Eligibility Criteria</Text>
                                <Text size={16}>To qualify for an Irish Dependent/Spouse/Partner Employment Permit, individuals need to meet the following prerequisites:</Text>   
                                <Text size={16} ta="justify"><Text component='span' weight={600} color='#0042aa'>Marital Status or Unmarried Child: </Text>Applicants should be either married to, or an unmarried child under 18 years of age, of one of the following holders of Irish visas in a civil partnership:</Text> 
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}> A valid Ireland Green Card Permit</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A Permit of Critical Skills Employment</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>An Employment Permit or a researcher position Hosting Agreement</Text>
                                    </List.Item>
                                </List>
                                <Text size={16} ta="justify"><Text component='span' weight={600} color='#0042aa'>Previous Visa Holders:</Text> Individuals who previously held any of the aforementioned permits, but currently possess permission to reside and work in Ireland without these permits, are also eligible to apply for the Irish Dependent/Spouse/Partner Employment Permit.</Text>
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

export default Irelanddependentvisawrapper