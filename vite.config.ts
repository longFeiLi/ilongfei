import path from 'path';
import { UserConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vuePlugin from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import visualizer from 'rollup-plugin-visualizer';
import unocss from 'unocss/vite';
import presetMini from '@unocss/preset-mini';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa'

export default ({ command }) => {
  const config: UserConfig = {
    plugins: [
      vuePlugin(),
      vueJsxPlugin(),
      eslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
      }),
      unocss({
        presets: [presetMini()]
      }),
      Components({
        resolvers: [ElementPlusResolver({ ssr: true })],
        directoryAsNamespace: true
      }),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        resolvers: [ElementPlusResolver({ ssr: true })]
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        devOptions: {
          enabled: true
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: /someInterface/i, // 接口缓存 此处填你想缓存的接口正则匹配
              handler: 'CacheFirst',
              options: {
                cacheName: 'interface-cache'
              },
            },
            {
              urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
              handler: 'CacheFirst',
              options: {
                cacheName: 'js-css-cache'
              }
            },
            {
              urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
              handler: 'CacheFirst',
              options: {
                cacheName: 'image-cache',
              },
            },
          ],
        },
        manifest: {
          name: 'ilongfei App',
          short_name: 'ilongfei',
          description: 'ilongfei 是个人技术研究论坛，用来个人学习、成长',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-80x80.png',
              sizes: '80x80',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    server: {
      port: 80
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  };

  if (command === 'build') {
    config.plugins.push(
      visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true
      })
    );
  }

  return config;
};
