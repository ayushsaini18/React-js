import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anothertElement=(
  <a href="https://www.google.com" target='_blank'>Visit Me</a>
)
const user="Mega and React"
const reactElement=React.createElement(
  'a',
  {href:"https://www.google.com",target:"_blank"},
  "click me to visit google",<br/>,
  user

)
ReactDOM.createRoot(document.getElementById('root')).render(

  //anothertElement
  reactElement
  

)
