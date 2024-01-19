import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Usastudentvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> USA student visa</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>USA Student Abroad </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                <Text size={16} ta="justify">There are many foreign students from all over the world who would like a university degree from the United States of America. USA is one of the most popular dream destinations for many students. Foreign students who qualify are eligible to go to the USA to pursue their studies. There is a wide range of study courses available there. However, if a foreign student wants to study in the US, he or she will require a USA Student </Text>
                                <Text size={16}>The Student is a Non- Immigrant (NIV) that allows the foreign student to study the course, language, or training program there. The s are issued up to the duration of the study course/ program. However they first need to enroll at an accredited educational institution in the USA . The category is determined by the institute and the type of study course. There are three major categories of USA Study / Student . They are given below with an overview about each category of student . </Text>
                                <Text size={16} ta="justify" color='#0042aa' weight={600}>1. Academic Studies - (F1 ) </Text>
                                <Text size={16} ta="justify" >The F1 is one of the most popular s that is issued to a wide range of students for studying in the USA. This also includes English language study at an accredited institute and study research at a qualified educational institute. The basic requirements for this category are – Students must do a full time study & show sufficient funds for their full stay in the USA. Students must finish their course of study within the duration. Students must also want to go back to their home country as it is a Non Immigrant . </Text>
                                <Text size={16} ta="justify" color='#0042aa' weight={600}>2. Vocational Studies/ Non- Academic Studies - (M1 ) </Text>
                                <Text size={16} ta="justify">The students who would like to pursue a study course at a non- academic institute that is recognized by the USCIS may go for this category. However, they must meet some basic requirements. This includes showing funds for their trip and they must also want to return to their home country/ leave US at the time of completing the study courses at the vocational institute. They must also have a house in their home country. The M1 is generally issued up to the study program duration with an additional 30 days grace period post training. </Text>
                                <Text size={16} ta="justify" color='#0042aa' weight={600}>3. Academic Studies as an Exchange Student – (J1 ) </Text>
                                <Text size={16}>There are some culture exchange programs that are held in the USA , especially for business & medical training purposes. If a student would like to go to the US for such study based Visitor Programs he or she can go for the ‘J’ category . For this category, there are basic requirements like English proficiency & medical insurance. In addition to these requirements they must meet all eligibility requirements and be sponsored by the private sector/ government. </Text>
                                <Text size={16}>The information on Student given above is to give a basic idea about the Student category. For the application, F1 extension or on- campus part time work queries, F1 OPT, F1 CPT, Student Interview, etc., please contact specialized USA Student Consultants about it. </Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303' mt={20}>WHY CONTACT OPULENTUS</Text>
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

export default Usastudentvisawrapper