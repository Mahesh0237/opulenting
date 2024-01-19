import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Canadafedralskilledvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Canada Federal Skilled Worker</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={17} color='#0042aa' weight={600}>How to Apply for Canada Federal Skilled Worker Program?</Text>
                            <Text size={16} ta="justify">The Canada Federal Skilled Worker Program is for skilled foreigners who want to migrate to Canada. The program is one of the three immigration programs that are organized by the Canadian Federal Government. Under the FSW program one can permanently enter into Canada and settle down in any of the provinces of Canada, excluding Quebec. </Text>
                            <Text size={16} ta="justify">The program is based on a merit-based CRS ranking criteria and is processed through the Express Entry application system which is more defined, re-structured and a fast-track process of Canada Immigration. .</Text>
                            <Text size={16} ta="justify">In order to apply for the Federal Skilled Worker Program, an Eligible Applicant must get his/her profile assessed as per the Comprehensive Ranking System and file an application into the Express Entry pool in order to get invited to apply for Canada PR.</Text>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={17} weight={600} color='#0042aa' >Visa Application Eligibility:</Text>
                            <Text size={16}>An applicant must be invited to apply for this visa.</Text>
                            <Text size={16}>He must be younger than 45 years when he is invited to apply for this visa.</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16} >The applicant in question must nominate an occupation that is relevant to his skill and qualification and is n the important Medium and Long-term Strategic Skills List (MLTSSL).</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >He or she must have the skills he has claimed to have assessed by the relevant authorities in order to be suitable for his or her career nomination.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >He must be competent, fluent and be able to communicate in the English language.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >He must score at least 60% in the Point test.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>He or she must meet the academic, health and character requirements.</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Program Details</Text>
                            <Stack>
                                <Text size={17} weight={600} color='#0042aa'>What Is Meant By Skilled Workers?</Text>
                                <Text size={16}>In the Canadian Visa Application system, a skilled worker means someone who has some skills and can fill a vital gap. These are divided into three categories.</Text>
                                <Text ta="justify" size={16}>Skill Type 0. These are managerial positions. Like a restaurant, fuel station managers.</Text>
                                <Text size={16} ta="justify">Skill Type A. These are professional jobs. They include professions like engineers, physicians, pharmacists, and nurses.</Text>
                                <Text size={16} ta="justify">Skill Type B. These are technical jobs and skilled trades.</Text>
                            </Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Benefits of Program</Text>
                            <Text size={17} weight={600} color='#0042aa'>Whata Are It's Benefits?</Text>
                            <List
                                listStyleType='disc'
                                spacing="xs"
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16} >Canada Immigration or Canada PR Federal Skilled Worker visa allows you to work in Canada without the need to be sponsored by an employer, a Canadian work permit or a job offer</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Successful applicants are free to work without any constraints/restrictions, unlike a work permit</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>After three years stay in the country, the applicant can apply for Canadian citizenship</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Once you get your Canadian Passport & Citizenship, you can travel to many countries in the world without a visa</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>You can sponsor your immediate family & relatives to join you in Canada</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Unrestricted access to Canada's labour market and associated insurance and pension benefits</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The PR visa is now granted in 6-12 months instead of the previous 3+years</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Visa Processing Time</Text>
                            <Text size={16} ta="justify">From the time of application to your approval would take about 6-12 months of processing time.</Text>
                            <Text size={16} ta="justify" weight={600} color='#0042aa'>What Documents Do You Need?</Text>
                            <List listStyleType='disc' spacing="xs" withPadding>
                                <List.Item>
                                    <Text size={16}>Valid passport</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Experience documents.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Medical certificate</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Educational documents</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Police certificate</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Language skill test documents.</Text>
                                </List.Item>
                            </List>
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

export default Canadafedralskilledvisawrapper