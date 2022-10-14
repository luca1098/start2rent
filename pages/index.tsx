import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Contact from '../components/Home/Contact'
import Hero from '../components/Home/Hero'
import HowItWork from '../components/Home/HowItWork'
import Manifest from '../components/Home/Manifest'
import WhyUs from '../components/Home/WhyUs'
import Preloader from '../kit/Preloader'
import Layout from '../Layout'

const Home: NextPage = () => {
  const [isRender, setIsRender] = useState<boolean>(false)

  useEffect(() => {
    setIsRender(true)
  }, [])
  if(!isRender) return <Preloader />
  return (
    <>
    <Layout>
      <>
        <Hero />
        <Manifest />
        <WhyUs />
        <HowItWork />
        <Contact />
      </>
    </Layout>
    </>
  )
}

export default Home
