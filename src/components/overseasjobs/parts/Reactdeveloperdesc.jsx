import { Button, Card, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'

function Reactdeveloperdesc() {
  return (
    <Card withBorder>
      <Card.Section inheritPadding withBorder py="md">
        <Group position='center'>
          <Text size={18} weight={600} color='#0c4aae'>REACT JS DEVELOPER</Text>
        </Group>
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <Stack>
          <Text size={15} ><Text weight={600} component='span'>Location: </Text>Canada</Text>
          <Text size={15}><Text component='span' weight={600}>Type:</Text> Contract – 2 Year minimum</Text>
          <Text size={15}><Text weight={600} component='span'>Experience:</Text> 6 - 8 Years </Text>
          <Text size={15}>The client is seeking an experienced React Developer to assist in all phases of the software development life cycle, including product research, software architecture, design, construction, testing, implementation and support.</Text>
          <Text weight={600} size={15}>Must Have Primary Skills :</Text>
          <List listStyleType="disc">
            <List.Item>Fluency in standard web technologies acquired by hands-on experience – HTML, CSS, JavaScript, etc.</List.Item>
            <List.Item>Over 3 years of experience and strong knowledge of and with HTML5 and the React framework</List.Item>
            <List.Item>Working knowledge of Bootstrap 5, Tailwind Css, and Nextjs </List.Item>
            <List.Item>Familiarity with version control and management systems (Jenkins, npm, Git, SVN)</List.Item>
            <List.Item>Excellent written and spoken communication skills are essential</List.Item>
          </List>
          <Text weight={600} size={15}>Nice to Have Secondary Skills:</Text>
          <List listStyleType="disc">
            <List.Item>Ability to read feature specifications and determine how to implement them</List.Item>
            <List.Item>Ability to read software requirement documents and produce technical specifications</List.Item>
            <List.Item>Familiarity with Python would be a plus</List.Item>
          </List>
          <Text weight={600} size={15}>Proven Experience In:</Text>
          <List listStyleType='disc'>
            <List.Item>
              Participation in all phases of the software development life cycle, including product research, software architecture, design, construction, testing, Api integration and support.
            </List.Item>
            <List.Item>
              Design and implement assigned components of the architecture or application according to provided software requirements or specifications.
            </List.Item>
            <List.Item>
              Participate in the testing of the system, including unit testing, functional testing, performance testing and installation testing
            </List.Item>
          </List>
          <Text weight={600} size={15}>Skills:</Text>
          <List listStyleType='disc'>
            <List.Item>
              Must Have at least 5 years of experience with/in HTML/CSS/Bootstrap/React JS
            </List.Item>
            <List.Item>
              Operating Systems
            </List.Item>
            <List.Item>
              Must Have at least 5 years of experience with/in Express.js, Node Js
            </List.Item>
            <List.Item>
              Industry experience required: Telecommunications
            </List.Item>
          </List>
          <Group position='center'>
            <Button variant='gradient' radius="lg">Apply Now</Button>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  )
}

export default Reactdeveloperdesc