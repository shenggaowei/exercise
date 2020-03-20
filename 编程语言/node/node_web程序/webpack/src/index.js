import React from 'react'
import ReactDom from 'react-dom'

function RenderApp(){
    return <div>hello world 升高</div>
}

ReactDom.render(<RenderApp />, document.getElementById('root'))