module.exports = NotificationService;

var GCM = require('./gcm');

function NotificationService(app_key){
    var self = this;
    self.notify = notification;
    function notification(token) {
        var gcm = new GCM(app_key);

        var msg = {
            registration_ids: [token],
            time_to_live: 180,
            data: {
                message: "Hello mundo cruel :P"
            }
        };

        gcm.send(msg, function(err, response) {
            console.log(response);
        });
    }
}

