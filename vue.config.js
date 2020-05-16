module.exports = {
    publicPath: '/lab_6/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Работники';

                return args;
            });
    }
};