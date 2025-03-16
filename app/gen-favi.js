const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    // SVG content (copy from above SVG)
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="4" fill="#0D0D0D"/>
      <g fill="none" stroke="#4AF626" stroke-width="2" stroke-linecap="square">
        <path d="M8 8v16M8 16h6M14 8v16"/>
        <path d="M18 8v16M18 8h5a3 3 0 0 1 0 6h-5M18 14l6 10"/>
      </g>
      <path d="M4 4h4v4M28 4h-4v4M4 28h4v-4M28 28h-4v-4" 
            stroke="#4AF626" 
            stroke-width="1" 
            fill="none"/>
    </svg>`;

    // Create public directory if it doesn't exist
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Save SVG
    fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);

    // Generate ICO file with multiple sizes
    const sizes = [16, 32, 48];
    const pngBuffers = await Promise.all(
      sizes.map(size =>
        sharp(Buffer.from(svgContent))
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );

    // Write the ICO file
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.concat(pngBuffers));
    console.log('Favicon files generated successfully in public directory!');
  } catch (error) {
    console.error('Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();