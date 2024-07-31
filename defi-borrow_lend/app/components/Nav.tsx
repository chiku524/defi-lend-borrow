"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'
import corkiLogo from "../images/corki-logo.png";

import styles from "../styles/layout.module.css";
import { useLayoutEffect } from "react";


// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
  // Required for Transaction Notifications and Transaction Preview
  const apiKey = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

  const injected = injectedModule()

  const infuraKey = '<INFURA_KEY>'
  const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

  // initialize Onboard
  init({
    // This javascript object is unordered meaning props do not require a certain order
    apiKey,
    wallets: [injected],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum Mainnet',
        rpcUrl
      },
      {
        id: '0x2105',
        token: 'ETH',
        label: 'Base',
        rpcUrl: 'https://mainnet.base.org'
      }
    ]
  })


export const Nav = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let logoContainer = document.querySelector(".logoContainer");

    let hover = gsap.timeline({paused: true});
        hover.to(".logoContainer .logoText p", {
            textShadow: "0px 0px 5px rgb(199, 202, 15, 0.8)", 
            duration: .4, 
            stagger: {amount: 0.05, from: "center"},
            cursor: "pointer",
        })

    logoContainer?.addEventListener("mouseenter", () => hover.play());
    logoContainer?.addEventListener("mouseleave", () => hover.reverse());
  }, [])

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider;

  if (wallet) {
    // if using ethers v6 this is:
    // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
    ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
  }

  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.logoContainer} logoContainer`}>
        <span className={`${styles.logoText} logoText`}>
          <p>M</p>
          <p>O</p>
          <p>S</p>
          <p>H</p>
          <p>I</p>
        </span>
        <Image src={corkiLogo} className={styles.logo} alt="corki logo image" height={50} width={50} />
      </Link>
      <hr className={`${styles.logoDivider}`}/>
      <div className={`${styles.linksContainer} linksContainer`}>
        <Link
          className={`link ${styles.link} ${pathname === "/" ? styles.active : ""}`}
          href="/"
        >
          Home
        </Link>
        <hr />
        <Link
          className={`link ${styles.link} ${
            pathname === "/auth" ? styles.active : ""
          }`}
          href="/auth"
        >
          Dashboard
        </Link>
        <hr />
        <Link
          className={`link ${styles.link} ${
            pathname === "/quotes" ? styles.active : ""
          }`}
          href="/quotes"
        >
          Quotes
        </Link>
        {/* <hr /> */}
      </div>
      <div className={!wallet || connecting ? `${styles.connectBtn} connectBtn` : `${styles.disconnectBtn} disconnectBtn`} onClick={() => (wallet ? disconnect(wallet) : connect())}>
        {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
      </div>
    </nav>
  );
};
