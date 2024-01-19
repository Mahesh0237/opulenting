import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Germanyproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/germany_nationalvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Germany National Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/germany_dependenyt_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Germany Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/germanyskilled_jobseeker">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Germany Skilled Job Seeker Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Germanyproducts