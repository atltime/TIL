# git 명령어

#### 로컬 저장소의 git 히스토리 삭제

```
rm -rf .git
git init
```

#### 커밋 히스토리 확인

```
git log
git log --oneline --all
git log --oneline --all --graph
```

#### 커밋 파일 비교

```
git difftool
```

- <u>_h j k l_</u> 이동
- <u>_:q_ or _:qa_</u>로 vimm 종료

```
git config --global diff.tool vscode
git config --global difftool.vscode.cmd 'code --wait --diff $LOCAL $REMOTE'
```

- 이건 vscode로 열고 싶을 때
- Git Graph 플러그인 설치하면 그냥 쉽게 비교 가능

#### 브랜치

```
git branch 브랜치명
git switch 브랜치명
git merge 브랜치명(메인브랜치에서 해야함)
```

- conflict 해결은 원하는 코드만 남기고 git add git commit하면 됨

##### 브랜치 삭제

```
로컬 삭제는 간단
git switch main // 삭제 대상이 아닌 브랜치로 이동
git checkout main // 이것도 가능

git branch -d <branch>

원격에서 브랜치 삭제
git push orgin --delete <branch>
```
