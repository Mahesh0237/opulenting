import { Card, Grid, Text } from '@mantine/core'
import React from 'react'
import Enquireyform from './Enquireyform'
import Testimonialreviews from './Testimonialreviews'

function Telephonicwrapper({ employeeName, activeTab, userid }) {
    return (
        <Card.Section inheritPadding py={10}>
            <Text tt="uppercase" weight={700} color='#12b886' size={16}>Telephonic Counselling:</Text>
            <Text size={14}>Once you sign up for our telephonic counselling, one of our consultants will call you at a time specified by you and assist you!.</Text>
            <Grid py={20}>
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

export default Telephonicwrapper