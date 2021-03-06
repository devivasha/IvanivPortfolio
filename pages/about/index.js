import MainLayout from "../../components/MainLayout/MainLayout";
import AboutMe from "../../components/AboutMe/AboutMe";
import Head from 'next/head';
import React from "react";
const About=()=>{
    return<>
        <Head>
            <title>Nataliia Ivaniv | Front-End Developer</title>
            <meta property="og:description" content="Front-End Developer, React developer, Jobs for Junior Front_End Developer, site development"/>
            <meta name="description" content="This is profile landing page"/>
            <meta name="description" content="Front-End Developer, React developer, Jobs for Junior Front_End Developer, site development"/>
            <meta property="og:title" content="Nataliia Ivaniv"/>
            <meta name="author" content="Nataliia Ivaniv"/>
            <meta property="og:url" content="http://"/>
            <meta property="og:site_name" content="Nataliia Ivaniv"/>
        </Head>
        <div>
            <div className="gradient" style={{backgroundImage: `url('./aboutBig.jpg')` }}>
                <div>
                    <MainLayout>
                        <AboutMe/>
                        <div className="containerFooterAbout">
                            <p className="quotation">“Find out who you are and do it on purpose.”</p>
                            <p className="quotation" style={{color:"#fff", marginTop: "-83px", marginLeft:"740px"}}>Dolly Parton</p>
                        </div>
                    </MainLayout>
                </div>
            </div>
        </div>
    </>
};
export default About;