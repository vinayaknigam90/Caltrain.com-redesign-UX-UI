(function(window, undefined) {
  var dictionary = {
    "b2e1fa70-349b-465c-a14b-1be22a4591a7": "Desktop imported",
    "f59703af-d6c7-442e-bf74-ed2f73529667": "Desktop",
    "fb462801-933a-4256-88f8-97f4a6d00d6e": "960 grid - 16 columns imported",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "22da998e-13c4-41ef-9341-9588cfeee447": "Template 1 imported",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "5234a8a3-5b5c-497a-8d40-fc947c2788d3": "Template 1",
    "43127bb9-37f3-4d93-b3bb-221e06b5be62": "Template 1 imported_1",
    "6b0d8ee9-2595-4f08-a178-8edeadc526d9": "960 grid - 12 columns imported",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "51e8dc0b-c67a-41e9-b703-db3d7366d656": "default imported_1",
    "aee1054d-9853-49a8-b936-57cb66e35c82": "default imported"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);