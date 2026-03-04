import { useState } from 'react';

function SearchBar({onFilterText, onStockOnly}) {
  return (
    <>
      <form>
        <div>
          <input onChange={(e) => onFilterText(e.target.value)} type="text" placeholder="Rechercher ..."/>
        </div>
        <div>
          <input onChange={(e) => onStockOnly(e.target.checked)} type="checkbox" /> En stock uniquement
        </div>
      </form>
    </>
  );
}

function Category({name}) {
  return (
    <tr>
      <th colSpan="2">{name}</th>
    </tr>
  );
}

function Product({name, price, stocked}) {
  if (!stocked) {
    name = <span style={{ color: "red"}}>{name}</span>
    price = <span style={{ color: "red"}}>{price}</span>
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
}

function List({products, filterText, stockOnly}) {
  let rows = [];
  let lastCategoryAdded = '';

  products.forEach(
    (product) => {
      if (stockOnly && !product.stocked) {
        return;
      }

      if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      if (product.category !== lastCategoryAdded) {
        rows.push(
          <Category name={product.category}/>
        )
        lastCategoryAdded = product.category;
      }

      rows.push(
        <Product name={product.name} price={product.price} stocked={product.stocked}/>
      )
    }
  )

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </>
  );
}

export default function ProductIndex() {
  const products = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Pomme' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Fruit du dragon' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Fruit de la passion' },
    { category: 'Légumes', price: '$2', stocked: true, name: 'Épinard' },
    { category: 'Légumes', price: '$4', stocked: false, name: 'Citrouille' },
    { category: 'Légumes', price: '$1', stocked: true, name: 'Petits pois' },
  ];
  const [filterText, setFilterText] = useState('');
  const [stockOnly, setStockOnly] = useState(false);
  return (
    <>
      <SearchBar onFilterText={setFilterText} onStockOnly={setStockOnly} />
      <List products={products} filterText={filterText} stockOnly={stockOnly} />
    </>
  );
}
