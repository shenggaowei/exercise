function getElementLeft(ele) {
    let { offsetLeft, offsetParent } = ele;
    let left = offsetLeft;
    let curParent = offsetParent
    while (curParent !== null) {
        left += curParent.offsetLeft;
        curParent = curParent.offsetParent
    }
    return left
}

function getElementTop(ele) {
    let { offsetTop, offsetParent } = ele;
    let top = offsetTop;
    let curParent = offsetParent
    while (curParent !== null) {
        top += curParent.offsetTop;
        curParent = curParent.offsetParent;
    }
    return top
}