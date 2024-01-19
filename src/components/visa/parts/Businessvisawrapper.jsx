import { BackgroundImage, Card, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import visa1 from '../../../assets/visa-detail-1-cat-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import { IconCircleCheck, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import visadetail2 from '../../../assets/visa-detail-2.jpg'
function Businessvisawrapper() {
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
                <Text size={30} weight={600} color='white' ta="center">Visa</Text>
                <Text color='white' ta="center">Home / <Link to="#">Business Visa</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Card withBorder>
                    <Stack>
                        <Text mt={20} weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Business Visa </Text>
                        <Text size={16} ta="justify" >
                            The Business Immigration Program is designed to draw seasoned business professionals to the target countries.
                            The selection process hinges on the candidates' capacity to contribute to the growth of robust and thriving businesses,
                            thereby bolstering the local economy.
                        </Text>
                        <Stack>
                            <Text size={16}>Business Immigration has various classes:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Investor class</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Entrepreneur class</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Self-employed persons</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Employment based class</Text>
                                </List.Item>
                            </List>
                            <Text size={16} mt={20}>Business immigrants are expected to contribute to the economy by:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}>Investing in the economy as an immigrant investor; or</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Owning and managing businesses as an entrepreneur; or</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Contributing in the generation of employment opportunities.</Text>
                                </List.Item>
                            </List>
                            <Text size={16} ta="justify">
                                The Business Immigration Program allows experienced businesspeople to immigrate to the destination country,
                                where they can apply their skills and knowledge of global markets and technology to enhance the local economy.
                                Business immigration is a valuable program that helps create jobs and stimulate economic growth in the country.
                            </Text>
                        </Stack>
                    </Stack>
                </Card>
            </div>
        </>
    )
}

export default Businessvisawrapper