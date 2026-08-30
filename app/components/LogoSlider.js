"use client";

const logos = [
  "apple", "google", "meta", "samsung", "intel", "cisco", "dell", "hp",
  "lenovo", "asus", "acer", "nvidia", "amd", "sony", "xiaomi", "huawei",
  "youtube", "instagram", "whatsapp", "tiktok", "snapchat", "reddit",
  "discord", "twitch", "pinterest", "tesla", "toyota", "bmw", "audi",
  "volkswagen", "porsche", "ferrari", "lamborghini", "ford", "chevrolet",
  "honda", "nissan", "hyundai", "kia", "cocacola", "mcdonalds", "kfc",
  "burgerking", "starbucks", "redbull", "nike", "adidas", "puma",
  "underarmour", "zara", "newbalance", "reebok", "visa", "mastercard",
  "paypal", "americanexpress", "stripe", "bankofamerica", "hsbc",
  "westernunion", "revolut", "netflix", "paramountplus", "spotify",
  "playstation", "ea", "ikea", "target", "ebay", "fedex",
];

const logoColors = {
  apple: "A2AAAD",
  google: "4285F4",
  meta: "1877F2",
  samsung: "1428A0",
  intel: "0071C5",
  cisco: "1BA0D7",
  dell: "007DB8",
  hp: "0096D6",
  lenovo: "E2231A",
  asus: "12B3F4",
  acer: "83B81A",
  nvidia: "76B900",
  amd: "ED1C24",
  sony: "000000",
  xiaomi: "FF6900",
  huawei: "D90429",
  youtube: "FF0000",
  instagram: "E4405F",
  whatsapp: "25D366",
  tiktok: "000000",
  snapchat: "FFFC00",
  reddit: "FF4500",
  discord: "5865F2",
  twitch: "9146FF",
  pinterest: "E60023",
  tesla: "CC0000",
  toyota: "EB0A1E",
  bmw: "0066B1",
  audi: "000000",
  volkswagen: "1E5AA8",
  porsche: "D5001C",
  ferrari: "DC0000",
  lamborghini: "D9B44A",
  ford: "1D2D5C",
  chevrolet: "E31837",
  honda: "ED1C24",
  nissan: "C3002F",
  hyundai: "0E4DA4",
  kia: "05141F",
  cocacola: "F40009",
  mcdonalds: "FBCB00",
  kfc: "C8102E",
  burgerking: "D62300",
  starbucks: "00704A",
  redbull: "FECF2F",
  nike: "111111",
  adidas: "000000",
  puma: "E11E2F",
  underarmour: "C3002F",
  zara: "000000",
  newbalance: "CE1126",
  reebok: "FF0000",
  visa: "1A1F71",
  mastercard: "EB001B",
  paypal: "00457C",
  americanexpress: "2E77BC",
  stripe: "635BFF",
  bankofamerica: "012169",
  hsbc: "DB0011",
  westernunion: "FFB81C",
  revolut: "FF4F00",
  netflix: "E50914",
  paramountplus: "00A9E0",
  spotify: "1DB954",
  playstation: "003087",
  ea: "A3D500",
  ikea: "0058A3",
  target: "CC0000",
  ebay: "E53238",
  fedex: "4D148C",
};

function LogoChip({ name }) {
  const color = logoColors[name] || "000000";

  return (
    <div className="logo-chip">
      <img
        src={`https://cdn.simpleicons.org/${name}/${color}`}
        alt={name}
        loading="lazy"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className="logo-fallback" style={{ display: "none" }}>
        {name.slice(0, 2).toUpperCase()}
      </div>
      <span className="logo-name">
        {name.charAt(0).toUpperCase() + name.slice(1).replace(/plus/g, "+").replace(/([A-Z])/g, " $1").trim()}
      </span>
    </div>
  );
}

export default function LogoSlider() {
  return (
    <section className="logo-slider-section">
      <div className="section-container">
        <div className="logo-slider-header">
          <span className="section-tag">Trusted By</span>
          <h3>Brands We Admire</h3>
          <p>Logos of well-known companies — swap these for your real client logos as you onboard them.</p>
        </div>
      </div>
      <div className="logo-slider-container">
        <div className="logo-slider-track">
          <div className="logo-slider-set">
            {logos.map((name, i) => (
              <LogoChip key={`a-${i}`} name={name} />
            ))}
          </div>
          <div className="logo-slider-set" aria-hidden="true">
            {logos.map((name, i) => (
              <LogoChip key={`b-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
