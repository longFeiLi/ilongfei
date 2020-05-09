
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keyword', content: 'ilongfei,longfei, 龙飞, 爱龙飞, 爱生活' },
      { hid: 'description', name: 'description', content: 'ilongfei.cn 是个人网站，用于个人技术研究和文章发布。爱生活，爱龙飞!' },
      { name: 'google-site-verification', content: 'fcq-RIwyLOKek3VE-Fzej9hEiRPPjLh6QXQlNZ9EwHo' },
      { name: 'baidu-site-verification', content: 'cUdJQ6MhqL' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'ant-design-vue/dist/antd.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/antd-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
