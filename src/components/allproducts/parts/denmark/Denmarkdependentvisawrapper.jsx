import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Denmarkdependentvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Denmark Dependent Visa</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                <Text size={18} weight={600} color='#0042aa'>Denmark Dependent Visa Overview</Text>
                                <Text size={16} ta="justify">
                                    The Denmark Dependent Visa, part of the Family Reunification scheme, facilitates the reunion of foreigners residing or
                                    working in Denmark with their family members. This visa allows eligible individuals to bring their family members to
                                    Denmark to join them. If you are separated from your family due to work or residence in Denmark, this visa scheme enables
                                    you to unite with your loved ones in the country.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Application Process:</Text>
                                <List
                                    listStyleType='disc'
                                    spacing="xs"
                                    size="md"
                                >
                                    <List.Item>
                                        <Text size={16}>Complete the application form, ensuring all necessary details are provided.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Submit the application form in person to the immigration authorities in Denmark. Alternatively, if you are applying from outside Denmark, you can submit the form to a Danish diplomatic mission in your country.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Applicants must typically apply from their country of origin. If applying from a different country, you need to have resided there for at least three months before submitting the application to the Danish embassy in that country.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>During the application process, biometric data will be collected, including a digital photograph, signature, and fingerprints of all ten fingers.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>FAMILY REUNIFICATION WITH SPOUSE</Text>
                                <Text size={16} ta="justify" >To be eligible for family reunification with your spouse in Denmark,
                                    both the applicant and the spouse must meet specific criteria. These criteria
                                    are designed to ensure the authenticity and stability of the relationship, as
                                    well as the integration of the applicant into Danish society. Here are the key requirements:
                                </Text>
                                <List listStyleType='number' spacing="xs" withPadding>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text size={16} weight={600} color='#0042aa' component='span'>Legally Valid Marriage and Cohabitation:</Text>
                                            The marriage between the applicant and the spouse must be legally recognized, and both partners should have been living together as a married couple.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text color='#0042aa' component='span' size={16} weight={600}>Integration Assessment:</Text>
                                            Both the applicant and the spouse are required to undergo an integration assessment to determine their readiness to integrate into Danish society.
                                            This assessment includes language skills, knowledge of Danish society, and other factors that contribute to successful integration.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text color='#0042aa' component='span' size={16} weight={600}>Danish Language Tests:</Text>
                                            Applicants are typically required to pass two Danish language tests.
                                            These tests assess your ability to understand and communicate in Danish, which is crucial for effective integration into Danish life.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ><Text color='#0042aa' component='span' size={16} weight={600}>Voluntary Relationship:</Text> Both partners must be in the relationship voluntarily, without any external pressure or coercion.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text color='#0042aa' component='span' size={16} weight={600}>Age Requirement</Text> While the specific age requirement may vary,
                                            it's noted that the applicant must generally be at least 24 years old to qualify for family reunification with their spouse.
                                        </Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Eligibility Criteria</Text>
                                <Text size={17} color='#0042aa' weight={600}>Eligibilities for EU Blue Card to France:</Text>
                                <List
                                   listStyleType='disc'
                                   spacing="xs"
                                   
                                >
                                    <List.Item>
                                        <Text size={16}> Masters Degree</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Need to have 5 years of work expertise</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            You must possess an associate degree employment agreement and will have a monthly regular payment of
                                            a minimum of 1.5 times the common gross fixed reference per year by order of the Minister of Immigration
                                            (â‚¬ five1, 444 gross / year in 2012).
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Candidates must have an employment contract for adequate or shows than one year, lined by SMOE (Foreign personnel Service)</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>FAMILY REUNIFICATION WITH CHILDREN</Text>
                                <Text size={16} ta="justify">To qualify for a family reunification with children and other members the following requirements have to be met:</Text>
                                <List listStyleType='disc'>
                                    <List.Item>
                                        <Text size={16} ta="justify">The child or children must live with their parents in Denmark.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">The child or children must not have started a family of their own.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">The reunification must be to the best interest of the child or children.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} ta="justify">The parents must have a legal residence in Denmark.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Processing Time and Fee</Text>
                                <Text size={16} ta="justify">
                                    The processing time for a Denmark dependent visa is typically expected to be a maximum of 10 months.
                                    However, it's important to note that processing times can vary based on individual circumstances and changes in immigration policies.
                                    The visa fee for this type of visa is DK 6,700.
                                    Please keep in mind that visa fees are subject to change, so it's recommended to verify the fee amount at the time of submitting your application.
                                </Text>
                                <Text size={16} ta="justify">
                                    Once all the necessary requirements are met and the Danish Immigration Service approves the family reunification application,
                                    you will receive a confirmation notification. This confirmation allows the applicant and their family members to relocate to
                                    Denmark as per the provisions outlined by the visa scheme.
                                    It's essential to follow the guidelines and instructions provided by the Danish authorities to ensure a successful and smooth relocation process.
                                </Text>
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
                                    size="md"
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

export default Denmarkdependentvisawrapper