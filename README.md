# `GDSC` Frontend Final Project 🦾

Final Project repository에 오신 것을 환영합니다!

# 1. Commit Rules

**commit rule**과 **상세한 메세지** 잊지 마세요🔥!

```md
feat |> 새로운 기능 추가
fix |> 버그 수정
docs |> md 문서 수정
style |> 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor |> 코드 리펙토링
chore |> 빌드 업무 수정, 패키지(package.json...) 수정
test |> 테스트 코드, 리펙토링 테스트 코드 추가
```

# 2. 프로젝트 Setup

1. **vscode** 확장 설치

    - prettier
    - eslint

2. **pnpm** 설치

    ```bash
    npm i -g pnpm
    ```

3. 프로젝트 **clone**

4. 프로젝트 패키지 **설치**

    ```bash
    pnpm i
    ```

    > `node_modules` 가 생성되는 것을 확인하세요!

5. 프로젝트 **dev** script 실행

    > 프로덕션 전, 개발을 할 때 사용합니다.

    ```bash
    pnpm dev
    ```

    **localhost:3000** 번으로 개발 서버가 열리는 것을 확인해주세요!

6. 프로젝트 **build** script 테스트

    > `vite`가 build를 잘 수행해주는 지 확인해주세요!

    ```bash
    pnpm build
    ```

    > `dist` 폴더가 생성된 것을 확인할 수 있어야 합니다.

7. 프로젝트 **preview** script 테스트

    잘 build된 프로젝트를 이제 실행해봅시다.

    > build결과인 `dist` 폴더를 테스트하는 과정입니다!

    ```bash
    pnpm preview
    ```

    **localhost:4173** 개발 서버가 열리는 것을 확인해주세요!

8. 개발 **시작**!

    **이제 모든 준비는 끝났습니다! 개발 하러 가볼까요?**

# 3. 프로젝트 Stack

## 개발 환경 셋팅 🍙

1. `eslint`
2. `prettier`
3. `husky`
4. `lint-staged`

## 개발 Core Stack 🚀

1. `vite`(v4.x.x) - **통합 개발 툴 / 번들러**
2. `React`(v18.x.x) - **UI 라이브러리**
3. ...

---

...여기서 끝나지 않아요!
