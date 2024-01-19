import React from 'react'
import tesimonialone from '../../../assets/testimonial-1.jpg'
import testimonialtwo from '../../../assets/testimonial-2.jpg'
import testimonialthree from '../../../assets/testimonial-3.jpg'
import { Card, Group, Image, Rating, Stack, Text } from '@mantine/core'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Testimonialreviews() {
    return (
        <>
            <Text ta="center" weight={700} color='#12b886' size={21} mb={10}>Testimonials</Text>
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                autoPlay
                interval={2000}
                infiniteLoop
            >
                <div>
                    <Card style={{ backgroundColor: "#fffbf0" }}>
                        <Stack>
                            <Text size={15} ta="justify">Really thank entire team of opulentus. They always given right directions and proper guidance from the start of process until the visa grant. Thanks to everyone and particularly to Bala Krishna, Pooja.</Text>
                            <Group>
                                <Image src={testimonialtwo} width={35} radius="50%" />
                                <div >
                                    <Text weight={600} color='green' >Gayatri</Text>
                                    <Rating value={5} fractions={2} readOnly size={12} />
                                </div>
                            </Group>
                        </Stack>
                    </Card>
                </div>
                <div>
                    <Card style={{ backgroundColor: "#fffbf0" }}>
                        <Stack>
                            <Text size={15} ta="justify">My Case Officer was very dedicated, responsive and committed on the promises made. My sincere thanks to the entire Opulentus team who made my dream come true from the beginning of my visa processing.</Text>
                            <Group>
                                <Image src={tesimonialone} width={35} radius="50%" />
                                <div >
                                    <Text weight={600} color='green' >Uday</Text>
                                    <Rating value={4.5} fractions={2} readOnly size={12} />
                                </div>
                            </Group>
                        </Stack>
                    </Card>
                </div>
                <div>
                    <Card style={{ backgroundColor: "#fffbf0" }}>
                        <Stack>
                            <Text size={15} ta="justify">I am very glad to choose Opulentus. Thanks to whole team and specially thanks to my case officer for guiding me through out process. I really appreciate the whole team of Opulentus.</Text>
                            <Group>
                                <Image src={testimonialthree} width={35} radius="50%" />
                                <div style={{ textAlign: "center" }}>
                                    <Text weight={600} color='green' >Krishna Kumar</Text>
                                    <Rating value={4} fractions={2} readOnly size={12} />
                                </div>
                            </Group>
                        </Stack>
                    </Card>
                </div>
                <div>
                    <Card style={{ backgroundColor: "#fffbf0" }}>
                        <Stack>
                            <Text size={15} ta="justify">Your support is the only reason for getting my visa.. you have a very systematic approach, very focused and very experienced way of managing this process.</Text>
                            <Group>
                                <Image src={testimonialtwo} width={35} radius="50%" />
                                <div style={{ textAlign: "center" }}>
                                    <Text weight={600} color='green' >Saad Rehman</Text>
                                    <Rating value={5} fractions={2} readOnly size={12} />
                                </div>
                            </Group>
                        </Stack>
                    </Card>
                </div>
            </Carousel>
        </>
    )
}

export default Testimonialreviews