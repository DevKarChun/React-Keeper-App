// import React from 'react';

// function Footer(){
//     return(
//     <Footer>
//         <p>Copyright ⓒ 2023</p>
//     </Footer>
// )}

// export default Footer;

export default function Footer() {
    return (
      <footer>
        <p>copyright ⓒ {new Date().getFullYear()}</p>
      </footer>
    )
  }