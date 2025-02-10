import { assertEquals } from "https://deno.land/std@0.202.0/testing/asserts.ts";
import { hey } from "./bob.ts"; // Import the function

Deno.test("responds to a question", () => {
  assertEquals(hey("How are you?"), "Sure.");
});

Deno.test("responds to yelling", () => {
  assertEquals(hey("WATCH OUT!"), "Whoa, chill out!"); 
});

Deno.test("responds to yelling a question", () => {
  assertEquals(hey("ARE YOU SERIOUS?"), "Calm down, I know what I'm doing!"); 
});

Deno.test("responds to silence", () => {
  assertEquals(hey("   "), "Fine. Be that way!");
});

Deno.test("responds to anything else", () => {
  assertEquals(hey("Whatever this is."), "Whatever.");
});


