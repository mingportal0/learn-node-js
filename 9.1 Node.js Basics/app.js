// nodejs는 export를 사용해 모듈을 외부로 내보내고 require을 사용해서 import 한다.
// nodejs는 모듈 단위로 실행되기 때문에 독립적인 scope를 가지며 전역변수 중복 문제가 생기지 않는다.
const http = require('http');

// http 서버 생성
// HTTP 서버 객체는 EventEmiitter 클래스를 상속한 것으로 request Listener 함수를 호출한다.
// request Listener 함수는 request 이벤트가 발생하면 Http request를 처리해 response를 반환한다.
http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World!');
}).listen(3000);// 포트 3000을 할당하였다.

console.log('Server running at http://localhost:3000/');