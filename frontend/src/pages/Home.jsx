import { Link } from "react-router-dom";
import ProductCard from "../components/FeaturedCard";

export default function Home() {
  return (
    <div className="max-w-screen bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">v2q
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">BrandName</h1>
          <nav className="space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/products" className="hover:underline">Products</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h2 className="text-4xl font-bold">Exchange Gift Cards Securely</h2>
        <p className="text-lg mt-3">Trade your unused gift cards for cash safely and easily</p>
        <Link to="/login" className="mt-6 inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-200">Get Started</Link>
      </section>

      {/* Featured Product Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h3 className="text-2xl font-bold text-center mb-6">HOT RATES !!!</h3>
        <ProductCard />
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
        <p>© 2025 BrandName. All Rights Reserved.</p>
        <div className="mt-3 space-x-6">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}