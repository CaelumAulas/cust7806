require("dotenv").config()
module.exports = {
    "CDC_PORT": process.env.CDC_PORT || 3000,
    "DB_HOST": process.env.DB_HOST || 'localhost',
    "DB_PORT": process.env.DB_PORT || 3306,
    "DB_NAME": process.env.DB_NAME || 'cdc',
    "DB_USER": process.env.DB_USER || 'root',
    "DB_PASSWORD": process.env.DB_PASSWORD || '',
}
