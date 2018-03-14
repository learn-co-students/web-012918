# Functional Programming
* **Declarative** versus **imperative**
  * Imperative (procedural)
    * _How_ to do some operation
    * Based on statements `if`, `for`, `switch`
  * Declarative
    * _What_ operations to do
    * Based on expressions which resolve to a value
* **Pure functions**
  * Given the same inputs, always returns the same output
  * Has no **side-effects**, doesn't change anything in the program
    * Modifying any external variable or object property
    * Logging to the console
    * Writing to the screen
    * Writing to a file
    * Writing to the network
    * Triggering any external process
    * Calling any other functions with side-effects
  * Avoid **shared state**
    * Don't use variables/data from outside of function
  * Avoid **mutating state**
    * Shallow immutability: `Object.freeze`
    * Creating new objects: `Object.assign`
  * References
    * [Quick Read - Medium](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
    * [In depth read - Medium](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976)
* **Higher-order functions** and reusability
  * Abstract or isolate actions, effects, or async flow control using callback functions, promises
  * Create utilities which can act on a wide variety of data types (think functional library)
  * **Partial application** of a function to its arguments or create a **curry**-able function for the purpose of reuse or function composition
  * Take a list of functions and return some composition of those input functions
  * References
    * [Simple Explanation HOF - Quora](https://www.quora.com/What-is-a-simple-explanation-of-higher-order-functions-and-callbacks-in-JavaScript)
    * [Eloquent JavaScript HOF - ebook](http://eloquentjavascript.net/05_higher_order.html)
    * [Sitepoint](https://www.sitepoint.com/higher-order-functions-javascript/)
    * [Currying and Partial Application](https://medium.com/wdstack/javascript-function-composition-currying-and-partial-application-5a04107530ee)
* Function **composition**
  * Combine two or more functions to perform some computation
    * `f(g(x))`
  * Combine two or more functions to produce a new function
    * `f(g)(x) === f(g(x))`
  * References
    * [Composition](http://blog.ricardofilipe.com/post/javascript-composition-for-dummies)
* Memoization
  * [Memoization - Good article](https://addyosmani.com/blog/faster-javascript-memoization/)
* Anonymous Functions
* Recursion
