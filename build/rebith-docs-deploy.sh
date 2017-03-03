#!/usr/bin/env bash
npm run demo:gen
npm run compodocs:deploy
git checkout gh-pages
cp -rf ./dist/compodocs ./
git add ./compodocs/** --all
git commit -m "rebirth ui compodocs docs deploy"
git push -f origin gh-pages
echo 'compodocs docs deploy success...........'
git checkout master
rm -rf ./dist
rm -rf ./compodocs

