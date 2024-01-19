import { BackgroundImage, Card, Center, Container, Stack, Text } from '@mantine/core'
import React, { useState } from 'react'
import breadcrumb1 from './../assets/products.jpg'
import { useViewportSize } from '@mantine/hooks';
function Refundpolicywrapper() {
    const { width } = useViewportSize()
    let newsize;
    if (width < 500) {
        newsize = 20
    } else if (width < 717) {
        newsize = 25
    } else {
        newsize = 30
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
                <Text size={newsize} weight={600} color='white' ta="center" >Refund Policy</Text>
                <Text className='policy'></Text>
            </Stack>
            <Container py={30}>
                <Card withBorder >
                    <Card.Section inheritPadding py={10}>
                        <Text size={20} weight={600} color='#e30303' ta="center">Refund Policy</Text>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py={10}>
                        <Stack>
                            <Text size={15}>Evaluations: 100% non-refundable.</Text>
                            <Text size={15}>DIY Kits: 100% non-refundable.</Text>
                            <Text size={15}>Directories: 100% non-refundable.</Text>
                            <Text size={15}>Job Search Services*: 100% non-refundable.</Text>
                            <Text size={15}>*Note: Under any uncertain situations like natural calamities or the advent of a pandemic, your amount is non-refundable.</Text>
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding py={10}>
                        <Text size={20} weight={600} color='#e30303' ta="center">Other Services</Text>
                    </Card.Section>
                    <Card.Section inheritPadding py={10} withBorder>
                        <Stack>
                            <Text size={15}>100% non-refundable if the hard copy of the agreement is not signed by you and duly returned to us.</Text>
                            <Text size={15}>100% non-refundable if you purchase & change your mind later and decide to withdraw.</Text>
                            <Text size={15}>100% non-refundable if you do not wish to continue with our services.</Text>
                            <Text size={16} weight={600} color='#0042aa'>100% non-refundable if:</Text>
                            <Text size={15}>Failure of the medical examination by the client or his/her family members included in the permit request.</Text>
                            <Text size={15}>Failure to provide a genuine Police Clearance Certificate which is not less than 3 months old.</Text>
                            <Text size={15}>Failure to prove sufficient funds for settlement or maintenance by the client or his/her family members included in the permit request.</Text>
                            <Text size={15}>Submission of fraudulent papers.</Text>
                            <Text size={15}>A prior violation of any immigration law by the client or any of his or her family members included in the permit request.</Text>
                            <Text size={15}>Late submission of any additional papers requested by the consulate at a later stage.</Text>
                            <Text size={15}>You may refer to the applicable refund terms specific to the product in the service agreement.</Text>
                            <Text size={15}>Opulenting Consulting reserves the right to not issue a refund as per our policies and in line with this agreement.</Text>
                            <Text size={15}>Refunds, if issued, will be processed within 30 days after you have filled in the refund request form and provided proof of rejection, if any.</Text>
                            <Text size={15}>By agreeing to our terms and conditions, you agree you will not ask for a chargeback under any circumstances.</Text>
                            <Text size={15}>Refunds for payments received will be issued as a company check. The refund check will be made payable to the person on the order form and mailed to the address indicated on the order form.</Text>
                            <Text size={15}>You hereby agree that you will not contact your Credit Card Company or bank to file a dispute as this will only delay the refund process.</Text>
                        </Stack>
                    </Card.Section>
                    <Card.Section inheritPadding py={10} >
                        <Text size={20} weight={600} color='#e30303' ta="center">Our Products and Services:</Text>
                    </Card.Section>
                    <Card.Section inheritPadding py={20} withBorder>
                        <Stack>
                            <Text size={15} ta="justify">Opulenting offers a technical evaluation service that will evaluate your profile for a selected country and let you know how many points have been scored. All reports are sent within 48 hours of sign-up if all information has been submitted in the form. The fee for an evaluation report is 100% non-refundable.</Text>
                            <Text size={16} weight={600} color='#0042aa' >Full of Service:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting offers only guidance and advice for immigration. All services are undertaken at a back office in India, and you hereby agree to this arrangement. The fee for full service is refundable only as per the conditions listed above.</Text>
                            <Text size={16} weight={600} color='#0042aa'>DIY Kits:</Text>
                            <Text size={15} ta="justify">
                                Opulenting Consulting offers downloadable DIY Kits (do-it-yourself guides). All DIY Kits available on our website are published by Opulenting. Kits are available for download for a fee. The fee is 100% non-refundable. All kits are designed for informational purposes only and should not be considered as legal advice. Copyright Information: DIY Kits are published by Opulenting and are protected by all international copyright laws. Legal action will be taken against anyone who attempts to copy or sell the same.
                            </Text>
                            <Text size={16} weight={600} color='#0042aa'>Directories:</Text>
                            <Text size={15}>Opulenting Consulting offers downloadable Directories of employers/placement agencies in a number of cities. All directories available on our website are published by Opulenting. These are available for download for a fee.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Copy Right Information</Text>
                            <Text size={15} >Directories are published by Opulenting and are protected by all international copyright laws. Legal action will be taken against anyone who attempts to copy or sell the same.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Requisition Forms</Text>
                            <Text size={15} ta="justify">Opulenting Consulting offers several types of requisition and inquiry forms for download as an additional service to our customers. Forms are available for a fee on a subscription basis.</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )   
}

export default Refundpolicywrapper