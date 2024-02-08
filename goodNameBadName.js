// Problem-2:
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
  
  const result = checkName("Salman");
  // const result = checkName("RAFEE");
  // const result = checkName("Jhankar ");
  // const result = checkName(199);
  // const result = checkName(["Rashed"] );
  // console.log(result);