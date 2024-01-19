import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Tabs, Text, ThemeIcon } from '@mantine/core'
import { IconMessageCircle, IconPhoto, IconPinFilled, IconSettings } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../assets/opulentus-bgs.jpg'
// import breadcrumb1 from '../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import australia from '../../assets/australia.svg'
import canadaflag from '../../assets/canada-flag.png'
import hongkongflag from '../../assets/hongkongflag.jpg'
import newzland from '../../assets/newzlandflag.jpg'
import Migratetoaustralia from './parts/Migratetoaustralia'
import Migratecanada from './parts/Migratecanada'
import Migratetohongkong from './parts/Migratetohongkong'
import Migratetonewzland from './parts/Migratetonewzland'
import { useViewportSize } from '@mantine/hooks'
function Migratewrapper() {
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
            <Stack align='center' className='products-position-property'>
                <Text size={textSize} weight={600} color='white' ta="center">MIGRATE OVERSEAS</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#"> Migrate Overseas</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" color='#e30303'>MIGRATE OVERSEAS</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={18} weight={700} ta="center" color='#e30303' mt={20}>Are you looking for Overseas Immigration Services?</Text>
                            <Text size={16} ta="justify">
                                A significant portion, exceeding 35%, of the global population envisions overseas travel as a pathway to improved prospects.
                                These ambitions may be driven by the allure of financial stability through stronger economies,
                                the pursuit of advanced degrees in specialized fields, or the allure of professional challenges.
                                Overseas migration also emerges as a viable avenue for individuals seeking refuge from natural disasters,
                                conflict, or political turmoil, aspiring to find solace and opportunities in more conducive geographical regions.
                                Notably, some opt for international relocation in pursuit of superior medical care and treatment.
                            </Text>
                            <Text size={16} ta="justify">
                                Country preference for immigration is profoundly influenced by the factors previously mentioned.
                                Notably, Germany, Japan, the United States of America, the United Kingdom, China, Canada, and Australia frequently emerge as favored destinations.
                                Nonetheless, securing visas, permanent residency, or citizenship in these countries is an intricate process. Individuals with occupations in high
                                demand within the host country often gain additional points and benefit from expedited processing.
                                Each nation maintains its distinct roster of sought-after professions, catering to their specific needs and requirements.
                            </Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={18} weight={700} ta="center" color='#e30303' mt={20}>Procedures involved in Migration</Text>
                            <Text size={16} ta="justify">
                                When processing a visa, it is important to note the major requirements of the
                                immigration authorities for each countries and this usually makes visa processing different for each country.
                            </Text>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                            >
                                <List.Item>
                                    <Text size={16} >Possession of the proper documentation</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>The individual must familiarize his/herself to the type of processing involved in obtaining the visa</Text>
                                </List.Item>
                            </List>
                        </Stack>
                        <Text size={18} weight={700} ta="center" color='#e30303' mt={10}>Related Products</Text>
                        <Tabs defaultValue="Australia" color='teal' >
                            <Tabs.List>
                                <Tabs.Tab value="Australia" icon={<img src={australia} alt="australia" width="15" className="me-1" />}>
                                    <Text size={15} weight={600} >Australia</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="Canada" icon={<img src={canadaflag} alt="Canada" width="15" className="me-1" />}>
                                    <Text size={15} weight={600} >Canada</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="Hong Kong" icon={<img src={hongkongflag} alt="Hong Kong" width="15" className="me-1" />}>
                                    <Text size={15} weight={600} >Hong Kong</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="newzland" icon={<img src={newzland} alt="newzland" width="23" className="me-1" />}>
                                    <Text size={15} weight={600} >New Zealand</Text>
                                </Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="Australia" pt="xs">
                                <Migratetoaustralia />
                            </Tabs.Panel>

                            <Tabs.Panel value="Canada" pt="xs">
                                <Migratecanada />
                            </Tabs.Panel>

                            <Tabs.Panel value="Hong Kong" pt="xs">
                                <Migratetohongkong />
                            </Tabs.Panel>

                            <Tabs.Panel value="newzland" pt="xs">
                                <Migratetonewzland />
                            </Tabs.Panel>
                        </Tabs>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Migratewrapper