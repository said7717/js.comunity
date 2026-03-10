// let promise=new Promise((resolve) =>{
//     setTimeout(()=>{
//         resolve('SALOM DUNYO')
//     },1000)

// })
// promise
//     .then((result)=>{
//         console.log(result);
        
//     });


// ===============================================================
// let baza= true;
// let promise=new Promise((resolve,rejected)=>{
//     if (baza) {
//         setTimeout(()=>{
//             resolve("Ma'lumot yuklandi")
//         },3000)
        
//     }else{
//         rejected("Ma'lumot yuklanmadi")
//     }
// })

// promise
//     .then((result)=>{
//         console.log(result);
    
//     });


// ==================================================================
let login = true;

let promise=new Promise((resolve, reject) => {

    if (login) {
        setTimeout(()=>{
            resolve("Foydalanuvchi tizimga kirdi")
        },2000)
        
    }else{
        reject("Login yoki parol xato")
    }
})
promise
    .then((result)=>{
        console.log(result);
    })

    .catch((err)=>{
        console.log(err);
    })