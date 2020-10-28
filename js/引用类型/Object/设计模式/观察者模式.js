function EventTarget(params) {
    this.handler = {};
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function (type, fn) {
        let cb = this.handler[type];
        if (typeof cb === 'undefined') {
            this.handler[type] = fn;
        }
    },
    fire: function (event) {
        if (!event.target) {
            event.target = this;
        }
        let handler = this.handler[event.type];
        if (typeof handler !== 'undefined') {
            handler(event);
        }
    },
    removeHandler: function (type) {
        if (this.handler[type] !== undefined) {
            this.handler[type] = undefined;
        }
    }
}

let handler = new EventTarget();
function test1(params) {
    let { message, type } = params;
    console.log(`${type},我是 ${message}`);
}
handler.addHandler('test1', test1);
handler.fire({ type: 'test1', message: "test1" });
handler.removeHandler('test1');
handler.fire({ type: 'test1', message: "test1" });

(
    function (params) {
        let now = new Date();

    }
)()