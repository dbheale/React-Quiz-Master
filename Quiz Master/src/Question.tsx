export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  type: QuestionType;
  question: string;
  answer: string;
  reason: string;
  options: string[];
}

export type Category = "pl" | "dsa" | "wd";
export type Difficulty = "e" | "m" | "h";
export type QuestionType = "mc" | "tf";

export const Questions: Array<Question> = [
  // Easy - Multiple Choice
  {
    id: "pl-e-1",
    category: "pl",
    difficulty: "e",
    question:
      "What is the main difference between `==` and `===` in JavaScript?",
    reason:
      "`==` checks for equality with type conversion, while `===` checks for equality without type conversion.",
    options: [
      "nothing",
      "`==` checks for equality with type conversion",
      "`===` checks for equality with type conversion",
      "none of the above",
    ],
    answer: "`==` checks for equality with type conversion",
    type: "mc",
  },
  {
    id: "pl-e-2",
    category: "pl",
    difficulty: "e",
    question: "Which keyword is used to define a variable in Python?",
    reason:
      "`var` is not used in Python; variables are defined by simply assigning a value, e.g., `x = 10`.",
    options: ["var", "let", "declare", "none of the above"],
    answer: "none of the above",
    type: "mc",
  },
  {
    id: "pl-e-3",
    category: "pl",
    difficulty: "e",
    question: "What does the `print()` function do in Python?",
    reason: "The `print()` function outputs text to the console.",
    options: [
      "Runs a program",
      "Outputs text to the console",
      "Opens a file",
      "None of the above",
    ],
    answer: "Outputs text to the console",
    type: "mc",
  },
  {
    id: "pl-e-4",
    category: "pl",
    difficulty: "e",
    question: "How do you declare a variable in Java?",
    reason:
      "You declare a variable by specifying the data type followed by the variable name, e.g., `int age = 30;`.",
    options: ["int age = 30;", "let age = 30;", "var age = 30;", "age = 30;"],
    answer: "int age = 30;",
    type: "mc",
  },
  {
    id: "pl-e-5",
    category: "pl",
    difficulty: "e",
    question: "Which symbol is used for single-line comments in C++?",
    reason: "`//` is used for single-line comments in C++.",
    options: ["/*", "//", "#", "--"],
    answer: "//",
    type: "mc",
  },
  {
    id: "pl-e-6",
    category: "pl",
    difficulty: "e",
    question: "What does `console.log()` do in JavaScript?",
    reason: "`console.log()` outputs a message to the web console.",
    options: [
      "Saves data to a file",
      "Outputs a message to the web console",
      "Displays an alert box",
      "None of the above",
    ],
    answer: "Outputs a message to the web console",
    type: "mc",
  },
  {
    id: "pl-e-7",
    category: "pl",
    difficulty: "e",
    question: "In Python, what will `type(42)` return?",
    reason:
      "`type(42)` will return `<class 'int'>`, indicating that `42` is an integer.",
    options: ["int", "float", "<class 'int'>", "None of the above"],
    answer: "<class 'int'>",
    type: "mc",
  },
  {
    id: "pl-e-8",
    category: "pl",
    difficulty: "e",
    question: "How do you create a string in Java?",
    reason:
      'In Java, strings are created using double quotes, e.g., `String greeting = "Hello";`.',
    options: [
      "String greeting = 'Hello';",
      'String greeting = "Hello";',
      "string greeting = 'Hello';",
      'string greeting = "Hello";',
    ],
    answer: 'String greeting = "Hello";',
    type: "mc",
  },
  {
    id: "pl-e-9",
    category: "pl",
    difficulty: "e",
    question: "What keyword is used to define a function in Python?",
    reason: "In Python, functions are defined using the `def` keyword.",
    options: ["function", "def", "func", "declare"],
    answer: "def",
    type: "mc",
  },
  {
    id: "pl-e-10",
    category: "pl",
    difficulty: "e",
    question: "How do you create an array in JavaScript?",
    reason:
      "In JavaScript, arrays are created using square brackets, e.g., `let arr = [1, 2, 3];`.",
    options: [
      "let arr = {1, 2, 3};",
      "let arr = [1, 2, 3];",
      "let arr = (1, 2, 3);",
      "None of the above",
    ],
    answer: "let arr = [1, 2, 3];",
    type: "mc",
  },
  {
    id: "pl-e-11",
    category: "pl",
    difficulty: "e",
    question: "Which language uses `.py` as its file extension?",
    reason: "Python uses `.py` as its file extension.",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "Python",
    type: "mc",
  },
  {
    id: "pl-e-12",
    category: "pl",
    difficulty: "e",
    question: "In Java, what is the default value of an `int` variable?",
    reason: "The default value of an `int` in Java is `0`.",
    options: ["1", "null", "undefined", "0"],
    answer: "0",
    type: "mc",
  },
  {
    id: "pl-e-13",
    category: "pl",
    difficulty: "e",
    question: "How do you start a multi-line comment in C++?",
    reason: "Multi-line comments in C++ start with `/*` and end with `*/`.",
    options: ["//", "#", "`", "/*"],
    answer: "/*",
    type: "mc",
  },
  {
    id: "pl-e-14",
    category: "pl",
    difficulty: "e",
    question:
      "Which function is used to parse a string to an integer in Python?",
    reason:
      "The `int()` function is used to parse a string to an integer in Python.",
    options: ["int()", "str()", "parseInt()", "float()"],
    answer: "int()",
    type: "mc",
  },
  {
    id: "pl-e-15",
    category: "pl",
    difficulty: "e",
    question: "In JavaScript, what will `typeof NaN` return?",
    reason:
      '`typeof NaN` returns `"number"` because `NaN` is considered a numeric value in JavaScript.',
    options: ["NaN", "undefined", "number", "string"],
    answer: "number",
    type: "mc",
  },
  // Easy - True/False
  {
    id: "pl-e-16",
    category: "pl",
    difficulty: "e",
    question:
      "In JavaScript, `let` is used to declare variables with block scope.",
    reason:
      "The `let` keyword in JavaScript allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-17",
    category: "pl",
    difficulty: "e",
    question:
      "In Python, you must explicitly declare the data type of a variable.",
    reason:
      "In Python, data types are dynamically inferred; you don't need to declare the type of a variable explicitly.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-e-18",
    category: "pl",
    difficulty: "e",
    question:
      "In Java, `public static void main(String[] args)` is the entry point of a Java program.",
    reason:
      "The `main` method in Java is the entry point for any Java program, and it must be public, static, and void.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-19",
    category: "pl",
    difficulty: "e",
    question:
      "The `print()` function in Python can print multiple items separated by commas.",
    reason:
      "The `print()` function in Python can take multiple arguments, which are separated by spaces by default when printed.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-20",
    category: "pl",
    difficulty: "e",
    question:
      "In C++, the `#include` directive is used to include header files.",
    reason:
      "In C++, `#include` is a preprocessor directive used to include the contents of a file or library in the program.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-21",
    category: "pl",
    difficulty: "e",
    question: "JavaScript is a compiled language.",
    reason:
      "JavaScript is an interpreted language, meaning code is executed line-by-line by the JavaScript engine.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-e-22",
    category: "pl",
    difficulty: "e",
    question: "In Python, strings are immutable.",
    reason:
      "Once a string is created in Python, it cannot be modified. Any operation that seems to modify it will create a new string.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-23",
    category: "pl",
    difficulty: "e",
    question: "In Java, arrays are dynamically sized.",
    reason:
      "In Java, arrays have a fixed size, and once they are created, their size cannot be changed.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-e-24",
    category: "pl",
    difficulty: "e",
    question: "The `def` keyword in Python is used to define a function.",
    reason: "In Python, functions are defined using the `def` keyword.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-25",
    category: "pl",
    difficulty: "e",
    question: "In JavaScript, `typeof null` returns `object`.",
    reason:
      "`typeof null` returns `object` due to a historical bug in JavaScript that was never fixed.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-26",
    category: "pl",
    difficulty: "e",
    question: "In C++, the `int` data type can store decimal numbers.",
    reason:
      "The `int` data type in C++ is used to store integer values, not decimal numbers.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-e-27",
    category: "pl",
    difficulty: "e",
    question:
      "In Python, you can use the `+=` operator to concatenate strings.",
    reason:
      "The `+=` operator in Python can be used to concatenate strings by appending one string to another.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-28",
    category: "pl",
    difficulty: "e",
    question:
      "In JavaScript, variables declared with `var` have function scope.",
    reason:
      "Variables declared with `var` in JavaScript are scoped to the function, meaning they can be accessed throughout the function.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-e-29",
    category: "pl",
    difficulty: "e",
    question: "In Java, a `null` reference can be dereferenced safely.",
    reason:
      "Dereferencing a `null` reference in Java will throw a `NullPointerException`, which is not safe.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-e-30",
    category: "pl",
    difficulty: "e",
    question: "Python's `range()` function generates a list of numbers.",
    reason:
      "In Python 3, `range()` returns a range object, which is an iterable, not a list.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  // Medium - Multiple Choice
  {
    id: "pl-m-31",
    category: "pl",
    difficulty: "m",
    question: "What is a lambda function in Python?",
    reason:
      "A lambda function is an anonymous, inline function defined with the `lambda` keyword in Python.",
    options: [
      "A type of list",
      "An anonymous inline function",
      "A debugging tool",
      "None of the above",
    ],
    answer: "An anonymous inline function",
    type: "mc",
  },
  {
    id: "pl-m-32",
    category: "pl",
    difficulty: "m",
    question: "How does Java handle memory management for objects?",
    reason:
      "Java uses an automatic garbage collection system to manage memory, freeing unused objects automatically.",
    options: [
      "Manual memory allocation",
      "Automatic garbage collection",
      "Reference counting",
      "None of the above",
    ],
    answer: "Automatic garbage collection",
    type: "mc",
  },
  {
    id: "pl-m-33",
    category: "pl",
    difficulty: "m",
    question: "What is the purpose of the `final` keyword in Java?",
    reason:
      "The `final` keyword in Java is used to declare constants, prevent method overriding, or inheritance.",
    options: [
      "To declare a variable",
      "To define a constant",
      "To prevent method overriding or inheritance",
      "Both b and c",
    ],
    answer: "Both b and c",
    type: "mc",
  },
  {
    id: "pl-m-34",
    category: "pl",
    difficulty: "m",
    question: "In Python, what do `*args` and `**kwargs` represent?",
    reason:
      "`*args` allows passing a variable number of positional arguments, while `**kwargs` allows passing a variable number of keyword arguments.",
    options: [
      "Positional and keyword arguments",
      "Integer and string arguments",
      "Class and function arguments",
      "None of the above",
    ],
    answer: "Positional and keyword arguments",
    type: "mc",
  },
  {
    id: "pl-m-35",
    category: "pl",
    difficulty: "m",
    question: "What does the `++` operator do in C++?",
    reason: "The `++` operator in C++ increments the value of a variable by 1.",
    options: [
      "Adds two variables",
      "Increments a variable by 1",
      "Decrements a variable by 1",
      "None of the above",
    ],
    answer: "Increments a variable by 1",
    type: "mc",
  },
  {
    id: "pl-m-36",
    category: "pl",
    difficulty: "m",
    question: "What is the difference between `let` and `var` in JavaScript?",
    reason: "`let` has block scope, whereas `var` has function scope.",
    options: [
      "Block scope vs. function scope",
      "Immutable vs. mutable",
      "Global vs. local scope",
      "None of the above",
    ],
    answer: "Block scope vs. function scope",
    type: "mc",
  },
  {
    id: "pl-m-37",
    category: "pl",
    difficulty: "m",
    question: "How do you handle exceptions in Python?",
    reason:
      "In Python, exceptions are handled using `try`, `except`, and optionally `finally` blocks.",
    options: [
      "try-except-finally",
      "try-catch-finally",
      "try-except-catch",
      "None of the above",
    ],
    answer: "try-except-finally",
    type: "mc",
  },
  {
    id: "pl-m-38",
    category: "pl",
    difficulty: "m",
    question: "What is polymorphism in Java?",
    reason:
      "Polymorphism in Java allows methods to do different things based on the object it is acting upon, typically achieved through method overriding and overloading.",
    options: [
      "Single inheritance",
      "Multiple inheritance",
      "Ability of a method to take multiple forms",
      "None of the above",
    ],
    answer: "Ability of a method to take multiple forms",
    type: "mc",
  },
  {
    id: "pl-m-39",
    category: "pl",
    difficulty: "m",
    question: "How do you define an interface in Java?",
    reason:
      "Interfaces in Java are defined using the `interface` keyword, e.g., `public interface MyInterface { }`.",
    options: ["interface", "abstract", "class", "None of the above"],
    answer: "interface",
    type: "mc",
  },
  {
    id: "pl-m-40",
    category: "pl",
    difficulty: "m",
    question: "What does `this` refer to in JavaScript?",
    reason:
      "`this` refers to the current object in context, depending on where it is used.",
    options: [
      "The global object",
      "The current object in context",
      "The parent object",
      "None of the above",
    ],
    answer: "The current object in context",
    type: "mc",
  },
  {
    id: "pl-m-41",
    category: "pl",
    difficulty: "m",
    question: "What is the purpose of the `super` keyword in Java?",
    reason:
      "`super` is used to refer to the parent class's constructor, methods, or properties.",
    options: [
      "To access parent class constructor or methods",
      "To create an instance",
      "To override methods",
      "None of the above",
    ],
    answer: "To access parent class constructor or methods",
    type: "mc",
  },
  {
    id: "pl-m-42",
    category: "pl",
    difficulty: "m",
    question: "How do you concatenate strings in Python?",
    reason:
      'In Python, strings are concatenated using the `+` operator, e.g., `"Hello " + "World"`.',
    options: [
      "Using the `&` operator",
      "Using the `+` operator",
      "Using the `concat()` function",
      "None of the above",
    ],
    answer: "Using the `+` operator",
    type: "mc",
  },
  {
    id: "pl-m-43",
    category: "pl",
    difficulty: "m",
    question:
      "What is the difference between `abstract class` and `interface` in Java?",
    reason:
      "An abstract class can have method implementations, while an interface cannot (until Java 8 with default methods).",
    options: [
      "Abstract class has method implementations",
      "Interface has method implementations",
      "Both have method implementations",
      "None of the above",
    ],
    answer: "Abstract class has method implementations",
    type: "mc",
  },
  {
    id: "pl-m-44",
    category: "pl",
    difficulty: "m",
    question: "How does Python's `pass` statement work?",
    reason:
      "`pass` is a null operation; it serves as a placeholder where code will eventually go.",
    options: [
      "It skips an iteration",
      "It does nothing",
      "It exits a function",
      "None of the above",
    ],
    answer: "It does nothing",
    type: "mc",
  },
  {
    id: "pl-m-45",
    category: "pl",
    difficulty: "m",
    question: "What is the use of the `==` operator in Java?",
    reason:
      "`==` checks for reference equality for objects and value equality for primitive types.",
    options: [
      "Check reference equality",
      "Check value equality",
      "Both a and b",
      "None of the above",
    ],
    answer: "Both a and b",
    type: "mc",
  },
  // Medium - True/False
  {
    id: "pl-m-46",
    category: "pl",
    difficulty: "m",
    question: "In JavaScript, `const` allows reassignment of the variable.",
    reason:
      "Variables declared with `const` in JavaScript cannot be reassigned.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-47",
    category: "pl",
    difficulty: "m",
    question: "In Python, the `__init__` method is a constructor.",
    reason:
      "`__init__` is the constructor method in Python, called when an object is created.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-48",
    category: "pl",
    difficulty: "m",
    question: "In Java, a class can extend multiple classes.",
    reason:
      "Java does not support multiple inheritance for classes, meaning a class cannot extend multiple classes.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-49",
    category: "pl",
    difficulty: "m",
    question:
      "In C++, a destructor is automatically called when an object goes out of scope.",
    reason:
      "Destructors in C++ are automatically called when an object goes out of scope to clean up resources.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-50",
    category: "pl",
    difficulty: "m",
    question:
      "In JavaScript, `null` and `undefined` are considered equal when using `==`.",
    reason:
      "When using `==`, JavaScript considers `null` and `undefined` equal.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-51",
    category: "pl",
    difficulty: "m",
    question: "In Python, lists are immutable.",
    reason:
      "Lists in Python are mutable, meaning their elements can be changed after they are created.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-52",
    category: "pl",
    difficulty: "m",
    question: "Java supports both pass-by-value and pass-by-reference.",
    reason:
      "Java only supports pass-by-value. Even objects are passed by the value of their reference.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-53",
    category: "pl",
    difficulty: "m",
    question: "In C++, you can overload operators.",
    reason:
      "Operator overloading allows C++ operators to have user-defined meanings based on their operands.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-54",
    category: "pl",
    difficulty: "m",
    question:
      "In JavaScript, the `typeof` operator can distinguish between arrays and objects.",
    reason:
      '`typeof` in JavaScript returns `"object"` for both arrays and objects.',
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-55",
    category: "pl",
    difficulty: "m",
    question:
      "In Python, `__name__` is a special variable that holds the name of the module.",
    reason:
      '`__name__` is a special variable in Python that is set to `"__main__"` when the module is run directly.',
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-56",
    category: "pl",
    difficulty: "m",
    question:
      "In Java, the `static` keyword is used to create class methods and variables.",
    reason:
      "The `static` keyword in Java is used to create methods and variables that belong to the class rather than instances.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-57",
    category: "pl",
    difficulty: "m",
    question: "JavaScript supports function hoisting.",
    reason:
      "In JavaScript, function declarations are hoisted to the top of their containing scope.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-58",
    category: "pl",
    difficulty: "m",
    question: "In Python, tuples are mutable.",
    reason:
      "Tuples in Python are immutable, meaning their elements cannot be changed after they are created.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-m-59",
    category: "pl",
    difficulty: "m",
    question:
      "In C++, a `template` allows functions and classes to operate with generic types.",
    reason:
      "`template` in C++ allows the creation of functions and classes that work with any data type.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-m-60",
    category: "pl",
    difficulty: "m",
    question: "JavaScript objects are iterable by default.",
    reason:
      "JavaScript objects are not iterable by default, unlike arrays or strings.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  // Hard - Multiple Choice
  {
    id: "pl-h-61",
    category: "pl",
    difficulty: "h",
    question:
      "What is tail recursion, and how is it optimized in functional languages like Python?",
    reason:
      "Tail recursion occurs when a recursive function calls itself as its last action, allowing some languages to optimize by reusing stack frames.",
    options: [
      "A function that returns a tail",
      "A recursive function that calls itself as its last action",
      "A recursive function that does not return",
      "None of the above",
    ],
    answer: "A recursive function that calls itself as its last action",
    type: "mc",
  },
  {
    id: "pl-h-62",
    category: "pl",
    difficulty: "h",
    question: "Explain the difference between shallow and deep copy in Python.",
    reason:
      "A shallow copy creates a new object but inserts references into the original objects, whereas a deep copy creates a new object and recursively copies all objects found in the original.",
    options: [
      "Shallow copy duplicates objects; deep copy duplicates references",
      "Shallow copy creates references; deep copy duplicates objects",
      "Both create references",
      "None of the above",
    ],
    answer: "Shallow copy creates references; deep copy duplicates objects",
    type: "mc",
  },
  {
    id: "pl-h-63",
    category: "pl",
    difficulty: "h",
    question: "How does Java's Just-In-Time (JIT) compiler work?",
    reason:
      "The JIT compiler translates Java bytecode into native machine code at runtime, optimizing the code for execution.",
    options: [
      "Translates source code to bytecode",
      "Compiles code before runtime",
      "Translates bytecode to native code at runtime",
      "None of the above",
    ],
    answer: "Translates bytecode to native code at runtime",
    type: "mc",
  },
  {
    id: "pl-h-64",
    category: "pl",
    difficulty: "h",
    question:
      "What is the difference between synchronous and asynchronous programming in JavaScript?",
    reason:
      "Synchronous programming executes tasks sequentially, blocking the next task until the current one finishes, while asynchronous programming allows tasks to be executed in parallel or delayed until certain events occur.",
    options: [
      "Synchronous is parallel, asynchronous is sequential",
      "Synchronous is sequential, asynchronous is parallel",
      "Both are sequential",
      "Both are parallel",
    ],
    answer: "Synchronous is sequential, asynchronous is parallel",
    type: "mc",
  },
  {
    id: "pl-h-65",
    category: "pl",
    difficulty: "h",
    question: "What are closures in JavaScript, and how do they work?",
    reason:
      "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.",
    options: [
      "Functions with no variables",
      "Functions without return statements",
      "Functions that retain access to their lexical scope",
      "None of the above",
    ],
    answer: "Functions that retain access to their lexical scope",
    type: "mc",
  },
  {
    id: "pl-h-66",
    category: "pl",
    difficulty: "h",
    question:
      "Explain the concept of method overloading vs. method overriding in Java.",
    reason:
      "Method overloading occurs when multiple methods in a class have the same name but different parameters, while method overriding occurs when a subclass provides a specific implementation for a method already defined in its superclass.",
    options: [
      "Overloading involves inheritance, overriding does not",
      "Overriding involves inheritance, overloading does not",
      "Both involve inheritance",
      "None of the above",
    ],
    answer: "Overriding involves inheritance, overloading does not",
    type: "mc",
  },
  {
    id: "pl-h-67",
    category: "pl",
    difficulty: "h",
    question:
      "What is the Global Interpreter Lock (GIL) in Python, and how does it affect multithreading?",
    reason:
      "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously, which can be a bottleneck in CPU-bound multithreaded programs.",
    options: [
      "A lock that improves multithreading",
      "A mutex that prevents parallel execution of Python code",
      "A feature that allows parallel execution of threads",
      "None of the above",
    ],
    answer: "A mutex that prevents parallel execution of Python code",
    type: "mc",
  },
  {
    id: "pl-h-68",
    category: "pl",
    difficulty: "h",
    question: "In Java, what is the difference between `==` and `equals()`?",
    reason:
      "`==` checks for reference equality (if two references point to the same object), while `equals()` checks for logical equality (if two objects are considered equal based on their content).",
    options: [
      "`==` checks value equality, `equals()` checks reference equality",
      "`==` checks reference equality, `equals()` checks logical equality",
      "Both check value equality",
      "None of the above",
    ],
    answer:
      "`==` checks reference equality, `equals()` checks logical equality",
    type: "mc",
  },
  {
    id: "pl-h-69",
    category: "pl",
    difficulty: "h",
    question: "How does the event loop work in Node.js?",
    reason:
      "The event loop in Node.js processes events and executes asynchronous callbacks, allowing for non-blocking I/O operations by continuously checking the event queue and executing tasks when the stack is clear.",
    options: [
      "Executes tasks in parallel",
      "Executes tasks sequentially",
      "Processes events and executes callbacks",
      "None of the above",
    ],
    answer: "Processes events and executes callbacks",
    type: "mc",
  },
  {
    id: "pl-h-70",
    category: "pl",
    difficulty: "h",
    question:
      "Explain the concept of immutability in functional programming with examples from Python.",
    reason:
      "Immutability refers to the inability to change an object's state once it is created. In Python, strings and tuples are examples of immutable objects.",
    options: [
      "Variables can be changed",
      "Variables cannot be changed",
      "Functions cannot be changed",
      "None of the above",
    ],
    answer: "Variables cannot be changed",
    type: "mc",
  },
  {
    id: "pl-h-71",
    category: "pl",
    difficulty: "h",
    question: "What are Java annotations, and how are they used?",
    reason:
      "Annotations in Java are metadata tags that provide information to the compiler and can be used to influence the behavior of the code at runtime, typically used for things like configuration, documentation, and error checking.",
    options: [
      "Tags for code documentation",
      "Metadata tags for configuration and runtime behavior",
      "Methods for performance optimization",
      "None of the above",
    ],
    answer: "Metadata tags for configuration and runtime behavior",
    type: "mc",
  },
  {
    id: "pl-h-72",
    category: "pl",
    difficulty: "h",
    question:
      "How does JavaScript handle asynchronous operations without multithreading?",
    reason:
      "JavaScript uses the event loop, callbacks, promises, and async/await to manage asynchronous operations, allowing non-blocking execution in a single-threaded environment.",
    options: [
      "Using multithreading",
      "Using callbacks and event loop",
      "Using recursion",
      "None of the above",
    ],
    answer: "Using callbacks and event loop",
    type: "mc",
  },
  {
    id: "pl-h-73",
    category: "pl",
    difficulty: "h",
    question: "Explain how garbage collection works in Python.",
    reason:
      "Python uses reference counting and a cyclic garbage collector to manage memory. Reference counting tracks the number of references to each object, while the cyclic garbage collector identifies and cleans up circular references.",
    options: [
      "By tracking memory allocation",
      "By reference counting and cyclic garbage collection",
      "By manual deallocation",
      "None of the above",
    ],
    answer: "By reference counting and cyclic garbage collection",
    type: "mc",
  },
  {
    id: "pl-h-74",
    category: "pl",
    difficulty: "h",
    question:
      "What are monads in functional programming, and how can they be used in languages like Python?",
    reason:
      "A monad is a design pattern used to handle side effects in functional programming. It encapsulates values and allows for chaining operations while maintaining context, often seen in the use of `Maybe`, `Either`, or `Promise` in Python.",
    options: [
      "A function with no side effects",
      "A design pattern to handle side effects",
      "A data structure",
      "None of the above",
    ],
    answer: "A design pattern to handle side effects",
    type: "mc",
  },
  {
    id: "pl-h-75",
    category: "pl",
    difficulty: "h",
    question: "What is the significance of the volatile keyword in Java?",
    reason:
      "The `volatile` keyword in Java ensures that changes to a variable are visible to all threads immediately, preventing threads from caching values locally and thus ensuring the most up-to-date value is always read.",
    options: [
      "Prevents caching of variables",
      "Ensures variable is read from main memory",
      "Both a and b",
      "None of the above",
    ],
    answer: "Both a and b",
    type: "mc",
  },
  // Hard - True/False
  {
    id: "pl-h-76",
    category: "pl",
    difficulty: "h",
    question: "In Java, abstract classes can have fully implemented methods.",
    reason:
      "Abstract classes in Java can contain fully implemented methods as well as abstract methods.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-77",
    category: "pl",
    difficulty: "h",
    question:
      "In Python, you can change the elements of a tuple after it is created.",
    reason:
      "Tuples in Python are immutable, so their elements cannot be changed after they are created.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-78",
    category: "pl",
    difficulty: "h",
    question: "In JavaScript, `async` functions always return a Promise.",
    reason:
      "An `async` function in JavaScript always returns a Promise, which can be resolved or rejected.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-79",
    category: "pl",
    difficulty: "h",
    question: "Java allows multiple inheritance through interfaces.",
    reason:
      "Java does not support multiple inheritance through classes, but it allows it through interfaces.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-80",
    category: "pl",
    difficulty: "h",
    question: "In Python, `__init__` is the destructor method.",
    reason:
      "`__init__` is the constructor method in Python, not the destructor.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-81",
    category: "pl",
    difficulty: "h",
    question: "In C++, templates are used for type-safe generic programming.",
    reason:
      "Templates in C++ allow for the creation of functions and classes that operate with any data type, ensuring type safety.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-82",
    category: "pl",
    difficulty: "h",
    question: "JavaScript's `let` keyword allows hoisting.",
    reason:
      "`let` in JavaScript does not allow hoisting in the same way that `var` does; variables declared with `let` are not initialized until their definition is evaluated.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-83",
    category: "pl",
    difficulty: "h",
    question: "In Python, the `with` statement is used for exception handling.",
    reason:
      "The `with` statement in Python simplifies exception handling by ensuring that resources are properly managed and cleaned up.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-84",
    category: "pl",
    difficulty: "h",
    question: "In Java, you can override static methods.",
    reason:
      "Static methods in Java are not associated with instances of the class, so they cannot be overridden.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-85",
    category: "pl",
    difficulty: "h",
    question: "In C++, `virtual` functions allow for runtime polymorphism.",
    reason:
      "Virtual functions in C++ allow derived classes to override a base class's function, enabling runtime polymorphism.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-86",
    category: "pl",
    difficulty: "h",
    question:
      "In JavaScript, `undefined` and `undeclared` variables are the same.",
    reason:
      "`undefined` refers to a variable that has been declared but not assigned a value, while `undeclared` refers to a variable that has not been declared.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-87",
    category: "pl",
    difficulty: "h",
    question:
      "Python's `global` keyword allows modification of global variables.",
    reason:
      "The `global` keyword in Python is used to modify a global variable within a local scope.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "pl-h-88",
    category: "pl",
    difficulty: "h",
    question:
      "In Java, the `finalize()` method is guaranteed to be called before an object is garbage collected.",
    reason:
      "The `finalize()` method in Java is not guaranteed to be called before an object is garbage collected, and its use is generally discouraged.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-89",
    category: "pl",
    difficulty: "h",
    question:
      "In Python, the `nonlocal` keyword is used to declare a variable in the global scope.",
    reason:
      "The `nonlocal` keyword in Python is used to modify a variable in the nearest enclosing scope that is not global.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "pl-h-90",
    category: "pl",
    difficulty: "h",
    question: "JavaScript's `async/await` simplifies working with Promises.",
    reason:
      "The `async/await` syntax in JavaScript allows for more readable and maintainable asynchronous code by handling Promises in a synchronous-like fashion.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  // Easy - Multiple Choice
  {
    id: "dsa-e-91",
    category: "dsa",
    difficulty: "e",
    question: "What is an array?",
    reason:
      "An array is a collection of elements, all of the same type, stored at contiguous memory locations.",
    options: [
      "A single data value",
      "A collection of elements of different types",
      "A collection of elements of the same type",
      "None of the above",
    ],
    answer: "A collection of elements of the same type",
    type: "mc",
  },
  {
    id: "dsa-e-92",
    category: "dsa",
    difficulty: "e",
    question: "How do you find the length of an array in Python?",
    reason:
      "You can find the length of an array using the `len()` function in Python, e.g., `len(arr)`.",
    options: ["size(arr)", "length(arr)", "len(arr)", "count(arr)"],
    answer: "len(arr)",
    type: "mc",
  },
  {
    id: "dsa-e-93",
    category: "dsa",
    difficulty: "e",
    question:
      "What is the time complexity of accessing an element in an array by index?",
    reason:
      "Accessing an element by index in an array is an O(1) operation, meaning it takes constant time.",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(1)",
    type: "mc",
  },
  {
    id: "dsa-e-94",
    category: "dsa",
    difficulty: "e",
    question: "What does FIFO stand for, and which data structure uses it?",
    reason: "FIFO stands for First-In-First-Out, and it is used by queues.",
    options: [
      "First-In-First-Out, used by stacks",
      "First-In-First-Out, used by queues",
      "First-In-First-Out, used by arrays",
      "None of the above",
    ],
    answer: "First-In-First-Out, used by queues",
    type: "mc",
  },
  {
    id: "dsa-e-95",
    category: "dsa",
    difficulty: "e",
    question: "What is a linked list?",
    reason:
      "A linked list is a linear data structure where each element points to the next, forming a sequence.",
    options: [
      "A collection of elements stored at contiguous memory locations",
      "A linear data structure where each element points to the next",
      "A data structure where elements are arranged in a hierarchical manner",
      "None of the above",
    ],
    answer: "A linear data structure where each element points to the next",
    type: "mc",
  },
  {
    id: "dsa-e-96",
    category: "dsa",
    difficulty: "e",
    question: "What is the main difference between a stack and a queue?",
    reason:
      "A stack uses LIFO (Last-In-First-Out), while a queue uses FIFO (First-In-First-Out).",
    options: [
      "Stack uses LIFO, queue uses FIFO",
      "Stack uses FIFO, queue uses LIFO",
      "Both use LIFO",
      "Both use FIFO",
    ],
    answer: "Stack uses LIFO, queue uses FIFO",
    type: "mc",
  },
  {
    id: "dsa-e-97",
    category: "dsa",
    difficulty: "e",
    question: "How do you insert an element into a stack?",
    reason: "You insert an element into a stack using the `push` operation.",
    options: ["enqueue", "push", "insert", "append"],
    answer: "push",
    type: "mc",
  },
  {
    id: "dsa-e-98",
    category: "dsa",
    difficulty: "e",
    question: "What is a binary tree?",
    reason:
      "A binary tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child.",
    options: [
      "A tree where each node has at most three children",
      "A tree where each node has at most two children",
      "A tree where each node has exactly one child",
      "None of the above",
    ],
    answer: "A tree where each node has at most two children",
    type: "mc",
  },
  {
    id: "dsa-e-99",
    category: "dsa",
    difficulty: "e",
    question: "What is the root of a tree?",
    reason:
      "The root is the topmost node in a tree, from which all other nodes descend.",
    options: [
      "The topmost node in a tree",
      "A node with no children",
      "A node with exactly two children",
      "None of the above",
    ],
    answer: "The topmost node in a tree",
    type: "mc",
  },
  {
    id: "dsa-e-100",
    category: "dsa",
    difficulty: "e",
    question: "What does DFS stand for?",
    reason:
      "DFS stands for Depth-First Search, which is an algorithm for traversing or searching tree or graph data structures.",
    options: [
      "Depth-First Search",
      "Data Flow Search",
      "Direct File Search",
      "None of the above",
    ],
    answer: "Depth-First Search",
    type: "mc",
  },
  {
    id: "dsa-e-101",
    category: "dsa",
    difficulty: "e",
    question: "What is a hash function?",
    reason:
      "A hash function maps input data of arbitrary size to fixed-size values, typically used in hash tables.",
    options: [
      "A function that sorts data",
      "A function that maps data to fixed-size values",
      "A function that encrypts data",
      "None of the above",
    ],
    answer: "A function that maps data to fixed-size values",
    type: "mc",
  },
  {
    id: "dsa-e-102",
    category: "dsa",
    difficulty: "e",
    question: "What is a binary search algorithm?",
    reason:
      "Binary search is a divide-and-conquer algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.",
    options: [
      "A search algorithm that sorts elements",
      "A search algorithm that searches linearly",
      "A search algorithm that divides the search interval in half",
      "None of the above",
    ],
    answer: "A search algorithm that divides the search interval in half",
    type: "mc",
  },
  {
    id: "dsa-e-103",
    category: "dsa",
    difficulty: "e",
    question: "What is the space complexity of a simple array?",
    reason:
      "The space complexity of a simple array is O(n), where n is the number of elements in the array.",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: "O(n)",
    type: "mc",
  },
  {
    id: "dsa-e-104",
    category: "dsa",
    difficulty: "e",
    question: "What does the `pop` operation do in a stack?",
    reason:
      "The `pop` operation removes and returns the top element from the stack.",
    options: [
      "Adds an element to the stack",
      "Removes the bottom element from the stack",
      "Removes and returns the top element from the stack",
      "None of the above",
    ],
    answer: "Removes and returns the top element from the stack",
    type: "mc",
  },
  {
    id: "dsa-e-105",
    category: "dsa",
    difficulty: "e",
    question: "How do you traverse a linked list?",
    reason:
      "You traverse a linked list by starting from the head node and moving from one node to the next until you reach the end.",
    options: [
      "Start from the last node",
      "Start from the head node",
      "Start from any node",
      "None of the above",
    ],
    answer: "Start from the head node",
    type: "mc",
  },
  // Easy - True/False
  {
    id: "dsa-e-106",
    category: "dsa",
    difficulty: "e",
    question:
      "In a queue, the first element added is the first one to be removed.",
    reason: "Queues follow the FIFO (First-In-First-Out) principle.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-107",
    category: "dsa",
    difficulty: "e",
    question: "A stack allows access to the elements in random order.",
    reason:
      "Stacks allow access to elements in LIFO (Last-In-First-Out) order, not random order.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-e-108",
    category: "dsa",
    difficulty: "e",
    question: "In a binary tree, each node has at most two children.",
    reason:
      "A binary tree is defined as a tree where each node has at most two children.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-109",
    category: "dsa",
    difficulty: "e",
    question: "Linked lists store elements at contiguous memory locations.",
    reason: "Linked lists store elements at non-contiguous memory locations.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-e-110",
    category: "dsa",
    difficulty: "e",
    question:
      "In a stack, the last element added is the first one to be removed.",
    reason: "Stacks follow the LIFO (Last-In-First-Out) principle.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-111",
    category: "dsa",
    difficulty: "e",
    question: "Binary search can be applied to unsorted arrays.",
    reason: "Binary search requires the array to be sorted for it to work.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-e-112",
    category: "dsa",
    difficulty: "e",
    question:
      "A hash table uses a hash function to compute the index at which a value is stored.",
    reason:
      "Hash tables use a hash function to map keys to specific indices where values are stored.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-113",
    category: "dsa",
    difficulty: "e",
    question: "In a tree data structure, the root is the node with no parent.",
    reason: "The root is the topmost node in a tree and has no parent.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-114",
    category: "dsa",
    difficulty: "e",
    question: "An array's size cannot be changed once it is created.",
    reason:
      "In most programming languages, arrays have a fixed size once created.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-115",
    category: "dsa",
    difficulty: "e",
    question:
      "A queue is typically implemented using a linked list or an array.",
    reason: "Queues can be implemented using either a linked list or an array.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-116",
    category: "dsa",
    difficulty: "e",
    question: "In a linked list, each node contains only a data part.",
    reason:
      "Each node in a linked list contains a data part and a reference (pointer) to the next node.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-e-117",
    category: "dsa",
    difficulty: "e",
    question:
      "A binary search tree is a type of binary tree where the left child is always smaller than the parent.",
    reason:
      "In a binary search tree (BST), the left child is always smaller than the parent node.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-118",
    category: "dsa",
    difficulty: "e",
    question:
      "The time complexity of accessing an element by index in an array is O(n).",
    reason:
      "The time complexity of accessing an element by index in an array is O(1), not O(n).",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-e-119",
    category: "dsa",
    difficulty: "e",
    question: "In a stack, elements can be added or removed from only one end.",
    reason:
      "In a stack, elements are added and removed from the same end, following the LIFO principle.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-e-120",
    category: "dsa",
    difficulty: "e",
    question: "In a linked list, traversal can only be done in one direction.",
    reason:
      "In a singly linked list, traversal is typically done in one direction, from the head node to the end.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  // Medium - Multiple Choice
  {
    id: "dsa-m-121",
    category: "dsa",
    difficulty: "m",
    question: "What is a balanced binary tree?",
    reason:
      "A balanced binary tree is one where the height of the left and right subtrees of any node differ by no more than one.",
    options: [
      "A tree where each node has exactly two children",
      "A tree where all levels are fully filled",
      "A tree where the height difference between subtrees is at most one",
      "None of the above",
    ],
    answer:
      "A tree where the height difference between subtrees is at most one",
    type: "mc",
  },
  {
    id: "dsa-m-122",
    category: "dsa",
    difficulty: "m",
    question:
      "What is the time complexity of inserting an element into a binary search tree (BST)?",
    reason:
      "The average time complexity of inserting an element into a binary search tree (BST) is O(log n), but it can degrade to O(n) if the tree is unbalanced.",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(log n)",
    type: "mc",
  },
  {
    id: "dsa-m-123",
    category: "dsa",
    difficulty: "m",
    question:
      "What is the difference between a singly linked list and a doubly linked list?",
    reason:
      "A singly linked list allows traversal in only one direction, while a doubly linked list allows traversal in both directions since each node has pointers to both its next and previous nodes.",
    options: [
      "Singly linked list has two pointers, doubly linked list has one",
      "Singly linked list allows traversal in one direction, doubly linked list in both directions",
      "Singly linked list is circular, doubly linked list is not",
      "None of the above",
    ],
    answer:
      "Singly linked list allows traversal in one direction, doubly linked list in both directions",
    type: "mc",
  },
  {
    id: "dsa-m-124",
    category: "dsa",
    difficulty: "m",
    question: "How does a hash table handle collisions?",
    reason:
      "Common methods to handle collisions in a hash table include chaining (using linked lists) and open addressing (probing to find the next available slot).",
    options: [
      "Chaining and open addressing",
      "Sorting the keys",
      "Using binary search",
      "None of the above",
    ],
    answer: "Chaining and open addressing",
    type: "mc",
  },
  {
    id: "dsa-m-125",
    category: "dsa",
    difficulty: "m",
    question:
      "What is the time complexity of searching for an element in a balanced binary search tree?",
    reason:
      "The time complexity of searching for an element in a balanced binary search tree is O(log n).",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
    type: "mc",
  },
  {
    id: "dsa-m-126",
    category: "dsa",
    difficulty: "m",
    question: "What is a heap, and what are its types?",
    reason:
      "A heap is a special tree-based data structure that satisfies the heap property. The two main types are max-heaps (where the parent node is greater than or equal to its children) and min-heaps (where the parent node is less than or equal to its children).",
    options: [
      "A linear data structure",
      "A tree-based structure with max-heaps and min-heaps",
      "A data structure used for sorting",
      "None of the above",
    ],
    answer: "A tree-based structure with max-heaps and min-heaps",
    type: "mc",
  },
  {
    id: "dsa-m-127",
    category: "dsa",
    difficulty: "m",
    question: "What is the difference between merge sort and quicksort?",
    reason:
      "Merge sort is a stable, divide-and-conquer algorithm with O(n log n) time complexity, requiring O(n) extra space. Quicksort, while also O(n log n) on average, is not stable, and its worst-case time complexity is O(n^2), but it is in-place and generally faster in practice.",
    options: [
      "Merge sort is stable, quicksort is not",
      "Merge sort is in-place, quicksort is not",
      "Merge sort is faster than quicksort",
      "None of the above",
    ],
    answer: "Merge sort is stable, quicksort is not",
    type: "mc",
  },
  {
    id: "dsa-m-128",
    category: "dsa",
    difficulty: "m",
    question: "What is the purpose of a priority queue?",
    reason:
      "A priority queue is an abstract data type where each element has a priority, and elements are served based on their priority (not just their order of arrival).",
    options: [
      "A queue with first-come, first-served order",
      "A queue that orders elements based on priority",
      "A queue that works like a stack",
      "None of the above",
    ],
    answer: "A queue that orders elements based on priority",
    type: "mc",
  },
  {
    id: "dsa-m-129",
    category: "dsa",
    difficulty: "m",
    question:
      "How does depth-first search (DFS) differ from breadth-first search (BFS)?",
    reason:
      "DFS explores as far as possible down each branch before backtracking, using a stack or recursion, while BFS explores all neighbors at the present depth level before moving on to nodes at the next depth level, using a queue.",
    options: [
      "DFS uses a queue, BFS uses a stack",
      "DFS uses a stack, BFS uses a queue",
      "DFS is faster than BFS",
      "None of the above",
    ],
    answer: "DFS uses a stack, BFS uses a queue",
    type: "mc",
  },
  {
    id: "dsa-m-130",
    category: "dsa",
    difficulty: "m",
    question: "What is an AVL tree?",
    reason:
      "An AVL tree is a self-balancing binary search tree where the difference in heights between the left and right subtrees (the balance factor) is at most one for all nodes.",
    options: [
      "A tree with exactly two children per node",
      "A self-balancing binary search tree",
      "A tree with equal height subtrees",
      "None of the above",
    ],
    answer: "A self-balancing binary search tree",
    type: "mc",
  },
  {
    id: "dsa-m-131",
    category: "dsa",
    difficulty: "m",
    question: "Explain what a trie data structure is.",
    reason:
      "A trie, or prefix tree, is a tree-like data structure that stores a dynamic set of strings, where each node represents a common prefix of some strings.",
    options: [
      "A tree-like structure storing strings",
      "A hash-based structure storing integers",
      "A graph-based structure storing nodes",
      "None of the above",
    ],
    answer: "A tree-like structure storing strings",
    type: "mc",
  },
  {
    id: "dsa-m-132",
    category: "dsa",
    difficulty: "m",
    question: "What is a circular linked list?",
    reason:
      "A circular linked list is a linked list in which the last node points back to the first node, forming a circle.",
    options: [
      "A linked list where each node points to the next node in a circle",
      "A linked list where each node points to the previous node",
      "A linked list where each node points to a random node",
      "None of the above",
    ],
    answer: "A linked list where each node points to the next node in a circle",
    type: "mc",
  },
  {
    id: "dsa-m-133",
    category: "dsa",
    difficulty: "m",
    question: "How do you detect a cycle in a linked list?",
    reason:
      "By using Floyd’s Cycle-Finding Algorithm (tortoise and hare method), where two pointers are moved at different speeds and if they meet, a cycle exists.",
    options: [
      "Using depth-first search",
      "Using Floyd’s Cycle-Finding Algorithm",
      "Using breadth-first search",
      "None of the above",
    ],
    answer: "Using Floyd’s Cycle-Finding Algorithm",
    type: "mc",
  },
  {
    id: "dsa-m-134",
    category: "dsa",
    difficulty: "m",
    question:
      "What is the time complexity of the quicksort algorithm in the average and worst case?",
    reason:
      "The average time complexity is O(n log n), while the worst case is O(n^2).",
    options: [
      "O(1) and O(n)",
      "O(log n) and O(n log n)",
      "O(n log n) and O(n^2)",
      "O(n) and O(n^2)",
    ],
    answer: "O(n log n) and O(n^2)",
    type: "mc",
  },
  {
    id: "dsa-m-135",
    category: "dsa",
    difficulty: "m",
    question: "What does Big-O notation describe?",
    reason:
      "Big-O notation describes the upper bound of the time or space complexity of an algorithm, providing a worst-case scenario for how an algorithm performs as its input size grows.",
    options: [
      "Average-case performance",
      "Best-case performance",
      "Worst-case performance",
      "None of the above",
    ],
    answer: "Worst-case performance",
    type: "mc",
  },
  // Medium - True/False
  {
    id: "dsa-m-136",
    category: "dsa",
    difficulty: "m",
    question: "In a max-heap, the smallest element is at the root.",
    reason:
      "In a max-heap, the largest element is at the root, not the smallest.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-137",
    category: "dsa",
    difficulty: "m",
    question: "Merge sort is a divide-and-conquer algorithm.",
    reason:
      "Merge sort divides the array into smaller sub-arrays, sorts them, and then merges them back together.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-138",
    category: "dsa",
    difficulty: "m",
    question:
      "In a binary search tree, the left child is always greater than the parent node.",
    reason:
      "In a binary search tree, the left child is always less than the parent node.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-139",
    category: "dsa",
    difficulty: "m",
    question:
      "A stack can be implemented using either an array or a linked list.",
    reason: "Stacks can be implemented using either an array or a linked list.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-140",
    category: "dsa",
    difficulty: "m",
    question:
      "In a graph, a cycle is a path that begins and ends at the same vertex.",
    reason:
      "A cycle in a graph is defined as a path that begins and ends at the same vertex.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-141",
    category: "dsa",
    difficulty: "m",
    question: "The time complexity of searching in a hash table is O(n).",
    reason:
      "The time complexity of searching in a hash table is O(1) in the average case, not O(n).",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-142",
    category: "dsa",
    difficulty: "m",
    question: "An AVL tree is a type of self-balancing binary search tree.",
    reason: "An AVL tree is a self-balancing binary search tree.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-143",
    category: "dsa",
    difficulty: "m",
    question:
      "Depth-first search (DFS) uses a queue to keep track of the next vertex to visit.",
    reason:
      "DFS uses a stack, not a queue, to keep track of the next vertex to visit.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-144",
    category: "dsa",
    difficulty: "m",
    question: "In a doubly linked list, each node has two pointers.",
    reason:
      "In a doubly linked list, each node has two pointers: one pointing to the next node and one pointing to the previous node.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-145",
    category: "dsa",
    difficulty: "m",
    question:
      "In a binary search tree, the right child is always less than the parent node.",
    reason:
      "In a binary search tree, the right child is always greater than the parent node.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-146",
    category: "dsa",
    difficulty: "m",
    question:
      "In a hash table, collisions occur when two keys map to the same index.",
    reason:
      "Collisions in a hash table occur when two keys map to the same index.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-147",
    category: "dsa",
    difficulty: "m",
    question: "A binary tree with N nodes always has a height of log(N).",
    reason:
      "The height of a binary tree depends on how balanced the tree is; it's not always log(N).",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-148",
    category: "dsa",
    difficulty: "m",
    question: "A circular linked list has no null pointers.",
    reason:
      "In a circular linked list, the last node points back to the first node, so there are no null pointers.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-m-149",
    category: "dsa",
    difficulty: "m",
    question:
      "The time complexity of bubble sort in the best case is O(n log n).",
    reason:
      "The best-case time complexity of bubble sort is O(n), not O(n log n).",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-m-150",
    category: "dsa",
    difficulty: "m",
    question: "In a binary search tree, each node has at most two children.",
    reason:
      "A binary search tree is defined as a tree where each node has at most two children.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-151",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the amortized time complexity of inserting elements into a dynamic array (e.g., Python’s list)?",
    reason:
      "The amortized time complexity of inserting an element into a dynamic array is O(1). This accounts for occasional resizing operations which are O(n), but occur infrequently.",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
    type: "mc",
  },
  {
    id: "dsa-h-152",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the difference between a red-black tree and an AVL tree?",
    reason:
      "Both red-black trees and AVL trees are self-balancing binary search trees, but AVL trees are more strictly balanced, leading to faster lookups. However, red-black trees are more efficient for insertions and deletions due to their less strict balancing.",
    options: [
      "Red-black trees are strictly balanced, AVL trees are not",
      "AVL trees are more balanced than red-black trees",
      "Red-black trees are faster for lookups than AVL trees",
      "There is no difference",
    ],
    answer: "AVL trees are more balanced than red-black trees",
    type: "mc",
  },
  {
    id: "dsa-h-153",
    category: "dsa",
    difficulty: "h",
    question:
      "How does the Boyer-Moore algorithm improve string search efficiency?",
    reason:
      "The Boyer-Moore algorithm improves string search efficiency by skipping sections of the text that do not need to be checked, based on the mismatches between the text and the pattern.",
    options: [
      "By comparing characters from the beginning of the pattern",
      "By comparing characters from the end of the pattern",
      "By using hash functions",
      "By brute force search",
    ],
    answer: "By comparing characters from the end of the pattern",
    type: "mc",
  },
  {
    id: "dsa-h-154",
    category: "dsa",
    difficulty: "h",
    question: "What is a B-tree, and where is it commonly used?",
    reason:
      "A B-tree is a self-balancing tree data structure that maintains sorted data and allows for efficient insertion, deletion, and search operations. It is commonly used in databases and file systems.",
    options: [
      "A binary tree used in binary search",
      "A self-balancing tree used in databases and file systems",
      "A tree used exclusively for sorting",
      "None of the above",
    ],
    answer: "A self-balancing tree used in databases and file systems",
    type: "mc",
  },
  {
    id: "dsa-h-155",
    category: "dsa",
    difficulty: "h",
    question: "What is the purpose of the Z algorithm in string matching?",
    reason:
      "The Z algorithm is used to find occurrences of a pattern within a text by preprocessing the pattern and using the Z array to skip unnecessary comparisons, leading to linear time complexity.",
    options: [
      "To create a suffix array",
      "To preprocess the pattern for skipping comparisons",
      "To search for a substring using brute force",
      "None of the above",
    ],
    answer: "To preprocess the pattern for skipping comparisons",
    type: "mc",
  },
  {
    id: "dsa-h-156",
    category: "dsa",
    difficulty: "h",
    question:
      "Explain the concept of tail recursion and its optimization in certain programming languages.",
    reason:
      "Tail recursion occurs when a recursive function's last action is a call to itself, allowing some languages to optimize by reusing the current function's stack frame, making it more efficient.",
    options: [
      "A type of recursion that can be optimized",
      "A recursive function that returns after making a recursive call",
      "A function that makes multiple recursive calls",
      "None of the above",
    ],
    answer: "A type of recursion that can be optimized",
    type: "mc",
  },
  {
    id: "dsa-h-157",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the time complexity of the Floyd-Warshall algorithm for finding shortest paths in a graph?",
    reason:
      "The Floyd-Warshall algorithm has a time complexity of O(n^3), where n is the number of vertices in the graph. It is used to find the shortest paths between all pairs of vertices.",
    options: ["O(n^2)", "O(n^3)", "O(n log n)", "O(n^4)"],
    answer: "O(n^3)",
    type: "mc",
  },
  {
    id: "dsa-h-158",
    category: "dsa",
    difficulty: "h",
    question: "How does dynamic programming differ from divide-and-conquer?",
    reason:
      "Dynamic programming solves problems by breaking them down into overlapping subproblems and storing the results, while divide-and-conquer divides the problem into non-overlapping subproblems and solves them independently.",
    options: [
      "Dynamic programming stores subproblem results; divide-and-conquer does not",
      "Divide-and-conquer stores subproblem results; dynamic programming does not",
      "Both store subproblem results",
      "Neither store subproblem results",
    ],
    answer:
      "Dynamic programming stores subproblem results; divide-and-conquer does not",
    type: "mc",
  },
  {
    id: "dsa-h-159",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the difference between Kruskal's and Prim's algorithms for finding minimum spanning trees?",
    reason:
      "Kruskal's algorithm builds the minimum spanning tree by adding the next smallest edge, while Prim's algorithm starts from a single vertex and grows the tree by adding the smallest edge that connects the tree to a new vertex.",
    options: [
      "Kruskal's algorithm is greedy; Prim's is not",
      "Prim's algorithm starts from a single vertex; Kruskal's does not",
      "Kruskal's algorithm uses a priority queue; Prim's does not",
      "There is no difference",
    ],
    answer: "Prim's algorithm starts from a single vertex; Kruskal's does not",
    type: "mc",
  },
  {
    id: "dsa-h-160",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the amortized time complexity of operations in a splay tree?",
    reason:
      "The amortized time complexity of basic operations (like insertion, deletion, and search) in a splay tree is O(log n), even though individual operations may take longer.",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(log n)",
    type: "mc",
  },
  {
    id: "dsa-h-161",
    category: "dsa",
    difficulty: "h",
    question:
      "How does the A* search algorithm differ from Dijkstra's algorithm?",
    reason:
      "A* search algorithm uses heuristics to guide the search towards the goal, making it faster in many cases, while Dijkstra's algorithm explores all possible paths based solely on the shortest cumulative distance.",
    options: [
      "A* uses heuristics; Dijkstra does not",
      "Dijkstra uses heuristics; A* does not",
      "A* is slower than Dijkstra",
      "There is no difference",
    ],
    answer: "A* uses heuristics; Dijkstra does not",
    type: "mc",
  },
  {
    id: "dsa-h-162",
    category: "dsa",
    difficulty: "h",
    question: "What is a suffix tree, and what is it used for?",
    reason:
      "A suffix tree is a compressed trie of all the suffixes of a given string. It is used for fast substring searches, longest common substring problems, and other string-related queries.",
    options: [
      "A tree used for storing integer suffixes",
      "A tree used for storing all suffixes of a string",
      "A tree used for binary search",
      "None of the above",
    ],
    answer: "A tree used for storing all suffixes of a string",
    type: "mc",
  },
  {
    id: "dsa-h-163",
    category: "dsa",
    difficulty: "h",
    question: "Explain the significance of Tarjan's algorithm in graph theory.",
    reason:
      "Tarjan's algorithm is used to find strongly connected components (SCCs) in a directed graph. It is significant because it runs in linear time, O(V + E), where V is the number of vertices and E is the number of edges.",
    options: [
      "To find shortest paths in a graph",
      "To find strongly connected components",
      "To detect cycles in an undirected graph",
      "None of the above",
    ],
    answer: "To find strongly connected components",
    type: "mc",
  },
  {
    id: "dsa-h-164",
    category: "dsa",
    difficulty: "h",
    question:
      "How does memoization differ from tabulation in dynamic programming?",
    reason:
      "Memoization stores the results of expensive function calls and reuses them when the same inputs occur again, whereas tabulation involves filling out a table in a bottom-up manner to solve the problem iteratively.",
    options: [
      "Memoization uses a table; tabulation does not",
      "Tabulation uses a table; memoization does not",
      "Memoization is top-down; tabulation is bottom-up",
      "There is no difference",
    ],
    answer: "Memoization is top-down; tabulation is bottom-up",
    type: "mc",
  },
  {
    id: "dsa-h-165",
    category: "dsa",
    difficulty: "h",
    question:
      "What is the time complexity of the Bellman-Ford algorithm for finding shortest paths in a graph?",
    reason:
      "The time complexity of the Bellman-Ford algorithm is O(VE), where V is the number of vertices and E is the number of edges. It is slower than Dijkstra's algorithm but can handle graphs with negative weight edges.",
    options: ["O(V + E)", "O(VE)", "O(V^2)", "O(E log V)"],
    answer: "O(VE)",
    type: "mc",
  },
  {
    id: "dsa-h-166",
    category: "dsa",
    difficulty: "h",
    question:
      "A red-black tree is a type of binary search tree where each node has a color attribute that ensures the tree remains balanced.",
    reason:
      "In a red-black tree, nodes are colored red or black, and the tree is kept balanced through specific color-related rules.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-167",
    category: "dsa",
    difficulty: "h",
    question:
      "The time complexity of the Dijkstra algorithm with a Fibonacci heap is O(V log V + E).",
    reason:
      "Using a Fibonacci heap, the time complexity of Dijkstra's algorithm is improved to O(V log V + E), where V is the number of vertices and E is the number of edges.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-168",
    category: "dsa",
    difficulty: "h",
    question: "In a B-tree of order m, a node can have at most m children.",
    reason:
      "In a B-tree of order m, each node can have at most m children and at least m/2 children.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-169",
    category: "dsa",
    difficulty: "h",
    question:
      "Kruskal’s algorithm for finding minimum spanning trees works best on dense graphs.",
    reason:
      "Kruskal’s algorithm is generally better suited for sparse graphs, where the number of edges is relatively small compared to the number of vertices.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-h-170",
    category: "dsa",
    difficulty: "h",
    question:
      "In a binary heap, the root node is always the largest element in a min-heap.",
    reason:
      "In a binary min-heap, the root node is the smallest element, not the largest.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-h-171",
    category: "dsa",
    difficulty: "h",
    question:
      "Tarjan's algorithm can be used to find articulation points in a graph.",
    reason:
      "Tarjan's algorithm is used to find strongly connected components (SCCs) and can also be modified to find articulation points.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-172",
    category: "dsa",
    difficulty: "h",
    question:
      "Bellman-Ford algorithm can handle graphs with negative weight cycles.",
    reason:
      "The Bellman-Ford algorithm can detect negative weight cycles but cannot produce correct shortest paths if such cycles exist.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-h-173",
    category: "dsa",
    difficulty: "h",
    question: "Suffix trees allow for substring search in linear time.",
    reason:
      "A suffix tree allows for substring search in linear time relative to the length of the substring.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-174",
    category: "dsa",
    difficulty: "h",
    question:
      "The amortized time complexity of the splay tree operations is O(log n).",
    reason:
      "The amortized time complexity of operations in a splay tree, such as insertion, deletion, and search, is O(log n).",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-175",
    category: "dsa",
    difficulty: "h",
    question:
      "In dynamic programming, the tabulation method builds the solution from the smallest subproblems to the largest.",
    reason:
      "Tabulation in dynamic programming involves solving and storing results of subproblems in a bottom-up manner, building the solution from the smallest subproblems to the largest.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-176",
    category: "dsa",
    difficulty: "h",
    question:
      "Prim's algorithm always starts from the node with the smallest weight edge in a graph.",
    reason:
      "Prim's algorithm starts from any arbitrary node and grows the minimum spanning tree by adding the smallest edge that connects a new vertex to the tree.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-h-177",
    category: "dsa",
    difficulty: "h",
    question:
      "In a red-black tree, no path from a node to its descendant leaf can have two consecutive red nodes.",
    reason:
      "In a red-black tree, one of the properties is that no red node can have a red child, ensuring that no path has two consecutive red nodes.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-178",
    category: "dsa",
    difficulty: "h",
    question: "The worst-case time complexity of quicksort is O(n^2).",
    reason:
      "Although quicksort has an average time complexity of O(n log n), its worst-case time complexity is O(n^2), which occurs when the pivot selection is poor.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "dsa-h-179",
    category: "dsa",
    difficulty: "h",
    question:
      "Dijkstra's algorithm works correctly even if there are negative weight edges in the graph.",
    reason:
      "Dijkstra's algorithm does not work correctly with graphs containing negative weight edges, as it assumes all edge weights are non-negative.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "dsa-h-180",
    category: "dsa",
    difficulty: "h",
    question:
      "In an AVL tree, the heights of the two child subtrees of any node differ by at most one.",
    reason:
      "An AVL tree maintains balance by ensuring that the height difference (balance factor) between the left and right subtrees of any node is at most one.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-181",
    category: "wd",
    difficulty: "e",
    question: "What does HTML stand for?",
    reason:
      "HTML stands for Hypertext Markup Language and is the standard language for creating web pages.",
    options: [
      "Hyperlink Text Markup Language",
      "Hypertext Markup Language",
      "Home Tool Markup Language",
      "Hypertext Makeup Language",
    ],
    answer: "Hypertext Markup Language",
    type: "mc",
  },
  {
    id: "wd-e-182",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of CSS in web development?",
    reason:
      "CSS (Cascading Style Sheets) is used to control the presentation, formatting, and layout of web pages.",
    options: [
      "To structure the web page",
      "To add interactivity",
      "To style and layout the web page",
      "To store data",
    ],
    answer: "To style and layout the web page",
    type: "mc",
  },
  {
    id: "wd-e-183",
    category: "wd",
    difficulty: "e",
    question: "What does the <a> tag do in HTML?",
    reason:
      "The <a> tag is used to create hyperlinks, which link one page to another.",
    options: [
      "Adds an image",
      "Creates a hyperlink",
      "Creates a paragraph",
      "Adds a table",
    ],
    answer: "Creates a hyperlink",
    type: "mc",
  },
  {
    id: "wd-e-184",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of the <img> tag in HTML?",
    reason: "The <img> tag is used to embed images into a web page.",
    options: [
      "To create a table",
      "To add an image",
      "To create a form",
      "To add a video",
    ],
    answer: "To add an image",
    type: "mc",
  },
  {
    id: "wd-e-185",
    category: "wd",
    difficulty: "e",
    question: "What does JavaScript do in a web page?",
    reason:
      "JavaScript adds interactivity to web pages, allowing for dynamic content and user interaction.",
    options: [
      "Styles the page",
      "Adds interactivity",
      "Structures the page",
      "Stores data",
    ],
    answer: "Adds interactivity",
    type: "mc",
  },
  {
    id: "wd-e-186",
    category: "wd",
    difficulty: "e",
    question: "What is the difference between an <ol> and a <ul> tag in HTML?",
    reason:
      "<ol> creates an ordered list (numbered), while <ul> creates an unordered list (bulleted).",
    options: [
      "<ol> creates an unordered list, <ul> creates an ordered list",
      "<ol> creates an ordered list, <ul> creates an unordered list",
      "Both create ordered lists",
      "Both create unordered lists",
    ],
    answer: "<ol> creates an ordered list, <ul> creates an unordered list",
    type: "mc",
  },
  {
    id: "wd-e-187",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of the <head> tag in HTML?",
    reason:
      "The <head> tag contains meta-information about the document, such as the title, scripts, and links to stylesheets.",
    options: [
      "To define the body content",
      "To create a header",
      "To include meta-information",
      "To add images",
    ],
    answer: "To include meta-information",
    type: "mc",
  },
  {
    id: "wd-e-188",
    category: "wd",
    difficulty: "e",
    question: "How do you link a CSS file to an HTML document?",
    reason:
      'A CSS file is linked to an HTML document using the <link> tag in the <head> section, e.g., <link rel="stylesheet" href="styles.css">.',
    options: ["<style>", "<link>", "<script>", "<meta>"],
    answer: "<link>",
    type: "mc",
  },
  {
    id: "wd-e-189",
    category: "wd",
    difficulty: "e",
    question: "What does the alt attribute do in an <img> tag?",
    reason:
      "The alt attribute provides alternative text for an image if it cannot be displayed, improving accessibility and SEO.",
    options: [
      "Changes the image size",
      "Adds a caption to the image",
      "Provides alternative text",
      "Links to another page",
    ],
    answer: "Provides alternative text",
    type: "mc",
  },
  {
    id: "wd-e-190",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of the <form> tag in HTML?",
    reason:
      "The <form> tag is used to create a form for user input, such as text fields, checkboxes, and submit buttons.",
    options: [
      "To create a form",
      "To style a page",
      "To add a table",
      "To create a link",
    ],
    answer: "To create a form",
    type: "mc",
  },
  {
    id: "wd-e-191",
    category: "wd",
    difficulty: "e",
    question: "What does CSS stand for?",
    reason:
      "CSS stands for Cascading Style Sheets, which is used to style and layout web pages.",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
    type: "mc",
  },
  {
    id: "wd-e-192",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of the <title> tag in HTML?",
    reason:
      "The <title> tag sets the title of the web page, which appears in the browser tab and is used by search engines.",
    options: [
      "To create a title",
      "To set the title of the page",
      "To add a heading",
      "To include meta-information",
    ],
    answer: "To set the title of the page",
    type: "mc",
  },
  {
    id: "wd-e-193",
    category: "wd",
    difficulty: "e",
    question: "How do you create a comment in HTML?",
    reason: "Comments in HTML are created using <!-- comment -->.",
    options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
    answer: "<!-- comment -->",
    type: "mc",
  },
  {
    id: "wd-e-194",
    category: "wd",
    difficulty: "e",
    question: "What is the purpose of the id attribute in HTML?",
    reason:
      "The id attribute assigns a unique identifier to an HTML element, allowing it to be targeted by CSS or JavaScript.",
    options: [
      "To style an element",
      "To identify an element uniquely",
      "To create a hyperlink",
      "To include meta-information",
    ],
    answer: "To identify an element uniquely",
    type: "mc",
  },
  {
    id: "wd-e-195",
    category: "wd",
    difficulty: "e",
    question: "What is responsive web design?",
    reason:
      "Responsive web design ensures that web pages look and function well on different screen sizes and devices by using flexible layouts, images, and CSS media queries.",
    options: [
      "Design that responds to user input",
      "Design that adapts to different screen sizes",
      "Design that loads quickly",
      "Design that is mobile-friendly",
    ],
    answer: "Design that adapts to different screen sizes",
    type: "mc",
  },
  {
    id: "wd-e-196",
    category: "wd",
    difficulty: "e",
    question: "The <table> tag is used to create a table in HTML.",
    reason:
      "The <table> tag is used to define a table structure in HTML, including rows and columns.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-197",
    category: "wd",
    difficulty: "e",
    question: "The <br> tag in HTML is used to create a line break.",
    reason:
      "The <br> tag is a self-closing tag that creates a line break in HTML, allowing content to move to the next line.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-198",
    category: "wd",
    difficulty: "e",
    question:
      "HTML comments are visible to users when viewing the page in a browser.",
    reason:
      "HTML comments are not visible to users; they are ignored by the browser and used only within the code for documentation or organization purposes.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-e-199",
    category: "wd",
    difficulty: "e",
    question:
      "The <input> tag in HTML is used to create interactive elements in a form, such as text fields, checkboxes, and radio buttons.",
    reason:
      "The <input> tag is used to create various interactive elements in a form, including text fields, checkboxes, radio buttons, and more.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-200",
    category: "wd",
    difficulty: "e",
    question: "The <span> tag is used to group block-level elements in HTML.",
    reason:
      "The <span> tag is used to group inline elements, not block-level elements. For block-level elements, the <div> tag is used.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-e-201",
    category: "wd",
    difficulty: "e",
    question:
      "The <iframe> tag is used to embed another HTML document within the current one.",
    reason:
      "The <iframe> tag allows embedding another HTML document within the current web page, often used to include external content like videos or maps.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-202",
    category: "wd",
    difficulty: "e",
    question: "The <strong> tag in HTML makes text bold.",
    reason:
      "The <strong> tag semantically emphasizes text as important and visually makes it bold.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-203",
    category: "wd",
    difficulty: "e",
    question:
      "The <meta> tag is used to add metadata to an HTML document, such as author, description, and keywords.",
    reason:
      "The <meta> tag provides metadata about the HTML document, often used by search engines and browsers.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-204",
    category: "wd",
    difficulty: "e",
    question:
      "Inline CSS is defined directly within an HTML element's style attribute.",
    reason:
      "Inline CSS is applied directly within the HTML element using the style attribute.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-205",
    category: "wd",
    difficulty: "e",
    question: "HTML tags are case-sensitive.",
    reason:
      "HTML tags are not case-sensitive, meaning <div> and <DIV> are treated the same by the browser.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-e-206",
    category: "wd",
    difficulty: "e",
    question:
      "The <button> tag in HTML creates a clickable button that can be used in forms.",
    reason:
      "The <button> tag is used to create a clickable button in HTML, which can submit forms or be programmed to trigger other actions.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-207",
    category: "wd",
    difficulty: "e",
    question:
      "The <li> tag is used to create list items in both ordered and unordered lists.",
    reason:
      "The <li> tag is used within <ol> or <ul> tags to define list items in HTML.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-208",
    category: "wd",
    difficulty: "e",
    question: "The <link> tag is used to add JavaScript to an HTML document.",
    reason:
      "The <link> tag is used to link external resources like CSS stylesheets to an HTML document. The <script> tag is used for JavaScript.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-e-209",
    category: "wd",
    difficulty: "e",
    question: "The <audio> tag is used to embed audio files into a web page.",
    reason:
      "The <audio> tag allows embedding audio content into a web page, supporting multiple file formats like MP3 and WAV.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-e-210",
    category: "wd",
    difficulty: "e",
    question:
      "HTML5 introduced new semantic elements like <header>, <footer>, and <article>.",
    reason:
      "HTML5 introduced semantic elements such as <header>, <footer>, <article>, and <section> to improve the structure and readability of HTML documents.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-211",
    category: "wd",
    difficulty: "m",
    question:
      "What is the difference between `class` and `id` selectors in CSS?",
    reason:
      "The `id` selector targets a single, unique element with a specific ID, while the `class` selector can target multiple elements with the same class name.",
    options: [
      "The `id` selector can target multiple elements, `class` only targets one",
      "The `class` selector targets only one element, `id` targets multiple",
      "The `id` selector targets a unique element, `class` targets multiple",
      "There is no difference",
    ],
    answer:
      "The `id` selector targets a unique element, `class` targets multiple",
    type: "mc",
  },
  {
    id: "wd-m-212",
    category: "wd",
    difficulty: "m",
    question: "What is the purpose of a CSS media query?",
    reason:
      "A CSS media query allows you to apply different styles based on the characteristics of the user's device, such as screen size or resolution, enabling responsive design.",
    options: [
      "To apply different styles based on user interactions",
      "To apply different styles based on the characteristics of the device",
      "To change the layout of a page dynamically",
      "To create animations",
    ],
    answer:
      "To apply different styles based on the characteristics of the device",
    type: "mc",
  },
  {
    id: "wd-m-213",
    category: "wd",
    difficulty: "m",
    question: "What is the box model in CSS?",
    reason:
      "The box model in CSS describes the layout of elements, including the content, padding, border, and margin, all of which contribute to the total size of the element.",
    options: [
      "A model describing only the content of an element",
      "A model that includes the content and padding of an element",
      "A model that describes the layout including content, padding, border, and margin",
      "A model that includes only the border and margin of an element",
    ],
    answer:
      "A model that describes the layout including content, padding, border, and margin",
    type: "mc",
  },
  {
    id: "wd-m-214",
    category: "wd",
    difficulty: "m",
    question:
      "What is the difference between block-level and inline elements in HTML?",
    reason:
      "Block-level elements take up the full width available and start on a new line, while inline elements take up only as much width as necessary and do not start on a new line.",
    options: [
      "Block-level elements take up only the space they need, inline elements take up the full width",
      "Block-level elements take up the full width and start on a new line, inline elements do not",
      "Inline elements take up the full width and start on a new line, block-level elements do not",
      "There is no difference between block-level and inline elements",
    ],
    answer:
      "Block-level elements take up the full width and start on a new line, inline elements do not",
    type: "mc",
  },
  {
    id: "wd-m-215",
    category: "wd",
    difficulty: "m",
    question:
      "What does AJAX stand for, and what is its purpose in web development?",
    reason:
      "AJAX stands for Asynchronous JavaScript and XML. It allows web pages to update asynchronously by exchanging small amounts of data with the server behind the scenes, without reloading the entire page.",
    options: [
      "Asynchronous JavaScript and XML, used to update parts of a web page without reloading",
      "Advanced JavaScript and XML, used to create dynamic content",
      "Application JavaScript and XML, used for server-side processing",
      "Asynchronous Java and XML, used to update databases",
    ],
    answer:
      "Asynchronous JavaScript and XML, used to update parts of a web page without reloading",
    type: "mc",
  },
  {
    id: "wd-m-216",
    category: "wd",
    difficulty: "m",
    question: "What is the purpose of the `viewport` meta tag in HTML?",
    reason:
      "The `viewport` meta tag controls the layout of the web page on different devices, particularly mobile devices, by setting the width and scaling of the viewport.",
    options: [
      "To set the layout of a page on desktop devices",
      "To control the layout of the web page on different devices",
      "To optimize the page for printing",
      "To specify the title of the page",
    ],
    answer: "To control the layout of the web page on different devices",
    type: "mc",
  },
  {
    id: "wd-m-217",
    category: "wd",
    difficulty: "m",
    question: "What is the difference between GET and POST methods in HTTP?",
    reason:
      "GET requests data from a server and appends parameters to the URL, while POST submits data to be processed by the server, sending the data in the request body.",
    options: [
      "GET submits data to the server, POST requests data from the server",
      "GET appends parameters to the URL, POST sends data in the request body",
      "POST appends parameters to the URL, GET sends data in the request body",
      "There is no difference between GET and POST",
    ],
    answer:
      "GET appends parameters to the URL, POST sends data in the request body",
    type: "mc",
  },
  {
    id: "wd-m-218",
    category: "wd",
    difficulty: "m",
    question: "How do you create a flexbox container in CSS?",
    reason:
      "By setting the `display` property to `flex`, you create a flexbox container, enabling flexible and efficient layouts.",
    options: [
      "display: block;",
      "display: inline;",
      "display: flex;",
      "display: grid;",
    ],
    answer: "display: flex;",
    type: "mc",
  },
  {
    id: "wd-m-219",
    category: "wd",
    difficulty: "m",
    question: "What is a CSS pseudo-class, and can you give an example?",
    reason:
      "A CSS pseudo-class is used to define a special state of an element. Example: `:hover` applies styles when the user hovers over an element.",
    options: [
      "A class that is not defined in the CSS",
      "A class used to select elements that are in a specific state",
      "A class that is dynamically generated by JavaScript",
      "A class used to target an element based on its content",
    ],
    answer: "A class used to select elements that are in a specific state",
    type: "mc",
  },
  {
    id: "wd-m-220",
    category: "wd",
    difficulty: "m",
    question: "How does the z-index property work in CSS?",
    reason:
      "The `z-index` property controls the stacking order of elements that overlap each other. Elements with a higher `z-index` value appear in front of those with a lower value.",
    options: [
      "It controls the visibility of elements",
      "It controls the stacking order of overlapping elements",
      "It controls the position of elements on the x-axis",
      "It controls the alignment of text",
    ],
    answer: "It controls the stacking order of overlapping elements",
    type: "mc",
  },
  {
    id: "wd-m-221",
    category: "wd",
    difficulty: "m",
    question: "What is a progressive web app (PWA)?",
    reason:
      "A PWA is a type of web application that uses modern web capabilities to deliver an app-like experience, offering features like offline access, push notifications, and home screen installation.",
    options: [
      "A web app that requires constant internet connectivity",
      "A web app that runs only on desktop browsers",
      "A web app that provides an app-like experience with offline capabilities",
      "A web app that requires a native mobile application to function",
    ],
    answer:
      "A web app that provides an app-like experience with offline capabilities",
    type: "mc",
  },
  {
    id: "wd-m-222",
    category: "wd",
    difficulty: "m",
    question: "What is the purpose of the <canvas> element in HTML?",
    reason:
      "The <canvas> element is used to draw graphics, such as shapes and images, directly in the browser using JavaScript.",
    options: [
      "To create a text area",
      "To display video content",
      "To draw graphics and shapes using JavaScript",
      "To embed another web page",
    ],
    answer: "To draw graphics and shapes using JavaScript",
    type: "mc",
  },
  {
    id: "wd-m-223",
    category: "wd",
    difficulty: "m",
    question: "What is the difference between padding and margin in CSS?",
    reason:
      "Padding is the space between the content and the border of an element, while margin is the space outside the border between the element and other elements.",
    options: [
      "Padding adds space outside an element, margin adds space inside",
      "Padding adds space inside an element, margin adds space outside",
      "Both padding and margin add space inside an element",
      "Both padding and margin add space outside an element",
    ],
    answer: "Padding adds space inside an element, margin adds space outside",
    type: "mc",
  },
  {
    id: "wd-m-224",
    category: "wd",
    difficulty: "m",
    question: "How do you create a grid layout in CSS?",
    reason:
      "By setting the `display` property to `grid`, you create a grid container, enabling you to define rows and columns and control the layout of child elements.",
    options: [
      "display: flex;",
      "display: block;",
      "display: grid;",
      "display: inline-block;",
    ],
    answer: "display: grid;",
    type: "mc",
  },
  {
    id: "wd-m-225",
    category: "wd",
    difficulty: "m",
    question:
      "What is the difference between `position: relative;` and `position: absolute;` in CSS?",
    reason:
      "`position: relative;` positions an element relative to its normal position, while `position: absolute;` positions an element relative to its nearest positioned ancestor or the initial containing block.",
    options: [
      "Relative positioning removes an element from the document flow, absolute positioning does not",
      "Absolute positioning removes an element from the document flow, relative positioning does not",
      "Both relative and absolute positioning remove elements from the document flow",
      "Neither relative nor absolute positioning remove elements from the document flow",
    ],
    answer:
      "Absolute positioning removes an element from the document flow, relative positioning does not",
    type: "mc",
  },
  {
    id: "wd-m-226",
    category: "wd",
    difficulty: "m",
    question:
      "CSS Grid allows you to create complex layouts with rows and columns, similar to table-based layouts.",
    reason:
      "CSS Grid is a powerful layout system that enables the creation of complex layouts with rows and columns, offering much more flexibility than table-based layouts.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-227",
    category: "wd",
    difficulty: "m",
    question:
      "In HTML5, the <section> tag is used to group related content, typically with its own heading.",
    reason:
      "The <section> tag in HTML5 is used to group related content into sections, often with a heading, and is a semantic element that helps organize content.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-228",
    category: "wd",
    difficulty: "m",
    question:
      "Flexbox is ideal for creating one-dimensional layouts, such as rows or columns.",
    reason:
      "Flexbox is designed for one-dimensional layouts, making it ideal for creating either rows or columns but not both simultaneously.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-229",
    category: "wd",
    difficulty: "m",
    question:
      "The `localStorage` object in JavaScript allows data to be stored in the browser and persists even after the browser is closed.",
    reason:
      "`localStorage` stores data in the browser with no expiration time, meaning it persists even after the browser is closed and reopened.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-230",
    category: "wd",
    difficulty: "m",
    question:
      "The `em` unit in CSS is relative to the font size of the root element.",
    reason:
      "The `em` unit in CSS is relative to the font size of its parent element, not the root element. The `rem` unit is relative to the font size of the root element.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-m-231",
    category: "wd",
    difficulty: "m",
    question:
      "The `async` attribute in the <script> tag allows the script to be downloaded without blocking the HTML parsing.",
    reason:
      "The `async` attribute allows the script to be downloaded in parallel with the HTML parsing, reducing page load times by not blocking the rendering process.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-232",
    category: "wd",
    difficulty: "m",
    question:
      "The CSS `position: fixed;` property positions an element relative to its nearest positioned ancestor.",
    reason:
      "The `position: fixed;` property positions an element relative to the browser window, not its nearest positioned ancestor.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-m-233",
    category: "wd",
    difficulty: "m",
    question:
      "In JavaScript, `null` and `undefined` are considered equal when using the strict equality operator (`===`).",
    reason:
      "`null` and `undefined` are not considered equal when using the strict equality operator (`===`); they are only equal when using the loose equality operator (`==`).",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-m-234",
    category: "wd",
    difficulty: "m",
    question:
      "SVG (Scalable Vector Graphics) is a markup language for describing two-dimensional vector graphics in XML.",
    reason:
      "SVG is used to describe two-dimensional vector graphics using XML, making it scalable and resolution-independent.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-235",
    category: "wd",
    difficulty: "m",
    question:
      "The CSS `:hover` pseudo-class applies a style to an element when the user clicks on it.",
    reason:
      "The `:hover` pseudo-class applies a style to an element when the user hovers over it with a pointing device, not when they click on it.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-m-236",
    category: "wd",
    difficulty: "m",
    question:
      "In HTML, the <picture> element is used to define multiple sources for an image, allowing for responsive images.",
    reason:
      "The <picture> element in HTML allows defining multiple sources for an image, enabling responsive images that can adapt to different screen sizes and resolutions.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-237",
    category: "wd",
    difficulty: "m",
    question: "JavaScript's `let` and `const` keywords are function-scoped.",
    reason:
      "The `let` and `const` keywords in JavaScript are block-scoped, not function-scoped, meaning they are only accessible within the block where they are declared.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-m-238",
    category: "wd",
    difficulty: "m",
    question:
      "The CSS `display: inline-block;` property allows an element to maintain block-level features while flowing like an inline element.",
    reason:
      "`display: inline-block;` allows an element to behave like a block element (e.g., respecting height and width) but still flow inline with surrounding content.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-239",
    category: "wd",
    difficulty: "m",
    question:
      "The `data-` attribute in HTML is used to store custom data private to the page or application.",
    reason:
      "The `data-` attribute is used to embed custom data attributes in HTML elements, making them accessible via JavaScript for various purposes.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-m-240",
    category: "wd",
    difficulty: "m",
    question:
      "The HTTP 404 status code indicates that the request was successful.",
    reason:
      "The HTTP 404 status code indicates that the requested resource was not found on the server, not that the request was successful.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-241",
    category: "wd",
    difficulty: "h",
    question:
      "The `defer` attribute in the <script> tag ensures that the script executes as soon as it is downloaded, without blocking HTML parsing.",
    reason:
      "The `defer` attribute in the <script> tag ensures that the script is executed after the HTML document has been fully parsed, not as soon as it is downloaded.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-242",
    category: "wd",
    difficulty: "h",
    question:
      "In CSS, the `:nth-child(2n+1)` selector targets all odd-numbered elements in a list.",
    reason:
      "`:nth-child(2n+1)` selects all odd-numbered elements, as the formula starts from 1 and selects every second element (1st, 3rd, 5th, etc.).",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-243",
    category: "wd",
    difficulty: "h",
    question:
      "HTTP/2 allows multiple requests for resources to be sent over a single TCP connection.",
    reason:
      "HTTP/2 uses multiplexing to allow multiple requests and responses to be sent over a single TCP connection, improving performance.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-244",
    category: "wd",
    difficulty: "h",
    question:
      "Service Workers in PWAs can intercept network requests and serve cached content, enabling offline functionality.",
    reason:
      "Service Workers in Progressive Web Apps (PWAs) can intercept network requests and provide cached responses, which allows for offline functionality.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-245",
    category: "wd",
    difficulty: "h",
    question:
      "The `pointer-events` property in CSS can be used to make an element invisible to mouse events, while still being visible on the page.",
    reason:
      "The `pointer-events: none;` property allows an element to be visible but not interactable, meaning it won't respond to mouse events.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-246",
    category: "wd",
    difficulty: "h",
    question: "WebSockets require the use of HTTP/2 to function properly.",
    reason:
      "WebSockets operate independently of HTTP/2 and can work with both HTTP/1.1 and HTTP/2, providing full-duplex communication channels over a single TCP connection.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-247",
    category: "wd",
    difficulty: "h",
    question:
      "The CSS `:not()` pseudo-class can be used to exclude multiple selectors at once.",
    reason:
      "The `:not()` pseudo-class can only exclude one selector at a time, not multiple selectors.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-248",
    category: "wd",
    difficulty: "h",
    question:
      "In JavaScript, the `Object.freeze()` method makes an object immutable by preventing any modifications to its properties.",
    reason:
      "`Object.freeze()` prevents modifications to an object, making it effectively immutable, as no new properties can be added or existing properties changed.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-249",
    category: "wd",
    difficulty: "h",
    question:
      "The `Content-Security-Policy` HTTP header helps prevent XSS attacks by specifying which sources of content are allowed to be loaded.",
    reason:
      "The `Content-Security-Policy` (CSP) header helps mitigate cross-site scripting (XSS) attacks by controlling which resources the browser is allowed to load.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-250",
    category: "wd",
    difficulty: "h",
    question:
      "In CSS, the `@supports` rule is used to apply styles only if certain conditions are met, such as browser support for a specific property.",
    reason:
      "The `@supports` rule allows you to apply CSS styles conditionally based on whether the browser supports a specific property.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-251",
    category: "wd",
    difficulty: "h",
    question:
      "The `Promise.allSettled()` method in JavaScript waits for all promises to either resolve or reject before returning an array of results.",
    reason:
      "`Promise.allSettled()` returns a promise that resolves after all input promises have settled (either resolved or rejected), providing an array of their results.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-252",
    category: "wd",
    difficulty: "h",
    question:
      "In the `flexbox` layout, the `align-items` property controls the alignment of items along the main axis.",
    reason:
      "`align-items` in flexbox controls the alignment of items along the cross axis, not the main axis. The `justify-content` property controls the alignment along the main axis.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-253",
    category: "wd",
    difficulty: "h",
    question:
      "The `SameSite` attribute in cookies can be used to prevent CSRF attacks by restricting how cookies are sent with cross-site requests.",
    reason:
      "The `SameSite` attribute in cookies restricts cookies from being sent with cross-site requests, helping to prevent cross-site request forgery (CSRF) attacks.",
    options: ["True", "False"],
    answer: "True",
    type: "tf",
  },
  {
    id: "wd-h-254",
    category: "wd",
    difficulty: "h",
    question:
      "In CSS, the `calc()` function allows you to perform calculations to determine CSS property values, but it cannot mix different units (e.g., percentages and pixels).",
    reason:
      "`calc()` in CSS allows you to mix different units (such as percentages, pixels, ems, etc.) to calculate property values.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-255",
    category: "wd",
    difficulty: "h",
    question:
      "The Fetch API in JavaScript can be used to make network requests, but it does not support CORS (Cross-Origin Resource Sharing).",
    reason:
      "The Fetch API in JavaScript fully supports CORS (Cross-Origin Resource Sharing), allowing for secure cross-origin requests.",
    options: ["True", "False"],
    answer: "False",
    type: "tf",
  },
  {
    id: "wd-h-256",
    category: "wd",
    difficulty: "h",
    question:
      "Which HTTP status code is used to indicate that the server understands the request but refuses to authorize it?",
    reason:
      "The 403 Forbidden status code indicates that the server understands the request but refuses to authorize it, typically due to insufficient permissions.",
    options: [
      "401 Unauthorized",
      "403 Forbidden",
      "404 Not Found",
      "500 Internal Server Error",
    ],
    answer: "403 Forbidden",
    type: "mc",
  },
  {
    id: "wd-h-257",
    category: "wd",
    difficulty: "h",
    question:
      "What is the purpose of the `Strict-Transport-Security` (HSTS) HTTP header?",
    reason:
      "The HSTS header enforces secure connections to the server, requiring that future requests are made over HTTPS.",
    options: [
      "To prevent cross-site scripting attacks",
      "To enforce secure connections over HTTPS",
      "To control browser caching behavior",
      "To allow cross-origin resource sharing",
    ],
    answer: "To enforce secure connections over HTTPS",
    type: "mc",
  },
  {
    id: "wd-h-258",
    category: "wd",
    difficulty: "h",
    question:
      "What does the term 'First Contentful Paint' (FCP) refer to in web performance optimization?",
    reason:
      "First Contentful Paint (FCP) measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.",
    options: [
      "The time it takes for the first image to load",
      "The time it takes for the entire page to load",
      "The time it takes for the first piece of content to be rendered",
      "The time it takes for all JavaScript to be executed",
    ],
    answer: "The time it takes for the first piece of content to be rendered",
    type: "mc",
  },
  {
    id: "wd-h-259",
    category: "wd",
    difficulty: "h",
    question:
      "In JavaScript, how does the `async/await` syntax improve upon traditional promise chaining?",
    reason:
      "`async/await` simplifies asynchronous code, making it more readable and maintainable by allowing developers to write asynchronous code that looks synchronous.",
    options: [
      "It eliminates the need for promises",
      "It allows writing asynchronous code in a synchronous-like manner",
      "It automatically handles errors in asynchronous code",
      "It reduces the number of network requests needed",
    ],
    answer: "It allows writing asynchronous code in a synchronous-like manner",
    type: "mc",
  },
  {
    id: "wd-h-260",
    category: "wd",
    difficulty: "h",
    question:
      "What is the main advantage of using WebAssembly in web development?",
    reason:
      "WebAssembly allows developers to run code written in languages like C, C++, and Rust at near-native speed, directly in the browser, improving performance for computation-heavy tasks.",
    options: [
      "It allows JavaScript to be compiled to machine code",
      "It improves the styling capabilities of CSS",
      "It enables the use of C, C++, and Rust in the browser at near-native speeds",
      "It provides better support for HTML5 features",
    ],
    answer:
      "It enables the use of C, C++, and Rust in the browser at near-native speeds",
    type: "mc",
  },
  {
    id: "wd-h-261",
    category: "wd",
    difficulty: "h",
    question:
      "What is the purpose of the `IntersectionObserver` API in JavaScript?",
    reason:
      "The `IntersectionObserver` API allows developers to asynchronously observe changes in the intersection of a target element with a parent element or the viewport, often used for lazy loading images or implementing infinite scroll.",
    options: [
      "To monitor changes in the DOM",
      "To detect when an element enters or exits the viewport",
      "To observe changes in the network status",
      "To monitor the performance of a web page",
    ],
    answer: "To detect when an element enters or exits the viewport",
    type: "mc",
  },
  {
    id: "wd-h-262",
    category: "wd",
    difficulty: "h",
    question:
      "Which of the following is a feature of the CSS `Grid` layout but not `Flexbox`?",
    reason:
      "The CSS Grid layout allows for two-dimensional layout control, making it suitable for both rows and columns, whereas Flexbox is one-dimensional.",
    options: [
      "Two-dimensional layout control",
      "Alignment of items along the cross-axis",
      "Reordering of elements",
      "Handling of flex items with different sizes",
    ],
    answer: "Two-dimensional layout control",
    type: "mc",
  },
  {
    id: "wd-h-263",
    category: "wd",
    difficulty: "h",
    question: "In React, what is the purpose of the `useEffect` hook?",
    reason:
      "The `useEffect` hook is used to perform side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM.",
    options: [
      "To create stateful logic",
      "To handle user inputs",
      "To perform side effects after rendering",
      "To render lists of data",
    ],
    answer: "To perform side effects after rendering",
    type: "mc",
  },
  {
    id: "wd-h-264",
    category: "wd",
    difficulty: "h",
    question:
      "What is a `Content Delivery Network` (CDN), and why is it important in web development?",
    reason:
      "A CDN is a distributed network of servers that delivers content to users based on their geographic location, improving load times and reducing latency.",
    options: [
      "A network that stores backups of your website",
      "A distributed network of servers that improves content delivery speed",
      "A service that provides domain name resolution",
      "A tool for managing website databases",
    ],
    answer:
      "A distributed network of servers that improves content delivery speed",
    type: "mc",
  },
  {
    id: "wd-h-265",
    category: "wd",
    difficulty: "h",
    question: "What is the `Event Loop` in JavaScript, and how does it work?",
    reason:
      "The Event Loop in JavaScript is responsible for handling asynchronous code by continuously checking the call stack and the task queue, executing tasks when the stack is empty.",
    options: [
      "A loop that handles user events like clicks and keypresses",
      "A process that handles asynchronous code execution in JavaScript",
      "A tool for managing memory allocation",
      "A debugging tool used in browsers",
    ],
    answer: "A process that handles asynchronous code execution in JavaScript",
    type: "mc",
  },
  {
    id: "wd-h-266",
    category: "wd",
    difficulty: "h",
    question:
      "What is the role of a `Service Worker` in a Progressive Web App (PWA)?",
    reason:
      "A Service Worker is a script that runs in the background, independent of the web page, and is used to handle network requests, cache resources, and enable offline functionality in PWAs.",
    options: [
      "To render the user interface",
      "To manage server-side code",
      "To handle network requests and enable offline functionality",
      "To optimize images for faster loading",
    ],
    answer: "To handle network requests and enable offline functionality",
    type: "mc",
  },
  {
    id: "wd-h-267",
    category: "wd",
    difficulty: "h",
    question:
      "What is the difference between a `PUT` and a `PATCH` request in RESTful APIs?",
    reason:
      "`PUT` is used to update an entire resource or create it if it does not exist, whereas `PATCH` is used to make partial updates to a resource.",
    options: [
      "`PUT` updates a resource, `PATCH` deletes a resource",
      "`PUT` is for creating resources, `PATCH` is for reading resources",
      "`PUT` is for full updates, `PATCH` is for partial updates",
      "There is no difference between `PUT` and `PATCH`",
    ],
    answer: "`PUT` is for full updates, `PATCH` is for partial updates",
    type: "mc",
  },
  {
    id: "wd-h-268",
    category: "wd",
    difficulty: "h",
    question: "What is the main purpose of the `WebSocket` protocol?",
    reason:
      "The WebSocket protocol provides a persistent, full-duplex communication channel between a client and server, allowing for real-time data exchange.",
    options: [
      "To send HTTP requests",
      "To establish a secure connection over HTTPS",
      "To enable real-time, bidirectional communication",
      "To perform server-side rendering",
    ],
    answer: "To enable real-time, bidirectional communication",
    type: "mc",
  },
  {
    id: "wd-h-269",
    category: "wd",
    difficulty: "h",
    question: "What is the purpose of the `aria-label` attribute in HTML?",
    reason:
      "The `aria-label` attribute provides an accessible name for an element, improving accessibility for screen readers by giving context to elements that might not have visible labels.",
    options: [
      "To add tooltips to elements",
      "To provide an accessible name for screen readers",
      "To add metadata to the document",
      "To improve SEO rankings",
    ],
    answer: "To provide an accessible name for screen readers",
    type: "mc",
  },
  {
    id: "wd-h-270",
    category: "wd",
    difficulty: "h",
    question:
      "How does `CORS` (Cross-Origin Resource Sharing) enhance security in web applications?",
    reason:
      "CORS is a security feature that controls how web pages can request resources from a different domain, preventing unauthorized access to resources by only allowing specified domains.",
    options: [
      "By blocking all cross-origin requests",
      "By allowing all cross-origin requests without restriction",
      "By restricting access to resources based on origin",
      "By enabling data encryption in transit",
    ],
    answer: "By restricting access to resources based on origin",
    type: "mc",
  },
  {
    id: "wd-h-271",
    category: "wd",
    difficulty: "h",
    question:
      "In CSS, how does the `@keyframes` rule function within an animation?",
    reason:
      "The `@keyframes` rule defines the intermediate steps in a CSS animation, specifying how the animated element should look at various points during the animation sequence.",
    options: [
      "It sets the speed of the animation",
      "It defines the intermediate steps of the animation",
      "It determines the start and end points of the animation",
      "It controls the order of multiple animations",
    ],
    answer: "It defines the intermediate steps of the animation",
    type: "mc",
  },
];
