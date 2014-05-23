
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:3000';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '649122655174851',
    appSecret:      process.env.FACEBOOK_APPSECRET      || 'c2ceaad7bd65991cb5920f42f29006c3',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'cerebrasignalstudio',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + '/login/callback'
};

module.exports = config;
