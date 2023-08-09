import React ,{Suspense,lazy} from 'react';
import './App.css';

const Udemy =React.lazy( ()=>import('./modules/udemy'))
function App() {
  return (
    <Suspense className="App" fallback="Loading...">
     <Udemy /> 
    </Suspense> 
  );
}

export default App;
