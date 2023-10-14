import React from 'react'
import Widget from './Widget'
import "./RightSidebar.css"
import WidgetTags from './WidgetTags'



const RightSidebar = ({styles}) => {


  return (
    <aside className='right-sidebar'>
      <Widget  />
      <WidgetTags styles={styles} />

    </aside>
  )
}

export default RightSidebar
