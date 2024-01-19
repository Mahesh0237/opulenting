import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import jobopening from '../../../assets/jobopeningcanada.jpg'
function Jobopeningincanadawrapper() {
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
                <Text size={30} weight={600} color='white' ta="center">Job Openings</Text>
                <Text color='white' ta="center">Home / <Link to="#"> Canada Jobs</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Job Openings in Canada Increase to 581,600 as Quebec Reports 70% Growth</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Grid>
                                <Grid.Col md={6}>
                                    <Image src={jobopening} alt='image' />
                                </Grid.Col>
                                <Grid.Col md={6}>
                                    <Stack>
                                        <Text size={16} ta="justify">
                                            Job openings in Canada increased sharply to 581,600 in the 2nd quarter of 2019, up 6.4% in the corresponding period of the previous year, new figures reveal. Quebec estimated for approximately 70% of the Canada-wide increase of 34,800 openings, as per the Statistics Canada.
                                        </Text>
                                        <Text size={16} ta="justify">It indicates the number of Canadian job openings has now increased in each of the previous 11 quarters, in most instances outpacing the increase in employment.</Text>

                                    </Stack>
                                </Grid.Col>
                            </Grid>
                            <Text size={16} ta="justify">Canada-wide job openings were up by higher than 75,000 in the prior quarter, with the number of job openings over 500,000 in each of the latest six quarters. Openings were also higher in six out of ten significant industrial areas.</Text>
                            <Text size={16} ta="justify">The rise in job openings in the first and second parts of the year is a pattern recognized every year since 2015, likely reflecting seasonal patterns of recruitment.</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={20} color='#0042aa' weight={600}>Job Openings in Quebec:</Text>
                            <Text size={16} ta="justify">Quebec province was at the lead, with 24,100 of the Canada-wide 34,800 boost coming in the province of French-speaking.</Text>
                            <Text size={16} ta="justify">It means job openings have grown higher than 20% in Quebec since the corresponding time in the previous year, with the growth widespread over industries and economic regions.</Text>
                            <Text size={16}>Over the corresponding period, unemployment in Quebec has dropped from 5.3% to 4.9%.</Text>
                            <Text size={20} color='#0042aa' weight={600}>Job Openings in Ontario & Other Provinces:</Text>
                            <Text size={16}>Ontario noticed the second biggest job vacancy increase, at 7,400, or 3.6% related to the corresponding period of 2018, driven by the wholesale trade industry.</Text>
                            <Text size={16} ta="justify">Other Canadian provinces and territories to observe increases were Newfoundland & Labrador, Nova Scotia, Yukon, and Nunavut.</Text>
                            <Text size={16} ta="justify">Looking at job openings by industry, an increase in the second quarter of 2019 was directed by services in accommodation and food; scientific, professional, and tech services; and health care and social support.</Text>
                            <Text size={16} ta="justify">Among the smaller areas, the number of openings progressed in forestry, agriculture, fishing, and hunting, touching the most important level for this sector since relative data became accessible in 2015.</Text>
                            <Text size={16} ta="justify">Stay Updated with our newsletters to get the recent updates and information on immigration and visas. We are pleased to announce that we have served more than a Lakh of happy customers. We request you to fill up the free assessment form presented by Opulentus to take the initial step for your Visa and Immigration Process.</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Jobopeningincanadawrapper