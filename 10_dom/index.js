/** Let's grab elements on the page **/
// let h1 = document.querySelector('h1')
// console.log(h1) // <h1>Some Cool People</h1>

/** Grabs the first element that matches **/
// let p = document.querySelector('p')
// console.log(p) //<p>Matt</p>

/** Grabs all matching elements that match **/
// let pTags = document.querySelectorAll('p')
// console.log(pTags) // NodeList(3) [p, p, p]

/** Grabs an element by an id **/
// let prince = document.getElementById('prince')
// console.log(prince)

/** Change text with `innerText` NOT THE SAME AS `innerHTML` **/
// let prince = document.getElementById('prince')
// prince.innerText = "Maxcell is his real name"

// innerHTML let's you add more HTML elements into it as children
// useful if you wanna had a card full of information and interpolate
// prince.innerHTML = `<h1>WELCOME TO THE REAL WORLD</h1>`

/** Changing the styling of an element **/
let p1 = document.querySelectorAll('p')[0]
let p2 = document.querySelectorAll('p')[1]
let p3 = document.querySelectorAll('p')[2]
p1.style.backgroundColor = "blue"
p1.style.color = "white"
p2.style.color = "red"
p3.style.boxShadow = "5px 5px peachpuff"
p3.style.padding = "10px"
p3.style.border = "1px solid"


/*** Adding Elements Dynamically ***/
let p = document.createElement('p')
p.innerText = "YOUR NAME HERE"
document.body.append(p)
// Remember obj.append(newObj) means that we take newObj and make it a child of obj

/*** Removing Elements Dynamically ***/
p.remove()
