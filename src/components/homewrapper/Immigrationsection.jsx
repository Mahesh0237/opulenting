import { Button, Group, Tabs, Text } from '@mantine/core'
import React, { useState } from 'react'
import canadaflag from '../../assets/canada-flag.png'
import australia from '../../assets/australia.svg'
import usa from '../../assets/united-states-of-america.svg'
import southafrica from '../../assets/southafricaflag.jpg'
import hongkongflag from '../../assets/hongkongflag.jpg'
import germany from '../../assets/germany.svg'
import austria from '../../assets/austria.png'
import Canadatab from './tabs/Canadatab'
import Australiatab from './tabs/Australiatab'
import Germanytab from './tabs/Germanytab'
import Usatab from './tabs/Usatab'
import Austriatab from './tabs/Austriatab'
import Southafricatab from './tabs/Southafricatab'
import Hongkongtab from './tabs/Hongkongtab'
import { useViewportSize } from '@mantine/hooks'

function Immigrationsection() {
    const { width } = useViewportSize()
    const [activeTab, setActiveTab] = useState('Canada')
    const upadatetab = (value) => {
        setActiveTab(value)
    }

    let slidesize;
    if (width <= 425) {
        slidesize = "45%"
    } else if (width <= 768) {
        slidesize = "30%"
    } else if (width <= 1023) {
        slidesize = "28%"
    } else if (width >= 1024) {
        slidesize = "25%"
    }

    return (
        <section className="pb-4 pb-lg-4 pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 ">
                        <div className="text-center mb-5">
                            <h2 className="mb-1">Immigration - Choose your country!</h2>
                            <p className="mb-0">Best Destinations preferred by Indians!</p>
                        </div>
                    </div>
                </div>
                <Tabs value={activeTab} onTabChange={upadatetab} variant="default" orientation='horizantal' color='teal'>
                    <Group position='apart'>
                        <Tabs.List>
                            <Tabs.Tab value="Canada" icon={<img src={canadaflag} alt="Canada" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Canada</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="Australia" icon={<img src={australia} alt="australia" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Australia</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="Germany" icon={<img src={germany} alt="germany" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Germany</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="USA" icon={<img src={usa} alt="usa" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Usa</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="Austria" icon={<img src={austria} alt="Austria" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Austria</Text>
                            </Tabs.Tab>

                            <Tabs.Tab value="South Africa" icon={<img src={southafrica} alt="South Africa" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >South Africa</Text>
                            </Tabs.Tab>
                            <Tabs.Tab value="Hong Kong" icon={<img src={hongkongflag} alt="Hong Kong" width="15" className="me-1" />}>
                                <Text size={14} weight={600} >Hong Kong</Text>
                            </Tabs.Tab>
                            {/* <Carousel slideGap="md" slideSize={slidesize} height="100%" initialSlide={2} controlSize={30} className="section-box-carousel w-100">
                            <Carousel.Slide>
                                <Tabs.Tab value="Australia" icon={<img src={australia} alt="australia" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }} >
                                    Australia
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="Canada" icon={<img src={canadaflag} alt="Canada" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    Canada
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="Germany" icon={<img src={germany} alt="germany" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    Germany
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="USA" icon={<img src={usa} alt="usa" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    USA
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="Austria" icon={<img src={austria} alt="Austria" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    Austria
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="South Africa" icon={<img src={southafrica} alt="South Africa" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    South Africa
                                </Tabs.Tab>
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <Tabs.Tab value="Hong Kong" icon={<img src={hongkongflag} alt="Hong Kong" width="15" className="me-1" />} style={{ border: "1px solid #B4C0E0" }}>
                                    Hong Kong
                                </Tabs.Tab>
                            </Carousel.Slide>
                        </Carousel> */}
                        </Tabs.List>
                        <Button size='sm' radius={5} variant='default' component='a' href='/allproducts'>view all</Button>
                    </Group>
                    <Tabs.Panel value="Australia" pt="xs">
                        <Australiatab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="Canada" pt="xs">
                        <Canadatab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="Germany" pt="xs">
                        <Germanytab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="USA" pt="xs">
                        <Usatab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="Austria" pt="xs">
                        <Austriatab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="South Africa" pt="xs">
                        <Southafricatab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                    <Tabs.Panel value="Hong Kong" pt="xs">
                        <Hongkongtab
                            activeTab={activeTab}
                        />
                    </Tabs.Panel>
                </Tabs>
            </div>
        </section>
    )
}

export default Immigrationsection