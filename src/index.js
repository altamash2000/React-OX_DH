import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Cards from './Components/Cards';
import NoPage from './Components/nopage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route path="/" component={App} />  
//       <Route path="/Cards" component={Cards} />  
//       <Route path="/NoPage" component={NoPage} />  
//     </div>  
//   </Router>  
// )  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


