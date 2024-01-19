import { BackgroundImage, Button, Card, Center, Container, Grid, Group, Image, List, Stack, Text, ThemeIcon } from '@mantine/core'
import { IconArrowRight, IconPinFilled, IconPointFilled } from '@tabler/icons-react'
import React from 'react'
import breadcrumb1 from '../../../assets/breadcrumb-1.jpg'
import { Link } from 'react-router-dom'
import uscitizenshipnews from '../../../assets/uscitizenshipnews.jpg'
function Uscitizenshipcardnewswrapper() {
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
        <Text size={30} weight={600} color='white' ta="center">Job Openings</Text>
        <Text color='white' ta="center">Home / <Link to="#"> Us Citizenship Green Card</Link></Text>
      </Stack>
      <Container p={30}>
        <Card withBorder mt={20}>
          <Card.Section inheritPadding p={10}>
            <Text size={20} weight={700} ta="center" td="underline" color='#e30303'>US Citizenship & Green Card Applicants May Provide Social Media Details</Text>
          </Card.Section>
          <Card.Section inheritPadding withBorder p={10}>
            <Stack>
              <Grid>
                <Grid.Col md={6}>
                  <Image src={uscitizenshipnews} alt='image' />
                </Grid.Col>
                <Grid.Col md={6}>
                  <Stack>
                    <Text size={16} ta="justify">
                      The US Homeland Security Department (D.H.S) has taken the process of getting social media credentials (user name) a move forward.
                      It intends to extend its coverage to many forms that need to be filled in by those individuals who are now in the USA,
                      such as those appealing for a US green card or US citizenship.
                      A notice was issued in the Federal Register of USA on 4 September 2019 and public comments requested over the following 60 days.
                    </Text>
                  </Stack>
                </Grid.Col>
              </Grid>
              <Text size={16} ta="justify">Recently introduced plan, in the setting of applicability to the Indian community in the USA, will include citizenship appeals, appeals for status adjustment filed by those individuals in the US who are trying to get green cards (such as H-1B visa holders, or those on intra firm transfers holding a US L-1 visa). It will also appeal to holders of green card attempting re-entry permits (who want to reside away from the USA for 2 years), tells by immigration experts.</Text>
              <Text size={16} ta="justify">The plan for asking social media details of those who are already in the US is a vital improvement for the Indian community, who in rising numbers are choosing for green cards and US citizenship. While approximately 60,000 Indians received US green cards during the financial year ended 30 September 2017, approximately 50,000 received US citizenship during the same period.</Text>
              <Text size={16} ta="justify"> In another latest move, immigration officials of the USA are now authorized to build 'fictitious profiles or identities' to access the social media profiles of individuals who are appealing for US green cards, work visas, citizenship, etc. Records in the media of US reveal that Facebook has said that it does not allow the creation of false profiles and will not give any exemption to its rules. </Text>
              <Text size={16} ta="justify">Stay Updated with our newsletters to get the latest updates and information on immigration and visas. We request you to fill up the free assessment form presented by Opulentus to take the initial step for your Visa and Immigration Process.</Text>
              {/* style={{ color: '#0042aa' }} */}
             </Stack>
          </Card.Section>
        </Card>
      </Container>
    </>
  )
}

export default Uscitizenshipcardnewswrapper