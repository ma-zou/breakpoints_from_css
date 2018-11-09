# Preparation

To get things starte you first need to do some css. To get the needed information define the pseudo-element ::before for your <body> tag.
The idea is to add all the values needed to content property of your ::before.
The following shema is required 

``` css
body::before {
    content: '"default:16px....tiny:30em....small:40em....medium:50em....large:62em....giant:75em....huge:85.25em....full:95em"';
}
```
Between Breakpoint name and value a ':' is required. Between Breakpoints '....' is required.

# Usage

Preperation done? nice.
Add the script to your Website.

There are two different information provided now.

```js
breakpoint(); // [default: "16px", tiny: "30em", small: "40em", ...]
```
Calling the function without any Argument will return an Array with all breakpoint names and values.

```js
breakpoint('medium'); // If screen-width is greaten than 30em return true, if smaller return false
```

You can also define the direction parameter
```js
breakpoint('medium', 'max'); // If screen-width is smaller than 30em return true, if greater return false
```