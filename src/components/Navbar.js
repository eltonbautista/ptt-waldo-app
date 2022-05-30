import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function Navbar() {
  return (
    <nav data-navbar className={styles.navbar}>
      <div>Characters</div>
      <div>Timer</div>
    </nav>
  )
}

export default Navbar;