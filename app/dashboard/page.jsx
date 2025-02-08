import Containel from '@/components/Containel'
import Desige from '@/components/Desige'
import Footer from '@/components/Footer'
import Helping from '@/components/Helping'
import Hero from '@/components/Hero'
import Marketing from '@/components/Marketing'
import Navbar from '@/components/Navbar'
import Ourclient from '@/components/Ourclient'
import Singlesystem from '@/components/Singlesystem'
import Tesla from '@/components/Tesla'
import Unseen from '@/components/Unseen'
import { Container } from 'postcss'
import React from 'react'

export default function page() {
  return (
    
      <div >
      <Navbar />
      <Hero />
      <Ourclient />
      <Singlesystem />
      <Unseen />
      <Helping />
      <Desige />
      <Tesla />
      <Marketing />
      <Footer />
      </div>
  )
}
