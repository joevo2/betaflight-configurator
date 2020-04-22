'use strict';

const cordovaUI = {
    uiZoom: 1,
    init: async function() {
        const self = this;
        let length = $(window).width();
        if (window.innerHeight > length) {
            length = $(window).height();
        }
        if (length < 1024) {
            console.log(length);
            self.uiZoom = length/1024;
        }
        ConfigStorage.get('cordovaForceComputerUI', function (result) {
            if (result.cordovaForceComputerUI === undefined) {
                if (length < 1024) {
                    ConfigStorage.set({'cordovaForceComputerUI': false});
                } else {
                    ConfigStorage.set({'cordovaForceComputerUI': true});
                }
            }
        });
        self.set();
    },
    set: function() {
        const self = this;
        ConfigStorage.get('cordovaForceComputerUI', function (result) {
            if (result.cordovaForceComputerUI) {
                window.screen.orientation.lock('landscape');
                $('body').css('zoom', self.uiZoom);
            } else {
                window.screen.orientation.lock('portrait');
                $('body').css('zoom', 1);
            }
        });
    },
};

const cordovaApp = {
    uiZoom: 1,
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        $('.open_firmware_flasher, .tab_firmware_flasher').hide();
        cordovaUI.init();
        navigator.splashscreen.hide();
        cordovaChromeapi.init();
        appReady();
    },
};

cordovaApp.initialize();
