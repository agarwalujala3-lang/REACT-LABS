1. where does React put all of the elements when i create in JSX when i call `root.render()`?

All the elements i render get put inside the div with tyhe id od "root" 
(or whatever other elements i might select hwn calling createRoot)


2. what should show up to my console if i were to run this line of code:
```
console.log(<h1>Hello World!</h1>)?
```
An Object! Unlike creatign an HTML elemnt in Vanilla DOM JS, what get craeted fron the JSX we have in our React code is the plain JS object that React will use to fill in the view.


3. What's Wrong with this code:
```root.render(
    <h1>Hi there</h1>
    <p>This is my Website</p>
    )```

You can only render 1 parent elemnet at a time. That parent element can have as many childerens as you want.


4. What does it mean for something to be 'declarative" instead of "impreative"?

*Impereative* means we need to give specific step-by-tsep instructions on how to accomplish a task.
*Declarative* means we can write outr codse to simplfy "describe" *what* should shjow up on a page and allow the root(React, e.g.) to handle the details on the *how* to put things on the page.


5. what doest it mean for something to be "composable"?

we habve small peices that we can put together to make something larger or  greater than the individual peices themselves.