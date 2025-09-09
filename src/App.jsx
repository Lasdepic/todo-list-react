import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Produit</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}

const PRODUCTS = [
  { category: "Fruits", price: "1€", stocked: true, name: "Pomme" },
  { category: "Fruits", price: "1€", stocked: true, name: "Pitaya" },
  {
    category: "Fruits",
    price: "2€",
    stocked: false,
    name: "Fruit de la passion",
  },
  { category: "Fruits", price: "2€", stocked: true, name: "Banane" },
  { category: "Fruits", price: "3€", stocked: true, name: "Mangue" },
  { category: "Fruits", price: "2€", stocked: false, name: "Kiwi" },
  { category: "Fruits", price: "1€", stocked: true, name: "Orange" },
  { category: "Fruits", price: "2€", stocked: true, name: "Poire" },
  { category: "Légumes", price: "2€", stocked: true, name: "Épinard" },
  { category: "Légumes", price: "4€", stocked: false, name: "Potiron" },
  { category: "Légumes", price: "1€", stocked: true, name: "Petits pois" },
  { category: "Légumes", price: "3€", stocked: true, name: "Carotte" },
  { category: "Légumes", price: "2€", stocked: false, name: "Brocoli" },
  { category: "Légumes", price: "2€", stocked: true, name: "Tomate" },
  { category: "Boissons", price: "1€", stocked: true, name: "Eau" },
  { category: "Boissons", price: "2€", stocked: true, name: "Jus d'orange" },
  { category: "Boissons", price: "3€", stocked: false, name: "Cola" },
  { category: "Boissons", price: "2€", stocked: true, name: "Café" },
  { category: "Snacks", price: "2€", stocked: true, name: "Chips" },
  { category: "Snacks", price: "1€", stocked: false, name: "Chocolat" },
  { category: "Snacks", price: "3€", stocked: true, name: "Cookies" },
  { category: "Boulangerie", price: "1€", stocked: true, name: "Baguette" },
  { category: "Boulangerie", price: "2€", stocked: false, name: "Croissant" },
  { category: "Boulangerie", price: "2€", stocked: true, name: "Pain complet" },
  { category: "Fromages", price: "4€", stocked: true, name: "Camembert" },
  { category: "Fromages", price: "5€", stocked: false, name: "Roquefort" },
  { category: "Fromages", price: "3€", stocked: true, name: "Comté" },
  { category: "Viandes", price: "8€", stocked: true, name: "Poulet" },
  { category: "Viandes", price: "12€", stocked: false, name: "Boeuf" },
  { category: "Viandes", price: "10€", stocked: true, name: "Porc" },
  { category: "Poissons", price: "9€", stocked: true, name: "Saumon" },
  { category: "Poissons", price: "7€", stocked: false, name: "Thon" },
  { category: "Poissons", price: "6€", stocked: true, name: "Cabillaud" },
  { category: "Épicerie", price: "2€", stocked: true, name: "Pâtes" },
  { category: "Épicerie", price: "3€", stocked: true, name: "Riz" },
  { category: "Épicerie", price: "2€", stocked: false, name: "Lentilles" },
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
