const fs = require('fs');
const path = require('path');

// Instructions for adding your profile image:
console.log(`
🖼️  Profile Image Setup Instructions:

1. Save your profile image as 'profile.png' in the public folder
2. Or run this script after placing your image file in this directory
3. The image should be in PNG format for best compatibility

Current setup:
- About page: ✅ Updated to show your profile image
- Home page: ✅ Updated to show your profile image alongside Brain icon
- Image path: /public/profile.png

To add your image:
1. Copy your profile photo to: ai-research-site/public/profile.png
2. Make sure it's named exactly 'profile.png'
3. Refresh your browser to see the changes

If you need to convert or rename your image:
- On Mac: You can use Preview to export as JPG
- On Windows: You can use Paint or Photos app
- Online: Use any image converter

The code includes fallbacks, so if the image doesn't load, it will show the Brain icon instead.
`);

// Optional: Copy a file if provided as argument
const imageArg = process.argv[2];
if (imageArg && fs.existsSync(imageArg)) {
  const publicDir = path.join(__dirname, 'public');
  const targetPath = path.join(publicDir, 'profile.png');
  
  try {
    fs.copyFileSync(imageArg, targetPath);
    console.log(`✅ Successfully copied ${imageArg} to ${targetPath}`);
  } catch (error) {
    console.error(`❌ Error copying file: ${error.message}`);
  }
} else if (imageArg) {
  console.error(`❌ File not found: ${imageArg}`);
} 