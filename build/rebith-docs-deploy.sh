npm run demo:deploy
npm run compodocs:deploy
git checkout gh-pages
cp -rf ./dist/compodocs ./
git add ./compodocs/** --all
git commit -m "rebirth ui compodocs docs deploy"
git push -f origin gh-pages
echo 'compodocs docs deploy success...........'
git checkout master
