# TIL

잊어 버리기 쉬운 거, 자주 꺼내 보고 싶은 거, 퍼블릭해도 괜찮은 거, 사소한 거, 여기에 적을 예정

### …or create a new repository on the command line

```
echo "# TIL" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/~
git push -u origin main
```

### …or push an existing repository from the command line

```
git remote add origin https://github.com/~
git branch -M main
git push -u origin main
```

### git ignore commands

```
git config --global alias.ignore '!gi() { curl -L -s https://www.gitignore.io/api/$@ ;}; gi'

git ignore macOS >> .gitignore
```
