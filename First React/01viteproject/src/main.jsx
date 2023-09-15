import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello, Nabin in custon app</h1>
    </div>
  )
}

// const anotherElement = (
//   <a href="https://vitejs.dev" target="_blank">Visit Vite</a>
// )

// const reactElement = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org',
//     target: '_blank'
//   },
//   'Visit React'
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp />
    // reactElement
)
