const path = require('path'); // Importamos la libreria path
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Importamos la libreria html-webpack-plugin
const CopyWebpackPluguin = require('copy-webpack-plugin'); // Importamos la libreria copy-webpack-plugin

module.exports = {
    entry: './index.js', // Archivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), // Carpeta donde se guardará el proyecto
        filename: 'main.js' // Nombre del archivo de salida
    },
    resolve: {
        extensions: ['.js'], // Extensiones que vamos a utilizar
    },
    module: {
        rules: [
            {
                test: /\.js?$/, // Expresion regular para identificar los archivos js
                exclude: /node_modules/, // Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // Utilizar el loader de babel
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html', // Archivo html de entrada
                filename: './index.html', // Archivo html de salida
            }
        ),
        new CopyWebpackPluguin({
            patterns: [{ from: './src/styles/styles.css', // Archivo css dde entrada
                to: '' }],
        })
    ]
}