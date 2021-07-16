const glob = require('glob')
const projectTitles = '词库检索系统'
const projectName = process.argv[3] || 'pcSlr'
const getEntry = function () {
    let entries = {}
    let modules = glob.sync('./src/modules/*/*.js') // 获取所有模块
    if (process.env.NODE_ENV === 'production') {
        // 打包方式一：一次打包一个模块 不同模块打包到不同的文件夹下 npm run build + projectName
        entries = {
            index: {
                entry: `./src/modules/${projectName}/main.js`,
                template: `public/index.html`,
                filename: `index.html`,
                title: projectTitles,
                chunks: ['chunk-vendors', 'chunk-common', 'index']
            }
        }

        // 打包方式二：一次打包多个模块
        // for(let i in modules){
        //     let filePath = modules[i]
        //     let fileList = filePath.split('/')
        //     let fileName = fileList[fileList.length - 2]
        //     entries[fileName] = {
        //         entry: `./src/modules/${fileName}/main.js`,
        //         template: 'public/index.html',
        //         filename: `index.html`,
        //         title: fileName === 'securities' ? '美股港股' : '观点及资讯',
        //         chunks: ['chunk-vendors','chunk-common',fileName]
        //     }
        // }
    } else {
        // 开发环境运行1 默认运行securities ，npm run server viewpoint
        // entries = {
        //     index: {
        //         entry: `./src/modules/${projectName}/main.js`,
        //         template: `public/index.html`,
        //         filename: `index.html`,
        //         title: projectName === 'securities' ? '美股港股' : '观点及资讯',
        //         chunks: ['chunk-vendors','chunk-common','index']
        //     }
        // }

        // 开发环境运行2 一次运行多个模块 分别打开页面 http://localhost:8080/fileName.html
        for (let i in modules) {
            let filePath = modules[i]
            let fileList = filePath.split('/')
            let fileName = fileList[fileList.length - 2]
            entries[fileName] = {
                entry: `./src/modules/${fileName}/main.js`,
                template: 'public/index.html',
                filename: `${fileName}.html`,
                title: projectTitles,
                chunks: ['chunk-vendors', 'chunk-common', fileName]
            }
        }
    }
    return entries
}
module.exports = {
    projectName,
    pages: getEntry()
}