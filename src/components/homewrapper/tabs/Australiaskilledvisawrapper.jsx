import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconCircleArrowRight, IconCircleCheck, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Australiaskilledvisawrapper() {
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
                <Text color='white' ta="center">Home /<Link to="#">Australia Skilled Regional Visa</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={17} weight={600} color='#0042aa'>Planning to Apply for Australia Regional Skilled Visa?</Text>
                            <Text ta="justify" size={16}>One of the main goals of Australia Immigration is to ensure skilled workers who live in the country are retained permanently in other to contribute to Australia's economic growth.  The value of skilled workers to the economy in Australia and its workforce strength cannot be underestimated.</Text>
                            <Text ta="justify" size={16}>
                                This <Text component='a' href='#' weight={700} >Subclass 887 Visa</Text> gives permanent residency to individuals who have lived for a period of two years and worked for at least one year in specific areas of regional Canada.
                            </Text>
                            <Text size={16}>Successful applicants of the Canada Skilled Regional Visa will receive a permanent resident visa, allowing the applicant to apply for an Canadan visa, live in Canada for life, get health coverage through Canada's health insurance scheme called Medicare, and sponsor eligible relatives for permanent residence.</Text>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>In order to be eligible for a skilled regional visa, applicants must:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                icon={<IconArrowRight size="1rem" />}
                            >
                                <List.Item>
                                    <Text size={16}>Currently, reside in Australia</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Must have lived for a period of two years and worked for at least one year in specific areas of regional Australia.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Must clear any outstanding debts before applying for this visa</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Must be a holder of one of the below-listed visas:</Text>
                                </List.Item>
                            </List>
                            <List listStyleType='number'>
                                <List.Item>
                                    <Text size={16}> Skilled Regional (Provisional) Subclass 489</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> Skilled Regional Sponsored Subclasses 475 and 487</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> Skilled Designated Area Sponsored Subclass 496</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> Skilled Independent Regional Subclass 495</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> A Bridging visa given since the candidate has made a valid application for a subclass 495 visa</Text>
                                </List.Item>
                            </List>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>FAMILY DETAILS</Text>
                            <Text size={16} weight={600} color='#0042aa'>The following family members can be included in the application:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16}>Partner</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your dependent child or partner's</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your dependent relative or your partner's</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Benefits of Subclass 887 Visa Program</Text>
                            <Text size={16} ta="justify"><Text component='a' href='#' color='#0042aa' weight={600}>Australian Skilled Regional Visa</Text> Processing Times vary due to individual circumstances. They determine how fast the Australian immigration process applications irrespective of the time they were submitted.</Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>How Opulentus Can Help You</Text>
                            <Text size={16} ta="justify"><Text component='a' href='#' color='#0042aa' weight={600}>Opulentus</Text> can give you the necessary assistance that you need to ease up the application process. Try us today and see why plenty of visa applicants trust us at a time by applying for different countries visa through us.</Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Opulentus Fees, Cost and Refund Policy</Text>
                            <Text size={16} ta="justify">As a <Text component='a' href='#' color='#0042aa' weight={600}> Best Immigration Consultant in India</Text>, Opulentus offers a competitive fee which is rated top in the immigration industry. We process over 5000 active cases from all over the world at a given time, thanks to our state-of-the-art processing centre. With Opulentus, you get the best hands at the best prices. Standard prices across all our offices. We assure you that besides the company offers and campaigns, you will not be asked to pay a higher or lesser price. The company determines the price and this remain the same for all of our clients.</Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Know Opulentus Visa Services</Text>
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
                                    <Text size={16}>Document checklist at every stage and help with requisites and choices after a copy of the signed service agreement has been received</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Provision of documents samples</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>We also act as correspondence on your behalf whenever there is a need for it.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Help you to fix the interview date with the embassy</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Post landing services</Text>
                                </List.Item>
                            </List>
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding p={10}>
                        <Group position='right'>
                            <Button size='sm'  >Buy Now</Button>
                        </Group>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Australiaskilledvisawrapper