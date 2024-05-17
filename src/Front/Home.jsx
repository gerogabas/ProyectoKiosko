// Shared Tailwind CSS classes
const textWhiteHoverZinc300 = 'text-white hover:text-zinc-300';
const roundedFull = 'rounded-full';
const mt2TextLgFontSemibold = 'mt-2 text-lg font-semibold';

// Main component
function Marketplace() {
  return (
    <div className="bg-dark-violet text-white font-sans">
      <MainHeader />
      <ProductsSection />
      <Footer />
    </div>
  );
}
export default Marketplace;
// Navbar component

// MainHeader component
function MainHeader() {
  return (
    <header className="text-center mt-20 md:mt-28">
      <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Marketplace</h1>
      <p className="text-xl md:text-2xl mt-4">Find everything you need, all in one place.</p>
    </header>
  );
}

// ProductsSection component
function ProductsSection() {
  return (
    <section className="mt-10 md:mt-20 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard
          imageUrl="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/741b87500f9eip1evmj2.jpg"
          title="Product 1"
          description="Description of product 1 goes here. It's an amazing product."
        />
        <ProductCard
          imageUrl="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ade5cd9bl7wz7bnsqbkn.gif"
          title="Product 2"
          description="Description of product 2 goes here. Don't miss out on this."
        />
        <ProductCard
          imageUrl="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jbbv8nbpun26xj7l30hk.png"
          title="Product 3"
          description="Description of product 3 goes here. It's a top choice!"
        />
        <ProductCard
          imageUrl="https://cdn-cekmh.nitrocdn.com/SlrtebQxNZbUBkfXeRIcTgUmxZsOSldb/assets/images/optimized/rev-a090185/codoid.com/wp-content/uploads/2023/02/Software-Development-Meme.jpg"
          title="Product 3"
          description="Description of product 3 goes here. It's a top choice!"
        />
        <ProductCard
          imageUrl="https://placehold.co/300x300"
          title="Product 3"
          description="Description of product 3 goes here. It's a top choice!"
        />
        <ProductCard
          imageUrl="https://pbs.twimg.com/media/EOYTyjuU8AASiIu.png"
          title="Product 3"
          description="Description of product 3 goes here. It's a top choice!"
        />
      </div>
    </section>
  );
}

// ProductCard component
function ProductCard({ imageUrl, title, description }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-purple-700 rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="rounded-lg size-96" />
      <h3 className={mt2TextLgFontSemibold}>{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <footer className="text-center p-4 mt-10 border-t border-purple-700">
      <p>© 2023 Marketplace, Inc. All rights reserved.</p>
    </footer>
  );
}