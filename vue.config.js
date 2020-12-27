module.exports = {
  "publicPath": "/",
  "devServer": {
    "proxy": {
      "/": {
        "target": "http://localhost:8092"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
