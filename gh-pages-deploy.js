import ghpages from 'gh-pages';
import fs from 'fs';

fs.writeFile('build/.nojekyll', '', () => {
	ghpages.publish('build', {
		dest: 'docs',
		dotfiles: true
	});
});
