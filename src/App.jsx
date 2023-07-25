import Income from './assets/page/Income'
import Expence from './assets/page/Expence'
import HomePage from './assets/page/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          
         
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route exact path='/Income' element={<Income/>}></Route>
          <Route exact path='/Expence' element={<Expence/>}></Route>
        



       

      </Routes>
      </BrowserRouter>

      
      
    </div>
  );
};

export default App;