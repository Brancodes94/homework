# homework 5: Data structures

Complete the assignments below. Save each program in a separate file.

## The sum of a range

Write a range function that takes two arguments, `start` and `end`, and
returns an array containing all the numbers from `start` up to and
including `end`.

Next, write a `sum` function that takes an array of numbers and returns
the sum of these numbers. 

<details>
<summary>Hint</summary>
<br>

Building up an array is most easily done by first initializing a binding
to `[]` (a fresh, empty array) and repeatedly calling its `push` method
to add a value. Don't forget to return the array at the end of the
function.

Since the `end` boundary is inclusive, you'll need to use the `<=`
operator rather than `<` to check for the end of your loop.

</details>

## Reversing an array

Arrays have a `reverse` method that changes the array by inverting the
order in which its elements appear. For this exercise, write two
functions, `reverseArray` and `reverseArrayInPlace`. The first,
`reverseArray`, should take an array as argument and produce a new array
that has the same elements in the inverse order. The second,
`reverseArrayInPlace`, should do what the reverse method does: modify
the array given as argument by reversing its elements. Neither may use
the standard `reverse` method.

<details>
<summary>Hint</summary>
<br>

There are two obvious ways to implement `reverseArray`. The first is to
simply go over the input array from front to back and use the `unshift`
method on the new array to insert each element at its start. The second
is to loop over the input array backwards and use the `push` method.

Reversing the array in place is harder. You have to be careful not to
overwrite elements that you will later need. The trick is to swap the
first and last elements, then the second and second-to-last, and so on.

</details>

## Deep comparison

The `==` operator compares objects by identity, but sometimes you'd
prefer to compare the values of their actual properties.

Write a function `deepEqual` that takes two values and returns true only
if they are the same value or are objects with the same properties,
where the values of the properties are equal when compared with a
recursive call to `deepEqual`.

To find out whether values should be compared directly (using the `===`
operator for that) or have their properties compared, you can use the
`typeof` operator. If it produces "object" for both values, you should do
a deep comparison. But you have to take one silly exception into
account: because of a historical accident, `typeof null` also produces
"object".

The `Object.keys` function will be useful when you need to go over the
properties of objects to compare them.

<details>
<summary>Hint</summary>
<br>

Your test for whether you are dealing with a real object will look
something like `typeof x == "object" && x != null`. Be careful to
compare properties only when both arguments are objects. In all other
cases you can just immediately return the result of applying `===`.

Use `Object.keys` to go over the properties. You need to test whether both
objects have the same set of property names and whether those properties
have identical values. One way to do that is to ensure that both objects
have the same number of properties (the lengths of the property lists
are the same). And then, when looping over one of the object's
properties to compare them, always first make sure the other actually
has a property by that name. If they have the same number of properties
and all properties in one also exist in the other, they have the same
set of property names.

Returning the correct value from the function is best done by
immediately returning false when a mismatch is found and returning true
at the end of the function.

</details>

