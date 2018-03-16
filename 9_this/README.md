# `this`
![`this`](https://i.stack.imgur.com/nPSkX.png)

1. What is `this`?
  * `this` is a value that points to a context to execute a `function` with.
  * How we execute a `function` determines the value of `this`
  * You can start thinking about it like an extra argument

1. When does `this` come up?
  * Baseless function call
    * How we've been using functions with the **window context**

    ```js
    function thisIs() { console.log(this) }
    thisIs() // window
    ```

  * Method call
    * Another way to call a function is as a **method on an object**

    ```js
    const person = {
      name: 'Tim',
      thisIs: function() { console.log(this) }
    }
    person.thisIs() // person
    ```

  * `call` and `apply`
    * There are cases where we want to be explicit about the value of this that our functions are referencing
    * That is, there are cases where we want to explicitly set a context

    ```js
    const tim = { name: 'Tim' }
    const jason = { name: 'Jason' }
    const andrew = { name: 'Andrew' }

    function thisIs() { console.log(this) }

    thisIs()              // window
    thisIs.call(tim)      // tim
    thisIs.call(jason)    // jason
    thisIs.call(andrew)   // andrew
    // thisIs.apply(...)
    ```
    * Using call and apply allow us to create a function one time and reuse it with different contexts without dealing with variables
    * Sometimes we want to be able to reuse the function where we set a specific context, and that's where `bind` comes in

    ```js
    const tim = { name: 'Tim' }
    const jason = { name: 'Jason' }

    function thisIs() { console.log(this) }

    const thisIsTim = thisIs.bind(tim)
    const thisIsJason = thisIs.bind(jason)

    thisIsTim()   // tim
    thisIsJason() // jason
    ```

  * In a `constructor` function with `new`
    * We create objects with specific constructors by using the `new` keyword

    ```js
    const Person = function(name, module) {
      this.name = name
      this.module = module
      console.log('the value of this is', this)
    }

    const tim = new Person('tim', 3)
    ```
