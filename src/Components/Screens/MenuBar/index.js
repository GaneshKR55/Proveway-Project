import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css"; // Custom styles if needed

const MenuBar = () => {
  const [selectedUnit, setSelectedUnit] = useState(2);
  const [size1, setSize1] = useState("S");
  const [size2, setSize2] = useState("S");
  const [color1, setColor1] = useState("Black");
  const [color2, setColor2] = useState("Colour");

  const pricing = {
    1: { price: 10, discount: "10% Off" },
    2: { price: 18, discount: "20% Off" },
    3: { price: 24, discount: "30% Off" },
  };

  return (
    <div
      className="container p-4 border rounded shadow"
      style={{ maxWidth: "400px" }}
    >
      <h5 className="text-center fw-bold" style={{ color: "rgb(247 103 128)" }}>
        YAY! It's BOGO
      </h5>
      {Object.entries(pricing).map(([unit, { price, discount, popular }]) => (
        <div
          key={unit}
          className={`border p-3 my-2 ${
            selectedUnit == unit ? "border-danger" : ""
          }`}
          style={selectedUnit == unit ? { background: "#fff9fb" } : {}}
        >
          <div
            className="form-check"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <input
                type="radio"
                className="form-check-input"
                id={`unit${unit}`}
                name="unit"
                value={unit}
                checked={selectedUnit == unit}
                onChange={() => setSelectedUnit(Number(unit))}
              />
              <label
                className="form-check-label"
                style={{ fontSize: "14px", fontWeight: "600" }}
                htmlFor={`unit${unit}`}
              >
                {unit} Unit{" "}
                <span
                  className="badge text-white ms-2"
                  style={{ backgroundColor: "#ff6b81" }}
                >
                  {discount}
                </span>
                <p style={{ fontSize: "11px", display: "flex" }}>
                  Standard Price
                </p>
              </label>
            </div>
            <div>
              {selectedUnit == 2 && selectedUnit == unit && (
                <span
                  className="badge  text-white"
                  style={{ backgroundColor: "#ff6b81" }}
                >
                  MOST POPULAR
                </span>
              )}
              <h6 className="fw-bold" style={{ fontSize: "10px" }}>
                ${price}.00 USD
              </h6>

              <p
                className="m-0 text-muted text-decoration-line-through"
                style={{
                  color: "#cdcdcd85",
                  "--bs-text-opacity": "1",
                  fontSize: "10px",
                }}
              >
                $24.00 USD
              </p>
            </div>
          </div>

          {unit == 1 && selectedUnit == 1 && (
            <div
              className="mt-2"
              // style={{ backgroundColor: "rgb(244 225 227)" }}
            >
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>

                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>

                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          {unit == 2 && selectedUnit == 2 && (
            <div
              className="mt-2"
              // style={{ backgroundColor: "rgb(244 225 227)" }}
            >
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>

                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>

                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          {unit == 3 && selectedUnit == 3 && (
            <div
              className="mt-2"
              // style={{ backgroundColor: "rgb(244 225 227)" }}
            >
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>

                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
              <div className="d-flex gap-2 mb-2">
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Size</label>

                  <select
                    className="form-select"
                    style={{ width: "100px" }}
                    // value={num === 1 ? size1 : size2}
                    onChange={(e) => setSize2(e.target.value)}
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div style={{ textAlign: "left" }}>
                  <label style={{ fontSize: "12px" }}>Colour</label>
                  <select
                    className="form-select"
                    // value={num === 1 ? color1 : color2}
                    onChange={(e) => setColor2(e.target.value)}
                  >
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Blue">Blue</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p className="fw-bold" style={{ color: "rgb(247 103 128)" }}>
            Free Delivery
          </p>
        </div>
        <div>
          <h5 className="fw-bold">
            Total: ${pricing[selectedUnit].price}.00 USD
          </h5>
        </div>
      </div>
      <button
        className="btn w-100"
        style={{ backgroundColor: "rgb(247 103 128)", color: "#ffff" }}
      >
        + Add to Cart
      </button>
      <p
        style={{
          textAlign: "end",
          color: "#bfbfbf",
          fontSize: "12px",
          fontStyle: "italic",
        }}
      >
        @ Powered by Pumper
      </p>
    </div>
  );
};

export default MenuBar;
