import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import fire from './fire'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database 
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database 
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })*/
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    //fire.database().ref('messages').push( this.inputEl.value );
    //this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div id="body">
        <div className="page-content">
            <header>
                <nav>
                    <div id="review-button">
                        <a href="#" className="button-style">Write a Review</a>
                    </div>
                    <div id="login-button">
                        <a href="#" className="button-style">Sign Up</a>
                        <a href="#" className="button-style">Log In</a>
                    </div>
                </nav>
            </header>
            <main>
                <h1 className="logo"><img src={"img/drop.png"}/><span>CLEAR</span></h1>
                <form action="/">
                    <div>
                    <label for="findinput">Find a buisness:</label>
                    <input type="text" id="findinput" name="find" placeholder="What"/>
                    <input type="text" name="location" placeholder="Where"/>
                    <input type="submit" value="Search"/>
                    </div>
                </form>
                <article>Content after Search button was activated</article> 
            </main>
        </div>
            <footer><p>This site was created by Yulia Khisamutdinova and Alexey Khisamutdinov</p></footer>  
      </div>
      
    );
  }
}

export default App;
