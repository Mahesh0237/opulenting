import { Card, Grid, Text } from '@mantine/core'
import React from 'react'
import Enquireyform from './Enquireyform'
import Testimonialreviews from './Testimonialreviews'

function Freeevaluation({ employeeName, activeTab, userid }) {
    return (
        <Card.Section inheritPadding py={10}>
            <Text tt="uppercase" weight={700} color='#12b886' size={16}>Free Evaluation:</Text>
            <Text size={14}>Submitting your resume and other details will enable us to suggest a visa for you to migrate depending upon your eligibility.</Text>
            <Grid py={20}>
                <Grid.Col md={6}>
                    <Enquireyform
                        freeevaluation={true}
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

export default Freeevaluation