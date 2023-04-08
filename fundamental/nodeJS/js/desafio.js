function getFlag(ab) {
    const index = process.argv.indexOf(ab) + 1
    return process.argv[index]
}

module.exports = getFlag;

