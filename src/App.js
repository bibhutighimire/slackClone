import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import ChatSection from './components/ChatSection'

import Login from './components/Login'
import styled from 'styled-components';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header />
          <Main>
            <Sidebar />
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
