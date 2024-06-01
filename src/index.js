import './css/style.css'

import * as $ from 'jquery'
import Post from '@models/post'
import json from '@/assets/data'
import logo from './assets/icon-square-big.png'
import xml from './assets/data.xml'
import csv from './assets/data.csv'

const post = new Post('webpack from zero to hero!!!', logo)

$('pre').html('post to string:', post.toString())

console.log('JSON:', json)
console.log('XML:', xml)
console.log('CSV:', csv)