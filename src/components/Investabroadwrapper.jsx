import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from '../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Investabroadwrapper() {
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
                <Text size={textSize} weight={600} color='white' ta="center">Invest Abroad</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#"> Invest</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Get Idea to apply for Business Visa</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta='justify'>
                                Every business owner is driven by the pursuit of maximizing profits and achieving higher financial returns.
                                However, attaining these goals often hinges on operating within a favorable and supportive economic environment.
                                Unfortunately, this may not align with the current economic conditions in their country of residence. Consequently,
                                many business owners are enticed by the prospect of applying for a business visa, opening up the opportunity to invest abroad.
                            </Text>
                            <Text size={16} ta="justify">
                                Wishing to travel and invest abroad can never be enough for every businessperson unless they get the needed information about visa requirements
                                and then choose a visa that would allow them to make business transactions in a foreign country.
                                The potential investors can choose from a list of visas based on their requirements:
                            </Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16}><Text component='span' color='#0042aa' weight={600}>Business Visa:</Text> This visa category is tailored for individuals intending to engage in business-related activities in a foreign country.
                                        It enables entrepreneurs to explore new markets, establish business connections, and conduct transactions on an international scale.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' color='#0042aa' weight={600}>Entrepreneur Visa:</Text> Geared toward those seeking to establish and manage a business venture in a foreign land,
                                        the Entrepreneur Visa is designed to facilitate the launch of new enterprises, contributing to local economies and fostering innovation.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>
                                        <Text component='span' color='#0042aa' weight={600}>Investor Visa:</Text> Tailored for individuals with a desire to make substantial financial investments in a foreign nation,
                                        the Investor Visa allows for the infusion of capital into local economies, contributing to economic growth and development.
                                    </Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>United Kingdom</Text>
                            <Text size={16} ta="justify">
                                In case you're wondering why you need to make it down to the UK and invest your money,
                                then you might want to read the following about the United Kingdom:
                            </Text>
                            <List
                                spacing="xs"
                                size="md"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16} >The UK is a developed country, and she has the 7th largest economy by the nominal GDP as well as
                                        the 8th largest economy in the world according to purchasing power parity.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >
                                        The capital of the UK is London, a famous city where business thrives.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >
                                        The UK is a recognised nuclear-weapon state and has the 4th highest military expenditure in the world, and this offers protection to you and your family.
                                    </Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >The region remains a citadel of power with a massive influence on the economy, military, culture, military, politics, and science.</Text>
                                </List.Item>
                            </List>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>What type of Visa do you need?</Text>
                            <Text size={16} ta="justify">If your aspiration is to relocate to the UK with the intention of establishing residence and building a life there, particularly
                                if you possess a minimum of GBP 200,000 in funds, the optimal choice for you is the UK Tier 1 Entrepreneur Visa. This investor visa not
                                only grants you the privilege of owning a business in the UK but also provides the opportunity for your entire family to accompany you.
                                With this visa, you can reside in the UK for a span of 3 years and 4 months initially, and you also have the option to extend it for an
                                additional 2 years.</Text>
                            <Text ta="justify" size={16}>
                                An essential eligibility requirement for this visa is meeting the English language proficiency standards. You can fulfill this requirement
                                by successfully completing any of the approved English language tests such as
                                IELTS, UKVI, or obtaining a UK NARIC assessment for qualification and English language equivalency in the case of a bachelor's degree.
                            </Text>
                            <Text size={16} ta="justify">
                                In essence, the UK Tier 1 Entrepreneur Visa opens doors for you to establish your presence, contribute to the local economy, and create a better future for yourself and your family in the United Kingdom.
                            </Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Australia</Text>
                            <Text size={16} ta="justify">
                                Australia extends a warm invitation to all individuals who are inclined towards owning or managing a business within its borders,
                                whether it's a new startup or an existing enterprise. The avenue for such endeavors is paved through the Business Innovation and Investment
                                Visa Subclass 188. This visa category is characterized as a provisional visa, granted for a duration of four years, and is typically contingent
                                upon state nomination.
                            </Text>
                            <Text size={16} ta="justify">
                                With the Business Innovation and Investment Visa Subclass 188, aspiring business owners and
                                entrepreneurs are presented with an opportunity to embark on their business journey in Australia.
                                This visa paves the way for innovative business initiatives, economic contributions, and an enhanced future within the Australian business landscape.
                            </Text>
                            <Text size={16} weight={600} color='#0042aa'>Eligibility for this visa includes:</Text>
                            <List
                                spacing="xs"
                                size="sm"
                                center
                                listStyleType='disc'
                                withPadding
                            >
                                <List.Item>
                                    <Text size={16} >Possession of a business that makes a turnover of a minimum of AUD 500,000 for at least two out of the last four years.</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16}>Applicant must have a total of $800,000 in business and/or as personal assets</Text>
                                </List.Item>
                                <List.Item>
                                    <Text size={16} >
                                        Applicants must score a minimum of 65 points on this points test category on English language, Age, Innovation, qualifications, business turn over.
                                    </Text>
                                </List.Item>
                            </List>
                            <Text size={16} ta="justify">Other countries where people who are desirous to invest abroad include Canada, Ireland, Germany, Portugal, the USA, etc... these countries have international visas sufficient for immigrants.</Text>
                            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>How can Opulentus help you?</Text>
                            <Text size={16} ta="justify">At Opulentus - The Visa Company, we prioritize addressing all aspects concerning documentation and the visa application process.
                                Our services encompass providing comprehensive insights into the necessary prerequisites for acquiring a visa.
                                With over two decades of expertise in the Overseas Career and Immigration Industry, we stand as a dependable partner in facilitating your visa journey.</Text>
                            <Text size={16} ta="justify">Contact us today to experience why countless individuals place their trust in us when applying for visas to various countries. Our commitment to excellence and proven track record have earned us the confidence of numerous applicants seeking seamless and successful visa applications through our assistance.</Text>
                        </Stack>
                    </Card.Section>
                    {/* <Card.Section inheritPadding p={10}>
                        <Group position='right'>
                            <Button size='sm'>Apply Now</Button>
                        </Group>
                    </Card.Section> */}
                </Card>
            </Container>
        </>
    )
}

export default Investabroadwrapper