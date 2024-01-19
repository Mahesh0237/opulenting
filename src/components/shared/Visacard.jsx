import { Card, Stack, Text } from '@mantine/core'
import React from 'react'
function Visacard({ image, desc, typeofvisa, link }) {
    return (
        <Card withBorder>
            <Card.Section>
                <img src={image} alt='image' width="100%" />
            </Card.Section>
            <Card.Section inheritPadding py={20}>
                <Stack >
                    <Text weight={600} size={20} color='#ee0000' component='a' href= {link}>{typeofvisa}</Text>
                    <Text ta="justify">{desc}</Text>
                </Stack>
            </Card.Section>
        </Card>
    )
}

export default Visacard