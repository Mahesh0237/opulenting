import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Canadaprovisionalvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Canada Provincial Nominee Program</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>PROVINCIAL NOMINEE PROGRAM</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                Among 80+ Provincial Immigration Pathways, each Canadian Province and Territory has its own unique Provincial Nominee Program, also has at least one Immigration Stream linked to the Federal Express Entry system.
                            </Text>
                            <Text size={16} ta='justify'>600 additional points are awarded to the candidates under Express Entry ranking system; the provincial nominations issued under the Express Entry programs are referred to as Enhanced Nominations.</Text>
                            <Text size={16} ta="justify">Base Nominations are the regular programs made outside Express Entry pool and these are subjected to PNP Streams, requirements defined by the respective provinces or territories. There are no additional points awarded for under base nominations. Individuals who are not eligible under Express Entry still get eligible to make an application under PNP Base programs if they meet the eligibility requirements defined the Province or the Territory.</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ALBERTA IMMIGRANT NOMINEE PROGRAM</Text>
                                {/* <Text size={17} weight={600} color='#0042aa'>Interested persons can choose from:</Text> */}
                                <Text size={16} ta="justify">
                                    Among 80+ Provincial Immigration Pathways, each Canadian Province and Territory has its own unique Provincial Nominee Program, also has at least one Immigration Stream linked to the Federal Express Entry system.
                                </Text>
                                <Text size={16} ta="justify">
                                    600 additional points are awarded to the candidates under Express Entry ranking system; the provincial nominations issued under the Express Entry programs are referred to as Enhanced Nominations.
                                </Text>
                                <Text size={16} ta="justify">
                                    <Text component='a' href='#' weight={600} color='#0042aa'>Base Nominations </Text> are the regular programs made outside Express Entry pool and these are subjected to PNP Streams, requirements defined by the respective provinces or territories. There are no additional points awarded for under base nominations. Individuals who are not eligible under Express Entry still get eligible to make an application under PNP Base programs if they meet the eligibility requirements defined the Province or the Territory.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>BRITISH COLUMBIA PROVINCIAL NOMINEE PROGRAM</Text>
                                <Text size={16} ta="justify">Among 80+ Provincial Immigration Pathways, each Canadian Province and Territory has its own unique Provincial Nominee Program, also has at least one Immigration Stream linked to the Federal Express Entry system.</Text>
                                <Text size={16} ta="justify">600 additional points are awarded to the candidates under Express Entry ranking system; the provincial nominations issued under the Express Entry programs are referred to as Enhanced Nominations.</Text>
                                <Text size={16} ta="justify">Base Nominations are the regular programs made outside Express Entry pool and these are subjected to PNP Streams, requirements defined by the respective provinces or territories. There are no additional points awarded for under base nominations. Individuals who are not eligible under Express Entry still get eligible to make an application under PNP Base programs if they meet the eligibility requirements defined the Province or the Territory.</Text>
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

export default Canadaprovisionalvisawrapper