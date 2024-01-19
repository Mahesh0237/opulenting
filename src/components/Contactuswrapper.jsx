import { BackgroundImage, Card, Center, Grid, Stack, Tabs, Text } from '@mantine/core'
import React from 'react'
import india from '../assets/india.svg'
import canadaflag from '../assets/canada-flag.png'
import irelandflag from '../assets/irelandflag.png'
import uaeflag from '../assets/uaeflag.png'
import usa from '../assets/united-states-of-america.svg'
import breadcrumb1 from '../assets/breadcrumb-1.jpg'
import Contactuscard from './shared/Contactuscard'
function Contactuswrapper() {

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
                <Text size={25} weight={600} color='white' ta="center">CONTACT US</Text>
                <Text className='policy'></Text>
            </Stack>
            <div className='container py-5'>
                <Stack>
                    <Text size={20} weight={600} ta="center" style={{ color: "#ee0000" }}>
                        OUR OFFICE NETWORK
                    </Text>
                    <Text ta="justify" size={15} >
                        We value your feedback, inquiries, and suggestions. Our team at Opulentus is always ready to assist you. Whether you have a question about our products, need support with your order, or simply want to share your experience, we're here to help. Reach out to us through our contact form below, and we'll respond promptly. We believe in open communication and building strong relationships with our customers, so don't hesitate to get in touch with us. We look forward to hearing from you!
                    </Text>
                </Stack>
                <Tabs defaultValue="india" variant="default" mt={20} color='teal'>
                    <Card withBorder>
                        <Card.Section withBorder inheritPadding py={10}>
                            <Tabs.List>
                                <Tabs.Tab value="india" icon={<img src={india} alt="india" width="15" />}>
                                    <Text size={16} weight={600}>India</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="USA" icon={<img src={usa} alt="usa" width="15" />}>
                                    <Text size={16} weight={600}>USA</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="canada" icon={<img src={canadaflag} alt="canada" width="15" />}>
                                    <Text size={16} weight={600}>Canada</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="uae" icon={<img src={uaeflag} alt="UAE" width="15" />}>
                                    <Text size={16} weight={600}>UAE</Text>
                                </Tabs.Tab>
                                <Tabs.Tab value="ireland" icon={<img src={irelandflag} alt="ireland" width="15" />}>
                                    <Text size={16} weight={600}>Ireland</Text>
                                </Tabs.Tab>
                            </Tabs.List>
                        </Card.Section>
                        <Card.Section withBorder inheritPadding py={15}>
                            <Tabs.Panel value="india" pt="xs">
                                <Grid>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Hydearabd, Jubliee Hills"
                                            address="Apurupa Towers , 1st Floor, 8-2-293/82/A, Plot No: 467, Road No: 36, Jubilee Hills, Hyderabad, Telangana - 500 034,"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.621674001491!2d78.40785071487691!3d17.429934488053142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf6906ca4d670c045!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576648332845!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Hydearabd, Jubliee Hills Square"
                                            address="Jubilee Square, 2nd Floor, Plot No 1128, Road No 36, Jubilee Hills, below the metro station, Hyderabad, Telangana - 500033"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.610126525674!2d78.4059796148769!3d17.43048808805279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce44494e664943ea!2sOpulentus!5e0!3m2!1sen!2sin!4v1530703674269"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Hydearabd, Gachibowli"
                                            address="Suite 2# 908, 9th Floor , Kadaris Apurupa Urban II, Botanical Garden Road, Near CHIREC International School, Hyderabad- 500084."
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.9339055145065!2d78.34757451487741!3d17.46287728803344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd44a1fa7469aaa53!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576904865472!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Visakhapatnam"
                                            address="10-1-21/A/2/1, 3rd Floor, Vinayagar Krishna, Opp. GVMC OUT Gate, Beside RTC complex, Vizag, Andhra Pradesh - 530002"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3764031270625!2d83.30220231432803!3d17.726895097591584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433ca8004813%3A0xa174638e902fb6!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576495204518!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Bengaluru, Karnataka"
                                            address="401, 4th Floor, Altair Apartments Rd to Reliaable Acacia Apartments, Green Glen Layout, Bellandur, Bengaluru, Karnataka-560103"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973783630042!2d77.61016791482203!3d12.973528590854622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6707b2e767051b9!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1577775553639!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Chennai, Nungambakkam"
                                            address="2C & 2D, 2th Floor Gee Gee Emerald, 312 Valluvarkottam High Road, Nungambakkam, Chennai, Tamil Nadu - 600034"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5319541107046!2d80.24087131427484!3d13.06543721634869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526665f52554db%3A0x916edbeccd3b3d0b!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576494810913!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Mumbai, Andheri"
                                            address="315, Crystal Point Mall, Above Star Bazaar, New Link Road, Andheri West, Mumbai, Maharastra - 400053"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2624530564194!2d72.82985021490215!3d19.139985587051264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9481d1ef1ced5b59!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576647000858!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Pune, Bund Garden"
                                            address="1st Floor - 143 & 144, Connaught Place, Bund Garden Road, Pune, Maharashtra - 411 001,"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8612055485455!2d73.87811531489301!3d18.535173187400456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48130626dc74e756!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576647031480!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Kolkata, Park Street"
                                            address="Room No 11, 10th Floor,33 A,Jawaharlal Nehru Rd, Chatterjee International Center, Park Street Area, Kolkata, West Bengal - 700071"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.275422220442!2d88.43097631495954!3d22.568799985184736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c15e9bf51d8b350!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576904792300!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Utter Pradesh, Noida"
                                            address="Unit No-1711, World Trade Tower, Plot No-C- 1, Sector -16, Noida, Uttar Pradesh - 201301,"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.936029603661!2d77.3224040145308!3d28.571683593584325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53e419a772d%3A0xfa09665bf44c6add!2sOpulentus%20-%20Noida%20Branch%2C%20Immigration%20and%20Visa%20Consultant!5e0!3m2!1sen!2sin!4v1576494375932!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                    <Grid.Col xs={12} sm={4} md={3} lg={3}>
                                        <Contactuscard
                                            place="Delhi, Connaught Place"
                                            address="Unit No-702 & 703, 7th Floor, Narain Manzil, Barahkhamba Road, Connaught Place, New Delhi, Delhi - 110001,"
                                            phonenum="+91-6309888481"
                                            email="hr@opulenting.com"
                                            maplocation="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.64341960832!2d77.24817521508072!3d28.55043578245035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6dbe9668383fa7d!2sOpulentus%20-%20The%20Visa%20Company!5e0!3m2!1sen!2sin!4v1576646742851!5m2!1sen!2sin"
                                        />
                                    </Grid.Col>
                                </Grid>
                            </Tabs.Panel>
                            <Tabs.Panel value="USA" pt="xs">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-4">
                                            <Contactuscard
                                                place="USA"
                                                address="New Jersey 33, Wood Avenue South, Iselin, NJ - 08830, New Jersey, "
                                                phonenum="+1-647-694-1537"
                                                email="hr@opulenting.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel value="canada" pt="xs">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-4">
                                            <Contactuscard
                                                place="CANADA"
                                                address="Unit 208, 8291, 92 street Delta BC V4G0A4, CANADA"
                                                phonenum="+1-647-694-1537"
                                                email="hr@opulenting.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel value="uae" pt="xs">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-4">
                                            <Contactuscard
                                                place="UAE"
                                                address="Dubai 3706, 37th Floor, Jumerirah Bay X2 Tower, Cluster X, Jumerirah Lake Tower, DMCC, Post Box -12596"
                                                phonenum="+1-647-694-1537"
                                                email="hr@opulenting.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Panel>
                            <Tabs.Panel value="ireland" pt="xs">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-4">
                                            <Contactuscard
                                                place="IRELAND"
                                                address="Limerick 98, The Forts, Dooradoyle, Limerick"
                                                phonenum="353-766060032"
                                                email="hr@opulenting.com"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Tabs.Panel>
                        </Card.Section>
                    </Card>
                </Tabs>
            </div >
        </>
    )
}

export default Contactuswrapper