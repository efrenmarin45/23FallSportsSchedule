import logo from '../assets/olv-logo.png';
import styles from "../styles/logo.module.css";

const Logo = () => {
  return (
    <a href='https://ourladyofvictorycatholicschool.org/' target='_blank' rel='noreferrer'>

      <img className={styles.logoImg} src={logo} />
    </a>
  )
}

export default Logo