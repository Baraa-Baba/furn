/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import Navbar from '../compenents/Navbar'
import HeaderCoursel from '../compenents/HeaderCoursel'
import PopulerProducts from '../compenents/PopulerProducts'
import NewArrivals from '../compenents/NewArrivals'
import SofaCollection from '../compenents/SofaCollection'
import Feature from '../compenents/Feature'
import Blog from '../compenents/Blog'
import Client from '../compenents/Client'
import Newsletter from '../compenents/Newsletter'
import Footer from '../compenents/Footer'


import fsPromises from 'fs/promises';
import path from 'path'
export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'products.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>

        {/*meta data*/}
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}

        {/* title of site*/}
        <title>Furniture</title>

        {/* For favicon png*/}
        <link rel="icon" href="/favicon.png" />
        {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries*/}
        {/* WARNING: Respond.js doesn't work if you view the page via file://*/}

        {/*[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        [endif]*/}

      </Head>
      <div>

        {/*[if lte IE 9]>
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif] */}



        {/*welcome-hero start  */}
        <header id="home" className="welcome-hero">

          <Navbar props={props} />
          <HeaderCoursel />
          {/* top-area Start  */}
          <div className="top-area">
            <div className="header-area">
            </div>{/*/.header-area */}
            <div className="clearfix"></div>

          </div>{/* /.top-area */}
          {/* top-area End  */}

        </header>{/*/.welcome-hero */}

        {/*welcome-hero end  */}
        <PopulerProducts />

        <NewArrivals props={props} />

        <SofaCollection />
        <Feature />
        <Blog />
        <Client />
        <Newsletter />
        <Footer />

        {/* Include all js compiled plugins (below), or include individual files as needed  */}


        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script type="text/javascript" src="/static/bootstrap.min.js"></Script>
        {/*modernizr.min.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></Script>
        <Script type="text/javascript" src="/static/custom.js"></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script type="text/javascript" src="/static/bootstrap.min.js"></Script>
        {/*modernizr.min.js */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></Script>

        <Script type="text/javascript" src="/static/bootsnav.js"></Script>
        <Script type="text/javascript" src="/static/custom.js"></Script>

      </div>
    </div >
  )
}


