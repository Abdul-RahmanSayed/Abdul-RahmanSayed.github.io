import { writeFileSync } from 'fs';
import { join } from 'path';

const distPath = join(process.cwd(), 'dist');
const nojekyllPath = join(distPath, '.nojekyll');

writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll file in dist/');
console.log('✓ Build complete! The dist/ folder is ready for GitHub Pages deployment.');
console.log('\nNext steps:');
console.log('1. Commit and push all changes to your GitHub repository');
console.log('2. Go to your repository Settings > Pages');
console.log('3. Set Source to "GitHub Actions"');
console.log('4. The workflow will automatically deploy on push to main branch');
