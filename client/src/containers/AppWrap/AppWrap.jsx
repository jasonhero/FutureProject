import React from 'react'

import './style.scss'

class AppWrap extends React.Component {

  render() {
    return (
      <div>
        <div className='header'>

        </div>
        <div className='container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}


export default AppWrap
