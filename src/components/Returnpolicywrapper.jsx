import { BackgroundImage, Card, Center, Container, Stack, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import React from 'react'
import { Link } from 'react-router-dom'
import breadcrumb1 from './../assets/products.jpg'
function Returnpolicywrapper() {
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
                <Text size={newsize} weight={600} color='white' ta="center">Return Policy</Text>
                <Text className='policy'></Text>
            </Stack>
            <Container py={30}>
                <Card withBorder >
                    <Card.Section inheritPadding py={10}>
                        <Text size={20} weight={600} color='#e30303' ta="center">Return Policy</Text>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py={10}>
                        <Stack>
                            <Text size={16} weight={600} color='#0042aa'>Payments to Opulenting Consulting:</Text>
                            <Text size={15} ta="justify">
                                When you make a payment to Opulenting Consulting, you have the right to request a receipt. Opulenting Consulting issues receipts for all payments made to the company. An acknowledgment of payments made to Opulenting Consulting is sent through our central software. If you have any inquiries regarding payments to Opulenting Consulting, please send an email to <Link to="#">help@opulenting.com</Link>.
                            </Text>
                            <Text size={16} weight={600} color='#0042aa'>Payments to Opulenting Consulting staff:</Text>
                            <Text size={15} ta="justify">We caution you against making any additional payments to any Opulenting Consulting employee. If any Opulenting Consulting staff member offers to fabricate your profile or provide any documents for an additional fee, we strongly advise you to inform the management so that appropriate action can be taken against the employee. Please note that the company is not liable if you enter into any verbal or written agreement with an Opulenting Consulting employee or their reference. Opulenting Consulting cannot be held responsible for any consequences resulting from any additional services paid for to any Opulenting Consulting employee.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Vendors referred by Opulenting Consulting staff:</Text>
                            <Text size={15} ta="justify">We strongly discourage you from availing services from vendors suggested by any Opulenting Consulting employee, as this is not endorsed or permitted by the company. Engaging with such vendors puts you at risk of fraud. Opulenting Consulting is not responsible for any vendors referred by an Opulenting Consulting employee, nor are we liable for any charges you have paid to them.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Fraudulent Documentation:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting does not engage in cases involving fraudulent documentation or information. We accept your case based on the information you have provided, assuming it to be true. Opulenting Consulting is not liable if you have provided incorrect, misleading, or fraudulent documentation or information.</Text>
                            <Text size={15} ta="justify">Opulenting Consulting strictly warns its employees against engaging in illegal practices and enforces adherence to the company's policies. In the event of any employee violating company policy, Opulenting Consulting is not responsible or liable, as our policy is based on accepting cases where the provided information is 100% accurate.</Text>
                            <Text size={15} ta="justify" >To avoid deception and being denied entry into foreign countries, please consider the following:</Text>
                            <Text size={15} ta="justify">Do not be misled by dishonest Opulenting Consulting staff members who suggest submitting forged documents with your application. Such applications will be refused, and you may face further investigation from the authorities. Please note that Opulenting Consulting does not handle documentation or visa processing for candidates.</Text>
                            <Text size={15} ta="justify">Do not believe Opulenting Consulting staff members who claim that, in exchange for money or favors, they can influence the speed of application processing or the final decision. They do not possess such capabilities. Visa decisions are solely made by authorized visa officers of the respective countries. Do not be fooled by individuals impersonating visa officers from embassies. Legitimate visa officers do not meet applicants outside their official place of work, nor do they contact you to request money. </Text>
                            <Text size={15} ta="justify">Beware of fake websites designed to resemble official government websites or service delivery partner websites. Always obtain visa information from official government websites.</Text>
                            <Text size={15} ta="justify">Guard against job or visa scams. Many people fall victim to offers of overseas jobs that do not actually exist. Exercise caution and carefully consider your decision before providing money, passport, or personal details. Note: If a job offer sounds too good to be true, it could be a scam.</Text>
                            <Text size={15} ta="justify">Unscrupulous staff members may advise you to provide fake documentation or engage in convenient arrangements. Do not be deceived. Your investment will be lost, and you may face legal consequences, as well as potential denial of entry to the country you have applied to.</Text>
                            <Text size={15} ta="justify">Countries like the USA, UK, Australia, and Canada welcome genuine visitors, students, and work immigrants. These countries' immigration agencies do not tolerate abuse of the immigration system and have a zero-tolerance policy towards fraud. Immigration authorities employ effective methods to detect fraud and collaborate with international partners, including Indian authorities, to combat it. When fraudulent activities are uncovered, including the submission of false education and language certificates, visas will be refused, and applicants may face a ten-year visa ban, along with possible legal action by the Indian authorities.</Text>
                            <Text size={15} ta="justify">Fraud is a criminal offense in the USA, Australia, Canada, and the UK, and those involved can face severe penalties. However, ultimately, the responsibility for a visa application lies with the applicant. Providing fraudulent documents or misleading information can lead to severe consequences, not only for the staff but also for the applicant. Applicants must safeguard themselves from immigration fraud by being aware of potential attempts to take advantage of their situation.</Text>
                            <Text size={15} ta="justify">Opulenting Consulting Management strongly advises against engaging in any form of fraud or misrepresentation of your profile.</Text>
                            <Text size={15} ta="justify">Please be aware that submitting fraudulent documentation to a visa issuing authority will result in a ban from the country for a minimum of 10 years.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Jobs:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting is a licensed recruitment agency in India and collaborates with overseas employers and placement agencies for recruiting candidates, charging them a fee. Opulenting Consulting does not guarantee jobs or charge candidates for job placement. If any Opulenting Consulting employee attempts to do so, please contact us immediately.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Guarantees:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting does not guarantee any candidate a job or a visa. No employee of Opulenting Consulting is authorized to make such guarantees. We provide counseling and guidance to candidates regarding immigration and overseas careers. Visa decisions are at the discretion of visa officers and immigration departments/embassies or consulates, while job offers are solely at the discretion of employers. No one can influence these decisions, and if an Opulenting Consulting employee promises otherwise, please contact us immediately.</Text>
                            <Text size={15} ta="justify">If you have any grievances or complaints, please contact our customer relationship department at help@Opulenting.com</Text>
                            <Text size={16} weight={600} color='#0042aa'>About Website:</Text>
                            <Text size={15} ta="justify">ABOUT THIS WEBSITE: There are disclaimers throughout our website stating that Opulenting Consulting (this website) is an independent entity. </Text>
                            <Text size={16} weight={600} color='#0042aa'>Affiliation:</Text>
                            <Text size={15} ta="justify">Opulenting is not affiliated with any government or government agency for permits. Opulenting provides immigration guidance and concierge services for immigration and charges a service fee. It maintains <Link to="/">www.opulenting.com</Link>, a private publishing website that offers general information on issues related to immigration/permits. Opulenting is neither a legal firm nor does it provide any kind of legal advice or suggestions to its users. The information presented on our website should be used for reference purposes only and not as a substitute for professional advice. We do not provide legal advice, opinions, or recommendations to our users about their legal rights, legal remedies, legal defenses, legal options, or legal strategies. Any purchase made using this website is subject to Opulenting' Terms of Use, to which, by using this site and/or making any purchase, you are agreeing to be bound.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Certifications:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting has passed rigorous background checks that ensure our validity and overall legitimacy of our business.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Intellectual property rights:</Text>
                            <Text size={15} ta="justify">Except where stated otherwise, Opulenting Consulting is the copyright holder of all content, layout, design, data, graphics, trademarks, and logos under the <Link to="/"> www.opulenting.com</Link>. The content is protected by India and international copyright laws. Opulenting Consulting will do its utmost to protect the rights of employees, customers, members, and intellectual property rights. We will not hesitate to take legal action if necessary.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Limitation of liability:</Text>
                            <Text size={15} ta="justify">Opulenting Consulting shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this website, or the performance of the products, even if Opulenting Consulting has been advised of the possibility of such damages. Applicable law may not allow the limitation or exclusion of liability, or incidental or consequential damages; thereby the above limitation or exclusion may not apply to you.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Legal Form and Choice of Law:</Text>
                            <Text size={15} ta="justify">By using our website and purchasing products or services, you have entered into a legal contract with Opulenting Consulting. You agree that the prevailing party in a civil lawsuit may be awarded reasonable attorney’s fees.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Personal Use Limitation:</Text>
                            <Text size={15} ta="justify">The information, news, articles, emails, products, and services provided by Opulenting Consulting are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, or other content, products, or services obtained from Opulenting Consulting without express written permission from us.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Typographical Errors:</Text>
                            <Text size={15} ta="justify">In the event that an Opulenting Consulting product or service is mistakenly listed at an incorrect price, we reserve the right to refuse or cancel any orders listed at the incorrect price. Opulenting Consulting reserves the right to refuse or cancel any such orders, whether or not the order has been confirmed and your credit card charged. In the event your credit card has been charged, a full refund will be issued in the amount of the incorrect price.</Text>
                            <Text size={16} weight={600} color='#0042aa'>Opulenting Newsletter:</Text>
                            <Text size={15} ta="justify"><Link to="/">www.opulenting.com</Link> (this website) provides a free newsletter. This is an Opt-Out service, which means that the user has the option of removing their email address from the newsletter at any time. An unsubscribe page is available to users for this purpose. Your email will never be shared with any third party.</Text>
                            <Text size={16} weight={600} color='#0042aa' td="underline">Links:</Text>
                            <Text size={15} ta="justify">This website contains hyperlinks that may take you outside <Link to="/">www.opulenting.com</Link>. Links are made available for your convenience. However, the inclusion of any link does not imply endorsement or approval by Opulenting Consulting. We are not responsible for any links to and from <Link to="/">www.opulenting.com</Link>. The framing of our website at any level is prohibited.</Text>
                        </Stack>
                    </Card.Section>
                </Card>
            </Container>
        </>
    )
}

export default Returnpolicywrapper