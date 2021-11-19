import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useRef,  useState } from 'react';
import Countdown from 'react-countdown';
import { Fade, Cascade } from "react-awesome-reveal";

export default function Home() {
  const [tab, setTab] = useState(0);
  const [faqtab, setFaqtab] = useState(0);
  // Random component
  const Completionist = () => <span>Minting is available!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span style={{fontFamily:'Storybook',letterSpacing:'1px'}}>Launch in: {days}days {hours}hs {minutes}min {seconds}sec</span>;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Freshly Baked Elves</title>
        <meta name="description" content="Freshly Baked Elves" />
        <link rel="icon" href="/Baked_Elves.png" />
      </Head>
      <nav className={styles.nav}>
            <p onClick={() => {setTab(0)}}><a href='/'>Freshly Baked Elves</a></p>
            <ul className={styles.navmenubar}>
              <li onClick={() => {setTab(1)}}><a >FAQ</a></li>
              <li onClick={() => {setTab(2)}}><a>Vision</a></li>
              <li onClick={() => {setTab(3)}}><a>Team</a></li>
              <li className={styles.social}>
                <a><img src='/icons8-twitter.svg'/></a>
              
                <a><img src='/icons8-medium.svg'/></a>
              
                <a><img src='/icons8-discord (1).svg'/></a>
              </li>

              
            </ul>
            <p className={styles.connect} onClick={() => {setTab(3)}}><a>CONNECT</a></p>
      </nav>
      {tab==0 ?
      <main className={styles.main}>
          <Fade>
          <div className={styles.hero}>
            <img src='/signboard.png'/>
            <p>
            The freshly baked elves are a group of elves who refuse to make toys unless they are fed their strict diet - <b>cookies.</b>
            <br/>  <br/>
            Luckily, the Freshly Baked Club has located <b>8000</b> unemployed elves to get things moving. Unfortunately, only <b>3000</b> of them have any sort of work ethic while the remaining <b>5000</b> elves will not work until they are fed cookies. Santa needs you to kick start his food production so that Christmas can still happen!<br/>
            <button>Learn More...</button>
            </p>
          </div>
          </Fade>
          <Fade>
          <div className={styles.countdown}>
            <Countdown
              date={1638378000000}
              renderer={renderer}
            />
          </div>
          </Fade>

      </main> : ''}
      {tab==1 ?
      <main className={styles.main2}>
        <div className={styles.faq}>
          <img src='/oldpaper.png'/>
          <h1>FAQ</h1>
          <div className={styles.faq_box}>
              <div className={styles.faq_wrapper}>
                <h4>What are Freshly Baked Elves?</h4>
                <p>The Freshly Baked Elves are a collection of 8000 unique elves. 3000 are available to mint while the remaining 5000 elves are acquired by holding your elves to generate cookies which can be exchanged to mint additional elves.</p>
              </div>

              <div className={styles.faq_wrapper}>
                <h4>How are elves generated?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What are cookies?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>How are cookies generated?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What can I do with cookies?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What is the release date and price?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Is there a mint limit?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>How can I buy elves?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Which Solana wallets can I use?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Where does my NFT go after I purchase Elves, and what can I do with it?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>After Elves are fully minted, where can I buy or sell Elves?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What charities are you helping?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What is the giving pool?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What are Freshly Baked Elves?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>How can I submit a nomination fo the giving pool?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>What plans do you have for the future?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Who is running Freshly Baked Elves?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Will there be resale royalties?</h4>
                
              </div>
              <div className={styles.faq_wrapper}>
                <h4>Contact Us</h4>
                
              </div>
          </div>
        </div>
      </main> : ''}
      {tab==2 ?
      <main className={styles.main2}>
        <div className={styles.faq}>
          <img src='/oldpaper.png'/>
          <h1>Vision</h1>
          <div className={styles.faq_box}>
              <div className={styles.faq_wrapper}>
                <p>
                  <b>Launch on December 1st, 5PM UTC</b><br/>
                  <b>Get Elves listed on secondary marketplaces</b><br/>
                  Elves can be found on FTX, Solanart, DigitalEyes & Magic Eden<br/>
                  <b>Provide rarity, analytic tools and sales bot for Elves holders</b><br/>
                  Hodlers can make informed decisions via our published rarity at HowRare.is, through analytics on Solanalysis, Solanafloor, and our @elvessalesbot which is connected to all of our secondary marketplaces<br/>
                  <b>Provide cookies to holders</b><br/>
                  <b>Mint remaining 5000 via cookies</b><br/>
                  <b>Donate Royalties</b><br/>
                  <b>Launch 12 days of Christmas event</b><br/>
                  <b>Select recipients of giving pool</b><br/>
                  <b>Provide holders with exclusive access to the Freshly Baked Club</b><br/>
                  <b>Launch next rendition</b><br/>

                </p>
              </div>
          </div>
        </div>
      </main> : ''}
      {tab==3 ?
      <main className={styles.main3}>
        <div className={styles.team_wrapper}>
          <div className={styles.team_item}>
            <p>Harvey Milk</p>
            <img src='/harvey.png' width={100}/>
          </div>
          <div className={styles.team_item}>
            <p>Based Gojo</p>
            <img src='/gojo.png' width={100}/>
          </div>
          <div className={styles.team_item}>
            <p>Juan</p>
            <img src='/juan.png' width={100}/>
          </div>
          <div className={styles.team_item}>
            <p>Designer Owl</p>
            <img src='/owl.png' width={100}/>
          </div>
          <div className={styles.team_item}>
            <p>Spungus</p>
            <img src='/spungus.png' width={100}/>
          </div>
          <div className={styles.team_item}>
            <p>Pandasykiwis</p>
            <img src='/pandasykiwis.png' width={100}/>
          </div>
        </div>
      </main> : ''}
    </div>
  )
}
