import { BackgroundImage, Button, Card, Center, Container, Group, List, Stack, Text } from '@mantine/core'
import { IconPinFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Singaporeenterpasswrapper() {
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
                <Text size={30} weight={600} color='white' ta="center">Products</Text>
                <Text color='white' ta="center">Home / <Link to="#">Singapore Entrepass</Link></Text>
            </Stack>
            <Container p={30}>
                <Card withBorder mt={20}>
                    <Card.Section inheritPadding p={10}>
                        <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
                    </Card.Section>
                    <Card.Section inheritPadding withBorder p={10}>
                        <Stack>
                            <Stack>
                                {/* <Text size={18} weight={600} color='#0042aa'>Hong Kong Dependent Visa</Text> */}
                                <Text size={16} ta="justify">
                                    Among the multitude of countries worldwide, Singapore stands out as an exceptional and hospitable
                                    destination for establishing and nurturing new businesses. Boasting streamlined tax regulations,
                                    state-of-the-art infrastructure, effective intellectual property protection, and a user-friendly
                                    incorporation process, Singapore consistently draws foreign investors and entrepreneurs
                                    from all corners of the world, reinforcing its stature as a premier global financial hub.
                                </Text>
                                <Text size={16} ta="justify">
                                    In line with its commitment to attracting foreign investment, Singapore offers the EntrePass Visa Scheme,
                                    which serves as a mechanism to incentivize and facilitate foreign investors. This entrepreneur visa is tailored
                                    for ambitious foreign business individuals who aspire to initiate a new business venture or relocate an existing
                                    one to Singapore. The EntrePass Visa Scheme serves as a strategic tool
                                    in cultivating a business-friendly environment and welcoming foreign talents to contribute to the nation's economic landscape.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>FEATURES OF SINGAPORE ENTREPASS</Text>
                                <Text size={16} ta="justify">
                                    While applicants for the EntrePass must demonstrate a credible and innovative entrepreneurial aptitude,
                                    the acquisition of this visa does not hinge on possessing specific educational qualifications. Notably, after residing in Singapore
                                    for a span of two years, EntrePass holders become eligible to apply for permanent residence status within the country. An added advantage
                                    lies in the favorable tax regime maintained in Singapore.
                                    Moreover, foreign nationals have the option to apply for the Dependant Visa, extending the privilege to their spouse and children.
                                </Text>
                                <Text size={16} ta="justify">
                                    However, it's essential to note that individuals who are owners of businesses cannot secure an EntrePass if the company or firm in question
                                    has been incorporated for a duration exceeding 6 months.
                                    This condition is implemented to ensure that the EntrePass serves as a mechanism to foster the initiation and growth of new enterprises in Singapore.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>GETTING A SINGAPORE ENTREPASS</Text>
                                <Text size={16} ta="justify">
                                    Prospective applicants are strongly advised to initiate the EntrePass application procedure prior to incorporating their
                                    intended firm or business. This proactive approach is recommended to streamline the process effectively. Notably, the incorporation
                                    process itself is straightforward and devoid of
                                    any associated expenses until such time that the applicant receives approval to proceed with their EntrePass application.
                                </Text>
                                <Text size={16} ta="justify">
                                    In cases where an applicant commences the incorporation process before initiating their entrepreneur visa application,
                                    a grace period of 6 months is granted for obtaining the Singapore entrepreneur visa. Post-approval of the visa, the applicant
                                    is granted a window of 30 days to finalize the incorporation of the firm. It is imperative to adhere to this timeline to secure
                                    the visa offer; failure to do so may result in the forfeiture of the visa opportunity.
                                    This well-defined timeline underscores the importance of strategic planning and execution to maximize the potential for a successful EntrePass application.
                                </Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>Why Contact Opulentus?</Text>
                                <Text size={16} ta="justify">We have been processing the visa for quite a long time and know all the necessary information that you would need. Every single time, we are processing about 5000 application. Contact us today and see why we are the best visa service you can trust.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Fees, Cost and Refund Policy</Text>
                                <Text size={16} ta="justify">As an <Text component='a' href='#' color='#0042aa' weight={600}>Immigration Consultant</Text>, Opulentus offers competitive fee which is best in the Immigration Industry. We processed over a lakh of active cases from all over the world at a given time, thanks to our state-of-the-art processing center. With Opulentus, you get the best hands at the best prices. Standard prices are charged across all our offices. We ensure that besides company offers and promotions, you will not be demanded or asked to pay a higher or lower price. The company determines prices and remain the same for all clients, offices, and cases.</Text>
                            </Stack>
                            <Stack>
                                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Opulentus Services</Text>
                                <List
                                    spacing="xs"
                                    size="md"
                                    center
                                    listStyleType='disc'
                                >
                                    <List.Item>
                                        <Text size={16}>Expert guidance on the complete process</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Documentation (this defers from country to country)</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Checklist of Document stage-wise and help with requisites and choices after the signed copy of service agreement  has been received</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Provision of documents samples</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>We also correspond with the department on your behalf whenever there is a need for it</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Support you in scheduling interview date with the embassy</Text>
                                    </List.Item>
                                    <List.Item>
                                        <Text size={16}>Mock visa interviews</Text>
                                    </List.Item>
                                </List>
                            </Stack>
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding p={10}>
                        <Group position='right'>
                            <Button size='sm'>Buy Now</Button>
                        </Group>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Singaporeenterpasswrapper