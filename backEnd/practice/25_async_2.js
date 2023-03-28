function changeColor(color) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      document.body.style.backgroundColor = color;
      resolve();
    }, 1000);
  });
}

async function exec() {
  await changeColor("red");
  await changeColor("orange");
  await changeColor("yellow");
  await changeColor("green");
  await changeColor("blue");
}

exec();
