import { Button, Group, Text } from '@mantine/core'
import React from 'react'

function Freeonlineassesment() {
    return (
        <section className="py-5 bg-info-700">
            <div className="container">
                <div className="row d-flex align-items-center ">
                    <div className="col-md-7">
                        <div className="text-white">
                            <h2 className="text-white mb-1">We provide immigration & visa services.</h2>
                            <p className="mb-0"> </p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-md-end mt-4 mt-lg-0">
                        <Group>
                            <Button variant='filled' style={{ background: "#f00c" }} size="sm" radius="sm" ><Text weight={600}>Get Evaluation Done</Text></Button>
                        </Group>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Freeonlineassesment