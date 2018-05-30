'use strict';
            var checkType = function(arg) {
  var type = "";
  if (arg.getClass) {
    type = arg.getClass().toString().split("class ")[1];
  } else if (typeof arg === "string") {
    type = "String";
  } else if (typeof arg === "number") {
    type = "Number";
  } else if (typeof arg === "boolean") {
    type = "Boolean";
  } else if (arg.length) {
    type = "Array";
  } else if (typeof arg === "object") {
    type = "Object";
  } else {
    type = typeof arg;
  }
  return type;
}
var getType = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
  var type = [];
  if (a1) {
  type.push(checkType(a1));
  }
if (a2) {
  type.push(checkType(a2));
}
if (a3) {
  type.push(checkType(a3));
}
if (a4) {
  type.push(checkType(a4));
}
if (a5) {
  type.push(checkType(a5));
}
if (a6) {
  type.push(checkType(a6));
}
if (a7) {
  type.push(checkType(a7));
}
if (a8) {
  type.push(checkType(a8));
}
if (a9) {
  type.push(checkType(a9));
}
if (a10) {
  type.push(checkType(a10));
}
if (a11) {
  type.push(checkType(a11));
}
if (a12) {
  type.push(checkType(a12));
}
if (a13) {
  type.push(checkType(a13));
}
if (a14) {
  type.push(checkType(a14));
}
if (a15) {
  type.push(checkType(a15));
}
  return type;
}

Java.perform(function () {
  
    var class_0 = "android.webkit.WebViewProvider";
    var c_0 = Java.use(class_0);
    c_0.loadUrl.overloads[0].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_0.loadUrl.overloads[0].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_0,
        "overloadIndex": 0,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[0].apply(this, arguments);
  };
    var class_0 = "android.webkit.WebViewProvider";
    var c_0 = Java.use(class_0);
    c_0.loadUrl.overloads[1].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_0.loadUrl.overloads[1].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_0,
        "overloadIndex": 1,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[1].apply(this, arguments);
  };
    var class_1 = "android.webkit.WebViewProvider";
    var c_1 = Java.use(class_1);
    c_1.loadUrl.overloads[0].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_1.loadUrl.overloads[0].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_1,
        "overloadIndex": 0,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[0].apply(this, arguments);
  };
    var class_1 = "android.webkit.WebViewProvider";
    var c_1 = Java.use(class_1);
    c_1.loadUrl.overloads[1].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_1.loadUrl.overloads[1].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_1,
        "overloadIndex": 1,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[1].apply(this, arguments);
  };
    var class_2 = "android.webkit.WebView";
    var c_2 = Java.use(class_2);
    c_2.loadUrl.overloads[0].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_2.loadUrl.overloads[0].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_2,
        "overloadIndex": 0,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[0].apply(this, arguments);
  };
    var class_2 = "android.webkit.WebView";
    var c_2 = Java.use(class_2);
    c_2.loadUrl.overloads[1].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_2.loadUrl.overloads[1].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_2,
        "overloadIndex": 1,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[1].apply(this, arguments);
  };
    var class_3 = "android.webkit.WebView";
    var c_3 = Java.use(class_3);
    c_3.loadUrl.overloads[0].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_3.loadUrl.overloads[0].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_3,
        "overloadIndex": 0,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[0].apply(this, arguments);
  };
    var class_3 = "android.webkit.WebView";
    var c_3 = Java.use(class_3);
    c_3.loadUrl.overloads[1].implementation = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
    var methodName = c_3.loadUrl.overloads[1].toString().split("function")[1].split("{")[0].trim().split("(")[0];
    var argTypes = getType(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
    var args = "";
    for (var i = 0; i < argTypes.length; i++) {
      if (i != argTypes.length - 1) {
        args += argTypes[i] + " arg" + i + ", ";
      } else {
        args += argTypes[i] + " arg" + i;
      }
    }
    var methodName = methodName + "(" + args + ")";
    var payload = {
        "type": "methodTrace",
        "methodName": methodName,
        "className": class_3,
        "overloadIndex": 1,
        "caller": this.getClass().toString(),
        "args": [a1, a2,a3,a4,a5]
    };
    send(JSON.stringify(payload));
    return this.loadUrl.overloads[1].apply(this, arguments);
  };
});
