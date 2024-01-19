import { BackgroundImage, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import visa1 from '../../../assets/dependent-visas.jpg'
import { Getintouchformone } from '../../Getintouchform'
import { IconArrowRight, IconArrowRightCircle, IconCircleCheck, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import visadetail2 from '../../../assets/visa-detail-2.jpg'
function Dependentvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">Dependent Visa</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Image src={visa1} alt="image" height={350} width="100%" />
                <Stack>
                    <Text mt={20} weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Dependent Visa Overview</Text>
                    <Text size={16} ta="justify" >
                        A dependent visa, known by various names officially, grants the dependents of a lawful resident (permanent/temporary)
                        the rights to enter and reside in a country.
                    </Text>
                    <Text size={16} ta="justify">
                        If you are the partner or dependent child under 18 of a lawful resident who is in or
                        going to a foreign country in most visa categories, you can apply for a visa to join them.
                    </Text>
                    <Text size={16} ta="justify">
                        Generally, the primary applicant will need to prove that they can support the dependent and themselves without needing state benefits
                        or other public funds. You will need to show that:
                    </Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        listStyleType='disc'
                        withPadding
                    >
                        <List.Item>
                            <Text size={16} >
                                You intend to live with the primary applicant during their stay, and your
                                relationship is genuine (not a ‘marriage of convenience’), if you are their partner; or
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16} >
                                You have not formed an independent family unit and are not leading an independent life, if you are their child aged under 18.
                            </Text>
                        </List.Item>
                    </List>
                    <Text size={16} ta="justify">
                        The process can be long, and may seem difficult, but by following the proper channels at the proper time, a lot of anxiety can be avoided.
                    </Text>
                    <Text weight={600} size={18} style={{ color: 'rgb(0, 66, 170)' }}>Canada Dependent Visa</Text>
                    <Text size={16} ta="justify">
                        People working or residing in Canada either under a permanent or temporary visa can get their spouse/common law partner, parents and dependent
                        children to stay with them in Canada under a dependent visa. However, if the dependents want to work they have to apply for a work permit.
                    </Text>
                    <Text size={16}>To be able to sponsor, one must fulfil the following criterions,</Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        listStyleType='disc'
                        withPadding
                    >
                        <List.Item>
                            <Text size={16} >
                                Must have a valid work permit/ permanent visa
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16} >
                                Must be able to prove that the sponsor will be able to financially support them
                            </Text>
                        </List.Item>
                    </List>
                    <Text weight={600} size={18} style={{ color: 'rgb(0, 66, 170)' }}>Australia Dependent Visa</Text>
                    <Text size={16} ta="justify">As an Australian citizen or a permanent resident one can sponsor one’s spouse/ de-facto partner, children and parents to live in Australia.</Text>
                    <Text weight={600} size={18} style={{ color: 'rgb(0, 66, 170)' }}>Australia Partner Visa:</Text>
                    <Text size={16} ta="justify">
                        This allows the spouse or the de-facto partner of an Australian citizen or permanent resident or
                        an eligible New Zealand citizen to live in Australia. The applicant can choose to apply based on,
                    </Text>
                    <List
                        spacing="xs"
                        size="sm"
                        center
                        listStyleType='disc'
                        withPadding
                    >
                        <List.Item>
                            <Text size={16}>
                                Partner Visa Subclasses 309 and 100 – if one is outside Australia while applying
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text size={16}>
                                Partner Visa Subclasses 820 and 801 – If one is applying in Australia (the average processing time for the same is between 12 to 15 months)
                            </Text>
                        </List.Item>
                    </List>
                </Stack>
            </div>
        </>
    )
}

export default Dependentvisawrapper