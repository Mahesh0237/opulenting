import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Swedendependentvisawrapper() {
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
        <Text color='white' ta="center">Home / <Link to="#"> Sweden Dependent Visa</Link></Text>
      </Stack>
      <Container p={30}>
        <Card withBorder mt={20}>
          <Card.Section inheritPadding p={10}>
            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW</Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p={10}>
            <Stack>
              <Text size={16} color='#0042aa' weight={600}>Dependent Visa Application to Sweden</Text>
              <Text size={16} ta="justify">
                The Sweden Dependent Visa is specifically designed for the immediate family members of individuals who hold valid Swedish Citizenship or Permanent Residence Permit.
              </Text>
              <Text size={16} ta="justify">
                The family member sponsoring the dependent must be above 18 years of age.
              </Text>
              <Text size={16} ta="justify">Immediate family members are required to possess a Sweden Dependent Visa or a Residence Permit in Sweden as a dependent family member intending to relocate to Sweden.</Text>
              <Text size={17} color='#0042aa' weight={600}>Immediate family members include:</Text>
              <Text size={16} ta="justify">Visa applicants seeking to join as a spouse, common-law partner, or registered partner

                Children under 18 years of age accompanying their parents</Text>
              {/* style={{ color: '#0042aa' }} */}
              <Stack>
                <Text size={20} weight={700} ta="center" td="underline" color='#e30303' mt={20}>PROGRAM DETAILS</Text>
                <Text size={17} color='#0042aa' weight={600}>Documents Required for Sweden Dependent Visa Application:</Text>
                <Text size={16} >Individuals applying for the Sweden Dependent Visa are required to provide the following documents:</Text>
                <List listStyleType='disc' spacing="xs" size="md" withPadding>
                  <List.Item>
                    <Text size={16}>Valid passport</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Sponsorship from the main applicant</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Income Tax Returns and Pay slips for the last three years</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Family certificate (personbevis) or civic registration of the family member if they are already residing in Swedenk</Text>
                  </List.Item>
                </List>
              </Stack>
              <Stack>
                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>DOCUMENTS REQUIRED FROM MARRIED COUPLES</Text>
                <Text size={16} color='#0042aa' weight={600}>If you are married, you need to provide the following documents:</Text>
                <List listStyleType='disc' spacing="xs" size="md" withPadding>
                  <List.Item>
                    <Text size={16}>Wedding or marriage certificate</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Proof of marriage registration in your country of origin</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Evidence of national registration, confirmation of sale or rental contract for your joint residence, or any other document showing you have lived together</Text>
                  </List.Item>
                </List>
              </Stack>
              <Stack>
                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>UNMARRIED COUPLES</Text>
                <Text size={16} color='#0042aa' weight={600}>If you are an unmarried couple, you need to provide the following documents:</Text>
                <List listStyleType='disc' spacing="xs" size="md" withPadding>
                  <List.Item>
                    <Text size={16}>Proof of national identity or any document that could prove that you are not married</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Proof of national registration, confirmation of sale or rental contract for your joint residence, or any other document showing you have lived together</Text>
                  </List.Item>
                </List>
              </Stack>
              <Stack>
                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>CHILDREN BELOW AGE 18 YEARS</Text>
                <Text size={16} color='#0042aa' weight={600}>For children below the age of 18 years applying for the Sweden Dependent Visa, you need to provide:</Text>
                <List listStyleType='disc' spacing="xs" size="md" withPadding>
                  <List.Item>
                    <Text size={16}>Kinship or birth certificate.</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16}>Written consent of the custodian of the child. In the case of only one custodian, you must attach a document indicating the fact.</Text>
                  </List.Item>
                </List>
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

export default Swedendependentvisawrapper