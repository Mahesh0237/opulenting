import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Swedenproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/sweden_dependent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Sweden Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/sweden_Eu_bluecardvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Eu Blue Card - Sweden</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Swedenproducts