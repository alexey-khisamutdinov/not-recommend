import React from 'react'

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         logedout: true,
      }
    }
 
    render() {
      let className = "button-style"
      if (this.state.logedout){
        className = "button-style-focus"
      }
      return (
       <header>
       <nav>
           <div id="review-button">
               <a href="#" className="button-style">Write a Review</a>
           </div>
           <div id="login-signup">
               <a href="#" className={className}>Sign Up</a>
               <a href="#" className="button-style">Log In</a>
           </div>
       </nav>
   </header>
      )
    }
}
export default Navbar