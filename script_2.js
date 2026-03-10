let xato=false;

let promise=new Promise((resolve,reject)=>{
    if (xato) {
            setTimeout(()=>{
                resolve('Xatolik yuz bermadi bemalol')
            },1000)
        
    }else{
        setTimeout(()=>{
            reject('Xatolik yuz berdi')
        },1000)
    }
})
promise
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log("Jarayon yakunlandi \n Yana urunib koring");
    
    }) 