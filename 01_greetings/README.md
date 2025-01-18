# Homework 1: Greetings

The `prompt` built-in function allows a program to ask users for input.
It takes a prompt string as an argument, and returns the user's response
as a string.

```ts
const n = prompt("What is your favorite number?");
expect(typeof n).toBe("string");
```

Create a program that asks users for their name and year of birth.
Calcultate their age based on the current year. Then, print the
following greeting:

```
Hi <name>! You are <age> years old.
```

> [!NOTE]\
> In programming, angle brackets (`<` and `>`) are frequently used to
> indicate placeholders. You should replace them with the appropriate
> values.
