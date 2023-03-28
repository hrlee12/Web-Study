function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Promise heaven");
    }, 1000);
  });
}

call("kim")
  .then(function (a) {
    console.log(a + " 반가워");
    return back();
  })
  .then(function (b) {
    console.log(b + "을 실행했구나");
    return hell();
  })
  .then(function (c) {
    console.log("여기는 " + c);
  });
