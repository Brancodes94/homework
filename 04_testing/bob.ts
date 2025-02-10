export function hey(message: string): string {
  // Trim whitespace
  message = message.trim();

  // Check for silence
  if (message == "") {
    return "Fine. Be that way!";
  }

  // Check if message is all uppercase
  const isYelling = message === message.toUpperCase() && /[A-Z]/.test(message);
  const isQuestion = message.endsWith("?");

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
}