import './App.css';

import Conditinolcom from './components/conditinolcom';
import Counter from './components/Counter';
import Product from './components/product';

// import Demo from './components/profile';
// import Hello from './components/hello';
// import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Hello/>
      <Message name='ravi class compo. props'/> */}

      
      {/* <Demo name="Ravi"/>
      <Demo name="Ravi" lastname="Parmar"/>
      <Demo name="Praful" lastname="Parmar">
        <p>THis is a childern components</p>
      </Demo> */}
      <Counter/>
      <Conditinolcom/>
      <Product/>


    </div>
  );
}

export default App;
