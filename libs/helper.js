(function(window) {
    var api = {};
    api.readyHandlers = [];
    api.ready = function ready(handler) {
        api.readyHandlers.push(handler);
        handleState();
    };

    function handleState() {
        if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
            while (api.readyHandlers.length > 0) {
                api.readyHandlers.shift()();
            }
        }
    }

    document.onreadystatechange = handleState;

    window.hi = api;
})(window);