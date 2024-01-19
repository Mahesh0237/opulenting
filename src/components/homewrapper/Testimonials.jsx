import { Carousel } from '@mantine/carousel'
import { Card, Group, Image, Rating, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'
import tesimonialone from '../../assets/testimonial-1.jpg'
import testimonialtwo from '../../assets/testimonial-2.jpg'
import testimonialthree from '../../assets/testimonial-3.jpg'
import { useViewportSize } from '@mantine/hooks'
function Testimonials() {
  const { width } = useViewportSize()
  let slidesize;
  let slideheight;
  if (width < 480) {
    slidesize = "100%"
    slideheight = 180
  } else if (width < 768) {
    slidesize = "50%"
    slideheight = 250
  } else if (width > 768) {
    slidesize = "33.333333%"
    slideheight = 180
  }

  return (
    <section style={{ background: "rgb(220 233 244 / 45%)" }}>
      <div className='container py-5'>
        <Stack align='center' mb={25}>
          <div className="text-center">
            <h2 className="mb-1 ">Testimonials</h2>
            <p className="mb-0">What Client's Says About Us</p>
          </div>
        </Stack>
        <Carousel
          mx="auto"
          height={slideheight}
          slideSize={slidesize}
          slideGap="md"
          align="start"
          loop
          withControls={false}
        >
          <Carousel.Slide>
            <Card withBorder>
              <Stack>
                <Text size={15} ta="justify">I have always been provided with the right support and guidance by the Opulentus staffs, epeically the case officer.And finally I could...</Text>
                <Group>
                  <Image src={tesimonialone} width={40} radius="50%" />
                  <div style={{ textAlign: "center" }}>
                    <Text size={16} weight={600} color='green' >Aravindh</Text>
                    <Rating value={5} fractions={2} readOnly size='xs' />
                  </div>
                </Group>
              </Stack>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card withBorder>
              <Stack>
                <Text size={15} ta="justify">The team at Opulentus has been very helpful at every step of the way. They had given the right advice and guidance and I would like to make a special ...</Text>
                <Group>
                  <Image src={testimonialtwo} width={40} radius="50%" />
                  <div style={{ textAlign: "center" }}>
                    <Text size={18} weight={600} color='green' >Vasanthi</Text>
                    <Rating value={3.5} fractions={2} readOnly size='xs' />
                  </div>
                </Group>
              </Stack>
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card withBorder>
              <Stack>
                <Text size={15} ta="justify">I am very glad to choose Opulentus. Thanks to whole team and specially thanks to my case officer for guiding me through out process. I really apprecia...</Text>
                <Group>
                  <Image src={testimonialthree} width={40} radius="50%" />
                  <div style={{ textAlign: "center" }}>
                    <Text size={18} weight={600} color='green' >Krishna Kumar</Text>
                    <Rating value={4} fractions={2} readOnly size='xs' />
                  </div>
                </Group>
              </Stack>
            </Card>

          </Carousel.Slide>
          <Carousel.Slide>
            <Card withBorder>
              <Stack>
                <Text size={15} ta="justify">Your support is the only reason for getting my visa.. you have a very systematic approach, very focused and very experienced way of managing this process.</Text>
                <Group>
                  <Image src={testimonialtwo} width={40} radius="50%" />
                  <div style={{ textAlign: "center" }}>
                    <Text size={18} weight={600} color='green' >Saad Rehman</Text>
                    <Rating value={5} fractions={2} readOnly size='xs' />
                  </div>
                </Group>
              </Stack>
            </Card>
          </Carousel.Slide>
        </Carousel>
      </div>
    </section>
  )
}
export default Testimonials