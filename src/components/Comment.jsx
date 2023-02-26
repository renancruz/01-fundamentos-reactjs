import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://xesque.rocketseat.dev/users/avatar/profile-7a1804b9-dafc-423b-9266-04509cd8b2d5-1668954972749.jpg" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Renan Cruz</strong>
              <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}