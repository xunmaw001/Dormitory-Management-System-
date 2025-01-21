const base = {
    get() {
        return {
            url : "http://localhost:8080/phpc0l92/",
            name: "phpc0l92",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpc0l92/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于H5的宿舍管理系统"
        } 
    }
}
export default base
