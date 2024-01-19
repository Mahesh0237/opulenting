import { Button, Card, Group, List, Stack, Text } from '@mantine/core'
import React from 'react'

function Phpdeveloperjobdesc() {
  return (
    <Card withBorder>
      <Card.Section inheritPadding withBorder py="md">
        <Group position='center'>
          <Text size={18} weight={600} color='#0c4aae'>PHP DEVELOPER</Text>
        </Group>
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <Stack>
          <Text size={15} ><Text weight={600} component='span'>Location: </Text>Germany</Text>
          <Text size={15}><Text component='span' weight={600}>Type:</Text> Contract – Minimum 2 Years</Text>
          <Text size={15}><Text weight={600} component='span'>Experience:</Text> 8 - 10 Years </Text>
          <Text size={15}>
            Our company is seeking a skilled and motivated PHP Developer to join our development team.
            As a PHP Developer, you will be responsible for designing, developing, deploying, and maintaining web applications
            that deliver exceptional user experiences. The ideal candidate has a solid background in PHP development and is familiar
            with modern web development practices.
          </Text>
          <Text weight={600} size={15}>Primary Responsibilities:</Text>
          <List listStyleType="disc">
            <List.Item>Develop and maintain web applications using PHP, MySQL, and other related technologies.</List.Item>
            <List.Item>Collaborate with cross-functional teams including designers and front-end developers to create intuitive and user-friendly interfaces.</List.Item>
            <List.Item>Write clean, efficient, and well-documented code following best practices. </List.Item>
            <List.Item>Troubleshoot, debug, and optimize code to ensure high performance and reliability.</List.Item>
            <List.Item>Participate in code reviews to maintain code quality and share knowledge.</List.Item>
            <List.Item>Work within an Agile environment to deliver projects on time and meet project requirements.</List.Item>
            <List.Item>Stay up-to-date with the latest trends and advancements in web development technologies.</List.Item>
          </List>
          <Text weight={600} size={15}>Required Skills:</Text>
          <List listStyleType="disc">
            <List.Item>8+ years of professional experience in PHP web development.</List.Item>
            <List.Item>Strong understanding of PHP and related frameworks (e.g., Laravel, Symfony).</List.Item>
            <List.Item>Proficiency in front-end technologies such as HTML, CSS, and JavaScript.</List.Item>
            <List.Item>Experience working with databases and writing complex SQL queries.</List.Item>
            <List.Item>Familiarity with version control systems (e.g., Git).</List.Item>
            <List.Item>Previous experience in an Agile development environment.</List.Item>
            <List.Item>Excellent problem-solving skills and attention to detail.</List.Item>
            <List.Item>Effective communication skills and the ability to work collaboratively in a team.</List.Item>
          </List>
          <Text weight={600} size={15}>Preferred Skills:</Text>
          <List listStyleType='disc'>
            <List.Item>
              Experience with other web development languages and frameworks.
            </List.Item>
            <List.Item>
              Knowledge of RESTful API design and integration.
            </List.Item>
            <List.Item>
              Understanding of web security concepts.
            </List.Item>
            <List.Item>
              Exposure to cloud platforms such as AWS or Azure.
            </List.Item>
            <List.Item>
              Familiarity with DevOps practices and tools.
            </List.Item>
          </List>
          <Text weight={600} size={15}>Nice to Have:</Text>
          <List listStyleType='disc'>
            <List.Item>Previous exposure to e-commerce platforms.</List.Item>
            <List.Item>Familiarity with content management systems (CMS). </List.Item>
            <List.Item>Knowledge of mobile app development using PHP.</List.Item>
            <List.Item>Experience with containerization technologies (e.g., Docker).</List.Item>
          </List>
          <Text weight={600} size={15}>Proven Experience In:</Text>
          <List>
            <List.Item>Developing and maintaining PHP-based web applications.</List.Item>
            <List.Item>Collaborating with cross-functional teams.</List.Item>
            <List.Item>Writing clean and efficient code.</List.Item>
            <List.Item>Troubleshooting and optimizing code for performance.</List.Item>
          </List>
          <Group position='center'>
            <Button variant='gradient' radius="lg">Apply Now</Button>
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  )
}

export default Phpdeveloperjobdesc