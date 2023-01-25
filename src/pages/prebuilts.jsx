import ItemList from "../components/PreBuilts/ItemList";
import items from "../data/PrebuiltProduct.json"
const PreBuiltItemCointainer = () => {

  return (
<ItemList items={items} />
  );
};
export default PreBuiltItemCointainer;
