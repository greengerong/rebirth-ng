npm run github:deploy
git checkout gh-pages
npm run compodocs:deploy
cp ./dist/compodocs ./
git add ./compodocs/** --all
git commit -m "rebirth ui compodocs docs deploy"
git push
echo 'compodocs docs deploy success...........'
git checkout master
