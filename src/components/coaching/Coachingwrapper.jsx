import { Accordion, Anchor, BackgroundImage, Card, Center, Container, Grid, Group, Image, List, Modal, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'
import coaching1 from '../../assets/coaching-1.jpg'
import coaching2 from '../../assets/trainingtwo.avif'
import coaching3 from '../../assets/coaching-3.jpg'
import coaching4 from '../../assets/trainingthree.avif'
import coaching5 from '../../assets/coaching-5.jpg'
import coaching6 from '../../assets/trainingone.avif'
import { Getintouchformone } from '../Getintouchform'
import breadcrumb1 from '../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Coachingwrapper() {

    const [form, setForm] = useState(false)

    const openModal = () => {
        setForm(true)
    }

    const closeModal = () => {
        setForm(false)
    }

    const { width } = useViewportSize()
    let textSize;
    let textSize2;
    if (width < 377) {
        textSize = 18
        textSize2 = 15
    } else if (width < 410) {
        textSize = 20
        textSize2 = 16
    } else if (width < 567) {
        textSize = 22
    } else if (width < 769) {
        textSize = 25
    } else {
        textSize = 30
    }

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
                <Text size={textSize} weight={600} color='white' ta="center">TRAINING LIST</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#">Training List</Link></Text>
            </Stack>
            <section className="py-lg-6 py-5">
                <div className="container">
                    <Grid>
                        <Grid.Col md={4}>
                            <Card padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image src={coaching1} alt='img' height={230} />
                                </Card.Section>
                                <Stack spacing={5} mt="md" mb="xs">
                                    <Text color='#0c4aae' size={18} weight={600} component='a' href='/IELTS_coaching_details' >IELTS Training</Text>
                                    <Text ta="justify" size={16} className="mb-3">IELTS often serves as the pathway to settling in foreign countries,
                                        and numerous prestigious universities around the world require applicants to submit their IELTS scores.
                                        The IELTS score is considered a benchmark for assessing the credibility of universities</Text>
                                    <Group>
                                        <Text component='a' href='/IELTS_coaching_details' className="btn-link" style={{ textDecoration: "none" }}>Read More</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card hadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image src={coaching2} alt='img' height={230} />
                                </Card.Section>
                                <Stack spacing={5} mt="md" mb="xs">
                                    <Text color='#0c4aae' size={18} weight={600} component='a' href='/PTE_coaching_details' >PTE Training</Text>
                                    <Text size={16} ta="justify" className="mb-3">VisaMint Overseas Services possesses a team of exceptionally skilled English Language Faculty,
                                        who will expertly navigate you through various modules of the examination.
                                        The Pearson Language Tests, which operates under the umbrella of Pearson PLC Group,</Text>
                                    <Group>
                                        <Text component='a' href='/PTE_coaching_details' className="btn-link" style={{ textDecoration: "none" }}>Read More</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image src={coaching3} alt='img' height={230} />
                                </Card.Section>
                                <Stack spacing={5} mt="md" mb="xs">
                                    <Text color='#0c4aae' size={18} weight={600} component='a' href='/TOFEL_coaching_details' >TOEFL</Text>
                                    <Text size={16} ta="justify" className="mb-3">TOEFL iBT is another vital Language Proficiency Test required by non-native English speakers aiming to establish their qualifications
                                        for residing in an English-speaking nation and undertaking higher education endeavors. At VisaMint Overseas Services,</Text>
                                    <Group>
                                        <Text component='a' href='/TOFEL_coaching_details' className="btn-link" style={{ textDecoration: "none" }}>Read More</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image src={coaching4} alt='img' height={230} />
                                </Card.Section>
                                <Stack spacing={5} mt="md" mb="xs">
                                    <Text color='#0c4aae' size={18} weight={600} component='a' href='/GMAT_training_details' >GMAT (Graduate Management Test)</Text>
                                    <Text size={16} ta="justify" >If you're considering applying to a business school for a graduate degree in management, it's essential to acquaint yourself with the GMAT exam. Widely recognized, the GMAT score holds weight with premier business and management institutions worldwide</Text>
                                    <Group>
                                        <Text component='a' href='/GMAT_training_details' className="btn-link" style={{ textDecoration: "none" }}>Read More</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image src={coaching6} alt='img' height={230} />
                                </Card.Section>
                                <Stack spacing={5} mt="md" mb="xs">
                                    <Text color='#0c4aae' size={18} weight={600} component='a' href='/GRE_training_details' >GRE (Graduate Record Examination)</Text>
                                    <Text size={16} ta="justify" >The Graduate Record Examination (GRE) stands as a widely recognized standardized test conducted with the primary
                                        objective of securing admission to various programs offered by diverse foreign universities. The core purpose of the GRE exam is to gauge the verbal..</Text>
                                    <Group>
                                        <Text component='a' href='/GRE_training_details' className="btn-link" style={{ textDecoration: "none" }}>Read More</Text>
                                    </Group>
                                </Stack>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </section>
            <section className='pb-lg-6 pb-5'>
                <Container>
                    <Text weight={600} size={textSize} ta="center" >Need Coaching Help? Look Here </Text>
                    <Accordion variant="contained" mt={20}>
                        <Accordion.Item value="customization">
                            <Accordion.Control>
                                <Text weight={600}>How long does it take for a transit visa to process?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text size={15}>The processing time for a transit visa varies depending on the country, but it typically takes a few days to a few weeks. It's advisable to apply well in advance of your travel date and check with the relevant consulate or embassy for precise processing times. </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="flexibility">
                            <Accordion.Control>
                                <Text size={16} weight={600}>What is the purpose of united states Business visa?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text size={15}>The United States Business Visa, known as the B-1 visa, is intended for foreign nationals visiting the U.S. for temporary business-related purposes. It allows for activities such as attending meetings, negotiations, training, market research, and limited temporary work.
                                    However, it is not for long-term employment. To obtain a B-1 visa, you must demonstrate the temporary nature of your visit and meet specific requirements outlined by the U.S. embassy or consulate in your home country.</Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="focus-ring">
                            <Accordion.Control>
                                <Text size={16} weight={600}>If the applicant is intending to stay more than 3 months?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text size={15}>If an applicant intends to stay in the United States for more than 3 months for business purposes, they should consider a different type of visa, such as an L-1 or E-2 visa, as the B-1 visa is typically for shorter stays of up to 6 months. The choice of visa depends on the nature of the work and specific circumstances, and consulting with the U.S. embassy or consulate is advisable.</Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="focus-ring2">
                            <Accordion.Control>
                                <Text size={16} weight={600}>What are the important things to know as Transit visa Applicant?</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <List
                                    spacing="sm"
                                    listStyleType='number'
                                >
                                    <List.Item>
                                        <Text size={16}>Transit visas are for passing through, not staying.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Understand the allowed transit duration.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Check entry requirements and visa types.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Apply well in advance.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Have necessary travel documents.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Know visa fees and processing times.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Transit visa rules may vary by country.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Consult the embassy or consulate for guidance.</Text>
                                    </List.Item>
                                </List>
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <Text ta="center" mt={20} size={18} weight={600}>still have questions?<Anchor color='red' underline={false} onClick={openModal}> ask here</Anchor></Text>
                    <Modal opened={form} onClose={closeModal} zIndex={99999999} withCloseButton={false} >
                        <Getintouchformone />
                    </Modal>
                </Container>
            </section>
        </>
    )
}

export default Coachingwrapper