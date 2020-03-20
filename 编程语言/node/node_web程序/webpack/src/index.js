import React from 'react'
import ReactDom from 'react-dom'

async function testshenggao(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('升高')
        }, 3000)
    })
}

 testshenggao().then(data => {
     console.log(data)
 })

function RenderApp(){
    return <div>hello world 升高</div>
}

ReactDom.render(<RenderApp />, document.getElementById('root'))