import { Button, Card, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import canadabanner from '../../assets/germanyproduct.jpg'
function Germanyvisitorvisawrapper() {
    return (
        <Container size={1350} p={30}>
            <Card withBorder mt={20}>
                <Card.Section inheritPadding p={10}>
                    <Text size={22} weight={700} ta="center" td="underline" color='#e30303'>Migrate to Germany</Text>
                </Card.Section>
                <Card.Section inheritPadding withBorder p={10}>
                    <Grid>
                        <Grid.Col md={6}>
                            <Image radius="md" src={canadabanner} alt="Random image" />
                        </Grid.Col>
                        <Grid.Col md={6}>
                            <Stack>
                                <Text size={20} weight={600}>Planning to Apply for Germany Visitor Visa?</Text>
                                <Text size={16} ta="justify"> Be it any occasion, traveling abroad has always been interesting. If you are planning to travel across the world, all you require is a Visitor Visa or Temporary Resident Permit (TRP). But not every global solution provider gives you the easy concept of traveling abroad.</Text>
                                <Text size={16} ta="justify">Many in procedure to get the visa formalities done shall call you to the embassy premises (of the country you want to travel) for an interview. There are possibilities that even after a long process, you may have to convince the visa officer about the reason of your visit to the native country and the authentication of the fact that you will return within the allotted time period.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                    <Stack mt={20}>
                        <Text size={16} ta="justify">But Opulentus provides you with easy and comprehensible Visitor visa application process. Where you are not at all pressurized by lunatic Q/A’s thrown by visa officer. You are just required to clear the medical examination for your entry in that country. That is done to ensure that you are not suffering from any serious medical problem or any threatening ailment which may endanger their people.</Text>
                        <Text size={16} ta="justify">Thereby, the concoct time taken for Visitor Visa is very less as compared to other category visas at Opulentus . The option like single entry, multiple entry or transit visa entry can be applicable to you. We, at Opulentus , have transformed the complicated visitor visa process into simple and a comprehensible one. Our trained staff shall file a fool-proof application for you so that you don’t have to face exclusions. And the applicants can travel all over the globe in ease.</Text>
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

export default Germanyvisitorvisawrapper