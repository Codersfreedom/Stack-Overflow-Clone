import React from 'react'
import Widget from './Widget'
import "./RightSidebar.css"
import WidgetTags from './WidgetTags'


const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>

    </aside>
  )
}

export default RightSidebar
