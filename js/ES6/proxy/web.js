// 实例：Web 服务的客户端
// 实现数据库的 orm 层

function createWebService(baseUrl) {
    return new Proxy({}, {
        get(target, propKey, receiver) {
            return () => httpGet(baseUrl + '/' + propKey)
        }
    })
}