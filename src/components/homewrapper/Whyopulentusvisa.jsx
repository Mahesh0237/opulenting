import React from 'react'
import { Container, Grid, Image, Stack, Text } from '@mantine/core'
import image1 from '../../assets/bannerofcanada.jpg'
function Whyopulentusvisa() {
    return (
        <section className="py-5 my-4">
            <div className="container">
                <Grid>
                    <Grid.Col md={12}>
                        <Stack align='center' mb={20}>
                            <div className="text-center">
                                <h2 className="mb-1 ">Why Opulentus Immigration?</h2>
                            </div>
                            <Text ta="center" >Since our founding, our primary goal has been to provide immigration in all over country and universities. Our impact is speak louder than our word.</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Image src={image1} alt='image' width="100%" />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <Stack>
                            {/* <Text size={25} weight={600} ta="center" td="underline" color='red'>WHY OPULENTUS?</Text> */}
                            <Text ta="justify" size={16}><Text weight={600} component='span'>OPULENTUS - THE VISA COMPANY</Text> is the most exceptional immigration consultant having expertise in providing better solutions for the processing of visa. We are globally leading visa specialist and are helping people in achieving their dreams of going and settling abroad for more than a decade. Today, many of individuals and families are happily settled in various countries like Canada, Australia and New Zealand after availing our services.</Text>
                            <Text ta="justify" size={16}>Our specialization in processing successful visas has made us the most sought-after immigration consultant in India. We have never disappointed to process successful visas for Canada, Australia, UK, USA, Hong Kong, Austria, Germany, France, and Denmark. We continue the record of having over 90% of the actual conversions in USA CPT program from Asia in 2008-09 and have to our credit the most significant number of successful HSMP visas filed till date.</Text>
                        </Stack>
                    </Grid.Col>
                </Grid>
            </div>
        </section>
    )
}

export default Whyopulentusvisa