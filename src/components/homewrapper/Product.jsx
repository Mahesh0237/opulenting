import { Card, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Product({ text, img }) {
  let link;
  if (text === 'Migrate to Canada') {
    link = "/Canadastdntvisapage"
  } else if (text === "Australia Student Visa") {
    link = "/australiastudentvisapage"
  } else if (text === "Germany Visitor Visa") {
    link = "/germanyvisitorvisa"
  }

  return (
    <Link to={link}>
      <Card withBorder>
        <Card.Section  >
          <Image src={img} alt='img' />
        </Card.Section>
        <Card.Section py={10}>
          <Text ta="center" weight={600} > {text}</Text>
        </Card.Section>
      </Card>
    </Link>
  )
}

export default Product 