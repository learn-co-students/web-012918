## Birth
`constructor(props)`
* Set initial state

`componentWillMount()`
* External Configuration
* Can't do too much more without the component itself.

`render()`
* Provide the Virtual Dom/JSX

`componentDidMount()`
* Now we have the component!
* Make API Calls
* `setState` here is an extra rendering, but is potentially worth it.

## Growth
`componentWillReceiveProps(nextProps)`
* We have access to props at two different stages, which lets us compare!
* This let's us identify particular state changes that we might want to make based on the props.
* This is only called on _new_ props, not during mounting.

`shouldComponentUpdate(nextProps, nextState)`
* Returns a boolean.
* If we don't want to waste renders, we can do that here.
* The next three functions only call if this returns `true`.
* Can be overridden by `forceUpdate()`.

`componentWillUpdate(nextProps, nextState)`
* Rarely used
* Can't call `setState`

`render()`
* You know
`componentDidUpdate(prevProps, prevState)`
* You have the new component, so you can ask questions about it's state in the DOM

## Death
`componentWillUnmount()`
* Cleanup cleanup everybody everywhere



`componentDidCatch(error, info)`
* Use this to catch _unexpected_ errors, don't use this for control flow. 