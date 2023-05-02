let name = []
while (true) {
  let studentName = prompt('enter your name');
  if (!studentName) break;
  addArray(studentName);
}

alert(name);

function addArray(arrayElement) {
  name[name.length] = arrayElement;
}
