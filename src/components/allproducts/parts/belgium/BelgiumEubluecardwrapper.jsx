import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function BelgiumEubluecardwrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Belgium Eu Blue Card</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                <Text size={18} weight={600} color='#0042aa'>Check How to Migrate to Belgium under EU Blue Card</Text>
                                <Text size={16} ta="justify">
                                    If you're considering relocating to Belgium for employment, it's important to understand the best approach for your migration.
                                    Belgium holds significance as a member of the Eurozone, an economic collective comprising several European nations. Notably,
                                    Brussels, Belgium serves as the headquarters for the European Union.
                                    This membership provides citizens of fellow member countries with favorable prospects for employment and travel across this region.
                                </Text>
                                <Text size={16} ta="justify">
                                    However, the global landscape is increasingly diverse, leading to more individuals seeking international migration. In response,
                                    Belgium has devised mechanisms to welcome people from various parts of the world. This is exemplified by the implementation of the Blue Card program.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={18} tt="uppercase" weight={700} ta="center" td="underline" color='#e30303'>Who is it for?</Text>
                                <Text size={16} ta="justify">The Belgium EU Blue Card serves as a combined work and residential permit, primarily intended for individuals
                                    originating from outside the European Union. This permit is designed for skilled workers who aspire to engage in a
                                    specialized and high-level job. The eligibility criteria necessitate possession of certification that validates
                                    the individual's substantial vocational qualifications that are pertinent to the specified job role.
                                </Text>
                                <Text size={16} ta="justify">It's important to note that not all professions are eligible for the Blue Card program. Rather, it is exclusively accessible to individuals engaged in highly qualified occupations.</Text>
                            </Stack>
                            <Stack>
                                <Text tt="uppercase" size={18} weight={700} ta="center" td="underline" color='#e30303'>What Is Meant By Highly Qualified Job?</Text>
                                <Text size={16} ta="justify">Indeed, not all occupations demand the same level of skill and expertise. Job roles vary widely, ranging from manual labor tasks to intellectually demanding positions.
                                    High-skilled professions encompass a diverse spectrum,
                                    including fields such as Medicine, Engineering, and Pharmacy, where advanced educational qualifications and specialized knowledge are imperative.
                                </Text>
                                <Text size={16} ta="justify">
                                    Moreover, roles that involve management and leadership also fall under the category of highly qualified jobs.
                                    These positions typically require substantial experience accrued over time, along with the ability to make informed decisions and steer strategic initiatives.
                                </Text>
                                <Text size={16} ta="justify">In essence, the EU Blue Card program is tailored to attract professionals who possess the requisite qualifications and expertise in their respective fields,
                                    particularly those involving advanced education, specialized training, and substantial experience.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>What Are The Requirements For The Blue Card? </Text>
                                <Text size={16} ta="justify">
                                    There are certain checkboxes that need to be ticked to be eligible for the Blue Card. If you meet the requirements,
                                    you should be sure of having the Blue Card. They are:
                                </Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}>You must have an employment contract with a company based in Belgium.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The employment contract must not be less than a year.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The employment also must be a permanent, non-seasonal job.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>You should hold a certification that is recognised.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>You would be paid a salary of EUR 51,882 at the minimum annually.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' tt="uppercase">What are its Benefits?</Text>
                                <Text size={16}>A Blue Card would give you opportunities that EU citizens would enjoy.</Text>
                                <List
                                    listStyleType='disc'
                                    spacing="xs"
                                >
                                    <List.Item>
                                        <Text size={16}>You would get access to extensive health benefits.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Your family members would be able to join you immediately you get your Blue Card.</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>How to Apply for Belgium EU Blue Card?</Text>
                                <Text size={16} ta="justify">You should apply for the Blue Card at the Belgium consular authority in your country.
                                    If you are already in Belgium, you should apply at the local foreign nationals department.
                                </Text>
                                <Text size={16} ta="justify">Meanwhile, as you are applying for Belgium Immigration under the Blue Card, your employer should also apply for a temporary employment permit at the regional level.</Text>
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

export default BelgiumEubluecardwrapper