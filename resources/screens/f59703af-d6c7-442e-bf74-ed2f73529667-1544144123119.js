jQuery("#simulation")
  .on("click", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_8","#s-Text_30","#s-Rectangle_18","#s-Text_32","#s-Text_31" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b2e1fa70-349b-465c-a14b-1be22a4591a7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Radio_button_2" ],
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Radio_button_1" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Radio_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Radio_button_2" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Radio_button_1" ],
                    "value": "false"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_8","#s-Text_18","#s-Text_17","#s-Text_16","#s-Text_15","#s-Text_14","#s-Text_13","#s-Rectangle_9","#s-Rectangle_8","#s-Rectangle_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_items_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Menu_items_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_items_4","#s-Menu_items_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Menu_items_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_items_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Menu_items_4","#s-Menu_items_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_1": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_1": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_4": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_4": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_7": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_7": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_10": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_10": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_15": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_15": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_16": {
                      "attributes": {
                        "background-color": "#DFE7EE"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_16": {
                      "attributes-ie": {
                        "-pie-background": "#DFE7EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_6": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_6": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_8": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_8": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_9": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_9": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_11": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_11": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_17": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_17": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_18") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_18": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_18": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_cell_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_19": {
                      "attributes": {
                        "background-color": "#ACBED8",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-f59703af-d6c7-442e-bf74-ed2f73529667 #s-Text_cell_19": {
                      "attributes-ie": {
                        "-pie-background": "#ACBED8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Text_cell_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Text_cell_19")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-f59703af-d6c7-442e-bf74-ed2f73529667 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f59703af-d6c7-442e-bf74-ed2f73529667")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"650" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });