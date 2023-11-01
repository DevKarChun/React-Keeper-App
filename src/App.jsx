// import React from 'react';
// import Header from "./components/Header.jsx";
// import Note from "./components/Note.jsx";
// import Footer from "./components/Footer.jsx"

// function App(){
//     return(
//     <div>
//         <Header />
//         <Note />
//         <Footer />
//     </div>
// )}

// export default App;

import Note from './components/Note'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
      <>
        <Header />
        <Note />
        <Footer />
      </>
    )
  }