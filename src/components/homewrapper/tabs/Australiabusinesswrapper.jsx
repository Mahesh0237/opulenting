import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Australiabusinesswrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Australia Family Immigration</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                For as many as are interested in owning or managing a business in Queensland,
                                whether a new startup or existing business, the city welcomes you all.
                                The Business Innovation and Investment Visa Subclass 188 is a provisional visa,
                                basically offered on a four-year period and state-nominated. The visa is crucial to
                                the Business Innovation and Investment visa that is the subclass 888 Permanent Residency Visa.
                            </Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                                <Text size={17} weight={600} color='#0042aa'>Interested persons can choose from:</Text>
                                <Text size={16}>
                                    <Text component='a' href='#' weight={600} color='#0042aa'>1. Business Innovation Visa (188):</Text>: This is for the category of people interested in owning and managing a business in Queensland, whether new or existing.
                                </Text>
                                <Text size={16}>
                                    <Text component='a' href='#' weight={600} color='#0042aa'>2. Business Investor Visa (188):</Text> This visa is for the investors of business owner's category, who seek to invest in the Queensland Treasury Corporation Bonds.
                                </Text>
                                <Text size={16}>
                                    <Text component='a' href='#' weight={600} color='#0042aa'>3. Significant Investor Visa (188):</Text> This is for people who want to make a significant investment in Australia.
                                </Text>
                                <Text size={16}>
                                    <Text component='a' href='#' weight={600} color='#0042aa'>4. Premium Investor Visa (188):</Text> This is only available upon invitation by the national government of Australia.
                                    It is only suitable for potential recipients that have received the nomination from Austrade. The assurance of
                                    long-term economic benefit delivery to the country is a requirement here and majorly for highly talented and entrepreneur-minded
                                    individuals. For more information, please visit the Austrade website.
                                </Text>
                                <Text size={16}><Text component='a' href='#' weight={600} color='#0042aa'>5. Entrepreneur Visa (188): </Text>This visa is for individuals with innovative businesses and is ready to commercialize it. </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Eligibility Criteria</Text>
                                <Text component='a' href='#' weight={600} >Check Application Points Test:</Text>
                                <Text size={16} ta="justify">Applicants for this stream of visa must score a minimum of 65 Points on the visa class points test. Get more information on that from the Subclass 188 points system page.</Text>
                                <Text size={16} ta="justify">In case you want to extend or renew your 188 visas for <Text component='a' href='#' weight={600} color='#0042aa'>Business Innovation and Significant Investor Visa</Text>, kindly send an email to BSMQ and state reasons why you want to extend. Certain conditions must be met before this extension is approved.</Text>
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

export default Australiabusinesswrapper