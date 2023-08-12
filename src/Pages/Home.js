import React from 'react'
import Header from '../Component/Header/Header'
import Contactus from './Contactus'
import NumberCounter from './NumberCounter'
import FAQ from './FAQ'
import Category from '../Component/Category/Category'
import PhotoGallery from '../Component/Gallery/PhotoGallery'
import InstagramFeed from '../Component/Insta/Insta'
import Footer from '../Component/Footer/Footer'
const Home = () => {
  return (
  <>
   <Header/>
   <Category/>
   <PhotoGallery/>
   <Contactus/>
   <FAQ/>
   {/* <InstagramFeed/> */}
   <NumberCounter/>
   <Footer/>
  </>
  )
}

export default Home