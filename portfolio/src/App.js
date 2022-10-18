import './App.css';

import {About,Footer,Header,Skills,Work} from "./containers"

function App() {
  return (
    <div className='app'>

      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />

    </div>
  );
}

export default App;
