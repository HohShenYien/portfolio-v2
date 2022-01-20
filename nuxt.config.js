import colors from 'vuetify/es5/util/colors'

const path = require('path');
const fs = require('fs');

// Quickly read all  markdown files in blog and append to routes
let directoryPath = path.join(__dirname, 'content/blog');
let blogs = [];
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    blogs.push(file.split('.')[0]);
  });
});

directoryPath = path.join(__dirname, 'content/project');
let projects = [];
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    projects.push(file.split('.')[0]);
  });
});

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Hoh Shen Yien',
    title: 'CS Diary',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!'
      },
      {name: 'format-detection', content: 'telephone=no'},
      {
        property: 'og:title',
        content: 'CS Diary',
        template: chunk => `${chunk} | Hoh Shen Yien`,
        vmid: 'og:title'
      },
      {
        property: 'og:image',
        content: '/favicon.ico',
        vmid: 'og:image'
      },
      {
        property: 'og:description',
        content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!',
        vmid: 'og:description'
      },
      {
        property: 'og:url',
        content: '',
        template: chunk => `https://shenyien.cyou/${chunk}`,
        vmid: 'og:url'
      },
      {
        property: 'twitter:title',
        content: 'CS Diary',
        template: chunk => `${chunk} | Hoh Shen Yien`,
        vmid: 'twitter:title'
      },
      {
        property: 'twitter:image',
        content: 'https://shenyien.cyou/favicon.ico',
        vmid: 'twitter:image'
      },
      {
        property: 'twitter:description',
        content: 'Hi, I am Shen Yien, an enthusiastic programmer (Computer Science student). You can learn all about me here!',
        vmid: 'twitter:description'
      },
      {
        name: 'twitter:card',
        content: `summary_large_image`,
        vmid: 'twitter:card'
      },
      {
        name: 'keywords',
        content: `Hoh Shen Yien`,
        vmid: 'keywords'
      },
      {property: "og:site_name", content: "I Love Painting"},
      {hid: "og:type", property: "og:type", content: "website"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '@/plugins/myCustoms', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: '#FFE540',
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "three"
    ],
  },
  // generate error page for netlify
  generate: {
    fallback: true,
    async routes() {
      // const {$content} = require("@nuxt/content");
      // console.log($content);
      // let posts = await $content('blog')
      //   .only(['slug'])
      //   .fetch();
      // let analysis = await $content('analysis')
      //   .only(['slug'])
      //   .fetch();
      // let projects = await $content('project')
      //   .only(['slug'])
      //   .fetch();
      // return [
      //   ...posts.map(post => {
      //     return '/blog/' + post.slug
      //   }),
      //   ...analysis.map(analyst => {
      //     return '/analysis/' + analyst.slug
      //   }),
      //   ...projects.map(project => {
      //     return '/project/' + project.slug
      //   })
      // ];
      return [
        ...blogs.map(blog => {
          return '/blog/' + blog
        }),
        ...projects.map(project => {
          return '/project/' + project.slug
        })
      ]
    }
  }
}
