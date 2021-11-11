import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug -Card",
  img: "./coffee-mug.png",
};

function ShoppingPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image img={product.img} />
          <ProductCard.Title title="Cafe instantaneo" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
