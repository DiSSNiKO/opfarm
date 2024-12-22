import ListingDetailsMain from './components/listingDetailsMain.js';
import './components/vegList.js';
import VegList from './components/vegList.js';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <VegList />
  },
  {
    path: '/overview',
    element: <VegList />
  },
  {
    path: '/product/:productid',
    element: <ListingDetailsMain />
  }
]);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="relativeWrapper"> 
          <p id="headerText">
          💮 Node Farm 🥝
          </p>
          <div className="headerDecor">
          </div>
        </div>
      </header>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
