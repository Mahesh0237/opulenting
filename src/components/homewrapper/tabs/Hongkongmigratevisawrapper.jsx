import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Hongkongmigratevisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Hong Kong Quality Migrant Admission Scheme</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>Apply for Hong Kong Quality Migrant Admission Scheme</Text>
                            <Text size={16} ta="justify">Hong Kong QMAS Visa is an entry system that is quota-based and is meant to attract skilled individuals or talented persons willing to reside and work in Hong Kong.

                                Their migration would enhance Hong Kong's economic competitiveness in the world market thereby maintaining the title of being a significant financial hub in Asia.

                                It is not required of successful applicants to already have a secured offer of employment prior to their entrance into Hong Kong for settlement.</Text>
                            <Text size={16} ta="justify">Filing for <Text weight={600} color='#0042aa' component='a' href='#'>Hong Kong QMAS Visa</Text> is a very simple process. All that is required is for you to take either of the two point-based tests; the Achievement-Based Points Test or General Points Test.

                                The aim of these tests is to ensure that you meet the eligibility criteria such as the age, language, education, character, experience, and financial resources.

                                Under the Hong Kong Quality Migrant Admission Scheme, the highest number of applicants that may be allowed entrance into Hong Kong per year is 1000.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} >Nationals of the following countries are not qualified to submit an application for the Scheme: Vietnam, Korea, Afghanistan, Laos, Cambodia, Nepal Cuba, and Albania.</Text>
                            <Text size={16} color='#0042aa' weight={600}>Prospective applicants need to fulfil all the listed conditions below:</Text>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16}>At the time of applying, the applicant must be aged 18 or above to achieve score points on Age.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The applicant must possess a good educational background. Having a Bachelorâ€™s, Masterâ€™s or PhD from a recognized university would earn the applicant good score points for qualification.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The applicant must prove that he/she has what it takes to support and provide shelter for himself/herself and his/her dependants, on his/her own money without depending on public aid while in Hong Kong.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The applicant must not bear any criminal history or any other adverse records in Hong Kong and/or in anywhere else.</Text>
                                </List.Item>

                            </List>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16} ta="justify">Starter Kit issuance</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Complete Application Processing</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Forms, Documentation & Petition Filing</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Updates & Follow up with the Consulate</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify" >Airport Pickup*</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify" >Accommodation Assistance*</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Job Search Assistance*</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Hong Kong QMAS Visa Renewal</Text>
                            <Text size={16} ta="justify">QMAS visa is meant to stay valid for one-year. If an applicant wishes to extend his or her stay in Hong Kong, then he/she needs to file an application for renewal at least a month prior to the limit of stay expiration.</Text>
                            <Text size={16}>The application for renewal will be taken into consideration only if the following criteria's are met:</Text>
                            <Text size={16} ta="justify">- For individuals accepted via the General Points Test, you need to show that you have done something to settle in Hong Kong by getting a job or setting up a business before the expiration of one year.</Text>
                            <Text size={16} ta="justify">If you are unable to prove that you have taken some actions, you could be granted an extension for a year based purely on the judgment of the authorities of the Immigration, if they deem it necessary.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>WHY CONTACT OPULETUS?</Text>
                            <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                        </Stack>
                        <Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={10}>Opulentus Fees, Cost and Refund Policy</Text>
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
                                    <Text  size={16} >Expert guidance on the complete process</Text>
                                </List.Item>
                                <List.Item>
                                    <Text  size={16} >Documentation (this defers from country to country)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text  size={16} >Checklist of Document stage-wise and help with requisites and choices after the signed copy of service agreement  has been received</Text>
                                </List.Item>
                                <List.Item>
                                    <Text  size={16} >Provision of documents samples</Text>
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
            </Container>
        </>
    )
}

export default Hongkongmigratevisawrapper