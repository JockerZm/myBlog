module.exports = {
    title: 'Jockerz Blog',
    description: '不忘初心 方得始终',
    dest: './dist',//默认在.vuepress
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.favicon'}],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
        ["script", { charset: "utf-8", src: "/js/main.js" }],//新加入
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav"),
        sidebar: require("./sidebar"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！',
        smoothScroll: true
    }
}