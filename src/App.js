import Layout from "./hoc/layout/Layout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";


function App() {
  return (
    <div className="App">
      <Layout><BurgerBuilder /></Layout>
    </div>
  );
  
}

export default App;
