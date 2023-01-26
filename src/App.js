import { BrowserRouter as Router, } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import { MainLayout } from './components/layout';
import AppRoutes from './routes';
import './styles/globals.css';
import './styles/react-slick.css';
import { GlobalCartContextProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <>
  <GlobalCartContextProvider>
  <Router>
        <MainLayout>
        <AppRoutes />
        </MainLayout>
      </Router>
  </GlobalCartContextProvider>
  </>
);

export default App
