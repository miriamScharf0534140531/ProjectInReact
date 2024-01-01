import './App.css';
import {BrowserRouter, Route, Routes, Link, Outlet, useParams} from 'react-router-dom';

// import MyApp from './context/useContextTheme';
import { useState } from 'react';

 function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>{/**switch */}
          <Route path={"/"} element={<Layout />}>
            <Route path={""} element={<Home />} ></Route>
            <Route path={"about"} element={<About />}></Route>
            <Route path={"contact"} element={<Contact />}></Route>
            {/* <Route path="theme" element={<MyApp />}></Route> */}

          </Route>

          <Route path={"tickets"} element={<LayoutTickets />}>
            <Route path={""} index element={<List />}></Route>
            <Route path={'new'} element={<NewTicket />}></Route>
            <Route path={':ticketId/:userId?'} element={<TicketItem />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>       
    </div>)
};

export default App;

function Layout(){
  return (<div>
    <header>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact US</Link>
        <Link to="/theme">Theme</Link>
        <Link to="/tickets">Tickets</Link>
      </nav>
    </header>
    <Outlet />
    <footer>
      <h3>Footer</h3>
    </footer>
  </div>)
}

function LayoutTickets(){
  return (<div style={{background: "pink"}}>
    <nav>
      <li><Link to="/">Home</Link></li>
        
      <li><Link to="/tickets">Tickets</Link></li>
      <li><Link to="/tickets/new">New Ticket</Link></li>
       <li><Link to="/tickets/123123"> Dispaly Ticket</Link></li>
      </nav>
    <Outlet />
    
  </div>)
}

function List(){
  return (<h1>List</h1>)
}

function NewTicket(){
  const [inputState, setinputState] = useState("")
  return (<form>
    <input value={inputState} onChange={(e)=>{setinputState(e.target.value)}} />
    <Link to={`/tickets/${inputState}`} disabled={inputState==""}>Create</Link>
  </form>)
}

function TicketItem(){
  console.log(useParams());
  const {ticketId, userId} = useParams();
  return (<>
    <h1>TicketId: {ticketId}</h1>
    <h1>UserId: {userId}</h1>
    </>)
}

function Home(){
  return <h1>Home</h1>
}

function About(){
  return <h1>About</h1>
}

function Contact(){
  return <h1>Contact us</h1>
}
