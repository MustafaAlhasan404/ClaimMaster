const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const supportedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

async function convertToWebP() {
  try {
    // Get all files in the images directory
    const files = fs.readdirSync(imagesDir);
    
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const fileExt = path.extname(file).toLowerCase();
      
      // Skip if not a supported image format
      if (!supportedExtensions.includes(fileExt)) continue;
      
      // Create output path with .webp extension
      const outputPath = path.join(
        imagesDir, 
        `${path.basename(file, fileExt)}.webp`
      );
      
      console.log(`Converting ${file} to WebP...`);
      
      // Convert image to WebP
      await sharp(filePath)
        .toFormat('webp')
        .webp({ quality: 80 }) // Adjust quality as needed
        .toFile(outputPath);
        
      console.log(`Successfully converted ${file} to WebP`);
    }
    
    console.log('All conversions completed!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertToWebP(); 