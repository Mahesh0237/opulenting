import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Card, Container, Group, Image, Stack, Text } from '@mantine/core'
import australia from '../../assets/australiaflag1.jpg'
function Australiaeligty() {
  return (
    <>
      <Header />
      <Container py={30}>
        <Text size={25} weight={600} color='red' ta="center"></Text>
        <Card withBorder >
          <Card.Section inheritPadding py={10}>
            <Group position='apart'>
              <Text size={20} weight={600} ta="center" color='#f00' >Eligibility For Australia</Text>
              <Image src={australia} width={50} height={30} />
            </Group>
          </Card.Section>
          <Card.Section withBorder inheritPadding py={10}>
            <Stack>
              <Text size={16} ta="justify'">
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Text>
            </Stack>
          </Card.Section>
        </Card>
      </Container>
      <Footer />
    </>
  )
}

export default Australiaeligty