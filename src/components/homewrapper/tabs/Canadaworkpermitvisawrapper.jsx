import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Canadaworkpermitvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">Canada Post Graduate Work Permit</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={17} weight={600} color='#0042aa'>How to Apply for Canada Post-Graduate Work Permit Visa:</Text>
                            <Text size={16} ta="justify">Canada work permit visa is designed for international students who want to work in the country.  In a bid to retain international students, Canada operates Post Graduate Work Permit Program through IRCC (Immigration Refugees and Citizenship Canada). A three year Canada Open Work Permit Visa is obtained by international students, giving them the opportunity to work for any employer in Canada hence gaining Canadian work experience in line with their field of studies. Such students must have graduated from an eligible program at a post-secondary institution. This work permit visa is valid for the entire period of the study program of students. Students can get this visa without a job offer as at the time of application and are eligible to take up any type of employment once granted the visa. As soon as the work permit is granted, international students are required to apply for Social Insurance Number (SIN). SIN gives applicants the privilege of making any government deductions and filing for Canadian income tax.</Text>
                            <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>ELIGIBILITY CRITERIA</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={16} weight={600} color='#0042aa'>Must be eligible for Canada Post Graduate Work Permit visa, applicants:</Text>
                            <Text size={16}>Must have had continuous full time study for at least eight months in Canada</Text>
                            <Text size={16}>Are expected to have graduated from one of the following:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>A public post-secondary institution e.g., university, college or CEGEP (in Quebec)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A private post-secondary institution with the same rules and regulations as public institutions</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>A private post-secondary or secondary institution (in Quebec) with qualifying programs spanning 900 hours or more for an attestation of vocational specialization (AVS) or diploma of vocational studies (DVS)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}> A private institution in Canada empowered b statute in the province to award degrees (bachelorâ€™s degree, masterâ€™s degree,doctorate, etc.).</Text>
                                </List.Item>
                            </List>
                            <Text size={16} ta="justify">The student must have enrolled in a program of study approved by the province to earn the degree; not just any study program available in the private institution</Text>
                            <Text size={16} ta="justify">Are expected to have submitted the application for work permit not later than 90 days after they received confirmation of qualification for completing the academic program from the institution</Text>
                            <Text size={16} ta="justify">Must have done and holding the program of study and have been duly notified to be applicable to obtain their Degree, diploma or any relevant certificate</Text>
                            <Text size={16} ta="justify">Must possess a valid study permit before applying for the work permit visa</Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Visa Program Details</Text>
                            <Stack>
                                <Text size={16} ta="justify">The Post-Graduation Work Permit Program (PGWPP) is designed to provide an opportunity for international students
                                    who have completed their studies at a participating Canadian post-secondary institution to gain work experience in Canada.
                                    This work experience can be valuable for those who are considering applying for permanent residence through the Canadian
                                    Experience Class.</Text>
                                <Text size={16} weight={600} color='#0042aa'>Here are some key points about the PGWPP:</Text>
                                <List listStyleType='disc' spacing="xs" withPadding>
                                    <List.Item>
                                        <Text size={16}>Graduates who meet the PGWPP requirements can work in Canada after completing their studies.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Employers who hire graduates with an open work permit issued under the PGWPP are not required to obtain a positive Labour Market Impact Assessment (LMIA) from Service Canada.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The open work permits issued to PGWPP graduates are marked with the LMIA exemption code C43.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The duration of the work permit can be for the same length as the study program, with a maximum duration of up to 3 years.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>The post-graduation work permit cannot be longer than the duration of the student's study program, which must be at least 8 months in duration.</Text>
                                    </List.Item>
                                </List>
                                <Text size={16} ta="justify">
                                    In summary, the PGWPP provides an opportunity for international students to gain work experience in Canada and
                                    potentially transition to permanent residence through the Canadian Experience Class. The program also offers benefits to employers by exempting
                                    them from the LMIA requirement when hiring graduates with open work permits issued under the PGWPP.
                                </Text>
                            </Stack>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Benefits of Program</Text>
                            <Text size={17} weight={600} color='#0042aa'>Whata Are It's Benefits?</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16}>Canada Immigration or Canada PR Federal Skilled Worker visa allows you to work in Canada without the need to be sponsored by an employer, a Canadian work permit or a job offer</Text>
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
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                                <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need.
                                    Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                                <Text size={16} ta="justify">
                                    As an
                                    <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>,
                                    Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over
                                    the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices.
                                    Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded
                                    or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.
                                </Text>
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

export default Canadaworkpermitvisawrapper