import React from 'react'
import { Card, Grid, Text } from '@mantine/core'
import Enquireyform from './Enquireyform'
import Testimonialreviews from './Testimonialreviews'

function Walkinwrapper({ employeeName, activeTab, userid }) {
    return (
        <Card.Section inheritPadding py={10}>
            <Text tt="uppercase" weight={700} color='#12b886' size={16} >Schedule An Appointment:</Text>
            <Text size={14}>Once you schedule an appointment, you can come to our office and meet one of our consultants.</Text>

            <Grid pt={20}>
                <Grid.Col md={6}>
                    <Enquireyform
                        freeevaluation={false}
                        employeeName={employeeName}
                        activeTab={activeTab}
                        userid={userid}
                    />
                </Grid.Col>
                <Grid.Col md={6}>
                    <Testimonialreviews />
                </Grid.Col>
            </Grid>
        </Card.Section>
    )
}

export default Walkinwrapper