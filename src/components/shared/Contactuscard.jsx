import { Card, Group, Modal, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'

function Contactuscard({ place, address, phonenum, email, maplocation }) {
    const [googlemapModal, setGooglemapModal] = useState(false)
    const openModal = () => {
        setGooglemapModal(true)
    }
    const closeModal = () => {
        setGooglemapModal(false)
    }

    return (
        <>
            <Card withBorder>
                <Card.Section inheritPadding py={10}>
                    <Text size={16} weight={600} color='#f00'>{place}</Text>
                </Card.Section>
                <Card.Section withBorder inheritPadding py={10}>
                    <Stack spacing="xs">
                        <Text size={15} >{address}</Text>
                        <Text size={15}><Text component='span' weight={600}>Phone: </Text>{phonenum}</Text>
                        <Text size={15}><Text component='span' weight={600}>Email: </Text>{email}</Text>
                        <Group>
                            <a href="#!" className="btn-link" style={{ textDecoration: "none" }} onClick={openModal}>Google Map</a>
                        </Group>
                    </Stack>
                </Card.Section>
            </Card>
            <Modal opened={googlemapModal} onClose={closeModal} zIndex={9999} withCloseButton={false} >
                <Text pb={15} weight={600} color='red' size={20} ta="center">{place}</Text>
                <iframe src={maplocation} width="600" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Modal>
        </>
    )
}

export default Contactuscard