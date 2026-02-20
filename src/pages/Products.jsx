import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune"; // Using Tune as filter icon, common alternative
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import Partners from "../components/Partners";
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "PVC Profile Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Plastic PVC Profile Extrusion Extruder Making Machine Production Line To Make Wall Panel, Cladding, Fence, Window And Door Profile",
    image: p1,
  },
  {
    id: 2,
    name: "Filament Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Professional 3D Filament Extrusion Supplier serving designers, engineers, and scientists across diverse global industries.",
    image: p2,
  },
  {
    id: 3,
    name: "PVC Granule Machine",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 4,
    name: "Sliding Profile Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Plastic Extrusion PVC UPVC Windows And Doors Profiles Manufacturer Prices PVC Sliding Extruder",
    image: p4,
  },
  {
    id: 5,
    name: "Pipe Bend Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "75-160mm Automatic PP PVC Pex Conduit Pipe Bending Bend Making Machine",
    image: p5,
  },
  {
    id: 6,
    name: "Hydraulic Pipe Bender",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Hydraulic Full Automatic Plastic 16-48mm PVC Tube Pipe Bending Bender Machine",
    image: p6,
  },
  {
    id: 7,
    name: "Double Filament Line",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 8,
    name: "PVC Pelletizing Line",
    category: "Recycling",
    price: "Request a quote",
    description:
      "Soft Plastic PVC Resin Powder Pelletizing Machine Granulation Line",
    image: p4,
  },
  {
    id: 1,
    name: "PVC Profile Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Plastic PVC Profile Extrusion Extruder Making Machine Production Line To Make Wall Panel, Cladding, Fence, Window And Door Profile",
    image: p1,
  },
  {
    id: 2,
    name: "Filament Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Professional 3D Filament Extrusion Supplier serving designers, engineers, and scientists across diverse global industries.",
    image: p2,
  },
  {
    id: 3,
    name: "PVC Granule Machine",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 4,
    name: "Sliding Profile Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Plastic Extrusion PVC UPVC Windows And Doors Profiles Manufacturer Prices PVC Sliding Extruder",
    image: p4,
  },
  {
    id: 5,
    name: "Pipe Bend Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "75-160mm Automatic PP PVC Pex Conduit Pipe Bending Bend Making Machine",
    image: p5,
  },
  {
    id: 6,
    name: "Hydraulic Pipe Bender",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Hydraulic Full Automatic Plastic 16-48mm PVC Tube Pipe Bending Bender Machine",
    image: p6,
  },
  {
    id: 7,
    name: "Double Filament Line",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 8,
    name: "PVC Pelletizing Line",
    category: "Recycling",
    price: "Request a quote",
    description:
      "Soft Plastic PVC Resin Powder Pelletizing Machine Granulation Line",
    image: p4,
  },
  {
    id: 1,
    name: "PVC Profile Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Plastic PVC Profile Extrusion Extruder Making Machine Production Line To Make Wall Panel, Cladding, Fence, Window And Door Profile",
    image: p1,
  },
  {
    id: 2,
    name: "Filament Extrusion Line",
    category: "Extrusion",
    price: "Request a quote",
    description:
      "Professional 3D Filament Extrusion Supplier serving designers, engineers, and scientists across diverse global industries.",
    image: p2,
  },
  {
    id: 3,
    name: "PVC Granule Machine",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 4,
    name: "Sliding Profile Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Plastic Extrusion PVC UPVC Windows And Doors Profiles Manufacturer Prices PVC Sliding Extruder",
    image: p4,
  },
  {
    id: 5,
    name: "Pipe Bend Machine",
    category: "Machinery",
    price: "Request a quote",
    description:
      "75-160mm Automatic PP PVC Pex Conduit Pipe Bending Bend Making Machine",
    image: p5,
  },
  {
    id: 6,
    name: "Hydraulic Pipe Bender",
    category: "Machinery",
    price: "Request a quote",
    description:
      "Hydraulic Full Automatic Plastic 16-48mm PVC Tube Pipe Bending Bender Machine",
    image: p6,
  },
  {
    id: 7,
    name: "Double Filament Line",
    category: "Recycling",
    price: "Request a quote",
    description:
      "A PET Bottle Flakes Pelletizing Line uses a twin-screw extruder to recycle washed PET flakes into high-quality PET pellets.",
    image: p3,
  },
  {
    id: 8,
    name: "PVC Pelletizing Line",
    category: "Recycling",
    price: "Request a quote",
    description:

    "Soft Plastic PVC Resin Powder Pelletizing Machine Granulation Line",
    image: p4,
  },  ];

import { useNavigate } from "react-router-dom";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const navigate = useNavigate();

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory
      ? product.category === activeCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products-page">
      <div className="container">
        {/* Header */}
        <div className="products-header">
          <h1 className="products-title">Products</h1>
        </div>

        {/* Controls */}
        <div className="products-controls">
       

          {/* Search Bar */}
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by Name"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="search-icon-mui" sx={{ fontSize: 20 }} />
          </div>

          {/* Date/Sort */}
     
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                <button
                  className="product-price"
                  onClick={() => navigate("/contact")}
                >
                  {product.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Partners />
    </div>
  );
}
