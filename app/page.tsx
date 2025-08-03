import Container from "@/components/Container"
import { Button } from "@/components/ui/button"
import React from 'react'

const Home = () => {
  return (
    <Container className='bg-shop_light_pink'>
      <h2 className='text-xl font-semibold'>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Animi accusantium veniam, incidunt ipsam labore assumenda enim suscipit debitis nulla reiciendis sapiente illo soluta temporibus obcaecati.
        Reiciendis esse dolorem fugit molestiae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Animi accusantium veniam, incidunt ipsam labore assumenda enim suscipit debitis nulla reiciendis sapiente illo soluta temporibus obcaecati.
        Reiciendis esse dolorem fugit molestiae?
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  )
}

export default Home;