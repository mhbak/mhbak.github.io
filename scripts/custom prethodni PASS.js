// ŠTO JE UNUTRI:
// jQuery-Migrate.js
// jquery-easing-1.3.js - OVOGA NEMA JER NE TREBA
// superfish.min.js
// jquery.slicknav.min.js
// jquery.hoverIntent.minified.js
// jquery.fullsizable.js

// var functions KOKE - OVOGA NEMA JER ZA SADA NE TREBA JER SAM STAVIO MOJU DEBOUNCE FUNKCIJU:::::
// debounce function extracted from Lodash
// throttle function extracted from Lodash

// var functions call KOKE - OVOGA NEMA JER SAM PREBACIO U HTMLS:::::
	// removeAttr('width height') KOKE
	// getElementById('formreset').reset()
	// slick call 
	// fullsiz call 
// custom.js
// (Google) Universal Analytics: - OVO JE IZBAČENO I STAVLJENO NA SVAKU STRANU
//*******************************


// jQuery-Migrate.js
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);


// superfish.min.js KOKE

/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;!function(a,b){"use strict";var c=function(){var c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},d=function(){var b=/^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);return b&&a("html").css("cursor","pointer").on("click",a.noop),b}(),e=function(){var a=document.documentElement.style;return"behavior"in a&&"fill"in a&&/iemobile/i.test(navigator.userAgent)}(),f=function(){return!!b.PointerEvent}(),g=function(a,b,d){var e,f=c.menuClass;b.cssArrows&&(f+=" "+c.menuArrowClass),e=d?"addClass":"removeClass",a[e](f)},h=function(b,d){return b.find("li."+d.pathClass).slice(0,d.pathLevels).addClass(d.hoverClass+" "+c.bcClass).filter(function(){return a(this).children(d.popUpSelector).hide().show().length}).removeClass(d.pathClass)},i=function(a,b){var d=b?"addClass":"removeClass";a.children("a")[d](c.anchorClass)},j=function(a){var b=a.css("ms-touch-action"),c=a.css("touch-action");c=c||b,c="pan-y"===c?"auto":"pan-y",a.css({"ms-touch-action":c,"touch-action":c})},k=function(a){return a.closest("."+c.menuClass)},l=function(a){return k(a).data("sfOptions")},m=function(){var b=a(this),c=l(b);clearTimeout(c.sfTimer),b.siblings().superfish("hide").end().superfish("show")},n=function(b){b.retainPath=a.inArray(this[0],b.$path)>-1,this.superfish("hide"),this.parents("."+b.hoverClass).length||(b.onIdle.call(k(this)),b.$path.length&&a.proxy(m,b.$path)())},o=function(){var b=a(this),c=l(b);d?a.proxy(n,b,c)():(clearTimeout(c.sfTimer),c.sfTimer=setTimeout(a.proxy(n,b,c),c.delay))},p=function(b){var c=a(this),d=l(c),e=c.siblings(b.data.popUpSelector);return d.onHandleTouch.call(e)===!1?this:void(e.length>0&&e.is(":hidden")&&(c.one("click.superfish",!1),"MSPointerDown"===b.type||"pointerdown"===b.type?c.trigger("focus"):a.proxy(m,c.parent("li"))()))},q=function(b,c){var g="li:has("+c.popUpSelector+")";a.fn.hoverIntent&&!c.disableHI?b.hoverIntent(m,o,g):b.on("mouseenter.superfish",g,m).on("mouseleave.superfish",g,o);var h="MSPointerDown.superfish";f&&(h="pointerdown.superfish"),d||(h+=" touchend.superfish"),e&&(h+=" mousedown.superfish"),b.on("focusin.superfish","li",m).on("focusout.superfish","li",o).on(h,"a",c,p)};return{hide:function(b){if(this.length){var c=this,d=l(c);if(!d)return this;var e=d.retainPath===!0?d.$path:"",f=c.find("li."+d.hoverClass).add(this).not(e).removeClass(d.hoverClass).children(d.popUpSelector),g=d.speedOut;if(b&&(f.show(),g=0),d.retainPath=!1,d.onBeforeHide.call(f)===!1)return this;f.stop(!0,!0).animate(d.animationOut,g,function(){var b=a(this);d.onHide.call(b)})}return this},show:function(){var a=l(this);if(!a)return this;var b=this.addClass(a.hoverClass),c=b.children(a.popUpSelector);return a.onBeforeShow.call(c)===!1?this:(c.stop(!0,!0).animate(a.animation,a.speed,function(){a.onShow.call(c)}),this)},destroy:function(){return this.each(function(){var b,d=a(this),e=d.data("sfOptions");return e?(b=d.find(e.popUpSelector).parent("li"),clearTimeout(e.sfTimer),g(d,e),i(b),j(d),d.off(".superfish").off(".hoverIntent"),b.children(e.popUpSelector).attr("style",function(a,b){return b.replace(/display[^;]+;?/g,"")}),e.$path.removeClass(e.hoverClass+" "+c.bcClass).addClass(e.pathClass),d.find("."+e.hoverClass).removeClass(e.hoverClass),e.onDestroy.call(d),void d.removeData("sfOptions")):!1})},init:function(b){return this.each(function(){var d=a(this);if(d.data("sfOptions"))return!1;var e=a.extend({},a.fn.superfish.defaults,b),f=d.find(e.popUpSelector).parent("li");e.$path=h(d,e),d.data("sfOptions",e),g(d,e,!0),i(f,!0),j(d),q(d,e),f.not("."+c.bcClass).superfish("hide",!0),e.onInit.call(this)})}}}();a.fn.superfish=function(b,d){return c[b]?c[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?a.error("Method "+b+" does not exist on jQuery.fn.superfish"):c.init.apply(this,arguments)},a.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:!0,disableHI:!1,onInit:a.noop,onBeforeShow:a.noop,onShow:a.noop,onBeforeHide:a.noop,onHide:a.noop,onIdle:a.noop,onDestroy:a.noop,onHandleTouch:a.noop}}(jQuery,window);


// jquery.slicknav.min.js KOKE

/*!
 * SlickNav Responsive Mobile Menu v1.0.4
 * (c) 2015 Josh Cope
 * licensed under MIT
 */
;(function ($, document, window) {
    var
    // default settings object.
        defaults = {
            label: 'MENU',
            duplicate: true,
            duration: 200,
            easingOpen: 'swing',
            easingClose: 'swing',
            closedSymbol: '&#9658;',
            openedSymbol: '&#9660;',
            prependTo: 'body',
            parentTag: 'a',
            closeOnClick: false,
            allowParentLinks: false,
            nestedParentLinks: true,
            showChildren: false,
            removeIds: false,
            removeClasses: false,
			brand: '',
            init: function () {},
            beforeOpen: function () {},
            beforeClose: function () {},
            afterOpen: function () {},
            afterClose: function () {}
        },
        mobileMenu = 'slicknav',
        prefix = 'slicknav';

    function Plugin(element, options) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = mobileMenu;

        this.init();
    }

    Plugin.prototype.init = function () {
        var $this = this,
            menu = $(this.element),
            settings = this.settings,
            iconClass,
            menuBar;

        // clone menu if needed
        if (settings.duplicate) {
            $this.mobileNav = menu.clone();
            //remove ids from clone to prevent css issues
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        } else {
            $this.mobileNav = menu;

            // remove ids if set
            $this.mobileNav.removeAttr('id');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('id');
            });
        }

        // remove classes if set
        if (settings.removeClasses) {
            $this.mobileNav.removeAttr('class');
            $this.mobileNav.find('*').each(function (i, e) {
                $(e).removeAttr('class');
            });
        }

        // styling class for the button
        iconClass = prefix + '_icon';

        if (settings.label === '') {
            iconClass += ' ' + prefix + '_no-text';
        }

        if (settings.parentTag == 'a') {
            settings.parentTag = 'a href="#"';
        }

        // create menu bar
        $this.mobileNav.attr('class', prefix + '_nav');
        menuBar = $('<div class="' + prefix + '_menu"></div>');
		if (settings.brand !== '') {
			var brand = $('<div class="' + prefix + '_brand">'+settings.brand+'</div>');
			$(menuBar).append(brand);
		}
        $this.btn = $(
            ['<' + settings.parentTag + ' aria-haspopup="true" tabindex="0" class="' + prefix + '_btn ' + prefix + '_collapsed">',
                '<span class="' + prefix + '_menutxt">' + settings.label + '</span>',
                '<span class="' + iconClass + '">',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                    '<span class="' + prefix + '_icon-bar"></span>',
                '</span>',
            '</' + settings.parentTag + '>'
            ].join('')
        );
        $(menuBar).append($this.btn);
        $(settings.prependTo).prepend(menuBar);
        menuBar.append($this.mobileNav);
		
		// KOKE ja dodao:
		// var slickhead = $("<p></p>").text("dr.sc. Mirano Hess, Pomorski fakultet u Rijeci"); 
		// $(slickhead).addClass('slickheader'); 
		// $(menuBar).prepend(slickhead); 
		// $(menuBar).prepend("dr.sc.Mirano Hess, PFRI").addClass('slickheader'); 

        // iterate over structure adding additional structure
        var items = $this.mobileNav.find('li');
        $(items).each(function () {
            var item = $(this),
                data = {};
            data.children = item.children('ul').attr('role', 'menu');
            item.data('menu', data);

            // if a list item has a nested menu
            if (data.children.length > 0) {

                // select all text before the child menu
                // check for anchors

                var a = item.contents(),
                    containsAnchor = false,
                    nodes = [];

                $(a).each(function () {
                    if (!$(this).is('ul')) {
                        nodes.push(this);
                    } else {
                        return false;
                    }

                    if($(this).is("a")) {
                        containsAnchor = true;
                    }
                });

                var wrapElement = $(
                    '<' + settings.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + prefix + '_item"/>'
                );

                // wrap item text with tag and add classes unless we are separating parent links
                if ((!settings.allowParentLinks || settings.nestedParentLinks) || !containsAnchor) {
                    var $wrap = $(nodes).wrapAll(wrapElement).parent();
                    $wrap.addClass(prefix+'_row');
                } else
                    $(nodes).wrapAll('<span class="'+prefix+'_parent-link '+prefix+'_row"/>').parent();

                if (!settings.showChildren) {
                    item.addClass(prefix+'_collapsed');
                } else {
                    item.addClass(prefix+'_open');
                }

                item.addClass(prefix+'_parent');

                // create parent arrow. wrap with link if parent links and separating
                var arrowElement = $('<span class="'+prefix+'_arrow">'+(settings.showChildren?settings.openedSymbol:settings.closedSymbol)+'</span>');

                if (settings.allowParentLinks && !settings.nestedParentLinks && containsAnchor)
                    arrowElement = arrowElement.wrap(wrapElement).parent();

                //append arrow
                $(nodes).last().after(arrowElement);


            } else if ( item.children().length === 0) {
                 item.addClass(prefix+'_txtnode');
            }

            // accessibility for links
            item.children('a').attr('role', 'menuitem').click(function(event){
                //Ensure that it's not a parent
                if (settings.closeOnClick && !$(event.target).parent().closest('li').hasClass(prefix+'_parent')) {
                        //Emulate menu close if set
                        $($this.btn).click();
                    }
            });

            //also close on click if parent links are set
            if (settings.closeOnClick && settings.allowParentLinks) {
                item.children('a').children('a').click(function (event) {
                    //Emulate menu close
                    $($this.btn).click();
                });

                item.find('.'+prefix+'_parent-link a:not(.'+prefix+'_item)').click(function(event){
                    //Emulate menu close
                        $($this.btn).click();
                });
            }
        });

        // structure is in place, now hide appropriate items
        $(items).each(function () {
            var data = $(this).data('menu');
            if (!settings.showChildren){
                $this._visibilityToggle(data.children, null, false, null, true);
            }
        });

        // finally toggle entire menu
        $this._visibilityToggle($this.mobileNav, null, false, 'init', true);

        // accessibility for menu button
        $this.mobileNav.attr('role','menu');

        // outline prevention when using mouse
        $(document).mousedown(function(){
            $this._outlines(false);
        });

        $(document).keyup(function(){
            $this._outlines(true);
        });

        // menu button click
        $($this.btn).click(function (e) {
            e.preventDefault();
            $this._menuToggle();
        });

        // click on menu parent
        $this.mobileNav.on('click', '.' + prefix + '_item', function (e) {
            e.preventDefault();
            $this._itemClick($(this));
        });

        // check for enter key on menu button and menu parents
        $($this.btn).keydown(function (e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._menuToggle();
            }
        });

        $this.mobileNav.on('keydown', '.'+prefix+'_item', function(e) {
            var ev = e || event;
            if(ev.keyCode == 13) {
                e.preventDefault();
                $this._itemClick($(e.target));
            }
        });

        // allow links clickable within parent tags if set
        if (settings.allowParentLinks && settings.nestedParentLinks) {
            $('.'+prefix+'_item a').click(function(e){
                    e.stopImmediatePropagation();
            });
        }
    };

    //toggle menu
    Plugin.prototype._menuToggle = function (el) {
        var $this = this;
        var btn = $this.btn;
        var mobileNav = $this.mobileNav;

        if (btn.hasClass(prefix+'_collapsed')) {
            btn.removeClass(prefix+'_collapsed');
            btn.addClass(prefix+'_open');
        } else {
            btn.removeClass(prefix+'_open');
            btn.addClass(prefix+'_collapsed');
        }
        btn.addClass(prefix+'_animating');
        $this._visibilityToggle(mobileNav, btn.parent(), true, btn);
    };

	// KOKE ja izbacio:
    // toggle clicked items
    // Plugin.prototype._itemClick = function (el) {
        // var $this = this;
        // var settings = $this.settings;
        // var data = el.data('menu');
        // if (!data) {
            // data = {};
            // data.arrow = el.children('.'+prefix+'_arrow');
            // data.ul = el.next('ul');
            // data.parent = el.parent();
            // //Separated parent link structure
            // if (data.parent.hasClass(prefix+'_parent-link')) {
                // data.parent = el.parent().parent();
                // data.ul = el.parent().next('ul');
            // }
            // el.data('menu', data);
        // }
        // if (data.parent.hasClass(prefix+'_collapsed')) {
            // data.arrow.html(settings.openedSymbol);
            // data.parent.removeClass(prefix+'_collapsed');
            // data.parent.addClass(prefix+'_open');
            // data.parent.addClass(prefix+'_animating');
            // $this._visibilityToggle(data.ul, data.parent, true, el);
        // } else {
            // data.arrow.html(settings.closedSymbol);
            // data.parent.addClass(prefix+'_collapsed');
            // data.parent.removeClass(prefix+'_open');
            // data.parent.addClass(prefix+'_animating');
            // $this._visibilityToggle(data.ul, data.parent, true, el);
        // }
    // };

	// KOKE ja dodao umjesto ovog gore:	
	Plugin.prototype._itemClick = function (el) {
		var $this = this;
		var settings = $this.settings;
		var data = el.data('menu');
		if (!data) {
			data = {};
			data.arrow = el.children('.' + prefix + '_arrow');
			data.ul = el.next('ul');
			data.parent = el.parent();
			//Separated parent link structure
			if (data.parent.hasClass(prefix + '_parent-link')) {
				data.parent = el.parent().parent();
				data.ul = el.parent().next('ul');
			}
			el.data('menu', data);
		}

		if (data.parent.hasClass(prefix + '_collapsed')) {

			//  **** Begin custom code ****
			data.parent.siblings('.slicknav_open').each(function () {
				var $li = $(this);
				var $el = $li.children('a');
				var $ul = $el.next('ul');
				$el.children('.' + prefix + '_arrow').html(settings.closedSymbol);
				$li.addClass(prefix + '_collapsed').addClass(prefix + '_animating').removeClass(prefix + '_open');
				$this._visibilityToggle($ul, $li, true, $el);
			});
			//  **** End custom code ****

			data.arrow.html(settings.openedSymbol);
			data.parent.removeClass(prefix + '_collapsed');
			data.parent.addClass(prefix + '_open');
			data.parent.addClass(prefix + '_animating');
			$this._visibilityToggle(data.ul, data.parent, true, el);
		} else {
			data.arrow.html(settings.closedSymbol);
			data.parent.addClass(prefix + '_collapsed');
			data.parent.removeClass(prefix + '_open');
			data.parent.addClass(prefix + '_animating');
			$this._visibilityToggle(data.ul, data.parent, true, el);
		}
	};

    // toggle actual visibility and accessibility tags
    Plugin.prototype._visibilityToggle = function(el, parent, animate, trigger, init) {
        var $this = this;
        var settings = $this.settings;
        var items = $this._getActionItems(el);
        var duration = 0;
        if (animate) {
            duration = settings.duration;
        }

        if (el.hasClass(prefix+'_hidden')) {
            el.removeClass(prefix+'_hidden');
             //Fire beforeOpen callback
                if (!init) {
                    settings.beforeOpen(trigger);
                }
            el.slideDown(duration, settings.easingOpen, function(){

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire afterOpen callback
                if (!init) {
                    settings.afterOpen(trigger);
                }
            });
            el.attr('aria-hidden','false');
            items.attr('tabindex', '0');
            $this._setVisAttr(el, false);
        } else {
            el.addClass(prefix+'_hidden');

            //Fire init or beforeClose callback
            if (!init){
                settings.beforeClose(trigger);
            }

            el.slideUp(duration, this.settings.easingClose, function() {
                el.attr('aria-hidden','true');
                items.attr('tabindex', '-1');
                $this._setVisAttr(el, true);
                el.hide(); //jQuery 1.7 bug fix

                $(trigger).removeClass(prefix+'_animating');
                $(parent).removeClass(prefix+'_animating');

                //Fire init or afterClose callback
                if (!init){
                    settings.afterClose(trigger);
                } else if (trigger == 'init'){
                    settings.init();
                }
            });
        }
    };

    // set attributes of element and children based on visibility
    Plugin.prototype._setVisAttr = function(el, hidden) {
        var $this = this;

        // select all parents that aren't hidden
        var nonHidden = el.children('li').children('ul').not('.'+prefix+'_hidden');

        // iterate over all items setting appropriate tags
        if (!hidden) {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','false');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '0');
                $this._setVisAttr(ul, hidden);
            });
        } else {
            nonHidden.each(function(){
                var ul = $(this);
                ul.attr('aria-hidden','true');
                var items = $this._getActionItems(ul);
                items.attr('tabindex', '-1');
                $this._setVisAttr(ul, hidden);
            });
        }
    };

    // get all 1st level items that are clickable
    Plugin.prototype._getActionItems = function(el) {
        var data = el.data("menu");
        if (!data) {
            data = {};
            var items = el.children('li');
            var anchors = items.find('a');
            data.links = anchors.add(items.find('.'+prefix+'_item'));
            el.data('menu', data);
        }
        return data.links;
    };

    Plugin.prototype._outlines = function(state) {
        if (!state) {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','none');
        } else {
            $('.'+prefix+'_item, .'+prefix+'_btn').css('outline','');
        }
    };

    Plugin.prototype.toggle = function(){
        var $this = this;
        $this._menuToggle();
    };

    Plugin.prototype.open = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_collapsed')) {
            $this._menuToggle();
        }
    };

    Plugin.prototype.close = function(){
        var $this = this;
        if ($this.btn.hasClass(prefix+'_open')) {
            $this._menuToggle();
        }
    };

    $.fn[mobileMenu] = function ( options ) {
        var args = arguments;

        // Is the first parameter an object (options), or was omitted, instantiate a new instance
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {

                // Only allow the plugin to be instantiated once due to methods
                if (!$.data(this, 'plugin_' + mobileMenu)) {

                    // if it has no instance, create a new one, pass options to our plugin constructor,
                    // and store the plugin instance in the elements jQuery data object.
                    $.data(this, 'plugin_' + mobileMenu, new Plugin( this, options ));
                }
            });

        // If is a string and doesn't start with an underscore or 'init' function, treat this as a call to a public method.
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {

            // Cache the method call to make it possible to return a value
            var returns;

            this.each(function () {
                var instance = $.data(this, 'plugin_' + mobileMenu);

                // Tests that there's already a plugin-instance and checks that the requested public method exists
                if (instance instanceof Plugin && typeof instance[options] === 'function') {

                    // Call the method of our plugin instance, and pass it the supplied arguments.
                    returns = instance[options].apply( instance, Array.prototype.slice.call( args, 1 ) );
                }
            });

            // If the earlier cached method gives a value back return the value, otherwise return this to preserve chainability.
            return returns !== undefined ? returns : this;
        }
    };
}(jQuery, document, window));



// jquery.hoverIntent.minified.js" KOKE

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);




// jquery.fullsizable.js KOKE

/*
jQuery fullsizable plugin v2.1.0 <https://github.com/MSchmidt/jquery-fullsizable>
(c) 2011-2015 Matthias Schmidt <http://m-schmidt.eu/>
*/
(function(){var e,n,l,t,u,o,i,r,c,d,s,a,f,h,p,g,v,m,w,b,z,_,k,F,S,x,q,y;e=jQuery,o="#jquery-fullsizable",d="#fullsized_image_holder",S="fullsized_spinner",n=e('<div id="jquery-fullsizable"><div id="fullsized_image_holder"></div></div>'),s=[],i=0,m=null,x=null,_=function(){var n;return n=s[i],null==n.ratio&&(n.ratio=(n.naturalHeight/n.naturalWidth).toFixed(2)),e(window).height()/n.ratio>e(window).width()?(e(n).width(e(window).width()),e(n).height(e(window).width()*n.ratio),e(n).css("margin-top",(e(window).height()-e(n).height())/2)):(e(n).height(e(window).height()),e(n).width(e(window).height()/n.ratio),e(n).css("margin-top",0))},a=function(e){return 27===e.keyCode&&u(),37===e.keyCode&&z(!0),39===e.keyCode?g(!0):void 0},z=function(e){return null==e&&(e=!1),i>0?F(s[i-1],-1,e):m.loop?F(s[s.length-1],-1,e):void 0},g=function(e){return null==e&&(e=!1),i<s.length-1?F(s[i+1],1,e):m.loop?F(s[0],1,e):void 0},F=function(n,l,t){return null==l&&(l=1),null==t&&(t=!1),i=n.index,e(d).hide(),e(d).html(n),m.navigation&&(t===!0?c():k()),null!=n.loaded?(e(o).removeClass(S),_(),e(d).fadeIn("fast"),w(l)):(e(o).addClass(S),n.onload=function(){return _(),e(d).fadeIn("slow",function(){return e(o).removeClass(S)}),this.loaded=!0,w(l)},n.src=n.buffer_src)},w=function(e){var n;if(1===e&&i<s.length-1)n=s[i+1];else{if(-1!==e&&i!==s.length-1||!(i>0))return;n=s[i-1]}return n.onload=function(){return this.loaded=!0},""===n.src?n.src=n.buffer_src:void 0},v=function(t,u){return e("body").append(n),e(window).bind("resize",_),F(t),e(o).hide().fadeIn(function(){return null!=m.detach_id&&(x=e(window).scrollTop(),e("#"+m.detach_id).css("display","none"),_()),l(),e(document).trigger("fullsizable:opened",u)})},u=function(){return null!=m.detach_id&&(e("#"+m.detach_id).css("display","block"),e(window).scrollTop(x)),e(o).fadeOut(function(){return n.remove()}),t(),e(o).removeClass(S),y(),e(window).unbind("resize",_)},f=function(){return s.length=0,e(m.selector).each(function(){var n;return n=new Image,n.buffer_src=e(this).attr("href"),n.index=s.length,s.push(n),m.openOnClick?e(this).click(function(e){return e.preventDefault(),m.reloadOnOpen&&f(),v(n,this)}):void 0})},b=function(){switch(m.navigation&&(n.append('<a id="fullsized_go_prev" href="#prev"></a><a id="fullsized_go_next" href="#next"></a>'),e(document).on("click","#fullsized_go_prev",function(e){return e.preventDefault(),e.stopPropagation(),z()}),e(document).on("click","#fullsized_go_next",function(e){return e.preventDefault(),e.stopPropagation(),g()})),m.closeButton&&(n.append('<a id="fullsized_close" href="#close"></a>'),e(document).on("click","#fullsized_close",function(e){return e.preventDefault(),e.stopPropagation(),u()})),m.fullscreenButton&&r()&&(n.append('<a id="fullsized_fullscreen" href="#fullscreen"></a>'),e(document).on("click","#fullsized_fullscreen",function(e){return e.preventDefault(),e.stopPropagation(),q()})),m.clickBehaviour){case"close":return e(document).on("click",o,u);case"next":return e(document).on("click",o,function(){return g(!0)});default:return e(document).on("click",o,m.clickBehaviour)}},l=function(){return e(document).bind("keydown",a),e(document).bind("fullsizable:next",function(){return g(!0)}),e(document).bind("fullsizable:prev",function(){return z(!0)}),e(document).bind("fullsizable:close",u)},y=function(){return e(document).unbind("keydown",a),e(document).unbind("fullsizable:next"),e(document).unbind("fullsizable:prev"),e(document).unbind("fullsizable:close")},c=function(){var e;return e=n.find("a"),e.is(":visible")===!0?(e.toggle(!1),n.bind("mousemove",h)):void 0},p=null,h=function(e){var l;return null===p&&(p=[e.clientX,e.clientY]),l=Math.round(Math.sqrt(Math.pow(p[1]-e.clientY,2)+Math.pow(p[0]-e.clientX,2))),l>=10?(n.unbind("mousemove",h),p=null,k()):void 0},k=function(){return e("#fullsized_close, #fullsized_fullscreen").toggle(!0),m.loop?(e("#fullsized_go_prev").show(),e("#fullsized_go_next").show()):(e("#fullsized_go_prev").toggle(0!==i),e("#fullsized_go_next").toggle(i!==s.length-1))},e.fn.fullsizable=function(n){return m=e.extend({selector:this.selector,detach_id:null,navigation:!0,closeButton:!0,fullscreenButton:!0,openOnClick:!0,clickBehaviour:"close",preload:!0,reloadOnOpen:!1,loop:!1},n||{}),b(),m.preload&&f(),e(document).bind("fullsizable:reload",f),e(document).bind("fullsizable:open",function(n,l){var t,u,o,i;for(m.reloadOnOpen&&f(),i=[],u=0,o=s.length;o>u;u++)t=s[u],i.push(t.buffer_src===e(l).attr("href")?v(t,l):void 0);return i}),this},r=function(){var e;return e=n.get(0),e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen?!0:!1},t=function(){return q(!0)},q=function(e){var l;return l=n.get(0),l.requestFullScreen?document.fullScreen||e?document.exitFullScreen():l.requestFullScreen():l.webkitRequestFullScreen?document.webkitIsFullScreen||e?document.webkitCancelFullScreen():l.webkitRequestFullScreen():l.mozRequestFullScreen?document.mozFullScreen||e?document.mozCancelFullScreen():l.mozRequestFullScreen():void 0}}).call(this);


	
// custom.js KOKE

jQuery(document).ready(function ($) {

    /* Alert Messages - alert("Koke"); */
	
    $(".alert-msg .close").click(function () {
        $(this).parent().animate({
            "opacity": "0"
        }, 400).slideUp(400);
        return false;
    });

    /* Accordions */

    $(".accordion-title").click(function () {
        $(".accordion-title").removeClass("active");
        $(".accordion-content").slideUp("normal");
        if ($(this).next().is(":hidden") == true) {
            $(this).addClass("active");
            $(this).next().slideDown("normal");
        }
    });
    $(".accordion-content").hide();

    /* Toggles */

    $(".toggle-title").click(function () {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    /* Tabs */

    $(".tab-wrapper").tabs({
        event: "click"
    })

    /* Vertically Centre Text On Images */

    $.fn.flexVerticalCenter = function (onAttribute) {
        return this.each(function () {
            var $this = $(this);
            var attribute = onAttribute || 'margin-top';
            var resizer = function () {
                $this.css(
                attribute, (($this.parent().height() - $this.height()) / 2));
            };
            resizer();
            $(window).resize(resizer);
        });
    };

    // To run the function:
    $('.viewit').flexVerticalCenter();

});

/*!
* GateKeeper function
*/
function gateKeeper(Ggk,kol) {
var locUPL="Upl.html"
Gk=Ggk;
var Cook = readCookie(kol);
var CookBAR = readCookie('BAR');
if (Cook || CookBAR){
var loc=chkQ(Gk);
window.location = loc;
}

else if (Gk=="40" && kol=="UPL") {
// if (readCookie('ORU') || ('ORUs') || ('PB') || ('TPR') || ('PUB') || ('UP') || ('UOP') || ('OPB') || ('DPL') || ('BAR')){window.location = locUPL}
if (readCookie('ORU')){window.location = locUPL}
else if (readCookie('ORUs')){window.location = locUPL}
else if (readCookie('PB')){window.location = locUPL}
else if (readCookie('TPR')){window.location = locUPL}
else if (readCookie('PUB')){window.location = locUPL}
else if (readCookie('UP')){window.location = locUPL}
else if (readCookie('UOP')){window.location = locUPL}
else if (readCookie('OPB')){window.location = locUPL}
else if (readCookie('DPL')){window.location = locUPL}
else if (readCookie('BAR')){window.location = locUPL}
else {
alert("Za pristup ovom sadržaju, potrebno je učiniti Prijavu korisnika u donjem djelu ove strane !!");
scrollToAnchor('anchPrijava');
}
}

else {
alert("Za pristup ovom sadržaju, potrebno je učiniti Prijavu korisnika u donjem djelu ove strane !!");
scrollToAnchor('anchPrijava');
}}

function chkQ(Gk) {
var query = Gk;
if (query !== "") {
loc = "docs/" + query + ".pdf"
if (query == "40") {loc = "Upl.html"}
else if (query == "30"){loc = "Dow.html"}
else if (query == "10"){loc = "Dpl.html"}
else if (query == "50"){loc = "https://www.bimco.org/Authentication/Members-Only?returnUrl=%2fcontracts-and-clauses%2fbimco-contracts"}
}
else {loc = ""}
var lo=loc;
return lo;
}

//Encrypted Password script
function submitentry(){
var loc
username = document.prijava.korisnik.value.toLowerCase()
password = document.prijava.zaporka.value.toLowerCase()
passcode = 1
usercode = 1
for(i = 0; i < password.length; i++) {
passcode *= password.charCodeAt(i);
}
for(x = 0; x < username.length; x++) {
usercode *= username.charCodeAt(x);
}

if( typeof Gk == 'undefined' ) {
	if (usercode==34535160&&passcode==35965800){chkOK("ORU")} // goForit(loc,'ORU')
	else if (usercode==29797872&&passcode==35783745){chkOK("ORUs")} // goForit(loc,'ORUs')
	else if (usercode==28900476&&passcode==28375776){chkOK("PB")} // goForit(loc,'PB')	
	else if (usercode==36199800&&passcode==32089200){chkOK("TPR")} // goForit(loc,'TPR')	
	else if (usercode==33544500&&passcode==30419200){chkOK("PUB")} // goForit(loc,'PUB')
	else if (usercode==38170496&&passcode==39553920){chkOK("UP")} //  goForit(loc,'UP')	
	else if (usercode==32208100&&passcode==33858000){chkOK("UOP")} // goForit(loc,'UOP')
	else if (usercode==39277560&&passcode==1594362000){chkOK("OPB")} // goForit(loc,'OPB')	
	else if (usercode==35526447&&passcode==28949024){chkOK("SEM")} // goForit(loc,'SEM')	
	else if (usercode==37632000&&passcode==31974264){chkOK("DPL")} // goForit(loc,'DPL')
	else if (usercode==35285166&&passcode==35164440){chkOK("UPL")} // goForit(loc,'UPL')	
	else if (usercode==32239200&&passcode==33592832){chkOK("DOW")} // goForit(loc,'DOW') 
	else if (usercode==92236816&&passcode==92236816){chkOK("BAR")} // goForit(loc,'BAR') 
	/* else if ((usercode==35285166&&passcode==33592832) || (usercode==35526447&&passcode==37632000)){createCookie('ImeKuki','SEM',1);goForit(loc,'UPL')}
	else if ((usercode==35285166&&passcode==33592832) || (usercode==37632000&&passcode==28949024)){createCookie('ImeKuki','DPL',1);goForit(loc,'UPL')} */
	else{
	document.getElementById("ok").setAttribute("class", "osx-err-hiden");
	document.getElementById("er").setAttribute("class", "osx-err-active");
	}		
}
else {
//CHANGE THE NUMBERS BELOW TO REFLECT YOUR USERNAME/PASSWORD
  // Check that there is a querystring, return "" if not
  if (Gk.length == 0)
  {
    return "";
  }
  // Then find the querystring, everything after the ?
loc=chkQ(Gk);
var query = Gk;
// var Gkk=Gk.split("-",1);
var n=query.indexOf("-");
var Gkk=query.slice(n+1); 

if (((usercode==34535160&&passcode==35965800)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Oru')){scrollToAnchor('anchVrh'); goForit(loc,'ORU')}
else if (((usercode==29797872&&passcode==35783745)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Orus')){scrollToAnchor('anchVrh'); goForit(loc,'ORUs')}
else if (((usercode==28900476&&passcode==28375776)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Pb')){scrollToAnchor('anchVrh'); goForit(loc,'PB')}
else if (((usercode==36199800&&passcode==32089200)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Tpr')){scrollToAnchor('anchVrh'); goForit(loc,'TPR')}
else if (((usercode==33544500&&passcode==30419200)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Pub')){scrollToAnchor('anchVrh'); goForit(loc,'PUB')}
else if (((usercode==38170496&&passcode==39553920)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Up')){scrollToAnchor('anchVrh'); goForit(loc,'UP')}
else if (((usercode==32208100&&passcode==33858000)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Uop')){scrollToAnchor('anchVrh'); goForit(loc,'UOP')}
else if (((usercode==39277560&&passcode==1594362000)||(usercode==92236816&&passcode==92236816))&&(Gkk=='Opb')){scrollToAnchor('anchVrh'); goForit(loc,'OPB')}
else if (((usercode==35526447&&passcode==28949024)||(usercode==92236816&&passcode==92236816))&&(Gkk=='20')){scrollToAnchor('anchVrh'); goForit(loc,'SEM')}
else if (((usercode==37632000&&passcode==31974264)||(usercode==92236816&&passcode==92236816))&&(Gkk=='10')){scrollToAnchor('anchVrh'); goForit(loc,'DPL')}
else if (((usercode==35285166&&passcode==35164440)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){goForit(loc,'UPL')}
else if (((usercode==32239200&&passcode==33592832)||(usercode==92236816&&passcode==92236816))&&(Gkk=='30')){goForit(loc,'DOW')}
else if (((usercode==38170496&&passcode==39553920)||(usercode==92236816&&passcode==92236816))&&(Gkk=='50')){scrollToAnchor('anchVrh'); goForit(loc,'UP')} /*ovo sa Gkk==50 je za seminare iz UP - vodi na BIMCO-vu web stranu */

else if (((usercode==34535160&&passcode==35965800)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','ORU')}
else if (((usercode==29797872&&passcode==35783745)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','ORUs')}
else if (((usercode==28900476&&passcode==28375776)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','PB')}
else if (((usercode==36199800&&passcode==32089200)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','TPR')}
else if (((usercode==33544500&&passcode==30419200)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','PUB')}
else if (((usercode==38170496&&passcode==39553920)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','UP')}
else if (((usercode==32208100&&passcode==33858000)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','UOP')}
else if (((usercode==39277560&&passcode==1594362000)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','OPB')}
else if (((usercode==35526447&&passcode==28949024)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','SEM')}
else if (((usercode==37632000&&passcode==31974264)||(usercode==92236816&&passcode==92236816))&&(Gkk=='40')){scrollToAnchor('anchVrh'); goForit('Upl.html','DPL')}
/* else if ((usercode==35285166&&passcode==33592832) || (usercode==35526447&&passcode==37632000)){createCookie('ImeKuki','SEM',1);goForit(loc,'UPL')}
else if ((usercode==35285166&&passcode==33592832) || (usercode==37632000&&passcode==28949024)){createCookie('ImeKuki','DPL',1);goForit(loc,'UPL')} */
else{
document.getElementById("ok").setAttribute("class", "osx-err-hiden");
document.getElementById("er").setAttribute("class", "osx-err-active");
}
}
}

function goForit(loc, CookName) {
if (usercode==92236816){
	createCookie('BAR',1,300) //name, value (1 - positive), days
}
else if (CookName=="DOW"  ||  CookName=="UPL" ){
	createCookie(CookName,1,1) //name, value (1 - positive), days;
}
else {
	createCookie(CookName,1,15) //name, value (1 - positive), days
}
	fetch(loc)
  /*theKeeper=window.close()*/
}

function fetch(loc) {
/*window.open(loc);*/
/*this.location.href = loc;*/
/*opener.location = loc;*/
/*setTimeout ("openLoc()", 5000 );*/
window.location = loc;
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function scrollToAnchor(anch){
    var aTag = $("a[name='"+ anch +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


function scrollToAnchorSlike(anch){
if ($(window).width() < 599) {
    var aTag = $("a[name='"+ anch +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
}

function clickEr() {
	document.getElementById("er").setAttribute("class", "osx-err-hiden");
	document.getElementById("ok").setAttribute("class", "osx-err-hiden");
}

function chkOK(CookName) {
	if (CookName=='BAR') {
		createCookie(CookName,1,300) //name, value (1 - positive), days
	}
	else{
		createCookie(CookName,1,3) //name, value (1 - positive), days
	}
	document.getElementById("ok").setAttribute("class", "osx-err-active-2");
}

/* Dynamic top menu positioning */
// Ovo DOMContentLoaded je sa: https://codepen.io/anon/pen/NYvoap i https://css-tricks.com/forums/topic/fixed-nav-on-scroll-content-jumps/
document.addEventListener('DOMContentLoaded', function scrollToFix() {
	var mn = $('.slickm'),
	core = $('.row3').eq(0),
	fix = core.attr('style') || '',
	mns = 'page-head-scrolled',
	bit, hdr;
	$(window).resize(function() {
		bit = mn.outerHeight();
		hdr = $('.row1').outerHeight();
	})
	.resize().scroll(function() {
		if ($(this).scrollTop() > hdr) {
			mn.addClass(mns);
			core.css('margin-top', bit);
		} else {
			mn.removeClass(mns);
			core.attr('style', fix);
		}
	})
	.on('load', function() {

		$(this).scroll();
	});
});
	

// easyResponsiveTabs function
// $("#ertabs").easyResponsiveTabs({
	// type: 'default', //Types: default, vertical, accordion           
	// width: 'auto', //auto or any custom width
	// fit: true   // 100% fits in a container
// });

(function($){ //create closure so we can safely use $ as alias for jQuery
	$(document).ready(function(){
		// initialise plugin
		var topnavv = $('#topnav').superfish({
			delay:       200,                            // one second delay on mouseout
			// animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'fast',                          // faster animation speed
			// animationOut:  {opacity:'hide',height:'hide'},
			speedOut:      'fast',
			cssArrows:  false                            // disable generation of arrow mark-up
		});
	});
})(jQuery);

unhidediv = function(sho, hid1, hid2, hid3, hid4, hid5, hid6){ 
	$(sho).removeClass('downdiv');
	$(hid1).addClass('downdiv');
	$(hid2).addClass('downdiv');
	$(hid3).addClass('downdiv');
	$(hid4).addClass('downdiv');
	$(hid5).addClass('downdiv');
	$(hid6).addClass('downdiv');
};

/*** Simple jQuery Slideshow Script, Released by Jon Raasch (jonraasch.com) ***/

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    // uncomment the 3 lines below to pull the images in random order
    
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

function slick() {
/* $(document).ready(function(){ */
	$('#topnav').slicknav({
	duration: 500,
	prependTo:'.slickm',
	closeOnClick: true,
	brand: 'dr.sc.Mirano Hess, PFRI',
	closedSymbol: '&#9658;',
	openedSymbol: '&#9660;'
});
	/* $('.slicknav_menu').scrollToFixed();	//nije potrebno kada je gore iznad prepandTo korišteno */
};

/* close slicknav menu on outside click*/
$("html").on("click", function (event) {
    if ($(".slicknav_menu").has(event.target).length === 0)
        $("#topnav").slicknav('close');
});

function fullsiz() {
	$('#fscontain a').fullsizable({
		detach_id: 'fscontain',
		navigation: true,
		closeButton: true,
		clickBehaviour: 'close',
		loop: true
	});
};

$(document).ready(function(){
	// DEBOUNCE function taken from: David Walsh on February, 2014 = https://davidwalsh.name/javascript-debounce-function
	function debounces(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};
	
	function resizeDiv() {
	  var hwin = $(window).innerHeight() - $('.row1').height() - $('.row2').height() - $('.row4').height() - $('.row7').height()-12;
	  // $('.row3').css({'width': 'auto', 'height': '100%'});
	  $('.row3').css({'width': 'auto', 'min-height': hwin + 'px'});
	}
	
	resizeDiv()
	var myEfficientFn = debounces(function() {
	  resizeDiv()
	}, 250);
	window.addEventListener('resize', myEfficientFn);
	
});
                
// function replaceBgRow3(args) {
  // var images = new Array();
  // var sources = new Array();
  // sources = args
  // if (typeof args === 'undefined') {
    // sources = ('bg3.jpg, bg4.jpg, bg5.jpg, bg6.jpg, bg7.jpg, bg8.jpg, bg9.jpg, bg10.jpg, bg11.jpg, bg12.jpg, bg13.jpg, bg14.jpg, bg15.jpg, bg16.jpg, bg17.jpg, bg18.jpg');
  // }
  // sources = sources.split(', ');
  // $('.row3').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  // $('.row3').css('background-size','cover');
  // $('.row3').css('background-attachment','fixed');
  // // setTimeout(function(){
    // // $('body').css('backgroundColor','#232323');
  // // }, 5000);
  // // $('body').css('backgroundColor','#232323');
// }

// function replaceBgRow1(args) {
  // var images = new Array();
  // var sources = new Array();
  // sources = args
  // if (typeof args === 'undefined') {
    // sources = ('h.jpg, h2.jpg, h3.jpg, h4.jpg, h5.jpg, h6.jpg, h7.jpg, h8.jpg, h9.jpg, h10.jpg, h11.jpg, h12.jpg, h13.jpg, h14.jpg, h15.jpg');
  // } 
  // sources = sources.split(', ');
  // // $('.row1').css({'background': 'url(images/Venus.gif) no-repeat center center, url(styles/images/wall/bg10.jpg) no-repeat center center' });
  // $('.row1').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  // $('.row1').css('background-size','cover');
// }

// function replaceBgRow7(args) {
  // var images = new Array();
  // var sources = new Array();
  // sources = args
  // if (typeof args === 'undefined') {
    // sources = ('f.jpg, f2.jpg, f3.jpg, f4.jpg, f5.jpg, f6.jpg, f7.jpg, f8.jpg, f9.jpg, f10.jpg, f11.jpg, f12.jpg, f13.jpg, f14.jpg');
  // } 
  // sources = sources.split(', ');
  // $('.row7').css({'background': 'url(styles/images/wall/' + sources[Math.floor(Math.random() * sources.length)] + ') no-repeat center center' });
  // $('.row7').css('background-size','cover');
// }

function addListener(event, obj, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(event, fn, false);   // modern browsers
    } else {
        obj.attachEvent("on"+event, fn);          // older versions of IE
    }
}

// function preloadBg(sources){
  // var images = new Array();
  // for (var i = 0; i < sources.length; i++) {
    // images[i] = new Image();
    // images[i].src = sources[i];
  // }
// }

function preloadBg(args){
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('bg3.jpg, bg4.jpg, bg5.jpg, bg6.jpg, bg7.jpg, bg8.jpg, bg9.jpg, bg10.jpg, bg11.jpg, bg12.jpg, h3.jpg, h4.jpg, h5.jpg, h6.jpg, h7.jpg, h8.jpg, h9.jpg, h10.jpg, h11.jpg, h12.jpg, h13.jpg, h14.jpg, h15.jpg,  f3.jpg, f4.jpg, f5.jpg, f6.jpg, f7.jpg, f8.jpg, f9.jpg, f10.jpg, f11.jpg, f12.jpg, f13.jpg');
  }
  sources = sources.split(', ');
  for (var i = 0; i < sources.length; i++) {
    images[i] = new Image();
    images[i].src = 'styles/images/wall/' + sources[i];
    // $('.row3').css({'background': 'url(' + images[0].src + ') no-repeat center center' });
  }
  // console.log(images[1]);
}

function preloadGal(args){
  var images = new Array();
  var sources = new Array();
  sources = args
  if (typeof args === 'undefined') {
    sources = ('1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg, 10.jpg, 11.jpg, 12.jpg, 13.jpg, 14.jpg, 15.jpg');
  }
  sources = sources.split(', ');
  for (var i = 0; i < sources.length; i++) {
    images[i] = new Image();
    images[i].src = 'slideshow/pom/' + sources[i];
  }
}

// function actModal(){
// // Get the modal
// var modal = document.getElementById('myModal');
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
    // modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
    // modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
    // if (event.target == modal) {
        // modal.style.display = "none";
    // }
// }
// }

function actModal(ModId,closeBtn){
// Get the modal
var modal = document.getElementById(ModId);
// Get the <span> element that closes the modal
var span = document.getElementById(closeBtn);
// When the user clicks the button, open the modal 
    modal.style.display = "block";
	$('html').css('overflow','hidden');
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	$('html').css('overflow','auto');
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
		$('html').css('overflow','auto');
    }
}
}

// Remove 000webhost page branding - down, right image !
$(window).load(function() { 
	// var $bannerNode = $('img[alt="www.000webhost.com"]').parentNode.parentNode;
	// var bannerNode = $("document").attr("alt","www.000webhost.com" ).parentNode.parentNode;
	// var bannerNode = $('img[alt="www.000webhost.com"]').attr("alt").parentNode.parentNode;
	bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
	bannerNode.parentNode.removeChild(bannerNode);
});









	







// function bounces() {
// $('#row3id').removeClass('row3');
// $('#row3id').addClass('row3js');
// $(function() {
    // var images = ['bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg'];
    // $('#row3id').css({'background': 'url(../styles/images/wall/' + images[Math.floor(Math.random() * images.length)] + ') no-repeat center center fixed' });
    // $('#row3id').css('background-size','cover');
   // });
// };


// // (Google) Universal Analytics:
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  // ga('create', 'UA-20331217-1', 'auto');
  // ga('send', 'pageview');

// // background image rotator

// function wall(crow) {
// $('document').ready(function(){
	// var images = ['bg.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg', 'bg9.jpg', 'bg10.jpg', 'bg11.jpg', 'bg12.jpg', 'bg13.jpg', 'bg14.jpg', 'bg15.jpg', 'bg16.jpg'];
	// $('.row3').css({'background-image': 'url(styles/images/wall/' + images[Math.floor(Math.random() * images.length)] + ')'});
// });
// }

// // preload background imags on index page

// function preload(images) {
    // if (document.images) {
        // var i = 0;
        // var imageArray = new Array();
        // imageArray = images.split(',');
        // var imageObj = new Image();
        // for(i=0; i<=imageArray.length-1; i++) {
            // //document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
            // imageObj.src=imageArray[i];
        // }
    // }
// }


