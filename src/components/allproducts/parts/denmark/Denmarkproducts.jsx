import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Denmarkproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/denmark_dependent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Denmark Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/denmark_student_dependent_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Denmark Studen Dependent Visa</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Denmarkproducts