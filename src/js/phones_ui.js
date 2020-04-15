'use strict';

let UI_PHONES = {
    init: function() {
        const self = this;
        $('#menu_btn').click(self.openSideMenu);
        $('#background').click(self.closeSideMenu);
        $('#tabs a').click(function() {
            if ($('.tab_container').hasClass('reveal')) {
                self.closeSideMenu();
            }
        });
        $('#reveal_btn').click(self.expandHeader);
    },
    openSideMenu: function() {
        $('#background').fadeIn(300);
        $('.tab_container').addClass('reveal');
    },
    closeSideMenu: function() {
        $('#background').fadeOut(300);
        $('.tab_container').removeClass('reveal');
    },
    expandHeader: function() {
        let expand, header_expanded, reveal;
        if (GUI.connected_to) {
            expand = 'expand2';
            header_expanded = 'header_expanded2';
            reveal = '.header-wrapper';
        } else {
            expand = 'expand';
            header_expanded = 'header_expanded';
            reveal = '#port-picker';
        }
        if ($('.headerbar').hasClass(expand)) {
            $('#tab-content-container').removeClass(header_expanded);
            $(reveal).removeClass('reveal');
            $('.headerbar').removeClass(expand);
        } else {
            $('#tab-content-container').addClass(header_expanded);
            $('.headerbar').addClass(expand);
            $(reveal).addClass('reveal');
        }
    },
    reset: function() {
        $('#tab-content-container').removeClass('header_expanded2 header_expanded');
        $('#port-picker, .header-wrapper').removeClass('reveal');
        $('.headerbar').removeClass('expand2 expand');
    },
};
