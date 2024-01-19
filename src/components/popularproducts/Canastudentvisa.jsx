import { Button, Card, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import canadabanner from '../../assets/canadaproduct.png'
function Canastudentvisa() {
    return (
        <Container size={1350} p={30}>

            <Card withBorder mt={20}>
                <Card.Section inheritPadding p={10}>
                    <Text size={22} weight={700} ta="center" td="underline" color='#e30303'>Migrate to Canada</Text>
                </Card.Section>
                <Card.Section inheritPadding withBorder p={10}>
                    <Grid>
                        <Grid.Col md={6}>
                            <Image radius="md" src={canadabanner} alt="Random image" />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Stack>
                                <Text size={18} weight={600}>Planning to Apply for Canada Regional Skilled Visa?</Text>
                                <Text  ta="justify">One of the main goals of <a href='#'>Canada Immigration</a> is to ensure skilled workers who live in the country are retained permanently in other to contribute to Canada's economic growth.  The value of skilled workers to the economy in Canada and its workforce strength cannot be underestimated.</Text>
                                <Text  ta="justify">
                                    This <Text style={{ display: "inline-block" }} weight={700}>Subclass 887 Visa</Text> gives permanent residency to individuals who have lived for a period of two years and worked for at least one year in specific areas of regional Canada.
                                </Text>
                                <Text>Successful applicants of the Canada Skilled Regional Visa will receive a permanent resident visa, allowing the applicant to apply for an Canadan visa, live in Canada for life, get health coverage through Canada's health insurance scheme called Medicare, and sponsor eligible relatives for permanent residence.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
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

export default Canastudentvisa