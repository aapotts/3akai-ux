define(["config/config"], function(config) {

    // Custom CSS Files to load in
    config.Authentication = {
            "allowInternalAccountCreation": false,
            "internal": true,
            "external": [{
                label: "Login with Shibboleth",
                url: "http://oipp-test.academic.rsmart.com/system/trustedauth"
            }],
            "hideLoginOn": ["/dev", "/dev/index.html", "/dev/create_new_account.html"]
        };

    return config;
});


