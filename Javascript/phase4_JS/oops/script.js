//======================CONSTRUCTOR FUNCTION========================================
//use PascalCase to write the name of constructor function for easy identification


//default value
function CreateBook (){
    this.bookName = "Harry Potter series";
    this.author = "JK Rowling";
}
//creating instance of the function
let book1 = new CreateBook() //instance created
console.log(book1)

//parameter value
function CreateBook1 (bookName, author, pages){
    this.bookName = bookName;
    this.author = author;
    this.page = pages;
    this.frontpage = function(){
        console.log("Book Name: ", this.bookName)
        console.log("Author Name: ", this.author)
        console.log("Pages: ", pages) //670 for book2
    }
}
//creating instance of the function
let book2 = new CreateBook1("HP - The Philosopher's Stone", "JK Rowling", 670) //instance created
console.log(book2)

let book3 = new CreateBook1("HP - The Sorcerer's Stone", "JK Rowling", 540) //instance created
console.log(book3)

book2.frontpage()
book3.frontpage()

//-----------------------------CREATING CONSTRUCTOR IN CLASS---------------------------------------------
//CLASS IS A SYNTACTICAL SUGAR IN JS

class MakeStudents{
constructor(fname, lname, age, isVerified){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.isVerified =isVerified;
    
    this.showProfile = function(){ //function inside constructor
        if(isVerified)
        console.log(`${this.fname} ${this.lname}, ${this.age} years old.`);
    else 
        console.log("Student not verified")
    }
}
}

let S1 = new MakeStudents("Amit", "Singh", 23, true)
S1.showProfile()

//...............................................................

class MakeStudent{
constructor(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
}

showProfile = function(){ //function is inside class
    console.log(`${this.fname} ${this.lname}, ${this.age} years old.`)
}
}

let Student1 = new MakeStudent("Mansi", "Singh", 23)
Student1.showProfile()

//...............................................................

class MakeStudent1{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    
}

let show = function(){ //function is outside class
    console.log(`${this.fname} ${this.lname}, ${this.age} years old.`)
}

MakeStudent1.prototype.showProfile = show; //adding show function in the prototype of the class in showProfile

let Stud1 = new MakeStudent1("Manvi", "Singh", 23)
Stud1.showProfile()

//====================================INHERITANCE===========================================

//------------------------------classical inheritance----------------------------------------
class User{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    greetUser = function(){ //function is outside constructor, so it will be in prototype of class
    console.log(`Welcome ${this.fname} ${this.lname}`)
}
}
let u1 = new User("Esha", 'Deol');
u1.greetUser()


class Admin extends User{
    constructor(fname, lname, contact, age){
        super(fname, lname) //we will use 'super' keyword to fetch the constructor of parent class
        this.contact = contact;
        this.age = age;
    }
    addCourse = function(course){
        console.log("course added")
    }
}

let a1 = new Admin("Admin", "Don", 9999, 21)
// a1.greetUser()
console.log(a1)

let u2 = new User()
// u2.addCourse()//not a function

//----------------------------------method overriding------------------------------------------------

class Demo{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("welcome User", this.name)
    }
}
class A extends Demo{

    constructor(name, age){
        super(name);
        this.age = age;
    }
    greet(){ //this function overrides the function present in it's parent class
        console.log("welcome", this.name) 
    }
}

let ab = new A("Harshit"); //instance of class A
ab.greet()