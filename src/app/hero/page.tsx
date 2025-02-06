import Image from "next/image";
import img2 from "../../../heroimg2.jpg";
import Link from "next/link";
import "./Hero.css"; // Import custom CSS file

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Plants for a Healthy Life</h1>
          <p>
            Bring the outdoors in with our vibrant collection of plants! Each one is carefully 
            selected to provide a touch of nature&apos;s beauty and serenity to your space. Whether 
            you are looking for low-maintenance options or statement pieces, our plants will 
            breathe life into your home or office.
          </p>
          <div className="button-container">
            <Link href="/bestPlants">
              <div className="btn">
                Best Plants
              </div>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image src={img2} alt="plant" className="plant-image" />
        </div>
      </div>
    </section>
  );
}
