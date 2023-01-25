import { useRoutes } from 'react-router-dom';
import Landing from './pages/Landing';
import IntelCustomPc from './pages/intel_custom_pc';
import AmdCustomPc from './pages/amd_custom_pc';
import PreBuiltItemCointainer from './pages/prebuilts';
import PrebuiltsItemDetailContainer from './pages/PrebuiltsItemDetailContainer';
import ProductDetails from './pages/product_details';
import CartDetailContainer from './pages/cartDetails';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "intel_custom_pc", element: <IntelCustomPc /> },
        { path: "amd_custom_pc", element: <AmdCustomPc /> },
        { path: "pre_builts", element: <PreBuiltItemCointainer /> },
        { path: '/item/:itemId', element: <PrebuiltsItemDetailContainer />},
        { path: "product_details/:productId", element: <ProductDetails /> },
        { path: "shopping_cart", element: <CartDetailContainer /> },
    ]);
    return routes;
  };

export default AppRoutes
