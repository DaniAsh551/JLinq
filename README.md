# JLinq
A pseudo-Linq like extensions library for JavaScript

## Currently Implemented functions are:

<ul>
  <li>range</li>
  <li>skip</li>
  <li>take</li>
  <li>first</li>
  <li>where</li>
  <li>all</li>
  <li>any</li>
  <li>select</li>
  <li>with</li>
  <li>intersect</li>
  <li>sum</li>
  <li>average</li>
  <li>orderBy</li>
  <li>orderByDescending</li>
</ul>

<hr/>
<h5>Usage</h5>
<p>Suppose you have an array named 'arr'. You could perform operations on this array simply like this:</p>

```javascript
  var arr = [1,2,3,4,5,6,7,8,9,0];
  var lessThanFive = arr.where(x => x < 5);
```
<p>In the above example, the new array would contain '1,2,3,4'.</p>
<br/>
<h5>String functions</h5>
<p>Apart from the above prototypes which apply to Arrays, there are a few String extensions and methods. These are:
  
<ul>
  <li>String.join</li>
  <li>String.format</i>
  <li>replaceAll</li>
</ul>

<p>The above String functions can be used in two ways.</p>
<p>Functions like String.join are directly added to the String class and can be used like this:</p>

```javascript
  var arr = [1,2,3,4,5,6,7,8,9,0];
  var joinedString = String.join(', ', arr); 
    //"1, 2, 3, 4, 5, 6, 7, 8, 9, 0"
  var formattedString = String.format('The first number is {0} and the last number is {1}', [arr[0],arr[arr.length - 1]]);
    //"The first number is 1 and the last number is 0"
```

<p>Other functions are prototypes and can be used like any other prototype. For Example:</p>

```javascript
  var arr = [1,2,3,4,5,6,7,8,9,0];
  var joinedString = String.join(', ', arr); 
    //"1, 2, 3, 4, 5, 6, 7, 8, 9, 0"
  var formattedString = String.format('The first number is {0} and the last number is {1}', [arr[0],arr[arr.length - 1]]);
    //"The first number is 1 and the last number is 0"
  formattedString = formattedString.replaceAll('number', 'digit');
    //"The first digit is 1 and the last digit is 0"
```
