function toCase(text) {
  // If the input string is empty, return '-'
  if (text === "") return "-";
  
  // Return lowercase and uppercase with '-' as the delimiter
  return text.toLowerCase() + "-" + text.toUpperCase();
}

// Do not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
