import { Badge, Group, Image, Rating, Stack, Text } from '@mantine/core'
import { IconBrandWhatsapp, IconPhoneCall, IconThumbUpFilled } from '@tabler/icons-react'
import React from 'react'
import award_icon from '../../assets/award-icon.png'
import defaultuser from '../../assets/default_user.png'
function Enquireyheader({ employeeName, employeeEmail, employeePhoto, mobileNumber, position, award }) {
    return (
        <>
            <Group position='apart'>
                <Group>
                    <Image src={employeePhoto ? employeePhoto : defaultuser} width={80} height={80} />
                    <Stack spacing={0}>
                        <Text color='#092c84' weight={700} size={16}>{employeeName}</Text>
                        <Text weight={600} size={14}>{position}</Text>
                        <Text weight={600} size={14}>Mobile No:  <Text component='a' href={`tel:+91 ${mobileNumber}`}>
                            {/* <IconPhoneCall size={14} />&nbsp; */}
                            +91 {mobileNumber ? mobileNumber : 'xxxxxxxxxx'}
                        </Text>
                        </Text>
                        <Text component='a' href={`mailto:${employeeEmail}`} color='#12b886' weight={700} size={14}>{employeeEmail}</Text>
                    </Stack>
                </Group>
                <Group>
                    <img src={award_icon} width={50} />
                    <Stack spacing={3}>
                        <Text size={15} color='#092c84' weight={700}>{award}</Text>
                        <Rating fractions={4.5} defaultValue={4.5} mb={5} readOnly size="xs" />
                        <Group spacing={8}>
                            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} style={{ textTransform: "lowercase" }}>
                                <IconThumbUpFilled size={14} /> <Text span>Follow</Text>
                            </Badge>
                            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} style={{ textTransform: "lowercase" }}>
                                <Text component='a' href={`https://wa.me/91${mobileNumber}?text=Hai, I want to know the visa immigration process.`} target='blank'> <IconBrandWhatsapp size={14} /> Whats up</Text>
                            </Badge>
                            <Badge variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} style={{ textTransform: "lowercase" }}>
                                <Text component='a' href={`tel:+91 ${mobileNumber}`}> <IconPhoneCall size={13} /> call me </Text>
                            </Badge>
                        </Group>
                    </Stack>
                </Group>
            </Group>
        </>
    )
}

export default Enquireyheader
