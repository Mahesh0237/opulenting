import { Badge, Card, Grid } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Canadaproducts() {
    return (
        <Grid>
            <Grid.Col md={6}>
                <Link to="/canada_provisionalvisa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Canada Provincial Nominee Program</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/canada_fedral_skilled_visa">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Canada Federal Skilled Worker</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/canad_postgraduate_work_permit">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Canada Post Graduate Work Permit</Badge>
                    </Card>
                </Link>
            </Grid.Col>
            <Grid.Col md={6}>
                <Link to="/canad_open_work_permit">
                    <Card withBorder p={8}>
                        <Badge variant='dot' size='lg'>Canada Open Work Permit</Badge>
                    </Card>
                </Link>
            </Grid.Col>
        </Grid>
    )
}

export default Canadaproducts