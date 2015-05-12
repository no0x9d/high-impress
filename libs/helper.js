(function (window) {

    // our api is function simmilar to jQuery. If the argument is a string we get back a element
    // for this selector and if it is a function it is called when the document is ready.
    var api = function highImpress(arg1, arg2) {
        if (typeof arg1 === 'string') {
            return $(arg1, arg2);
        }
        else if (typeof arg1 === 'function') {
            ready(arg1);
        }
    };

    // `arraify` takes an array-like object and turns it into real Array
    // to make all the Array.prototype goodness available.
    function arrayify(a) {
        return [].slice.call(a);
    }

    // `$` returns first element for given CSS `selector` in the `context` of
    // the given element or whole document.
    function $(selector, context) {
        context = context || document;
        return context.querySelector(selector);
    }

    // `$$` return an array of elements for given CSS `selector` in the `context` of
    // the given element or whole document.
    function $$(selector, context) {
        context = context || document;
        return arrayify(context.querySelectorAll(selector));
    }

    // `byId` returns element with given `id` - you probably have guessed that ;)
    function byId(id) {
        return document.getElementById(id);
    }

    //document ready handler from stackoverflow
    //http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the/13456810#13456810
    var readyHandlers = [];

    function ready(handler) {
        readyHandlers.push(handler);
        handleState();
    }

    function handleState() {
        if (['interactive', 'complete'].indexOf(document.readyState) > -1) {
            while (readyHandlers.length > 0) {
                readyHandlers.shift()();
            }
        }
    }

    document.onreadystatechange = handleState;

    api.ready = ready;
    api.$$ = $$;
    api.$ = $;
    api.byId = byId;
    api.arrayify = arrayify;

    window.HighImpress = api;
    window.hi = window.hi || api;
})(window);