module.exports = {
    notify: notification
};

var GCM = require('./gcm');

function notification(app_key, token) {
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
