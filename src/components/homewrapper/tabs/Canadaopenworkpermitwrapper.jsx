import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Canadaopenworkpermitwrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Canada Open Work Permit</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={18} weight={600} color='#0042aa'>Apply for Canadian Open Work Permit Visa</Text>
                            <Text size={16} ta="justify">The Canada Open Work Permit was introduced as a means of attracting foreign students to Canada. Foreign students on study permit are given the opportunity to have an open work permit which allows them to take up jobs of their choice without a job offer from an employer. </Text>
                            <Text size={16} ta="justify">Spouses and common-law partners of a temporary foreign worker and international students who also wish to work in Canada for an employer in Canada are eligible to have this Canada work visa..</Text>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={17} weight={600} color='#0042aa'>Applicant Eligibility:</Text>
                            <Text size={16}>For any applicant to be qualified for Open Work Permit Visa to Canada, there are some criteria for each category of immigrant that they must possess. They are stated below:</Text>
                            <Text size={16} weight={600} color='#0042aa'>For Foreign Student:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>
                                        Foreign students who graduated from a Canadian post-secondary institution are qualified for a three-year working permit and having an offer of employment is not a necessity when applying.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>International students must have graduated from either a public or private Canadian tertiary institution, as long as the latter is 50% government funded. </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The international student must file an application for Open work permit within 90 days of getting a confirmation from the educational institution where they had met the prerequisites of the program</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The international student must have graduated from a program with a duration of not less than 2 years.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Lastly, international students are expected to have valid student permit</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}> Visa Program Details</Text>
                            <Stack> 
                                <Text size={17} weight={600} color='#0042aa'>For Spouse or The issue of Common Law relationship</Text>
                                <Text size={16} ta="justify">Dependent spouseâ€™s partner is expected to be a full-time diploma/degree or postgraduate student  with a valid student permit.</Text>
                                <Text ta="justify" size={16}>Dependent spouseâ€™s partner must have a valid work permit or be in a fellowship program</Text>
                                <Text size={16} ta="justify">Have 0-1 working experience..</Text>
                                <Text size={16} ta="justify">Must show financial proof that he can take care of his needs and his dependants.</Text>
                                <Text size={16} ta="justify">A dependant can apply for the work permit, and this document will have the same expiry date not different from the main applicant.</Text>
                            </Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Benefits of Program</Text>
                            <Text size={17} weight={600} color='#0042aa'>Advantages of Applying for Spousal Dependent Work Permit:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                               listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16}>By availing Spouse Dependent Work Permit your Dependent can work full time while he/she is in Canada.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>It is not required for appearing the IELTS Exam as a Language Proficiency Test to avail Spouse Dependent work permit.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>No need of the LMIA (Labour Market Impact Assessment) or Employment offer at the time of application if your spouse is already in Canada on valid visa status.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The applicant can live with their spouse in Canada until the sponsor work permit is valid.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You can also extend your staying with your Dependent in Canadian Nation by extending the validity of your visa. It can be possible if your spouse has extended the validity of his/her valid visa status.</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}> Visa Processing Details</Text>
                            <Stack>
                                <Text size={17} weight={600} color='#0042aa'>Work Permit for all Dependents</Text>
                                <Text size={16} ta="justify">When dependant gets Open work permits, it enables them to take or work in any company of their choice. No dependant can stay longer than the main applicant. Prior to entering into the country, every relatives or dependant are to apply for permit separately. They are also expected to attach a copy of the main applicant permit.</Text>
                                <Text ta="justify" size={16}>Some other documents require are listed below:</Text>
                                <List listStyleType='disc' spacing="xs" withPadding>
                                    <List.Item>
                                        <Text size={16}>Confirmation letter from the present employer</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>A valid offer document from the applicant employer</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Applicant copy of payment slips from the Canadian employer</Text>
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
                                        <Text size={16} >Expert guidance on the complete process</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} >Documentation (this defers from country to country)</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} >Checklist of Document stage-wise and help with requisites and choices after the signed copy of service agreement  has been received</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16} >Provision of documents samples</Text>
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

export default Canadaopenworkpermitwrapper