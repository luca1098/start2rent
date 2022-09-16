import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Home/Hero'
import Manifest from '../components/Home/Manifest'
import Roadmap from '../components/Home/Roadmap'
import Layout from '../Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <Manifest />
        <Roadmap />
      </>
    </Layout>
    
  )
}

export default Home
