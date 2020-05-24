console.log("Demo String methods=> String.trimStart() String.trimEnd()");

let str = "    I have space arounf me    ";

str = str.trimStart().trimEnd().padStart(str.length-5, '-').padEnd(str.length,'-');

console.log(str.length);

console.log(str)