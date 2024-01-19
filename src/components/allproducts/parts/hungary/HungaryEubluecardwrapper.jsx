import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function HungaryEubluecardwrapper() {

    return (
        <>
            <BackgroundImage
                src={breadcrumb1}
                radius="sm"
                className='breadcrumbcoaching'
                style={{ position: "relative" }}
            >
                <Center p={100} >

                </Center>
            </BackgroundImage>
            <Stack className='products-position-property'>
                <Text size={30} weight={600} color='white' ta="center">VISA</Text>
                <Text color='white' ta="center">Home / <Link to="#"> Hungary EU blue card </Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                The Hungary EU Blue Card offers a pathway for skilled non-EU nationals to work and reside not only in Hungary but also in other EU member states.
                                Similar to the concept of the United States Green Card, this residence permit is tailored for highly skilled individuals who have received a
                                job offer and fulfill the eligibility criteria of the EU Blue Card scheme.
                                Here are some key aspects to note about the Hungary EU Blue Card:
                            </Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'> Purpose:</Text> The EU Blue Card facilitates the integration of highly skilled professionals
                                        into the workforce of Hungary and other EU member states,
                                        addressing skill shortages and contributing to economic growth.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'>Residence and Work:</Text> Cardholders have the privilege to both live and work within any member state in accordance with the regulations laid out in the pertinent legislation.
                                        This card opens doors to employment in high-demand and highly qualified positions.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'>Duration:</Text> Eligible candidates can be granted a Hungary EU Blue Card with a validity of up to four years. Furthermore, this card can be renewed
                                        in increments of four years, granting the holder prolonged opportunities to work and live within Hungary.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'>EU Mobility: </Text>After 18 months of lawful employment in Hungary, a Blue Card recipient can transition to another EU member state while retaining their employment.
                                        This mobility empowers skilled professionals to explore and embrace job prospects across the EU.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text color='#0042aa' component='span' weight={600}>Visa-Free Travel:</Text> Those holding a Hungary EU Blue Card are entitled to travel and stay in Schengen Member States
                                        for up to 90 days within any six-month period (180 days), eliminating the need for a separate visa.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' color='#0042aa' weight={600} >Application Procedure:</Text> Prospective candidates are required to go through the
                                        application process, which entails demonstrating their qualifications,
                                        securing a job offer, and meeting the stipulated criteria for the EU Blue Card program.
                                    </Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase"> Eligibility criteria</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16}>To qualify for the Hungary EU Blue Card, candidates must meet the following conditions:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                px={10}
                            >
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'> Educational Qualification:</Text> Possess a university degree with a minimum duration of three years or a master's degree.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'> Work Experience:</Text> Have a track record of at least five years of relevant work experience.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'>Employment Contract:</Text> Secure an employment contract that guarantees a monthly salary of at least one and a half times the mean gross fixed reference year, as determined by the immigration ministry.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' weight={600} color='#0042aa'>Contract Duration:</Text> Present an employment contract with an indefinite duration, with a minimum term of one year.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text color='#0042aa' component='span' weight={600}>Health and Character: </Text>Provide evidence of good health and sound character, as reflected in relevant documentation.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' color='#0042aa' weight={600} >Accommodation Proof: </Text>Furnish proof of accommodation arrangements in Hungary.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' color='#0042aa' weight={600}>Financial Stability:</Text> Present a statement of account that demonstrates financial stability and capability.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}><Text component='span' color='#0042aa' weight={600}>Travel and Medical Coverage:</Text> Maintain valid travel and medical insurance coverage.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase">Advantages of Hungary EU Blue Card</Text>
                            <Text size={16}>Advantages of EU Blue Card for Hungary</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>You will be issued a Temporary Residence Work Permit with a validity time which has the maximum period for 2 years</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Get a Pathway to Long-Term Residency Permit </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Family members can join the main card holder regardless of the validity period of their permits</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>How to Enroll for EU Blue Card?</Text>
                            <Text size={16}>The EU Blue Card offers individuals with advanced skills and a valid job offer the opportunity to work and reside across the territories of EU Member States, including Hungary.</Text>
                            <Text size={16} >To apply for the EU Blue Card, applicants must meet the following requirements:</Text>
                            <List
                                listStyleType='disc'
                                spacing="md"
                            >
                                <List.Item>
                                    <Text size={16}>Hold a valid employment contract or a permanent job offer for a highly qualified position with a minimum duration of one year.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Meet the minimum salary threshold specified by the concerned Member State.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>For regulated professions, provide documentation demonstrating compliance with national legal requirements.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> For unregulated professions, present documentation showing the fulfillment of relevant higher professional qualifications.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Submit a valid travel document, visa application, or visa (if required), and a valid residence permit or national long-term visa (if applicable).</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Provide proof of sickness insurance coverage or documentation indicating that an application for such coverage has been submitted.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                            <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} mt={10} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                            <Text size={16} ta="justify" >As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>Opulentus Services</Text>
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

export default HungaryEubluecardwrapper