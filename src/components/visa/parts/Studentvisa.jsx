import { BackgroundImage, Center, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import visa1 from '../../../assets/student-visas.jpg'
import visadetail2 from '../../../assets/visa-detail-2.jpg'
function Studentvisa() {
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
                <Text size={30} weight={600} color='white' ta="center">Visa</Text>
                <Text color='white' ta="center">Home / <Link to="#">Student Visa</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Image src={visa1} alt="image" height={300} width="100%" />
                <Stack>
                    <Text mt={20} weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Student Visa </Text>
                    <Text size={16} ta="justify"  >
                        Student visa, which allows its holder to study at an institution of higher learning in
                        the issuing country.Before you apply for this visa, you must have applied for and been accepted to study full-time at
                        a college/university. You must provide evidence of your Enrolment and proof of your financial capacity to undertake the course,
                        at the time that you lodge your application.
                    </Text>
                    <Text size={16} ta="justify" >
                        This visa generally allows you to stay in the country for the duration of your course. It permits multiple entries. Dependent family
                        members may be given a visa to accompany you and be able to stay the same length of time as you, but they cannot stay once you have left the country.
                    </Text>
                    <Text size={16} >You and your dependent family members may also get permission to work while you are studying.</Text>
                    <Text size={16} ta="justify" >
                        Your individual circumstances must demonstrate that you genuinely intend to study and stay in the destination country temporarily.
                        The factors that are considered during assessment of the Visa application include:</Text>
                    {/* <Text mt={20} weight={600} size={25} style={{ color: 'rgb(0, 66, 170)' }}>Visa Benifits</Text> */}
                    <Grid>
                        <Grid.Col md={6}>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Your personal circumstances in your home country</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your potential circumstances in the destination country</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The value of the course to your future</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Your immigration history</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Any other matter that is relevant to your intention to remain overseas temporarily.</Text>
                                </List.Item>
                            </List>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Group position='right'>
                                <Image src={visadetail2} alt='image' height={200} radius={10} width={350} />
                            </Group>
                        </Grid.Col>
                    </Grid>
                    <Stack>
                        <Text size={18} weight={600} color='rgb(0, 66, 170)'>Financial requirements</Text>
                        <Text size={16} ta="justify" >
                            You must have enough money to pay for travel, tuition and living expenses for yourself, your partner and
                            your dependent children for the duration of your study.
                            You must also have enough money to support your partner and dependent children.
                        </Text>
                    </Stack>
                    <Stack>
                        <Text size={18} weight={600} color='rgb(0, 66, 170)'>Study & Internships</Text>
                        <Text size={16} ta="justify" >
                            Internship programs are designed to allow foreign college and university students or recent graduates to gain exposure to
                            international culture and to receive hands-on experience in foreign business practices in their chosen occupational field.
                        </Text>
                        <Text size={16} weight={600} color='rgb(0, 66, 170)'>Interns must be foreign nationals:</Text>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            listStyleType='disc'
                            withPadding
                        >
                            <List.Item>
                                <Text size={16} >Who are currently enrolled in and pursuing studies at a foreign degree- or
                                    certificate-granting post-secondary academic institution; or</Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16} >Who have graduated from such an institution no more than 12/24 months prior to
                                    their internship program start date?</Text>
                            </List.Item>
                        </List>
                    </Stack>
                    <Stack>
                        <Text size={18} weight={600} color='rgb(0, 66, 170)'>Practical Experience</Text>
                        <Text size={16} >The program bridges the gap between formal education and practical work experience.</Text>
                        <Text size={16} ta="justify" >
                            This visa is for people from outside, who want to improve their occupational skills through training with an International organization.
                            People may be eligible for this visa if the proposed occupational training is one of the following:
                        </Text>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            listStyleType='disc'
                            withPadding
                        >
                            <List.Item>
                                <Text size={16} >
                                    Training or practical experience in the workplace required for the person to obtain
                                    registration for employment in their occupation
                                </Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16} >A structured workplace training program to enhance the person’s existing skills in an eligible occupation</Text>
                            </List.Item>
                            <List.Item>
                                <Text size={16} >Structured workplace training to enhance the person’s skills and promote capacity building overseas.</Text>
                            </List.Item>
                        </List>
                        <Text size={16} ta="justify" >
                            Interns cannot generally work in unskilled or casual labor positions, in positions that require or
                            involve childcare or elder care or in any kind of position that involves medical patient care or contact.
                            Nor can interns work in positions that require more than 20 percent clerical or office support work.
                        </Text>
                        <Text size={16} ta="justify" >
                            This visa allows people to complete workplace-based training on a temporary basis.
                            The training must provide people with additional or enhanced skills in their occupations,
                            tertiary studies or fields of expertise.
                        </Text>
                    </Stack>
                </Stack>
            </div>
        </>
    )
}

export default Studentvisa