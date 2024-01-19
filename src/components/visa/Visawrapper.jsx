import { BackgroundImage, Center, Grid, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../assets/breadcrumb-1.jpg'
import visa1 from '../../assets/studentvisa.avif'
import visa2 from '../../assets/businessvisa.avif'
import visa3 from '../../assets/touristvisa.avif'
import visa4 from '../../assets/dependentvisa.avif'
import Visacard from '../shared/Visacard'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Visawrapper() {
    const { width } = useViewportSize()
    let textSize;
    let textSize2;
    if (width < 377) {
        textSize = 18
        textSize2 = 15
    } else if (width < 410) {
        textSize = 20
        textSize2 = 16
    } else if (width < 567) {
        textSize = 22
    } else if (width < 769) {
        textSize = 25
    } else {
        textSize = 30
    }
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
                <Text size={textSize} weight={600} color='white' ta="center">Visa</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link>Visa</Link></Text>
            </Stack>
            <div className='container'>
                <Grid py={50}>
                    <Grid.Col xs={6} sm={6} md={4} lg={3}>
                        <Visacard
                            image={visa1}
                            desc="Student visa, which allows its holder to study at an institution of higher learning in the issuing country."
                            typeofvisa="Student Visa"
                            link={'/student_visa'}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={4} lg={3}>
                        <Visacard
                            image={visa2}
                            desc="The Business Immigration Program is designed to draw seasoned business professionals to the target countries."
                            typeofvisa="Business Visa"
                            link={'/business_visa'}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={4} lg={3}>
                        <Visacard
                            image={visa4}
                            desc="Tourism, vacation (holiday), visit with friends or relatives, medical treatment, participation in social events hosted "
                            typeofvisa="Tourist Visa"
                            link={'/tourist-visa'}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={4} lg={3}>
                        <Visacard
                            image={visa3}
                            desc="A dependent visa, known by various names officially, grants the dependents of a lawful resident..."
                            typeofvisa="Dependent Visa"
                            link={'/dependent_visa'}
                        />
                    </Grid.Col>
                </Grid>
            </div>
        </>
    )
}

export default Visawrapper