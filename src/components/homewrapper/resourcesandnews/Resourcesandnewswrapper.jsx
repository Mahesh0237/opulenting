import React from 'react'
import post2 from '../../../assets/jobopeningcanada.jpg'
import post1 from '../../../assets/uscitizenshipnews.jpg'
import post4 from '../../../assets/constructionworkernews.jpg'
import { Card, Image, Stack, Text } from '@mantine/core'
function Resourcesandnewswrapper() {
    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="mb-4 text-center">
                            <h2>Resources &amp; News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 ">
                        <Card padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={post2}
                                    height={230}
                                    alt="products_card"
                                />
                            </Card.Section>
                            <Stack mt={10} spacing={5}>
                                <Text size={14} mb={10}>25 January, 2023 By <Text component='a' href='#' color='red' weight={700}> Opulentus</Text></Text>
                                <Text mb={10} size={15} ta="justify">Job openings in Canada increased sharply to 581,600
                                    in the 2nd quarter of 2019, up 6.4% in the corresponding period of the previous year, new figures reveal.
                                    Quebec estimated for approximate...
                                </Text>
                            </Stack>
                            <Text component='a' href="/job_opening_canada" className='btn-link' style={{ textDecoration: "none" }}>Read More</Text>
                        </Card>
                    </div>
                    <div className="col-md-4 ">
                        <Card padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={post4}
                                    height={230}
                                    alt="products_card"
                                />
                            </Card.Section>
                            <Stack mt={10} spacing={5}>
                                <Text size={14} mb={10}>15 March, 2023 By <Text component='a' href='#' color='red' weight={700}> Opulentus</Text></Text>
                                <Text mb={10} size={15} ta="justify">Construction workers who are having Out of status in the Greater Toronto Area can begin the process of appealing for Canada PR as of 3 September 2019.
                                </Text>
                            </Stack>
                            <Text component='a' href="/construction_worker_news" className='btn-link' style={{ textDecoration: "none" }}>Read More</Text>
                        </Card>
                    </div>
                    <div className="col-md-4 ">
                        <Card padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                    src={post1}
                                    height={230}
                                    alt="products_card"
                                />
                            </Card.Section>
                            <Stack mt={10} spacing={5}>
                                <Text size={14} mb={10}>23 March, 2023 By <Text component='a' href='#' color='red' weight={700}> Opulentus</Text></Text>
                                <Text mb={10} size={15} ta="justify">The US Homeland Security Department (D.H.S) has taken the
                                    process of getting social media credentials (user name) a move forward.
                                </Text>
                            </Stack>
                            <Text component='a' href="/uscitizenshipcard_page" className='btn-link' style={{ textDecoration: "none" }}>Read More</Text>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resourcesandnewswrapper