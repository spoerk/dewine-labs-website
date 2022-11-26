function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
/*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ var $6e3e02de5f56a2a3$exports = {};

$parcel$export($6e3e02de5f56a2a3$exports, "popperGenerator", () => $63bad0d90002a387$export$ed5e13716264f202);
$parcel$export($6e3e02de5f56a2a3$exports, "detectOverflow", () => $b39aa2f9306db321$export$2e2bcd8739ae039);
$parcel$export($6e3e02de5f56a2a3$exports, "createPopperBase", () => $63bad0d90002a387$export$8f7491d57c8f97a9);
$parcel$export($6e3e02de5f56a2a3$exports, "createPopper", () => $a3964a39831c9644$export$8f7491d57c8f97a9);
$parcel$export($6e3e02de5f56a2a3$exports, "createPopperLite", () => $7cd7704680ad4773$export$8f7491d57c8f97a9);
var $2e89e95ac593bfb0$exports = {};

$parcel$export($2e89e95ac593bfb0$exports, "top", () => $2e89e95ac593bfb0$export$1e95b668f3b82d);
$parcel$export($2e89e95ac593bfb0$exports, "bottom", () => $2e89e95ac593bfb0$export$40e543e69a8b3fbb);
$parcel$export($2e89e95ac593bfb0$exports, "right", () => $2e89e95ac593bfb0$export$79ffe56a765070d2);
$parcel$export($2e89e95ac593bfb0$exports, "left", () => $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
$parcel$export($2e89e95ac593bfb0$exports, "auto", () => $2e89e95ac593bfb0$export$dfb5619354ba860);
$parcel$export($2e89e95ac593bfb0$exports, "basePlacements", () => $2e89e95ac593bfb0$export$aec2ce47c367b8c3);
$parcel$export($2e89e95ac593bfb0$exports, "start", () => $2e89e95ac593bfb0$export$b3571188c770cc5a);
$parcel$export($2e89e95ac593bfb0$exports, "end", () => $2e89e95ac593bfb0$export$bd5df0f255a350f8);
$parcel$export($2e89e95ac593bfb0$exports, "clippingParents", () => $2e89e95ac593bfb0$export$390fd549c5303b4d);
$parcel$export($2e89e95ac593bfb0$exports, "viewport", () => $2e89e95ac593bfb0$export$d7b7311ec04a3e8f);
$parcel$export($2e89e95ac593bfb0$exports, "popper", () => $2e89e95ac593bfb0$export$ae5ab1c730825774);
$parcel$export($2e89e95ac593bfb0$exports, "reference", () => $2e89e95ac593bfb0$export$ca50aac9f3ba507f);
$parcel$export($2e89e95ac593bfb0$exports, "variationPlacements", () => $2e89e95ac593bfb0$export$368f9a87e87fa4e1);
$parcel$export($2e89e95ac593bfb0$exports, "placements", () => $2e89e95ac593bfb0$export$803cd8101b6c182b);
$parcel$export($2e89e95ac593bfb0$exports, "beforeRead", () => $2e89e95ac593bfb0$export$421679a7c3d56e);
$parcel$export($2e89e95ac593bfb0$exports, "read", () => $2e89e95ac593bfb0$export$aafa59e2e03f2942);
$parcel$export($2e89e95ac593bfb0$exports, "afterRead", () => $2e89e95ac593bfb0$export$6964f6c886723980);
$parcel$export($2e89e95ac593bfb0$exports, "beforeMain", () => $2e89e95ac593bfb0$export$c65e99957a05207c);
$parcel$export($2e89e95ac593bfb0$exports, "main", () => $2e89e95ac593bfb0$export$f22da7240b7add18);
$parcel$export($2e89e95ac593bfb0$exports, "afterMain", () => $2e89e95ac593bfb0$export$bab79516f2d662fe);
$parcel$export($2e89e95ac593bfb0$exports, "beforeWrite", () => $2e89e95ac593bfb0$export$8d4d2d70e7d46032);
$parcel$export($2e89e95ac593bfb0$exports, "write", () => $2e89e95ac593bfb0$export$68d8715fc104d294);
$parcel$export($2e89e95ac593bfb0$exports, "afterWrite", () => $2e89e95ac593bfb0$export$70a6e5159acce2e6);
$parcel$export($2e89e95ac593bfb0$exports, "modifierPhases", () => $2e89e95ac593bfb0$export$d087d3878fdf71d5);
var $2e89e95ac593bfb0$export$1e95b668f3b82d = "top";
var $2e89e95ac593bfb0$export$40e543e69a8b3fbb = "bottom";
var $2e89e95ac593bfb0$export$79ffe56a765070d2 = "right";
var $2e89e95ac593bfb0$export$eabcd2c8791e7bf4 = "left";
var $2e89e95ac593bfb0$export$dfb5619354ba860 = "auto";
var $2e89e95ac593bfb0$export$aec2ce47c367b8c3 = [
    $2e89e95ac593bfb0$export$1e95b668f3b82d,
    $2e89e95ac593bfb0$export$40e543e69a8b3fbb,
    $2e89e95ac593bfb0$export$79ffe56a765070d2,
    $2e89e95ac593bfb0$export$eabcd2c8791e7bf4
];
var $2e89e95ac593bfb0$export$b3571188c770cc5a = "start";
var $2e89e95ac593bfb0$export$bd5df0f255a350f8 = "end";
var $2e89e95ac593bfb0$export$390fd549c5303b4d = "clippingParents";
var $2e89e95ac593bfb0$export$d7b7311ec04a3e8f = "viewport";
var $2e89e95ac593bfb0$export$ae5ab1c730825774 = "popper";
var $2e89e95ac593bfb0$export$ca50aac9f3ba507f = "reference";
var $2e89e95ac593bfb0$export$368f9a87e87fa4e1 = /*#__PURE__*/ $2e89e95ac593bfb0$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + $2e89e95ac593bfb0$export$b3571188c770cc5a,
        placement + "-" + $2e89e95ac593bfb0$export$bd5df0f255a350f8
    ]);
}, []);
var $2e89e95ac593bfb0$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($2e89e95ac593bfb0$export$aec2ce47c367b8c3, [
    $2e89e95ac593bfb0$export$dfb5619354ba860
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + $2e89e95ac593bfb0$export$b3571188c770cc5a,
        placement + "-" + $2e89e95ac593bfb0$export$bd5df0f255a350f8
    ]);
}, []); // modifiers that need to read the DOM
var $2e89e95ac593bfb0$export$421679a7c3d56e = "beforeRead";
var $2e89e95ac593bfb0$export$aafa59e2e03f2942 = "read";
var $2e89e95ac593bfb0$export$6964f6c886723980 = "afterRead"; // pure-logic modifiers
var $2e89e95ac593bfb0$export$c65e99957a05207c = "beforeMain";
var $2e89e95ac593bfb0$export$f22da7240b7add18 = "main";
var $2e89e95ac593bfb0$export$bab79516f2d662fe = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var $2e89e95ac593bfb0$export$8d4d2d70e7d46032 = "beforeWrite";
var $2e89e95ac593bfb0$export$68d8715fc104d294 = "write";
var $2e89e95ac593bfb0$export$70a6e5159acce2e6 = "afterWrite";
var $2e89e95ac593bfb0$export$d087d3878fdf71d5 = [
    $2e89e95ac593bfb0$export$421679a7c3d56e,
    $2e89e95ac593bfb0$export$aafa59e2e03f2942,
    $2e89e95ac593bfb0$export$6964f6c886723980,
    $2e89e95ac593bfb0$export$c65e99957a05207c,
    $2e89e95ac593bfb0$export$f22da7240b7add18,
    $2e89e95ac593bfb0$export$bab79516f2d662fe,
    $2e89e95ac593bfb0$export$8d4d2d70e7d46032,
    $2e89e95ac593bfb0$export$68d8715fc104d294,
    $2e89e95ac593bfb0$export$70a6e5159acce2e6
];


var $e2433a00a8b0bb8b$exports = {};

$parcel$export($e2433a00a8b0bb8b$exports, "applyStyles", () => $bc04af748f55319c$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "arrow", () => $539c3eb46bc0c50d$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "computeStyles", () => $256aa699194dfe79$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "eventListeners", () => $e8e0c7c69245c49b$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "flip", () => $2f96817885d7e372$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "hide", () => $dd2f448e6dbb0944$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "offset", () => $a330bb739738cf18$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "popperOffsets", () => $d284fc136785a15e$export$2e2bcd8739ae039);
$parcel$export($e2433a00a8b0bb8b$exports, "preventOverflow", () => $fc06601977373d48$export$2e2bcd8739ae039);
function $a99f9ebca3ba2730$export$2e2bcd8739ae039(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}


function $30cb9ba4921cb24c$export$2e2bcd8739ae039(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}


function $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d(node) {
    var OwnElement = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa(node) {
    var OwnElement = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function $98a5ed6e9cc93b6b$export$af51f0f06c0f328a(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}


// and applies them to the HTMLElements such as popper and arrow
function $bc04af748f55319c$var$applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element) || !(0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function $bc04af748f55319c$var$effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element) || !(0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var $bc04af748f55319c$export$2e2bcd8739ae039 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: $bc04af748f55319c$var$applyStyles,
    effect: $bc04af748f55319c$var$effect,
    requires: [
        "computeStyles"
    ]
};



function $ab879862a948a1f3$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[0];
}



var $d888c1c5c6139f87$export$8960430cfd85939f = Math.max;
var $d888c1c5c6139f87$export$96ec731ed4dcb222 = Math.min;
var $d888c1c5c6139f87$export$2077e0241d6afd3c = Math.round;



function $986f133e6bcd73d6$export$2e2bcd8739ae039() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}


function $a60bb2598aca78b6$export$2e2bcd8739ae039() {
    return !/^((?!chrome|android).)*safari/i.test((0, $986f133e6bcd73d6$export$2e2bcd8739ae039)());
}


function $b5d1770c17971102$export$2e2bcd8739ae039(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(element) ? (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, $a60bb2598aca78b6$export$2e2bcd8739ae039)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}


function $e6ac2fccfcb26231$export$2e2bcd8739ae039(element) {
    var clientRect = (0, $b5d1770c17971102$export$2e2bcd8739ae039)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}



function $a713e46d1a16fece$export$2e2bcd8739ae039(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, $98a5ed6e9cc93b6b$export$af51f0f06c0f328a)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}





function $95179c71c901ae5b$export$2e2bcd8739ae039(element) {
    return (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(element).getComputedStyle(element);
}




function $0ff7c807099d5305$export$2e2bcd8739ae039(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(element)) >= 0;
}




function $051b9280bc9384db$export$2e2bcd8739ae039(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}



function $5ecd5a6819f6d2de$export$2e2bcd8739ae039(element) {
    if ((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, $98a5ed6e9cc93b6b$export$af51f0f06c0f328a)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, $051b9280bc9384db$export$2e2bcd8739ae039)(element) // fallback
    );
}



function $eba16a63ee488722$var$getTrueOffsetParent(element) {
    if (!(0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function $eba16a63ee488722$var$getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, $986f133e6bcd73d6$export$2e2bcd8739ae039)());
    var isIE = /Trident/i.test((0, $986f133e6bcd73d6$export$2e2bcd8739ae039)());
    if (isIE && (0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, $5ecd5a6819f6d2de$export$2e2bcd8739ae039)(element);
    if ((0, $98a5ed6e9cc93b6b$export$af51f0f06c0f328a)(currentNode)) currentNode = currentNode.host;
    while((0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(currentNode)) < 0){
        var css = (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function $eba16a63ee488722$export$2e2bcd8739ae039(element) {
    var window = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(element);
    var offsetParent = $eba16a63ee488722$var$getTrueOffsetParent(element);
    while(offsetParent && (0, $0ff7c807099d5305$export$2e2bcd8739ae039)(offsetParent) && (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(offsetParent).position === "static")offsetParent = $eba16a63ee488722$var$getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(offsetParent) === "html" || (0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(offsetParent) === "body" && (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(offsetParent).position === "static")) return window;
    return offsetParent || $eba16a63ee488722$var$getContainingBlock(element) || window;
}


function $062b0bd957edc577$export$2e2bcd8739ae039(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}



function $720afa5761e0363d$export$f28d906d67a997f3(min, value, max) {
    return (0, $d888c1c5c6139f87$export$8960430cfd85939f)(min, (0, $d888c1c5c6139f87$export$96ec731ed4dcb222)(value, max));
}
function $720afa5761e0363d$export$86c8af6d3ef0b4a(min, value, max) {
    var v = $720afa5761e0363d$export$f28d906d67a997f3(min, value, max);
    return v > max ? max : v;
}


function $d19f335b8f35ec35$export$2e2bcd8739ae039() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}


function $198985865496074e$export$2e2bcd8739ae039(paddingObject) {
    return Object.assign({}, (0, $d19f335b8f35ec35$export$2e2bcd8739ae039)(), paddingObject);
}


function $24d27a140f178159$export$2e2bcd8739ae039(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}




var $539c3eb46bc0c50d$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, $198985865496074e$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $24d27a140f178159$export$2e2bcd8739ae039)(padding, (0, $2e89e95ac593bfb0$export$aec2ce47c367b8c3)));
};
function $539c3eb46bc0c50d$var$arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(state.placement);
    var axis = (0, $062b0bd957edc577$export$2e2bcd8739ae039)(basePlacement);
    var isVertical = [
        (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4),
        (0, $2e89e95ac593bfb0$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = $539c3eb46bc0c50d$var$toPaddingObject(options.padding, state);
    var arrowRect = (0, $e6ac2fccfcb26231$export$2e2bcd8739ae039)(arrowElement);
    var minProp = axis === "y" ? (0, $2e89e95ac593bfb0$export$1e95b668f3b82d) : (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
    var maxProp = axis === "y" ? (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb) : (0, $2e89e95ac593bfb0$export$79ffe56a765070d2);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, $eba16a63ee488722$export$2e2bcd8739ae039)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, $720afa5761e0363d$export$f28d906d67a997f3)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function $539c3eb46bc0c50d$var$effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, $a713e46d1a16fece$export$2e2bcd8739ae039)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var $539c3eb46bc0c50d$export$2e2bcd8739ae039 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: $539c3eb46bc0c50d$var$arrow,
    effect: $539c3eb46bc0c50d$var$effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};








function $a6ffbe6b3b795e7b$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[1];
}



var $256aa699194dfe79$var$unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $256aa699194dfe79$var$roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(x * dpr) / dpr || 0,
        y: (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(y * dpr) / dpr || 0
    };
}
function $256aa699194dfe79$export$378fa78a8fea596f(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
    var sideY = (0, $2e89e95ac593bfb0$export$1e95b668f3b82d);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, $eba16a63ee488722$export$2e2bcd8739ae039)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(popper)) {
            offsetParent = (0, $051b9280bc9384db$export$2e2bcd8739ae039)(popper);
            if ((0, $95179c71c901ae5b$export$2e2bcd8739ae039)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, $2e89e95ac593bfb0$export$1e95b668f3b82d) || (placement === (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4) || placement === (0, $2e89e95ac593bfb0$export$79ffe56a765070d2)) && variation === (0, $2e89e95ac593bfb0$export$bd5df0f255a350f8)) {
            sideY = (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4) || (placement === (0, $2e89e95ac593bfb0$export$1e95b668f3b82d) || placement === (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb)) && variation === (0, $2e89e95ac593bfb0$export$bd5df0f255a350f8)) {
            sideX = (0, $2e89e95ac593bfb0$export$79ffe56a765070d2);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && $256aa699194dfe79$var$unsetSides);
    var _ref4 = roundOffsets === true ? $256aa699194dfe79$var$roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function $256aa699194dfe79$var$computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty, property;
    var commonStyles = {
        placement: (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(state.placement),
        variation: (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, $256aa699194dfe79$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, $256aa699194dfe79$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $256aa699194dfe79$export$2e2bcd8739ae039 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: $256aa699194dfe79$var$computeStyles,
    data: {}
};



var $e8e0c7c69245c49b$var$passive = {
    passive: true
};
function $e8e0c7c69245c49b$var$effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, $e8e0c7c69245c49b$var$passive);
    });
    if (resize) window.addEventListener("resize", instance.update, $e8e0c7c69245c49b$var$passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, $e8e0c7c69245c49b$var$passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, $e8e0c7c69245c49b$var$passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var $e8e0c7c69245c49b$export$2e2bcd8739ae039 = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: $e8e0c7c69245c49b$var$effect,
    data: {}
};


var $4cec354ece277182$var$hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function $4cec354ece277182$export$2e2bcd8739ae039(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return $4cec354ece277182$var$hash[matched];
    });
}



var $7e39388afe8fd057$var$hash = {
    start: "end",
    end: "start"
};
function $7e39388afe8fd057$export$2e2bcd8739ae039(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return $7e39388afe8fd057$var$hash[matched];
    });
}








function $68c73aba05e12bb4$export$2e2bcd8739ae039(node) {
    var win = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}


function $83d7cdd03a66c6bd$export$2e2bcd8739ae039(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, $b5d1770c17971102$export$2e2bcd8739ae039)((0, $051b9280bc9384db$export$2e2bcd8739ae039)(element)).left + (0, $68c73aba05e12bb4$export$2e2bcd8739ae039)(element).scrollLeft;
}



function $37c225d49e918c6b$export$2e2bcd8739ae039(element, strategy) {
    var win = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(element);
    var html = (0, $051b9280bc9384db$export$2e2bcd8739ae039)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, $a60bb2598aca78b6$export$2e2bcd8739ae039)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, $83d7cdd03a66c6bd$export$2e2bcd8739ae039)(element),
        y: y
    };
}







function $6cb7b16a24759d72$export$2e2bcd8739ae039(element) {
    var _element$ownerDocumen;
    var html = (0, $051b9280bc9384db$export$2e2bcd8739ae039)(element);
    var winScroll = (0, $68c73aba05e12bb4$export$2e2bcd8739ae039)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, $d888c1c5c6139f87$export$8960430cfd85939f)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, $d888c1c5c6139f87$export$8960430cfd85939f)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, $83d7cdd03a66c6bd$export$2e2bcd8739ae039)(element);
    var y = -winScroll.scrollTop;
    if ((0, $95179c71c901ae5b$export$2e2bcd8739ae039)(body || html).direction === "rtl") x += (0, $d888c1c5c6139f87$export$8960430cfd85939f)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}




function $7cb5ecfccce08936$export$2e2bcd8739ae039(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, $95179c71c901ae5b$export$2e2bcd8739ae039)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}




function $42c7d101bf7d5a5d$export$2e2bcd8739ae039(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(node) && (0, $7cb5ecfccce08936$export$2e2bcd8739ae039)(node)) return node;
    return $42c7d101bf7d5a5d$export$2e2bcd8739ae039((0, $5ecd5a6819f6d2de$export$2e2bcd8739ae039)(node));
}





function $6e71595481654e2c$export$2e2bcd8739ae039(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, $42c7d101bf7d5a5d$export$2e2bcd8739ae039)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, $7cb5ecfccce08936$export$2e2bcd8739ae039)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat($6e71595481654e2c$export$2e2bcd8739ae039((0, $5ecd5a6819f6d2de$export$2e2bcd8739ae039)(target)));
}










function $950d624f2d59e88c$export$2e2bcd8739ae039(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}



function $41746b27f6218672$var$getInnerBoundingClientRect(element, strategy) {
    var rect = (0, $b5d1770c17971102$export$2e2bcd8739ae039)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function $41746b27f6218672$var$getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, $2e89e95ac593bfb0$export$d7b7311ec04a3e8f) ? (0, $950d624f2d59e88c$export$2e2bcd8739ae039)((0, $37c225d49e918c6b$export$2e2bcd8739ae039)(element, strategy)) : (0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(clippingParent) ? $41746b27f6218672$var$getInnerBoundingClientRect(clippingParent, strategy) : (0, $950d624f2d59e88c$export$2e2bcd8739ae039)((0, $6cb7b16a24759d72$export$2e2bcd8739ae039)((0, $051b9280bc9384db$export$2e2bcd8739ae039)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function $41746b27f6218672$var$getClippingParents(element) {
    var clippingParents = (0, $6e71595481654e2c$export$2e2bcd8739ae039)((0, $5ecd5a6819f6d2de$export$2e2bcd8739ae039)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, $95179c71c901ae5b$export$2e2bcd8739ae039)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(element) ? (0, $eba16a63ee488722$export$2e2bcd8739ae039)(element) : element;
    if (!(0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(clippingParent) && (0, $a713e46d1a16fece$export$2e2bcd8739ae039)(clippingParent, clipperElement) && (0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function $41746b27f6218672$export$2e2bcd8739ae039(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? $41746b27f6218672$var$getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = $41746b27f6218672$var$getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, $d888c1c5c6139f87$export$8960430cfd85939f)(rect.top, accRect.top);
        accRect.right = (0, $d888c1c5c6139f87$export$96ec731ed4dcb222)(rect.right, accRect.right);
        accRect.bottom = (0, $d888c1c5c6139f87$export$96ec731ed4dcb222)(rect.bottom, accRect.bottom);
        accRect.left = (0, $d888c1c5c6139f87$export$8960430cfd85939f)(rect.left, accRect.left);
        return accRect;
    }, $41746b27f6218672$var$getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}








function $56c8084ae97fa384$export$2e2bcd8739ae039(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement) : null;
    var variation = placement ? (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, $2e89e95ac593bfb0$export$1e95b668f3b82d:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, $2e89e95ac593bfb0$export$79ffe56a765070d2:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, $062b0bd957edc577$export$2e2bcd8739ae039)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, $2e89e95ac593bfb0$export$b3571188c770cc5a:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, $2e89e95ac593bfb0$export$bd5df0f255a350f8:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}







function $b39aa2f9306db321$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, $2e89e95ac593bfb0$export$390fd549c5303b4d) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, $2e89e95ac593bfb0$export$d7b7311ec04a3e8f) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, $2e89e95ac593bfb0$export$ae5ab1c730825774) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, $198985865496074e$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $24d27a140f178159$export$2e2bcd8739ae039)(padding, (0, $2e89e95ac593bfb0$export$aec2ce47c367b8c3)));
    var altContext = elementContext === (0, $2e89e95ac593bfb0$export$ae5ab1c730825774) ? (0, $2e89e95ac593bfb0$export$ca50aac9f3ba507f) : (0, $2e89e95ac593bfb0$export$ae5ab1c730825774);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, $41746b27f6218672$export$2e2bcd8739ae039)((0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(element) ? element : element.contextElement || (0, $051b9280bc9384db$export$2e2bcd8739ae039)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, $b5d1770c17971102$export$2e2bcd8739ae039)(state.elements.reference);
    var popperOffsets = (0, $56c8084ae97fa384$export$2e2bcd8739ae039)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, $950d624f2d59e88c$export$2e2bcd8739ae039)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, $2e89e95ac593bfb0$export$ae5ab1c730825774) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, $2e89e95ac593bfb0$export$ae5ab1c730825774) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, $2e89e95ac593bfb0$export$79ffe56a765070d2),
                (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, $2e89e95ac593bfb0$export$1e95b668f3b82d),
                (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}






function $1aa279fa58755a4a$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, $2e89e95ac593bfb0$export$803cd8101b6c182b) : _options$allowedAutoP;
    var variation = (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(placement);
    var placements = variation ? flipVariations ? (0, $2e89e95ac593bfb0$export$368f9a87e87fa4e1) : (0, $2e89e95ac593bfb0$export$368f9a87e87fa4e1).filter(function(placement) {
        return (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(placement) === variation;
    }) : (0, $2e89e95ac593bfb0$export$aec2ce47c367b8c3);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, $b39aa2f9306db321$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}




function $2f96817885d7e372$var$getExpandedFallbackPlacements(placement) {
    if ((0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement) === (0, $2e89e95ac593bfb0$export$dfb5619354ba860)) return [];
    var oppositePlacement = (0, $4cec354ece277182$export$2e2bcd8739ae039)(placement);
    return [
        (0, $7e39388afe8fd057$export$2e2bcd8739ae039)(placement),
        oppositePlacement,
        (0, $7e39388afe8fd057$export$2e2bcd8739ae039)(oppositePlacement)
    ];
}
function $2f96817885d7e372$var$flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, $4cec354ece277182$export$2e2bcd8739ae039)(preferredPlacement)
    ] : $2f96817885d7e372$var$getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement) === (0, $2e89e95ac593bfb0$export$dfb5619354ba860) ? (0, $1aa279fa58755a4a$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement);
        var isStartVariation = (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(placement) === (0, $2e89e95ac593bfb0$export$b3571188c770cc5a);
        var isVertical = [
            (0, $2e89e95ac593bfb0$export$1e95b668f3b82d),
            (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, $b39aa2f9306db321$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, $2e89e95ac593bfb0$export$79ffe56a765070d2) : (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4) : isStartVariation ? (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb) : (0, $2e89e95ac593bfb0$export$1e95b668f3b82d);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, $4cec354ece277182$export$2e2bcd8739ae039)(mainVariationSide);
        var altVariationSide = (0, $4cec354ece277182$export$2e2bcd8739ae039)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var $2f96817885d7e372$export$2e2bcd8739ae039 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: $2f96817885d7e372$var$flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};




function $dd2f448e6dbb0944$var$getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function $dd2f448e6dbb0944$var$isAnySideFullyClipped(overflow) {
    return [
        (0, $2e89e95ac593bfb0$export$1e95b668f3b82d),
        (0, $2e89e95ac593bfb0$export$79ffe56a765070d2),
        (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb),
        (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function $dd2f448e6dbb0944$var$hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, $b39aa2f9306db321$export$2e2bcd8739ae039)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, $b39aa2f9306db321$export$2e2bcd8739ae039)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = $dd2f448e6dbb0944$var$getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = $dd2f448e6dbb0944$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = $dd2f448e6dbb0944$var$isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = $dd2f448e6dbb0944$var$isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var $dd2f448e6dbb0944$export$2e2bcd8739ae039 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: $dd2f448e6dbb0944$var$hide
};




function $a330bb739738cf18$export$7fa02d8595b015ed(placement, rects, offset) {
    var basePlacement = (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(placement);
    var invertDistance = [
        (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4),
        (0, $2e89e95ac593bfb0$export$1e95b668f3b82d)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4),
        (0, $2e89e95ac593bfb0$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function $a330bb739738cf18$var$offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, $2e89e95ac593bfb0$export$803cd8101b6c182b).reduce(function(acc, placement) {
        acc[placement] = $a330bb739738cf18$export$7fa02d8595b015ed(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $a330bb739738cf18$export$2e2bcd8739ae039 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: $a330bb739738cf18$var$offset
};



function $d284fc136785a15e$var$popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, $56c8084ae97fa384$export$2e2bcd8739ae039)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $d284fc136785a15e$export$2e2bcd8739ae039 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: $d284fc136785a15e$var$popperOffsets,
    data: {}
};





function $117caa8bfa49c53b$export$2e2bcd8739ae039(axis) {
    return axis === "x" ? "y" : "x";
}









function $fc06601977373d48$var$preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, $b39aa2f9306db321$export$2e2bcd8739ae039)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, $ab879862a948a1f3$export$2e2bcd8739ae039)(state.placement);
    var variation = (0, $a6ffbe6b3b795e7b$export$2e2bcd8739ae039)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, $062b0bd957edc577$export$2e2bcd8739ae039)(basePlacement);
    var altAxis = (0, $117caa8bfa49c53b$export$2e2bcd8739ae039)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, $2e89e95ac593bfb0$export$1e95b668f3b82d) : (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
        var altSide = mainAxis === "y" ? (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb) : (0, $2e89e95ac593bfb0$export$79ffe56a765070d2);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, $2e89e95ac593bfb0$export$b3571188c770cc5a) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, $2e89e95ac593bfb0$export$b3571188c770cc5a) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, $e6ac2fccfcb26231$export$2e2bcd8739ae039)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, $d19f335b8f35ec35$export$2e2bcd8739ae039)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, $720afa5761e0363d$export$f28d906d67a997f3)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, $eba16a63ee488722$export$2e2bcd8739ae039)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, $720afa5761e0363d$export$f28d906d67a997f3)(tether ? (0, $d888c1c5c6139f87$export$96ec731ed4dcb222)(min, tetherMin) : min, offset, tether ? (0, $d888c1c5c6139f87$export$8960430cfd85939f)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, $2e89e95ac593bfb0$export$1e95b668f3b82d) : (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
        var _altSide = mainAxis === "x" ? (0, $2e89e95ac593bfb0$export$40e543e69a8b3fbb) : (0, $2e89e95ac593bfb0$export$79ffe56a765070d2);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, $2e89e95ac593bfb0$export$1e95b668f3b82d),
            (0, $2e89e95ac593bfb0$export$eabcd2c8791e7bf4)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, $720afa5761e0363d$export$86c8af6d3ef0b4a)(_tetherMin, _offset, _tetherMax) : (0, $720afa5761e0363d$export$f28d906d67a997f3)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $fc06601977373d48$export$2e2bcd8739ae039 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: $fc06601977373d48$var$preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};








function $d60097371f30bca0$export$2e2bcd8739ae039(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}


function $1aec7390888aa5e7$export$2e2bcd8739ae039(node) {
    if (node === (0, $30cb9ba4921cb24c$export$2e2bcd8739ae039)(node) || !(0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(node)) return (0, $68c73aba05e12bb4$export$2e2bcd8739ae039)(node);
    else return (0, $d60097371f30bca0$export$2e2bcd8739ae039)(node);
}








function $1bd47066b42a5b5d$var$isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, $d888c1c5c6139f87$export$2077e0241d6afd3c)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function $1bd47066b42a5b5d$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(offsetParent);
    var offsetParentIsScaled = (0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(offsetParent) && $1bd47066b42a5b5d$var$isElementScaled(offsetParent);
    var documentElement = (0, $051b9280bc9384db$export$2e2bcd8739ae039)(offsetParent);
    var rect = (0, $b5d1770c17971102$export$2e2bcd8739ae039)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, $a99f9ebca3ba2730$export$2e2bcd8739ae039)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, $7cb5ecfccce08936$export$2e2bcd8739ae039)(documentElement)) scroll = (0, $1aec7390888aa5e7$export$2e2bcd8739ae039)(offsetParent);
        if ((0, $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa)(offsetParent)) {
            offsets = (0, $b5d1770c17971102$export$2e2bcd8739ae039)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, $83d7cdd03a66c6bd$export$2e2bcd8739ae039)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}







function $4a32e2579d0de4f9$var$order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function $4a32e2579d0de4f9$export$2e2bcd8739ae039(modifiers) {
    // order based on dependencies
    var orderedModifiers = $4a32e2579d0de4f9$var$order(modifiers); // order based on phase
    return (0, $2e89e95ac593bfb0$export$d087d3878fdf71d5).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}


function $550302ce282a655b$export$2e2bcd8739ae039(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}





function $5e881110320a085b$export$2e2bcd8739ae039(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}





var $63bad0d90002a387$var$INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var $63bad0d90002a387$var$INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var $63bad0d90002a387$var$DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function $63bad0d90002a387$var$areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function $63bad0d90002a387$export$ed5e13716264f202(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $63bad0d90002a387$var$DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, $63bad0d90002a387$var$DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d)(reference) ? (0, $6e71595481654e2c$export$2e2bcd8739ae039)(reference) : reference.contextElement ? (0, $6e71595481654e2c$export$2e2bcd8739ae039)(reference.contextElement) : [],
                    popper: (0, $6e71595481654e2c$export$2e2bcd8739ae039)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, $4a32e2579d0de4f9$export$2e2bcd8739ae039)((0, $5e881110320a085b$export$2e2bcd8739ae039)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers, _ref, name, flipModifier, _ref2, name1, _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, margin;
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!$63bad0d90002a387$var$areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, $1bd47066b42a5b5d$export$2e2bcd8739ae039)(reference, (0, $eba16a63ee488722$export$2e2bcd8739ae039)(popper), state.options.strategy === "fixed"),
                    popper: (0, $e6ac2fccfcb26231$export$2e2bcd8739ae039)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, $550302ce282a655b$export$2e2bcd8739ae039)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!$63bad0d90002a387$var$areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var $63bad0d90002a387$export$8f7491d57c8f97a9 = /*#__PURE__*/ $63bad0d90002a387$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules














var $a3964a39831c9644$export$d34966752335dd47 = [
    (0, $e8e0c7c69245c49b$export$2e2bcd8739ae039),
    (0, $d284fc136785a15e$export$2e2bcd8739ae039),
    (0, $256aa699194dfe79$export$2e2bcd8739ae039),
    (0, $bc04af748f55319c$export$2e2bcd8739ae039),
    (0, $a330bb739738cf18$export$2e2bcd8739ae039),
    (0, $2f96817885d7e372$export$2e2bcd8739ae039),
    (0, $fc06601977373d48$export$2e2bcd8739ae039),
    (0, $539c3eb46bc0c50d$export$2e2bcd8739ae039),
    (0, $dd2f448e6dbb0944$export$2e2bcd8739ae039)
];
var $a3964a39831c9644$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $63bad0d90002a387$export$ed5e13716264f202)({
    defaultModifiers: $a3964a39831c9644$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules







var $7cd7704680ad4773$export$d34966752335dd47 = [
    (0, $e8e0c7c69245c49b$export$2e2bcd8739ae039),
    (0, $d284fc136785a15e$export$2e2bcd8739ae039),
    (0, $256aa699194dfe79$export$2e2bcd8739ae039),
    (0, $bc04af748f55319c$export$2e2bcd8739ae039)
];
var $7cd7704680ad4773$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $63bad0d90002a387$export$ed5e13716264f202)({
    defaultModifiers: $7cd7704680ad4773$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules


$parcel$exportWildcard($6e3e02de5f56a2a3$exports, $2e89e95ac593bfb0$exports);
$parcel$exportWildcard($6e3e02de5f56a2a3$exports, $e2433a00a8b0bb8b$exports);


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $ea8f714b924c161c$var$MAX_UID = 1000000;
const $ea8f714b924c161c$var$MILLISECONDS_MULTIPLIER = 1000;
const $ea8f714b924c161c$var$TRANSITION_END = "transitionend"; // Shout-out Angus Croll (https://goo.gl/pxwQGp)
const $ea8f714b924c161c$var$toType = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const $ea8f714b924c161c$var$getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * $ea8f714b924c161c$var$MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const $ea8f714b924c161c$var$getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href"); // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
         // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector;
};
const $ea8f714b924c161c$var$getSelectorFromElement = (element)=>{
    const selector = $ea8f714b924c161c$var$getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const $ea8f714b924c161c$var$getElementFromSelector = (element)=>{
    const selector = $ea8f714b924c161c$var$getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const $ea8f714b924c161c$var$getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
     // Get transition-duration of the element
    let { transitionDuration: transitionDuration , transitionDelay: transitionDelay  } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
     // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $ea8f714b924c161c$var$MILLISECONDS_MULTIPLIER;
};
const $ea8f714b924c161c$var$triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event($ea8f714b924c161c$var$TRANSITION_END));
};
const $ea8f714b924c161c$var$isElement = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const $ea8f714b924c161c$var$getElement = (object)=>{
    // it's a jQuery object or a node element
    if ($ea8f714b924c161c$var$isElement(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(object);
    return null;
};
const $ea8f714b924c161c$var$isVisible = (element)=>{
    if (!$ea8f714b924c161c$var$isElement(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible"; // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const $ea8f714b924c161c$var$isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const $ea8f714b924c161c$var$findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
     // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
     // when we don't find a shadow root
    if (!element.parentNode) return null;
    return $ea8f714b924c161c$var$findShadowRoot(element.parentNode);
};
const $ea8f714b924c161c$var$noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const $ea8f714b924c161c$var$reflow = (element)=>{
    element.offsetHeight; // eslint-disable-line no-unused-expressions
};
const $ea8f714b924c161c$var$getjQuery = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const $ea8f714b924c161c$var$DOMContentLoadedCallbacks = [];
const $ea8f714b924c161c$var$onDOMContentLoaded = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!$ea8f714b924c161c$var$DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of $ea8f714b924c161c$var$DOMContentLoadedCallbacks)callback();
        });
        $ea8f714b924c161c$var$DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const $ea8f714b924c161c$var$isRTL = ()=>document.documentElement.dir === "rtl";
const $ea8f714b924c161c$var$defineJQueryPlugin = (plugin)=>{
    $ea8f714b924c161c$var$onDOMContentLoaded(()=>{
        const $ = $ea8f714b924c161c$var$getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const $ea8f714b924c161c$var$execute = (callback)=>{
    if (typeof callback === "function") callback();
};
const $ea8f714b924c161c$var$executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        $ea8f714b924c161c$var$execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = $ea8f714b924c161c$var$getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target: target  })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener($ea8f714b924c161c$var$TRANSITION_END, handler);
        $ea8f714b924c161c$var$execute(callback);
    };
    transitionElement.addEventListener($ea8f714b924c161c$var$TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) $ea8f714b924c161c$var$triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const $ea8f714b924c161c$var$getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $ea8f714b924c161c$var$stripNameRegex = /\..*/;
const $ea8f714b924c161c$var$stripUidRegex = /::\d+$/;
const $ea8f714b924c161c$var$eventRegistry = {}; // Events storage
let $ea8f714b924c161c$var$uidEvent = 1;
const $ea8f714b924c161c$var$customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const $ea8f714b924c161c$var$nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * Private methods
 */ function $ea8f714b924c161c$var$makeEventUid(element, uid) {
    return uid && `${uid}::${$ea8f714b924c161c$var$uidEvent++}` || element.uidEvent || $ea8f714b924c161c$var$uidEvent++;
}
function $ea8f714b924c161c$var$getElementEvents(element) {
    const uid = $ea8f714b924c161c$var$makeEventUid(element);
    element.uidEvent = uid;
    $ea8f714b924c161c$var$eventRegistry[uid] = $ea8f714b924c161c$var$eventRegistry[uid] || {};
    return $ea8f714b924c161c$var$eventRegistry[uid];
}
function $ea8f714b924c161c$var$bootstrapHandler(element, fn) {
    return function handler(event) {
        $ea8f714b924c161c$var$hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) $ea8f714b924c161c$var$EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function $ea8f714b924c161c$var$bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target: target  } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            $ea8f714b924c161c$var$hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) $ea8f714b924c161c$var$EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function $ea8f714b924c161c$var$findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function $ea8f714b924c161c$var$normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string"; // todo: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = $ea8f714b924c161c$var$getTypeEvent(originalTypeEvent);
    if (!$ea8f714b924c161c$var$nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function $ea8f714b924c161c$var$addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = $ea8f714b924c161c$var$normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in $ea8f714b924c161c$var$customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = $ea8f714b924c161c$var$getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = $ea8f714b924c161c$var$findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = $ea8f714b924c161c$var$makeEventUid(callable, originalTypeEvent.replace($ea8f714b924c161c$var$namespaceRegex, ""));
    const fn = isDelegated ? $ea8f714b924c161c$var$bootstrapDelegationHandler(element, handler, callable) : $ea8f714b924c161c$var$bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function $ea8f714b924c161c$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = $ea8f714b924c161c$var$findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function $ea8f714b924c161c$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const handlerKey of Object.keys(storeElementEvent))if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        $ea8f714b924c161c$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
}
function $ea8f714b924c161c$var$getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace($ea8f714b924c161c$var$stripNameRegex, "");
    return $ea8f714b924c161c$var$customEvents[event] || event;
}
const $ea8f714b924c161c$var$EventHandler = {
    on (element, event, handler, delegationFunction) {
        $ea8f714b924c161c$var$addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        $ea8f714b924c161c$var$addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = $ea8f714b924c161c$var$normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = $ea8f714b924c161c$var$getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            $ea8f714b924c161c$var$removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))$ea8f714b924c161c$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const keyHandlers of Object.keys(storeElementEvent)){
            const handlerKey = keyHandlers.replace($ea8f714b924c161c$var$stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                $ea8f714b924c161c$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = $ea8f714b924c161c$var$getjQuery();
        const typeEvent = $ea8f714b924c161c$var$getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        let evt = new Event(event, {
            bubbles: bubbles,
            cancelable: true
        });
        evt = $ea8f714b924c161c$var$hydrateObj(evt, args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function $ea8f714b924c161c$var$hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {}))try {
        obj[key] = value;
    } catch (_unused) {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$elementMap = new Map();
const $ea8f714b924c161c$var$Data = {
    set (element, key, instance) {
        if (!$ea8f714b924c161c$var$elementMap.has(element)) $ea8f714b924c161c$var$elementMap.set(element, new Map());
        const instanceMap = $ea8f714b924c161c$var$elementMap.get(element); // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if ($ea8f714b924c161c$var$elementMap.has(element)) return $ea8f714b924c161c$var$elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!$ea8f714b924c161c$var$elementMap.has(element)) return;
        const instanceMap = $ea8f714b924c161c$var$elementMap.get(element);
        instanceMap.delete(key); // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) $ea8f714b924c161c$var$elementMap.delete(element);
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function $ea8f714b924c161c$var$normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
        return value;
    }
}
function $ea8f714b924c161c$var$normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const $ea8f714b924c161c$var$Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${$ea8f714b924c161c$var$normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${$ea8f714b924c161c$var$normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = $ea8f714b924c161c$var$normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return $ea8f714b924c161c$var$normalizeData(element.getAttribute(`data-bs-${$ea8f714b924c161c$var$normalizeDataKey(key)}`));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Class definition
 */ class $ea8f714b924c161c$var$Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = $ea8f714b924c161c$var$isElement(element) ? $ea8f714b924c161c$var$Manipulator.getDataAttribute(element, "config") : {}; // try to parse
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...$ea8f714b924c161c$var$isElement(element) ? $ea8f714b924c161c$var$Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const property of Object.keys(configTypes)){
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = $ea8f714b924c161c$var$isElement(value) ? "element" : $ea8f714b924c161c$var$toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$VERSION = "5.2.2";
/**
 * Class definition
 */ class $ea8f714b924c161c$var$BaseComponent extends $ea8f714b924c161c$var$Config {
    constructor(element, config){
        super();
        element = $ea8f714b924c161c$var$getElement(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        $ea8f714b924c161c$var$Data.set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        $ea8f714b924c161c$var$Data.remove(this._element, this.constructor.DATA_KEY);
        $ea8f714b924c161c$var$EventHandler.off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        $ea8f714b924c161c$var$executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    static getInstance(element) {
        return $ea8f714b924c161c$var$Data.get($ea8f714b924c161c$var$getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return $ea8f714b924c161c$var$VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $ea8f714b924c161c$var$enableDismissTrigger = (component, method = "hide")=>{
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    $ea8f714b924c161c$var$EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
        if ([
            "A",
            "AREA"
        ].includes(this.tagName)) event.preventDefault();
        if ($ea8f714b924c161c$var$isDisabled(this)) return;
        const target = $ea8f714b924c161c$var$getElementFromSelector(this) || this.closest(`.${name}`);
        const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
        instance[method]();
    });
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$f = "alert";
const $ea8f714b924c161c$var$DATA_KEY$a = "bs.alert";
const $ea8f714b924c161c$var$EVENT_KEY$b = `.${$ea8f714b924c161c$var$DATA_KEY$a}`;
const $ea8f714b924c161c$var$EVENT_CLOSE = `close${$ea8f714b924c161c$var$EVENT_KEY$b}`;
const $ea8f714b924c161c$var$EVENT_CLOSED = `closed${$ea8f714b924c161c$var$EVENT_KEY$b}`;
const $ea8f714b924c161c$var$CLASS_NAME_FADE$5 = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$8 = "show";
/**
 * Class definition
 */ class $ea8f714b924c161c$export$caec2af78bcc877f extends $ea8f714b924c161c$var$BaseComponent {
    // Getters
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$f;
    }
    close() {
        const closeEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_CLOSE);
        if (closeEvent.defaultPrevented) return;
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$8);
        const isAnimated = this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_FADE$5);
        this._queueCallback(()=>this._destroyElement(), this._element, isAnimated);
    }
    _destroyElement() {
        this._element.remove();
        $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_CLOSED);
        this.dispose();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$caec2af78bcc877f.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$enableDismissTrigger($ea8f714b924c161c$export$caec2af78bcc877f, "close");
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$caec2af78bcc877f);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$e = "button";
const $ea8f714b924c161c$var$DATA_KEY$9 = "bs.button";
const $ea8f714b924c161c$var$EVENT_KEY$a = `.${$ea8f714b924c161c$var$DATA_KEY$9}`;
const $ea8f714b924c161c$var$DATA_API_KEY$6 = ".data-api";
const $ea8f714b924c161c$var$CLASS_NAME_ACTIVE$3 = "active";
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$6 = `click${$ea8f714b924c161c$var$EVENT_KEY$a}${$ea8f714b924c161c$var$DATA_API_KEY$6}`;
/**
 * Class definition
 */ class $ea8f714b924c161c$export$353f5b6fc5456de1 extends $ea8f714b924c161c$var$BaseComponent {
    // Getters
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$e;
    }
    toggle() {
        // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
        this._element.setAttribute("aria-pressed", this._element.classList.toggle($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$3));
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$353f5b6fc5456de1.getOrCreateInstance(this);
            if (config === "toggle") data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$6, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$5, (event)=>{
    event.preventDefault();
    const button = event.target.closest($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$5);
    const data = $ea8f714b924c161c$export$353f5b6fc5456de1.getOrCreateInstance(button);
    data.toggle();
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$353f5b6fc5456de1);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!$ea8f714b924c161c$var$isDisabled(el) && $ea8f714b924c161c$var$isVisible(el));
    }
};
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$d = "swipe";
const $ea8f714b924c161c$var$EVENT_KEY$9 = ".bs.swipe";
const $ea8f714b924c161c$var$EVENT_TOUCHSTART = `touchstart${$ea8f714b924c161c$var$EVENT_KEY$9}`;
const $ea8f714b924c161c$var$EVENT_TOUCHMOVE = `touchmove${$ea8f714b924c161c$var$EVENT_KEY$9}`;
const $ea8f714b924c161c$var$EVENT_TOUCHEND = `touchend${$ea8f714b924c161c$var$EVENT_KEY$9}`;
const $ea8f714b924c161c$var$EVENT_POINTERDOWN = `pointerdown${$ea8f714b924c161c$var$EVENT_KEY$9}`;
const $ea8f714b924c161c$var$EVENT_POINTERUP = `pointerup${$ea8f714b924c161c$var$EVENT_KEY$9}`;
const $ea8f714b924c161c$var$POINTER_TYPE_TOUCH = "touch";
const $ea8f714b924c161c$var$POINTER_TYPE_PEN = "pen";
const $ea8f714b924c161c$var$CLASS_NAME_POINTER_EVENT = "pointer-event";
const $ea8f714b924c161c$var$SWIPE_THRESHOLD = 40;
const $ea8f714b924c161c$var$Default$c = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const $ea8f714b924c161c$var$DefaultType$c = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$var$Swipe extends $ea8f714b924c161c$var$Config {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !$ea8f714b924c161c$var$Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$c;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$c;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$d;
    }
    dispose() {
        $ea8f714b924c161c$var$EventHandler.off(this._element, $ea8f714b924c161c$var$EVENT_KEY$9);
    }
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        $ea8f714b924c161c$var$execute(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= $ea8f714b924c161c$var$SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        $ea8f714b924c161c$var$execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_POINTERDOWN, (event)=>this._start(event));
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_POINTER_EVENT);
        } else {
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_TOUCHSTART, (event)=>this._start(event));
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_TOUCHMOVE, (event)=>this._move(event));
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === $ea8f714b924c161c$var$POINTER_TYPE_PEN || event.pointerType === $ea8f714b924c161c$var$POINTER_TYPE_TOUCH);
    }
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$c = "carousel";
const $ea8f714b924c161c$var$DATA_KEY$8 = "bs.carousel";
const $ea8f714b924c161c$var$EVENT_KEY$8 = `.${$ea8f714b924c161c$var$DATA_KEY$8}`;
const $ea8f714b924c161c$var$DATA_API_KEY$5 = ".data-api";
const $ea8f714b924c161c$var$ARROW_LEFT_KEY$1 = "ArrowLeft";
const $ea8f714b924c161c$var$ARROW_RIGHT_KEY$1 = "ArrowRight";
const $ea8f714b924c161c$var$TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch
const $ea8f714b924c161c$var$ORDER_NEXT = "next";
const $ea8f714b924c161c$var$ORDER_PREV = "prev";
const $ea8f714b924c161c$var$DIRECTION_LEFT = "left";
const $ea8f714b924c161c$var$DIRECTION_RIGHT = "right";
const $ea8f714b924c161c$var$EVENT_SLIDE = `slide${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_SLID = `slid${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN$1 = `keydown${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_MOUSEENTER$1 = `mouseenter${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_MOUSELEAVE$1 = `mouseleave${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_DRAG_START = `dragstart${$ea8f714b924c161c$var$EVENT_KEY$8}`;
const $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$3 = `load${$ea8f714b924c161c$var$EVENT_KEY$8}${$ea8f714b924c161c$var$DATA_API_KEY$5}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$5 = `click${$ea8f714b924c161c$var$EVENT_KEY$8}${$ea8f714b924c161c$var$DATA_API_KEY$5}`;
const $ea8f714b924c161c$var$CLASS_NAME_CAROUSEL = "carousel";
const $ea8f714b924c161c$var$CLASS_NAME_ACTIVE$2 = "active";
const $ea8f714b924c161c$var$CLASS_NAME_SLIDE = "slide";
const $ea8f714b924c161c$var$CLASS_NAME_END = "carousel-item-end";
const $ea8f714b924c161c$var$CLASS_NAME_START = "carousel-item-start";
const $ea8f714b924c161c$var$CLASS_NAME_NEXT = "carousel-item-next";
const $ea8f714b924c161c$var$CLASS_NAME_PREV = "carousel-item-prev";
const $ea8f714b924c161c$var$SELECTOR_ACTIVE = ".active";
const $ea8f714b924c161c$var$SELECTOR_ITEM = ".carousel-item";
const $ea8f714b924c161c$var$SELECTOR_ACTIVE_ITEM = $ea8f714b924c161c$var$SELECTOR_ACTIVE + $ea8f714b924c161c$var$SELECTOR_ITEM;
const $ea8f714b924c161c$var$SELECTOR_ITEM_IMG = ".carousel-item img";
const $ea8f714b924c161c$var$SELECTOR_INDICATORS = ".carousel-indicators";
const $ea8f714b924c161c$var$SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const $ea8f714b924c161c$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $ea8f714b924c161c$var$KEY_TO_DIRECTION = {
    [$ea8f714b924c161c$var$ARROW_LEFT_KEY$1]: $ea8f714b924c161c$var$DIRECTION_RIGHT,
    [$ea8f714b924c161c$var$ARROW_RIGHT_KEY$1]: $ea8f714b924c161c$var$DIRECTION_LEFT
};
const $ea8f714b924c161c$var$Default$b = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const $ea8f714b924c161c$var$DefaultType$b = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$144901db2ea8e967 extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === $ea8f714b924c161c$var$CLASS_NAME_CAROUSEL) this.cycle();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$b;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$b;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$c;
    }
    next() {
        this._slide($ea8f714b924c161c$var$ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && $ea8f714b924c161c$var$isVisible(this._element)) this.next();
    }
    prev() {
        this._slide($ea8f714b924c161c$var$ORDER_PREV);
    }
    pause() {
        if (this._isSliding) $ea8f714b924c161c$var$triggerTransitionEnd(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            $ea8f714b924c161c$var$EventHandler.one(this._element, $ea8f714b924c161c$var$EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            $ea8f714b924c161c$var$EventHandler.one(this._element, $ea8f714b924c161c$var$EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? $ea8f714b924c161c$var$ORDER_NEXT : $ea8f714b924c161c$var$ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_KEYDOWN$1, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_MOUSEENTER$1, ()=>this.pause());
            $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_MOUSELEAVE$1, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && $ea8f714b924c161c$var$Swipe.isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_ITEM_IMG, this._element))$ea8f714b924c161c$var$EventHandler.on(img, $ea8f714b924c161c$var$EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
             // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), $ea8f714b924c161c$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder($ea8f714b924c161c$var$DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder($ea8f714b924c161c$var$DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new $ea8f714b924c161c$var$Swipe(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = $ea8f714b924c161c$var$KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$2);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = $ea8f714b924c161c$var$SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$2);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === $ea8f714b924c161c$var$ORDER_NEXT;
        const nextElement = element || $ea8f714b924c161c$var$getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return $ea8f714b924c161c$var$EventHandler.trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent($ea8f714b924c161c$var$EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? $ea8f714b924c161c$var$CLASS_NAME_START : $ea8f714b924c161c$var$CLASS_NAME_END;
        const orderClassName = isNext ? $ea8f714b924c161c$var$CLASS_NAME_NEXT : $ea8f714b924c161c$var$CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        $ea8f714b924c161c$var$reflow(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$2);
            activeElement.classList.remove($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent($ea8f714b924c161c$var$EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_SLIDE);
    }
    _getActive() {
        return $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if ($ea8f714b924c161c$var$isRTL()) return direction === $ea8f714b924c161c$var$DIRECTION_LEFT ? $ea8f714b924c161c$var$ORDER_PREV : $ea8f714b924c161c$var$ORDER_NEXT;
        return direction === $ea8f714b924c161c$var$DIRECTION_LEFT ? $ea8f714b924c161c$var$ORDER_NEXT : $ea8f714b924c161c$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if ($ea8f714b924c161c$var$isRTL()) return order === $ea8f714b924c161c$var$ORDER_PREV ? $ea8f714b924c161c$var$DIRECTION_LEFT : $ea8f714b924c161c$var$DIRECTION_RIGHT;
        return order === $ea8f714b924c161c$var$ORDER_PREV ? $ea8f714b924c161c$var$DIRECTION_RIGHT : $ea8f714b924c161c$var$DIRECTION_LEFT;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$144901db2ea8e967.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$5, $ea8f714b924c161c$var$SELECTOR_DATA_SLIDE, function(event) {
    const target = $ea8f714b924c161c$var$getElementFromSelector(this);
    if (!target || !target.classList.contains($ea8f714b924c161c$var$CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = $ea8f714b924c161c$export$144901db2ea8e967.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if ($ea8f714b924c161c$var$Manipulator.getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
$ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$3, ()=>{
    const carousels = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_DATA_RIDE);
    for (const carousel of carousels)$ea8f714b924c161c$export$144901db2ea8e967.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$144901db2ea8e967);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$b = "collapse";
const $ea8f714b924c161c$var$DATA_KEY$7 = "bs.collapse";
const $ea8f714b924c161c$var$EVENT_KEY$7 = `.${$ea8f714b924c161c$var$DATA_KEY$7}`;
const $ea8f714b924c161c$var$DATA_API_KEY$4 = ".data-api";
const $ea8f714b924c161c$var$EVENT_SHOW$6 = `show${$ea8f714b924c161c$var$EVENT_KEY$7}`;
const $ea8f714b924c161c$var$EVENT_SHOWN$6 = `shown${$ea8f714b924c161c$var$EVENT_KEY$7}`;
const $ea8f714b924c161c$var$EVENT_HIDE$6 = `hide${$ea8f714b924c161c$var$EVENT_KEY$7}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN$6 = `hidden${$ea8f714b924c161c$var$EVENT_KEY$7}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$4 = `click${$ea8f714b924c161c$var$EVENT_KEY$7}${$ea8f714b924c161c$var$DATA_API_KEY$4}`;
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$7 = "show";
const $ea8f714b924c161c$var$CLASS_NAME_COLLAPSE = "collapse";
const $ea8f714b924c161c$var$CLASS_NAME_COLLAPSING = "collapsing";
const $ea8f714b924c161c$var$CLASS_NAME_COLLAPSED = "collapsed";
const $ea8f714b924c161c$var$CLASS_NAME_DEEPER_CHILDREN = `:scope .${$ea8f714b924c161c$var$CLASS_NAME_COLLAPSE} .${$ea8f714b924c161c$var$CLASS_NAME_COLLAPSE}`;
const $ea8f714b924c161c$var$CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const $ea8f714b924c161c$var$WIDTH = "width";
const $ea8f714b924c161c$var$HEIGHT = "height";
const $ea8f714b924c161c$var$SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const $ea8f714b924c161c$var$Default$a = {
    parent: null,
    toggle: true
};
const $ea8f714b924c161c$var$DefaultType$a = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$78768a9af065a7b extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$4);
        for (const elem of toggleList){
            const selector = $ea8f714b924c161c$var$getSelectorFromElement(elem);
            const filterElement = $ea8f714b924c161c$var$SelectorEngine.find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$a;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$a;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$b;
    }
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = []; // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren($ea8f714b924c161c$var$SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>$ea8f714b924c161c$export$78768a9af065a7b.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOW$6);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_COLLAPSE);
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_COLLAPSE, $ea8f714b924c161c$var$CLASS_NAME_SHOW$7);
            this._element.style[dimension] = "";
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOWN$6);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE$6);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        $ea8f714b924c161c$var$reflow(this._element);
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_COLLAPSING);
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_COLLAPSE, $ea8f714b924c161c$var$CLASS_NAME_SHOW$7);
        for (const trigger of this._triggerArray){
            const element = $ea8f714b924c161c$var$getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_COLLAPSE);
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDDEN$6);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_SHOW$7);
    }
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle); // Coerce string values
        config.parent = $ea8f714b924c161c$var$getElement(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_HORIZONTAL) ? $ea8f714b924c161c$var$WIDTH : $ea8f714b924c161c$var$HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$4);
        for (const element of children){
            const selected = $ea8f714b924c161c$var$getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth
        return $ea8f714b924c161c$var$SelectorEngine.find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle($ea8f714b924c161c$var$CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = $ea8f714b924c161c$export$78768a9af065a7b.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$4, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$4, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    const selector = $ea8f714b924c161c$var$getSelectorFromElement(this);
    const selectorElements = $ea8f714b924c161c$var$SelectorEngine.find(selector);
    for (const element of selectorElements)$ea8f714b924c161c$export$78768a9af065a7b.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$78768a9af065a7b);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$a = "dropdown";
const $ea8f714b924c161c$var$DATA_KEY$6 = "bs.dropdown";
const $ea8f714b924c161c$var$EVENT_KEY$6 = `.${$ea8f714b924c161c$var$DATA_KEY$6}`;
const $ea8f714b924c161c$var$DATA_API_KEY$3 = ".data-api";
const $ea8f714b924c161c$var$ESCAPE_KEY$2 = "Escape";
const $ea8f714b924c161c$var$TAB_KEY$1 = "Tab";
const $ea8f714b924c161c$var$ARROW_UP_KEY$1 = "ArrowUp";
const $ea8f714b924c161c$var$ARROW_DOWN_KEY$1 = "ArrowDown";
const $ea8f714b924c161c$var$RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button
const $ea8f714b924c161c$var$EVENT_HIDE$5 = `hide${$ea8f714b924c161c$var$EVENT_KEY$6}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN$5 = `hidden${$ea8f714b924c161c$var$EVENT_KEY$6}`;
const $ea8f714b924c161c$var$EVENT_SHOW$5 = `show${$ea8f714b924c161c$var$EVENT_KEY$6}`;
const $ea8f714b924c161c$var$EVENT_SHOWN$5 = `shown${$ea8f714b924c161c$var$EVENT_KEY$6}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$3 = `click${$ea8f714b924c161c$var$EVENT_KEY$6}${$ea8f714b924c161c$var$DATA_API_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN_DATA_API = `keydown${$ea8f714b924c161c$var$EVENT_KEY$6}${$ea8f714b924c161c$var$DATA_API_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_KEYUP_DATA_API = `keyup${$ea8f714b924c161c$var$EVENT_KEY$6}${$ea8f714b924c161c$var$DATA_API_KEY$3}`;
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$6 = "show";
const $ea8f714b924c161c$var$CLASS_NAME_DROPUP = "dropup";
const $ea8f714b924c161c$var$CLASS_NAME_DROPEND = "dropend";
const $ea8f714b924c161c$var$CLASS_NAME_DROPSTART = "dropstart";
const $ea8f714b924c161c$var$CLASS_NAME_DROPUP_CENTER = "dropup-center";
const $ea8f714b924c161c$var$CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE_SHOWN = `${$ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3}.${$ea8f714b924c161c$var$CLASS_NAME_SHOW$6}`;
const $ea8f714b924c161c$var$SELECTOR_MENU = ".dropdown-menu";
const $ea8f714b924c161c$var$SELECTOR_NAVBAR = ".navbar";
const $ea8f714b924c161c$var$SELECTOR_NAVBAR_NAV = ".navbar-nav";
const $ea8f714b924c161c$var$SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const $ea8f714b924c161c$var$PLACEMENT_TOP = $ea8f714b924c161c$var$isRTL() ? "top-end" : "top-start";
const $ea8f714b924c161c$var$PLACEMENT_TOPEND = $ea8f714b924c161c$var$isRTL() ? "top-start" : "top-end";
const $ea8f714b924c161c$var$PLACEMENT_BOTTOM = $ea8f714b924c161c$var$isRTL() ? "bottom-end" : "bottom-start";
const $ea8f714b924c161c$var$PLACEMENT_BOTTOMEND = $ea8f714b924c161c$var$isRTL() ? "bottom-start" : "bottom-end";
const $ea8f714b924c161c$var$PLACEMENT_RIGHT = $ea8f714b924c161c$var$isRTL() ? "left-start" : "right-start";
const $ea8f714b924c161c$var$PLACEMENT_LEFT = $ea8f714b924c161c$var$isRTL() ? "right-start" : "left-start";
const $ea8f714b924c161c$var$PLACEMENT_TOPCENTER = "top";
const $ea8f714b924c161c$var$PLACEMENT_BOTTOMCENTER = "bottom";
const $ea8f714b924c161c$var$Default$9 = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const $ea8f714b924c161c$var$DefaultType$9 = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$931cbfb6bfb85fc extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode; // dropdown wrapper
        // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        this._menu = $ea8f714b924c161c$var$SelectorEngine.next(this._element, $ea8f714b924c161c$var$SELECTOR_MENU)[0] || $ea8f714b924c161c$var$SelectorEngine.prev(this._element, $ea8f714b924c161c$var$SELECTOR_MENU)[0] || $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$9;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$9;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$a;
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if ($ea8f714b924c161c$var$isDisabled(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOW$5, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper(); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest($ea8f714b924c161c$var$SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))$ea8f714b924c161c$var$EventHandler.on(element, "mouseover", $ea8f714b924c161c$var$noop);
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$6);
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$6);
        $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOWN$5, relatedTarget);
    }
    hide() {
        if ($ea8f714b924c161c$var$isDisabled(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    _completeHide(relatedTarget) {
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE$5, relatedTarget);
        if (hideEvent.defaultPrevented) return;
         // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))$ea8f714b924c161c$var$EventHandler.off(element, "mouseover", $ea8f714b924c161c$var$noop);
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$6);
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$6);
        this._element.setAttribute("aria-expanded", "false");
        $ea8f714b924c161c$var$Manipulator.removeDataAttribute(this._menu, "popper");
        $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDDEN$5, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !$ea8f714b924c161c$var$isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${$ea8f714b924c161c$var$NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof $6e3e02de5f56a2a3$exports === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if ($ea8f714b924c161c$var$isElement(this._config.reference)) referenceElement = $ea8f714b924c161c$var$getElement(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = $6e3e02de5f56a2a3$exports.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains($ea8f714b924c161c$var$CLASS_NAME_SHOW$6);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPEND)) return $ea8f714b924c161c$var$PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPSTART)) return $ea8f714b924c161c$var$PLACEMENT_LEFT;
        if (parentDropdown.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPUP_CENTER)) return $ea8f714b924c161c$var$PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPDOWN_CENTER)) return $ea8f714b924c161c$var$PLACEMENT_BOTTOMCENTER;
         // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPUP)) return isEnd ? $ea8f714b924c161c$var$PLACEMENT_TOPEND : $ea8f714b924c161c$var$PLACEMENT_TOP;
        return isEnd ? $ea8f714b924c161c$var$PLACEMENT_BOTTOMEND : $ea8f714b924c161c$var$PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest($ea8f714b924c161c$var$SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset: offset  } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        }; // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            $ea8f714b924c161c$var$Manipulator.setDataAttribute(this._menu, "popper", "static"); // todo:v6 remove
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _selectMenuItem({ key: key , target: target  }) {
        const items = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>$ea8f714b924c161c$var$isVisible(element));
        if (!items.length) return;
         // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        $ea8f714b924c161c$var$getNextActiveElement(items, target, key === $ea8f714b924c161c$var$ARROW_DOWN_KEY$1, !items.includes(target)).focus();
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$931cbfb6bfb85fc.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === $ea8f714b924c161c$var$RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== $ea8f714b924c161c$var$TAB_KEY$1) return;
        const openToggles = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = $ea8f714b924c161c$export$931cbfb6bfb85fc.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
             // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === $ea8f714b924c161c$var$TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === $ea8f714b924c161c$var$ESCAPE_KEY$2;
        const isUpOrDownEvent = [
            $ea8f714b924c161c$var$ARROW_UP_KEY$1,
            $ea8f714b924c161c$var$ARROW_DOWN_KEY$1
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/
        const getToggleButton = this.matches($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3) ? this : $ea8f714b924c161c$var$SelectorEngine.prev(this, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3)[0] || $ea8f714b924c161c$var$SelectorEngine.next(this, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3)[0] || $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
        const instance = $ea8f714b924c161c$export$931cbfb6bfb85fc.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            // else is escape and we check if it is shown
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_KEYDOWN_DATA_API, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3, $ea8f714b924c161c$export$931cbfb6bfb85fc.dataApiKeydownHandler);
$ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_KEYDOWN_DATA_API, $ea8f714b924c161c$var$SELECTOR_MENU, $ea8f714b924c161c$export$931cbfb6bfb85fc.dataApiKeydownHandler);
$ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$3, $ea8f714b924c161c$export$931cbfb6bfb85fc.clearMenus);
$ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_KEYUP_DATA_API, $ea8f714b924c161c$export$931cbfb6bfb85fc.clearMenus);
$ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$3, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$3, function(event) {
    event.preventDefault();
    $ea8f714b924c161c$export$931cbfb6bfb85fc.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$931cbfb6bfb85fc);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
const $ea8f714b924c161c$var$SELECTOR_STICKY_CONTENT = ".sticky-top";
const $ea8f714b924c161c$var$PROPERTY_PADDING = "padding-right";
const $ea8f714b924c161c$var$PROPERTY_MARGIN = "margin-right";
/**
 * Class definition
 */ class $ea8f714b924c161c$var$ScrollBarHelper {
    constructor(){
        this._element = document.body;
    }
    getWidth() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
        const width = this.getWidth();
        this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width
        this._setElementAttributes(this._element, $ea8f714b924c161c$var$PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
        this._setElementAttributes($ea8f714b924c161c$var$SELECTOR_FIXED_CONTENT, $ea8f714b924c161c$var$PROPERTY_PADDING, (calculatedValue)=>calculatedValue + width);
        this._setElementAttributes($ea8f714b924c161c$var$SELECTOR_STICKY_CONTENT, $ea8f714b924c161c$var$PROPERTY_MARGIN, (calculatedValue)=>calculatedValue - width);
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow");
        this._resetElementAttributes(this._element, $ea8f714b924c161c$var$PROPERTY_PADDING);
        this._resetElementAttributes($ea8f714b924c161c$var$SELECTOR_FIXED_CONTENT, $ea8f714b924c161c$var$PROPERTY_PADDING);
        this._resetElementAttributes($ea8f714b924c161c$var$SELECTOR_STICKY_CONTENT, $ea8f714b924c161c$var$PROPERTY_MARGIN);
    }
    isOverflowing() {
        return this.getWidth() > 0;
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow");
        this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
        const scrollbarWidth = this.getWidth();
        const manipulationCallBack = (element)=>{
            if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
            this._saveInitialAttribute(element, styleProperty);
            const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
            element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
        const actualValue = element.style.getPropertyValue(styleProperty);
        if (actualValue) $ea8f714b924c161c$var$Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
    _resetElementAttributes(selector, styleProperty) {
        const manipulationCallBack = (element)=>{
            const value = $ea8f714b924c161c$var$Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero
            if (value === null) {
                element.style.removeProperty(styleProperty);
                return;
            }
            $ea8f714b924c161c$var$Manipulator.removeDataAttribute(element, styleProperty);
            element.style.setProperty(styleProperty, value);
        };
        this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
        if ($ea8f714b924c161c$var$isElement(selector)) {
            callBack(selector);
            return;
        }
        for (const sel of $ea8f714b924c161c$var$SelectorEngine.find(selector, this._element))callBack(sel);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$9 = "backdrop";
const $ea8f714b924c161c$var$CLASS_NAME_FADE$4 = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$5 = "show";
const $ea8f714b924c161c$var$EVENT_MOUSEDOWN = `mousedown.bs.${$ea8f714b924c161c$var$NAME$9}`;
const $ea8f714b924c161c$var$Default$8 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body" // give the choice to place backdrop under different elements
};
const $ea8f714b924c161c$var$DefaultType$8 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$var$Backdrop extends $ea8f714b924c161c$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isAppended = false;
        this._element = null;
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$8;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$8;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$9;
    }
    show(callback) {
        if (!this._config.isVisible) {
            $ea8f714b924c161c$var$execute(callback);
            return;
        }
        this._append();
        const element = this._getElement();
        if (this._config.isAnimated) $ea8f714b924c161c$var$reflow(element);
        element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            $ea8f714b924c161c$var$execute(callback);
        });
    }
    hide(callback) {
        if (!this._config.isVisible) {
            $ea8f714b924c161c$var$execute(callback);
            return;
        }
        this._getElement().classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$5);
        this._emulateAnimation(()=>{
            this.dispose();
            $ea8f714b924c161c$var$execute(callback);
        });
    }
    dispose() {
        if (!this._isAppended) return;
        $ea8f714b924c161c$var$EventHandler.off(this._element, $ea8f714b924c161c$var$EVENT_MOUSEDOWN);
        this._element.remove();
        this._isAppended = false;
    }
    _getElement() {
        if (!this._element) {
            const backdrop = document.createElement("div");
            backdrop.className = this._config.className;
            if (this._config.isAnimated) backdrop.classList.add($ea8f714b924c161c$var$CLASS_NAME_FADE$4);
            this._element = backdrop;
        }
        return this._element;
    }
    _configAfterMerge(config) {
        // use getElement() with the default "body" to get a fresh Element on each instantiation
        config.rootElement = $ea8f714b924c161c$var$getElement(config.rootElement);
        return config;
    }
    _append() {
        if (this._isAppended) return;
        const element = this._getElement();
        this._config.rootElement.append(element);
        $ea8f714b924c161c$var$EventHandler.on(element, $ea8f714b924c161c$var$EVENT_MOUSEDOWN, ()=>{
            $ea8f714b924c161c$var$execute(this._config.clickCallback);
        });
        this._isAppended = true;
    }
    _emulateAnimation(callback) {
        $ea8f714b924c161c$var$executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$8 = "focustrap";
const $ea8f714b924c161c$var$DATA_KEY$5 = "bs.focustrap";
const $ea8f714b924c161c$var$EVENT_KEY$5 = `.${$ea8f714b924c161c$var$DATA_KEY$5}`;
const $ea8f714b924c161c$var$EVENT_FOCUSIN$2 = `focusin${$ea8f714b924c161c$var$EVENT_KEY$5}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN_TAB = `keydown.tab${$ea8f714b924c161c$var$EVENT_KEY$5}`;
const $ea8f714b924c161c$var$TAB_KEY = "Tab";
const $ea8f714b924c161c$var$TAB_NAV_FORWARD = "forward";
const $ea8f714b924c161c$var$TAB_NAV_BACKWARD = "backward";
const $ea8f714b924c161c$var$Default$7 = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
};
const $ea8f714b924c161c$var$DefaultType$7 = {
    autofocus: "boolean",
    trapElement: "element"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$var$FocusTrap extends $ea8f714b924c161c$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
        this._isActive = false;
        this._lastTabNavDirection = null;
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$7;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$7;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$8;
    }
    activate() {
        if (this._isActive) return;
        if (this._config.autofocus) this._config.trapElement.focus();
        $ea8f714b924c161c$var$EventHandler.off(document, $ea8f714b924c161c$var$EVENT_KEY$5); // guard against infinite focus loop
        $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_FOCUSIN$2, (event)=>this._handleFocusin(event));
        $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_KEYDOWN_TAB, (event)=>this._handleKeydown(event));
        this._isActive = true;
    }
    deactivate() {
        if (!this._isActive) return;
        this._isActive = false;
        $ea8f714b924c161c$var$EventHandler.off(document, $ea8f714b924c161c$var$EVENT_KEY$5);
    }
    _handleFocusin(event) {
        const { trapElement: trapElement  } = this._config;
        if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
        const elements = $ea8f714b924c161c$var$SelectorEngine.focusableChildren(trapElement);
        if (elements.length === 0) trapElement.focus();
        else if (this._lastTabNavDirection === $ea8f714b924c161c$var$TAB_NAV_BACKWARD) elements[elements.length - 1].focus();
        else elements[0].focus();
    }
    _handleKeydown(event) {
        if (event.key !== $ea8f714b924c161c$var$TAB_KEY) return;
        this._lastTabNavDirection = event.shiftKey ? $ea8f714b924c161c$var$TAB_NAV_BACKWARD : $ea8f714b924c161c$var$TAB_NAV_FORWARD;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$7 = "modal";
const $ea8f714b924c161c$var$DATA_KEY$4 = "bs.modal";
const $ea8f714b924c161c$var$EVENT_KEY$4 = `.${$ea8f714b924c161c$var$DATA_KEY$4}`;
const $ea8f714b924c161c$var$DATA_API_KEY$2 = ".data-api";
const $ea8f714b924c161c$var$ESCAPE_KEY$1 = "Escape";
const $ea8f714b924c161c$var$EVENT_HIDE$4 = `hide${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_HIDE_PREVENTED$1 = `hidePrevented${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN$4 = `hidden${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_SHOW$4 = `show${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_SHOWN$4 = `shown${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_RESIZE$1 = `resize${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DISMISS = `click.dismiss${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${$ea8f714b924c161c$var$EVENT_KEY$4}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$2 = `click${$ea8f714b924c161c$var$EVENT_KEY$4}${$ea8f714b924c161c$var$DATA_API_KEY$2}`;
const $ea8f714b924c161c$var$CLASS_NAME_OPEN = "modal-open";
const $ea8f714b924c161c$var$CLASS_NAME_FADE$3 = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$4 = "show";
const $ea8f714b924c161c$var$CLASS_NAME_STATIC = "modal-static";
const $ea8f714b924c161c$var$OPEN_SELECTOR$1 = ".modal.show";
const $ea8f714b924c161c$var$SELECTOR_DIALOG = ".modal-dialog";
const $ea8f714b924c161c$var$SELECTOR_MODAL_BODY = ".modal-body";
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const $ea8f714b924c161c$var$Default$6 = {
    backdrop: true,
    focus: true,
    keyboard: true
};
const $ea8f714b924c161c$var$DefaultType$6 = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$2b77a92f1a5ad772 extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._dialog = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_DIALOG, this._element);
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._isShown = false;
        this._isTransitioning = false;
        this._scrollBar = new $ea8f714b924c161c$var$ScrollBarHelper();
        this._addEventListeners();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$6;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$6;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$7;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown || this._isTransitioning) return;
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOW$4, {
            relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add($ea8f714b924c161c$var$CLASS_NAME_OPEN);
        this._adjustDialog();
        this._backdrop.show(()=>this._showElement(relatedTarget));
    }
    hide() {
        if (!this._isShown || this._isTransitioning) return;
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE$4);
        if (hideEvent.defaultPrevented) return;
        this._isShown = false;
        this._isTransitioning = true;
        this._focustrap.deactivate();
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$4);
        this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
        for (const htmlElement of [
            window,
            this._dialog
        ])$ea8f714b924c161c$var$EventHandler.off(htmlElement, $ea8f714b924c161c$var$EVENT_KEY$4);
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    handleUpdate() {
        this._adjustDialog();
    }
    _initializeBackDrop() {
        return new $ea8f714b924c161c$var$Backdrop({
            isVisible: Boolean(this._config.backdrop),
            // 'static' option will be translated to true, and booleans will keep their value,
            isAnimated: this._isAnimated()
        });
    }
    _initializeFocusTrap() {
        return new $ea8f714b924c161c$var$FocusTrap({
            trapElement: this._element
        });
    }
    _showElement(relatedTarget) {
        // try to append dynamic modal
        if (!document.body.contains(this._element)) document.body.append(this._element);
        this._element.style.display = "block";
        this._element.removeAttribute("aria-hidden");
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.scrollTop = 0;
        const modalBody = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_MODAL_BODY, this._dialog);
        if (modalBody) modalBody.scrollTop = 0;
        $ea8f714b924c161c$var$reflow(this._element);
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$4);
        const transitionComplete = ()=>{
            if (this._config.focus) this._focustrap.activate();
            this._isTransitioning = false;
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOWN$4, {
                relatedTarget: relatedTarget
            });
        };
        this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_KEYDOWN_DISMISS$1, (event)=>{
            if (event.key !== $ea8f714b924c161c$var$ESCAPE_KEY$1) return;
            if (this._config.keyboard) {
                event.preventDefault();
                this.hide();
                return;
            }
            this._triggerBackdropTransition();
        });
        $ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_RESIZE$1, ()=>{
            if (this._isShown && !this._isTransitioning) this._adjustDialog();
        });
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_MOUSEDOWN_DISMISS, (event)=>{
            // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
            $ea8f714b924c161c$var$EventHandler.one(this._element, $ea8f714b924c161c$var$EVENT_CLICK_DISMISS, (event2)=>{
                if (this._element !== event.target || this._element !== event2.target) return;
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return;
                }
                if (this._config.backdrop) this.hide();
            });
        });
    }
    _hideModal() {
        this._element.style.display = "none";
        this._element.setAttribute("aria-hidden", true);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        this._isTransitioning = false;
        this._backdrop.hide(()=>{
            document.body.classList.remove($ea8f714b924c161c$var$CLASS_NAME_OPEN);
            this._resetAdjustments();
            this._scrollBar.reset();
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDDEN$4);
        });
    }
    _isAnimated() {
        return this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_FADE$3);
    }
    _triggerBackdropTransition() {
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE_PREVENTED$1);
        if (hideEvent.defaultPrevented) return;
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed
        if (initialOverflowY === "hidden" || this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_STATIC)) return;
        if (!isModalOverflowing) this._element.style.overflowY = "hidden";
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_STATIC);
        this._queueCallback(()=>{
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_STATIC);
            this._queueCallback(()=>{
                this._element.style.overflowY = initialOverflowY;
            }, this._dialog);
        }, this._dialog);
        this._element.focus();
    }
    /**
   * The following methods are used to handle overflowing modals
   */ _adjustDialog() {
        const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
        const scrollbarWidth = this._scrollBar.getWidth();
        const isBodyOverflowing = scrollbarWidth > 0;
        if (isBodyOverflowing && !isModalOverflowing) {
            const property = $ea8f714b924c161c$var$isRTL() ? "paddingLeft" : "paddingRight";
            this._element.style[property] = `${scrollbarWidth}px`;
        }
        if (!isBodyOverflowing && isModalOverflowing) {
            const property1 = $ea8f714b924c161c$var$isRTL() ? "paddingRight" : "paddingLeft";
            this._element.style[property1] = `${scrollbarWidth}px`;
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "";
        this._element.style.paddingRight = "";
    }
    static jQueryInterface(config, relatedTarget) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$2b77a92f1a5ad772.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config](relatedTarget);
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$2, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$2, function(event) {
    const target = $ea8f714b924c161c$var$getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    $ea8f714b924c161c$var$EventHandler.one(target, $ea8f714b924c161c$var$EVENT_SHOW$4, (showEvent)=>{
        if (showEvent.defaultPrevented) // only register focus restorer if modal will actually get shown
        return;
        $ea8f714b924c161c$var$EventHandler.one(target, $ea8f714b924c161c$var$EVENT_HIDDEN$4, ()=>{
            if ($ea8f714b924c161c$var$isVisible(this)) this.focus();
        });
    }); // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$OPEN_SELECTOR$1);
    if (alreadyOpen) $ea8f714b924c161c$export$2b77a92f1a5ad772.getInstance(alreadyOpen).hide();
    const data = $ea8f714b924c161c$export$2b77a92f1a5ad772.getOrCreateInstance(target);
    data.toggle(this);
});
$ea8f714b924c161c$var$enableDismissTrigger($ea8f714b924c161c$export$2b77a92f1a5ad772);
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$2b77a92f1a5ad772);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$6 = "offcanvas";
const $ea8f714b924c161c$var$DATA_KEY$3 = "bs.offcanvas";
const $ea8f714b924c161c$var$EVENT_KEY$3 = `.${$ea8f714b924c161c$var$DATA_KEY$3}`;
const $ea8f714b924c161c$var$DATA_API_KEY$1 = ".data-api";
const $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$2 = `load${$ea8f714b924c161c$var$EVENT_KEY$3}${$ea8f714b924c161c$var$DATA_API_KEY$1}`;
const $ea8f714b924c161c$var$ESCAPE_KEY = "Escape";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$3 = "show";
const $ea8f714b924c161c$var$CLASS_NAME_SHOWING$1 = "showing";
const $ea8f714b924c161c$var$CLASS_NAME_HIDING = "hiding";
const $ea8f714b924c161c$var$CLASS_NAME_BACKDROP = "offcanvas-backdrop";
const $ea8f714b924c161c$var$OPEN_SELECTOR = ".offcanvas.show";
const $ea8f714b924c161c$var$EVENT_SHOW$3 = `show${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_SHOWN$3 = `shown${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_HIDE$3 = `hide${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_HIDE_PREVENTED = `hidePrevented${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN$3 = `hidden${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_RESIZE = `resize${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$1 = `click${$ea8f714b924c161c$var$EVENT_KEY$3}${$ea8f714b924c161c$var$DATA_API_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN_DISMISS = `keydown.dismiss${$ea8f714b924c161c$var$EVENT_KEY$3}`;
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const $ea8f714b924c161c$var$Default$5 = {
    backdrop: true,
    keyboard: true,
    scroll: false
};
const $ea8f714b924c161c$var$DefaultType$5 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$591ca0244c9dfcd4 extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._isShown = false;
        this._backdrop = this._initializeBackDrop();
        this._focustrap = this._initializeFocusTrap();
        this._addEventListeners();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$5;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$5;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$6;
    }
    toggle(relatedTarget) {
        return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
        if (this._isShown) return;
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOW$3, {
            relatedTarget: relatedTarget
        });
        if (showEvent.defaultPrevented) return;
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) new $ea8f714b924c161c$var$ScrollBarHelper().hide();
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOWING$1);
        const completeCallBack = ()=>{
            if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
            this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$3);
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOWING$1);
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOWN$3, {
                relatedTarget: relatedTarget
            });
        };
        this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
        if (!this._isShown) return;
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE$3);
        if (hideEvent.defaultPrevented) return;
        this._focustrap.deactivate();
        this._element.blur();
        this._isShown = false;
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_HIDING);
        this._backdrop.hide();
        const completeCallback = ()=>{
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$3, $ea8f714b924c161c$var$CLASS_NAME_HIDING);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) new $ea8f714b924c161c$var$ScrollBarHelper().reset();
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDDEN$3);
        };
        this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
        this._backdrop.dispose();
        this._focustrap.deactivate();
        super.dispose();
    }
    _initializeBackDrop() {
        const clickCallback = ()=>{
            if (this._config.backdrop === "static") {
                $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        }; // 'static' option will be translated to true, and booleans will keep their value
        const isVisible = Boolean(this._config.backdrop);
        return new $ea8f714b924c161c$var$Backdrop({
            className: $ea8f714b924c161c$var$CLASS_NAME_BACKDROP,
            isVisible: isVisible,
            isAnimated: true,
            rootElement: this._element.parentNode,
            clickCallback: isVisible ? clickCallback : null
        });
    }
    _initializeFocusTrap() {
        return new $ea8f714b924c161c$var$FocusTrap({
            trapElement: this._element
        });
    }
    _addEventListeners() {
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_KEYDOWN_DISMISS, (event)=>{
            if (event.key !== $ea8f714b924c161c$var$ESCAPE_KEY) return;
            if (!this._config.keyboard) {
                $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE_PREVENTED);
                return;
            }
            this.hide();
        });
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$591ca0244c9dfcd4.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config](this);
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API$1, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE$1, function(event) {
    const target = $ea8f714b924c161c$var$getElementFromSelector(this);
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if ($ea8f714b924c161c$var$isDisabled(this)) return;
    $ea8f714b924c161c$var$EventHandler.one(target, $ea8f714b924c161c$var$EVENT_HIDDEN$3, ()=>{
        // focus on trigger when it is closed
        if ($ea8f714b924c161c$var$isVisible(this)) this.focus();
    }); // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) $ea8f714b924c161c$export$591ca0244c9dfcd4.getInstance(alreadyOpen).hide();
    const data = $ea8f714b924c161c$export$591ca0244c9dfcd4.getOrCreateInstance(target);
    data.toggle(this);
});
$ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$2, ()=>{
    for (const selector of $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$OPEN_SELECTOR))$ea8f714b924c161c$export$591ca0244c9dfcd4.getOrCreateInstance(selector).show();
});
$ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_RESIZE, ()=>{
    for (const element of $ea8f714b924c161c$var$SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]"))if (getComputedStyle(element).position !== "fixed") $ea8f714b924c161c$export$591ca0244c9dfcd4.getOrCreateInstance(element).hide();
});
$ea8f714b924c161c$var$enableDismissTrigger($ea8f714b924c161c$export$591ca0244c9dfcd4);
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$591ca0244c9dfcd4);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $ea8f714b924c161c$var$uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
const $ea8f714b924c161c$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const $ea8f714b924c161c$var$SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */ const $ea8f714b924c161c$var$DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
const $ea8f714b924c161c$var$allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if ($ea8f714b924c161c$var$uriAttributes.has(attributeName)) return Boolean($ea8f714b924c161c$var$SAFE_URL_PATTERN.test(attribute.nodeValue) || $ea8f714b924c161c$var$DATA_URL_PATTERN.test(attribute.nodeValue));
        return true;
    } // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
const $ea8f714b924c161c$var$DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        $ea8f714b924c161c$var$ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
function $ea8f714b924c161c$var$sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!$ea8f714b924c161c$var$allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$5 = "TemplateFactory";
const $ea8f714b924c161c$var$Default$4 = {
    allowList: $ea8f714b924c161c$var$DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const $ea8f714b924c161c$var$DefaultType$4 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const $ea8f714b924c161c$var$DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$var$TemplateFactory extends $ea8f714b924c161c$var$Config {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$4;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$4;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$5;
    }
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector: selector,
            entry: content
        }, $ea8f714b924c161c$var$DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = $ea8f714b924c161c$var$SelectorEngine.findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if ($ea8f714b924c161c$var$isElement(content)) {
            this._putElementInTemplate($ea8f714b924c161c$var$getElement(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? $ea8f714b924c161c$var$sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg(this) : arg;
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$4 = "tooltip";
const $ea8f714b924c161c$var$DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const $ea8f714b924c161c$var$CLASS_NAME_FADE$2 = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_MODAL = "modal";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$2 = "show";
const $ea8f714b924c161c$var$SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const $ea8f714b924c161c$var$SELECTOR_MODAL = `.${$ea8f714b924c161c$var$CLASS_NAME_MODAL}`;
const $ea8f714b924c161c$var$EVENT_MODAL_HIDE = "hide.bs.modal";
const $ea8f714b924c161c$var$TRIGGER_HOVER = "hover";
const $ea8f714b924c161c$var$TRIGGER_FOCUS = "focus";
const $ea8f714b924c161c$var$TRIGGER_CLICK = "click";
const $ea8f714b924c161c$var$TRIGGER_MANUAL = "manual";
const $ea8f714b924c161c$var$EVENT_HIDE$2 = "hide";
const $ea8f714b924c161c$var$EVENT_HIDDEN$2 = "hidden";
const $ea8f714b924c161c$var$EVENT_SHOW$2 = "show";
const $ea8f714b924c161c$var$EVENT_SHOWN$2 = "shown";
const $ea8f714b924c161c$var$EVENT_INSERTED = "inserted";
const $ea8f714b924c161c$var$EVENT_CLICK$1 = "click";
const $ea8f714b924c161c$var$EVENT_FOCUSIN$1 = "focusin";
const $ea8f714b924c161c$var$EVENT_FOCUSOUT$1 = "focusout";
const $ea8f714b924c161c$var$EVENT_MOUSEENTER = "mouseenter";
const $ea8f714b924c161c$var$EVENT_MOUSELEAVE = "mouseleave";
const $ea8f714b924c161c$var$AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: $ea8f714b924c161c$var$isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: $ea8f714b924c161c$var$isRTL() ? "right" : "left"
};
const $ea8f714b924c161c$var$Default$3 = {
    allowList: $ea8f714b924c161c$var$DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        0
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const $ea8f714b924c161c$var$DefaultType$3 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$28c660c63b792dea extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        if (typeof $6e3e02de5f56a2a3$exports === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config); // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null; // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$3;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$3;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$4;
    }
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        $ea8f714b924c161c$var$EventHandler.off(this._element.closest($ea8f714b924c161c$var$SELECTOR_MODAL), $ea8f714b924c161c$var$EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this.tip) this.tip.remove();
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_SHOW$2));
        const shadowRoot = $ea8f714b924c161c$var$findShadowRoot(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
         // todo v6 remove this OR make it optional
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container: container  } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_INSERTED));
        }
        if (this._popper) this._popper.update();
        else this._popper = this._createPopper(tip);
        tip.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))$ea8f714b924c161c$var$EventHandler.on(element, "mouseover", $ea8f714b924c161c$var$noop);
        const complete = ()=>{
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_SHOWN$2));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_HIDE$2));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))$ea8f714b924c161c$var$EventHandler.off(element, "mouseover", $ea8f714b924c161c$var$noop);
        this._activeTrigger[$ea8f714b924c161c$var$TRIGGER_CLICK] = false;
        this._activeTrigger[$ea8f714b924c161c$var$TRIGGER_FOCUS] = false;
        this._activeTrigger[$ea8f714b924c161c$var$TRIGGER_HOVER] = false;
        this._isHovered = null; // it is a trick to support manual triggering
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) tip.remove();
            this._element.removeAttribute("aria-describedby");
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_HIDDEN$2));
            this._disposePopper();
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6
        if (!tip) return null;
        tip.classList.remove($ea8f714b924c161c$var$CLASS_NAME_FADE$2, $ea8f714b924c161c$var$CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = $ea8f714b924c161c$var$getUID(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add($ea8f714b924c161c$var$CLASS_NAME_FADE$2);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new $ea8f714b924c161c$var$TemplateFactory({
            ...this._config,
            content: // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [$ea8f714b924c161c$var$SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains($ea8f714b924c161c$var$CLASS_NAME_FADE$2);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains($ea8f714b924c161c$var$CLASS_NAME_SHOW$2);
    }
    _createPopper(tip) {
        const placement = typeof this._config.placement === "function" ? this._config.placement.call(this, tip, this._element) : this._config.placement;
        const attachment = $ea8f714b924c161c$var$AttachmentMap[placement.toUpperCase()];
        return $6e3e02de5f56a2a3$exports.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset: offset  } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return typeof arg === "function" ? arg.call(this._element) : arg;
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...typeof this._config.popperConfig === "function" ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") $ea8f714b924c161c$var$EventHandler.on(this._element, this.constructor.eventName($ea8f714b924c161c$var$EVENT_CLICK$1), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== $ea8f714b924c161c$var$TRIGGER_MANUAL) {
                const eventIn = trigger === $ea8f714b924c161c$var$TRIGGER_HOVER ? this.constructor.eventName($ea8f714b924c161c$var$EVENT_MOUSEENTER) : this.constructor.eventName($ea8f714b924c161c$var$EVENT_FOCUSIN$1);
                const eventOut = trigger === $ea8f714b924c161c$var$TRIGGER_HOVER ? this.constructor.eventName($ea8f714b924c161c$var$EVENT_MOUSELEAVE) : this.constructor.eventName($ea8f714b924c161c$var$EVENT_FOCUSOUT$1);
                $ea8f714b924c161c$var$EventHandler.on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? $ea8f714b924c161c$var$TRIGGER_FOCUS : $ea8f714b924c161c$var$TRIGGER_HOVER] = true;
                    context._enter();
                });
                $ea8f714b924c161c$var$EventHandler.on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? $ea8f714b924c161c$var$TRIGGER_FOCUS : $ea8f714b924c161c$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        $ea8f714b924c161c$var$EventHandler.on(this._element.closest($ea8f714b924c161c$var$SELECTOR_MODAL), $ea8f714b924c161c$var$EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title); // DO NOT USE IT. Is only for backwards compatibility
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = $ea8f714b924c161c$var$Manipulator.getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if ($ea8f714b924c161c$var$DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : $ea8f714b924c161c$var$getElement(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for(const key in this._config)if (this.constructor.Default[key] !== this._config[key]) config[key] = this._config[key];
        config.selector = false;
        config.trigger = "manual"; // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$28c660c63b792dea.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$28c660c63b792dea);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$3 = "popover";
const $ea8f714b924c161c$var$SELECTOR_TITLE = ".popover-header";
const $ea8f714b924c161c$var$SELECTOR_CONTENT = ".popover-body";
const $ea8f714b924c161c$var$Default$2 = {
    ...$ea8f714b924c161c$export$28c660c63b792dea.Default,
    content: "",
    offset: [
        0,
        8
    ],
    placement: "right",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: "click"
};
const $ea8f714b924c161c$var$DefaultType$2 = {
    ...$ea8f714b924c161c$export$28c660c63b792dea.DefaultType,
    content: "(null|string|element|function)"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$5b6b19405a83ff9d extends $ea8f714b924c161c$export$28c660c63b792dea {
    // Getters
    static get Default() {
        return $ea8f714b924c161c$var$Default$2;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$2;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$3;
    }
    _isWithContent() {
        return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
        return {
            [$ea8f714b924c161c$var$SELECTOR_TITLE]: this._getTitle(),
            [$ea8f714b924c161c$var$SELECTOR_CONTENT]: this._getContent()
        };
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$5b6b19405a83ff9d.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$5b6b19405a83ff9d);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$2 = "scrollspy";
const $ea8f714b924c161c$var$DATA_KEY$2 = "bs.scrollspy";
const $ea8f714b924c161c$var$EVENT_KEY$2 = `.${$ea8f714b924c161c$var$DATA_KEY$2}`;
const $ea8f714b924c161c$var$DATA_API_KEY = ".data-api";
const $ea8f714b924c161c$var$EVENT_ACTIVATE = `activate${$ea8f714b924c161c$var$EVENT_KEY$2}`;
const $ea8f714b924c161c$var$EVENT_CLICK = `click${$ea8f714b924c161c$var$EVENT_KEY$2}`;
const $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$1 = `load${$ea8f714b924c161c$var$EVENT_KEY$2}${$ea8f714b924c161c$var$DATA_API_KEY}`;
const $ea8f714b924c161c$var$CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
const $ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1 = "active";
const $ea8f714b924c161c$var$SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const $ea8f714b924c161c$var$SELECTOR_TARGET_LINKS = "[href]";
const $ea8f714b924c161c$var$SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const $ea8f714b924c161c$var$SELECTOR_NAV_LINKS = ".nav-link";
const $ea8f714b924c161c$var$SELECTOR_NAV_ITEMS = ".nav-item";
const $ea8f714b924c161c$var$SELECTOR_LIST_ITEMS = ".list-group-item";
const $ea8f714b924c161c$var$SELECTOR_LINK_ITEMS = `${$ea8f714b924c161c$var$SELECTOR_NAV_LINKS}, ${$ea8f714b924c161c$var$SELECTOR_NAV_ITEMS} > ${$ea8f714b924c161c$var$SELECTOR_NAV_LINKS}, ${$ea8f714b924c161c$var$SELECTOR_LIST_ITEMS}`;
const $ea8f714b924c161c$var$SELECTOR_DROPDOWN = ".dropdown";
const $ea8f714b924c161c$var$SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
const $ea8f714b924c161c$var$Default$1 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [
        0.1,
        0.5,
        1
    ]
};
const $ea8f714b924c161c$var$DefaultType$1 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$a6472a5298a374be extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper
        this._targetLinks = new Map();
        this._observableSections = new Map();
        this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
        this._activeTarget = null;
        this._observer = null;
        this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        };
        this.refresh(); // initialize
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default$1;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType$1;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$2;
    }
    refresh() {
        this._initializeTargetsAndObservables();
        this._maybeEnableSmoothScroll();
        if (this._observer) this._observer.disconnect();
        else this._observer = this._getNewObserver();
        for (const section of this._observableSections.values())this._observer.observe(section);
    }
    dispose() {
        this._observer.disconnect();
        super.dispose();
    }
    _configAfterMerge(config) {
        // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
        config.target = $ea8f714b924c161c$var$getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only
        config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
        if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value)=>Number.parseFloat(value));
        return config;
    }
    _maybeEnableSmoothScroll() {
        if (!this._config.smoothScroll) return;
         // unregister any previous listeners
        $ea8f714b924c161c$var$EventHandler.off(this._config.target, $ea8f714b924c161c$var$EVENT_CLICK);
        $ea8f714b924c161c$var$EventHandler.on(this._config.target, $ea8f714b924c161c$var$EVENT_CLICK, $ea8f714b924c161c$var$SELECTOR_TARGET_LINKS, (event)=>{
            const observableSection = this._observableSections.get(event.target.hash);
            if (observableSection) {
                event.preventDefault();
                const root = this._rootElement || window;
                const height = observableSection.offsetTop - this._element.offsetTop;
                if (root.scrollTo) {
                    root.scrollTo({
                        top: height,
                        behavior: "smooth"
                    });
                    return;
                } // Chrome 60 doesn't support `scrollTo`
                root.scrollTop = height;
            }
        });
    }
    _getNewObserver() {
        const options = {
            root: this._rootElement,
            threshold: this._config.threshold,
            rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver((entries)=>this._observerCallback(entries), options);
    }
    _observerCallback(entries) {
        const targetElement = (entry)=>this._targetLinks.get(`#${entry.target.id}`);
        const activate = (entry)=>{
            this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
            this._process(targetElement(entry));
        };
        const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
        const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = parentScrollTop;
        for (const entry of entries){
            if (!entry.isIntersecting) {
                this._activeTarget = null;
                this._clearActiveClass(targetElement(entry));
                continue;
            }
            const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop
            if (userScrollsDown && entryIsLowerThanPrevious) {
                activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration
                if (!parentScrollTop) return;
                continue;
            } // if we are scrolling up, pick the smallest offsetTop
            if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
        }
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map();
        this._observableSections = new Map();
        const targetLinks = $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_TARGET_LINKS, this._config.target);
        for (const anchor of targetLinks){
            // ensure that the anchor has an id and is not disabled
            if (!anchor.hash || $ea8f714b924c161c$var$isDisabled(anchor)) continue;
            const observableSection = $ea8f714b924c161c$var$SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible
            if ($ea8f714b924c161c$var$isVisible(observableSection)) {
                this._targetLinks.set(anchor.hash, anchor);
                this._observableSections.set(anchor.hash, observableSection);
            }
        }
    }
    _process(target) {
        if (this._activeTarget === target) return;
        this._clearActiveClass(this._config.target);
        this._activeTarget = target;
        target.classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1);
        this._activateParents(target);
        $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_ACTIVATE, {
            relatedTarget: target
        });
    }
    _activateParents(target) {
        // Activate dropdown parents
        if (target.classList.contains($ea8f714b924c161c$var$CLASS_NAME_DROPDOWN_ITEM)) {
            $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_DROPDOWN_TOGGLE$1, target.closest($ea8f714b924c161c$var$SELECTOR_DROPDOWN)).classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1);
            return;
        }
        for (const listGroup of $ea8f714b924c161c$var$SelectorEngine.parents(target, $ea8f714b924c161c$var$SELECTOR_NAV_LIST_GROUP))// Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
        for (const item of $ea8f714b924c161c$var$SelectorEngine.prev(listGroup, $ea8f714b924c161c$var$SELECTOR_LINK_ITEMS))item.classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1);
    }
    _clearActiveClass(parent) {
        parent.classList.remove($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1);
        const activeNodes = $ea8f714b924c161c$var$SelectorEngine.find(`${$ea8f714b924c161c$var$SELECTOR_TARGET_LINKS}.${$ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1}`, parent);
        for (const node of activeNodes)node.classList.remove($ea8f714b924c161c$var$CLASS_NAME_ACTIVE$1);
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$a6472a5298a374be.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_LOAD_DATA_API$1, ()=>{
    for (const spy of $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_DATA_SPY))$ea8f714b924c161c$export$a6472a5298a374be.getOrCreateInstance(spy);
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$a6472a5298a374be);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME$1 = "tab";
const $ea8f714b924c161c$var$DATA_KEY$1 = "bs.tab";
const $ea8f714b924c161c$var$EVENT_KEY$1 = `.${$ea8f714b924c161c$var$DATA_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_HIDE$1 = `hide${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN$1 = `hidden${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_SHOW$1 = `show${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_SHOWN$1 = `shown${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_CLICK_DATA_API = `click${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_KEYDOWN = `keydown${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$EVENT_LOAD_DATA_API = `load${$ea8f714b924c161c$var$EVENT_KEY$1}`;
const $ea8f714b924c161c$var$ARROW_LEFT_KEY = "ArrowLeft";
const $ea8f714b924c161c$var$ARROW_RIGHT_KEY = "ArrowRight";
const $ea8f714b924c161c$var$ARROW_UP_KEY = "ArrowUp";
const $ea8f714b924c161c$var$ARROW_DOWN_KEY = "ArrowDown";
const $ea8f714b924c161c$var$CLASS_NAME_ACTIVE = "active";
const $ea8f714b924c161c$var$CLASS_NAME_FADE$1 = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_SHOW$1 = "show";
const $ea8f714b924c161c$var$CLASS_DROPDOWN = "dropdown";
const $ea8f714b924c161c$var$SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const $ea8f714b924c161c$var$SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const $ea8f714b924c161c$var$NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
const $ea8f714b924c161c$var$SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const $ea8f714b924c161c$var$SELECTOR_OUTER = ".nav-item, .list-group-item";
const $ea8f714b924c161c$var$SELECTOR_INNER = `.nav-link${$ea8f714b924c161c$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${$ea8f714b924c161c$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${$ea8f714b924c161c$var$NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`
const $ea8f714b924c161c$var$SELECTOR_INNER_ELEM = `${$ea8f714b924c161c$var$SELECTOR_INNER}, ${$ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE}`;
const $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE_ACTIVE = `.${$ea8f714b924c161c$var$CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${$ea8f714b924c161c$var$CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${$ea8f714b924c161c$var$CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class $ea8f714b924c161c$export$3e41faf802a29e71 extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element){
        super(element);
        this._parent = this._element.closest($ea8f714b924c161c$var$SELECTOR_TAB_PANEL);
        if (!this._parent) return; // todo: should Throw exception on v6
         // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME$1;
    }
    show() {
        // Shows this elem and deactivate the active sibling if exists
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
         // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? $ea8f714b924c161c$var$EventHandler.trigger(active, $ea8f714b924c161c$var$EVENT_HIDE$1, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(innerElem, $ea8f714b924c161c$var$EVENT_SHOW$1, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add($ea8f714b924c161c$var$CLASS_NAME_ACTIVE);
        this._activate($ea8f714b924c161c$var$getElementFromSelector(element)); // Search and activate/show the proper section
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW$1);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            $ea8f714b924c161c$var$EventHandler.trigger(element, $ea8f714b924c161c$var$EVENT_SHOWN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_FADE$1));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate($ea8f714b924c161c$var$getElementFromSelector(element)); // Search and deactivate the shown section too
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW$1);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            $ea8f714b924c161c$var$EventHandler.trigger(element, $ea8f714b924c161c$var$EVENT_HIDDEN$1, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_FADE$1));
    }
    _keydown(event) {
        if (![
            $ea8f714b924c161c$var$ARROW_LEFT_KEY,
            $ea8f714b924c161c$var$ARROW_RIGHT_KEY,
            $ea8f714b924c161c$var$ARROW_UP_KEY,
            $ea8f714b924c161c$var$ARROW_DOWN_KEY
        ].includes(event.key)) return;
        event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        event.preventDefault();
        const isNext = [
            $ea8f714b924c161c$var$ARROW_RIGHT_KEY,
            $ea8f714b924c161c$var$ARROW_DOWN_KEY
        ].includes(event.key);
        const nextActiveElement = $ea8f714b924c161c$var$getNextActiveElement(this._getChildren().filter((element)=>!$ea8f714b924c161c$var$isDisabled(element)), event.target, isNext, true);
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            $ea8f714b924c161c$export$3e41faf802a29e71.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        // collection of inner elements
        return $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab"); // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = $ea8f714b924c161c$var$getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `#${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains($ea8f714b924c161c$var$CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = $ea8f714b924c161c$var$SelectorEngine.findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle($ea8f714b924c161c$var$SELECTOR_DROPDOWN_TOGGLE, $ea8f714b924c161c$var$CLASS_NAME_ACTIVE);
        toggle($ea8f714b924c161c$var$SELECTOR_DROPDOWN_MENU, $ea8f714b924c161c$var$CLASS_NAME_SHOW$1);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains($ea8f714b924c161c$var$CLASS_NAME_ACTIVE);
    }
    _getInnerElement(elem) {
        return elem.matches($ea8f714b924c161c$var$SELECTOR_INNER_ELEM) ? elem : $ea8f714b924c161c$var$SelectorEngine.findOne($ea8f714b924c161c$var$SELECTOR_INNER_ELEM, elem);
    }
    _getOuterElement(elem) {
        return elem.closest($ea8f714b924c161c$var$SELECTOR_OUTER) || elem;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$3e41faf802a29e71.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$EventHandler.on(document, $ea8f714b924c161c$var$EVENT_CLICK_DATA_API, $ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if ($ea8f714b924c161c$var$isDisabled(this)) return;
    $ea8f714b924c161c$export$3e41faf802a29e71.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ $ea8f714b924c161c$var$EventHandler.on(window, $ea8f714b924c161c$var$EVENT_LOAD_DATA_API, ()=>{
    for (const element of $ea8f714b924c161c$var$SelectorEngine.find($ea8f714b924c161c$var$SELECTOR_DATA_TOGGLE_ACTIVE))$ea8f714b924c161c$export$3e41faf802a29e71.getOrCreateInstance(element);
});
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$3e41faf802a29e71);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ea8f714b924c161c$var$NAME = "toast";
const $ea8f714b924c161c$var$DATA_KEY = "bs.toast";
const $ea8f714b924c161c$var$EVENT_KEY = `.${$ea8f714b924c161c$var$DATA_KEY}`;
const $ea8f714b924c161c$var$EVENT_MOUSEOVER = `mouseover${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_MOUSEOUT = `mouseout${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_FOCUSIN = `focusin${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_FOCUSOUT = `focusout${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_HIDE = `hide${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_HIDDEN = `hidden${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_SHOW = `show${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$EVENT_SHOWN = `shown${$ea8f714b924c161c$var$EVENT_KEY}`;
const $ea8f714b924c161c$var$CLASS_NAME_FADE = "fade";
const $ea8f714b924c161c$var$CLASS_NAME_HIDE = "hide"; // @deprecated - kept here only for backwards compatibility
const $ea8f714b924c161c$var$CLASS_NAME_SHOW = "show";
const $ea8f714b924c161c$var$CLASS_NAME_SHOWING = "showing";
const $ea8f714b924c161c$var$DefaultType = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
};
const $ea8f714b924c161c$var$Default = {
    animation: true,
    autohide: true,
    delay: 5000
};
/**
 * Class definition
 */ class $ea8f714b924c161c$export$8d8dc7d5f743331b extends $ea8f714b924c161c$var$BaseComponent {
    constructor(element, config){
        super(element, config);
        this._timeout = null;
        this._hasMouseInteraction = false;
        this._hasKeyboardInteraction = false;
        this._setListeners();
    }
    static get Default() {
        return $ea8f714b924c161c$var$Default;
    }
    static get DefaultType() {
        return $ea8f714b924c161c$var$DefaultType;
    }
    static get NAME() {
        return $ea8f714b924c161c$var$NAME;
    }
    show() {
        const showEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOW);
        if (showEvent.defaultPrevented) return;
        this._clearTimeout();
        if (this._config.animation) this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_FADE);
        const complete = ()=>{
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOWING);
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_SHOWN);
            this._maybeScheduleHide();
        };
        this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_HIDE); // @deprecated
        $ea8f714b924c161c$var$reflow(this._element);
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOW, $ea8f714b924c161c$var$CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    hide() {
        if (!this.isShown()) return;
        const hideEvent = $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDE);
        if (hideEvent.defaultPrevented) return;
        const complete = ()=>{
            this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_HIDE); // @deprecated
            this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOWING, $ea8f714b924c161c$var$CLASS_NAME_SHOW);
            $ea8f714b924c161c$var$EventHandler.trigger(this._element, $ea8f714b924c161c$var$EVENT_HIDDEN);
        };
        this._element.classList.add($ea8f714b924c161c$var$CLASS_NAME_SHOWING);
        this._queueCallback(complete, this._element, this._config.animation);
    }
    dispose() {
        this._clearTimeout();
        if (this.isShown()) this._element.classList.remove($ea8f714b924c161c$var$CLASS_NAME_SHOW);
        super.dispose();
    }
    isShown() {
        return this._element.classList.contains($ea8f714b924c161c$var$CLASS_NAME_SHOW);
    }
    _maybeScheduleHide() {
        if (!this._config.autohide) return;
        if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
        this._timeout = setTimeout(()=>{
            this.hide();
        }, this._config.delay);
    }
    _onInteraction(event, isInteracting) {
        switch(event.type){
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = isInteracting;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = isInteracting;
                break;
        }
        if (isInteracting) {
            this._clearTimeout();
            return;
        }
        const nextElement = event.relatedTarget;
        if (this._element === nextElement || this._element.contains(nextElement)) return;
        this._maybeScheduleHide();
    }
    _setListeners() {
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_MOUSEOVER, (event)=>this._onInteraction(event, true));
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_MOUSEOUT, (event)=>this._onInteraction(event, false));
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_FOCUSIN, (event)=>this._onInteraction(event, true));
        $ea8f714b924c161c$var$EventHandler.on(this._element, $ea8f714b924c161c$var$EVENT_FOCUSOUT, (event)=>this._onInteraction(event, false));
    }
    _clearTimeout() {
        clearTimeout(this._timeout);
        this._timeout = null;
    }
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $ea8f714b924c161c$export$8d8dc7d5f743331b.getOrCreateInstance(this, config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config](this);
            }
        });
    }
}
/**
 * Data API implementation
 */ $ea8f714b924c161c$var$enableDismissTrigger($ea8f714b924c161c$export$8d8dc7d5f743331b);
/**
 * jQuery
 */ $ea8f714b924c161c$var$defineJQueryPlugin($ea8f714b924c161c$export$8d8dc7d5f743331b);




//# sourceMappingURL=index.86ffdba4.js.map
