# vuemtmskits

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
Quick setup — if you’ve done this kind of thing before
or
https://github.com/mochengtu/vuemtmskits.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# vuemtmskits" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mochengtu/vuemtmskits.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/mochengtu/vuemtmskits.git
git branch -M main
git push -u origin main
…or import code from another repository
You can initialize this repository with code from a Subversion, Mercurial, or TFS project.
```


### 使用 `Vue3` 配合 `element-plus` 的正确方式
- 1、安装 vue-cli-plugin-element-plus 插件, `yarn add vue-cli-plugin-element-plus `
    - 网址： `https://github.com/element-plus/vue-cli-plugin-element-plus`
- 2、应用插件：`cd vuemtmskits` 
    - `vue add element-plus`
    
```ts
    plugins
        |  
        |-element.js
            import ElementPlus from 'element-plus'
            import '../element-variables.scss'
            import locale from 'element-plus/lib/locale/lang/zh-cn'
            
            export default (app) => {
                app.use(ElementPlus, { locale })
            }


    src
        |
        |-element-variables.scss
            /*
            Write your variables here. All available variables can be
            found in element-plus/packages/theme-chalk/src/common/var.scss.
            For example, to overwrite the theme color:
            */
            $--color-primary: hotpink;
            
            /* icon font path, required */
            $--font-path: '~element-plus/lib/theme-chalk/fonts';
            
            @import "~element-plus/packages/theme-chalk/src/index";
            
        |-main.ts
            import { createApp } from 'vue';
            import routes from '@/routes/index';
            import App from './App.vue'
            import 'element-plus/lib/theme-chalk/index.css';
            import installElementPlus from './plugins/element'
            
            const app = createApp(App);
            app.use(routes);
            app.use(installElementPlus);
            app.mount('#app');
```