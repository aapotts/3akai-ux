define(["config/config"], function(config) {

    // Custom CSS Files to load in
    config.Authentication = {
            "allowInternalAccountCreation": false,
            "internal": true,
            "external": [{
                label: "Student and Faculty Login",
                url: "/system/trustedauth"
            }],
            "hideLoginOn": ["/dev", "/dev/index.html", "/dev/create_new_account.html"]
        };

    return config;
});


