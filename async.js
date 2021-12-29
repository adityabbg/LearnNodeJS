const getUser = (id, callback) =>{
    const time = id === 1 ? 8000 : 5000;
    setTimeout(() => {
        const nama = id === 1 ? 'Aditya' : 'Bambang';
        callback({ id, nama});
    },time)
};

const userSatu = getUser(1, (hasil) =>{
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);    
});

const halo = 'Hello World';
console.log('selesai');