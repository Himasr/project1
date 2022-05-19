import {NavLink,Link } from 'react-router-dom';

//import { Home } from './Home';
export function He(props)
{
    return(
       <div className='box'>
             <div class="calc-button-row">
            
             <a class="active" href="/1" ><button>Q1</button></a>
             <a class="active" href="/2" ><button>Q2</button></a>
             <a class="active" href="/3" ><button>Q3</button></a>
             <a class="active" href="/4" ><button>Q4</button></a>
           
            </div>
            <div class="calc-button-row">
            <a class="active" href="/5" ><button>Q5</button></a>
            <a class="active" href="/6" ><button>Q6</button></a>
            <a class="active" href="/7" ><button>Q7</button></a>
            <a class="active" href="/pos"><button>Q8</button></a>
            </div>
            <div class="calc-button-row">
            <a class="active" href="/9" ><button>Q9</button></a>
            <a class="active" href="/10" ><button>Q10</button></a>
            <a class="active" href="/11" ><button>Q11</button></a>
            <a class="active" href="/12" ><button>Q12</button></a>
            </div>
            <div class="calc-button-row">
            <a class="active" href="/13" ><button>Q13</button></a>
            <a class="active" href="/14" ><button>Q14</button></a>
            <a class="active" href="/15" ><button>Q15</button></a>
            <a class="active" href="/16" ><button>Q16</button></a>
            </div>
            <div class="calc-button-row">
            <a class="active" href="/17" ><button>Q17</button></a>
            <a class="active" href="/18" ><button>Q18</button></a>
            <a class="active" href="/19" ><button>Q19</button></a>
            <a class="active" href="/" ><button>Q20</button></a>
           
            </div>
            

            </div>
            
            
        
    );
}