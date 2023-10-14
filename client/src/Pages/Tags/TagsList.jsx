import React from 'react'
import './Tags.css';

const TagsList = ({tag,styles}) => {
  return (
    <div className='tag' >
        <h5 style={styles}>{tag.tagName}</h5>
        <p style={styles}>{tag.tagDesc}</p>
      
    </div>
  )
}

export default TagsList
