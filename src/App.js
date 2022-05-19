import  React from 'react';
import{ BrowserRouter, Route,Switch} from "react-router-dom";
import './App.css';
import {He} from './He';
import {Home} from './Home';
import {Pos} from './Pos'
import {Q2} from './Q2'
import {Q3} from './Q3'
import {Q4} from './Q4'
import {Q5} from './Q5'
import {Q6} from './Q6';
import {Q7} from './Q7';
import {Q9} from './Q9'
import {Q10} from './Q10'
import {Q11} from './Q11'
import {Q12} from './Q12'
import {Q13} from './Q13'
import {Q14} from './Q14';
import {Q15} from './Q15'
import {Q16} from './Q16'
import {Q17} from './Q17'
import {Q18} from './Q18'
import {Q19} from './Q19'
//import {Submit} from './Submit'


//import { Pos } from './Pos';
//import { Link } from 'react-router-dom';
import { Q1 } from './Q1';

function App() {
  return (
    
    <BrowserRouter>
    <div>
    <div className="A">
      <div><h1>Exam:unit 5 final exam</h1></div>
      <div><h5>Subject:Physics</h5></div>
      <div><h3>20 Question:Multiple choice Questions</h3></div></div>
     <He/>
     <div className='p' >
       <Switch>
       <Route exact path="/1" > <Q1></Q1></Route>
       <Route exact path="/2" > <Q2></Q2></Route>
       <Route exact path="/3" > <Q3></Q3></Route> 
       <Route exact path="/4" > <Q4></Q4></Route>
       <Route exact path="/5" > <Q5></Q5></Route>
       <Route exact path="/6" > <Q6></Q6></Route> 
       <Route exact path="/7" > <Q7></Q7></Route>
       <Route exact path="/9" > <Q9></Q9></Route>
       <Route exact path="/10" > <Q10></Q10></Route> 
       <Route exact path="/11" > <Q11></Q11></Route>
       <Route exact path="/12" > <Q12></Q12></Route>
       <Route exact path="/13" > <Q13></Q13></Route> 
       <Route exact path="/14" > <Q14></Q14></Route>
       <Route exact path="/15" > <Q15></Q15></Route>
       <Route exact path="/16" > <Q16></Q16></Route> 
       <Route exact path="/17" > <Q17></Q17></Route>
       <Route exact path="/18" > <Q18></Q18></Route>
       <Route exact path="/19" > <Q19></Q19></Route> 
       <Route exact path="/" > <Home></Home></Route>
         <Route  exact path="/pos"> <Pos></Pos></Route>
         
       </Switch>
       
     </div>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
