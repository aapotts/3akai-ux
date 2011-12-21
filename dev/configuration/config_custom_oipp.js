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

    config.defaultprivstructure = {
        "structure0": {
            "dashboard": {
                "_ref": "${refid}0",
                "_title": "My Dashboard",
                "_order": 0,
                "_canEdit": true,
                "_reorderOnly": true,
                "_nonEditable": true,
                "main": {
                    "_ref": "${refid}0",
                    "_order": 0,
                    "_title": "Dashboard"
                }
            },
            "messages": {
                "_title": "My Messages",
                "_ref": "${refid}1",
                "_order": 1,
                "_canEdit": true,
                "_reorderOnly": true,
                "_canSubedit": true,
                "_nonEditable": true,
                "inbox": {
                    "_ref": "${refid}1",
                    "_order": 0,
                    "_title": "Inbox",
                    "_nonEditable": true
                },
                "invitations": {
                    "_ref": "${refid}2",
                    "_order": 1,
                    "_title": "Invitations",
                    "_nonEditable": true
                },
                "sent": {
                    "_ref": "${refid}3",
                    "_order": 2,
                    "_title": "Sent",
                    "_nonEditable": true
                },
                "trash": {
                    "_ref": "${refid}4",
                    "_order": 3,
                    "_title": "Trash",
                    "_nonEditable": true
                }
            }
        },
        "${refid}0": {
            "page": "<div class='fl-force-right'><button type='button' class='s3d-button s3d-margin"+
            "-top-5 s3d-header-button s3d-header-smaller-button dashboard_change_layout' dat"+
            "a-tuid='${refid}5'>Edit Layout</button><button type='button' class='s3d-button "+
            "s3d-margin-top-5 s3d-header-button s3d-header-smaller-button dashboard_global_a"+
            "dd_widget' data-tuid='${refid}5'>Add Widget</button></div><div class='s3d-conte"+
            "ntpage-title'>My Dashboard</div><div id='widget_dashboard_${refid}5' class='wid"+
            "get_inline'></div>"
        },
        "${refid}1": {
            "page": "<div id='widget_inbox_${refid}6' class='widget_inline'/>"
        },
        "${refid}2": {
            "page": "<div id='widget_inbox_${refid}7' class='widget_inline'/>"
        },
        "${refid}3": {
            "page": "<div id='widget_inbox_${refid}8' class='widget_inline'/>"
        },
        "${refid}4": {
            "page": "<div id='widget_inbox_${refid}9' class='widget_inline'/>"
        },
        "${refid}5": {
            "dashboard": {
                "layout": "threecolumn",
                "columns": {
                    "column1": [{
                        "uid": "${refid}10",
                        "visible": "block",
                        "name": "mygroups"
                    }],
                    "column2": [{
                        "uid": "${refid}11",
                        "visible": "block",
                        "name": "recentmessages"
                    }],
                    "column3": [{
                        "uid": "${refid}12",
                        "visible": "block",
                        "name": "recentchangedcontent"
                    }]
                }
            }
        },
        "${refid}6": {
            "box": "inbox",
            "category": "message",
            "title": "INBOX"
        },
        "${refid}7": {
            "box": "inbox",
            "category": "invitation",
            "title": "INVITATIONS"
        },
        "${refid}8": {
            "box": "outbox",
            "category": "*",
            "title": "SENT"
        },
        "${refid}9": {
            "box": "trash",
            "category": "*",
            "title": "TRASH"
        }
    };

    return config;
});


