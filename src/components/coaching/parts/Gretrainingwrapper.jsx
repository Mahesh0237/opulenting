import React from 'react'
import { BackgroundImage, Button, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import coachingdetail from '../../../assets/TOFELtraining.avif'
import { IconArrowNarrowRight, IconCheck, IconPinFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
function Gretrainingwrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">GRE Training Overview</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Stack>
                    {/* <Image src={coachingdetail} height={300} alt="coaching" /> */}
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>GRE Training Overview</Text>
                    <Text size={17}>GRE English proficiency is the doorway to various incredible opportunities for the students:</Text>
                    <Text ta="justify" size={16}>
                        The Graduate Record Examination (GRE) stands as a widely recognized standardized test
                        conducted with the primary objective of securing admission to various programs offered by
                        diverse foreign universities. The core purpose of the GRE exam is to gauge the verbal, quantitative,
                        and analytical proficiencies of students and ascertain their eligibility to apply for a range of courses.
                        For many students aspiring for Master's degrees (excluding fields like Business, Law, and Medicine) as well as PhD programs,
                        the GRE is a mandatory requirement in several universities across the United States.
                    </Text>
                    <Text size={18} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>How To Do Test Preparation</Text>
                    <Text size={16}>With dedicated focus and concentrated effort, conquering each section of the exam is an achievable goal within a few days.
                        Our assessments are tailored to evaluate your everyday English language communication abilities.
                        Online videos and tutorials from our resources are readily available to aid your preparation,
                        alongside practice papers that enhance your readiness.
                    </Text>
                    <Text size={16}>Each section holds its distinct importance in bolstering language fluency, necessitating individualized preparation.
                        Discover valuable tips and strategies to refine your skills in each category.
                        Additionally, we offer flexible coaching options, including both group and individual sessions,
                        allowing you to choose the approach that suits your preferences.
                    </Text>
                    <Group>
                        <Button size='lg' variant='gradient'>Apply Now <IconArrowNarrowRight size={30} /></Button>
                    </Group>
                </Stack>
            </div>
        </>
    )
}

export default Gretrainingwrapper