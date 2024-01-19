import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React, { useState } from 'react'
import breadcrumb1 from '../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
function Workabroadwrapper() {
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
                <Text size={textSize} weight={600} color='white' ta="center">Work Abroad</Text>
                <Text color='white' ta="center" size={textSize2}>Home / <Link to="#"> work</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>WORK ABROAD</Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Text size={16} ta="justify">
                                The decision to move or work abroad isn't a spontaneous one. It's often sparked by various factors that paint an enticing picture of life overseas. The allure of luxurious and fast cars showcased on television, the desire for a beautiful home, and the yearning for a conducive and rewarding work environment all contribute to these aspirations. This includes the satisfaction that comes with elevating one's professional journey on foreign soil, along with the promise of a substantial salary and a higher standard of living.
                            </Text>
                            <Text size={16} ta='justify'>
                                The availability of lucrative and diverse job opportunities adds to the appeal of pursuing
                                a Work Visa for the purpose of working and settling in another country. These opportunities are extensive and tailored
                                to accommodate immigrants' choices based on their qualifications, experience, and personal preferences. Ultimately,
                                the promise of a better life, both professionally and personally, serves as a driving force for individuals to embark
                                on this transformative journey.
                            </Text>
                            <Text size={16} ta="justify">
                                <Text component='a' href='#' weight={600} color='#0042aa'> Opulentus Visa Services</Text> stands as a reliable source of comprehensive information and expert assistance
                                for clients seeking guidance in the realms of visa processing and documentation. Our team of proficient consultants offer essential
                                insights pertaining to the diverse prerequisites that need to be fulfilled before the issuance of a visa. This comprehensive approach
                                ensures that our clients are well-informed and adequately prepared throughout the visa application journey.
                            </Text>
                            <Text size={16} ta="justify">
                                Opting to work abroad can be an exciting yet slightly daunting decision. Amidst numerous potential countries, narrowing down
                                the list to your ideal destination can present a challenge. While some individuals might have a clear path due to a partner,
                                friend, or family already situated abroad, others might find themselves uncertain about where to begin or how to choose their destination.
                            </Text>
                            <Text size={16} ta="justify">
                                Opulentus recognizes the complexities involved in this process and has taken the initiative to address these challenges.
                                Through our Immigration Services, we offer a comprehensive solution to such dilemmas. We streamline the process of obtaining a
                                work visa and pursuing work opportunities overseas,
                                making the journey smoother and more accessible for individuals who are unsure about their starting point.
                            </Text>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Guide for Overseas Jobs</Text>
                                <Text size={16} ta="justify">
                                    If you're aiming to leave behind a job that's unsatisfying, unexciting, and poorly paying in exchange
                                    for a working opportunity overseas, then stay tuned because the advantages are limitless. For instance,
                                    you have the chance to acquire new skills, immerse yourself in new languages, and expand your horizons,
                                    ultimately propelling yourself to a higher level of personal and professional growth. Achieving this
                                    transformation involves taking the following steps:
                                </Text>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Step 1: Find a Suitable location</Text>
                                <Text size={16} ta="justify">
                                    To begin your journey toward working and settling abroad, the first crucial step is to identify a destination that suits your aspirations.
                                    Start by examining a world map and exploring until you discover a country that resonates with you as a potential new home. Your choice of
                                    country could be influenced by various factors. Some individuals are drawn to specific nations due to their attractions and amenities,
                                    while others consider shared traditions. The feasibility of language communication, potential language barriers, and visa requirements
                                    might also sway your decision.
                                </Text>
                                <Text size={16} ta="justify">
                                    However, prioritizing a country that offers a conducive working environment should be a key consideration.
                                    Remember, your primary objective is to work and establish yourself professionally in a new land. While factors
                                    like cultural fit and language are important, they should align with your career goals. This careful selection
                                    of location serves as the foundation for your journey toward working and settling abroad.
                                </Text>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Step2: Choose a field of Work</Text>
                                <Text size={16} ta="justify">
                                    A significant number of individuals embarking on the journey of obtaining a work visa and moving abroad may not have a clear idea of
                                    their intended profession in the new country. This lack of clarity might also extend to their current location. However,
                                    it's imperative to have a well-defined working plan when moving abroad, even if it doesn't necessarily translate into a
                                    long-term commitment beyond your stay overseas.
                                </Text>
                                <Text size={16} ta="justify">
                                    Opulentus not only offers immigration services but also provides our clients with a comprehensive list of common job opportunities available to immigrants abroad.
                                    Identifying a suitable field of work that aligns with your skills, experience, and aspirations is pivotal to your successful transition and establishment
                                    in a new work environment. This step ensures that your international move is purposeful and sets the stage for a productive and rewarding work experience
                                    overseas.
                                </Text>
                                <Text size={16}>Some of these job sectors include:</Text>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}>Teaching</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Child care</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Hospitality</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Science and healthcare</Text>
                                    </List.Item>
                                </List>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Step 3: Know your salary and costs</Text>
                                <Text size={16} ta="justify">
                                    As you plan your journey, it's essential to factor in the expenses associated with your transportation to the overseas destination,
                                    particularly when the work placement is of shorter duration. When selecting a location, it's crucial to gain a deep understanding of
                                    the economic landscape of the chosen country. This knowledge will significantly impact the salary or compensation you can expect to receive.
                                    In some cases, you might even be offered perks like accommodation, food, and a standard weekly wage in exchange for your work.
                                </Text>
                                <Text size={16} ta="justify">
                                    To initiate your Visa and Immigration process, we encourage you to complete the free assessment form provided by Opulentus.
                                    With over 26+ years of experience in the overseas career and Immigration industry, we stand as pioneers in Global Resettlement Services.
                                    Our expertise and support can guide you through the intricacies of your international journey, ensuring a smooth transition and successful
                                    immigration experience.
                                </Text>
                            </Stack>
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

export default Workabroadwrapper