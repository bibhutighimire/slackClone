import './App.css';
import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import ChatSection from './components/ChatSection'

import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header'
import db from './firebase'

function App() {

const [rooms,setRooms] = useState([]);

const getChannels = () => {
  db.collection('rooms').onSnapshot((snapshot) => {
    setRooms(snapshot.docs.map((doc)=> {
    return {id: doc.id, name: doc.data().name};
    }))
  })
}
useEffect(() => {
  getChannels();
  
}, [])

console.log(rooms);
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar rooms={rooms}/>
            <ChatSection />
            <Switch>
              <Router path="/room">
                <Chat />
              </Router>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
     
    </div>
  );
}

export default App;

const Container = styled.div`
width:100%;
height:100vh;
background: orange;
display:grid;
grid-template-rows: 38px auto;
`

const Main = styled.div`
background: gray;
display:grid;
grid-template-columns: 260px auto;
`
