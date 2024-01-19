import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Belgiumproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/belgium_work_permit_visa_page">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Belgium Work Permit</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/belgium _Eu_bluecardvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Belgium Eu Blue Card</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Belgiumproducts