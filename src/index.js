const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr.split()
    symbols = []
    string = ''
    for (let i = 0; i < expr.length; i+=10) {
        symbols.push(expr.slice(i, i+10))
    }
    symbols.forEach(el => {
        if (el == '**********') {
            string += ' '
        } else {
            morseString = ''
            for (let i = 0; i < 10; i+=2) {
                if ((el.slice(i, i+2)) == '10') {
                    morseString += '.'
                } else if ((el.slice(i, i+2)) == '11') {
                    morseString += '-'
                }
            }
            string += MORSE_TABLE[morseString]
        }        
    })
   return string
}

module.exports = {
    decode
}