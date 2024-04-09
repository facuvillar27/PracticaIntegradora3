import dotenv from "dotenv"

dotenv.config()

export default {
    port: process.env.PORT,
    mailing: {
        SERVICE: process.env.MAILING_SERVICE,
        USER: process.env.MAILING_USER,
        PASSWORD: process.env.MAILING_PASSWORD
    },
    mongo: {
        URL: process.env.MONGO_URL
    },
    jwt: {
        COOKIE: process.env.JWT_COOKIE,
        SECRET: process.env.JWT_SECRET
    }
}

// const environment = process.env.NODE_ENV || 'development';

// const config = {
//     PORT: process.env.PORT || 8080,
//     DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/ecommerce'
// }

// export default config