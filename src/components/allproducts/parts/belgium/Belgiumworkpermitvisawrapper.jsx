import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Belgiumworkpermitvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Belgium Work Permit</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                <Text size={18} weight={600} color='#0042aa'>Introduction - Belgium Immigration and Work Permit</Text>
                                <Text size={16} ta="justify">
                                    Belgium, like several other nations, mandates that overseas professionals who aren't citizens of the European Economic Area (EEA) or
                                    Switzerland must acquire a Belgium work permit prior to engaging in employment within the country.
                                    This permit is a requisite for non-EEA and non-Swiss nationals to legally work and reside in Belgium.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Work permit type-A </Text>
                                <Text size={16} ta="justify">
                                    The Type-A work permit is classified as an indefinite permit due to its unrestricted nature.
                                    Under this category, Belgian employers are not confined to a specific time frame when hiring candidates. This work permit,
                                    known as Type-A, is granted for an indefinite period. The Belgian authorities issue this Type-A permit to the following
                                    categories of individuals:
                                </Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                    withPadding
                                >
                                    <List.Item>
                                        <Text size={16}>Spouses of foreign nationals possessing a Type-A permit.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Non-EU domestic partners of Belgian nationals.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Non-EU domestic partners of associates who hold legal Belgian residency.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Any foreigner who has lawfully and continuously resided in Belgium for a minimum of 5 years.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Work permit group B </Text>
                                <Text size={16} ta="justify">
                                    This is specifically applicable to a single employer for a work period of one year.
                                    It is designed with renewability in mind, featuring a renewal permit. If the candidate changes employment,
                                    leading to a change in the employer, the new employer is required to initiate a new B permit application on
                                    behalf of the candidate. Once an individual has lived and worked in Belgium on the same B permit for a minimum of
                                    5 years, with the B permit being renewed four or more times, they become eligible to easily obtain an indefinite A permit.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Work permit kind C </Text>
                                <Text size={16} ta="justify">
                                    This type of work permit is applicable to all salaried professions and any employer,
                                    but it comes with a limited timeframe. It is a non-renewable permit with a validity
                                    of only one year. It allows the holder to work for various Belgian employers.
                                    This type of permit is specifically intended for domestic, agricultural, and seasonal employees.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Eligibility Criteria</Text>
                                <Text size={16} color='#0042aa' weight={600}>To be eligible for a work permit in Belgium, applicants must meet the following criteria:</Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                    withPadding
                                >
                                    <List.Item>
                                        <Text size={16}> Valid Employment Letter: Visa applicants should have a valid job offer from a Belgian employer.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>High Salary: Candidates must have a high monthly salary, exceeding 1670 Euros.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            Academic Qualifications and Work Experience: Candidates should possess the necessary academic qualifications
                                            and work experience to qualify for a high-level position that doesn't require advertising.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Assignment Permit Experience: Candidates applying for the Assignment permit should have a minimum of 6-12 months of experience with the service provider.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            Foreign Company Contract: If the candidate has worked for a foreign company providing services to a Belgian firm,
                                            a valid copy of the contract between the Belgian and foreign companies must be submitted.
                                            The Belgian company should take responsibility for paying the candidate's taxes and social insurance.
                                        </Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Documents needed</Text>
                                <List listStyleType='disc' spacing="sm">
                                    <List.Item>
                                        <Text size={16}>Valid Passport: Ensure your passport is valid for at least twelve more months.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            Original Work or Training Permit: Obtain an original work permit or training permit issued by the Belgium-based employer or their representative.
                                            This permit should be obtained from the regional employment service that covers the employer's location.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Invitation or Dispatch Letter: Provide an invitation letter from the Belgian company or a dispatch letter from the corporate Indian body that outlines the purpose and objectives of your trip.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Medical Certificate: Include a medical certificate as part of your application.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Police Clearance Certificate (PCC): Present a certificate that attests to your lack of a criminal record.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Benefits of Program</Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}>
                                            <Text weight={600} component='span' color='#0042aa' size={16}>Work and Stay Duration:</Text> The program allows you to work and reside in Belgium throughout the duration of your employment contract.
                                        </Text>
                                        <Text size={16}>
                                            <Text weight={600} component='span' color='#0042aa' size={16}>Family Accompaniment:</Text> Your family members have the option to join you and accompany you during your stay in Belgium.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>You have a pathway to a long residence permit</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>When a permit has a mark titled â€œfamily and private,â€ this shows the relations are allowed to transit to France and take up any job opportunities.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text weight={600} component='span' color='#0042aa' size={16}>Freedom of Travel:</Text> You have the freedom to travel within Belgium as per your preferences.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Process Flow</Text>
                                <List
                                    listStyleType='disc'
                                    spacing="sm"
                                >
                                    <List.Item>
                                        <Text size={16}> Ensure you sign up with Opulentus </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The Belgian work visa permit will allocate officers to you that will guide you regarding all relevant documents</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>They will also assign case officers to you that will assist in filling the required forms given to you.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>They will enlighten you in traveling and settling in Belgium</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The case officer helps you with the submission of your documents</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The embassy arrange for your interview date</Text>
                                    </List.Item>
                                </List>
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

export default Belgiumworkpermitvisawrapper