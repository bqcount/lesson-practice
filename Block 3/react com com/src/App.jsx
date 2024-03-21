import { useState } from 'react'
import './App.css'
import {Ctx} from './context/index.js'

import Header from './components/Header/Header'
import ArticleList from './components/ArticleHeadingList/ArticleHeadingList'

function App() {
  const [articles] = useState([
    {
      url: 'https://www.freecodecamp.org/news/content/images/size/w600/2024/03/OOP_in_Python.png',
      tag: '#OBJECT ORIENTED PROGRAMMING',
      title: 'How to Build an Online Banking System – Python Object-Oriented Programming Tutorial',
      author: 'JACOB ISAH',
      time: '17 HOURS AGO'
    },
    {
      url: 'https://www.freecodecamp.org/news/content/images/size/w600/2024/03/aspnet.png',
      tag: '#ASPNETCORE',
      title: 'Master ASP.NET Core by Building Three Projects',
      author: 'BEAU CARNES',
      time: '18 HOURS AGO'
    }
  ])
  const [filter, setFilter] = useState('')

  const ctxValues = {
    filter,
    setFilter
  }
  
  return (
    <Ctx.Provider value={ctxValues}>
        <Header />
        <ArticleList articles={articles} />
    </Ctx.Provider>
  )
}

export default App