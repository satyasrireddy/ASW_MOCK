import { useRoutes } from 'react-router-dom';
import Landing from './pages/Landing';
import IntelCustomPc from './pages/intel_custom_pc';
import AmdCustomPc from './pages/amd_custom_pc';
import PreBuiltItemCointainer from './pages/prebuilts';
import PrebuiltsItemDetailContainer from './pages/PrebuiltsItemDetailContainer';
import ProductDetails from './pages/product_details';
import CartDetailContainer from './pages/cartDetails';
<<<<<<< HEAD
import ContactForm from './pages/ContactForm';
import FAQs from './pages/FAQS';
=======
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "pre_builts", element: <PreBuiltItemCointainer /> },
        { path: "intel_custom_pc", element: <IntelCustomPc /> },
        { path: "amd_custom_pc", element: <AmdCustomPc /> },
        { path: '/item/:itemId', element: <PrebuiltsItemDetailContainer />},
        { path: "product_details/:productId", element: <ProductDetails /> },
        { path: "shopping_cart", element: <CartDetailContainer /> },
<<<<<<< HEAD
        { path: "Contact_Form", element: <ContactForm /> },
        { path: "Faqs", element: <FAQs /> },
=======
>>>>>>> 81ad4bad24d9e6063087e429d1491ee96435d88a
    ]);
    return routes;
  };

export default AppRoutes
