// 获取窗口页面的大小
function getWindowSize(window) {
    let pageWidth = window.innerWidth;
    let pageHeight = window.innerHeight;
    if (typeof pageWidth !== 'number') {
        if (document.compatMode === 'CSS1Compat') {
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        } else {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }
    return { pageWidth, pageHeight }
}