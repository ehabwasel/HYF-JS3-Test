1. You could have used XMLHttpRequest, the library axios or the fetch API to get the data from the server. And you could have used callbacks, async/await and/or promises. What did you use and why?
   (_TIP: There is no right way, all have their advantages and disadvantages. Explain your decision making listing the advantages/disadvantages of each technology/approach_)

My Answer

in this project i used fetch Api with async await to get data.because
1-Basic syntax is easier than axios and promises
also i use it because it gives you in various formats:
response.json(): Parse the response as JSON
response.text(): Read the response and return as text
response.formData(): Return the response as FormData object
response.blob(): Return the response as Blob
response.arrayBuffer(): Return the response as ArrayBuffer
also Definitely, XMLHttpRequest wasn’t made for the things we are using it today. Also, it’s API is kinda messed. The Fetch API makes it easier to make asynchronous requests and handle responses better than using an XMLHttpRequest. Fetch allows us to create a better API for the simple things, using modern JavaScript features like promises.
advantages of fetch api
1-Resolve callback hell
2-More concise to use
disadvantages
1-API is low-level and needs to be encapsulated
2-Browser support is not very friendly and requires a third-party ployfill

2- but Axios is its wide browser support. Even old browsers like IE11 can run Axios without any issue. Fetch(), on the other hand, only supports only new versions
Some core features of Axios, according to the documentation, are:

It can be used intercept http requests and responses.
It automatically transform request and response data.
It enables client-side protection against XSRF.
It has built-in support for download progress.
It has the ability to cancel requests.

2. Let's say you were a huge fan of Object Oriented Programming and you would have all the data the api provided in an array and you want to restructure your code in an OOP way. What classes would you make and what functions would they have?
   (_TIP: You do not have to write out the implementation of the functions (but you can if it makes it easier to think it through)_)
   (_TIP: If you are unsure between two decisions, then write a comment with the alternative you considered but decided against with arguments. There is again no one correct answer here, but we want to see you think in an OOP way_)
   (_TIP: If you want the code highlighting, it is also fine to create a `.js` file and then write down here what file to look at_)

Imagine the data is given as follows:

```
const data = [{
  category: 'Sports',
  questions: [{ question: 'Who won the 2015 Formula 1 World Championship?', answer: 'Lewis Hamilton'}, ...]
}, {
  ...
}];
```

Example of how to write the classes (taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    // get the area of the rectangle
  }

  calcArea() {
    // calculate the area of the rectangle
  }
}
```

I would make
class Data {
constructor(name, questions,answer) {
this.name = category;
this.questions = questions;
this.answer = answer;
}

get randomElement() {
// get the random ELEMENT of the data
}

get categoryName() {
// get the NAME of the data
}
get QA() {
// get the questions of the data
}
}
