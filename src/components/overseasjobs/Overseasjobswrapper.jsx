import { BackgroundImage, Card, Center, Container, List, Stack, Tabs, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import React from 'react'
import { Carousel } from '@mantine/carousel';
import Reactdeveloperdesc from './parts/Reactdeveloperdesc';
import Angulardeveloperjobdes from './parts/Angulardeveloperjobdes';
import Dotnetdeveloperjobdesc from './parts/Dotnetdeveloperjobdesc';
import Phpdeveloperjobdesc from './parts/Phpdeveloperjobdesc';
import breadcrumb1 from '../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Overseasjobswrapper() {
    const { width } = useViewportSize();
    let orientationsize;
    let slidesize;
    if (width <= 1026) {
        orientationsize = "horizantal"
    } else if (width >= 1026) {
        orientationsize = "vertical"
    }

    if (width <= 425) {
        slidesize = "45%"
    } else if (width <= 768) {
        slidesize = "30%"
    } else if (width <= 1023) {
        slidesize = "28%"
    } else if (width >= 1024) {
        slidesize = "25%"
    }

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
                <Text size={textSize} weight={600} color='white' ta="center">OVERSEAS JOBS</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#"> Jobs Abroad</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Text size={30} weight={600} ta="center" color='#f00'>Jobs Abroad# – Active Job Openings</Text>
                <Text size={16} ta="justify" py={10}>Since 1997, Opulentus has been dedicated to assisting professionals in finding opportunities to work abroad.
                    With a significant global demand for skilled individuals, we have accumulated expertise and insight into worldwide economic trends.
                    Our goal is to guide our clients in making informed decisions regarding international employment, ensuring
                    that they choose the most suitable path for their career journey.</Text>
                <Tabs variant="pills" color="teal" orientation={orientationsize} defaultValue="reactdeveloper" mt={30}>
                    <Tabs.List mb={20}>
                        <div className='section-box-tabs'>
                            <Tabs.Tab value="reactdeveloper" w="100%">React Developer</Tabs.Tab>
                            <Tabs.Tab value="angulardeveloper" w="100%">Angular Developer</Tabs.Tab>
                            <Tabs.Tab value=".netdeveloper" w="100%">.Net Developer</Tabs.Tab>
                            <Tabs.Tab value="phpdeveloper" w="100%">Php Developer</Tabs.Tab>
                        </div>
                        <Carousel slideGap="md" slideSize={slidesize} height="100%" initialSlide={2} controlSize={30} className="section-box-carousel w-100">
                            <Carousel.Slide>
                                <Tabs.Tab value="reactdeveloper" style={{ border: "1px solid #B4C0E0" }} >React Developer</Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="angulardeveloper" style={{ border: "1px solid #B4C0E0" }}>Angular Developer</Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value=".netdeveloper" style={{ border: "1px solid #B4C0E0" }}>.Net Developer</Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="phpdeveloper" style={{ border: "1px solid #B4C0E0" }} >Php Developer</Tabs.Tab>
                            </Carousel.Slide>
                        </Carousel>
                    </Tabs.List>
                    <Tabs.Panel value="reactdeveloper" pl="xs">
                        <Reactdeveloperdesc />
                    </Tabs.Panel>
                    <Tabs.Panel value="angulardeveloper" pl="xs">
                        <Angulardeveloperjobdes />
                    </Tabs.Panel>
                    <Tabs.Panel value=".netdeveloper" pl="xs">
                        <Dotnetdeveloperjobdesc />
                    </Tabs.Panel>
                    <Tabs.Panel value="phpdeveloper" pl="xs">
                        <Phpdeveloperjobdesc />
                    </Tabs.Panel>
                </Tabs>
                <Stack pt={30}>
                    <Text size={16} ta="justify" >The global employment landscape has undergone significant changes, with multinational companies actively seeking and hiring talent from around the world.
                        Likewise, professionals are increasingly willing to relocate to foreign countries in pursuit of better compensation and improved quality of life.</Text>
                    <Text size={16} ta="justify" >Prominent organizations recognize the shortage of highly skilled workers within their borders and are eager to recruit international professionals to address critical skill gaps that are vital for the growth and sustainability of their operations.</Text>
                    <Text size={16} ta="justify" >These trends have fueled the expansion of international employment opportunities and the availability of jobs abroad for professionals from diverse backgrounds.</Text>
                    <Text size={16} ta="justify" >Undoubtedly, making the decision to work abroad can profoundly impact various aspects of your life. Not only can it enhance your overall well-being, but it can also broaden your perspectives. Working in a foreign country offers a range of advantages, including:</Text>
                    <List
                        listStyleType='disc'
                        spacing="xs"
                        withPadding
                    >
                        <List.Item>
                            <Text size={16}>Gaining valuable global work experience.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Access to better job prospects, higher income, and additional perks.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Learning about the cultural practices of other nations.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Improving language proficiency in a foreign language.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Understanding the nuances of another country's work environment.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Networking and building connections by meeting new individuals.</Text>
                        </List.Item>
                    </List>
                    <Text size={18} color='rgb(0, 66, 170)' weight={600}>Key Steps for Finding a Job in a New Country:</Text>
                    <List
                        spacing="xs"
                        withPadding
                        listStyleType='number'
                    >
                        <List.Item>
                            <Text size={16}>Verify if your qualifications meet the requirements for working in your desired countries.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Determine if your profile matches the demand for jobs in those countries.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>If needed, apply for a work permit.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Conduct a job search tailored to your preferences.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Utilize professional networking platforms like LinkedIn to apply for positions.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Research the companies you're interested in.</Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>Reach out to friends and relatives in the target country for guidance and connections.</Text>
                        </List.Item>
                    </List>
                </Stack>
            </div>
        </>
    )
}

export default Overseasjobswrapper