import React from 'react'
import { BackgroundImage, Button, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import coachingdetail from '../../../assets/TOFELtraining.avif'
import { IconArrowNarrowRight, IconPinFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
function Tofeltrainingwrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">TOFEL Training Overview</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Stack>
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>TOFEL Training Overview</Text>
                    <Text ta="justify" size={16}>
                        TOEFL iBT is another vital Language Proficiency Test required by non-native English speakers aiming
                        to establish their qualifications for residing in an English-speaking nation and undertaking higher education endeavors.
                        At VisaMint Overseas Services, a team of extensively skilled faculty members specializes in training students for TOEFL iBT.
                        Throughout your training program, you will benefit from comprehensive classes and an array of educational resources thoughtfully
                        curated to enhance your learning experience.
                    </Text>
                    <Text ta="justify" size={16}>
                        TOFEL test has four sections: Reading, Listening, Speaking, and Writing. During the test, you'll perform tasks that combine these 4 English communication skills, such as:
                    </Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        listStyleType='disc'
                        withPadding
                    >
                        <List.Item>
                            <Text size={16}>read, listen and then speak in response to a question</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>listen and then speak in response to a question</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>read, listen and then write in response to a question</Text>
                        </List.Item>
                    </List>
                    <Group>
                        <Button size='lg' variant='gradient'>Apply Now <IconArrowNarrowRight size={30} /></Button>
                    </Group>
                </Stack>
            </div>
        </>
    )
}

export default Tofeltrainingwrapper