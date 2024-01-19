import React from 'react'
import { BackgroundImage, Center, Grid, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import coachingdetail from '../../../assets/coachingdetail.jpg'
import coachingdetail2 from '../../../assets/coaching-detail-image-2.jpg'
import coachingdetail3 from '../../../assets/coaching-detail-image-3.jpg'
import { IconCircleCheck } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
function Ieltscoachingdetails({ breadcrumb, coaching_name }) {
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
                <Text size={30} weight={600} color='white' ta="center">TRAINING LIST</Text>
                <Text color='white' ta="center">Home / <Link to="#">{breadcrumb}</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Stack>
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>{coaching_name} Training Overview</Text>
                    <Text ta="justify" size={16}>IELTS often serves as the pathway to settling in foreign countries, and numerous prestigious universities around the world require applicants to submit their IELTS scores. The IELTS score is considered a benchmark for assessing the credibility of universities. In essence, when a university sets a mandatory IELTS score as an admission requirement, it typically signifies the institution's quality, and the opposite holds true as well. At VisaMint Overseas Services, our dedicated IELTS department is staffed with accomplished faculty members who have successfully trained hundreds of students.</Text>
                    <Grid mt={10}>
                        <Grid.Col md={6}>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Need expertise help, wherever you
                                        in the world.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Check Information provide in your passport.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Go to the official website IELTS & create
                                        profile.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Speaking or writing score review form your exam.</Text>
                                </List.Item>
                            </List>
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16}>Speaking or writing score review form your exam.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Additional reports institution of coaching center</Text>
                                </List.Item>
                            </List>
                        </Grid.Col>
                    </Grid>
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }} mt={10}>How to Prepare for {coaching_name} Exam</Text>
                    <Image src={coachingdetail2} alt='image2' height={300} />
                    <Stack>
                        <Text size={20} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>Listening</Text>
                        <Text ta="justify">The Listening Module comprises 40 questions encompassing a diverse range of question types. This module remains consistent for both the General and Academic IELTS tests, catering to the needs of both types of test-takers.</Text>
                        <Text mt={20} size={20} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>Reading</Text>
                        <Text ta="justify">This segment comprises a total of 40 questions. Within the reading module,
                            three passages are presented, each allocated approximately 20 minutes for comprehension. Notably,
                            the reading tasks diverge between the academic and general modules. IELTS reading texts exhibit a heightened level of complexity.
                            Achieving a favorable band score in reading may prove challenging without expert guidance and training.
                        </Text>
                        <Text mt={20} size={20} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>Writing</Text>
                        <Text ta="justify">The IELTS Writing test varies between the General and Academic Modules.
                            The allocated time for the Writing Module is 1 hour, during which you are required to accomplish two tasks.
                            The initial task involves writing a letter for the General IELTS test and a Graph Description for the Academic IELTS test.
                            The second task entails crafting an essay that presents your viewpoint within a 40-minute span. Given the intricacy of writing,
                            attaining a high score necessitates expert guidance and training.
                        </Text>
                        <Stack>
                            <Text size={20} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>Speaking</Text>
                            <Text ta="justify">
                                The speaking segment remains consistent for both the Academic and General IELTS tests, following this format:
                            </Text>
                            <Text size={16} weight={600} style={{ color: 'red' }}> Section 1:</Text>
                            <Text >The examiner will introduce themselves and request you to do the same. Following this, a series of general questions will be posed.</Text>
                            <Text size={16} weight={600} style={{ color: 'red' }}>Section 2:</Text>
                            <Text>You will receive a task card presenting various topics to discuss. After a brief preparation time, you will be asked questions about your chosen topic.</Text>
                            <Text size={16} weight={600} style={{ color: 'red' }}>Section 3:</Text>
                            <Text ta="justify">
                                Continuing from the topic you selected in section 2, the assessor will delve deeper and ask more extensive questions. This section aims to elicit more comprehensive responses from you.</Text>
                        </Stack>
                    </Stack>
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>{coaching_name} Language Training</Text>
                    <Text ta="justify">They also provide insights about the profession’s most colorful personalities and powerful institutions, as well as original commentary on breaking legal developments.The resources managed in logistics can include physical items such as materials, equipment, and liquids.</Text>
                </Stack>
            </div>
        </>
    )
}

export default Ieltscoachingdetails