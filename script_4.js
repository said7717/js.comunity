let p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("1-soniyalik promise tugadi");
    }, 1000);
  });
  
  let p2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("2-soniyalik promise tugadi");
    }, 2000);
  });
  
  let p3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("3-soniyalik promise tugadi");
    }, 3000);
  });
  
  Promise.all([p1, p2, p3])
    .then((result) => {
      console.log("Promise.all natija:", result);
    })
    .catch((err) => {
      console.log("Xato:", err);
    });
    