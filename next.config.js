require("dotenv").config({
    path: ".env.build",
})

const withAssetRelocator = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            const {isServer} = options

            if (isServer) {
                config.node = Object.assign({}, config.node, {
                    __dirname: false,
                    __filename: false,
                })

                config.module.rules.unshift({
                    test: /\.(m?js|node)$/,
                    parser: {amd: false},
                    use: {
                        loader: "@zeit/webpack-asset-relocator-loader",
                        options: {
                            outputAssetBase: "assets",
                            existingAssetNames: [],
                            wrapperCompatibility: true,
                            production: true,
                        },
                    },
                })
            }

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options)
            }
            return config
        },
    })
}

const config = {
    target: "serverless",
    env: {
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY,
            authDomain: process.env.FIREBASE_AUTH_DOMAIN,
            databaseURL: process.env.FIREBASE_DATABASE_URL,
            projectId: process.env.FIREBASE_PROJECT_ID,
            storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
        },
    },
}

module.exports = withAssetRelocator(config)
