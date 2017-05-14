/**
 * 使用 HTML5 的 History 新 API pushState 来曲线监听 Android 设备的返回按钮
 * @author azrael
 * @date 2013/02/04
 * @version 1.0
 * @example
 * XBack.listen(function(){
		alert('oh! you press the back button');
	});
 */
;!function(pkg, undefined){

    console.log('pkg1=', pkg);

    var STATE = 'x-back';
    var element;

    var onPopState = function(event){

        console.log('event.state=', event.state);
        console.log('STATE=', STATE);
        event.state === STATE && fire();
    }

    var record = function(state){
        console.log('state==', state);

        // //创建了一个新的由 state, title, 和 url设定的浏览器历史纪录.
        history.pushState(state, null, location.href);
    }

    var fire = function(){
        var event = document.createEvent('Events');
        event.initEvent(STATE, false, false);
        element.dispatchEvent(event);
    }

    var listen = function(listener){
            console.log('listener=', listener);
            element.addEventListener(STATE, listener, false);
    }

    this.prototype.recordPre = function (preRouter) {
        history.pushState(state, null, location.href);
    }

    ;!function(){
        element = document.createElement('span');
        window.addEventListener('popstate', onPopState);
        console.log('listen=', listen);
        console.log('pkg2=', pkg);
        this.listen = listen;
        record(STATE);
    }.call(window[pkg] = window[pkg] || {});

}('XBack');