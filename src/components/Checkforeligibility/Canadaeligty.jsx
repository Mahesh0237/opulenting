import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Card, Container, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import canadalogo from '../../assets/canadalogo.png'
function Canadaeligty() {
    return (
        <>
            <Header />
            <Container py={30}>
                <Text size={25} weight={600} color='red' ta="center"></Text>
                <Card withBorder >
                    <Card.Section inheritPadding py={10}>
                        <Group position='apart'>
                            <Text size={20} weight={600} ta="center" color='#f00' >Eligibility For Canada</Text>
                            <Image src={canadalogo} width={50} height={30} />
                        </Group>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py={10}>
                        <Stack>
                            <Text size={16}>1) It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                            <Text size={16}>2) The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                            <Text size={16}>3) Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>
                            <Text size={16}>4) Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
            <Footer />
        </>
    )
}

export default Canadaeligty