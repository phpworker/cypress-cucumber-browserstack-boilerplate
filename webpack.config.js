module.exports = {
    entry: {
        app: ['core-js/stable', 'entry file of your application']
    },
    module: {
        rules: [
            {
                test: /.node$/,
                loader: 'node-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        corejs: 3,
                                        targets: {
                                            chrome: '87',
                                            ie: '11',
                                            edge: '18',
                                            safari: '11',
                                            opera: '71',
                                            firefox: '78'
                                        }
                                    }
                                ],
                                '@babel/preset-react',
                            ],
                        },
                    }]
            }]
    }
};


