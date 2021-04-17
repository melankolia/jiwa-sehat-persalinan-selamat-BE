module.exports = {
    splitter: (e) => {
        return e[0].split("question")[1] - 1;
    },
}