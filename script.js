var items = [];
//add items to the array and to the <ul>
function addItems(){
  boxvalue = document.getElementById('box').value;
  items.push(boxvalue);
  var li = boxvalue;
  document.getElementById("list").append(li);
  var br = document.createElement("br");
  var foo = document.getElementById("list");
  foo.append(br);
  console.log(items);
  return false;
}

addItems();

//choose a winner by selecting a random number from the array
function pickWinner(){
  let randomName = items[Math.floor(Math.random()*items.length)];
  document.getElementById("winningName").append(randomName);
  console.log(randomName);
}

pickWinner();
