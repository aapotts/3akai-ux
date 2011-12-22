define(["config/config"], function(config) {

    /*
     * Configure authentication method(s). 
     */
    config.Authentication = {
            "allowInternalAccountCreation": false,
            "internal": true,
            "external": [{
                label: "Student and Faculty Login",
                url: "/system/trustedauth"
            }],
            "hideLoginOn": ["/dev", "/dev/index.html", "/dev/create_new_account.html"]
        };

    /*
     * Configure default user profile areas and behavior.
     */
    config.Profile = {
        /*
         * This is a collection of profile configuration functions and settings
         * The structure of the config object is identical to the storage object
         * When system/me returns profile data for the logged in user the profile_config and profile_data objects could be merged
         * "label": the internationalizable message for the entry label in HTML
         * "required": {Boolean} Whether the entry is compulsory or not
         * "display": {Boolean} Show the entry in the profile or not
         * "editable": {Boolean} Whether or not the entry is editable
         * For a date entry field use "date" as the type for MM/dd/yyyy and "dateITA" as the type for dd/MM/yyyy
         *
         */
        configuration: {

            defaultConfig: {

                "basic": {
                    "label": "__MSG__PROFILE_BASIC_LABEL__",
                    "required": true,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": false,
                    "permission": "anonymous",
                    "order": 0,
                    "elements": {
                        "firstName": {
                            "label": "__MSG__PROFILE_BASIC_FIRSTNAME_LABEL__",
                            "errorMessage": "__MSG__PROFILE_BASIC_FIRSTNAME_ERROR__",
                            "required": true,
                            "display": true,
                            "limitDisplayLength": 50
                        },
                        "lastName": {
                            "label": "__MSG__PROFILE_BASIC_LASTNAME_LABEL__",
                            "errorMessage": "__MSG__PROFILE_BASIC_LASTNAME_ERROR__",
                            "required": true,
                            "display": true,
                            "limitDisplayLength": 50
                        },
                        "picture": {
                            "label": "__MSG__PROFILE_BASIC_PICTURE_LABEL__",
                            "required": false,
                            "display": false
                        },
                        "preferredName": {
                            "label": "__MSG__PROFILE_BASIC_PREFERREDNAME_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "email": {
                            "label": "__MSG__PROFILE_BASIC_EMAIL_LABEL__",
                            "errorMessage": "__MSG__PROFILE_BASIC_EMAIL_ERROR__",
                            "required": true,
                            "display": false,
                            "type": "email"
                        },
                        "status": {
                            "label": "__MSG__PROFILE_BASIC_STATUS_LABEL__",
                            "required": false,
                            "display": false
                        },
                        "tags": {
                            "label": "__MSG__TAGS__",
                            "required": false,
                            "display": true,
                            "type": "textarea",
                            "tagField": true
                        }
                    }
                },
                "locations": {
                    "label": "__MSG__PROFILE_LOCATIONS_LABEL__",
                    "required": false,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": true,
                    "permission": "anonymous",
                    "multiple": true,
                    "directory": true,
                    "multipleLabel": "__MSG__PROFILE_LOCATION_LABEL__",
                    "order": 1,
                    "elements": {
                        "locationtitle": {
                            "label": "__MSG__PROFILE_LOCATION_LABEL__",
                            "required": true,
                            "display": true,
                            "type": "location"
                        }
                    }
                },
                "aboutme": {
                    "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                    "required": true,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": true,
                    "permission": "everyone",
                    "order": 2,
                    "elements": {
                        "aboutme": {
                            "label": "__MSG__PROFILE_ABOUTME_LABEL__",
                            "required": false,
                            "display": true,
                            "type": "textarea"
                        },
                        "academicinterests": {
                            "label": "__MSG__PROFILE_ABOUTME_ACADEMICINTERESTS_LABEL__",
                            "required": false,
                            "display": true,
                            "type": "textarea"
                        },
                        "personalinterests": {
                            "label": "__MSG__PROFILE_ABOUTME_PERSONALINTERESTS_LABEL__",
                            "required": false,
                            "display": true,
                            "type": "textarea"
                        }
                    }
                },
                "online": {
                    "label": "__MSG__PROFILE_ONLINE_LABEL__",
                    "required": false,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": true,
                    "permission": "everyone",
                    "multiple": true,
                    "multipleLabel": "__MSG__PROFILE_ONLINE_LABEL__",
                    "order": 3,
                    "elements": {
                        "siteOnline": {
                            "label": "__MSG__PROFILE_ONLINE_SITE_LABEL__",
                            "errorMessage": "__MSG__PROFILE_ONLINE_SITE_ERROR__",
                            "required": true,
                            "display": true,
                            "example": "__MSG__PROFILE_ONLINE_SITE_EXAMPLE__"
                        },
                        "urlOnline": {
                            "label": "__MSG__PROFILE_ONLINE_URL_LABEL__",
                            "errorMessage": "__MSG__PROFILE_ONLINE_URL_ERROR__",
                            "required": true,
                            "display": true,
                            "example": "__MSG__PROFILE_ONLINE_URL_EXAMPLE__"
                        }
                    }
                },
                "contact": {
                    "label": "__MSG__PROFILE_CONTACT_LABEL__",
                    "required": false,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": true,
                    "permission": "everyone",
                    "multiple": true,
                    "order": 4,
                    "elements": {
                        "college": {
                            "label": "__MSG__PROFILE_BASIC_COLLEGE_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "department": {
                            "label": "__MSG__PROFILE_BASIC_DEPARTMENT_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "role": {
                            "label": "__MSG__PROFILE_BASIC_ROLE_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "emailContact": {
                            "label": "__MSG__PROFILE_CONTACT_EMAIL_LABEL__",
                            "errorMessage": "__MSG__PROFILE_CONTACT_EMAIL_ERROR__",
                            "required": false,
                            "display": true,
                            "type": "email"
                        },
                        "imContact": {
                            "label": "__MSG__PROFILE_CONTACT_IM_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "phoneContact": {
                            "label": "__MSG__PROFILE_CONTACT_PHONE_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "mobileContact": {
                            "label": "__MSG__PROFILE_CONTACT_MOBILE_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "faxContact": {
                            "label": "__MSG__PROFILE_CONTACT_FAX_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "addressContact": {
                            "label": "__MSG__PROFILE_CONTACT_ADDRESS_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "cityContact": {
                            "label": "__MSG__PROFILE_CONTACT_CITY_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "stateContact": {
                            "label": "__MSG__PROFILE_CONTACT_STATE_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "postalContact": {
                            "label": "__MSG__PROFILE_CONTACT_POSTAL_LABEL__",
                            "required": false,
                            "display": true
                        },
                        "countryContact": {
                            "label": "__MSG__PROFILE_CONTACT_COUNTRY_LABEL__",
                            "required": false,
                            "display": true
                        }
                    }
                },
                "publications": {
                    "label": "__MSG__PROFILE_PUBLICATIONS_LABEL__",
                    "required": false,
                    "display": true,
                    "access": "everybody",
                    "modifyacl": true,
                    "permission": "everyone",
                    "multiple": true,
                    "multipleLabel": "__MSG__PROFILE_PUBLICATION_LABEL__",
                    "order": 5,
                    //"template": "profile_section_publications_template",
                    "elements": {
                        "maintitle": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE__",
                            "required": true,
                            "display": true,
                            "example": "__MSG__PROFILE_PUBLICATIONS_MAIN_TITLE_EXAMPLE__"
                        },
                        "mainauthor": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_MAIN_AUTHOR__",
                            "required": true,
                            "display": true
                        },
                        "coauthor": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR__",
                            "required": false,
                            "display": true,
                            "example": "__MSG__PROFILE_PUBLICATIONS_CO_AUTHOR_EXAMPLE__"
                        },
                        "publisher": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_PUBLISHER__",
                            "required": true,
                            "display": true
                        },
                        "placeofpublication": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_PLACE_OF_PUBLICATION__",
                            "required": true,
                            "display": true
                        },
                        "volumetitle": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_TITLE__",
                            "required": false,
                            "display": true
                        },
                        "volumeinformation": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION__",
                            "required": false,
                            "display": true,
                            "example": "__MSG__PROFILE_PUBLICATIONS_VOLUME_INFORMATION_EXAMPLE__"
                        },
                        "year": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_YEAR__",
                            "required": true,
                            "display": true
                        },
                        "number": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_NUMBER__",
                            "required": false,
                            "display": true
                        },
                        "series title": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_SERIES_TITLE__",
                            "required": false,
                            "display": true
                        },
                        "url": {
                            "label": "__MSG__PROFILE_PUBLICATIONS_URL__",
                            "required": false,
                            "display": true,
                            "validation": "appendhttp url"
                        }
                    }
                }
            }
        },
        /*
         * set what name to display where only the first name is used
         */
        userFirstNameDisplay: "firstName",

        /*
         * set how the user's name is displayed across the entire system
         * - values can be compound, like "firstName lastName" or singular like "displayName"
         */
        userNameDisplay: "firstName lastName",

        /*
         * the default, if the user doesn't have the userNameDisplay property set in their
         * profile, use this one.
         * Note: the value for userNameDisplay and this value can be the same.
         *       If neither exists, nothing will show
         */
        userNameDefaultDisplay: "firstName lastName",

        /*
         * Set the user's short description to appear underneath their name
         * in search results
         */
        userShortDescription: "${role} in ${department} at ${college}",
        groupShortDescription: "asdf"
    };

    /*
     * Configure default user dashboard navigation and widgets.
     */
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


