import PropTypes from 'prop-types'
import './ArticleHeading.css'

function ArticleHeading({url, tag, title, author, time}) {
  return (
    <div className='article-heading'>
    <img src={url}></img>
    <div>
      <div>{tag}</div>
      <div>{title}</div>
      <div className='article-heading-footer'>
        <div>{author}</div>
        <div>{time}</div>
      </div>
    </div>
  </div>
  )
}

ArticleHeading.propTypes = {
  url: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string
}

export default ArticleHeading