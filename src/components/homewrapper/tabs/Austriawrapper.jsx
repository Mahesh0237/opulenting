import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Austriawrapper() {
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
            <Stack style={{ position: 'absolute', top: '120px', left: 'calc(100% - 57%)', zIndex: 1 }}>
                <Text size={30} weight={600} color='white' ta="center">VISA</Text>
                <Text color='white' ta="center">Home / <Link to="#"> Austria Red White Red Card</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={600} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                <Text size={18} weight={600} color='#0042aa'>Austria Visa Process</Text>
                                <Text size={16} ta="justify">The RWR card is fashioned after the US Green Card and named after colors in the Austrian national flag. It gives points to migrants based on their age, education, previous pay scales, and work experience and German language proficiency.</Text>
                                <Text size={16} ta="justify">The RWR Card model aims to make the immigration system more efficient especially to the third-country workforce that is qualified, including their families who desire to settle in Austria permanently, according to the labor market and personal criteria.</Text>
                                <Text size={16} ta="justify">The Interior Ministry seeks to provide 8,000 Red-White-Red cards every year; however, the overall immigration limit will remain intact.</Text>
                                <Text size={16} ta="justify">About 35,000 migrants visit Austria annually to live there permanently out of which one-third come to stay with their family members who are permanently resident in Austria.</Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ELIGIBILITY CRITERIA</Text>
                                {/* style={{ color: '#0042aa' }} */}
                                <Text size={16} color='#0042aa' weight={600}>The following can apply for RWR Card:</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16} ta="justify">Skilled workers in shortage professions</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">Very highly qualified workers</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">Other key workers</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">Austria Universities and colleges of higher education graduates</Text>
                                    </List.Item>

                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>CATEGORIES OF RWR CARD</Text>
                                <Text size={16} color='#0042aa' weight={600}>The RWR Card has two different groups:</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={<IconPointFilled size="1rem" />}
                                >
                                    <List.Item>
                                        <Text size={16} ta="justify">RWR Card: access to residence and employment with just a particular employer</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">RWR Card plus: access to the residence and unlimited access to the labor market</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                                <Text weight={600} size={16} color='#0042aa'>Very highly qualified workers</Text>
                                <Text size={16} ta="justify">Very highly qualified workers with no employer in Austria may apply for a visa to seek employment with the competent Austrian consulate or embassy of their residential country. This visa is conditional on the achievement of minimum points necessary for the grant by the applicant as confirmed by the Labour Market Service for Vienna (otherwise known as AMS Wien).</Text>
                                <Text weight={600} size={16} color='#0042aa'>Highly qualified worker</Text>
                                <Text size={16} >A highly qualified worker who holds a visa to seek employment can apply for an RWR Card with Austria competent residence authority if a legally-binding and valid work contract are submitted during the visa validity period. The employment is given based on the applicant's qualification, and they must be remunerated adequately.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={600} ta="center" td="underline" color='#e30303' mt={10}>Skilled workers in shortage professions</Text>
                                <Text size={16} ta="justify">These and other key workers may apply for an RWR Card with a competent Austrian embassy or consulate.
                                    The application is submitted with the prospective employer declaration, on compliance with the conditions of the employment.
                                    Applicants who do not require a visa for entry and foreign Austria universities graduates,
                                    holding a competent residence authority confirmation may submit their application directly with authority,
                                    which examines and submits the application based on the admission criteria.
                                </Text>
                                <Text size={18} weight={600} ta="center" td="underline" color='#e30303'>FAMILY MEMBERS</Text>
                                <Text size={16} ta="justify">Family members of highly qualified workers, skilled and key workers may apply for an RWR Card plus with a competent Austrian embassy or consulate after lawful entry with no visa with a competent Austrian residence authority.</Text>
                                <Text size={18} weight={600} ta="center" td="underline" color='#e30303'>RWR CARD PLUS</Text>
                                <Text size={16} color='#0042aa' weight={600}>The following applicants can also apply for RWR Card plus:</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text ta="justify" size={16}>Family members of EU Blue Card holders and applicant groups 1 to 4</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text ta="justify" size={16}>Family members of foreign citizens that are permanently settled in Austria</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={600} ta="center" td="underline" color='#e30303'>Austria Permanent Residency</Text>
                                <Text size={16}>You can obtain the Austrian Permanent Residence after staying in Austria for five years. This excludes the period spent for study purposes.</Text>
                                <Text size={16}>The applicant must possess the following:</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={<IconPointFilled size="1rem" />}
                                >
                                    <List.Item>
                                        <Text ta="justify" size={16}>Austrian permanent resident status for citizenship eligibility</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text ta="justify" size={16}>sufficient knowledge of the Austrian language with no criminal record</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>WHY CONTACT OPULENTUS?</Text>
                                <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                                <Text size={16} ta="justify">As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={600} ta="center" td="underline" color='#e30303'>OPULENTUS SERVICES</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text  size={16}>Expert guidance on the complete process</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text  size={16}>Documentation (this defers from country to country)</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text  size={16}>Checklist of Document stage-wise and help with requisites and choices after the signed copy of service agreement  has been received</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text  size={16}>Provision of documents samples</Text>
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
            </Container >
        </>
    )
}

export default Austriawrapper