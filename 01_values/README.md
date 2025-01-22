# Homework 1: Values

The `main.ts` file included in this directory contains a list of
assertions in the following format:

```
expect(<actual>).toBe(<expected>);
```

An assertion asserts that the actual value of an operation is the value
that is expected. For instance, one may assert that `1 + 1`, whose
actual value is `2`, should equal `2`. If that is not the case in your
program, then you know something is wrong.

The given assertions are missing their expected value. Add the correct
expected value matching the actual one.

To test your solution, you can execute the code by running the following
command (make sure to do so from within the directory that contains the
`main.ts` file):

```sh
deno run main.ts
```

If the command produces an error, pay attention to what it says. Most
errors contain clues as to how to solve them!
