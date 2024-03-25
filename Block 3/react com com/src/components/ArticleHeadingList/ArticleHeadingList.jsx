import { useContext } from 'react'

import PropTypes from 'prop-types'

import {Ctx} from '../../context'

import ArticleHeading from '../ArticleHeading/ArticleHeading'

function ArticleList({ articles }) {

  const {filter} = useContext(Ctx)

  const listArticleHeadings = () => {
    return (
    <div>
      { articles && articles.filter((article) => article.title.toLowerCase().includes(filter)).map((article, idx) => <ArticleHeading key={idx} url={article.url} tag={article.tag} title={article.title} author={article.author} time={article.time} />) }
    </div>
    )
  }

  return (
    <>
      <div>ArticleList</div>
      <div>
        { listArticleHeadings() }
      </div>
    </>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.array
}

export default ArticleList