import styles from './App.module.css'
import webpackImg from './assets/webpack.svg'
import reactImg from './assets/react.svg'
import typescriptImg from './assets/typescript.svg'

function App() {
  return (
    <div className={styles.container}>
      <h1>A Webpack Project</h1>
      <div className={styles.images}>
        <img src={webpackImg} alt="" />
        <img src={reactImg} alt="" />
        <img src={typescriptImg} alt="" />
      </div>
    </div>

  )
}

export default App