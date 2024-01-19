import { BackgroundImage, Card, Center, Container, Stack, Text } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks';
import React from 'react'
import breadcrumb1 from './../assets/products.jpg'
function Privacypolicywrapper() {
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
        <Text size={newsize} weight={600} color='white' ta="center">Privacy Policy</Text>
        <Text className='policy'></Text>
      </Stack>
      <Container py={30}>
        <Card withBorder >
          <Card.Section inheritPadding py={10}>
            <Text size={20} weight={600} color='#e30303' ta="center">Privacy Policy</Text>
          </Card.Section>
          <Card.Section withBorder inheritPadding py={10}>
            <Stack>
              <Text size={15} ta="justify">
                Opulenting Consulting acknowledges the paramount importance of maintaining complete confidentiality. We treat any personal information and/or proprietary business material disclosed to us with utmost discretion. All information provided by our prospective clients is strictly confidential and accessed only on a need-to-know basis.
              </Text>
              <Text size={15} ta="justify">We take measures to protect this information, ensuring that it is kept secure and used solely by our trained staff for the purpose of the work you have engaged our office to perform. Your email address will not be used for any other purpose without your consent, and we will not disclose it to any third party. Rest assured that your information is never utilized for marketing, solicitation, or sold to anyone for such purposes.</Text>
              <Text size={15} ta="justify">Opulenting Consulting never shares your information with any individual or organization except the government agencies involved in your immigration process (e.g., Australian Immigration Authorities, DIAC, or the Home Office, UK, etc.). If you wish to receive our newsletter, catalog, or updates on our new products and services, you can register on our website. However, your information will only be used for this purpose if you have provided us with your explicit consent.</Text>
              <Text size={15} ta="justify">Our website incorporates security measures to safeguard against the loss, misuse, and alteration of information under our control. We employ encryption for all personal and financial data, making every effort to prevent unauthorized access as the information travels over the Internet. While we are committed to protecting your information, we cannot guarantee the absolute security of any data transmitted to us.</Text>
              <Text size={15} ta="justify">The website may provide links to third-party websites and access to content, products, and services offered by third parties, including users, advertisers, affiliates, and sponsors. Please note that Opulenting Consulting is not responsible for the availability of such third-party websites or the content they provide. We encourage users to review the privacy policies and terms of use posted on these websites before engaging with them. Opulenting Consulting assumes no liability for any loss or damage incurred by users in their interactions with third parties.</Text>
              <Text size={15} ta="justify">Our Privacy Policy and Terms and Conditions are subject to change. We advise clients to regularly check our website for any recent updates. The current Privacy Policy applies to all information we have about you and your account, unless otherwise stated.</Text>
            </Stack>
          </Card.Section>
          <Card.Section inheritPadding p={10}>
            <Text size={20} weight={600} color='#e30303' ta="center">Mobile Apps</Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p={10}>
            <Stack>
              <Text size={15} ta="justify">When you install our Applications, we will request the following permissions:</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Location access:</Text> This allows users to share their location in order to display nearby Opulenting Consulting Centres/Institutes. If users grant permission to share their location, nearby Centres/Institutes will be shown; otherwise, the default view will be displayed.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Storage access:</Text> We require access to the device's storage to enable users to store Test Sheets, Answer Sheets, and Performance Reports for viewing their test analysis.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Device Camera access:</Text> This permission is necessary to obtain the user's profile image for display on the Profile page, user listings on the website analytics, or capturing Subjective Test Sheets, which are then shared with tutors for evaluation.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Device Microphone access:</Text> This permission is used to record audio for Speaking Tests.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Identity access:</Text> We request access to auto-fill the Gmail account on the device, expediting the user sign-up process.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Photos/Media/Files access:</Text> This permission allows users to select a profile picture from their device's gallery.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>SMS access:</Text> This permission facilitates auto-filling of OTP through SMS, ensuring a swift sign-up process.</Text>
              <Text size={15} ta="justify"><Text component='span' weight={600} color='#0042aa'>Device ID & Call Information access:</Text> We require access to the Device ID of the user's device to identify and address device-specific bugs, thereby enhancing user experience.</Text>
              <Text size={15} ta="justify">For further details, please feel free to contact one of our experts or email us at help@Opulenting.com. Our representatives will respond to your inquiry promptly.</Text>
            </Stack>
          </Card.Section>
        </Card>
      </Container>
    </>
  )
}

export default Privacypolicywrapper