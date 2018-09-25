module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
        filename: 'bundle.js'
    }
}