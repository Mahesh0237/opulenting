import { Button, Card, Grid, Modal, Spoiler, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'
import visa1 from '../../../assets/passport1.jpg'
import visa2 from '../../../assets/australiaprdtone.jpg'
import Productcard from '../../homewrapper/tabs/Productcard'
import visa3 from '../../../assets/germanyproducttwo.jpg'
import visa4 from '../../../assets/germanyproductthree.webp'
import visa5 from '../../../assets/swedenproductone.avif'
import visa6 from '../../../assets/usaone.jpg'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useViewportSize } from '@mantine/hooks'

function Aboutwrapper({ employeedata }) {
    const { width } = useViewportSize()
    return (
        <>
            <Card.Section inheritPadding py={10} withBorder>
                <Text size={18} weight={700} color='#12b886'>About Me:</Text>
                <Stack>
                    <Spoiler maxHeight={20} showLabel="Show more" hideLabel="Hide" transitionDuration={600}>
                        <Text size={15}>{employeedata}</Text>
                    </Spoiler>
                </Stack>
            </Card.Section>
            <Card.Section inheritPadding py={10} >
                <Text size={18} weight={700} color='#12b886' mb={20}>Top Products:</Text>
                {
                    width < 576 ?
                        <Carousel
                            showArrows={true}
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            autoPlay
                            interval={2000}
                            infiniteLoop
                        >

                            <Productcard
                                visa={visa1}
                                typeofvisa="Canada Federal Skilled Worker"
                                desc="Skilled Workers can migrate to Canada under Federal Skilled Worker Program organized by Canadian Government. Opulentus..."
                            />
                            <Productcard
                                visa={visa2}
                                typeofvisa="Australia Skilled Regional Visa"
                                desc="Australia Skilled Regional visa is for citizens who lived for the min. 2 Yrs, worked for 1 Year in a specified regional area. Apply for..."
                            />
                            <Productcard
                                visa={visa3}
                                typeofvisa="Germany Dependent Visa"
                                desc="Germany Dependent Visa also known as the German Family Reunification Visa, allows the family members of a legal German resident..."
                            />
                            <Productcard
                                visa={visa5}
                                typeofvisa=" Sweden Dependent Visa"
                                desc="The Sweden Dependent Visa is specifically designed for the immediate family members of individuals who hold valid Swedish Citizenship or Permanent Residence Permit."
                            />
                        </Carousel>
                        :
                        <Carousel
                            showArrows={true}
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            autoPlay
                            interval={2000}
                            infiniteLoop
                        >
                            <Grid>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa1}
                                        typeofvisa="Canada Federal Skilled Worker"
                                        desc="Skilled Workers can migrate to Canada under Federal Skilled Worker Program organized by Canadian Government. Opulentus..."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa2}
                                        typeofvisa="Australia Skilled Regional Visa"
                                        desc="Australia Skilled Regional visa is for citizens who lived for the min. 2 Yrs, worked for 1 Year in a specified regional area. Apply for..."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa3}
                                        typeofvisa="Germany Dependent Visa"
                                        desc="Germany Dependent Visa also known as the German Family Reunification Visa, allows the family members of a legal German resident..."
                                    />
                                </Grid.Col>
                            </Grid>
                            <Grid>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa4}
                                        typeofvisa="Germany Skilled Job Seeker Visa"
                                        desc="Immigration to Germany under Job Seeker Visa for work and settle in Overseas. Take immigration advice at Opulentus Visa Company how to ..."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa5}
                                        typeofvisa=" Sweden Dependent Visa"
                                        desc="The Sweden Dependent Visa is specifically designed for the immediate family members of individuals who hold valid Swedish Citizenship or Permanent Residence Permit."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa6}
                                        typeofvisa="USA Student visa"
                                        desc="There are many foreign students from all over the world who would like a university degree from the United States of America. USA is one of the most popular dream destinations for many students...."
                                    />
                                </Grid.Col>
                            </Grid>
                            <Grid>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa2}
                                        typeofvisa="Australia Skilled Regional Visa"
                                        desc="Australia Skilled Regional visa is for citizens who lived for the min. 2 Yrs, worked for 1 Year in a specified regional area. Apply for..."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa1}
                                        typeofvisa="Canada Federal Skilled Worker"
                                        desc="Skilled Workers can migrate to Canada under Federal Skilled Worker Program organized by Canadian Government. Opulentus..."
                                    />
                                </Grid.Col>
                                <Grid.Col md={4} sm={6} xs={6}>
                                    <Productcard
                                        visa={visa5}
                                        typeofvisa=" Sweden Dependent Visa"
                                        desc="The Sweden Dependent Visa is specifically designed for the immediate family members of individuals who hold valid Swedish Citizenship or Permanent Residence Permit."
                                    />
                                </Grid.Col>
                            </Grid>
                        </Carousel>
                }
            </Card.Section>
        </>
    )
}

export default Aboutwrapper