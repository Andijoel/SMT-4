let coba = function () {
    return "coba function";
};

let buah = ['apel','anggur','nanas',10,coba(),
    (tes=()=>"hasil return arrow function"),
    function nama() {
        return "SMK JAYA";
    }
];
console.log(buah);

console.log(buah[0]);

for (const i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());