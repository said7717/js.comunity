let promise = new Promise((resolve) => {

    setTimeout(() => {
        resolve(5);
    }, 1000);

});

promise
.then((son) => {
    return son * 2;
})
.then((natija) => {
    console.log(natija);
});