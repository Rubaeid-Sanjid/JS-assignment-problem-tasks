function checkName(name) {
    if (typeof name !== "string") {
      return "invalid";
    }
    const nameSize = name.length;
    const lastChar = name[nameSize - 1].toLowerCase();
    const characters = ["A", "y", "i", "e", "o", "u", "w"];
    if (characters.includes(lastChar)) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
  
  const result = checkName(199);
  console.log(result);