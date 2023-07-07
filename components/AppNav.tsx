import React from 'react'
import styles from '../components/nav.module.css'
import Image from 'next/image'



const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbody}>
        <div>
          <Image src='/pashionelogo.png' width={100} height={30} alt='pashione logo'/>
        </div>
        <div className={styles.navbuttons}>
          <div><button className={styles.loginbutton}>Login</button></div>
          <div><button className={styles.getstartedbutton}>Get Started</button></div>
        </div>
      </div>
    </nav>
  )
}

export default AppNav