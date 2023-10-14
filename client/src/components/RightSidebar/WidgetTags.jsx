import React from 'react'

import './RightSidebar.css'

const WidgetTags = ({styles}) => {

 
    const tags = [
        "c",
        "css",
        "express",
        "firebase",
        "html",
        "java",
        "javascript",
        "mern",
        "mongodb",
        "mysql",
        "next.js",
        "node.js",
        "php",
        "python",
        "reactjs",
    ];

    return (
        <div className='widget-tags' >
            <h4 style={styles}>Watched tags</h4>
            <div className="widget-tags-div">
                {
                    tags.map((tag) => (
                        <p  key={tag}>{tag}</p>
                    )



                    )
                }
            </div>

        </div>
    )
}

export default WidgetTags
