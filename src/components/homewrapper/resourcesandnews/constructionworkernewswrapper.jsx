import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconCircleCheck, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import constructionworkernews from '../../../assets/constructionworkernews.jpg'
function constructionworkernewswrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#"> Construction Worker</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Construction Workers in Toronto Can Apply for Canada PR from 3rd Sept</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Grid>
                                <Grid.Col md={6}>
                                    <Image src={constructionworkernews} alt='image' />
                                </Grid.Col>
                                <Grid.Col md={6}>
                                    <Stack>
                                        <Text size={16} ta="justify">
                                            Construction workers who are having Out of status in the Greater Toronto Area can begin the process of appealing for Canada PR as of 3 September 2019.
                                        </Text>
                                        <Text size={16} ta="justify">The latest Temporary Federal Policy for Construction Workers with Out-of-Status in the GTA needs applicants to first appeal to the Canadian Labor Congress (C.L.C). The Canadian Labor Congress will then refer qualified candidates and along with their family members to Refugees, Immigration, and Citizenship Canada (I.R.C.C).</Text>
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                            <Text size={16} ta="justify">Applications started on the website of CLC on 3 September 2019. The Refugees, Immigration, and Citizenship Canada will start allowing applications referred by the C.L.C on 2 January 2020.</Text>
                            <Text size={16} ta="justify">The Temporary Public Policy was published in July 2019 to offer a possibility to construction workers along with their families who originally arrived in Canada on a temporary work permit, but abandoned their status.</Text>
                            {/* style={{ color: '#0042aa' }} */}
                            <Text size={20} color='#0042aa' weight={600}>Eligibility Requirements for Construction Workers with Out-of-Status in the GTA</Text>
                            <Text size={16} ta="justify">Foreign Citizens who either:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                icon={
                                    <ThemeIcon color="teal" size={24} radius="xl">
                                        <IconPinFilled size="1rem" />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>
                                    <Text size={16} ta="justify">Lawfully entered Canada with a status of temporary residence; and, priorly received permission to work in the industry of construction; and,</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Provide evidence of filing income tax returns in Canada or announcing income in Canada (400 major applicants); or,</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify"> Lawfully entered Canada with a status of temporary residence(100 major applicants);</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Have continuously resided in Canada for a minimum of 5 years on the date of their appeal;</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify">Are presently working without permission in the industry of construction in the GTA and have gained full-time three years of work experience in the preceding five years in the industry of construction in the GTA in one of the below NOC codes:</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} ta="justify"> Primary Group 73 equipment and maintenance and operation trades</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>NOC 7611: construction trades laborers and helpers</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>NOC 7441: commercial and residential installers</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>NOC 7521: heavy machine operators (excluding crane)</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Have language proficiency at CLB 4 in all disciplines.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Have a letter of reference signed by the Canadian Labour Congress indicating that the candidate satisfies the above conditions;</Text>
                                </List.Item>
                            </List>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default constructionworkernewswrapper