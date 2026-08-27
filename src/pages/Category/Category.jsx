import React, { useMemo, useState } from "react";
import "./Category.css";

import gradientTee from "../../assets/Frame 33.png";
import poloTipping from "../../assets/Frame 34.png";
import blackStripedTee from "../../assets/Frame 38.png";
import skinnyJeans from "../../assets/Frame 71.png";
import checkeredShirt from "../../assets/Frame 72.png";
import sleeveStripedTee from "../../assets/Frame 73.png";
import verticalStripedShirt from "../../assets/Frame 32.png";
import courageTee from "../../assets/Frame 70.png";
import bermudaShorts from "../../assets/Frame 71 (1).png";

const PRODUCTS = [
  {
    id: 1,
    image: gradientTee,
    name: "Gradient Graphic T-shirt",
    rating: 3.5,
    price: 145,
    oldPrice: null,
    discount: null,
  },
  {
    id: 2,
    image: poloTipping,
    name: "Polo with Tipping Details",
    rating: 4.5,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 3,
    image: blackStripedTee,
    name: "Black Striped T-shirt",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    discount: 30,
  },
  {
    id: 4,
    image: skinnyJeans,
    name: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    image: checkeredShirt,
    name: "Checkered Shirt",
    rating: 4.5,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 6,
    image: sleeveStripedTee,
    name: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: 30,
  },
  {
    id: 7,
    image: verticalStripedShirt,
    name: "Vertical Striped Shirt",
    rating: 5.0,
    price: 212,
    oldPrice: 232,
    discount: 20,
  },
  {
    id: 8,
    image: courageTee,
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    price: 145,
    oldPrice: null,
    discount: null,
  },
  {
    id: 9,
    image: bermudaShorts,
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: 80,
    oldPrice: null,
    discount: null,
  },
];

const CATEGORY_FILTERS = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

const COLORS = [
  { name: "green", hex: "#2FA84F" },
  { name: "red", hex: "#E53E3E" },
  { name: "yellow", hex: "#F5C518" },
  { name: "orange", hex: "#F97316" },
  { name: "sky", hex: "#33C3F0" },
  { name: "blue", hex: "#2445FF" },
  { name: "purple", hex: "#6C2FE0" },
  { name: "pink", hex: "#F94FC1" },
  { name: "white", hex: "#FFFFFF" },
  { name: "black", hex: "#171717" },
];

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];

const DRESS_STYLES = ["Casual", "Formal", "Party", "Gym"];

const SORT_OPTIONS = ["Most Popular", "Low Price", "High Price", "Newest"];

function Stars({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    let type = "empty";
    if (i < full) type = "full";
    else if (i === full && hasHalf) type = "half";
    stars.push(type);
  }
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {stars.map((type, i) => (
        <svg
          key={i}
          className={`star star--${type}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          {type === "half" && (
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          )}
          <path
            fill={type === "half" ? `url(#half-${i})` : "currentColor"}
            stroke="currentColor"
            strokeWidth={type === "empty" ? "1.5" : "0"}
            d="M12 2.5l2.9 6.06 6.6.77-4.86 4.62 1.27 6.55L12 17.77l-5.91 3.23 1.27-6.55L2.5 9.33l6.6-.77L12 2.5z"
          />
        </svg>
      ))}
    </span>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <div className="product-card__rating">
        <Stars rating={product.rating} />
        <span className="product-card__rating-value">{product.rating.toFixed(1)}/5</span>
      </div>
      <div className="product-card__prices">
        <span className="product-card__price">${product.price}</span>
        {product.oldPrice && (
          <span className="product-card__old-price">${product.oldPrice}</span>
        )}
        {product.discount && (
          <span className="product-card__discount">-{product.discount}%</span>
        )}
      </div>
    </div>
  );
}

function FiltersPanel({
  priceRange,
  setPriceRange,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  openCategory,
  toggleCategory,
  openStyle,
  toggleStyle,
}) {
  return (
    <aside className="filters">
      <div className="filters__header">
        <h2>Filters</h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
          <circle cx="9" cy="6" r="1.6" fill="currentColor" />
          <circle cx="15" cy="12" r="1.6" fill="currentColor" />
          <circle cx="9" cy="18" r="1.6" fill="currentColor" />
        </svg>
      </div>

      <ul className="filters__categories">
        {CATEGORY_FILTERS.map((cat) => (
          <li key={cat}>
            <button
              type="button"
              className="filters__category-btn"
              onClick={() => toggleCategory(cat)}
            >
              <span>{cat}</span>
              <svg
                className={`chevron ${openCategory === cat ? "chevron--open" : ""}`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      <hr className="filters__divider" />

      <div className="filters__section">
        <div className="filters__section-title">
          <h3>Price</h3>
        </div>
        <input
          type="range"
          min="50"
          max="300"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="filters__range"
        />
        <div className="filters__price-labels">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <hr className="filters__divider" />

      <div className="filters__section">
        <div className="filters__section-title">
          <h3>Colors</h3>
        </div>
        <div className="filters__colors">
          {COLORS.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={color.name}
              className={`color-swatch ${
                selectedColor === color.name ? "color-swatch--selected" : ""
              } ${color.name === "white" ? "color-swatch--outline" : ""}`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.name)}
            >
              {selectedColor === color.name && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <polyline
                    points="4 12 10 18 20 6"
                    stroke={color.name === "white" || color.name === "yellow" ? "#171717" : "#fff"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <hr className="filters__divider" />

      <div className="filters__section">
        <div className="filters__section-title">
          <h3>Size</h3>
        </div>
        <div className="filters__sizes">
          {SIZES.map((size) => (
            <button
              key={size}
              type="button"
              className={`size-pill ${
                selectedSize === size ? "size-pill--selected" : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="filters__divider" />

      <div className="filters__section">
        <div className="filters__section-title">
          <h3>Dress Style</h3>
        </div>
        <ul className="filters__categories">
          {DRESS_STYLES.map((style) => (
            <li key={style}>
              <button
                type="button"
                className="filters__category-btn"
                onClick={() => toggleStyle(style)}
              >
                <span>{style}</span>
                <svg
                  className={`chevron ${openStyle === style ? "chevron--open" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="filters__apply-btn">
        Apply Filter
      </button>
    </aside>
  );
}

function Pagination({ page, setPage, totalPages = 10 }) {
  const pages = [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="pagination__nav"
        disabled={page === 1}
        onClick={() => setPage(Math.max(1, page - 1))}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span>Previous</span>
      </button>

      <div className="pagination__pages">
        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={`dots-${idx}`} className="pagination__dots">
              ...
            </span>
          ) : (
            <button
              key={p}
              type="button"
              className={`pagination__page ${page === p ? "pagination__page--active" : ""}`}
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className="pagination__nav"
        disabled={page === totalPages}
        onClick={() => setPage(Math.min(totalPages, page + 1))}
      >
        <span>Next</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  );
}

export default function Category() {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [openCategory, setOpenCategory] = useState(null);
  const [openStyle, setOpenStyle] = useState(null);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (cat) =>
    setOpenCategory((prev) => (prev === cat ? null : cat));
  const toggleStyle = (style) =>
    setOpenStyle((prev) => (prev === style ? null : style));

  const products = useMemo(() => PRODUCTS, []);

  return (
    <div className="category-page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="#home">Home</a>
          <span>&gt;</span>
          <span className="breadcrumb__current">Casual</span>
        </nav>

        <div className="category-layout">
          <div
            className={`filters-wrap ${mobileFiltersOpen ? "filters-wrap--open" : ""}`}
          >
            <div
              className="filters-overlay"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <FiltersPanel
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              openCategory={openCategory}
              toggleCategory={toggleCategory}
              openStyle={openStyle}
              toggleStyle={toggleStyle}
            />
          </div>

          <main className="category-main">
            <div className="category-main__header">
              <h1>Casual</h1>
              <div className="category-main__meta">
                <span className="category-main__count">
                  Showing 1-10 of 100 Products
                </span>
                <div className="sort-select">
                  <button
                    type="button"
                    className="sort-select__btn"
                    onClick={() => setSortOpen((o) => !o)}
                  >
                    Sort by: <strong>{sortBy}</strong>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {sortOpen && (
                    <ul className="sort-select__menu">
                      {SORT_OPTIONS.map((opt) => (
                        <li key={opt}>
                          <button
                            type="button"
                            onClick={() => {
                              setSortBy(opt);
                              setSortOpen(false);
                            }}
                          >
                            {opt}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mobile-filter-trigger"
              onClick={() => setMobileFiltersOpen(true)}
            >
              Filters
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <circle cx="9" cy="6" r="1.6" fill="currentColor" />
                <circle cx="15" cy="12" r="1.6" fill="currentColor" />
                <circle cx="9" cy="18" r="1.6" fill="currentColor" />
              </svg>
            </button>

            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <hr className="category-main__divider" />

            <Pagination page={page} setPage={setPage} />
          </main>
        </div>
      </div>
    </div>
  );
}