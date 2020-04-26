'use strict';

const cordovaApp = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        cordovaApp.receivedEvent('deviceready');
        // Todo : remove alert
        let alert = 'This version is currently in beta. Some features may not work properly.';
        alert += 'Currently, the firmware flasher is disabled. If you find a bug, please report it at https://github.com/betaflight/betaflight-configurator/pull/1946';
        navigator.notification.alert(alert, function() {
            $('.open_firmware_flasher, .tab_firmware_flasher').hide();
            navigator.splashscreen.hide();
            cordovaChromeapi.init();
            appReady();
        }, 'Betaflight Configurator for Android', 'Ok');
    },
    receivedEvent: function(id) {
        console.log(`Received Event: ${id}`);
    },
};

cordovaApp.initialize();
