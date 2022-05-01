# Node.js의 module loading system
## exports
모듈은 독립적인 파일 스코프를 갖기 때문에 모듈 안에 선언한 모든 것들은 기본적으로 해당 모듈 내부에서만 참조 가능하다. 만약 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈들이 사용할 수 있게 하고 싶다면 exports 객체를 사용해야 한다.

### exports
exports에 값을 할당할 수는 없고 exports 객체에 프로퍼티나 메소드를 추가해 사용할 수 있다. require 함수 리턴값에서 exports 객체에 추가한 프로퍼티나 메소드를 사용할 수 있다.

### module.exports
원시타입, 함수, 객체를 할당해 사용한다. require 함수 리턴값에 할당한 값을 바로 사용할 수 있다.

## require
require함수는 파일뿐만 아니라 디렉토리를 지정할 수 있다. 디렉토리를 지정하면 해당 디렉토리 내 index.js를 로드한다.

## 코어 모듈과 파일 모듈
nodejs가 기본적으로 포함하고 있는 모듈을 코어 모듈이라고 한다.
```js
// 코어 모듈
const http = require('http');

// npm을 통해 설치한 외부 패키지 또한 패스를 명시하지 않아도 무방하다.
const mongoose = require('mongoose');

// 파일 모듈은 패스를 명시해야 한다.
const foo = require('./lib/foo');
```
