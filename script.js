console.log('Hello World')
console.log("I'm a good guy!")


const firstName = 'Erik'
let age = 33
console.log(firstName, age)
//age is automatically converted to string, which is special in JavaScript  
console.log(firstName + ' is ' + age + ' years old')

age = 34
console.log(firstName + ' is ' + age + ' years old')

//let is mutable and can be any type.
let number = 10;        // 数字类型
let name1 = "doggyGPT";  // 字符串类型
let isValid = true;     // 布尔类型
let user = { name: "Alice", age: 25 }; // 对象类型
let colors = ["red", "green", "blue"]; // 数组类型
console.log(number, name1, isValid, user.name, colors)

//functions
const rocket = () => {
    console.log('🚀')
    let i = 5
    while (i > 0) {
        console.log(i)
        i--
    }
}
rocket()

//generate html list in js
document.addEventListener('DOMContentLoaded', function() {
    // 创建一个ul元素作为列表
    let ul = document.createElement('ul');

    // 创建列表项并添加到ul元素中
    for (let i = 1; i <= 4; i++) {
        let li = document.createElement('li');
        li.textContent = 'List item ' + i; // 设置列表项的文本内容
        ul.appendChild(li); // 将列表项添加到ul中
    }

    // 获取插入点的元素
    let container = document.getElementById('list-container');
    
    // 将列表(ul)插入到页面中
    container.appendChild(ul);
});

//change the Mode when click the button
// DOM Selection

const goDark = () => {
    console.log('Dark Mode')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'green'
    MessageChannel.innerText = 'Dark Mode'
}
const drkBtn = document.getElementById("drkBtn")
console.log(drkBtn)
drkBtn.addEventListener('click', goDark)

const goLight = () => {
    console.log('Light Mode')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    MessageChannel.innerText = 'Light Mode'
}
const lghtBtn = document.getElementById("lghtBtn")
console.log(lghtBtn)
lghtBtn.addEventListener('click', goLight)