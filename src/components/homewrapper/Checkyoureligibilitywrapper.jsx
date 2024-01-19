import { Card, Container, Grid, Group, Image, SimpleGrid, Stack, Text } from '@mantine/core'
import React from 'react'
import canadaflag from '../../assets/canada-flag.png'
import australiaflag from '../../assets/australia-flag.png'
import usaflag from '../../assets/united-states-flag.png'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Checkyoureligibilitywrapper() {
    const { width } = useViewportSize()
    let gridcols;
    let gridalign;
    if (width < 490) {
        gridcols = 1
        gridalign = "left"
    } else if (width < 768) {
        gridcols = 2
        gridalign = "center"
    } else {
        gridcols = 3
        gridalign = "center"
    }
    return (
        <section className='py-5' style={{ background: "rgb(220 233 244 / 20%)" }}>
            <div className='container'>
                <Stack>
                    <div className="text-center">
                        <h2 className="mb-1 ">Check Your Eligibility</h2>
                    </div>
                    <Text ta="center" mb={20}>The Opulentus points calculator is an easy way for you to evaluate your profile’s strength when applying to work, study or settle abroad.</Text>
                    <Stack align={gridalign}>
                        <SimpleGrid cols={gridcols}>
                            <Link to='/canada_eligibility'>
                                <Card withBorder className='checkforelgty'>
                                    <Group position='left'>
                                        <Image src={canadaflag} width={50} alt='' />
                                        <div>
                                            <Text size={20} weight={600}>CANADA</Text>
                                            <Text component='a' href='#' size={15} color='blue' weight={600}>View</Text>
                                        </div>
                                    </Group>
                                </Card>
                            </Link>
                            <Link to='/australia_eligibility'>
                                <Card withBorder className='checkforelgty'>
                                    <Group position='left'>
                                        <Image src={australiaflag} width={50} alt='' />
                                        <div>
                                            <Text size={20} weight={600}>AUSTRALIA</Text>
                                            <Text component='a' href='#' size={15} color='blue' weight={600}>View</Text>
                                        </div>
                                    </Group>
                                </Card>
                            </Link>
                            <Link to='/usa_eligibility'>
                                <Card withBorder className='checkforelgty'>
                                    <Group position='lef'>
                                        <Image src={usaflag} width={50} alt='' />
                                        <div>
                                            <Text size={20} weight={600}>USA</Text>
                                            <Text component='a' href='#' size={15} color='blue' weight={600}>View</Text>
                                        </div>
                                    </Group>
                                </Card>
                            </Link>
                        </SimpleGrid>
                    </Stack>
                </Stack>
            </div>
        </section>
    )
}

export default Checkyoureligibilitywrapper