import { Header } from "./components/Header"
import { Post } from "./Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel rem minus sunt, laboriosam ea veritatis aperiam quibusdam deleniti commodi ex eum delectus aliquid reiciendis voluptates omnis necessitatibus magni corrupti?" 
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post"
          />
        </main>
      </div>
      
    </div>
    
  )
}

