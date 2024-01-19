import React, { useState } from 'react'
import imagetwo from '../../assets/visabackground.png'
import { Button, Grid, Group, Loader, LoadingOverlay, Modal, Stack, Text } from '@mantine/core'
import { Getintouchformone } from '../Getintouchform'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useViewportSize } from '@mantine/hooks'
function Banner() {
  const { width } = useViewportSize()
  const [formModal, setFormModal] = useState(false)

  const openFormModal = () => {
    setFormModal(true)
  }

  const closeFormModal = () => {
    setFormModal(false)
  }

  let textsize;
  let textsizeone;
  let btnsize;

  if (width < 376) {
    textsize = 15
    textsizeone = 8
    btnsize = "xs"
  } else if (width < 435) {
    textsize = 17
    textsizeone = 10
    btnsize = "xs"
  } else if (width < 530) {
    textsize = 20
    textsizeone = 12
    btnsize = "xs"
  } else if (width < 650) {
    textsize = 20
    textsizeone = 15
    btnsize = "sm"
  } else if (width < 768) {
    textsize = 20
    textsizeone = 18
    btnsize = "md"
  } else {
    textsize = 20
    textsizeone = 16
    btnsize = "sm"
  }

  const [loadingEffect, setLoadingEffect] = useState(true)
  const handleIframeLoad = () => {
    setLoadingEffect(false)
  }

  return (
    <section className='py-1'>
      <div className='container banner-carousel'>
        <Carousel
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div style={{ position: 'relative' }} >
            <img src={imagetwo} alt="Image 1" />
            <div className='banner-background'>
              <div className='container '>
                {
                  (width < 1400) && (width !== 0) ?
                    <div className='displaypropertyone' >
                      <Stack align='center' spacing="xs" style={{ marginTop: "inherit", background: "rgba(64, 63, 63, 0.31)", padding: '5px' }}>
                        <Text color='white' size={textsize} weight={700} ta="center">WORK IN CANADA  APPLY NOW</Text>
                        <Text color='white' size={textsizeone} ta="center" weight={500} fs="italic">Your Path to Success: Find Work, Build a Future in Canada.</Text>
                        <Group position='apart' >
                          <Button variant='filled' style={{ background: "red" }} size={btnsize} radius="sm" mt={`${width > 1350 ? 20 : 0}`} onClick={openFormModal}><Text weight={600}>Book a Consultation</Text></Button>
                          <Button variant='default' size={btnsize} radius="sm" component='a' href='/allproducts'>Read Story</Button>
                        </Group>
                      </Stack>
                    </div>
                    :
                    <div style={{ position: "absolute", top: '6%', left: "15%" }}>
                      <Grid >
                        <Grid.Col sm={4} md={4.5} lg={4.5} mt={70}>
                          <Stack align='center' spacing="xs" style={{ marginTop: "inherit", background: "rgba(64, 63, 63, 0.31)", padding: '5px' }}>
                            <Text color='white' size={textsize} weight={600} ta="center">WORK IN CANADA APPLY NOW</Text>
                            <Text color='white' size={textsizeone} ta="center" weight={500} fs="italic">Your Path to Success: Find Work, Build a Future in Canada</Text>
                            <Group position='apart' >
                              <Button variant='filled' style={{ background: "#f00c" }} size={btnsize} radius="sm" mt={`${width > 1350 ? 20 : 0}`} onClick={openFormModal}><Text weight={600}>Book a Consultation</Text></Button>
                              <Button variant='default' size={btnsize} radius="sm" component='a' href='/allproducts'>All Products</Button>
                            </Group>
                          </Stack>
                        </Grid.Col>
                        <Grid.Col sm={1} md={1}>

                        </Grid.Col>
                        <Grid.Col sm={3} md={4} lg={4}>
                          <Getintouchformone />
                          {/* <div style={{ position: "relative" }}>
                            <iframe src="https://www.kit19.com/UserCRMCampaign/webFormDetails.aspx?ParentID=44289&cName=website"
                              style={{ border: "none", background: "white", overflow: "hidden", width: '430px', height: "472px" }}
                              title="enquirey form"
                              onLoad={handleIframeLoad}
                            >
                            </iframe>
                            <LoadingOverlay
                              visible={loadingEffect}
                              loader={
                                <Stack align='center'>
                                  <Loader />
                                  <Text weight={700}>Loading form please wait....</Text>
                                </Stack>
                              }
                            />
                          </div> */}
                        </Grid.Col>
                      </Grid>
                    </div>
                }
              </div>
            </div>
          </div>
        </Carousel >
        <Modal
          opened={formModal}
          onClose={closeFormModal}
          zIndex={99999}
          withCloseButton={false}
        >
          {/* <Getintouchformone /> */}
          <div style={{ position: "relative" }}>
            <iframe src="https://www.kit19.com/UserCRMCampaign/webFormDetails.aspx?ParentID=44289&cName=website"
              style={{ border: "none", background: "white", overflow: "hidden", width: '450px', height: "472px" }}
              title="enquirey form"
              onLoad={handleIframeLoad}
            >
            </iframe>
            <LoadingOverlay
              visible={loadingEffect}
              loader={
                <Stack align='center'>
                  <Loader />
                  <Text weight={700}>Loading form please wait....</Text>
                </Stack>
              }
            />
          </div>
        </Modal>
      </div >
    </section>
  )
}

export default Banner 