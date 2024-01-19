import { Button, Card, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import canadabanner from '../../assets/australiaproduct.jpg'
function Australiastudentvisa() {
  return (
    <Container size={1350} p={30}>
      <Card withBorder mt={20}>
        <Card.Section inheritPadding p={10}>
          <Text size={22} weight={700} ta="center" td="underline" color='#e30303'>Migrate to Australia</Text>
        </Card.Section>
        <Card.Section inheritPadding withBorder p={10}>
          <Grid>
            <Grid.Col md={6}>
              <Image radius="md" src={canadabanner} alt="Random image" />
            </Grid.Col>
            <Grid.Col md={6}>
              <Stack>
                <Text size={20} weight={600}>Planning to Apply for Australia Student Visa?</Text>
                <Text size={16} ta="justify"> With worldwide integration, Education sector has always been the one domain which captured a big amount of population across the world. In today’s time studying abroad isn’t a new term. Educational excellence, high rate of employment and tremendous income potential with exquisite work environment attracts students all over the globe. But selecting and ensuring to follow the right career has become difficult in the changing times.</Text>
                <Text size={16} ta="justify">Career planning unquestionably requires an expert’s guidance in terms of gaining insight to the educational opportunities that are available worldwide. The students looking forward to start their educational tour overseas and planning to put their careers on a fast track; Opulentus is of the leading global resettlement solution provider that helps you in hassle-free student visa services.</Text>
              </Stack>
            </Grid.Col>
          </Grid>
          <Stack mt={20}>
            <Text size={16} ta="justify">At Opulentus, we provide you with an immense range of special, high quality of educational universities/colleges all over the globe and great opportunities of professional career.</Text>
            <Text size={16} ta="justify">The multifarious career opportunities offered by various countries, attract students from different countries of the world to study and settle there.</Text>
            <Text size={16} ta="justify"> We guide you with a hassle-free process that helps you selecting, applying and procuring admission to foreign Colleges / Universities. Moreover, association with pre-requisites of admission process and other formalities is the most important concern at our point. With an extensive association with the reputed Universities and Educational Institutions abroad, we at Opulentus, are well equipped to help you while selecting the most appropriate educational option and the preferred country.</Text>
            <Text size={16} ta="justify">We aim to be one-stop education center for students applying to the most suitable Educational Institutes across the globe which would best match their aspirations, academic profile, study goals, financial situations and life-style.</Text>
            <Text size={16} ta="justify">We mover the endeavors to countries like: Australia, Canada, Germany, Ireland, New Zealand, Switzerland, USA, Poland, Netherlands, Denmark, Switzerland, Malaysia and UK etc. and further help you to settle down after the successful completion of your studies.</Text>
          </Stack>
        </Card.Section>
        <Card.Section inheritPadding p={10}>
          <Group position='right'>
            <Button size='sm'  >Buy Now</Button>
          </Group>
        </Card.Section>
      </Card>
    </Container>
  )
}

export default Australiastudentvisa