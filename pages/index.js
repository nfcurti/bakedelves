import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useRef,  useState } from 'react';
import Countdown from 'react-countdown';
import { Fade, Cascade } from "react-awesome-reveal";

export default function Home() {
  const [tab, setTab] = useState(0);
  const [faqtab, setFaqtab] = useState(1);
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <nav className={styles.nav}>
            <p onClick={() => {setTab(0)}}><a href='/'>Freshly Baked Elves</a></p>
            <ul className={styles.navmenubar}>
              <li onClick={() => {setTab(1)}}><a >FAQ</a></li>
              <li onClick={() => {setTab(2)}}><a>Vision</a></li>
              <li onClick={() => {setTab(3)}}><a>Team</a></li>
              <li className={styles.social}>
                <a href='twitter.com/freshbakedelves'><img src='/icons8-twitter.svg'/></a>
              
                <a ><img src='/icons8-medium.svg'/></a>
              
                <a ><img src='/icons8-discord (1).svg'/></a>
              </li>

              
            </ul>
            <p className={styles.connect} onClick={() => {setTab(3)}}><a>CONNECT</a></p>
      </nav>
      {tab==0 ?
      <main className={styles.main}>
          <Fade>
          <div className={styles.hero}>
            <img src='/christmassign copy.png'/>
            <p>
            The freshly baked elves are a group of elves who refuse to make toys unless they are fed their strict diet - <b>cookies.</b>
            <br/>  <br/>
            Luckily, the Freshly Baked Club has located <b>8000</b> unemployed elves to get things moving. Unfortunately, only <b>3000</b> of them have any sort of work ethic while the remaining <b>5000</b> elves will not work until they are fed cookies. Santa needs you to kick start his food production so that Christmas can still happen!<br/>
            <button>Learn More</button>
            </p>
          </div>
          </Fade>
          <Fade>
          <div hidden className={styles.countdown}>
            <Countdown
              date={1638378000000}
              renderer={renderer}
            />
          </div>
          </Fade>

      </main> : ''}
      {tab==1 ?
      <main className={styles.main2}>
        <Fade>
          <div className={styles.faq}>
            <img src='/scroll.png'/>
            <h1>FAQ</h1>
            <div className={styles.faq_box}>
                <div onClick={() => {setFaqtab(1)}} className={styles.faq_wrapper}>
                  <h4>What are Freshly Baked Elves?<span>{faqtab!=1 ? '+':'-'}</span></h4>
                  {faqtab==1 ?
                  <p>A collection of 8000 unique generative elves. 3000 Elves will be minted with SOL, while the remaining 5000 will be minted via the $COOKIES token. </p>
                  :''}
                </div>

                <div onClick={() => {setFaqtab(2)}} className={styles.faq_wrapper}>
                  <h4>What is $COOKIES?<span>{faqtab!=2 ? '+':'-'}</span></h4>
                  {faqtab==2 ?
                  <p>$COOKIES is a reward token that can be earned by staking or retiring Elves. Staking yields $COOKIES at a rate of 200 per day, and retiring Elves gives a one-time payment of 800. Each of the remaining 5000 Elves can be minted at a cost of 1000 $COOKIES per elf.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(3)}} className={styles.faq_wrapper}>
                  <h4>Why should I retire my elf?<span>{faqtab!=3 ? '+':'-'}</span></h4>
                  {faqtab==3 ?
                  <p>On top of earning you $COOKIES that you can use to mint/re-roll Elves, retiring your elf will give you that Elf’s Retirement Card. To be eligible for the 7 days of Christmas Event airdrops, you must have a Retirement Card in your wallet. The more you have, the higher your chances of winning a prize! Retired elves are removed from the FBE supply forever.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(4)}} className={styles.faq_wrapper}>
                  <h4>When is the mint?<span>{faqtab!=4 ? '+':'-'}</span></h4>
                  {faqtab==4 ?
                  <p>The first 1,000 members of our discord will be granted an early mint. The public mint date will be announced at a random time in early December. Be on the lookout! </p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(5)}} className={styles.faq_wrapper}>
                  <h4>How much to mint an Elf?<span>{faqtab!=5 ? '+':'-'}</span></h4>
                  {faqtab==5 ?
                  <p>Mint price for presale and public mint will be 1 SOL. After the first 3000 are minted, Elves will only be available to mint using $COOKIES.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(6)}} className={styles.faq_wrapper}>
                  <h4>What charities will the proceeds be going to?<span>{faqtab!=6 ? '+':'-'}</span></h4>
                  {faqtab==6 ?
                  <p>10% of minting proceeds, as well as 2.5% of total royalties, will go to Toys for Tots, a foundation helping underprivileged families provide a good Christmas to their children. 15% of minting proceeds will go toward the Freshly Baked Giving Pool.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(7)}} className={styles.faq_wrapper}>
                  <h4>What is the Freshly Baked Giving Pool?<span>{faqtab!=7 ? '+':'-'}</span></h4>
                  {faqtab==7 ?
                  <p>Each day during the 7 days of Christmas Event, Elf holders will be able to nominate and vote for eligible parties to receive a donation from the Giving Pool. Eligible parties include local charities, food banks, orphanages, shelters, and needy families in elf-holders’ communities. We’d like for them to be small or local causes since they are often overlooked, however it can be any group or cause Elf holders think could use the help! Every one of the 7 days, the two parties voted for by the Elf holders will receive an equal portion disbursed to them from the Giving Pool. We want to show non-crypto-native people that the Solana community cares!</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(8)}} className={styles.faq_wrapper}>
                  <h4>What is the 7 days of Christmas Event?<span>{faqtab!=8 ? '+':'-'}</span></h4>
                  {faqtab==8 ?
                  <p>Starting on December 13th, each day for 7 days we will be giving presents to our community as well as making donations to worthy causes. Holders of an Elf Retirement Card will be eligible to win airdrops of NFTs, with new prizes given away each day. The prizes will be purchased with mint proceeds and will be seen in our comfy SolSteads home. In addition, donations from our Giving Pool will be made to two charitable causes per day for each of the 7 days.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(9)}} className={styles.faq_wrapper}>
                  <h4>What are the royalties?<span>{faqtab!=9 ? '+':'-'}</span></h4>
                  {faqtab==9 ?
                  <p>Royalties will be 5% of secondary sales and go to the team.</p>
                  :''}
                </div>
                <div onClick={() => {setFaqtab(10)}} className={styles.faq_wrapper}>
                  <h4>What happens after December?<span>{faqtab!=10 ? '+':'-'}</span></h4>
                  {faqtab==10 ?
                  <p>The FBE collection is just the first season of the Freshly Baked Club’s mission. Elf holders will be rewarded for their loyalty in the next season. Changing the lives of a few people in need is great, but we want to continue to build and provide value to our holders and causes!</p>
                  :''}
                </div>
                
            </div>
          </div>
        </Fade>
      </main> : ''}
      {tab==2 ?
      <main className={styles.main2}>
      <Fade>
        <div className={styles.faq}>
          <img src='/scroll.png'/>
          <h1>Vision</h1>
          <div className={styles.faq_box}>
              <div className={styles.faq_wrapper}>
                <p>
                  Freshly Baked Elves' primary value is a quality NFT that provides a cookie token yield with the ability to mint many more NFTs at a compounding rate. By minting an elf, you're securing a yield-worthy NFT with the potential to distribute funds to people in your area who are in need.<br/><br/>

                  Early Discord members will get a chance to mint elves before our public mint, which will be posted at an undisclosed time during the first week of December. Upon minting out, 10% of funds will be donated via the Giving Block to Toys for Tots. 25% of those funds will be used to fill our metaverse home with valuable NFTs to distribute to elf retirers during our 7 Days of Christmas event. During the event, the community will nominate and vote on 2 needy parties per day to give funds to! <br/><br/>

                  After December ends, proceeds from the mint will be directly used to fund development of a non-seasonal and perfected DeFi NFT project that will build on the same mechanics that you partake in with the elves! We will be funding further development and a whole new art form to usher in a revolutionary NFT collection to the Solana community in early Q1 2022! Remaining elf holders will receive first access to the upcoming collection.<br/><br/>
                </p>
              </div>
          </div>
        </div>
      </Fade>
      </main> : ''}
      {tab==3 ?
      <main className={styles.main3}>
        <div className={styles.team_wrapper}>
          <div className={styles.team_item}>
            <img src='/Harvey Milk.png' width={250}/>
          </div>
          <div className={styles.team_item}>
            <img src='Based Gojo.png' width={250}/>
          </div>
          <div className={styles.team_item}>
            <img src='/Juan 2.png' width={250}/>
          </div>
          <div className={styles.team_item}>
            <img src='/Designer Owl.png' width={250}/>
          </div>
          <div className={styles.team_item}>
            <img src='/Spungus 2.png' width={250}/>
          </div>
          <div className={styles.team_item}>
            <img src='/Pandasy Kiwis.png' width={250}/>
          </div>
        </div>
      </main> : ''}
    </div>
  )
}
