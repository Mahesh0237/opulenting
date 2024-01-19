import { BackgroundImage, Card, Center, Container, Stack, Text } from '@mantine/core'
import React from 'react'
import breadcrumb1 from './../assets/products.jpg'
import { useViewportSize } from '@mantine/hooks';
function Copyrightwrapper() {
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
                <Text size={newsize} weight={600} color='white' ta="center">Copy Right</Text>
                <Text className='policy'></Text>
            </Stack>
            <Container py={30}>
                <Card withBorder >
                    <Card.Section inheritPadding py={10}>
                        <Text size={20} weight={600} color='#e30303' ta="center">Copyright Information</Text>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py={10}>
                        <Stack>
                            {/* <Text size={18} weight={600} >Opulenting Consulting Refund and Cancellation Policy:</Text> */}
                            <Text size={15} ta="justify">Thank you for choosing Opulenting Consulting for your immigration and visa needs. We value your trust and would like to inform you about our refund and cancellation policy. Please read the following terms and conditions carefully:</Text>
                            <Text size={16} weight={600} color='#0042aa'>Early Service Withdrawal:</Text>
                            <Text size={16}>Opulenting Consulting does not issue refunds for early service withdrawal under any circumstances.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Refund Percentage:</Text>
                            <Text size={15} ta="justify">Refund percentages mentioned apply only to the full-service fee paid and not to partial payments. Refund percentages are applicable only if the complete fee of the product is paid without any balance. Even if clients fall under specific clauses or have not paid the complete full-service fee, they would not be eligible for the refund percentage.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Immigration Pronouncements:</Text>
                            <Text size={15} ta="justify">At times, immigration pronouncements are based on future expectations, and clients are registered in advance to meet the cap system requirements. Clients acknowledge and agree to this practice to avoid last-minute rush and ensure readiness as per the immigration authorities' requirements. If a client's profile is deemed ineligible after the announcement, they can choose to transfer to other opportunities.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Zero-Tolerance Policy for Chargebacks:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting has a zero-tolerance policy for chargebacks. Any customer who disputes a valid credit card payment will be permanently blacklisted and barred from using our services. Past due fees and costs will be sent to collections, and unpaid debts may be reported to Credit Reporting Agencies.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Invoice Amount and Tax:</Text>
                            <Text size={15} ta="justify">The total invoice amount (bill value) includes Opulenting Consulting's consultation fee and applicable tax. However, the refund will be calculated only on the consultation fee. The tax component is non-refundable at any stage. Rejection by Immigration Authorities: </Text>
                            <Text size={15} ta="justify">In case of rejection by the Immigration Authorities, Opulenting Consulting will refund the applicable amount as stated in the agreement. The refund will be processed within 15-30 working days after the client fills the Online Refund Claim Form and provides a copy of the rejection letter from the Authority. Failure to enclose the rejection letter or rejection stamp on the client's passport will result in the inability to process a refund.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Third-Party Delays:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting is not responsible for any delays caused by third-party services, and clients cannot claim a refund of service charges due to such delays.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Fees Paid to Assessing Bodies and Authorities:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting is not responsible for refunding any fees or amounts paid to Assessing Bodies, Immigration Authorities, or Embassy/Consulate/High Commission if the client does not get approval for immigration or if there is rejection or non-acceptance of the client's request by any respective authority. The fees charged by Opulenting Consulting cover the services rendered by the company and do not include any request or assessing fees. Clients are responsible for paying any additional fees as applicable.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Payment Modes and Chargeback Policy:</Text>
                            <Text size={15} ta="justify">If the client has made the payment through an online card service, they agree not to withdraw or initiate a chargeback without the knowledge of Opulenting Consulting, except as mentioned in the refund norms and prescribed procedure under the jurisdiction of Hyderabad, State of Telangana. Clients who have paid via Credit Card or Net Banking undertake not to dispute the payment or notify their bank for a chargeback, except in exceptional cases where the payment was made fraudulently or in case of card loss. The client agrees to cooperate with Opulenting Consulting in such cases if representation is required before any bank or authority.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Service Charges and Expensive Claims:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting's service charges are as per company standards, and any claims regarding charges being too expensive or similar issues raised after registration will not be entertained. Clients are informed about the charges through various sources of information before registering.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Adequate Funds and Eligibility:</Text>
                            <Text size={15} ta="justify">Clients understand that immigration may require showing sufficient funds, which vary from country to country and based on the client's chosen pathway/category. Clients undertake to meet the financial requirements as desired by the immigration/other authorities, and failure to provide sufficient funds will not make Opulenting Consulting liable for any refund of service charges. In such cases, no refund requests for service charges will be entertained.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Nullification of Previous Registrations:</Text>
                            <Text size={15} ta="justify">All registrations made with Opulenting Consulting before the client declaration agreement date will be nullified, and no claims or fee requests can be made unless provided in writing by Opulenting Consulting.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Grounds for Permit Rejection:</Text>
                            <Text size={15} ta="justify">No refund will be made if the permit is rejected due to the client's failure to attend an interview, failure of medicals by the client or family members, non-compliance with the requirements of the Embassy or Consulate, failure to provide a genuine Police Clearance Certificate, insufficient funds for settlement, prior violation of immigration laws, late submission of additional papers requested by the consulate, failure to achieve the required English language test score, abandonment of the case within 3 months of registration, or non-communication with the consultant for 3 months.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Liability of Fees Paid:</Text>
                            <Text size={15} ta="justify">Fees paid to authorities or other institutions are the client's liability and are not included in the service charges. Opulenting Consulting will not entertain any claims for a refund in case of rejection.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Submission of Documents and Failure:</Text>
                            <Text size={15} ta="justify">The client must submit all required documents, forms, and information within 30 days to enable Opulenting Consulting to work on the request and make it submit-ready. Failure to do so indicates no outstanding reimbursement of the advisory/consulting fee provided to Opulenting Consulting.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Communication and Reporting:</Text>
                            <Text size={15} ta="justify">The client must promptly notify Opulenting Consulting of all communications received from the office within a week of receiving such communication. Additionally, the client must notify Opulenting Consulting of all communications undertaken directly with the involved immigration authorities within a week of such contact. Failure to comply indicates no outstanding refund of any secretarial charges.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Interview Attendance and Compliance:</Text>
                            <Text size={15} ta="justify">The client must participate in all required interviews as requested by the relevant agency, at the specified location and at their own cost. Failure to comply indicates no outstanding refund of any secretarial charges.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Error in Request Fee or Payment Mode:</Text>
                            <Text size={15} ta="justify">If the request or petition is returned, rejected, or delayed due to an error in the request fee or mode of payment, the client agrees not to contest the withdrawal of their request on this ground. The payment and mode of payment are the client's sole responsibility.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Additional Papers and Refund Requests:</Text>
                            <Text size={15} ta="justify">The submission of a request for immigration is not generic, routine, or time-bound. The case officer may request additional papers as per the changing requirements, and refund requests based on this ground will not be entertained.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Withdrawal and Transfer of Fee:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting will not refund or transfer the fee to a friend or relative if the client abandons their case or decides to opt out for personal reasons during the proceedings.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Provision of Information and Accuracy:</Text>
                            <Text size={15} ta="justify">The client must provide all necessary information and documents, including accurate translations, as required by Opulenting Consulting and the relevant office. Opulenting Consulting relies on the facts and documents provided by the client. Any inaccurate, fake, deficient, or incorrect details will not be entertained, and Opulenting Consulting will not be responsible for any negative impact or rejection based on such information. No refund will be claimed in such situations.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Termination of Services:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting has the right to terminate or withdraw its services without refunding the client's service fee if the client fails to submit all required documents within the stipulated time, tries to malign the company's name</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Copyrightwrapper