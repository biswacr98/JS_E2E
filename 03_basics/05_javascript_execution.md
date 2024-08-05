# JavaScript Execution

## JavaScript Execution Context
JavaScript execution context simply means that how the files which we created will run / execute.
To run our program, JavaScript runs it into two phases.

Whenever we give code files to our JavaScript, a **Global Execution Context** is created. The `this` keyword stores this **Global Execution Context**. Browsers have a different global execution object, Node.js environment have a different global execution object. The **Global Execution Context** is actually a `Window` object. Hence when we use `this` keyword on browser console, we get a full-fledged `Window` object.

![alt text](<this_browser.png>)

The execution of code happens inside a **thread**. JavaScript is **single threaded**. Everything is a **process** in JS.

We have basically three kinds of execution context:
- **Global Execution Context**
- **Functional Execution Context**
- **Eval Execution Context** (found in some documentations like Mongoose)
    - This is actually a property of Global object.

The code is run in two phases:
- **Memory Creation Phase**
    - The variables or whatever we declared are allocated to memory.
- **Execution Phase**
    - Here code gets executed.

![alt text](<JS_execution.png>)

There exists a **Call Stack** where activation record created when method called and when call done, it is popped off from this stack. The first element in Call Stack is **Global Execution**.
