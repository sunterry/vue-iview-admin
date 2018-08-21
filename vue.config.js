module.exports = {
  css: {
    extract: process.env.NODE_ENV === 'production',
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
