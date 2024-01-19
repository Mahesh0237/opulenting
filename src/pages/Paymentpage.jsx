import { Card, Grid, Group } from '@mantine/core'
import React from 'react'
import paymentImage from '../assets/sbi_upi.jpg'
import upiscan from '../assets/upiscan.jpg'
import gpayupi from '../assets/gpayupi.jpg'
import logo1 from '../assets/logo1.png'
function Paymentpage() {
    return (
        <section className=' p-5'>
            <div className='container pt-2 pb-5' >
                <Group mb={15}>
                    <img src={logo1} alt="" height="35px" width="150px" />
                </Group>
                <Card withBorder style={{ background: "#bdb9b926" }}>
                    <Grid justify="center" align="stretch">
                        <Grid.Col sm={6} md={4} >
                            <img src={paymentImage} width="100%" height="auto" alt='sbi_upi' />
                        </Grid.Col>
                        <Grid.Col sm={6} md={4}>
                            <img src={gpayupi} width="100%" height="auto" alt='Gpay_upi' />
                        </Grid.Col>
                        <Grid.Col sm={6} md={4}>
                            <img src={upiscan} width="100%" height="auto" alt='bhart_upi' />
                        </Grid.Col>
                    </Grid>
                </Card>
            </div>
        </section>
    )
}
export default Paymentpage