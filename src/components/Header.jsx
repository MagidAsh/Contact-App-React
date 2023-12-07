//style
import styles from "./Header.module.css"

function Header() {

  return (
    <div className={styles.container}>
       <h1>Contact App</h1>
       <p>
          <a href="https://react.dev" target="_blank">Siram</a> | A great phone and email directory
       </p>
    </div>
  ) 
}

export default Header