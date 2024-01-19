import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Denmarkstudentdependentvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Denmark Student Dependent Visa</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                Denmark boasts a robust educational system that has consistently shown growth over the years.
                                Each year, individuals from around the world flock to Denmark to pursue their educational aspirations
                                in some of the finest institutions, preparing themselves for a world of opportunities that lie ahead.
                            </Text>
                            <Text size={16} ta="justify">
                                For those aspiring to study and live in Denmark, the country offers various categories of dependent visas.
                                Among these, the Student Dependent Visa is tailored for the spouses or unmarried children under the age of 18
                                of foreign nationals who hold a Denmark student visa. This visa allows them to join their family members who
                                are already in Denmark. Once the application for the Student Dependent Visa is successfully processed and approved,
                                the dependents of the foreign national with a Denmark student visa have the opportunity to apply for residence permits
                                in Denmark. This enables them to stay and study in the country alongside their family members.
                            </Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                                <Text size={17} weight={600} color='#0042aa'>Features:</Text>
                                <Text size={16} ta="justify">
                                    Once the application of a student dependent visa is completed, the family member coming in does not require work
                                    permit to live and work in Danish country. This covers that, hence they are free to live and work in Denmark.
                                    Without seeking for a dependent visa, student applicants with residence permit in higher educational programme
                                    or at a PhD programme may bring their family along with them.
                                </Text>
                                <Text size={16} ta="justify">
                                    The accompanying members of the family of the applicant will not be given the residence permit
                                    if the request is filed while the applicant is still in search of a job offer. However,
                                    if the accompanying members were granted the residence permit while the applicant was still
                                    a student, the right to reside in the Danish nation will remain valid for another period of 6
                                    months within which the applicant has to seek for a job.
                                </Text>
                                <Text size={16} ta="justify">
                                    If both the applicant and his or her accompanying family member still meet all the conditions for a residence permit the validity of
                                    the residence permit of both can extend if a request for such is filed when the initial validity period expires.
                                    The application for an extension must be filed before the expiration of the initial one.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Eligibility Criteria</Text>
                                <Text component='a' href='#' weight={600} color='#0042aa'>Visa Requirements:</Text>
                                <List listStyleType='disc'>
                                    <List.Item>
                                        <Text size={16}>An application form that is completed and duly signed. </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A valid passport that will remain valid for a minimum of 3 months after the expiration of the visa.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A recent passport photo not more than 3 months old.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Valid bank statement or any other valid financial evidence showing that the applicant is
                                            financial capable of covering expected expenses during the course of stay for both the applicant and the spouse and children.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Legal evidence showing that the relationship.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Birth certificate to proof the relationship with child or children.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}> Provide evidence showing the family will live the applicant throughout their stay n Denmark.</Text>
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
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}>Expert guidance on   the complete process</Text>
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

export default Denmarkstudentdependentvisawrapper