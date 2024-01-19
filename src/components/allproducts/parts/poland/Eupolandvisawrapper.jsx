import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Eupolandvisawrapper() {

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
                <Text color='white' ta="center">Home / <Link to="#"> EU blue card Poland</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>How does EU Blue Card Work for Poland?</Text>
                            <Text size={16} ta="justify">
                                Poland has the eight (8th) largest economies in Europe. This has attracted a lot of highly skilled
                                professional expatriates to seek greener pastures in Poland. However, for these set of people to be able to work and live in Poland,
                                they need to obtain an immigrant document known as the Polish EU Blue card. It mirrors the American Green card.
                            </Text>
                            <Text size={16} ta="justify">The acceptance of Polandâ€™s EU Blue Card application started on the 12th of June in the year 2012. That was more than six years ago.
                                The legitimacy of oneâ€™s Polish EU Blue visa becomes questionable after a relatively brief period of 2 years.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}> ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>To be Eligible for Poland EU Blue Visa, the following requirements must be met:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>The second degree in Education or its equivalent and must be recognized by the Polish government.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A document to prove a previous five years of work engagement.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You need a work contract and ought to have a month to month pay of something like 1.5 times the normal gross settled reference year by request of the Minister of Immigration.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You must have come into a work agreement with a Polish employer which will last for a minimum of 1 year.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You must be hale and hearty.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Proof of medical and travel insurance is not negotiable.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your employer should have arranged to apply for a work permit through the provincial Governor.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>BENEFITS OF PROGRAM</Text>
                            <Text size={16} weight={600} color='#0042aa'>why EU Poland Blue Card?</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Both residence and work permit comes from a single application.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Expatriates who are temporarily unemployed are giving the opportunity to still stay behind in Poland.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>There is room for a family reunion, and one can also apply for permanent residency with this card.</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>APPLICATION COSTING</Text>
                            <Text size={16} weight={600} color='#0042aa'>Cost of Applying for the Visa</Text>
                            <Text size={16} ta="justify">The processing fee for <Text component='a' href='#' color='#0042aa'>Poland EU Blue Card Immigration</Text> is 165 Euros.</Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>COUNTRY INFORMATION</Text>
                            <Text size={16} weight={600} color='#0042aa'>Profile of the Country</Text>
                            <Text size={16} ta="justify">
                                Poland is located at the center of Europe. The official Language is Polish.
                                However, English, German, Silesian, Russian to mention but a few are also widely spoken. Poland has the eight (8th)
                                largest economies in Europe. The polish economy made a historic landmark during the 2007-2008 economic recessions;
                                it was the only economy in the whole of Europe that was not affected by the recession. According to the World Bank,
                                Poland is a high-income economy with a relatively high standard of living. The top industries in Poland are iron and
                                steel, coal mining and machine building. Poland is a bona fide and active member of the following International Organizations:
                                North Atlantic Treaty Organization (NATO), The Organization for Economic Cooperation and Development (OECD), European Union (EU),
                                World Bank Group (WB), International Monetary Fund (IMF), The United State for Educational, Scientific and Cultural Organization (UNESCO),
                                and General Agreement on Tariffs and Trade (GATT).
                            </Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                            <Text size={16} weight={600} color='#0042aa'>The following reasons are the rationale behind the increase in the number of applications for EU Blue Card-Poland:</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>International Standard of Living.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Safety: The country can be said to be relatively free of crime.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Good and tasty delicacies.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Good salaries.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Excellent culture.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Free world-class health care delivery system for citizens.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Quality Education System.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Availability of technologically advanced equipment or machines.</Text>
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

export default Eupolandvisawrapper