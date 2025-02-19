# **📚 MVC 설계**
- `App.js` : `Controller` 객체를 생성 후 실행 시켜주는 역할.

## **🗃️ Model**
- `BridgeGame.js` : 게임 진행에 필요한 변수를 처리하거나 반환한다.
- `BridgeMaker.js` : 다리의 길이를 입력 받아서 다리를 생성해준다.
- `BridgeRandomNumberGenerator.js` : `0` 또는 `1`의 난수를 발생시켜 반환한다.
- `Validator.js` : 유효성 검사를 하여, `boolean`값으로 반환하거나, `Error`를 발생시킨다.

## **🖼️ View**
- `InputView.js` : 입력값을 받는 역할.
- `OutputView.js` : 출력값을 보여주는 역할.

## **🎮 Controller**
- `Controller.js`: 다리 건너기 게임을 관리하는 역할.

--- 

# **🗂️ 디렉터리 구조 (Directory Structure)**

    📂 docs/ : 전체 문서 모음
    ┗━ 📂 img/ : 문서 이미지 관리
            ┣━🖼️ mvc_role_diagram.png : MVC 첨부 이미지 파일
            ┗━🖼️ FlowChart.png : 순서도 이미지 파일
        ┗━ 📑 README.md : 애플리케이션 기획 및 구성
    📂 __tests__/ : 테스트 관리 폴더
    ┣━ 📑 ApplicationTest.js : 애플리케이션 전체 테스트
    ┣━ 📑 BridgeGameTest.js : BridgeGame 단위 테스트
    ┗━ 📑 BridgeMakerTest.js : BridgeMaker 단위 테스트
    📂 src/ : 소스파일 폴더
    ┗━ 📂 views : 입출력 담당 관리 폴더
        ┣━ 📑 InputView.js : 사용자로부터 입력을 받는 역할을 한다.
        ┗━ 📑 OutputView.js : 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다. 
    ┗━ 📂 util : 유틸 관리 폴더
        ┣━ 📑 constants.js : 상수 관리 파일
        ┣━ 📑 ErrorMessage.js : 에러 메세지 문자열 관리 파일
        ┣━ 📑 helper.js : 기타 추가 함수
        ┗━ 📑 Message.js : 메세지 문자열 관리 파일
    ┣━ 📑 App.js : Controller 객체를 호출하는 파일
    ┣━ 📑 Controller.js : 게임 전체 프로세서를 관리하며, 필요한 값을 호출하는 파일
    ┣━ 📑 BridgeGame.js : 게임을 진행시 변수를 저장하며, 필요한 값을 반환한다.
    ┣━ 📑 BridgeMaker.js : 입력받은 사이즈 만큼 다리 생성
    ┣━ 📑 BridgeRandomNumberGenerator.js : 난수 생성 파일 
    ┗━ 📑 Validator.js : 유효성 검사 파일

---

# **⬇️ 다리 건너기 APP 순서도 (FlowChart)**

<img src="img/FlowChart.png">

<br/>

---

# **🎮 [다리건너기] 기능 단위 구현 목록**

작성방법 : 🟥: 미완성 / 🟧: 진행중 / ✅: 완료 / ❎: 리펙토링중

<br/>

## **🛎️ 게임 시작하기**

## **✅ 다리 생성 👷‍♂️**
1. [X] 다리 길이 입력 메세지를 출력합니다.
2. [X] 다리 길이를 입력 받습니다.
    - [X] 다리 길이는 3부터 20 사이의 숫자여야 합니다.
3. [X] 다리는 U(위 칸) / D(아래 칸) 로 생성되며, 하나만 건널 수 있는 칸이다.
4. [X] 무작위 값이 `0`인 경우 D(아래 칸), `1`인 경우 U(위 칸)이 건널 수 있는 칸이된다.
5. [X] 다리 칸을 생성하기 위한 Random 값은 아래와 같이 추출한다.
  ```js
    const number = generateRandomNumber();
  ```

### **⛔ [Error] 다리 생성 예외처리**
1. [X] 다리 길이는 3부터 20 사이의 숫자여야 한다.
2. [X] 잘못된 값을 입력한 경우, `throw`로 [ERROR]"로 시작하는 에러 메시지를 발생시킨 후 다시 입력을 받는다.

## **✅ 다리 모델링 🌉**
1. [X] 다리는 왼쪽에서 오른쪽으로 건넌다.
2. [X] 이동할 수 있는 칸을 선택한 경우 O 표시
3. [X] 이동할 수 없는 칸을 선택한 경우 X 표시
4. [X] 선택하지 않은 칸은 공백 한 칸으로 표시
5. [X] 다리의 시작은 [, 다리의 끝은 ]으로 표시
6. [X] 다리 칸의 구분은 |(앞뒤 공백 포함) 문자열로 구분
7. [X] 현재까지 건넌 다리를 모두 출력

## **✅ 다리 건너기 게임 시작 🦑**
1. [X] 위(U) / 아래(D) 중 하나를 입력받는다. (위: U, 아래: D)
    - [X] U(위 칸)와 D(아래 칸) 중 하나의 문자를 입력할 수 있다.
2. [X] 선택된 칸이 이동 가능한 칸인지 확인한다.
3. [X] 현재 다리 상태를 출력한다.
4. [X] 실패할 경우, 실패한 결과로 넘어간다.
5. [X] 성공할 경우, 남은 다리가 있으면 1번으로 남은 다리가 없으면 성공한 결과로 넘어간다. 

### **⛔ [Error] 다리 건너기 예외처리**
1. [X] 위 칸: `U` / 아래 칸: `D` 중 하나의 문자만 입력할 수 있다.
2. [X] 잘못된 값을 입력한 경우, `throw`로 [ERROR]"로 시작하는 에러 메시지를 발생시킨 후 다시 입력을 받는다.

## **🟥 결과 🎯**
### **🥳 성공한 결과**
1. [X] 🚪종료하기로 넘어간다.

### **😵 실패한 결과**
1. [X] 게임을 다시 시도할지 여부를 입력. (재시도: R, 종료: Q)
    - [X] 재시도: `R` / 종료: `Q` 중 하나의 문자를 입력할 수 있다.
2. [X] `R` (재시도) 일 경우, 다시 첫칸부터 🌉다리 건너기를 시작한다.
    - [X] 다리는 재생성 하지 않고 그대로 쓴다.
    - [X] 시도한 횟수 카운트를 1증가 시킨다.
3. [X] `Q` (종료) 일 경우, 🚪종료하기로 넘어간다.

### **⛔ [Error] 결과**
1. [X] 재시도: `R` / 종료: `Q` 중 하나의 문자만 입력할 수 있다.
2. [X] 잘못된 값을 입력한 경우 `throw`로 [ERROR]"로 시작하는 에러 메시지를 발생시킨 후 입력을 다시 받는다.

## **🟥 게임 종료하기 🚪**
1. [X] `최종 게임 결과` 문구 출력
2. [X] 현재 다리 출력
3. [X] `게임 성공 여부` 문구 출력 (성공/실패)
4. [X] 총 시도한 횟수 출력
5. [X] 어플리케이션 종료

## **🟥 기타 체크사항 🎸**
1. [X] `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력
2. [X] `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.
3. [X] 함수(또는 메서드)의 **길이가 10라인**을 넘어가지 않도록 구현한다
4. [X] 메서드의 파라미터 개수는 **최대 3개까지**만 허용한다.
5. [X] `BridgeRandomNumberGenerator` 코드는 변경할 수 없다.
6. [X] `BridgeMaker` 프로퍼티를 추가할 수 없다.
7. [X] `BridgeMaker` 파일 경로는 변경할 수 없다.
8. [X] `BridgeMaker` 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.

<br/>

# **🛠️ 프로그래밍 요구 조건 정리**

## **⭐ 주요 요구 조건**

- #### ⭐ 함수(또는 메서드)의 **길이가 10라인**을 넘어가지 않도록 구현한다
- #### ⭐ 메서드의 파라미터 개수는 **최대 3개까지**만 허용한다.
- #### ⭐ `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받을 수 있다. 
- #### ⭐ `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.
- #### ⭐ `InputView`, `OutputView`, `BridgeGame`, `BridgeMaker` 클래스(또는 객체)의 [요구사항](../README.md#inputview-객체)을 참고하여 구현한다.
<br/>

- #### ⭐ **else**를 지양한다. 
- #### ⭐ 도메인 로직에 단위 테스트를 구현해야 한다. 
- #### ⭐ 프로그램 **실행의 시작점**은 `App.js`의 `play` 메서드이다.
- #### ⭐ **Airbnb 자바스크립트** 스타일 가이드🎨 기준으로 작성한다.
- #### ⭐ **Random 값 추출**은 MissionUtils 라이브러리📕의 `Random.pickUniqueNumbersInRange()`를 활용한다.
- #### ⭐ **MissionUtils 라이브러리📕**에서 제공하는 `Random` 및 `Console API`를 사용하여 구현해야 한다.
- #### ⭐ **사용자의 값을 입력 받고 출력**하기 위해서는 **MissionUtils 라이브러리📕**에서 제공하는 `Console.readLine`, `Console.print`를 활용한다.
- #### ⭐ 기능을 구현하기 전 `docs/README.md`에 **구현할 기능 목록📋**을 정리해 추가한다.
- #### ⭐ **Git의 커밋 단위🧩**는 앞 단계에서 `docs/README.md`에 정리한 **기능 목록 단위📎**로 추가한다.
- #### ⭐ **Jest를 이용**하여 **정리한 기능 목록**이 정상 동작함을 **테스트 코드로 확인**한다.
<br/>

## **📌 기타 요구 조건**

- #### **기능을 구현하기 전**에 **기능 목록📋** 을 만든다.
- #### **기능 단위📎** 로 커밋 하는 방식으로 진행한다.
- #### **Node.js 14 버전⚡**에서 실행 가능해야 한다.
- #### 프로그램 구현이 완료되면 `ApplicationTest`의 **모든 테스트가 성공✅**해야 한다.
- #### **indent(인덴트, 들여쓰기) ➡️depth**를 **3이 넘지 않도록** 구현한다. 2까지만 허용한다.
- #### **함수(또는 메서드)** 가 **한 가지 일☝️**만 하도록 최대한 작게 만들어라.
- #### 🚫 `package.json`을 변경할 수 없다.
- #### 🚫 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않는다.
- #### 🚫 프로그램 종료 시, `process.exit()`를 호출하지 않는다.
- #### 🚫 패키지 이름을 **수정**하거나 **이동**하지 않는다.

<br/>

---
# **💡 git commit 메세지 컨벤션**

- **🗒️ message(메세지) 구조**

  ```
  feat(changelog): 추가 로그인 함수

  로그인 API 개발

  Resolves: #123
  Ref: #456
  Related to: #48, #45
  ```

- **🔖 type (타입) 의 종류 :**

  - ✨ feat : 새로운 기능을 추가할 경우
  - 🐛 fix : 버그를 고친 경우
  - 📝 docs : 문서를 수정한 경우
  - 🎨 style : 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
  - ♻️ refactor : 프로덕션 코드 리팩토링
  - ✅ test: 테스트 추가, 테스트 리팩토링 (코드 변경 X)
  - 📦 chore : 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우 (코드 변경 X)

    <br/>

  - 💄 design : CSS 등 사용자 UI 디자인 변경
  - 💡 comment : 필요한 주석 추가 및 변경
  - 🚚 rename : 파일 혹은 폴더명을 수정하는 경우
  - 🔥 remove : 사용하지 않는 파일 혹은 폴더를 삭제하는 경우

<br/>

---