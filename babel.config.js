module.exports = function (api) {
    api.cache(true);
    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ];

    return {
        babelrcRoots: [
            __dirname,
        ],
        // ignore: [
        //     './node_modules/*',
        // ],
        presets
    };
};