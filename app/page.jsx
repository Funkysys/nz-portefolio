// import styles from './page.module.css'
import Player from './components/Player/Player'
import Content from './components/Content/Content'

export default function Home() {
  return (
    <>
      <main >
        <div className="title">
          <h1>Nicolas Zentz</h1>
        </div>
        <Content />
      </main>
      <footer>
        <small>
          {`Ce site est fait main dans un soucis d'authenticité et d'autonomie`}
        </small>
      </footer>
    </>
  )
}
