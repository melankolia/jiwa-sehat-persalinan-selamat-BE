module.exports = {
    splitter: (e ,type = "_") => {
        return {[e[0].split(type)[1]]: e[1] ? e[1] : 0}
    }
}