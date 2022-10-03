//functions
function greetings()
{
    let name = "lucie";
console.log(`good morning ${name} !`)
}
greetings();

const replay = function()
{
    console.log("good morning,  how are you ?")
}
replay();
const calBalance = function (amount)
{
    let balance = amount*100;
    console.log("the balance is" , balance);
    return balance;
    
}
calBalance(2000000);

//arrow function

const area = (radius)=>{
    const pi = 3.14;
    let area =  pi * radius **2;
    return area; 

}
let  result = area(5);
console.log("the result is :", result );

// object
let user = {
    name : 'lavender',
    age  : 22,
    email : 'niyomutonilucie@gmail.com',
    blogs : ['why does love hurt?', 'did he really love me?'],
    location : 'bugesera',
    login : function()
    {
        console.log('the user logged in');
    },

    logBlogs : function()
    {
        console.log('this user has written written the following blowing:');
        this.blogs.forEach(blog=> {
            console.log(blog);
        })
    }
    };
console.log(user);
console.log(user.email);
console.log(user['age']);
user.name = 'lavendita';
console.log(user.name);
user.logBlogs();
user.login();
console.log(Math);

console.log("love is not about i love you and miss \n it is also about respect , faith and trust");
console.log(`sometimes we do things that  we know thata can even kill us \n but still we do it for thise ones we love the most `);
console.log('the only problem there is that \n most of the times those ones \n do not even notice that we are trying to do almost everthing for them \n they still get everything you do for them for granted')
console.log("5" -1);
console.log("5" +1);
console.log("lucie" - 3);
console.log("lavender" +4);
console.log("lavender" - "4");
console.log("" || "fifi");
console.log("lavender" || "lucie");

  

 
 