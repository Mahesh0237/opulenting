import { BackgroundImage, Card, Center, Container, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Visitvisawrapper() {
    const { width } = useViewportSize()
    let textSize;
    let textSize2;
    if (width < 377) {
        textSize = 18
        textSize2 = 15
    } else if (width < 410) {
        textSize = 20
        textSize2 = 16
    } else if (width < 567) {
        textSize = 22
    } else if (width < 769) {
        textSize = 25
    } else {
        textSize = 30
    }
    return (
        <>
            <BackgroundImage
                src={breadcrumb1}
                radius="sm"
                className='breadcrumbcoaching'
                style={{ position: "relative" }}
            >
                <Center p={100}  >

                </Center>
            </BackgroundImage>
            <Stack className='products-position-property'>
                <Text size={textSize} weight={600} color='white' ta="center">VISIT VISA</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#">Visit Visa</Link></Text>
            </Stack>
            <Container py="sm">
                <Card withBorder>
                    <Stack>
                        <Text mt={20} weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Visit Visa </Text>
                        <Text size={16} ta="justify"  >
                            A visit visa, also known as a tourist visa or visitor visa, is a type of temporary visa that allows individuals to enter a foreign country
                            for a specified period of time for the purpose of tourism, leisure, family visits, medical treatment, or other non-work related activities.
                            The specific rules and requirements for obtaining a visit visa vary from country to country, so it's important to check the visa requirements
                            of the country you intend to visit.
                        </Text>
                        <Stack>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <Stack>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Purpose of Visit:</Text> Visit visas are intended for short-term stays and typically do not allow the visa holder to engage in any form of employment or business activities. The primary purpose of the visit should be tourism or other non-work related activities.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Duration:</Text> The duration of a visit visa varies depending on the country and its policies.
                                            It can range from a few days to several months. Some countries may offer single-entry visas,
                                            allowing you to enter the country once, while others might provide multiple-entry visas, allowing you to enter
                                            and exit the country multiple times within the visa validity period.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'> Application Process:</Text> To obtain a visit visa, you usually need to submit an
                                            application to the consulate or embassy of the country you plan to visit.
                                            The application process may involve submitting required documents such as a valid passport, a completed visa application form, passport-sized photos,
                                            proof of financial stability to cover your expenses during the visit, and possibly a travel itinerary.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>
                                            <Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Proof of Intent:</Text> Depending on the country, you might need
                                            to provide proof of your intention to return to your home country after your visit.
                                            This could include evidence of ties to your home country such as a job, property ownership, family commitments, etc.
                                        </Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Health Insurance:</Text> Some countries
                                            require visitors to have valid health insurance coverage for the duration of their visit to cover any medical expenses that may arise
                                            during the trip.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Financial Requirements:</Text> You might need to demonstrate that you have enough funds to cover your expenses
                                            while in the visiting country. This is to ensure that you won't become a burden on the country's social services.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Invitation Letters:</Text> In some cases, if you're visiting friends or family, they might need to provide an invitation letter stating their willingness to host you during your visit. This letter could also provide details about your itinerary and the purpose of your visit.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Visa Fees:</Text> There is usually a non-refundable fee associated with applying for a visit visa. The fee amount varies by country and type of visa.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Restrictions:</Text> Visit visas often come with certain restrictions. For instance, you may not be allowed to work or study while on a visit visa, and overstaying your visa's validity period could lead to penalties or future entry restrictions.</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}><Text component='a' href='#' weight={600} color='rgb(0, 66, 170)'>Exit Requirements:</Text> Some countries require visitors to leave the country before their visa expires, while others might allow you to extend your stay by applying for an extension.</Text>
                                    </List.Item>
                                </Stack>
                            </List>
                            <Text weight={600} size={20} style={{ color: 'rgb(0, 66, 170)' }}>Visa policy</Text>
                            <Text size={16} ta="justify">Opulentus Overseas, renowned as a prominent tourist visa consultant in Hyderabad, holds the distinction of being the best visa
                                consultants in the city. We offer comprehensive support by providing insights into the rules and regulations of various
                                countries and their respective visa policies. Our expertise extends to advising on entry eligibility criteria, detailing
                                who may or may not be permitted to enter a specific country.</Text>
                            <Text size={16} ta="justify">Visa policies can encompass varying degrees of freedom for passport holders.
                                Some policies allow passport holders from certain countries to enter without requiring a
                                visa, while not extending this privilege to all passport holders. It's common for visa policies
                                to be mutual agreements, implying that two countries reciprocally permit visa-free travel for each
                                other's citizens. However, this reciprocity isn't always uniform. For instance, Canadian passport
                                holders might enjoy visa-free travel to Grenada, while citizens of Grenada must apply for a visa to travel to Canada.</Text>
                        </Stack>
                    </Stack>
                </Card>
            </Container>
        </>
    )
}

export default Visitvisawrapper