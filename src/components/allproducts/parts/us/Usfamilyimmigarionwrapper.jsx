import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
function Usfamilyimmigarionwrapper() {
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
        <Text color='white' ta="center">Home / <Link to="#"> US Family Immigration</Link></Text>
      </Stack>
      <Container p={30}>
        <Card withBorder mt={20}>
          <Card.Section inheritPadding p={10}>
            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>OVERVIEW </Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p={10}>
            <Stack>
              <Stack>
                <Text size={17} weight={600} color='#0042aa'>Guidelines for US Family Immigration</Text>
                <Text size={16} ta="justify">
                  The H4 Visa is a family visa granted to the dependents (spouse and children) of individuals holding an H-1B Visa. It allows them to accompany the H-1B Visa
                  holder during their stay in the U.S.
                </Text>
                <Text size={16} weight={600} color='#0042aa'>Required Documents:</Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  listStyleType='disc'
                >
                  <List.Item>
                    <Text size={16} ta="justify"> Birth certificate (for children)
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Marriage certificate</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Copy of the principal applicant's H1 Visa</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Copy of the H1B visa holder's employment verification letter</Text>
                  </List.Item>
                </List>
                <Text size={16} ta="justify">
                  The visa fee for this category is $190 (Please note that the fee is subject to change without prior notice).
                  The H4 Visa enables family members to join and stay with the H-1B Visa holder while they work in the United States,
                  promoting family unity during their time in the country.
                </Text>
              </Stack>
              <Stack>
                <Text size={18} weight={700} ta="center" td="underline" color='#e30303'>ELIGIBILITY AND PROGRAM DETAILS</Text>
                <Text size={16} weight={600} color='#0042aa'>Details of USA H4 Visa</Text>
                <Text size={16} ta="justify">U.S. citizens who are at least 21 years old have the opportunity to sponsor their parents (either father or mother) to live with them in the United States through a green card application. Permanent residents (green card holders) are not eligible to petition for their parents to become permanent residents in the United States.</Text>
                <Text size={16}>Required Documents for the Visa Application:</Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                 listStyleType='disc'
                >
                  <List.Item>
                    <Text size={16} ta="justify"> Copy of your birth certificate indicating your name and your parent's name
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Valid passport</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Sponsorship Agreement by the U.S. citizen petitioner</Text>
                  </List.Item>
                </List>
                <Text size={16} ta="justify">The visa application fee is $420. It's important to note that visa fees are subject to change without prior notice. The H4 Visa allows eligible parents of U.S. citizens to reunite with their adult children and live together in the United States, fostering family unity within the country.</Text>
              </Stack>
              <Stack>
                <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>Siblings brought as Permanent Resident to the USA</Text>
                <Text size={16} weight={600} color='#0042aa'>Green Card Holder Family (Permanent Residents)</Text>
                <Text size={16} ta="justify">The Green Card Holder Family Visa is a U.S. family visa that permits individuals who hold a Green Card (permanent resident status)
                  to sponsor specific family members for permanent residency in the United States. Family members who can be sponsored include a spouse
                  (husband or wife) and unmarried children below the age of 21.</Text>
                <Text size={16} color='#0042aa' weight={600}>Required Documents for the Visa Application:</Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                 listStyleType='disc'
                >
                  <List.Item>
                    <Text size={16} ta="justify"> Proof of your status as a U.S. permanent resident (Green Card holder)
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Evidence of the qualifying relationship, such as a marriage certificate or birth certificate</Text>
                  </List.Item>
                  <List.Item>
                    <Text size={16} ta="justify">Documentation supporting any legal change of name for either you or your family member (if applicable)</Text>
                  </List.Item>
                </List>
                <Text size={16} ta="justify">The visa application fee is $420. Please note that visa fees are subject to change without prior notice.
                  This visa category enables Green Card holders to unite with their immediate family members by facilitating their permanent
                  residency in the United States, fostering family togetherness within the country.</Text>
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
                  size="sm"
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

export default Usfamilyimmigarionwrapper