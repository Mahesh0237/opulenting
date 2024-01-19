import { Accordion, Alert, BackgroundImage, Badge, Card, Center, Container, Grid, Image, List, Stack, Text, rem } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../assets/products.jpg'
import australia from '../../assets/australia.svg'
import canadaflag from '../../assets/canada-flag.png'
import germany from '../../assets/germany.svg'
import usa from '../../assets/united-states-of-america.svg'
import austria from '../../assets/austria.png'
import southafrica from '../../assets/southafricaflag.jpg'
import hongkongflag from '../../assets/hongkongflag.jpg'
import norwayflag from '../../assets/norwayflag.png'
import singapore from '../../assets/singapore.svg'
import franceflag from '../../assets/franceflag.png'
import irelandflag from '../../assets/irelandflag.png'
import belgiumflag from '../../assets/belgiumflag.png'
import denmarkflag from '../../assets/denmarkflag.png'
import netherlandsflag from '../../assets/netherlandsflag.png'
import switzerlandflag from '../../assets/switzerlandflag.png'
import swedenflag from '../../assets/swedenflag.png'
import italyflag from '../../assets/italyflag.png'
import bulgariaflag from '../../assets/bulgariaflag.png'
import polandflag from '../../assets/polandflag.png'
import finlandflag from '../../assets/finlandflag.png'
import hungaryflag from '../../assets/hungaryflag.png'
import { Link } from 'react-router-dom'
import Australiaproducts from './parts/Australiaproducts'
import Canadaproducts from './parts/Canadaproducts'
import Germanyproducts from './parts/Germanyproducts'
import Usaproducts from './parts/us/Usaproducts'
import Austriaproducts from './parts/Austriaproducts'
import Southafricaproducts from './parts/Southafricaproducts'
import Hongkongproducts from './parts/Hongkongproducts'
import Norwayproducts from './parts/Norwayproducts'
import Singaporeproducts from './parts/singapore/Singaporeproducts'
import Franceproducts from './parts/france/Franceproducts';
import Irelandproducts from './parts/ireland/Irelandproducts'
import Belgiumproducts from './parts/belgium/Belgiumproducts'
import Denmarkproducts from './parts/denmark/Denmarkproducts'
import Netherlandsproducts from './parts/netherlands/Netherlandsproducts'
import Switzerlandproducts from './parts/switzerland/Switzerlandproducts'
import Swedenproducts from './parts/sweden/Swedenproducts'
import Italyproducts from './parts/italy/Italyproducts'
import Bulgariaproduts from './parts/bulgaria/Bulgariaproduts'
import Polandproducts from './parts/poland/Polandproducts'
import Finlandproducts from './parts/finland/Finlandproducts'
import Hungaryproducts from './parts/hungary/Hungaryproducts'
import { useViewportSize } from '@mantine/hooks'

function Allproductswrapper() {
    const { width } = useViewportSize()
    let newsize;
    if (width < 500) {
        newsize = 20
    } else if (width < 717) {
        newsize = 25
    } else {
        newsize = 30
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
                <Text size={newsize} weight={600} color='white' ta="center">Visa Consultant Services</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#">All Products</Link></Text>
            </Stack>
            <Container py={50}>
                <Card withBorder >
                    <Accordion variant="contained">
                        <Accordion.Item value="australia">
                            <Accordion.Control icon={<img src={australia} alt="australia" width="20" />}>
                                <Text weight={600} size={16}>Australia</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Australiaproducts />
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="canada">
                            <Accordion.Control icon={<img src={canadaflag} alt="canada" width="20" />}>
                                <Text weight={600} size={16}>Canada</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Canadaproducts />
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="camera">
                            <Accordion.Control icon={<img src={germany} alt='germany' width="20" />}>
                                <Text weight={600} size={16}>Germany</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Germanyproducts />
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="USA">
                            <Accordion.Control icon={<img src={usa} alt='usa' width="20" />}>
                                <Text weight={600} size={16}>USA</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Usaproducts />
                            </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Austria">
                            <Accordion.Control icon={<img src={austria} alt='austria' width="20" />}>
                                <Text weight={600} size={16}>Austria</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Austriaproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="southafrica">
                            <Accordion.Control icon={<img src={southafrica} alt='southafrica' width="20" />}>
                                <Text weight={600} size={16}>South Africa</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Southafricaproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Hong Kong">
                            <Accordion.Control icon={<img src={hongkongflag} alt='hongkong' width="20" />}>
                                <Text weight={600} size={16}>Hong Kong</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Hongkongproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Norway">
                            <Accordion.Control icon={<img src={norwayflag} alt='norway' width="20" />}>
                                <Text weight={600} size={16}>Norway</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Norwayproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Singapore">
                            <Accordion.Control icon={<img src={singapore} alt='norway' width="20" />}>
                                <Text weight={600} size={16}>Singapore</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Singaporeproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="France">
                            <Accordion.Control icon={<img src={franceflag} alt='France' width="20" />}>
                                <Text weight={600} size={16}>France</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Franceproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Ireland">
                            <Accordion.Control icon={<img src={irelandflag} alt='Ireland' width="20" />}>
                                <Text weight={600} size={16}>Ireland</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Irelandproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="belgium">
                            <Accordion.Control icon={<img src={belgiumflag} alt='belgium' width="20" />}>
                                <Text weight={600} size={16}>Belgium</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Belgiumproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="denmark">
                            <Accordion.Control icon={<img src={denmarkflag} alt='denmark' width="20" />}>
                                <Text weight={600} size={16}>Denmark</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Denmarkproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="netherlands">
                            <Accordion.Control icon={<img src={netherlandsflag} alt='netherlands' width="20" />}>
                                <Text weight={600} size={16}>Netherlands</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Netherlandsproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="switzerland">
                            <Accordion.Control icon={<img src={switzerlandflag} alt='switzerland' width="20" />}>
                                <Text weight={600} size={16}>Switzerland</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Switzerlandproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="sweden">
                            <Accordion.Control icon={<img src={swedenflag} alt='sweden' width="20" />}>
                                <Text weight={600} size={16}>Sweden</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Swedenproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Italy">
                            <Accordion.Control icon={<img src={italyflag} alt='Italy' width="20" />}>
                                <Text weight={600} size={16}>Italy</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Italyproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Bulgaria">
                            <Accordion.Control icon={<img src={bulgariaflag} alt='Bulgaria' width="20" />}>
                                <Text weight={600} size={16}>Bulgaria</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Bulgariaproduts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Poland">
                            <Accordion.Control icon={<img src={polandflag} alt='Poland' width="20" />}>
                                <Text weight={600} size={16}>Poland</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Polandproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Finland">
                            <Accordion.Control icon={<img src={finlandflag} alt='Finland' width="20" />}>
                                <Text weight={600} size={16}>Finland</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Finlandproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value="Hungary">
                            <Accordion.Control icon={<img src={hungaryflag} alt='Hungary' width="20" />}>
                                <Text weight={600} size={16}>Hungary</Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Hungaryproducts />
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </Container>
        </>
    )
}

export default Allproductswrapper