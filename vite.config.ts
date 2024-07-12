import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import fs from 'node:fs'
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueDevTools(),
    AutoImport({
      resolvers:[ElementPlusResolver()],
    }),
    Components({
      resolvers:[ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      // 配置src目录别名
      '@': path.join(__dirname, 'src')
    }
  },
  // 构建配置
  build: {
    chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
    minify: 'terser', // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      },
      format: {
        comments: false // 删除注释
      }
    },
    rollupOptions: {
      output: {
        // manualChunks: {
        //   "vue-i18n": ["vue-i18n"],
        // },
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'js/[name].[hash].js',
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'js/[name].[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: (assetInfo: any) => {
          const info = assetInfo.name.split('.')
          let extType = info[info.length - 1]
          // console.log('文件信息', assetInfo.name)
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'media'
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = 'img'
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = 'fonts'
          }
          return `${extType}/[name].[hash].[ext]`
        }
      }
    }
  },
  // 启动访问地址
  server: {
    host: '0.0.0.0', // 这个用于启动
    port: 80, // 指定启动端口
    open: true //启动后是否自动打开浏览器
    // https: {
    //   cert: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.crt')),
    //   key: fs.readFileSync(path.join(__dirname, 'src/ssl/cert.key'))
    // }
  }
})
