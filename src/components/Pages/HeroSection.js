import React from "react";
import styles from './HeroSection.module.css'
const HeroSection = () => {

    return (
<div className={styles.content}>
  <div className={styles.text}>
  <h1>Be There</h1>
    <p>Lorem ipsum dolor sit amet consectetur <pre/> adipisicing elit. Iure quia distinctio ea non amet eos ut vel et dolore sapiente, <pre/> ipsam assumenda quae officiis sint? Qui deserunt consequuntur et perferendis.</p>

    <button>
      hire me
    </button>
  </div>

  {/* for image  */}
  <div className={styles.images}>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' alt="hero image" className="hero-img " />
  </div>
</div>

    );
};
export default HeroSection;