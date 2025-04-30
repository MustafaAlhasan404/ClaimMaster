const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');
const optimizedDir = path.join(process.cwd(), 'public', 'images', 'optimized');

// Create a backup directory if it doesn't exist
const backupDir = path.join(process.cwd(), 'public', 'images', 'backup');
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function replaceWithOptimized() {
  try {
    // Get all optimized WebP files
    const optimizedFiles = fs.readdirSync(optimizedDir);
    
    console.log(`Found ${optimizedFiles.length} optimized WebP files to replace`);
    
    // Create a total size reduction tracker
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of optimizedFiles) {
      const originalPath = path.join(imagesDir, file);
      const optimizedPath = path.join(optimizedDir, file);
      const backupPath = path.join(backupDir, file);
      
      // Make sure the original file exists
      if (!fs.existsSync(originalPath)) {
        console.log(`Original file ${file} not found, skipping`);
        continue;
      }
      
      // Create a backup of the original file
      fs.copyFileSync(originalPath, backupPath);
      console.log(`Created backup of ${file}`);
      
      // Get sizes for statistics
      const originalSize = fs.statSync(originalPath).size;
      const optimizedSize = fs.statSync(optimizedPath).size;
      
      totalOriginalSize += originalSize;
      totalOptimizedSize += optimizedSize;
      
      // Replace the original with the optimized version
      fs.copyFileSync(optimizedPath, originalPath);
      console.log(`Replaced ${file} with optimized version`);
    }
    
    // Calculate and display total savings
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(2);
    console.log(`
Total size reduction:
  Original: ${(totalOriginalSize/1024).toFixed(2)} KB
  Optimized: ${(totalOptimizedSize/1024).toFixed(2)} KB
  Reduction: ${totalReduction}%
    `);
    
    console.log('All optimized WebP images have been moved to their original locations!');
    console.log('Original images are backed up in public/images/backup');
  } catch (error) {
    console.error('Error replacing images:', error);
  }
}

replaceWithOptimized(); 