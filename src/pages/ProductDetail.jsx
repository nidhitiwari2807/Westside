import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data/trending.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id === parseInt(id));
        setProduct(found);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link to="/" className="text-blue-500 mb-4 inline-block">&larr; Back to Home</Link>
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded-lg shadow-lg" />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-red-600 mb-6">${product.price}</p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat justo nec ipsum egestas, vel posuere nunc sollicitudin.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
