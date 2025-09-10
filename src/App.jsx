import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import PRODUCTS from "./components/Product/product";


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
