import React from 'react';

export const Git = () => {
	return ( 
		<div >
			<h2> Git</h2>
     <pre>{`
echo "# test333" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/yourusernamehere/yourreponame.git
git push -u origin main
          `}</pre>
		</div>
	);
}
export default Git;
