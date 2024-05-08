# Homework 4: Functions

Complete the assignments below. Save each program in a separate file.

## Minimum

Write a function `min` that returns its smallest argument. For instance,
`min(0, 10)` should return `0`, and `min(0, -10)` should return `-10`.

<details>
<summary>Hint</summary>
<br>

A function may contain multiple `return` statements.

</details>

## Recursion

We've seen that we can use the modulo operator `%` to test whether a
number is even or odd by using `n % 2` to see whether `n` is divisible
by two. Here is another way to define whether a positive whole number is
even or odd:

-   Zero is even.
-   One is odd.
-   For any other number `N`, its evenness is the same as `N - 2` (until
    we arrive at zero or one).

Define a recursive function `isEven` corresponding to this description.
The function should accept a single parameter (a positive, whole number)
and return a Boolean.

Test it on `50` and `75`. See how it behaves on `-1`. Why? Can you think
of a way to fix this?

## Bean counting

You can get the Nth character, or letter, from a string by writing `[N]`
after the string (for example, `string[2]`). The resulting value will be
a string containing only one character (for example, `"b"`). The first
character has position 0, which causes the last one to be found at
position `string.length - 1`. In other words, a two-character string has
length 2, and its characters have positions 0 and 1.

Write a function `countBs` that takes a string as its only argument and
returns a number that indicates how many uppercase B characters there
are in the string.

Next, write a function called `countChar` that behaves like `countBs`,
except it takes a second argument that indicates the character that is
to be counted (rather than counting only uppercase B characters).
Rewrite `countBs` to make use of this new function.

<details>
<summary>Hint</summary>
<br>

Your function will need a loop that looks at every character in the
string. It can run an index from zero to one below its length (`<
string.length`). If the character at the current position is the same as
the one the function is looking for, it adds 1 to a counter variable.
Once the loop has finished, the counter can be returned.

Take care to make all the bindings used in the function local to the
function by properly declaring them with the `let` or `const` keyword.

</details>
