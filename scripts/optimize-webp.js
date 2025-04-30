const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeWebP() {
  try {
    // Get all WebP files in the images directory
    const files = fs.readdirSync(imagesDir);
    const webpFiles = files.filter(file => path.extname(file).toLowerCase() === '.webp');
    
    console.log(`Found ${webpFiles.length} WebP files to optimize`);
    
    for (const file of webpFiles) {
      const filePath = path.join(imagesDir, file);
      const outputPath = path.join(outputDir, file);
      
      // Skip if the file already exists in the optimized directory
      if (fs.existsSync(outputPath)) {
        console.log(`Skipping ${file} - already optimized`);
        continue;
      }
      
      console.log(`Optimizing ${file}...`);
      
      // Get image metadata
      const metadata = await sharp(filePath).metadata();
      
      // Determine quality based on image size
      // Larger images get more compression
      let quality = 80;
      if (metadata.width > 1500 || metadata.height > 1500) {
        quality = 70;
      }
      if (metadata.width > 2500 || metadata.height > 2500) {
        quality = 60;
      }
      
      // Optimize WebP
      await sharp(filePath)
        .webp({ 
          quality: quality, 
          effort: 6,  // Higher effort = better compression but slower
          lossless: false
        })
        .toFile(outputPath);
        
      console.log(`Successfully optimized ${file} (quality: ${quality})`);
      
      // Check size reduction
      const originalSize = fs.statSync(filePath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
      
      console.log(`Size reduced from ${(originalSize/1024).toFixed(2)}KB to ${(optimizedSize/1024).toFixed(2)}KB (${reduction}% reduction)`);
    }
    
    console.log('All WebP optimizations completed!');
  } catch (error) {
    console.error('Error optimizing WebP images:', error);
  }
}

optimizeWebP(); 