import React from "react";
import Image from "next/image";
import img1 from "../../../bestplantimg1.webp";
import img2 from "../../../bestplantimg2.webp";
import img3 from "../../../bestplantimg3.webp";
import img4 from "../../../bestplantimg4.webp";
import "./BestPlants.css"; // Import custom CSS file

export default function BestPlants() {
  return (
    <section className="best-plants-section">
      <div className="container">
        <div className="title">
          <h1>Best Plants</h1>
        </div>
        <div className="plants-grid">
          {/* Plant Card - Snake Plant */}
          <div className="plant-card">
            <Image src={img1} alt="Snake Plant" className="plant-image" />
            <div className="plant-info">
              <h2>Snake Plant</h2>
              <h3>(Sansevieria)</h3>
              <p>Purifies the air and produces oxygen. Low-maintenance, perfect for indoor spaces. Boosts mood and improves air quality.</p>
            </div>
          </div>

          {/* Plant Card - Spider Plant */}
          <div className="plant-card">
            <Image src={img2} alt="Spider Plant" className="plant-image" />
            <div className="plant-info">
              <h2>Spider Plant</h2>
              <h3>(Chlorophytum)</h3>
              <p>Easy-to-care, attractive plant for homes. Purifies air, produces oxygen, and beautifies. Ideal for hanging baskets or pots.</p>
            </div>
          </div>

          {/* Plant Card - Peace Lily */}
          <div className="plant-card">
            <Image src={img3} alt="Peace Lily" className="plant-image" />
            <div className="plant-info">
              <h2>Peace Lily</h2>
              <h3>(Spathiphyllum)</h3>
              <p>Purifies air, promotes peace, and tranquility. Beautiful white blooms produce oxygen. Perfect for bedrooms, living rooms.</p>
            </div>
          </div>

          {/* Plant Card - Bamboo Palm */}
          <div className="plant-card">
            <Image src={img4} alt="Bamboo Palm" className="plant-image" />
            <div className="plant-info">
              <h2>Bamboo Palm</h2>
              <h3>(Chamaedorea)</h3>
              <p>Elegant, air-purifying plant. Produces oxygen, softens indoor environments. Ideal for living rooms, bedrooms, offices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
