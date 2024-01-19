import { BackgroundImage, Center, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import visa1 from '../../../assets/visa-detail-1-cat-1.jpg'
import { Getintouchformone } from '../../Getintouchform'
import { IconCircleCheck, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import visadetail2 from '../../../assets/visa-detail-2.jpg'
function Touristvisawrapper() {
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
                <Text color='white' ta="center">Home / <Link to="#">Tourist Visa</Link></Text>
            </Stack>
            <div className='container py-5'>
                <Image src={visa1} alt="image" height={400} width="100%" />
                <Stack>
                    <Text mt={20} weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Tourist Visa Overview</Text>
                    <Text size={16} ta="justify" >
                        Tourism, vacation (holiday), visit with friends or relatives, medical treatment, participation in social events hosted by fraternal,
                        social, or service organizations or participation in musical, sports, or similar events or contests(if not being paid for participating)
                        or enrollment in a short recreational course of study, not for credit toward a degree (for example, a two-day cooking class while on vacation).
                        For any person wanting to travel, holiday, visit a place, visit relatives or friends or even write an exam or undergo medical treatment.
                    </Text>
                    <Text size={16} ta="justify">
                        Visas are easily granted for applicants who have a genuine intent or have traveled overseas before & have the finances
                        to support themselves in the country they are visiting.
                    </Text>
                    <Text size={16} ta="justify">More often than not, an assessment is based on documents submitted & the visa interviews are rare.</Text>
                    <Text size={16} ta="justify">
                        Visa is granted for three to six months for first time applicants based on the country which they are applying,
                        those who have visited before can apply for 1, 2, 5 or10 years depending on their profile and country.
                    </Text>
                    <Text size={16} ta="justify">
                        Only the US requires the applicant to attend a personal interview if he hasn’t traveled before,
                        all other countries ask for a personal interview very rarely. The visa is stamped on the passport or by mail.
                    </Text>
                    <Text size={16} ta="justify">
                        Visa requirements vary from country to country and it also depends on your nationality.
                        For some countries & nationals, the tourist visa should be obtained before travelling,
                        while for some it is granted on arrival.
                    </Text>
                    <Text size={16} ta="justify">
                        You will get your visa if you prove your intent is genuine, documentation is correct & complete, you have funds & will return before your visa expires.
                    </Text>
                    <Text size={16} ta="justify">
                        Choosing Apex Visas, ensures that you have the leader on your side.
                        When you choose us, you increase the probability of getting your visa stamping and making the process as smooth as possible.</Text>
                </Stack>
            </div>
        </>
    )
}

export default Touristvisawrapper