import React from 'react';
import Head from 'next/head'

import StickyMenu from "../components/Menu/StickyMenu";
import Home from "../components/Home/index";
import Benefits from "../components/Benefits/index";
import Features from "../components/Features/index";
import Services from "../components/Services/index";
import Technology from "../components/Technology/index";
import Team from "../components/Team/index";
import FAQ from "../components/FAQ/index";
import Kontakt from "../components/Kontakt/index"

import { ParallaxProvider } from 'react-scroll-parallax';
import { Ripple } from 'react-preloaders';

import AOS from 'aos';


class Index extends React.Component {
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render() {
    return(
      <div className="container">
        <Head>
          <title>AMANDA Technology</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href='https://fonts.googleapis.com/css?family=Raleway:500,700,800' rel='stylesheet' type='text/css'/>  
          <link rel="stylesheet" href="/public/icofont/icofont.min.css"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />


        </Head>
        <main>
            <StickyMenu/>
            <ParallaxProvider/>
            <Home/>
            <ParallaxProvider/>
            <Benefits/>
            <Features/>
            <Services/>
            <Technology/>
            <Team/>
            <FAQ/>
            <Kontakt/>
            {typeof window !== 'undefined' ? <Ripple background='linear-gradient(to right,#3c404d 0%,#aeb6cf 100%)' time={900}/> : null}

        </main>
      </div>
    )
  }
}

export default Index
