import React from 'react';
import sunny from '../Assets/images/Sunny.png';
import NavigatonBar from "../Components/NavigationBar";


function Welcome (){
    return(
        <div className="Welcome">
      <header className="App-header">
        <img src={sunny} className="App-logo" alt="logo" />
        <h1 id = "title"><u>OjO</u></h1>
        <p>
          Dress Ahead !
        </p>
        
      </header>
    </div>
    )
}
export default Welcome;