
const font = {
    1: ["   ", "  |", "  |"],
    2: [" _ ", " _|", "|_ "],
    3: [" _ ", " _|", " _|"],
    4: ["   ", "|_|", "  |"],
    5: [" _ ", "|_ ", " _|"],
    6: [" _ ", "|_ ", "|_|"],
    7: [" _ ", "  |", "  |"],
    8: [" _ ", "|_|", "|_|"],
    9: [" _ ", "|_|", " _|"],
    0: [" _ ", "| |", "|_|"]
};


function display(input) {

    let arr = input.toString().split("");
    let output = {
        row1: [],
        row2: [],
        row3: []
    };

    for (i = 0; i < arr.length; i++) {

        output.row1.push(font[arr[i]][0]);
        output.row2.push(font[arr[i]][1]);
        output.row3.push(font[arr[i]][2]);
    };
    return (`${output.row1.join("")}\n${output.row2.join("")}\n${output.row3.join("")}`);
};

console.log(display(123456789));
console.log(display(433805825));
console.log(display(526837608));
console.log(display(954105592));


const decoderInput = display("123456789")


function decoder(input) {

    arr = input.split(`\n`);

    for (i = 0; i < arr.length; i++) {
        arr[i].match(/.{3}/g)
    };

};














