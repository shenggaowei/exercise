function JSONP(options) {
    let formatParams = data => {
        let arr = []
        for (let key in data) {
            let arg = encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
            arr.push(arg)
        }
        return arr.join('&');
    }

    let { api, data, callbackKeyName = 'callback', callbackFnName = 'jsonp_' + new Date(), success, error, timeout, connect = '?' } = options;
    let oHead = document.getElementsByTagName('head')[0];
    let oS = document.createElement('script');
    data[callbackKeyName] = callbackFnName;
    let url = api + connect + formatParams(data);
    oS.src = url;
    oHead.appendChild(oS);


    window[callbackFnName] = function (data) {
        clearTimeout(oS.timer);
        success(data);
        oHead.removeChild(oS);
        window[callbackFnName] = null;
    }

    window['error'] = function (data) {
        error(data);
    }

    oS.timer = setTimeout(function (params) {
        window[callbackKeyName] = null;
        error({
            message: '超时了'
        })
        oHead.removeChild(oS);
    }, timeout || 8000)

}