import { Container, Grid, Text } from '@mantine/core'
import React from 'react'
import Product from './Product'
import canada from '../../assets/canadaproduct.png'
import australia from '../../assets/australiaproduct.jpg'
import germany from '../../assets/germanyproduct.jpg'
function Popularproducts() {
    return (
        <section className='py-5' style={{ background: "rgb(220 233 244 / 20%)" }}>
            <div className='container' >
                <div className="text-center mb-4">
                    <h2 className="mb-1 ">Popular Products</h2>
                    <p className="mb-0">Visa and immigration services Get Ready</p>
                </div>
                <Grid>
                    <Grid.Col xs={6} sm={6} md={4}>
                        <Product
                            text="Migrate to Canada"
                            img={canada}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={4}>
                        <Product
                            text="Australia Student Visa"
                            img={australia}
                        />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={4}>
                        <Product
                            text="Germany Visitor Visa"
                            img={germany}
                        />
                    </Grid.Col>
                </Grid>
            </div>
        </section>
    )
}

export default Popularproducts