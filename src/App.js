import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './Search';
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
            <Navbar/>
            <main>
                <h1 className="logo"><img src={"img/drop.png"}/><span>CLEAR</span></h1>
                <Search />
                <article>Content after Search button was activated</article> 
            </main>
        </div>
        <Footer />
      </div>
      
    );
  }
}


export default App;
