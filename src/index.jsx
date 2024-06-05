import '@css/style.css'
import '@less/style.less'
import '@sass/style.sass'
import '@sass/style.scss'
import Post from '@model/post'
import json from '@/assets/data'
import logo from '@assets/icon-square-big.png'
import xml from '@assets/data.xml'
import csv from '@assets/data.csv'
import '@model/lodash'

import React from 'react'
import { createRoot } from 'react-dom/client'

const post = new Post('Webpack from Zero to Hero', logo)

// $('pre').addClass('code').html(post.toString())

console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)

async function start() {
    return await new Promise((r) => setTimeout(() => r('Async done.'), 2000))
}

start().then((res) => console.log(res))

class Util {
    static id = Date.now()
}

console.log('Util Id:', Util.id)

const container = document.getElementById('root')
const root = createRoot(container)

const App = () => (
    <div className="container">
        <h1>Webpack Training</h1>
        <div className="logo"></div>
        <pre></pre>
        <div className="less-demo">
            <h2>Less Demo</h2>
        </div>
        <div className="sass-demo">
            <h2>sass Demo</h2>
        </div>
        <div className="scss-demo">
            <h2>scss Demo</h2>
        </div>
    </div>
)

root.render(<App />)