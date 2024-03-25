import PropTypes from 'prop-types'

import './Header.css'
import { useContext } from 'react'
import {Ctx} from '../../context/index.js'



function Header() {

  const {setFilter} = useContext(Ctx)


  return (
    <div className="header">
      Articles.com
      <input placeholder="Search" onChange={(e) => setFilter(e.target.value)} />
    </div>
  )
}

Header.propTypes = {
    onSearchUpdate: PropTypes.func
}

export default Header