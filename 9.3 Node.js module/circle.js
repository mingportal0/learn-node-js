const {PI} = Math;
// 외부에 공개할 대상을 exports 객체의 프로퍼티 또는 메소드를 정의한다. 
// exports.area = r => PI * r * r;
// exports.circumference = r => 2 * PI * r;

// exports 객체는 프로퍼티 또는 메소드를 여러 개 정의할 수 있었다.
// 하지만 module.exports에는 하나의 값(원시 타입, 함수, 객체)을 할당할 수 있다.
module.exports = function(r){
    return{
        area(){ return PI * r * r; },
        circumference(){ return 2 * PI * r; }
    };
}