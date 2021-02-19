let a = 6;
let b = 5;
function simpleTag(strings, aValExpession, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpession);
  console.log(bValExpression);
  console.log(sumExpression);
  return "foobar";
}
/*     let untaggedResult = `${a}+${b}=${a + b}`;
let taggedResult = simpleTag`${a}+${b}=${a + b}`; */
function simpleTag(strings,...expressions){
    console.log(strings);
    console.log(expressions);
    for(const expression of expressions){
        console.log(expression)
    }
    return 'foobar';
}
// let taggedResult=simpleTag`${a}+${b}=${a+b}`;

// symbol
// let genericSymbol=Symbol('foo');
// console.log(genericSymbol)
// let s=Symbol.for('foo')
// console.log(Symbol.keyFor(s))

/* 一元操作符 */

let num1=2;
let num2=20;
//前缀
// let num3=--num1+num2;
// 后缀
let num3=num1--+num2;    
let num4=num1+num2;
/* console.log(num3);
console.log(num4); */




