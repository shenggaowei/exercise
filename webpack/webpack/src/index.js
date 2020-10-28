import React from 'react'
import ReactDom from 'react-dom'

import img from './images/paypal.png'
import './index.scss'

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
    return <div className='title-container'>
        <img src={img} />
        <p className='title web-font'>
        我是升高我是升高我是升高我是升高我是升高我是升高我是升高我是升高我是升高我是升高
        </p>
    </div>
}

ReactDom.render(<RenderApp />, document.getElementById('root'))