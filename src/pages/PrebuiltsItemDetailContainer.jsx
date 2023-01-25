import { useParams } from 'react-router-dom';
import data from '../data/PrebuiltProduct.json'
import ItemDetail from "../components/PreBuilts/ItemDetail";

const PrebuiltsItemDetailContainer = (props) => {
  let item = "";

  const { itemId } = useParams();

  if (itemId != null) {
    item = data[itemId - 1];
  }

  return item ? <ItemDetail {...item} /> : <h1>Loading ...</h1>;
};

export default PrebuiltsItemDetailContainer;
