import React from 'react'
import { BackgroundImage, Button, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import coachingdetail from '../../../assets/TOFELtraining.avif'
import { IconArrowNarrowRight, IconCheck, IconPinFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
function Gmattrainingdetailswrapper() {
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
        <Text color='white' ta="center">Home / <Link to="#"> GMAT Training Overview</Link></Text>
      </Stack>
      <div className='container py-5'>
            <Stack>
              <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>GMAT Training Overview</Text>
              <Text ta="justify" size={16}>
                If you're considering applying to a business school for a graduate degree in management,
                it's essential to acquaint yourself with the GMAT exam. Widely recognized, the GMAT score holds
                weight with premier business and management institutions worldwide, often playing a pivotal role in the admission process.
              </Text>
              <Text ta="justify" size={16}>
                Elevating your prospects of securing a spot in top-tier business schools is attainable through
                strong performance on the GMAT. Opulentus provides GMAT coaching that seamlessly integrates top-notch study materials,
                experienced instructors, and an interactive classroom setting, fostering a deeper grasp of concepts to enhance your test performance.
              </Text>
              <Text size={17} weight={600} style={{ color: 'rgb(0, 66, 170)' }}>What Is The GMAT Exam Like?</Text>
              <Text size={16}>The GMAT exam consists of four sections:</Text>
              <List
                spacing="xs"
                size="md"
                center
                icon={<IconCheck size="1rem" />}
              >
                <List.Item>
                  <Text size={16}>Analytical Writing Assessment</Text>
                </List.Item>
                <List.Item>
                  <Text size={16}>Integrated Reasoning</Text>
                </List.Item>
                <List.Item>
                  <Text size={16}>Quantitative Reasoning</Text>
                </List.Item>
                <List.Item>
                  <Text size={16}>Verbal Reasoning</Text>
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

export default Gmattrainingdetailswrapper