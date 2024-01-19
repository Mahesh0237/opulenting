import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function SwedenEubluecardvisawrapper() {

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
                <Text color='white' ta="center">Home / <Link to="#"> Sweden EU blue card </Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>How to Apply for Sweden EU Blue Card Visa?</Text>
                            <Text size={16} ta="justify">
                                Sweden EU Blue Card is a visa that allows skilled professionals that are highly educated from non-EU countries to relocate to Sweden to stay and work.
                                They can make explorations of the different career opportunities available in the economically-stable and clean nation.
                                The card is patterned after the US Green card as they both look much alike.
                            </Text>
                            <Text size={16} ta="justify">
                                The Blue Card is a work and residence permit for people from outside the European Union. This permit is for skilled workers who would like to work in a highly qualified job.
                                The job requires one to have a certification that shows that one has the necessary high vocational qualifications for the job.
                            </Text>
                            <Text size={16} ta="justify">
                                EU Blue Card issued gives you the opportunity to work and live in a Swedish country. After possessing the Card in the country of Sweden
                                or foreign place within the EU for about 5 years, you can progress to make applications for your resident permit in your residential country,
                                in as much as you have stayed in the particular place for about two years.
                            </Text>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase"> Sweden EU Blue Card Eligibility</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>Five years of working experience</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Masterâ€™s degree.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Possess a contract of employment and salary per month</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Contract of employment for a time equal to or beyond one year</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A valid passport</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A comprehensive health insurance</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20} tt="uppercase">Benefits of Program</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                            >
                                <List.Item>
                                    <Text size={16}>This is a non-permanent residence and works permit with a validity period of two years.
                                        You must understand that it will be according to the period of your employment,
                                        this is will be renewable under the same contract condition.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The holder of the visa gets documents after staying for five years</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Unification of immediate family</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Visa holder can be accompanied by relatives</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Stack>
                            <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303' mt={20}>Relocate to Sweden under Work Visa</Text>
                            <List
                                listStyleType='disc'
                                spacing="md"
                            >
                                <List.Item>
                                    <Text size={16}>Excellent job opportunities with a better pay package</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Excellent job opportunities with a better pay package</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The higher rate of economic growth</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> World class health facilities</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Better lifestyle trends</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Clean and green country</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Cordial attitude and etiquette of Swedish people</Text>
                                </List.Item>
                                <List.Item size={16}>Safe and Secure environment</List.Item>
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

export default SwedenEubluecardvisawrapper