import Profile from "./components/profile"
// import Skills from "./components/Skills"
import './App.css' 

function App() {

  return (
    <>
      <Profile
      name="Nabin Garai"
      title="Software Engineer"
      skills={
        [
          {
            icon:"https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
            skill:"React JS"
          },
          {
            icon:"https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
            skill:"Node.js"
          },
          {
            icon:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
            skill:"JavaScript"
          },
          {
            icon:"https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png",
            skill:"Mongo DB"
          },
          {
            icon:"https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png",
            skill:"sql"
          },
          {
            icon:"https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png",
            skill:"Python"
          },
          {
            icon:"https://www.rlogical.com/wp-content/uploads/2023/03/Rlogical-Blog-Images-thumbnail.webp",
            skill:"Next js"
          }
        ]
      }/>
    </>
  )
}

export default App
