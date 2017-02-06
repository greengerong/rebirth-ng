## npm run github:deploy
## npm run compodocs:deploy
git checkout gh-pages
cp ./dist/compodocs ./
git add ./compodocs/** --all
git commit -m "rebirth ui compodocs docs deploy"
git push
echo 'compodocs docs deploy success...........'
## git checkout master
