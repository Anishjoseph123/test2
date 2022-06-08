//1
let randomValue = { name: 'Lydia' };
randomValue = 23;
if (!typeof randomValue === "string") {
    console.log("It is not a string!");
} else {
    console.log("Yay its a string!");
}
//output: YAy its a string
//2
const createMember = ({ email, address = {} }) => {
    const validEmail = /.+\@.+\..+/.test(email)
    if (!validEmail)
        throw new Error("Valid email pls");
    return {
        email,
        address:address?address:null
    }
}
const member = createMember({ email: "my@emsil.com" })
console.log(member);
//output:{email: 'my@emsil.com', address: {…}}
 //3
// const keys = ["name", "age"];
// const values = ["Lydia", 22];
// const method = Object[method](keys.map((_, i) => {
//     return [keys[i],values[i]]
// }))
//output: Uncaught ReferenceError: Cannot access 'method' before initialization
//4
// const promise1 = Promise.resolve("First");
// const promise2 = Promise.resolve("Second");
// const promise3 = Promise.reject("Third");
// const promise4 = Promise.resolve("Fourth");
// const runPromises = async() => {
//     const res1 = await Promise.all([promise1, promise2]);
//     const res2 = Promise.all([promise3, promise4]);
//     return [res1,res2]
// }
// runPromises().then(res => console.log(res)).catch(err => console.log(err))
//output: [Array(2), Promise]
// Uncaught (in promise) Third
//5
// const user = {
//     email: 'my@email.com',
//     updateEmail: email => {
//         this.email = email
//     }
// }
// user.updateEmail("new@email.com")
// console.log(user.email);
//output:my@email.com
//6
const fruit = ['🍌', '🍊', '🍎'];
fruit.slice(0, 1);
fruit.splice(0, 1);
fruit.unshift('🍇');
console.log(fruit);
//output:['🍇', '🍊', '🍎']
//7
const user = {
    email: 'e@mail.com',
    password:12345
}
const updateUser = ({ email, password }) => {
    if (email) {
        Object.assign(user,{email})
    }
    if (password) {
        user.password = password;
    }
    return user;
}
const updatedUser = updateUser({ email: "new@email.com" })
console.log(updatedUser === user);
//outpt:true
//8
class Calc{
    constructor() {
        this.count = 0;
    }
    increase() {
        this.count++;
 }
}
const calc = new Calc();
new Calc().increase()
console.log(calc.count);
//output:0

//9a
let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach(num => {
    if (num)
        count+=1
})
console.log(count);
//output:3

//9b
class Bird{
    constructor() {
        console.log("I am a bird.🦢");
    }
}
class Flamingo extends Bird{
    constructor() {
        console.log("I am pink.🌺");
        super()
    }
}
const pet = new Flamingo();
//output:I am pink.🌺
//I am a bird.🦢

//10
// const person = {
//     name: 'Lydia Hallie',
//     hobbies:['coding'],
// }
// function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
// }
// addHobby('running', []);
// addHobby('dancing');
// addHobby('baking', person.hobbies);
// console.log(person.hobbies);
//output:['coding', 'dancing', 'baking']

//11
const teams =
    [
        { name: "Team1", members: ['Paul', 'Lisa'] },
    {
            name:'Team2',members:['Laura','Tim']
        },
    ]
function* getMembers(members) {
    for (let i = 0; i < members, length; i++){
        yield members[i]
    }
}
function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
        //🌟Something is missing here🌟
    }
     }
    const obj = getTeams(teams);
    console.log(obj.next());
    console.log(obj.next());
    //output:{value: undefined, done: true}  {value: undefined, done: true}

    //12
    // class Counter{
    //     #number = 10;
    //     increment() {
    //         this.#number++
    //     }
    //     getNum() {
    //         return this.#number;
    //     }
    // }
    // const counter = new Counter();
    // counter.increment()
    // console.log(counter.#number);
    //output: Uncaught SyntaxError: Private field '#number' must be declared in an enclosing class

    //13
    // const myPromise = Promise.resolve(Promise.resolve('Promise!'));
    // function funcOne() {
    //     setTimeout(() => {
    //         console.log('Timeout 1!')
    //     }, 0);
    //     myPromise.then(res=>res).then(res=>console.log(`${res} 1!`))
    //     console.log('Last Line 1!');
    // }
    // async function funcTwo() {
    //     const res = await myPromise;
    //     console.log(`${res}2!`);
    //     setTimeout(() => console.log('Timeout 2!'), 0)
    //     console.log('Last Line 2!');
    // }
    // funcOne()
    // funcTwo()
    //output:
    //Last Line 1!
    //Promise!2!
    // Last Line 2!
    // Promise! 1!
    // Timeout 1!
    // Timeout 2!

    //14a
    // const name = 'Lydia Hallie';
    // console.log(!typeof name === 'object');
    // console.log(!typeof name === 'string');
    //output: false
    //false

    //14b
    const myMap = new Map();
    const myFunc = () => 'greeting'
    console.log(myMap.set(myFunc, 'Hello World!'));
    console.log(myMap.get('greeting'));
    console.log(myMap.get(myFunc));
    console.log(myMap.get(() => 'greeting'))
    //output:
    //Map(1) {ƒ => 'Hello World!'}[[Entries]]0: {() => 'greeting' => "Hello World!"}size: 1[[Prototype]]: Map
    // undefined
    // Hello World!
    //undefined

    //15
    const emojis = ['🌟', '🥑', '😍'];
    console.log(emojis.map(x => x + '🌟'));
    console.log(emojis.filter(x => x !== '🥑'));
    console.log(emojis.find(x => x !== '🥑'));
    emojis.reduce((acc, cur) => acc + '🌟');
    console.log(emojis.slice(1, 2, '🌟'));
    console.log(emojis.splice(1, 2, '🌟'));
    //output:
    // (3) ['🌟🌟', '🥑🌟', '😍🌟']
    // (2) ['🌟', '😍']
    //  🌟
    //  ['🥑']
    //  (2) ['🥑', '😍']

    //16
    const set = new Set();
    set.add(1);
    set.add('Lydia');
    set.add({ name: 'Lydia' })
    for (let item of set) {
        console.log(item + 2);
    }
    //output:
    //3
    // Lydia2
    // [object Object]2

    //17

    // function getItems(fruitList, ...args, favouriteFruit) {
    //     return [...fruitList,...args,favouriteFruit]
    // }
    // getItems(["banana","apple"],"pear","orange")
    //output: Uncaught SyntaxError: Rest parameter must be last formal parameter.


    //19
    // fetch("https://api.github.com/users").then((res)=>res.json()).then(res=>console.log(res))
    //output: Array of objects
    //20

    const box = { x: 10, y: 20 };
    Object.freeze(box);
    const shape = box;
    shape.x = 100;
    console.log(shape);
//output:{x: 10, y: 20}
