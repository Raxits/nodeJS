export let column = (str, charCount) => {
    let count = charCount - str.toString().length;
    let line = str;
    for(let j = 0; j < count; j++)
        line += ' ';
    return line;
}
