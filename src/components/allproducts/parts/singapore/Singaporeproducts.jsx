import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Norwayproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/singaporeenterpass">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Singapore Enter Pass</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/singapore_global_investor_proogram">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Singapore Global Investor Program</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Norwayproducts