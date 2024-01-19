import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Usaproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/usa_studentvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>USA Student visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/us_family_immigration">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Us Family Immigration</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Usaproducts