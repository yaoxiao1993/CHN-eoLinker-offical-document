(function() {
    'use strict';

    var sidebarClass = function() {
        this.init();
        for (var key = 0; key < window.eocourse.sidebarConstant.list.length; key++) {
            var val = window.eocourse.sidebarConstant.list[key];
            val.level = 0;
            this.paint(val, document.getElementById('sidebar_js'));
        }
    };
    sidebarClass.prototype = {
        init: function() {
            var template = {
                target: window.location.search.split('?target=')[1]
            }
            if (template.target) {
                var http = new XMLHttpRequest();
                http.open("GET", window.location.origin + window.location.pathname + template.target + '.md', true);
                http.send(null);
                http.onload = function() {
                    editormd.markdownToHTML("article-container-js", {
                        markdown: http.responseText
                    })
                }
            } else {
                window.location.href = window.location.href + '?target=/html/index';
            }

        },
        paint: function(arg, elem) {
            var href = window.location.href.replace(/\//g, '.');
            var isCurrent = eval('/' + arg.sref + '/').test(href);
            if (isCurrent && arg.href) {
                window.document.title = arg.title + '-eolinker-官方教程';
            }
            var template = {
                html: '<li class="common-level-' + arg.level + (isCurrent ? (arg.href ? (' elem-active level' + arg.level) : (' level' + arg.level)) : ' hidden') + '" >' +
                '<p level="' + arg.level + '" class="' + (isCurrent ? 'ico_up' : 'ico_down') + '" onclick="eocourse.sidebarClass.click(this)"><a ' + (arg.href ? ('onclick="eocourse.sidebarClass.router(\'' + arg.href + '\')"') : '') + '>' + (arg.childList ? '<span class="pull-left  ico"></span>' : '<span class="pull-left unchild-span"></span>') + arg.title + '</a></p>' +
                    '</li>',
                elem: null
            }
            template.elem = document.createElement('ul');
            template.elem.innerHTML = template.html;
            elem.appendChild(template.elem);
            if (arg.childList) {
                for (var key = 0; key < arg.childList.length; key++) {
                    var val = arg.childList[key];
                    val.level = arg.level + 1;
                    this.paint(val, template.elem.firstChild);
                }
            }
        },
        click: function(arg) {
            var template = {
                class: arg.parentElement.getAttribute('class'),
                level: arg.getAttribute('level')
            }
            if (/hidden/.test(arg.parentElement.getAttribute('class'))) {
                arg.setAttribute('class', 'ico_up');
                arg.parentElement.setAttribute('class', template.class.replace(/hidden/g, 'level' + template.level));
            } else {
                arg.parentElement.setAttribute('class', template.class + ' hidden');
                arg.setAttribute('class', 'ico_down');
            }
        },
        router: function(href) {
            window.location.href = window.location.origin + window.location.pathname + '?target=' + href;
        }
    }
    window.eocourse.sidebarClass = new sidebarClass();
})();
