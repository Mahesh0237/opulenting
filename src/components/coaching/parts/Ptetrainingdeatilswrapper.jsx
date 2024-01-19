import React from 'react'
import { BackgroundImage, Button, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import coachingdetail from '../../../assets/PTEtraining.avif'
import { IconArrowNarrowRight, IconPinFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
function Ptetrainingdeatilswrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">PTE Training Overview</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Stack>
                    <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>PTE Training Overview</Text>
                    <Text ta="justify" size={16}>VisaMint Overseas Services possesses a team of exceptionally skilled English Language Faculty,
                        who will expertly navigate you through various modules of the examination. The Pearson Language Tests, which operates under
                        the umbrella of Pearson PLC Group, has been designated as the authorized examining body responsible for administering two variants
                        of the English proficiency assessment aimed at evaluating the language aptitude of individuals whose native language isn't English.
                        These assessments are known as PTE Academic and PTE Academic UKVI.
                    </Text>
                    <Text ta="justify" size={16}>
                        PTE Academic Scores garner recognition from esteemed educational institutions across the globe.
                        Additionally, the governments of New Zealand and Australia acknowledge PTE scores for immigration purposes,
                        underscoring their value. These scores serve as a testament to your eligibility for relocating to English-speaking nations.
                        PTE employs a unique scoring methodology that mirrors everyday English interactions:
                    </Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        listStyleType='disc'
                        withPadding
                    >
                        <List.Item>
                            <Text size={16}>Proficiency in speaking necessitates adept listening skills.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Writing effectively and addressing reading queries require a firm grasp of appropriate vocabulary, grammar, and coherence.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Attentive listening entails accurate spelling to safeguard against point deductions.</Text>
                        </List.Item>
                    </List>
                    <Text size={16} ta="justify">
                        Therefore, enrolling in PTE training stands to benefit you in achieving a commendable score.
                        Our dedicated faculty is committed to ensuring a score that paves the way for your aspirations to materialize.
                    </Text>
                    <Group>
                        <Button size='lg' variant='gradient'>Apply Now <IconArrowNarrowRight size={30} /></Button>
                    </Group>
                </Stack>
            </div>
        </>
    )
}

export default Ptetrainingdeatilswrapper