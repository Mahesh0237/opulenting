import { Button, Card, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'

function Dotnetdeveloperjobdesc() {
  return (
    <Card withBorder>
      <Card.Section inheritPadding withBorder py="md">
        <Group position='center'>
          <Text size={18} weight={600} color='#0c4aae'>.NET DEVELOPER</Text>
        </Group>
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <Stack>
          <Text size={15} ><Text weight={600} component='span'>Location: </Text>Australia</Text>
          <Text size={15}><Text component='span' weight={600}>Type:</Text> Contract – 2 Year minimum</Text>
          <Text size={15}><Text weight={600} component='span'>Experience:</Text> 5 - 6 Years </Text>
          <Text size={15}>This .NET (Azure) Developer is responsible for, but not limited to building, deploying and maintaining a custom application portfolio that spans all areas for our client.</Text>
          <Text weight={600} size={15}>Must Have Primary Skills :</Text>
          <List listStyleType="disc">
            <List.Item>5+ years full-stack development with C#, .NET and .NET Core.</List.Item>
            <List.Item>3+ years of hands-on experience with HTML, CSS, JavaScript required.</List.Item>
            <List.Item>Previous experience in an Agile environment required. </List.Item>
            <List.Item>Knowledge of database design, complex queries and optimization required.</List.Item>
            <List.Item>Experience with a modern front-end framework like Vue, Angular or React preferred.</List.Item>
            <List.Item>Knowledge of security concepts such as TLS, Certificate management, OAuth/OIDC preferred.</List.Item>
          </List>
          <Text weight={600} size={15}>Nice to Have Secondary Skills:</Text>
          <List listStyleType="disc">
            <List.Item>Exposure to Azure serverless development is an asset.</List.Item>
            <List.Item>Manufacturing and/or engineering industry knowledge is an asset.</List.Item>
            <List.Item>Previous knowledge or experience integrating with SAP is an asset.</List.Item>
          </List>
          <Text weight={600} size={15}>Proven Experience In:</Text>
          <List listStyleType='disc'>
            <List.Item>
              Strong leadership skills is a must!
            </List.Item>
            <List.Item>
              Build, deploy and maintain C#, .NET and .NET Core applications and Web APIs.
            </List.Item>
            <List.Item>
              Configure and maintain application components in Azure such as Service Bus, App Service/Cloud Services, Azure SQL, Functions.
            </List.Item>
            <List.Item>
              Assist in design and implementation of UI and front-end HTML/CSS/JavaScript components.
            </List.Item>
            <List.Item>
              Manage and plan work using Azure DevOps and Remedy Force.
            </List.Item>
            <List.Item>
              Build and maintain Azure DevOps deployment pipelines, builds, releases and repositories.
            </List.Item>
            <List.Item>
              Write unit tests in alignment with project test/QA strategy.
            </List.Item>
            <List.Item>
              Contribute to a high performing Agile team through pair-programming and a team-first approach.
            </List.Item>
            <List.Item>
              Suggest and implement application improvements in areas such as architecture, coding standards and performance.
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

export default Dotnetdeveloperjobdesc