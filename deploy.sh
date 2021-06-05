rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
#git remote add origin git@gitee.com:suweih/gulu-ui-website.git &&
git remote add origin git@github.com:suweih/gulu-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://suweih.github.io/gulu-ui-website/index.html#/