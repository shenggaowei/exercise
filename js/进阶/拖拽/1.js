class Drag {
    constructor(ele) {
        this.ele = ele;
        this.ele.onmousedown = this.onmousedown.bind(this);
    }

    onmousedown(e) {
        e = e || window.event;
        this.offsetX = e.clientX - this.ele.offsetLeft;
        this.offsetY = e.clientY - this.ele.offsetTop;
        document.documentElement.onmousemove = this.onmousemove.bind(this);
        document.documentElement.onmouseup = this.onmouseup.bind(this);
        // mousemove 事件只有在元素内部移动时才会触发
    }

    onmousemove(e) {
        e = e || window.event;
        let { offsetWidth, offsetHeight } = this.ele;
        let { clientX, clientY } = e;
        let curX = clientX - this.offsetX, curY = clientY - this.offsetY;

        if (curX <= 0) {
            curX = 0;
        } else if (curX > document.documentElement.clientWidth - offsetWidth) {
            curX = document.documentElement.clientWidth - offsetWidth;
        }

        if (curY <= 0) {
            curY = 0;
        } else if (curY > document.documentElement.clientHeight - offsetHeight) {
            curY = document.documentElement.clientHeight - offsetHeight;
        }

        this.ele.style.left = curX + 'px';
        this.ele.style.top = curY + 'px';

    }

    onmouseup() {
        document.documentElement.onmousemove = null;
    }
}