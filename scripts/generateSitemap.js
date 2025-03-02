const { writeFile } = require("fs/promises");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

// Get base URL from environment variables
const BASE_URL = process.env.SITE_URL || "http://localhost:3000"; // Fallback for local testing

const languages = ["en", "ja", "ar", "es", "zh"];
const pages = [
  "",
  "amazon",
  "ebay",
  "facebook",
  "wise",
  "paypal",
  "upwork",
  "fiverr",
  "twitter",
  "walmart",
  "stripe",
  "payoneer",
  "instagram",
];

const generateSitemap = async () => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  languages.forEach((lang) => {
    pages.forEach((page) => {
      const url = page ? `${BASE_URL}/${lang}/${page}` : `${BASE_URL}/${lang}`;
      xml += `  <url>\n`;
      xml += `    <loc>${url}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      xml += `  </url>\n`;
    });
  });

  xml += `</urlset>`;

  // Use __dirname directly
  const filePath = path.join(__dirname, "../public/sitemap.xml");

  try {
    await writeFile(filePath, xml);
    console.log("✅ Sitemap generated successfully!");
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
};

// Run the function manually
generateSitemap();
