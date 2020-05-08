## Step 3: Extract data from your HTML page

When you are done with all the JavaScript interactive challenges, it's time to turn your HTML page into data so we can manipulate it further with JavaScript.

The right way is to use an HTML parser:

-  [Parse an HTML string with JS](https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js)
-  [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
-  [Fast HTML Parser](https://www.npmjs.com/package/node-html-parser)

But we want to take this opportunity to...

### Learn regex

[FreeCodeCamp's Regular Expressions challenges](https://www.freecodecamp.org/learn)

Watch the following video and follow along with the interactive application.

Video on learning regular expressions:

[Best of Fluent 2012: /Reg(exp){2}lained/: Demystifying Regular Expressions by Lea Verou](https://www.youtube.com/watch?v=EkluES9Rvak)

Interactive application:

[Regexplained](http://leaverou.github.io/regexplained/)

## Test in the regex101 environment

Copy and paste your code beginning with `<!-- start column -->` and ending with `<!-- end column -->` into "Test String" input box here at [regex101.com](https://regex101.com/).

For example:

```html
<!-- start column -->
<div class="col-12 col-lg-8 offset-lg-2 mb-5">
   <p class="name"><b>add</b> - Add two numbers together</p>
   <pre style="display: none;"><code></code></pre>
   <button class="btn btn-primary inline-action">
      Run
   </button>
   <input type="text" class="form-control inline-action" />
   <input type="text" class="form-control inline-action" />
   <div class="clearfix mb-3"></div>
   <div class="alert alert-primary" style="display:none;"></div>
</div>
<!-- end column -->
```

Then write regular expression to find the **function name**, **function description**, and **every input**.

Next, write a script with Node.js that reads everything from `index.html`, saves the data you need, and maps it to an array of objects, that looks like this:

```javascript
[
   {
      name: "add",
      description: "adds two things together"
      inputs: 2
   },
   {
      name: "subtract",
      description: "subtracts the second number from the first number"
      inputs: 2
   }
]
```

## Regex for extracting values from the HTML page

### Columns

```
/(?<=\<\!--\sstart\scolumn\s--\>).*?(?=<!--\send\scolumn\s-->)/gs
```

### Function name

```
/(?<=<b>).+(?=<\/b>)/
```

### Function description

```
/(?<=<\/b>\s-\s).+(?=<\/p>)/
```

### Number of inputs

```
/(\<input.+\/>)/g
```
