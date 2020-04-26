'use strict';

TABS.wizards = {};
TABS.wizards.initialize = function (callback) {
    var self = this;

    if (GUI.active_tab != 'wizards') {
        GUI.active_tab = 'wizards';
    }

    $('#content').load("./tabs/wizards.html", function () {
        i18n.localizePage();

        GUI.content_ready(callback);
    });
};

TABS.wizards.cleanup = function (callback) {
    if (callback) callback();
};
