import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Hongkongproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/hongkong_quality_migrate_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Hong Kong Quality Migrant Admiss</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/hingkong_dependent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Dependent QMAS HK</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Hongkongproducts