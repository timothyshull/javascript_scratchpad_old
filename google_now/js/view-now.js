var g, ba = ba || {}, l = this;
function p(a) {
    return void 0 !== a
}
function ca() {
}
function da(a) {
    var b = typeof a;
    if ("object" == b)if (a) {
        if (a instanceof Array)return "array";
        if (a instanceof Object)return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return "function"
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call)return "object";
    return b
}
function r(a) {
    return "array" == da(a)
}
function ea(a) {
    var b = da(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
    return "string" == typeof a
}
function fa(a) {
    return "number" == typeof a
}
function ha(a) {
    return "function" == da(a)
}
function ia(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function na(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function oa(a, b, c) {
    if (!a)throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}
function u(a, b, c) {
    u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
    return u.apply(null, arguments)
}
function pa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var x = Date.now || function () {
        return +new Date
    };
function qa(a, b) {
    var c = a.split("."), d = l;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)!c.length && p(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}
function z(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.A = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Wh = function (a, c, f) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)h[k - 2] = arguments[k];
        return b.prototype[c].apply(a, h)
    }
}
Function.prototype.bind = Function.prototype.bind || function (a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return u.apply(null, c)
        }
        return u(this, a)
    };
function ra(a) {
    if (Error.captureStackTrace)Error.captureStackTrace(this, ra); else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
z(ra, Error);
ra.prototype.name = "CustomError";
var ta;
function ua(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;)d += c.shift() + e.shift();
    return d + c.join("%s")
}
var va = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};
function wa(a) {
    if (!xa.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(ya, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(za, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Aa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Ba, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ca, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Da, "&#0;"));
    return a
}
var ya = /&/g, za = /</g, Aa = />/g, Ba = /"/g, Ca = /'/g, Da = /\x00/g, xa = /[\x00&<>"']/;
function Ea(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}
function Fa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}
function Ga(a) {
    var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
};function Ja(a, b) {
    b.unshift(a);
    ra.call(this, ua.apply(null, b));
    b.shift()
}
z(Ja, ra);
Ja.prototype.name = "AssertionError";
function Ka(a, b) {
    throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};var La = Array.prototype, Ma = La.indexOf ? function (a, b, c) {
    return La.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (t(a))return t(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return -1
}, Na = La.forEach ? function (a, b, c) {
    La.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, Oa = La.filter ? function (a, b, c) {
    return La.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f =
        0, h = t(a) ? a.split("") : a, k = 0; k < d; k++)if (k in h) {
        var m = h[k];
        b.call(c, m, k, a) && (e[f++] = m)
    }
    return e
}, Pa = La.map ? function (a, b, c) {
    return La.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = t(a) ? a.split("") : a, h = 0; h < d; h++)h in f && (e[h] = b.call(c, f[h], h, a));
    return e
};
function Qa(a) {
    var b;
    a:{
        b = Ra;
        for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a
        }
        b = -1
    }
    return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
}
function Ta(a, b) {
    return 0 <= Ma(a, b)
}
function Ua(a, b) {
    var c = Ma(a, b), d;
    (d = 0 <= c) && La.splice.call(a, c, 1);
    return d
}
function Va(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return []
}
function Wa(a, b, c, d) {
    return La.splice.apply(a, Xa(arguments, 1))
}
function Xa(a, b, c) {
    return 2 >= arguments.length ? La.slice.call(a, b) : La.slice.call(a, b, c)
}
function Ya(a, b) {
    a.sort(b || ab)
}
function ab(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
};var bb;
a:{
    var cb = l.navigator;
    if (cb) {
        var db = cb.userAgent;
        if (db) {
            bb = db;
            break a
        }
    }
    bb = ""
}
function A(a) {
    return -1 != bb.indexOf(a)
};function eb(a, b, c) {
    for (var d in a)b.call(c, a[d], d, a)
}
function fb(a, b) {
    for (var c in a)if (b.call(void 0, a[c], c, a))return !0;
    return !1
}
function gb(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
}
function hb(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = d;
    return b
}
function ib(a) {
    for (var b in a)return !1;
    return !0
}
var jb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function kb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < jb.length; f++)c = jb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}
function lb(a) {
    var b = arguments.length;
    if (1 == b && r(arguments[0]))return lb.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)c[arguments[d]] = !0;
    return c
};function mb() {
    return A("Opera") || A("OPR")
}
function nb() {
    return (A("Chrome") || A("CriOS")) && !mb() && !A("Edge")
};function ob() {
    return A("iPhone") && !A("iPod") && !A("iPad")
};var pb = mb(), B = A("Trident") || A("MSIE"), qb = A("Edge"), C = A("Gecko") && !(-1 != bb.toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"), F = -1 != bb.toLowerCase().indexOf("webkit") && !A("Edge"), rb = F && A("Mobile"), sb = A("Macintosh"), tb = A("Android"), ub = ob(), vb = A("iPad");
function wb() {
    var a = bb;
    if (C)return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (qb)return /Edge\/([\d\.]+)/.exec(a);
    if (B)return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (F)return /WebKit\/(\S+)/.exec(a)
}
function xb() {
    var a = l.document;
    return a ? a.documentMode : void 0
}
var yb = function () {
    if (pb && l.opera) {
        var a = l.opera.version;
        return ha(a) ? a() : a
    }
    var a = "", b = wb();
    b && (a = b ? b[1] : "");
    return B && (b = xb(), b > parseFloat(a)) ? String(b) : a
}(), zb = {};
function G(a) {
    var b;
    if (!(b = zb[a])) {
        b = 0;
        for (var c = va(String(yb)).split("."), d = va(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "", k = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var n = m.exec(h) || ["", "", ""], w = q.exec(k) || ["", "", ""];
                if (0 == n[0].length && 0 == w[0].length)break;
                b = Ea(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == w[1].length ? 0 : parseInt(w[1], 10)) || Ea(0 == n[2].length, 0 == w[2].length) || Ea(n[2], w[2])
            } while (0 == b)
        }
        b = zb[a] = 0 <= b
    }
    return b
}
var Ab = l.document, Bb = Ab && B ? xb() || ("CSS1Compat" == Ab.compatMode ? parseInt(yb, 10) : 5) : void 0;
var Cb = !B || 9 <= Bb, Db = !C && !B || B && 9 <= Bb || C && G("1.9.1");
B && G("9");
var Eb = lb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
function Fb() {
    this.Pd = "";
    this.Gg = Gb
}
Fb.prototype.Nb = !0;
Fb.prototype.Jb = function () {
    return this.Pd
};
Fb.prototype.toString = function () {
    return "Const{" + this.Pd + "}"
};
function Hb(a) {
    if (a instanceof Fb && a.constructor === Fb && a.Gg === Gb)return a.Pd;
    Ka("expected object of type Const, got '" + a + "'");
    return "type_error:Const"
}
var Gb = {};
function Ib(a) {
    var b = new Fb;
    b.Pd = a;
    return b
};function Jb() {
    this.Id = "";
    this.Eg = Kb
}
Jb.prototype.Nb = !0;
var Kb = {};
Jb.prototype.Jb = function () {
    return this.Id
};
Jb.prototype.toString = function () {
    return "SafeStyle{" + this.Id + "}"
};
Jb.prototype.nd = function (a) {
    this.Id = a;
    return this
};
var Lb = (new Jb).nd(""), Mb = /^[-,."'%_!# a-zA-Z0-9]+$/;
function Nb() {
    this.Qa = "";
    this.Fg = Qb
}
g = Nb.prototype;
g.Nb = !0;
g.Jb = function () {
    return this.Qa
};
g.we = !0;
g.qc = function () {
    return 1
};
g.toString = function () {
    return "SafeUrl{" + this.Qa + "}"
};
var Qb = {};
function Rb() {
    this.Jd = "";
    this.Hg = Sb
}
g = Rb.prototype;
g.Nb = !0;
g.Jb = function () {
    return this.Jd
};
g.we = !0;
g.qc = function () {
    return 1
};
g.toString = function () {
    return "TrustedResourceUrl{" + this.Jd + "}"
};
function Tb(a) {
    if (a instanceof Rb && a.constructor === Rb && a.Hg === Sb)return a.Jd;
    Ka("expected object of type TrustedResourceUrl, got '" + a + "'");
    return "type_error:TrustedResourceUrl"
}
var Sb = {};
function Ub(a) {
    var b = new Rb;
    b.Jd = a;
    return b
};function Vb() {
    this.Qa = "";
    this.Dg = Wb;
    this.nf = null
}
g = Vb.prototype;
g.we = !0;
g.qc = function () {
    return this.nf
};
g.Nb = !0;
g.Jb = function () {
    return this.Qa
};
g.toString = function () {
    return "SafeHtml{" + this.Qa + "}"
};
function Xb(a) {
    if (a instanceof Vb && a.constructor === Vb && a.Dg === Wb)return a.Qa;
    Ka("expected object of type SafeHtml, got '" + a + "'");
    return "type_error:SafeHtml"
}
var Yb = /^[a-zA-Z0-9-]+$/, Zb = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0
}, $b = {EMBED: !0, IFRAME: !0, LINK: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, TEMPLATE: !0};
function ac(a, b, c) {
    if (!Yb.test(a))throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in $b)throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    return bc(a, b, c)
}
function cc(a) {
    function b(a) {
        if (r(a))Na(a, b); else {
            if (!(a instanceof Vb)) {
                var f = null;
                a.we && (f = a.qc());
                a = dc(wa(a.Nb ? a.Jb() : String(a)), f)
            }
            d += Xb(a);
            a = a.qc();
            0 == c ? c = a : 0 != a && c != a && (c = null)
        }
    }

    var c = 0, d = "";
    Na(arguments, b);
    return dc(d, c)
}
var Wb = {};
function dc(a, b) {
    return (new Vb).nd(a, b)
}
Vb.prototype.nd = function (a, b) {
    this.Qa = a;
    this.nf = b;
    return this
};
function bc(a, b, c) {
    var d = null, e = "<" + a;
    if (b)for (var f in b) {
        if (!Yb.test(f))throw Error('Invalid attribute name "' + f + '".');
        var h = b[f];
        if (null != h) {
            var k, m = a;
            k = f;
            if (h instanceof Fb)h = Hb(h); else if ("style" == k.toLowerCase()) {
                if (!ia(h))throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                if (!(h instanceof Jb)) {
                    var m = "", q = void 0;
                    for (q in h) {
                        if (!/^[-_a-zA-Z0-9]+$/.test(q))throw Error("Name allows only [-_a-zA-Z0-9], got: " + q);
                        var n = h[q];
                        if (null !=
                            n) {
                            if (n instanceof Fb)n = Hb(n); else if (Mb.test(n)) {
                                for (var w = !0, v = !0, T = 0; T < n.length; T++) {
                                    var E = n.charAt(T);
                                    "'" == E && v ? w = !w : '"' == E && w && (v = !v)
                                }
                                w && v || (Ka("String value requires balanced quotes, got: " + n), n = "zClosurez")
                            } else Ka("String value allows only [-,.\"'%_!# a-zA-Z0-9], got: " + n), n = "zClosurez";
                            m += q + ":" + n + ";"
                        }
                    }
                    h = m ? (new Jb).nd(m) : Lb
                }
                m = void 0;
                h instanceof Jb && h.constructor === Jb && h.Eg === Kb ? m = h.Id : (Ka("expected object of type SafeStyle, got '" + h + "'"), m = "type_error:SafeStyle");
                h = m
            } else {
                if (/^on/i.test(k))throw Error('Attribute "' +
                    k + '" requires goog.string.Const value, "' + h + '" given.');
                if (k.toLowerCase() in Zb)if (h instanceof Rb)h = Tb(h); else if (h instanceof Nb)h instanceof Nb && h.constructor === Nb && h.Fg === Qb ? h = h.Qa : (Ka("expected object of type SafeUrl, got '" + h + "'"), h = "type_error:SafeUrl"); else throw Error('Attribute "' + k + '" on tag "' + m + '" requires goog.html.SafeUrl or goog.string.Const value, "' + h + '" given.');
            }
            h.Nb && (h = h.Jb());
            k = k + '="' + wa(String(h)) + '"';
            e += " " + k
        }
    }
    null != c ? r(c) || (c = [c]) : c = [];
    !0 === Eb[a.toLowerCase()] ? e += ">" : (d =
        cc(c), e += ">" + Xb(d) + "</" + a + ">", d = d.qc());
    (a = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a) ? 0 : null);
    return dc(e, d)
}
dc("<!DOCTYPE html>", 0);
dc("", 0);
function ec(a, b) {
    this.x = p(a) ? a : 0;
    this.y = p(b) ? b : 0
}
g = ec.prototype;
g.clone = function () {
    return new ec(this.x, this.y)
};
g.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
};
g.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function (a, b) {
    a instanceof ec ? (this.x += a.x, this.y += a.y) : (this.x += a, fa(b) && (this.y += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};
function H(a, b) {
    this.width = a;
    this.height = b
}
g = H.prototype;
g.clone = function () {
    return new H(this.width, this.height)
};
g.toString = function () {
    return "(" + this.width + " x " + this.height + ")"
};
g.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
function fc(a) {
    return a ? new gc(hc(a)) : ta || (ta = new gc)
}
function J(a) {
    return t(a) ? document.getElementById(a) : a
}
function L(a, b) {
    var c = b || document, d = null;
    return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : ic("*", a, b)[0]) || null
}
function ic(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, f = 0, h; h = c[f]; f++)a == h.nodeName && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; h = c[f]; f++)a = h.className, "function" == typeof a.split && Ta(a.split(/\s+/), b) && (d[e++] = h);
        d.length = e;
        return d
    }
    return c
}
function jc(a, b) {
    eb(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : kc.hasOwnProperty(d) ? a.setAttribute(kc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var kc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function M(a) {
    a = (a || window).document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new H(a.clientWidth, a.clientHeight)
}
function lc(a) {
    var b = a.Gh ? a.Gh : F || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
    a = a.parentWindow || a.defaultView;
    return B && G("10") && a.pageYOffset != b.scrollTop ? new ec(b.scrollLeft, b.scrollTop) : new ec(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function mc(a, b, c) {
    return nc(document, arguments)
}
function nc(a, b) {
    var c = b[0], d = b[1];
    if (!Cb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', wa(d.name), '"');
        if (d.type) {
            c.push(' type="', wa(d.type), '"');
            var e = {};
            kb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (t(d) ? c.className = d : r(d) ? c.className = d.join(" ") : jc(c, d));
    2 < b.length && oc(a, c, b, 2);
    return c
}
function oc(a, b, c, d) {
    function e(c) {
        c && b.appendChild(t(c) ? a.createTextNode(c) : c)
    }

    for (; d < c.length; d++) {
        var f = c[d];
        !ea(f) || ia(f) && 0 < f.nodeType ? e(f) : Na(pc(f) ? Va(f) : f, e)
    }
}
function qc(a, b) {
    oc(hc(a), a, arguments, 1)
}
function rc(a) {
    for (var b; b = a.firstChild;)a.removeChild(b)
}
function sc(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
}
function tc(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
}
function uc(a, b) {
    if (a.contains && 1 == b.nodeType)return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)b = b.parentNode;
    return b == a
}
function hc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function vc(a) {
    return a.contentDocument || a.contentWindow.document
}
function wc(a, b) {
    if ("textContent" in a)a.textContent = b; else if (3 == a.nodeType)a.data = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else rc(a), a.appendChild(hc(a).createTextNode(String(b)))
}
function pc(a) {
    if (a && "number" == typeof a.length) {
        if (ia(a))return "function" == typeof a.item || "string" == typeof a.item;
        if (ha(a))return "function" == typeof a.item
    }
    return !1
}
function gc(a) {
    this.ba = a || l.document || document
}
g = gc.prototype;
g.na = fc;
g.b = function (a) {
    return t(a) ? this.ba.getElementById(a) : a
};
g.kc = function (a, b, c) {
    return nc(this.ba, arguments)
};
g.createElement = function (a) {
    return this.ba.createElement(a)
};
g.createTextNode = function (a) {
    return this.ba.createTextNode(String(a))
};
function xc(a) {
    return "CSS1Compat" == a.ba.compatMode
}
function yc(a) {
    a = a.ba;
    return a.parentWindow || a.defaultView
}
g.appendChild = function (a, b) {
    a.appendChild(b)
};
g.append = qc;
g.canHaveChildren = function (a) {
    if (1 != a.nodeType)return !1;
    switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case "INPUT":
        case "IFRAME":
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
            return !1
    }
    return !0
};
g.removeNode = sc;
g.yf = function (a) {
    return Db && void 0 != a.children ? a.children : Oa(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
};
g.contains = uc;
function zc(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = zc.prototype;
g.clone = function () {
    return new zc(this.top, this.right, this.bottom, this.left)
};
g.toString = function () {
    return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
};
g.contains = function (a) {
    return this && a ? a instanceof zc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.expand = function (a, b, c, d) {
    ia(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
g.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function (a, b) {
    a instanceof ec ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
function Ac(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Ac.prototype;
g.clone = function () {
    return new Ac(this.left, this.top, this.width, this.height)
};
g.toString = function () {
    return "(" + this.left + ", " + this.top + " - " + this.width + "w x " + this.height + "h)"
};
g.contains = function (a) {
    return a instanceof Ac ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.fd = function () {
    return new H(this.width, this.height)
};
g.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function (a, b) {
    a instanceof ec ? (this.left += a.x, this.top += a.y) : (this.left += a, fa(b) && (this.top += b));
    return this
};
g.scale = function (a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
function N(a, b, c) {
    if (t(b))(b = Bc(a, b)) && (a.style[b] = c); else for (var d in b) {
        c = a;
        var e = b[d], f = Bc(c, d);
        f && (c.style[f] = e)
    }
}
var Cc = {};
function Bc(a, b) {
    var c = Cc[b];
    if (!c) {
        var d = Fa(b), c = d;
        void 0 === a.style[d] && (d = (F ? "Webkit" : C ? "Moz" : B ? "ms" : pb ? "O" : null) + Ga(d), void 0 !== a.style[d] && (c = d));
        Cc[b] = c
    }
    return c
}
function Dc(a, b) {
    var c = hc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function Ec(a) {
    a = a ? hc(a) : document;
    return !B || 9 <= Bb || xc(fc(a)) ? a.documentElement : a.body
}
function Fc() {
    var a = document, b = a.body, a = a.documentElement;
    return new ec(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}
function Gc(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {left: 0, top: 0, right: 0, bottom: 0}
    }
    B && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function Hc(a) {
    var b = hc(a), c = new ec(0, 0), d = Ec(b);
    if (a == d)return c;
    a = Gc(a);
    b = fc(b);
    b = lc(b.ba);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}
function Ic(a, b, c) {
    if (b instanceof H)c = b.height, b = b.width; else if (void 0 == c)throw Error("missing height argument");
    a.style.width = Jc(b);
    a.style.height = Jc(c)
}
function Jc(a) {
    "number" == typeof a && (a = Math.round(a) + "px");
    return a
}
function Kc(a) {
    var b = Lc;
    if ("none" != (Dc(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display))return b(a);
    var c = a.style, d = c.display, e = c.visibility, f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}
function Lc(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = F && !b && !c;
    return p(b) && !d || !a.getBoundingClientRect ? new H(b, c) : (a = Gc(a), new H(a.right - a.left, a.bottom - a.top))
}
function Mc(a) {
    var b = Hc(a);
    a = Kc(a);
    return new Ac(b.x, b.y, a.width, a.height)
}
function Nc(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}
function Oc(a, b, c, d) {
    if (/^\d+px?$/.test(b))return parseInt(b, 10);
    var e = a.style[c], f = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = e;
    a.runtimeStyle[c] = f;
    return b
}
function Pc(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? Oc(a, c, "left", "pixelLeft") : 0
}
function Qc(a, b) {
    if (B) {
        var c = Pc(a, b + "Left"), d = Pc(a, b + "Right"), e = Pc(a, b + "Top"), f = Pc(a, b + "Bottom");
        return new zc(e, d, f, c)
    }
    c = Dc(a, b + "Left");
    d = Dc(a, b + "Right");
    e = Dc(a, b + "Top");
    f = Dc(a, b + "Bottom");
    return new zc(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
}
var Rc = {thin: 2, medium: 4, thick: 6};
function Sc(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in Rc ? Rc[c] : Oc(a, c, "left", "pixelLeft")
}
B && G(12);
function Tc() {
    0 != Uc && (Vc[this[ja] || (this[ja] = ++ka)] = this);
    this.Ja = this.Ja;
    this.mb = this.mb
}
var Uc = 0, Vc = {};
Tc.prototype.Ja = !1;
Tc.prototype.Za = function () {
    if (!this.Ja && (this.Ja = !0, this.l(), 0 != Uc)) {
        var a = this[ja] || (this[ja] = ++ka);
        delete Vc[a]
    }
};
Tc.prototype.l = function () {
    if (this.mb)for (; this.mb.length;)this.mb.shift()()
};
function Wc(a) {
    a && "function" == typeof a.Za && a.Za()
};var Xc = !B || 9 <= Bb, Yc = B && !G("9");
!F || G("528");
C && G("1.9b") || B && G("8") || pb && G("9.5") || F && G("528");
C && !G("8") || B && G("9");
function O(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.nb = !1;
    this.fg = !0
}
O.prototype.stopPropagation = function () {
    this.nb = !0
};
O.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.fg = !1
};
function Zc(a) {
    Zc[" "](a);
    return a
}
Zc[" "] = ca;
function $c(a, b) {
    O.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.ab = this.state = null;
    a && this.ca(a, b)
}
z($c, O);
$c.prototype.ca = function (a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (C) {
            var e;
            a:{
                try {
                    Zc(d.nodeName);
                    e = !0;
                    break a
                } catch (f) {
                }
                e = !1
            }
            e || (d = null)
        }
    } else"mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = F || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = F || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.ab = a;
    a.defaultPrevented && this.preventDefault()
};
$c.prototype.stopPropagation = function () {
    $c.A.stopPropagation.call(this);
    this.ab.stopPropagation ? this.ab.stopPropagation() : this.ab.cancelBubble = !0
};
$c.prototype.preventDefault = function () {
    $c.A.preventDefault.call(this);
    var a = this.ab;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = !1, Yc)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
var ad = "closure_listenable_" + (1E6 * Math.random() | 0);
function bd(a) {
    return !(!a || !a[ad])
}
var cd = 0;
function dd(a, b, c, d, e) {
    this.listener = a;
    this.Kd = null;
    this.src = b;
    this.type = c;
    this.hc = !!d;
    this.jd = e;
    this.key = ++cd;
    this.ac = this.Uc = !1
}
function ed(a) {
    a.ac = !0;
    a.listener = null;
    a.Kd = null;
    a.src = null;
    a.jd = null
};function fd(a) {
    this.src = a;
    this.C = {};
    this.Nc = 0
}
g = fd.prototype;
g.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.C[f];
    a || (a = this.C[f] = [], this.Nc++);
    var h = gd(a, b, d, e);
    -1 < h ? (b = a[h], c || (b.Uc = !1)) : (b = new dd(b, this.src, f, !!d, e), b.Uc = c, a.push(b));
    return b
};
g.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.C))return !1;
    var e = this.C[a];
    b = gd(e, b, c, d);
    return -1 < b ? (ed(e[b]), La.splice.call(e, b, 1), 0 == e.length && (delete this.C[a], this.Nc--), !0) : !1
};
function hd(a, b) {
    var c = b.type;
    if (!(c in a.C))return !1;
    var d = Ua(a.C[c], b);
    d && (ed(b), 0 == a.C[c].length && (delete a.C[c], a.Nc--));
    return d
}
g.$b = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.C)if (!a || c == a) {
        for (var d = this.C[c], e = 0; e < d.length; e++)++b, ed(d[e]);
        delete this.C[c];
        this.Nc--
    }
    return b
};
g.sc = function (a, b, c, d) {
    a = this.C[a.toString()];
    var e = -1;
    a && (e = gd(a, b, c, d));
    return -1 < e ? a[e] : null
};
g.hasListener = function (a, b) {
    var c = p(a), d = c ? a.toString() : "", e = p(b);
    return fb(this.C, function (a) {
        for (var h = 0; h < a.length; ++h)if (!(c && a[h].type != d || e && a[h].hc != b))return !0;
        return !1
    })
};
function gd(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.ac && f.listener == b && f.hc == !!c && f.jd == d)return e
    }
    return -1
};var id = "closure_lm_" + (1E6 * Math.random() | 0), jd = {}, kd = 0;
function P(a, b, c, d, e) {
    if (r(b)) {
        for (var f = 0; f < b.length; f++)P(a, b[f], c, d, e);
        return null
    }
    c = ld(c);
    return bd(a) ? a.da(b, c, d, e) : od(a, b, c, !1, d, e)
}
function od(a, b, c, d, e, f) {
    if (!b)throw Error("Invalid event type");
    var h = !!e, k = pd(a);
    k || (a[id] = k = new fd(a));
    c = k.add(b, c, d, e, f);
    if (c.Kd)return c;
    d = qd();
    c.Kd = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)a.addEventListener(b.toString(), d, h); else if (a.attachEvent)a.attachEvent(rd(b.toString()), d); else throw Error("addEventListener and attachEvent are unavailable.");
    kd++;
    return c
}
function qd() {
    var a = sd, b = Xc ? function (c) {
        return a.call(b.src, b.listener, c)
    } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c)return c
    };
    return b
}
function td(a, b, c, d, e) {
    if (r(b)) {
        for (var f = 0; f < b.length; f++)td(a, b[f], c, d, e);
        return null
    }
    c = ld(c);
    return bd(a) ? a.Be(b, c, d, e) : od(a, b, c, !0, d, e)
}
function Q(a, b, c, d, e) {
    if (r(b))for (var f = 0; f < b.length; f++)Q(a, b[f], c, d, e); else c = ld(c), bd(a) ? a.Sd(b, c, d, e) : a && (a = pd(a)) && (b = a.sc(b, c, !!d, e)) && ud(b)
}
function ud(a) {
    if (fa(a) || !a || a.ac)return !1;
    var b = a.src;
    if (bd(b))return hd(b.W, a);
    var c = a.type, d = a.Kd;
    b.removeEventListener ? b.removeEventListener(c, d, a.hc) : b.detachEvent && b.detachEvent(rd(c), d);
    kd--;
    (c = pd(b)) ? (hd(c, a), 0 == c.Nc && (c.src = null, b[id] = null)) : ed(a);
    return !0
}
function vd(a) {
    if (a)if (bd(a))a.W && a.W.$b(void 0); else if (a = pd(a)) {
        var b = 0, c;
        for (c in a.C)for (var d = a.C[c].concat(), e = 0; e < d.length; ++e)ud(d[e]) && ++b
    }
}
function rd(a) {
    return a in jd ? jd[a] : jd[a] = "on" + a
}
function wd(a, b, c, d) {
    var e = !0;
    if (a = pd(a))if (b = a.C[b.toString()])for (b = b.concat(), a = 0; a < b.length; a++) {
        var f = b[a];
        f && f.hc == c && !f.ac && (f = xd(f, d), e = e && !1 !== f)
    }
    return e
}
function xd(a, b) {
    var c = a.listener, d = a.jd || a.src;
    a.Uc && ud(a);
    return c.call(d, b)
}
function sd(a, b) {
    if (a.ac)return !0;
    if (!Xc) {
        var c;
        if (!(c = b))a:{
            c = ["window", "event"];
            for (var d = l, e; e = c.shift();)if (null != d[e])d = d[e]; else {
                c = null;
                break a
            }
            c = d
        }
        e = c;
        c = new $c(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a:{
                var f = !1;
                if (0 == e.keyCode)try {
                    e.keyCode = -1;
                    break a
                } catch (h) {
                    f = !0
                }
                if (f || void 0 == e.returnValue)e.returnValue = !0
            }
            e = [];
            for (f = c.currentTarget; f; f = f.parentNode)e.push(f);
            for (var f = a.type, k = e.length - 1; !c.nb && 0 <= k; k--) {
                c.currentTarget = e[k];
                var m = wd(e[k], f, !0, c), d = d && m
            }
            for (k = 0; !c.nb && k <
            e.length; k++)c.currentTarget = e[k], m = wd(e[k], f, !1, c), d = d && m
        }
        return d
    }
    return xd(a, new $c(b, this))
}
function pd(a) {
    a = a[id];
    return a instanceof fd ? a : null
}
var yd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ld(a) {
    if (ha(a))return a;
    a[yd] || (a[yd] = function (b) {
        return a.handleEvent(b)
    });
    return a[yd]
};function R() {
    Tc.call(this);
    this.W = new fd(this);
    this.Ig = this;
    this.Ed = null
}
z(R, Tc);
R.prototype[ad] = !0;
g = R.prototype;
g.Ve = function (a) {
    this.Ed = a
};
g.addEventListener = function (a, b, c, d) {
    P(this, a, b, c, d)
};
g.removeEventListener = function (a, b, c, d) {
    Q(this, a, b, c, d)
};
g.dispatchEvent = function (a) {
    var b, c = this.Ed;
    if (c)for (b = []; c; c = c.Ed)b.push(c);
    var c = this.Ig, d = a.type || a;
    if (t(a))a = new O(a, c); else if (a instanceof O)a.target = a.target || c; else {
        var e = a;
        a = new O(d, c);
        kb(a, e)
    }
    var e = !0, f;
    if (b)for (var h = b.length - 1; !a.nb && 0 <= h; h--)f = a.currentTarget = b[h], e = zd(f, d, !0, a) && e;
    a.nb || (f = a.currentTarget = c, e = zd(f, d, !0, a) && e, a.nb || (e = zd(f, d, !1, a) && e));
    if (b)for (h = 0; !a.nb && h < b.length; h++)f = a.currentTarget = b[h], e = zd(f, d, !1, a) && e;
    return e
};
g.l = function () {
    R.A.l.call(this);
    this.W && this.W.$b(void 0);
    this.Ed = null
};
g.da = function (a, b, c, d) {
    return this.W.add(String(a), b, !1, c, d)
};
g.Be = function (a, b, c, d) {
    return this.W.add(String(a), b, !0, c, d)
};
g.Sd = function (a, b, c, d) {
    return this.W.remove(String(a), b, c, d)
};
function zd(a, b, c, d) {
    b = a.W.C[String(b)];
    if (!b)return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.ac && h.hc == c) {
            var k = h.listener, m = h.jd || h.src;
            h.Uc && hd(a.W, h);
            e = !1 !== k.call(m, d) && e
        }
    }
    return e && 0 != d.fg
}
g.sc = function (a, b, c, d) {
    return this.W.sc(String(a), b, c, d)
};
g.hasListener = function (a, b) {
    return this.W.hasListener(p(a) ? String(a) : void 0, b)
};
function Ad() {
    return !0
};function Bd(a, b) {
    R.call(this);
    this.jb = a || 1;
    this.dc = b || l;
    this.$d = u(this.Ph, this);
    this.Ae = x()
}
z(Bd, R);
g = Bd.prototype;
g.enabled = !1;
g.h = null;
g.setInterval = function (a) {
    this.jb = a;
    this.h && this.enabled ? (this.stop(), this.start()) : this.h && this.stop()
};
g.Ph = function () {
    if (this.enabled) {
        var a = x() - this.Ae;
        0 < a && a < .8 * this.jb ? this.h = this.dc.setTimeout(this.$d, this.jb - a) : (this.h && (this.dc.clearTimeout(this.h), this.h = null), this.dispatchEvent(Cd), this.enabled && (this.h = this.dc.setTimeout(this.$d, this.jb), this.Ae = x()))
    }
};
g.start = function () {
    this.enabled = !0;
    this.h || (this.h = this.dc.setTimeout(this.$d, this.jb), this.Ae = x())
};
g.stop = function () {
    this.enabled = !1;
    this.h && (this.dc.clearTimeout(this.h), this.h = null)
};
g.l = function () {
    Bd.A.l.call(this);
    this.stop();
    delete this.dc
};
var Cd = "tick";
function S(a, b, c) {
    if (ha(a))c && (a = u(a, c)); else if (a && "function" == typeof a.handleEvent)a = u(a.handleEvent, a); else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : l.setTimeout(a, b || 0)
}
function U(a) {
    l.clearTimeout(a)
};function Dd(a) {
    Tc.call(this);
    this.wa = a;
    this.o = {}
}
z(Dd, Tc);
var Ed = [];
g = Dd.prototype;
g.da = function (a, b, c, d) {
    r(b) || (b && (Ed[0] = b.toString()), b = Ed);
    for (var e = 0; e < b.length; e++) {
        var f = P(a, b[e], c || this.handleEvent, d || !1, this.wa || this);
        if (!f)break;
        this.o[f.key] = f
    }
    return this
};
g.Be = function (a, b, c, d) {
    return Fd(this, a, b, c, d)
};
function Fd(a, b, c, d, e, f) {
    if (r(c))for (var h = 0; h < c.length; h++)Fd(a, b, c[h], d, e, f); else {
        b = td(b, c, d || a.handleEvent, e, f || a.wa || a);
        if (!b)return a;
        a.o[b.key] = b
    }
    return a
}
g.Sd = function (a, b, c, d, e) {
    if (r(b))for (var f = 0; f < b.length; f++)this.Sd(a, b[f], c, d, e); else c = c || this.handleEvent, e = e || this.wa || this, c = ld(c), d = !!d, b = bd(a) ? a.sc(b, c, d, e) : a ? (a = pd(a)) ? a.sc(b, c, d, e) : null : null, b && (ud(b), delete this.o[b.key]);
    return this
};
g.$b = function () {
    eb(this.o, function (a, b) {
        this.o.hasOwnProperty(b) && ud(a)
    }, this);
    this.o = {}
};
g.l = function () {
    Dd.A.l.call(this);
    this.$b()
};
g.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
function Gd(a) {
    O.call(this, "navigate");
    this.Qh = a
}
z(Gd, O);
function Hd() {
    return !(A("iPad") || A("Android") && !A("Mobile") || A("Silk")) && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
};function Id(a, b) {
    for (var c = [a], d = b.length - 1; 0 <= d; --d)c.push(typeof b[d], b[d]);
    return c.join("\x0B")
};function Jd(a, b, c, d) {
    R.call(this);
    if (a && !b)throw Error("Can't use invisible history without providing a blank page.");
    var e;
    if (c)e = c; else {
        e = "history_state" + Kd;
        var f = ac("input", {type: "text", name: e, id: e, style: Ib("display:none")});
        document.write(Xb(f));
        e = J(e)
    }
    this.uc = e;
    c = c ? (c = hc(c)) ? c.parentWindow || c.defaultView : window : window;
    this.N = c;
    this.ue = t(b) ? Ub(b) : b;
    B && !b && (b = "https" == window.location.protocol ? Ib("https:///") : Ib('javascript:""'), this.ue = b = Ub(Hb(b)));
    this.h = new Bd(Ld);
    b = pa(Wc, this.h);
    this.Ja ? b.call(void 0) :
        (this.mb || (this.mb = []), this.mb.push(p(void 0) ? u(b, void 0) : b));
    this.ub = !a;
    this.$a = new Dd(this);
    if (a || Md) {
        var h;
        if (d)h = d; else {
            a = "history_iframe" + Kd;
            d = {id: a, style: Ib("display:none"), sandbox: void 0};
            b = {};
            b.src = this.ue || null;
            b.srcdoc = null;
            c = {sandbox: ""};
            e = {};
            for (h in b)e[h] = b[h];
            for (h in c)e[h] = c[h];
            for (h in d) {
                f = h.toLowerCase();
                if (f in b)throw Error('Cannot override "' + f + '" attribute, got "' + h + '" with value "' + d[h] + '"');
                f in c && delete e[f];
                e[h] = d[h]
            }
            h = bc("iframe", e, void 0);
            document.write(Xb(h));
            h = J(a)
        }
        this.ld =
            h;
        this.zg = !0
    }
    Md && (this.$a.da(this.N, "load", this.xh), this.lg = this.he = !1);
    this.ub ? Nd(this, this.eb(), !0) : Od(this, this.uc.value);
    Kd++
}
z(Jd, R);
Jd.prototype.ma = !1;
Jd.prototype.Tb = !1;
Jd.prototype.Pb = null;
var Pd = function (a, b) {
    var c = b || Id;
    return function () {
        var b = this || l, b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}), e = c(a[ja] || (a[ja] = ++ka), arguments);
        return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
    }
}(function () {
    return B ? 8 <= Bb : "onhashchange" in l
}), Md = B && !(8 <= Bb);
g = Jd.prototype;
g.Sb = null;
g.l = function () {
    Jd.A.l.call(this);
    this.$a.Za();
    this.rb(!1)
};
g.rb = function (a) {
    if (a != this.ma)if (Md && !this.he)this.lg = a; else if (a)if (pb ? this.$a.da(this.N.document, Qd, this.Ch) : C && this.$a.da(this.N, "pageshow", this.Ah), Pd() && this.ub)this.$a.da(this.N, "hashchange", this.yh), this.ma = !0, this.dispatchEvent(new Gd(this.eb())); else {
        if (!B || Hd() || this.he)this.$a.da(this.h, Cd, u(this.lf, this, !0)), this.ma = !0, Md || (this.Pb = this.eb(), this.dispatchEvent(new Gd(this.eb()))), this.h.start()
    } else this.ma = !1, this.$a.$b(), this.h.stop()
};
g.xh = function () {
    this.he = !0;
    this.uc.value && Od(this, this.uc.value, !0);
    this.rb(this.lg)
};
g.Ah = function (a) {
    a.ab.persisted && (this.rb(!1), this.rb(!0))
};
g.yh = function () {
    var a = Rd(this.N);
    a != this.Pb && this.fc(a, !0)
};
g.eb = function () {
    return null != this.Sb ? this.Sb : this.ub ? Rd(this.N) : Sd(this) || ""
};
function Rd(a) {
    a = a.location.href;
    var b = a.indexOf("#");
    return 0 > b ? "" : a.substring(b + 1)
}
function Td(a, b) {
    a.eb() != b && (a.ub ? (Nd(a, b, !0), Pd() || B && !Hd() && Od(a, b, !0, void 0), a.ma && a.lf(!1)) : (Od(a, b, !0), a.Sb = a.Pb = a.uc.value = b, a.dispatchEvent(new Gd(b))))
}
function Nd(a, b, c) {
    a = a.N.location;
    var d = a.href.split("#")[0], e = -1 != a.href.indexOf("#");
    if (Md || e || b)d += "#" + b;
    d != a.href && (c ? a.replace(d) : a.href = d)
}
function Od(a, b, c, d) {
    if (a.zg || b != Sd(a))if (a.zg = !1, b = encodeURIComponent(String(b)), B) {
        var e = vc(a.ld);
        e.open("text/html", c ? "replace" : void 0);
        c = cc(ac("title", {}, d || a.N.document.title), ac("body", {}, b));
        e.write(Xb(c));
        e.close()
    } else if (e = Tb(a.ue) + "#" + b, a = a.ld.contentWindow)c ? a.location.replace(e) : a.location.href = e
}
function Sd(a) {
    if (B)return a = vc(a.ld), a.body ? decodeURIComponent(a.body.innerHTML.replace(/\+/g, " ")) : null;
    var b = a.ld.contentWindow;
    if (b) {
        var c;
        try {
            c = decodeURIComponent(Rd(b).replace(/\+/g, " "))
        } catch (d) {
            return a.Tb || (1 != a.Tb && a.h.setInterval(Ud), a.Tb = !0), null
        }
        a.Tb && (0 != a.Tb && a.h.setInterval(Ld), a.Tb = !1);
        return c || null
    }
    return null
}
g.lf = function (a) {
    if (this.ub) {
        var b = Rd(this.N);
        b != this.Pb && this.fc(b, a)
    }
    if (!this.ub || Md)if (b = Sd(this) || "", null == this.Sb || b == this.Sb)this.Sb = null, b != this.Pb && this.fc(b, a)
};
g.fc = function (a) {
    this.Pb = this.uc.value = a;
    this.ub ? (Md && Od(this, a), Nd(this, a)) : Od(this, a);
    this.dispatchEvent(new Gd(this.eb()))
};
g.Ch = function () {
    this.h.stop();
    this.h.start()
};
var Qd = ["mousedown", "keydown", "mousemove"], Kd = 0, Ld = 150, Ud = 1E4;
function Vd(a, b, c) {
    this.x = p(a) ? a : 0;
    this.y = p(b) ? b : 0;
    this.z = p(c) ? c : 0
}
Vd.prototype.clone = function () {
    return new Vd(this.x, this.y, this.z)
};
Vd.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ", " + this.z + ")"
};
function Wd(a, b, c) {
    this.x = a;
    this.y = b;
    this.z = c
}
z(Wd, Vd);
Wd.prototype.clone = function () {
    return new Wd(this.x, this.y, this.z)
};
Wd.prototype.scale = function (a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this
};
Wd.prototype.normalize = function () {
    return this.scale(1 / Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z))
};
Wd.prototype.add = function (a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this
};
function Xd(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)this[b] = a[b] || 0
}
Xd.prototype.BYTES_PER_ELEMENT = 4;
Xd.prototype.set = function (a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)this[b + c] = a[c]
};
Xd.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Xd.BYTES_PER_ELEMENT = 4, Xd.prototype.BYTES_PER_ELEMENT = Xd.prototype.BYTES_PER_ELEMENT, Xd.prototype.set = Xd.prototype.set, Xd.prototype.toString = Xd.prototype.toString, qa("Float32Array", Xd));
function Yd(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++)this[b] = a[b] || 0
}
Yd.prototype.BYTES_PER_ELEMENT = 8;
Yd.prototype.set = function (a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++)this[b + c] = a[c]
};
Yd.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
    try {
        Yd.BYTES_PER_ELEMENT = 8
    } catch (Zd) {
    }
    Yd.prototype.BYTES_PER_ELEMENT = Yd.prototype.BYTES_PER_ELEMENT;
    Yd.prototype.set = Yd.prototype.set;
    Yd.prototype.toString = Yd.prototype.toString;
    qa("Float64Array", Yd)
}
;function $d() {
    var a = new Float32Array(16);
    a[0] = a[5] = a[10] = a[15] = 1;
    return a
}
function ae(a, b, c) {
    var d = 0 * a[1] + a[5] * b + a[9] * c + a[13], e = 0 * a[2] + a[6] * b + a[10] * c + a[14], f = 0 * a[3] + a[7] * b + a[11] * c + a[15];
    a[12] = 0 * a[0] + a[4] * b + a[8] * c + a[12];
    a[13] = d;
    a[14] = e;
    a[15] = f
}
function be(a, b, c, d, e) {
    var f = a[0], h = a[1], k = a[2], m = a[3], q = a[4], n = a[5], w = a[6], v = a[7], T = a[8], E = a[9], I = a[10], la = a[11], aa = Math.cos(b), ga = Math.sin(b), y = 1 - aa;
    b = c * c * y + aa;
    var Ha = c * d * y + e * ga, ma = c * e * y - d * ga, Za = c * d * y - e * ga, sa = d * d * y + aa, $a = d * e * y + c * ga, Ia = c * e * y + d * ga;
    c = d * e * y - c * ga;
    e = e * e * y + aa;
    aa = a[12];
    d = a[13];
    y = a[14];
    ga = a[15];
    a[0] = f * b + q * Ha + T * ma;
    a[1] = h * b + n * Ha + E * ma;
    a[2] = k * b + w * Ha + I * ma;
    a[3] = m * b + v * Ha + la * ma;
    a[4] = f * Za + q * sa + T * $a;
    a[5] = h * Za + n * sa + E * $a;
    a[6] = k * Za + w * sa + I * $a;
    a[7] = m * Za + v * sa + la * $a;
    a[8] = f * Ia + q * c + T * e;
    a[9] = h * Ia + n * c + E * e;
    a[10] =
        k * Ia + w * c + I * e;
    a[11] = m * Ia + v * c + la * e;
    a[12] = aa;
    a[13] = d;
    a[14] = y;
    a[15] = ga
}
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
function ce(a) {
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
}
function V(a, b) {
    var c = ce(a);
    de(c, Xa(arguments, 1));
    a.className = c.join(" ")
}
function ee(a, b) {
    var c = ce(a), c = fe(c, Xa(arguments, 1));
    a.className = c.join(" ")
}
function de(a, b) {
    for (var c = 0; c < b.length; c++)Ta(a, b[c]) || a.push(b[c])
}
function fe(a, b) {
    return Oa(a, function (a) {
        return !Ta(b, a)
    })
}
function ge(a) {
    var b = ce(a);
    t("on") ? Ua(b, "on") : r("on") && (b = fe(b, "on"));
    t("off") && !Ta(b, "off") ? b.push("off") : r("off") && de(b, "off");
    a.className = b.join(" ")
};var he = ob() || A("iPod");
!A("Android") || nb() || A("Firefox") || mb();
nb();
var ie = !B;
function je(a, b) {
    return ie && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
};function ke() {
    R.call(this);
    this.ga = le;
    this.endTime = this.startTime = null
}
z(ke, R);
var le = 0;
function me(a, b) {
    r(b) || (b = [b]);
    var c = Pa(b, function (a) {
        return t(a) ? a : a.Zh + " " + a.duration + "s " + a.timing + " " + a.aa + "s"
    });
    N(a, "transition", c.join(","))
}
var ne = function (a) {
    var b = !1, c;
    return function () {
        b || (c = a(), b = !0);
        return c
    }
}(function () {
    if (B)return G("10.0");
    var a = document.createElement("DIV"), b = F ? "-webkit" : C ? "-moz" : B ? "-ms" : pb ? "-o" : null, c = {transition: "opacity 1s linear"};
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = ac("div", {style: c});
    a.innerHTML = Xb(b);
    a = a.firstChild;
    b = a.style[Fa("transition")];
    return "" != ("undefined" !== typeof b ? b : a.style[Bc(a, "transition")] || "")
});
function oe(a, b, c, d, e) {
    ke.call(this);
    this.a = a;
    this.bd = b;
    this.rh = c;
    this.uf = d;
    this.Uh = r(e) ? e : [e]
}
z(oe, ke);
g = oe.prototype;
g.play = function () {
    if (1 == this.ga)return !1;
    this.dispatchEvent("begin");
    this.dispatchEvent("play");
    this.startTime = x();
    this.ga = 1;
    if (ne())return N(this.a, this.rh), this.ug = S(this.Eh, void 0, this), !0;
    this.Ye(!1);
    return !1
};
g.Eh = function () {
    Kc(this.a);
    me(this.a, this.Uh);
    N(this.a, this.uf);
    this.ug = S(u(this.Ye, this, !1), 1E3 * this.bd)
};
g.stop = function () {
    1 == this.ga && this.Ye(!0)
};
g.Ye = function (a) {
    N(this.a, "transition", "");
    U(this.ug);
    N(this.a, this.uf);
    this.endTime = x();
    this.ga = le;
    a ? this.dispatchEvent("stop") : this.dispatchEvent("finish");
    this.dispatchEvent("end")
};
g.l = function () {
    this.stop();
    oe.A.l.call(this)
};
g.pause = function () {
};
/*
 Portions of this code are from the Dojo Toolkit, received by
 The Closure Library Authors under the BSD license. All other code is
 Copyright 2005-2009 The Closure Library Authors. All Rights Reserved.

 The "New" BSD License:

 Copyright (c) 2005-2009, The Dojo Foundation
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
 this list of conditions and the following disclaimer in the documentation
 and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
 may be used to endorse or promote products derived from this software
 without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
 FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var W = function () {
    function a(a, c) {
        if (!a)return [];
        if (a.constructor == Array)return a;
        if (!t(a))return [a];
        if (t(c) && (c = J(c), !c))return [];
        c = c || document;
        var e = c.ownerDocument || c.documentElement;
        sa = c.contentType && "application/xml" == c.contentType || pb && (c.doctype || "[object XMLDocument]" == e.toString()) || !!e && (ma ? e.xml : c.xmlVersion || e.xmlVersion);
        return (e = d(a)(c)) && e.zd ? e : b(e)
    }

    function b(a) {
        if (a && a.zd)return a;
        var b = [];
        if (!a || !a.length)return b;
        a[0] && b.push(a[0]);
        if (2 > a.length)return b;
        Sa++;
        if (ma && sa) {
            var c = Sa +
                "";
            a[0].setAttribute("_zipIdx", c);
            for (var d = 1, e; e = a[d]; d++)a[d].getAttribute("_zipIdx") != c && b.push(e), e.setAttribute("_zipIdx", c)
        } else if (ma && a.Tg)try {
            for (d = 1; e = a[d]; d++)la(e) && b.push(e)
        } catch (f) {
        } else for (a[0] && (a[0]._zipIdx = Sa), d = 1; e = a[d]; d++)a[d]._zipIdx != Sa && b.push(e), e._zipIdx = Sa;
        return b
    }

    function c(a, b) {
        if (!b)return 1;
        var c = th(a);
        return b[c] ? 0 : b[c] = 1
    }

    function d(a, b) {
        if (pf) {
            var c = qf[a];
            if (c && !b)return c
        }
        if (c = rf[a])return c;
        var c = a.charAt(0), f = -1 == a.indexOf(" ");
        0 <= a.indexOf("#") && f && (b = !0);
        if (!pf ||
            b || -1 != ">~+".indexOf(c) || ma && -1 != a.indexOf(":") || Ha && 0 <= a.indexOf(".") || -1 != a.indexOf(":contains") || -1 != a.indexOf("|=")) {
            var h = a.split(/\s*,\s*/);
            return rf[a] = 2 > h.length ? e(a) : function (a) {
                for (var b = 0, c = [], d; d = h[b++];)c = c.concat(e(d)(a));
                return c
            }
        }
        var k = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
        return qf[a] = function (b) {
            try {
                if (9 != b.nodeType && !f)throw Error("");
                var c = b.querySelectorAll(k);
                ma ? c.Tg = !0 : c.zd = !0;
                return c
            } catch (e) {
                return d(a, !0)(b)
            }
        }
    }

    function e(a) {
        var b = ga(va(a));
        if (1 == b.length) {
            var c =
                f(b[0]);
            return function (a) {
                if (a = c(a, []))a.zd = !0;
                return a
            }
        }
        return function (a) {
            a = y(a);
            for (var c, d, e = b.length, h, k, md = 0; md < e; md++) {
                k = [];
                c = b[md];
                d = a.length - 1;
                0 < d && (h = {}, k.zd = !0);
                d = f(c);
                for (var of = 0; c = a[of]; of++)d(c, k, h);
                if (!k.length)break;
                a = k
            }
            return k
        }
    }

    function f(a) {
        var b = sf[a.Zb];
        if (b)return b;
        var c = a.Pf, c = c ? c.Ad : "", d = q(a, {Hb: 1}), e = "*" == a.tag, f = document.getElementsByClassName;
        if (c)f = {Hb: 1}, e && (f.tag = 1), d = q(a, f), "+" == c ? b = m(d) : "~" == c ? b = k(d) : ">" == c && (b = h(d)); else if (a.id)d = !a.Wf && e ? Ad : q(a, {
            Hb: 1,
            id: 1
        }), b =
            function (b, c) {
                var e = fc(b).b(a.id), f;
                if ((f = e && d(e)) && !(f = 9 == b.nodeType)) {
                    for (f = e.parentNode; f && f != b;)f = f.parentNode;
                    f = !!f
                }
                if (f)return y(e, c)
            }; else if (f && /\{\s*\[native code\]\s*\}/.test(String(f)) && a.ua.length && !Ha)var d = q(a, {
            Hb: 1,
            ua: 1,
            id: 1
        }), n = a.ua.join(" "), b = function (a, b) {
            for (var c = y(0, b), e, f = 0, h = a.getElementsByClassName(n); e = h[f++];)d(e, a) && c.push(e);
            return c
        }; else e || a.Wf ? (d = q(a, {Hb: 1, tag: 1, id: 1}), b = function (b, c) {
            for (var e = y(0, c), f, h = 0, k = b.getElementsByTagName(a.oe()); f = k[h++];)d(f, b) && e.push(f);
            return e
        }) : b = function (b, c) {
            for (var d = y(0, c), e, f = 0, h = b.getElementsByTagName(a.oe()); e = h[f++];)d.push(e);
            return d
        };
        return sf[a.Zb] = b
    }

    function h(a) {
        a = a || Ad;
        return function (b, d, e) {
            for (var f = 0, h = b[Za]; b = h[f++];)Ob(b) && (!e || c(b, e)) && a(b, f) && d.push(b);
            return d
        }
    }

    function k(a) {
        return function (b, d, e) {
            for (b = b[Pb]; b;) {
                if (Ob(b)) {
                    if (e && !c(b, e))break;
                    a(b) && d.push(b)
                }
                b = b[Pb]
            }
            return d
        }
    }

    function m(a) {
        return function (b, d, e) {
            for (; b = b[Pb];)if (!Ia || la(b)) {
                e && !c(b, e) || !a(b) || d.push(b);
                break
            }
            return d
        }
    }

    function q(a, b) {
        if (!a)return Ad;
        b = b || {};
        var c = null;
        b.Hb || (c = aa(c, la));
        b.tag || "*" != a.tag && (c = aa(c, function (b) {
            return b && b.tagName == a.oe()
        }));
        b.ua || Na(a.ua, function (a, b) {
            var d = new RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
            c = aa(c, function (a) {
                return d.test(a.className)
            });
            c.count = b
        });
        b.ob || Na(a.ob, function (a) {
            var b = a.name;
            nd[b] && (c = aa(c, nd[b](b, a.value)))
        });
        b.Rc || Na(a.Rc, function (a) {
            var b, d = a.Yd;
            a.type && $a[a.type] ? b = $a[a.type](d, a.Ge) : d.length && (b = uh(d));
            b && (c = aa(c, b))
        });
        b.id || a.id && (c = aa(c, function (b) {
            return !!b && b.id == a.id
        }));
        c || "default" in
        b || (c = Ad);
        return c
    }

    function n(a) {
        return v(a) % 2
    }

    function w(a) {
        return !(v(a) % 2)
    }

    function v(a) {
        var b = a.parentNode, c = 0, d = b[Za], e = a._i || -1, f = b._l || -1;
        if (!d)return -1;
        d = d.length;
        if (f == d && 0 <= e && 0 <= f)return e;
        b._l = d;
        e = -1;
        for (b = b.firstElementChild || b.firstChild; b; b = b[Pb])Ob(b) && (b._i = ++c, a === b && (e = c));
        return e
    }

    function T(a) {
        for (; a = a[Pb];)if (Ob(a))return !1;
        return !0
    }

    function E(a) {
        for (; a = a[vh];)if (Ob(a))return !1;
        return !0
    }

    function I(a, b) {
        return a ? "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText ||
        "" : (sa ? a.getAttribute(b) : a.getAttribute(b, 2)) || "" : ""
    }

    function la(a) {
        return 1 == a.nodeType
    }

    function aa(a, b) {
        return a ? b ? function () {
            return a.apply(window, arguments) && b.apply(window, arguments)
        } : a : b
    }

    function ga(a) {
        function b() {
            0 <= q && (D.id = c(q, K).replace(/\\/g, ""), q = -1);
            if (0 <= n) {
                var a = n == K ? null : c(n, K);
                0 > ">~+".indexOf(a) ? D.tag = a : D.Ad = a;
                n = -1
            }
            0 <= m && (D.ua.push(c(m + 1, K).replace(/\\/g, "")), m = -1)
        }

        function c(b, d) {
            return va(a.slice(b, d))
        }

        a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ";
        for (var d = [], e = -1, f = -1, h = -1, k =
            -1, m = -1, q = -1, n = -1, w = "", v = "", E, K = 0, I = a.length, D = null, y = null; w = v, v = a.charAt(K), K < I; K++)"\\" != w && (D || (E = K, D = {
            Zb: null,
            ob: [],
            Rc: [],
            ua: [],
            tag: null,
            Ad: null,
            id: null,
            oe: function () {
                return sa ? this.Dh : this.tag
            }
        }, n = K), 0 <= e ? "]" == v ? (y.Yd ? y.Ge = c(h || e + 1, K) : y.Yd = c(e + 1, K), !(e = y.Ge) || '"' != e.charAt(0) && "'" != e.charAt(0) || (y.Ge = e.slice(1, -1)), D.Rc.push(y), y = null, e = h = -1) : "=" == v && (h = 0 <= "|~^$*".indexOf(w) ? w : "", y.type = h + v, y.Yd = c(e + 1, K - h.length), h = K + 1) : 0 <= f ? ")" == v && (0 <= k && (y.value = c(f + 1, K)), k = f = -1) : "#" == v ? (b(), q = K + 1) : "." == v ?
            (b(), m = K) : ":" == v ? (b(), k = K) : "[" == v ? (b(), e = K, y = {}) : "(" == v ? (0 <= k && (y = {
            name: c(k + 1, K),
            value: null
        }, D.ob.push(y)), f = K) : " " == v && w != v && (b(), 0 <= k && D.ob.push({name: c(k + 1, K)}), D.Wf = D.ob.length || D.Rc.length || D.ua.length, D.Yh = D.Zb = c(E, K), D.Dh = D.tag = D.Ad ? null : D.tag || "*", D.tag && (D.tag = D.tag.toUpperCase()), d.length && d[d.length - 1].Ad && (D.Pf = d.pop(), D.Zb = D.Pf.Zb + " " + D.Zb), d.push(D), D = null));
        return d
    }

    function y(a, b) {
        var c = b || [];
        a && c.push(a);
        return c
    }

    var Ha = F && "BackCompat" == document.compatMode, ma = B && !G("9"), Za = document.firstChild.children ?
        "children" : "childNodes", sa = !1, $a = {
        "*=": function (a, b) {
            return function (c) {
                return 0 <= I(c, a).indexOf(b)
            }
        }, "^=": function (a, b) {
            return function (c) {
                return 0 == I(c, a).indexOf(b)
            }
        }, "$=": function (a, b) {
            return function (c) {
                c = " " + I(c, a);
                return c.lastIndexOf(b) == c.length - b.length
            }
        }, "~=": function (a, b) {
            var c = " " + b + " ";
            return function (b) {
                return 0 <= (" " + I(b, a) + " ").indexOf(c)
            }
        }, "|=": function (a, b) {
            b = " " + b;
            return function (c) {
                c = " " + I(c, a);
                return c == b || 0 == c.indexOf(b + "-")
            }
        }, "=": function (a, b) {
            return function (c) {
                return I(c,
                        a) == b
            }
        }
    }, Ia = "undefined" == typeof document.firstChild.nextElementSibling, Pb = Ia ? "nextSibling" : "nextElementSibling", vh = Ia ? "previousSibling" : "previousElementSibling", Ob = Ia ? la : Ad, nd = {
        checked: function () {
            return function (a) {
                return a.checked || a.attributes.checked
            }
        }, "first-child": function () {
            return E
        }, "last-child": function () {
            return T
        }, "only-child": function () {
            return function (a) {
                return E(a) && T(a) ? !0 : !1
            }
        }, empty: function () {
            return function (a) {
                var b = a.childNodes;
                for (a = a.childNodes.length - 1; 0 <= a; a--) {
                    var c = b[a].nodeType;
                    if (1 === c || 3 == c)return !1
                }
                return !0
            }
        }, contains: function (a, b) {
            var c = b.charAt(0);
            if ('"' == c || "'" == c)b = b.slice(1, -1);
            return function (a) {
                return 0 <= a.innerHTML.indexOf(b)
            }
        }, not: function (a, b) {
            var c = ga(b)[0], d = {Hb: 1};
            "*" != c.tag && (d.tag = 1);
            c.ua.length || (d.ua = 1);
            var e = q(c, d);
            return function (a) {
                return !e(a)
            }
        }, "nth-child": function (a, b) {
            if ("odd" == b)return n;
            if ("even" == b)return w;
            if (-1 != b.indexOf("n")) {
                var c = b.split("n", 2), d = c[0] ? "-" == c[0] ? -1 : parseInt(c[0], 10) : 1, e = c[1] ? parseInt(c[1], 10) : 0, f = 0, h = -1;
                0 < d ? 0 > e ? e = e % d && d +
                    e % d : 0 < e && (e >= d && (f = e - e % d), e %= d) : 0 > d && (d *= -1, 0 < e && (h = e, e %= d));
                if (0 < d)return function (a) {
                    a = v(a);
                    return a >= f && (0 > h || a <= h) && a % d == e
                };
                b = e
            }
            var k = parseInt(b, 10);
            return function (a) {
                return v(a) == k
            }
        }
    }, uh = ma ? function (a) {
        var b = a.toLowerCase();
        "class" == b && (a = "className");
        return function (c) {
            return sa ? c.getAttribute(a) : c[a] || c[b]
        }
    } : function (a) {
        return function (b) {
            return b && b.getAttribute && b.hasAttribute(a)
        }
    }, sf = {}, rf = {}, qf = {}, pf = !!document.querySelectorAll && (!F || G("526")), Sa = 0, th = ma ? function (a) {
        return sa ? a.getAttribute("_uid") ||
        a.setAttribute("_uid", ++Sa) || Sa : a.uniqueID
    } : function (a) {
        return a._uid || (a._uid = ++Sa)
    };
    a.ob = nd;
    return a
}();
qa("goog.dom.query", W);
qa("goog.dom.query.pseudos", W.ob);
function pe(a) {
    R.call(this);
    this.wc = {};
    this.vc = {};
    this.wa = new Dd(this);
    this.R = a
}
z(pe, R);
var qe = [B && !G("11") ? "readystatechange" : "load", "abort", "error"];
function re(a, b, c) {
    (c = t(c) ? c : c.src) && (a.wc[b] = {src: c, mf: p(void 0) ? void 0 : null})
}
pe.prototype.start = function () {
    var a = this.wc;
    Na(hb(a), function (b) {
        var c = a[b];
        if (c && (delete a[b], !this.Ja)) {
            var d;
            d = this.R ? fc(this.R).kc("IMG") : new Image;
            c.mf && (d.crossOrigin = c.mf);
            this.wa.da(d, qe, this.bg);
            this.vc[b] = d;
            d.id = b;
            d.src = c.src
        }
    }, this)
};
pe.prototype.bg = function (a) {
    var b = a.currentTarget;
    if (b) {
        if ("readystatechange" == a.type)if ("complete" == b.readyState)a.type = "load"; else return;
        "undefined" == typeof b.naturalWidth && ("load" == a.type ? (b.naturalWidth = b.width, b.naturalHeight = b.height) : (b.naturalWidth = 0, b.naturalHeight = 0));
        this.dispatchEvent({type: a.type, target: b});
        !this.Ja && (a = b.id, delete this.wc[a], b = this.vc[a]) && (delete this.vc[a], this.wa.Sd(b, qe, this.bg), ib(this.vc) && ib(this.wc) && this.dispatchEvent("complete"))
    }
};
pe.prototype.l = function () {
    delete this.wc;
    delete this.vc;
    Wc(this.wa);
    pe.A.l.call(this)
};
function se(a, b, c) {
    Tc.call(this);
    this.uh = a;
    this.jb = b;
    this.wa = c;
    this.Og = u(this.Bh, this)
}
z(se, Tc);
g = se.prototype;
g.Md = !1;
g.Me = 0;
g.h = null;
g.vf = function () {
    this.h || this.Me ? this.Md = !0 : te(this)
};
g.stop = function () {
    this.h && (U(this.h), this.h = null, this.Md = !1)
};
g.pause = function () {
    this.Me++
};
g.l = function () {
    se.A.l.call(this);
    this.stop()
};
g.Bh = function () {
    this.h = null;
    this.Md && !this.Me && (this.Md = !1, te(this))
};
function te(a) {
    a.h = S(a.Og, a.jb);
    a.uh.call(a.wa)
};function ue(a, b, c, d, e) {
    if (!(B || F && G("525")))return !0;
    if (sb && e)return ve(a);
    if (e && !d)return !1;
    fa(b) && (b = we(b));
    if (!c && (17 == b || 18 == b || sb && 91 == b))return !1;
    if (F && d && c)switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (B && d && b == a)return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !F
    }
    return ve(a)
}
function ve(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || F && 0 == a)return !0;
    switch (a) {
        case 32:
        case 63:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}
function we(a) {
    if (C)a = xe(a); else if (sb && F)a:switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}
function xe(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};function ye(a, b) {
    R.call(this);
    a && (this.pd && this.detach(), this.a = a, this.od = P(this.a, "keypress", this, b), this.ze = P(this.a, "keydown", this.eh, b, this), this.pd = P(this.a, "keyup", this.fh, b, this))
}
z(ye, R);
g = ye.prototype;
g.a = null;
g.od = null;
g.ze = null;
g.pd = null;
g.P = -1;
g.Ma = -1;
g.Xd = !1;
var ze = {
    3: 13,
    12: 144,
    63232: 38,
    63233: 40,
    63234: 37,
    63235: 39,
    63236: 112,
    63237: 113,
    63238: 114,
    63239: 115,
    63240: 116,
    63241: 117,
    63242: 118,
    63243: 119,
    63244: 120,
    63245: 121,
    63246: 122,
    63247: 123,
    63248: 44,
    63272: 46,
    63273: 36,
    63275: 35,
    63276: 33,
    63277: 34,
    63289: 144,
    63302: 45
}, Ae = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
}, Be = B || F && G("525"), Ce = sb && C;
g = ye.prototype;
g.eh = function (a) {
    F && (17 == this.P && !a.ctrlKey || 18 == this.P && !a.altKey || sb && 91 == this.P && !a.metaKey) && (this.Ma = this.P = -1);
    -1 == this.P && (a.ctrlKey && 17 != a.keyCode ? this.P = 17 : a.altKey && 18 != a.keyCode ? this.P = 18 : a.metaKey && 91 != a.keyCode && (this.P = 91));
    Be && !ue(a.keyCode, this.P, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Ma = we(a.keyCode), Ce && (this.Xd = a.altKey))
};
g.fh = function (a) {
    this.Ma = this.P = -1;
    this.Xd = a.altKey
};
g.handleEvent = function (a) {
    var b = a.ab, c, d, e = b.altKey;
    B && "keypress" == a.type ? (c = this.Ma, d = 13 != c && 27 != c ? b.keyCode : 0) : F && "keypress" == a.type ? (c = this.Ma, d = 0 <= b.charCode && 63232 > b.charCode && ve(c) ? b.charCode : 0) : pb ? (c = this.Ma, d = ve(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ma, d = b.charCode || 0, Ce && (e = this.Xd), sb && 63 == d && 224 == c && (c = 191));
    var f = c = we(c), h = b.keyIdentifier;
    c ? 63232 <= c && c in ze ? f = ze[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Ae && (f = Ae[h]);
    a = f == this.P;
    this.P = f;
    b = new De(f, d, a, b);
    b.altKey = e;
    this.dispatchEvent(b)
};
g.b = function () {
    return this.a
};
g.detach = function () {
    this.od && (ud(this.od), ud(this.ze), ud(this.pd), this.pd = this.ze = this.od = null);
    this.a = null;
    this.Ma = this.P = -1
};
g.l = function () {
    ye.A.l.call(this);
    this.detach()
};
function De(a, b, c, d) {
    $c.call(this, d);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
z(De, $c);
function Ee(a, b) {
    if (a.classList)a.classList.add(b); else {
        var c;
        a.classList ? c = !a.classList.contains(b) : (a.classList ? c = a.classList : (c = a.className, c = t(c) && c.match(/\S+/g) || []), c = !Ta(c, b));
        c && (a.className += 0 < a.className.length ? " " + b : b)
    }
};function Fe() {
}
Fe.Yg = function () {
    return Fe.Qf ? Fe.Qf : Fe.Qf = new Fe
};
Fe.prototype.wh = 0;
function Ge(a) {
    R.call(this);
    this.mc = a || fc();
    this.kd = null;
    this.hb = !1;
    this.a = null;
    this.Ka = void 0;
    this.Wc = this.Ga = this.R = null;
    this.Bg = !1
}
z(Ge, R);
g = Ge.prototype;
g.ph = Fe.Yg();
g.ed = function () {
    return this.kd || (this.kd = ":" + (this.ph.wh++).toString(36))
};
g.b = function () {
    return this.a
};
g.getParent = function () {
    return this.R
};
g.Ve = function (a) {
    if (this.R && this.R != a)throw Error("Method not supported");
    Ge.A.Ve.call(this, a)
};
g.na = function () {
    return this.mc
};
g.kc = function () {
    this.a = this.mc.createElement("DIV")
};
g.Yc = function (a) {
    this.a = a
};
g.cd = function () {
    this.hb = !0;
    He(this, function (a) {
        !a.hb && a.b() && a.cd()
    })
};
function Ie(a) {
    He(a, function (a) {
        a.hb && Ie(a)
    });
    a.Ka && a.Ka.$b();
    a.hb = !1
}
g.l = function () {
    this.hb && Ie(this);
    this.Ka && (this.Ka.Za(), delete this.Ka);
    He(this, function (a) {
        a.Za()
    });
    !this.Bg && this.a && sc(this.a);
    this.R = this.a = this.Wc = this.Ga = null;
    Ge.A.l.call(this)
};
function He(a, b) {
    a.Ga && Na(a.Ga, b, void 0)
}
g.removeChild = function (a, b) {
    if (a) {
        var c = t(a) ? a : a.ed(), d;
        this.Wc && c ? (d = this.Wc, d = (c in d ? d[c] : void 0) || null) : d = null;
        a = d;
        if (c && a) {
            d = this.Wc;
            c in d && delete d[c];
            Ua(this.Ga, a);
            b && (Ie(a), a.a && sc(a.a));
            c = a;
            if (null == c)throw Error("Unable to set parent component");
            c.R = null;
            Ge.A.Ve.call(c, null)
        }
    }
    if (!a)throw Error("Child is not in parent component");
    return a
};
function Je(a, b) {
    var c = a ? fc(a) : b;
    Ge.call(this, c);
    (c = a) || (c = this.na().ba.body);
    this.Le = c;
    this.Bd = {};
    this.af = 0;
    this.Vb = this.jc = this.ee = null;
    this.dg = 0;
    this.Y = null;
    this.Re = !0;
    this.Ib = this.Xb = !1
}
z(Je, Ge);
var Ke = ["position", "top", "left", "width", "cssFloat"], Le = "position top left display cssFloat marginTop marginLeft marginRight marginBottom".split(" ");
g = Je.prototype;
g.kc = function () {
    Je.A.kc.call(this);
    this.Yc(this.b())
};
g.Yc = function (a) {
    Je.A.Yc.call(this, a);
    Ee(a, "goog-scrollfloater")
};
g.cd = function () {
    Je.A.cd.call(this);
    this.Y || (this.Y = this.na().kc("DIV", {style: "visibility:hidden"}));
    this.update();
    var a = this.Re;
    (this.Re = a) ? (Me(this) && (a = this.na(), a = Ec(a.ba), "none" == a.currentStyle.backgroundImage && (a.style.backgroundImage = "https:" == yc(this.na()).location.protocol ? "url(https:///)" : "url(about:blank)", a.style.backgroundAttachment = "fixed")), this.Kb()) : Ne(this);
    a = yc(this.na());
    this.Ka || (this.Ka = new Dd(this));
    this.Ka.da(a, "scroll", this.Kb).da(a, "resize", this.update)
};
g.update = function () {
    this.hb && (Ne(this), this.ee && (this.jc = Mc(this.ee)), this.Vb = Mc(this.b()), this.dg = Hc(this.b()).y, this.Kb())
};
g.l = function () {
    Je.A.l.call(this);
    this.Y = null
};
g.Kb = function () {
    if (this.Re) {
        var a = this.na(), a = lc(a.ba).y;
        if (this.Vb.top - a >= this.af)Ne(this); else {
            var b = this.Vb.height + this.af;
            if (this.ee && a > this.jc.top + this.jc.height - b)this.Ib && !Ne(this) || this.Xb || !this.dispatchEvent("pin") || (a = this.b(), Oe(this), a.style.position = "relative", a.style.top = this.jc.height - this.Vb.height - this.Vb.top + this.jc.top + "px", this.Xb = !0); else {
                var c = this.na(), c = M(yc(c)).height;
                Me(this) || b < c ? Pe(this, 0) : this.Vb.height + this.dg > c + a ? Ne(this) : Pe(this, 1)
            }
        }
    }
};
function Pe(a, b) {
    var c = 0 == b;
    if ((!a.Xb || Ne(a)) && !a.Ib && a.dispatchEvent("float")) {
        var d = a.b();
        a.na();
        var e = Hc(d).x, f;
        var h = hc(d);
        if ((f = B && d.currentStyle) && xc(fc(h)) && "auto" != f.width && "auto" != f.height && !f.boxSizing)h = Oc(d, f.width, "width", "pixelWidth"), f = Oc(d, f.height, "height", "pixelHeight"), f = new H(h, f); else {
            f = new H(d.offsetWidth, d.offsetHeight);
            var h = Qc(d, "padding"), k;
            if (!B || 9 <= Bb)k = Dc(d, "borderLeftWidth"), m = Dc(d, "borderRightWidth"), q = Dc(d, "borderTopWidth"), n = Dc(d, "borderBottomWidth"), k = new zc(parseFloat(q),
                parseFloat(m), parseFloat(n), parseFloat(k)); else {
                k = Sc(d, "borderLeft");
                var m = Sc(d, "borderRight"), q = Sc(d, "borderTop"), n = Sc(d, "borderBottom");
                k = new zc(q, m, n, k)
            }
            f = new H(f.width - k.left - h.left - h.right - k.right, f.height - k.top - h.top - h.bottom - k.bottom)
        }
        f = f.width;
        Oe(a);
        Ic(a.Y, d.offsetWidth, d.offsetHeight);
        N(d, {left: e + "px", width: f + "px", cssFloat: "none"});
        d.parentNode == a.Le ? d.parentNode.insertBefore(a.Y, d) : (d.parentNode.replaceChild(a.Y, d), a.Le.appendChild(d));
        Me(a) ? (d.style.position = "absolute", d.style.setExpression("top",
            'document.compatMode=="CSS1Compat"?documentElement.scrollTop:document.body.scrollTop')) : (d.style.position = "fixed", c ? (d.style.top = a.af + "px", d.style.bottom = "auto") : (d.style.top = "auto", d.style.bottom = 0));
        a.Ib = !0
    }
}
function Ne(a) {
    if (!a.Ib && !a.Xb || !a.dispatchEvent("dock"))return !1;
    var b = a.b();
    a.Ib && (Qe(a), Me(a) && b.style.removeExpression("top"), a.Y.parentNode == a.Le ? a.Y.parentNode.removeChild(a.Y) : a.Y.parentNode.replaceChild(b, a.Y));
    a.Xb && Qe(a);
    a.Ib = a.Xb = !1;
    return !0
}
function Oe(a) {
    var b = a.b();
    a.Bd = {};
    Na(Ke, function (a) {
        this.Bd[a] = b.style[a]
    }, a);
    Na(Le, function (a) {
        this.Y.style[a] = b.style[a] || (b.currentStyle ? b.currentStyle[a] : null) || Dc(b, a)
    }, a)
}
function Qe(a) {
    var b = a.b(), c;
    for (c in a.Bd)b.style[c] = a.Bd[c]
}
function Me(a) {
    return B && !(G("7") && xc(a.na()))
};function Re(a) {
    R.call(this);
    this.N = a || window;
    this.Ce = P(this.N, "resize", this.jh, !1, this);
    this.Ba = M(this.N)
}
z(Re, R);
Re.prototype.fd = function () {
    return this.Ba ? this.Ba.clone() : null
};
Re.prototype.l = function () {
    Re.A.l.call(this);
    this.Ce && (ud(this.Ce), this.Ce = null);
    this.Ba = this.N = null
};
Re.prototype.jh = function () {
    var a = M(this.N), b = this.Ba;
    a == b || a && b && a.width == b.width && a.height == b.height || (this.Ba = a, this.dispatchEvent("resize"))
};
function Se(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))try {
        return eval("(" + a + ")")
    } catch (b) {
    }
    throw Error("Invalid JSON string: " + a);
};function Te(a) {
    if ("function" == typeof a.gd)return a.gd();
    if (t(a))return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
        return b
    }
    return gb(a)
}
function Ue(a, b) {
    if ("function" == typeof a.forEach)a.forEach(b, void 0); else if (ea(a) || t(a))Na(a, b, void 0); else {
        var c;
        if ("function" == typeof a.rc)c = a.rc(); else if ("function" != typeof a.gd)if (ea(a) || t(a)) {
            c = [];
            for (var d = a.length, e = 0; e < d; e++)c.push(e)
        } else c = hb(a); else c = void 0;
        for (var d = Te(a), e = d.length, f = 0; f < e; f++)b.call(void 0, d[f], c && c[f], a)
    }
};function Ve(a, b) {
    this.xa = {};
    this.o = [];
    this.Gb = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
}
g = Ve.prototype;
g.gd = function () {
    We(this);
    for (var a = [], b = 0; b < this.o.length; b++)a.push(this.xa[this.o[b]]);
    return a
};
g.rc = function () {
    We(this);
    return this.o.concat()
};
g.clear = function () {
    this.xa = {};
    this.Gb = this.o.length = 0
};
g.remove = function (a) {
    return Object.prototype.hasOwnProperty.call(this.xa, a) ? (delete this.xa[a], this.Gb--, this.o.length > 2 * this.Gb && We(this), !0) : !1
};
function We(a) {
    if (a.Gb != a.o.length) {
        for (var b = 0, c = 0; b < a.o.length;) {
            var d = a.o[b];
            Object.prototype.hasOwnProperty.call(a.xa, d) && (a.o[c++] = d);
            b++
        }
        a.o.length = c
    }
    if (a.Gb != a.o.length) {
        for (var e = {}, c = b = 0; b < a.o.length;)d = a.o[b], Object.prototype.hasOwnProperty.call(e, d) || (a.o[c++] = d, e[d] = 1), b++;
        a.o.length = c
    }
}
g.get = function (a, b) {
    return Object.prototype.hasOwnProperty.call(this.xa, a) ? this.xa[a] : b
};
g.set = function (a, b) {
    Object.prototype.hasOwnProperty.call(this.xa, a) || (this.Gb++, this.o.push(a));
    this.xa[a] = b
};
g.addAll = function (a) {
    var b;
    a instanceof Ve ? (b = a.rc(), a = a.gd()) : (b = hb(a), a = gb(a));
    for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
};
g.forEach = function (a, b) {
    for (var c = this.rc(), d = 0; d < c.length; d++) {
        var e = c[d], f = this.get(e);
        a.call(b, f, e, this)
    }
};
g.clone = function () {
    return new Ve(this)
};
function Xe(a, b, c, d, e) {
    this.reset(a, b, c, d, e)
}
Xe.prototype.qf = null;
var Ye = 0;
Xe.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || Ye++;
    d || x();
    this.Bc = a;
    this.vh = b;
    delete this.qf
};
Xe.prototype.kg = function (a) {
    this.Bc = a
};
function Ze(a) {
    this.Yf = a;
    this.Lf = this.Ga = this.Bc = this.R = null
}
function $e(a, b) {
    this.name = a;
    this.value = b
}
$e.prototype.toString = function () {
    return this.name
};
var af = new $e("SEVERE", 1E3), bf = new $e("INFO", 800), cf = new $e("CONFIG", 700), df = new $e("FINE", 500);
g = Ze.prototype;
g.getName = function () {
    return this.Yf
};
g.getParent = function () {
    return this.R
};
g.yf = function () {
    this.Ga || (this.Ga = {});
    return this.Ga
};
g.kg = function (a) {
    this.Bc = a
};
function ef(a) {
    if (a.Bc)return a.Bc;
    if (a.R)return ef(a.R);
    Ka("Root logger has no level set.");
    return null
}
g.log = function (a, b, c) {
    if (a.value >= ef(this).value)for (ha(b) && (b = b()), a = new Xe(a, String(b), this.Yf), c && (a.qf = c), c = "log:" + a.vh, l.console && (l.console.timeStamp ? l.console.timeStamp(c) : l.console.markTimeline && l.console.markTimeline(c)), l.msWriteProfilerMark && l.msWriteProfilerMark(c), c = this; c;) {
        b = c;
        var d = a;
        if (b.Lf)for (var e = 0, f = void 0; f = b.Lf[e]; e++)f(d);
        c = c.getParent()
    }
};
g.info = function (a, b) {
    this.log(bf, a, b)
};
var ff = {}, gf = null;
function hf(a) {
    gf || (gf = new Ze(""), ff[""] = gf, gf.kg(cf));
    var b;
    if (!(b = ff[a])) {
        b = new Ze(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = hf(a.substr(0, c));
        c.yf()[d] = b;
        b.R = c;
        ff[a] = b
    }
    return b
};function jf(a, b) {
    a && a.log(df, b, void 0)
};function kf() {
}
kf.prototype.ef = null;
function lf(a) {
    var b;
    (b = a.ef) || (b = {}, mf(a) && (b[0] = !0, b[1] = !0), b = a.ef = b);
    return b
};var nf;
function tf() {
}
z(tf, kf);
function uf(a) {
    return (a = mf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function mf(a) {
    if (!a.Nf && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.Nf = d
            } catch (e) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.Nf
}
nf = new tf;
var vf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
function wf(a) {
    if (xf) {
        xf = !1;
        var b = l.location;
        if (b) {
            var c = b.href;
            if (c && (c = (c = wf(c)[3] || null) ? decodeURI(c) : c) && c != b.hostname)throw xf = !0, Error();
        }
    }
    return a.match(vf)
}
var xf = F;
function yf(a) {
    R.call(this);
    this.headers = new Ve;
    this.Wd = a || null;
    this.Da = !1;
    this.Vd = this.i = null;
    this.yc = this.Rf = this.ud = "";
    this.gb = this.xe = this.md = this.ie = !1;
    this.Lc = 0;
    this.Qd = null;
    this.eg = zf;
    this.Td = this.Vh = !1
}
z(yf, R);
var zf = "", Af = yf.prototype, Bf = hf("goog.net.XhrIo");
Af.ea = Bf;
var Cf = /^https?$/i, Df = ["POST", "PUT"], Ef = [];
function Ff(a, b) {
    var c = new yf;
    Ef.push(c);
    b && c.da("complete", b);
    c.Be("ready", c.Sg);
    c.send(a, void 0, void 0, void 0)
}
g = yf.prototype;
g.Sg = function () {
    this.Za();
    Ua(Ef, this)
};
g.send = function (a, b, c, d) {
    if (this.i)throw Error("[goog.net.XhrIo] Object is active with another request=" + this.ud + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.ud = a;
    this.yc = "";
    this.Rf = b;
    this.ie = !1;
    this.Da = !0;
    this.i = this.Wd ? uf(this.Wd) : uf(nf);
    this.Vd = this.Wd ? lf(this.Wd) : lf(nf);
    this.i.onreadystatechange = u(this.cg, this);
    try {
        jf(this.ea, Gf(this, "Opening Xhr")), this.xe = !0, this.i.open(b, String(a), !0), this.xe = !1
    } catch (e) {
        jf(this.ea, Gf(this, "Error opening Xhr: " + e.message));
        Hf(this, e);
        return
    }
    a = c || "";
    var f =
        this.headers.clone();
    d && Ue(d, function (a, b) {
        f.set(b, a)
    });
    d = Qa(f.rc());
    c = l.FormData && a instanceof l.FormData;
    !Ta(Df, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function (a, b) {
        this.i.setRequestHeader(b, a)
    }, this);
    this.eg && (this.i.responseType = this.eg);
    "withCredentials" in this.i && (this.i.withCredentials = this.Vh);
    try {
        If(this), 0 < this.Lc && (this.Td = Jf(this.i), jf(this.ea, Gf(this, "Will abort after " + this.Lc + "ms if incomplete, xhr2 " + this.Td)), this.Td ? (this.i.timeout =
            this.Lc, this.i.ontimeout = u(this.Ca, this)) : this.Qd = S(this.Ca, this.Lc, this)), jf(this.ea, Gf(this, "Sending request")), this.md = !0, this.i.send(a), this.md = !1
    } catch (h) {
        jf(this.ea, Gf(this, "Send error: " + h.message)), Hf(this, h)
    }
};
function Jf(a) {
    return B && G(9) && fa(a.timeout) && p(a.ontimeout)
}
function Ra(a) {
    return "content-type" == a.toLowerCase()
}
g.Ca = function () {
    "undefined" != typeof ba && this.i && (this.yc = "Timed out after " + this.Lc + "ms, aborting", jf(this.ea, Gf(this, this.yc)), this.dispatchEvent("timeout"), this.abort(8))
};
function Hf(a, b) {
    a.Da = !1;
    a.i && (a.gb = !0, a.i.abort(), a.gb = !1);
    a.yc = b;
    Kf(a);
    Lf(a)
}
function Kf(a) {
    a.ie || (a.ie = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
g.abort = function () {
    this.i && this.Da && (jf(this.ea, Gf(this, "Aborting")), this.Da = !1, this.gb = !0, this.i.abort(), this.gb = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Lf(this))
};
g.l = function () {
    this.i && (this.Da && (this.Da = !1, this.gb = !0, this.i.abort(), this.gb = !1), Lf(this, !0));
    yf.A.l.call(this)
};
g.cg = function () {
    this.Ja || (this.xe || this.md || this.gb ? Mf(this) : this.zh())
};
g.zh = function () {
    Mf(this)
};
function Mf(a) {
    if (a.Da && "undefined" != typeof ba)if (a.Vd[1] && 4 == Nf(a) && 2 == Of(a))jf(a.ea, Gf(a, "Local request error detected and ignored")); else if (a.md && 4 == Nf(a))S(a.cg, 0, a); else if (a.dispatchEvent("readystatechange"), 4 == Nf(a)) {
        jf(a.ea, Gf(a, "Request complete"));
        a.Da = !1;
        try {
            var b = Of(a), c;
            a:switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break a;
                default:
                    c = !1
            }
            var d;
            if (!(d = c)) {
                var e;
                if (e = 0 === b) {
                    var f = wf(String(a.ud))[1] || null;
                    if (!f && self.location)var h = self.location.protocol,
                        f = h.substr(0, h.length - 1);
                    e = !Cf.test(f ? f.toLowerCase() : "")
                }
                d = e
            }
            if (d)a.dispatchEvent("complete"), a.dispatchEvent("success"); else {
                var k;
                try {
                    k = 2 < Nf(a) ? a.i.statusText : ""
                } catch (m) {
                    jf(a.ea, "Can not get status: " + m.message), k = ""
                }
                a.yc = k + " [" + Of(a) + "]";
                Kf(a)
            }
        } finally {
            Lf(a)
        }
    }
}
function Lf(a, b) {
    if (a.i) {
        If(a);
        var c = a.i, d = a.Vd[0] ? ca : null;
        a.i = null;
        a.Vd = null;
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            (c = a.ea) && c.log(af, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
        }
    }
}
function If(a) {
    a.i && a.Td && (a.i.ontimeout = null);
    fa(a.Qd) && (U(a.Qd), a.Qd = null)
}
function Nf(a) {
    return a.i ? a.i.readyState : 0
}
function Of(a) {
    try {
        return 2 < Nf(a) ? a.i.status : -1
    } catch (b) {
        return -1
    }
}
g.getResponseHeader = function (a) {
    return this.i && 4 == Nf(this) ? this.i.getResponseHeader(a) : void 0
};
g.getAllResponseHeaders = function () {
    return this.i && 4 == Nf(this) ? this.i.getAllResponseHeaders() : ""
};
function Gf(a, b) {
    return b + " [" + a.Rf + " " + a.ud + " " + Of(a) + "]"
};function Pf() {
    if (!(1 >= window.devicePixelRatio)) {
        for (var a = ic("div", void 0, void 0), b = ic("img", void 0, void 0), c = ic("span", void 0, void 0), d = 0, e = a.length; d < e; d++)Qf(a[d]);
        d = 0;
        for (a = b.length; d < a; d++) {
            var e = b[d], f = e.src, h = je(e, "retina");
            if (f && -1 == f.indexOf("_2x") && h) {
                if ("full" == h)var k = "100%", h = "100%"; else k = h.split("x")[0] + "px", h = h.split("x")[1] + "px";
                N(e, {width: k, height: h});
                f = Rf(f);
                e.src = f
            }
        }
        d = 0;
        for (b = c.length; d < b; d++)Qf(c[d])
    }
}
qa("lfl.system.RetinaLoader", Pf);
function Qf(a) {
    var b = (a.currentStyle || window.getComputedStyle(a, !1)).backgroundImage.slice(4, -1), c = je(a, "retina");
    if (b && -1 == b.indexOf("_2x") && c) {
        if ("full" === c)var d = "100%"; else d = c.split("x")[0] + "px", c = c.split("x")[1] + "px", d = d + " " + c;
        a.style.backgroundSize = d;
        (b = Rf(b)) && (a.style.backgroundImage = "url(" + b + ")")
    }
}
function Rf(a) {
    var b = a.indexOf("?mmfb=");
    -1 !== b && (a = a.slice(0, b) + a.slice(b + 38));
    var b = a.split("/"), c = b.pop();
    a = c.match(/\.[0-9a-z]+$/i);
    if (!a)return !1;
    b = b.join("/") + "/" + c.split(".")[0];
    return b = -1 !== b.indexOf("lockup_now_dark_color_147x31dp") ? b.replace("/1x/", "/2x/") + a : b + "_2x" + a
}
function Sf(a) {
    R.call(this);
    this.element = a;
    this.Kc = null;
    this.ga = Tf
}
z(Sf, R);
var Tf = 3;
g = Sf.prototype;
g.reset = function () {
    this.ga = Tf
};
g.show = function () {
    this.ga = 0;
    this.mg()
};
g.v = function () {
    this.ga = 2;
    this.Mf()
};
function Uf(a) {
    a.ga = 1;
    S(function () {
        this.dispatchEvent(new O("show"))
    }, 0, a)
}
function Vf(a) {
    a.ga = Tf;
    S(function () {
        this.dispatchEvent(new O("hide"))
    }, 0, a)
}
g.mg = function () {
    this.element && (this.element.style.display = "block");
    Uf(this)
};
g.Mf = function () {
    this.element && (this.element.style.display = "none");
    Vf(this)
};
function Wf() {
    O.call(this, "complete")
}
function Xf(a) {
    R.call(this);
    this.Mb = new Jd;
    this.ma = !1;
    this.Mc = a || this;
    this.s = {};
    this.Oe = this.Fc = this.D = this.w = null;
    this.Ue = this.Te = this.Se = this.He = !1;
    this.ya = null;
    P(this.Mc, "complete", this.hd, !1, this)
}
z(Xf, R);
g = Xf.prototype;
g.rb = function (a) {
    a != this.ma && ((this.ma = !!a) ? P(this.Mb, "navigate", this.Ef, !1, this) : Q(this.Mb, "navigate", this.Ef, !1, this), this.Mb.rb(this.ma))
};
function Yf(a, b, c) {
    if (a.s[b]) {
        var d = a.s[b];
        a.s[b].Kc = null;
        a.Mc.yg(d);
        delete a.s[b]
    }
    a.Mc.Pe(c);
    c.Kc = b;
    a.s[b] = c
}
g.Pe = function (a) {
    P(a, "show", this.Gf, !1, this);
    P(a, "hide", this.Ff, !1, this)
};
g.yg = function (a) {
    Q(a, "show", this.Gf, !1, this);
    Q(a, "hide", this.Ff, !1, this)
};
g.Ef = function (a) {
    if (!this.He) {
        a = (a.Qh || "").split("/");
        var b = a.shift(), c = this.ne(b);
        c && (c.Kc !== b && (this.He = !0, Td(this.Mb, c.Kc), this.He = !1), this.navigate(c, a), this.vg(b))
    }
};
g.ne = function (a) {
    return this.s[a]
};
g.vg = function () {
};
g.eb = function () {
    var a = this.Fc || this.D || this.w;
    if (a)for (var b in this.s)if (this.s[b] === a)return b
};
g.navigate = function (a, b) {
    a || (this.ya || (this.ya = new Sf, this.Mc.Pe(this.ya)), a = this.ya);
    this.D ? a !== this.D && (this.Fc = a, this.Oe = b) : a !== this.w && this.Mc.transition(this.D = a, b)
};
function Zf(a, b, c, d) {
    a.dispatchEvent({type: b, dd: c == a.ya ? null : c, Rd: d == a.ya ? null : d})
}
g.transition = function (a) {
    !this.Se && this.w ? this.Te ? this.Ue = !0 : (this.Se = !0, Zf(this, "transitionStart", this.w, a), this.w.v()) : this.w || (Zf(this, "transitionStart", null, a), $f(this))
};
g.Gf = function () {
    this.Te = !1;
    this.Ue ? (this.Ue = !1, this.D.v()) : this.dispatchEvent(new Wf)
};
g.Ff = function () {
    this.Se = !1;
    $f(this)
};
function $f(a) {
    a.Te = !0;
    Zf(a, "transitionSwap", a.w, a.D);
    a.D.show()
}
g.hd = function () {
    var a = this.w, b = this.D;
    this.w = this.D == this.ya ? null : this.D;
    this.D = null;
    this.ya && this.ya.reset();
    Zf(this, "transitionEnd", a, b);
    this.Fc && (a = this.Fc, b = this.Oe, this.Oe = this.Fc = null, this.navigate(a, b))
};
var ag = pb && G(15), bg = rb && pb, cg = !B || G(9), dg = cg && (!B || G(10)) && (!pb || G(15)) && (!bg || ba.$h.Xh(16)), eg = dg && !B, fg = !B || G(10), X = F || ag ? "webkitTransform" : C ? "MozTransform" : pb ? "OTransform" : B ? "msTransform" : "transform", gg = F || ag ? "webkitTransformOrigin" : C ? "MozTransformOrigin" : pb ? "OTransformOrigin" : B ? "msTransformOrigin" : "transformOrigin", hg = F ? "webkitTransition" : C ? "MozTransition" : pb ? "OTransition" : B ? "msTransition" : "transition", ig = 19 / 30, jg = !B || G(9), kg = !B || G(9), lg = null;
function mg() {
    if (!lg) {
        var a = 83 * Math.PI / 180;
        lg = new Wd(0, Math.cos(a), Math.sin(a))
    }
    return lg
}
var ng = 0;
function og(a, b, c) {
    a = a + " " + b.toFixed(3) + "s";
    c && (a += " " + c);
    return a
}
function pg() {
    var a = J("qpaper-global-perspective");
    a || (a = mc("div", "qpaper-perspective"), a.id = "qpaper-global-perspective", document.body.appendChild(a));
    1 === ++ng && (a.style.display = "block");
    return a
}
function qg(a) {
    a && 0 === --ng && (J("qpaper-global-perspective").style.display = "none")
}
function rg(a, b, c) {
    this.ae = r(b) ? b : [b];
    this.Ze = this.Ca = 0;
    this.Ta = -1;
    this.ad = this.Ab = this.gc = null;
    this.ge = a;
    this.hg = r(c) ? c : [c];
    this.Ie = null;
    this.Va = !0;
    this.hg.length = this.ae.length
}
function Y(a, b, c) {
    if (r(b))for (var d = 0; d < b.length; ++d)Y(a, b[d], c); else fa(b) ? a.Va ? b > a.Ca && (a.Ca = b) : (c = x(), c + b > (a.Ze || c) + a.Ca && (U(a.Ta), a.Ze = c, a.Ta = S(a.If, a.Ca = b, a))) : (b = {
        target: b,
        event: c,
        Wa: !1,
        next: null
    }, a.gc && (b.next = a.gc), a.gc = b, a.Va || P(b.target, b.event, a.Lb, !1, a));
    return a
}
g = rg.prototype;
g.cancel = function (a, b) {
    if (r(a))for (var c = 0; c < a.length; ++c)this.cancel(a[c], b); else c = {
        target: a,
        event: b,
        Wa: !1,
        next: null
    }, this.Ab && (c.next = this.Ab), this.Ab = c, this.Va || P(c.target, c.event, this.tc, !1, this);
    return this
};
g.Vg = function (a, b) {
    var c = {Ng: a, scope: b, next: null};
    this.ad && (c.next = this.ad);
    this.ad = c;
    return this
};
g.If = function () {
    this.Ta = -1;
    this.Lb()
};
function sg(a) {
    var b;
    -1 < a.Ta && (U(a.Ta), a.Ta = -1);
    if (b = a.gc) {
        do b.Wa || Q(b.target, b.event, a.Lb, !1, a); while (b = b.next)
    }
    if (b = a.Ab) {
        do b.Wa || Q(b.target, b.event, a.tc, !1, a); while (b = b.next)
    }
    if (b = a.ad) {
        do b.Ng.call(b.scope); while (b = b.next)
    }
}
g.Lb = function (a) {
    var b, c = !0;
    if (b = this.gc) {
        do a && b.target == a.currentTarget && b.event == a.type ? (Q(b.target, b.event, this.Lb, !1, this), b.Wa = !0) : b.Wa || (c = !1); while (b = b.next)
    }
    c && this.Va && -1 === this.Ta && (a = this.ge, sg(a.lb), tg(a))
};
g.tc = function (a) {
    var b, c = !1;
    if (b = this.Ab) {
        do if (a && b.target == a.currentTarget && b.event == a.type && (Q(b.target, b.event, this.tc, !1, this), b.Wa = !0), b.Wa) {
            c = !0;
            break
        } while (b = b.next)
    }
    c && this.Va && ug(this.ge);
    return c
};
function vg() {
    R.call(this);
    this.kb = this.pa = null;
    this.rg = !1;
    this.ka = this.h = this.lb = null
}
z(vg, R);
g = vg.prototype;
g.cancel = function () {
    this.lb && ug(this)
};
g.add = function (a, b) {
    var c = a, d = b, e = c instanceof vg;
    e && (d = c, c = d.start);
    c = new rg(this, c, d);
    e && (Y(c, d, "end"), c.cancel(d, "cancel"));
    this.pa ? this.kb = this.kb.Ie = c : this.pa = this.kb = c;
    return c
};
g.split = function (a, b) {
    return this.add(function () {
        var c = a.call(b);
        if (c) {
            this.pa = c.pa;
            this.kb = c.kb;
            for (var d = this.pa; d;)d.ge = this, d = d.Ie;
            if (c.ka)for (d = 0; d < c.ka.length; ++d)this.ka.push(c.ka[d])
        }
    }, this)
};
g.Xa = function (a, b) {
    var c = b ? u(a, b) : a;
    this.ka ? this.ka.push(c) : this.ka = [c]
};
g.aa = function (a) {
    this.h || (this.h = new Bd(1E3));
    return Y(this.add(function () {
        this.h.setInterval(a);
        this.h.start()
    }, this), this.h, "tick").Vg(function () {
        this.h.stop()
    }, this)
};
g.gf = function () {
    if (this.ka) {
        var a = this.ka;
        this.ka = null;
        for (var b = 0, c = a.length; b < c; ++b)a[b].call()
    }
};
g.start = function () {
    this.rg || (this.rg = !0, this.dispatchEvent("start"), tg(this))
};
function tg(a) {
    if (a.pa) {
        a.lb = a.pa;
        a.pa = a.pa.Ie;
        a = a.lb;
        var b;
        a.Va = !1;
        if (b = a.gc) {
            do P(b.target, b.event, a.Lb, !1, a); while (b = b.next)
        }
        if (b = a.Ab) {
            do P(b.target, b.event, a.tc, !1, a); while (b = b.next)
        }
        0 < a.Ca && (a.Ze = x(), a.Ta = S(a.If, a.Ca, a));
        b = 0;
        for (var c = a.ae.length; b < c; ++b)a.ae[b].call(a.hg[b], a);
        a.Va = !0;
        a.tc() || a.Lb()
    } else a.lb = a.kb = null, S(a.gf, 0, a), a.dispatchEvent("end")
}
function ug(a) {
    sg(a.lb);
    a.pa = a.kb = a.lb = null;
    S(a.gf, 0, a);
    a.dispatchEvent("cancel")
}
function wg(a, b, c) {
    this.size = a || new H(0, 0);
    this.position = b || new ec(0, 0);
    this.transform = c || $d()
}
function xg(a) {
    var b = $d();
    return new wg(new H(a.width, a.height), new ec(a.left, a.top), b)
}
wg.prototype.clone = function () {
    var a = this.size.clone(), b = this.position.clone(), c = this.transform, d = new Float32Array(16);
    d[0] = c[0];
    d[1] = c[1];
    d[2] = c[2];
    d[3] = c[3];
    d[4] = c[4];
    d[5] = c[5];
    d[6] = c[6];
    d[7] = c[7];
    d[8] = c[8];
    d[9] = c[9];
    d[10] = c[10];
    d[11] = c[11];
    d[12] = c[12];
    d[13] = c[13];
    d[14] = c[14];
    d[15] = c[15];
    return new wg(a, b, d)
};
wg.prototype.L = function () {
    return new Ac(this.position.x, this.position.y, this.size.width, this.size.height)
};
wg.prototype.translate = function (a, b, c) {
    this.position.x += a;
    this.position.y += b;
    0 < Math.abs(c) && ae(this.transform, 0, c);
    return this
};
wg.prototype.rotate = function (a, b, c, d) {
    be(this.transform, a, b, c, d);
    return this
};
function yg(a) {
    R.call(this);
    this.a = a || mc("div", "qpaper");
    this.bc = 0;
    if (a) {
        var b = parseInt(je(a, "qpaperScaleZ"));
        0 < b && (this.bc = b)
    }
    this.za = 0;
    a && (b = parseInt(je(a, "qpaperOffsetZ")), 0 < b && (this.za = b));
    this.Sc = 0;
    a && (b = parseInt(je(a, "qpaperBaseZ")), 0 < b && (this.Sc = b));
    this.Ld = -1;
    this.U = this.la = this.F = this.Fa = null;
    a && this.Zc()
}
z(yg, R);
g = yg.prototype;
g.b = function () {
    return this.a
};
function zg(a, b, c) {
    b ? (ee(a.a, "noshadow"), a.Ld = p(c) ? c : -1) : (V(a.a, "noshadow"), a.Ld = -1)
}
g.L = function () {
    return Mc(this.a)
};
g.transition = function (a, b, c, d) {
    Ag(this, new oe(this.a, a, b, c, d || og("all", a, "cubic-bezier(0.75,0.1,0.1,1.0)")))
};
g.Zc = function () {
    this.Fa = L("qpaper-content", this.a);
    if (!this.Fa) {
        this.Fa = mc("div", "qpaper-content");
        var a = this.a.childNodes;
        if (a)for (var b = a.length - 1; 0 <= b; --b) {
            var c = this.Fa;
            c.insertBefore(a[b], c.childNodes[0] || null)
        }
        this.a.appendChild(this.Fa)
    }
    this.update()
};
function Bg(a, b) {
    b ? (a.Fa.style.opacity = "0", a.dispatchEvent("contentTransEnd")) : Cg(a, new oe(a.Fa, .5, null, {opacity: "0"}, og("opacity", .5)))
}
function Dg(a) {
    Cg(a, new oe(a.Fa, .5, null, {opacity: "1"}, "opacity 0.5s"))
}
g.ah = function () {
    vd(this.la);
    this.la = null;
    this.dispatchEvent("contentTransEnd")
};
g.$g = function () {
    vd(this.la);
    this.la = null;
    this.dispatchEvent("contentTransCancel")
};
g.mh = function () {
    vd(this.F);
    this.F = null;
    S(function () {
        this.dispatchEvent("transEnd")
    }, 0, this)
};
g.lh = function () {
    vd(this.F);
    this.F = null;
    S(function () {
        this.dispatchEvent("transCancel")
    }, 0, this)
};
function Ag(a, b) {
    a.F && a.F.stop();
    a.F = b;
    P(a.F, "end", a.mh, !1, a);
    P(a.F, "stop", a.lh, !1, a);
    C ? S(a.F.play, 50, a.F) : a.F.play()
}
function Cg(a, b) {
    a.la && a.la.stop();
    a.la = b;
    P(a.la, "end", a.ah, !1, a);
    P(a.la, "stop", a.$g, !1, a);
    a.la.play()
}
g.reset = function () {
    if (this.U) {
        var a = this.U;
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 0;
        a[5] = 1;
        a[6] = 0;
        a[7] = 0;
        a[8] = 0;
        a[9] = 0;
        a[10] = 1;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    }
};
g.update = function (a, b, c) {
    var d, e = {};
    this.U || (this.U = $d());
    if (a) {
        e.position = "absolute";
        e.left = a.position.x + "px";
        e.top = a.position.y + "px";
        e.width = a.size.width + "px";
        e.height = a.size.height + "px";
        d = this.U;
        var f = a.transform;
        d[0] = f[0];
        d[1] = f[1];
        d[2] = f[2];
        d[3] = f[3];
        d[4] = f[4];
        d[5] = f[5];
        d[6] = f[6];
        d[7] = f[7];
        d[8] = f[8];
        d[9] = f[9];
        d[10] = f[10];
        d[11] = f[11];
        d[12] = f[12];
        d[13] = f[13];
        d[14] = f[14];
        d[15] = f[15]
    }
    (this.Sc || this.za) && this.Sc != this.za && ae(this.U, 0, this.Sc - this.za);
    if (this.bc) {
        d = 1 / (1 + this.bc / 1E3);
        var f = this.U, h =
            f[1] * d, k = f[2] * d, m = f[3] * d, q = f[4] * d, n = f[5] * d, w = f[6] * d, v = f[7] * d, T = f[8] * d, E = f[9] * d, I = f[10] * d, la = f[11] * d, aa = f[12], ga = f[13], y = f[14], Ha = f[15];
        f[0] *= d;
        f[1] = h;
        f[2] = k;
        f[3] = m;
        f[4] = q;
        f[5] = n;
        f[6] = w;
        f[7] = v;
        f[8] = T;
        f[9] = E;
        f[10] = I;
        f[11] = la;
        f[12] = aa;
        f[13] = ga;
        f[14] = y;
        f[15] = Ha
    }
    if (a || this.bc || this.za) {
        a = "matrix3d(" + this.U[0].toFixed(3);
        for (d = 1; 16 > d; ++d)a += "," + this.U[d].toFixed(3);
        a += ")"
    } else a = "";
    e[X] = a;
    Ta(ce(this.a), "noshadow") || (a = -1 < this.Ld ? this.Ld : (this.U ? this.U[14] : 0) + this.za, jg && (e.boxShadow = Eg(this, a)));
    0 < b ? Ag(this,
        new oe(this.a, b, null, e, c || og("all", b, "cubic-bezier(0.75,0.1,0.1,1.0)"))) : N(this.a, e)
};
g.v = function () {
    this.a.style.visibility = "hidden"
};
g.show = function () {
    this.a.style.visibility = ""
};
function Fg(a, b, c, d) {
    d = d || .6;
    var e = new vg, f = {}, h = .5 * b.size.height, k = b.transform[14], m = "translateY(" + h + "px) rotateX(" + -Math.atan(.75 * k / b.size.height) + "rad) translateY(" + -h + "px) translateZ(" + -a.za + "px)", q = "translateZ(" + (k - a.za) + "px)";
    a.bc && (h = 1 / (1 + a.bc / 1E3), m = "scale(" + h.toFixed(3) + ") " + m, q = "scale(" + h.toFixed(3) + ") " + q);
    var n = .5 * d, w = .5 * d, v = og("all", w, "cubic-bezier(0.5,0,0.5,1)");
    Y(e.add(function () {
        f[X] = m;
        this.transition(2 * n / 3, null, f, og("all", n, "ease-out"), !0)
    }, a), a, "transEnd");
    Y(e.add(function () {
        f[X] =
            q;
        c ? c.update(b, w, v) : jg && (f.boxShadow = Eg(this, k));
        this.transition(w, null, f, v)
    }, a), a, "transEnd");
    return e
}
function Eg(a, b) {
    a.L();
    var c = p(b) ? b : (a.U ? a.U[14] : 0) + a.za;
    return Gg(Hg(new Ig, mg(), c))
}
function Jg(a) {
    if (a.parentNode) {
        var b = Fc(), c = M(), d = Mc(a);
        a = d.top - b.y;
        var b = d.left - b.x, e = a + d.height, d = b + d.width;
        0 > a ? a = 0 : a > c.height && (a = c.height);
        0 > b ? b = 0 : b > c.width && (b = c.width);
        0 > e ? e = 0 : e > c.height && (e = c.height);
        0 > d ? d = 0 : d > c.width && (d = c.width);
        return new Ac(b, a, d - b, e - a)
    }
    return new Ac(0, 0, 0, 0)
}
function Ig() {
    this.offset = new ec(0, 2);
    this.je = fa(void 0) && !isNaN(void 0) ? void 0 : 3;
    this.Xe = 0;
    this.alpha = fa(void 0) && !isNaN(void 0) ? void 0 : .05
}
function Hg(a, b, c) {
    var d = c / b.z;
    a.offset.x = b.x * d;
    a.offset.y = b.y * d + 2;
    a.Xe = Math.min(Math.round(c / 20), 5);
    a.je = Math.min(Math.round(3 + c / 6), 20);
    a.alpha = .05;
    return a
}
function Gg(a) {
    return Math.round(a.offset.x) + "px " + Math.round(a.offset.y) + "px " + a.je + "px " + a.Xe + "px rgba(0,0,0," + a.alpha.toFixed(3) + ")"
}
function Kg() {
    this.a = mc("div", "qpaper-shadow");
    this.Ra = new Ig;
    jg && (this.a.style.boxShadow = Gg(this.Ra))
}
Kg.prototype.b = function () {
    return this.a
};
Kg.prototype.show = function () {
    this.a.style.visibility = ""
};
Kg.prototype.v = function () {
    this.a.style.visibility = "hidden"
};
Kg.prototype.update = function (a, b, c, d) {
    var e = a.transform[14];
    Hg(this.Ra, mg(), e);
    e = {
        left: a.position.x + this.Ra.offset.x + "px",
        top: a.position.y + this.Ra.offset.y + "px",
        width: a.size.width + "px",
        height: a.size.height + "px"
    };
    if (d)for (var f in d)e[f] = d[f];
    a = a.transform;
    d = "matrix3d(" + a[0].toFixed(3);
    for (f = 1; 16 > f; ++f)d += "," + a[f].toFixed(3);
    e[X] = d + ")";
    jg && (e.boxShadow = "0px 0px " + this.Ra.je + "px " + this.Ra.Xe + "px rgba(0,0,0," + this.Ra.alpha + ")");
    e.background = kg ? "rgba(0,0,0," + this.Ra.alpha + ")" : "#000";
    0 < b ? (this.F = new oe(this.a,
        b, null, e, c || og("all", b, "cubic-bezier(0.75,0.1,0.1,1.0)")), C ? S(this.F.play, 50, this.F) : this.F.play()) : N(this.a, e)
};
function Lg(a) {
    this.a = a;
    this.Aa = null;
    this.Zc()
}
function Mg(a) {
    var b;
    if (b = a.length) {
        for (var c = a[0].L(), d = 1; d < b; ++d) {
            var e = a[d].L();
            if (0 < e.width && 0 < e.height) {
                var f = e;
                if (c && f) {
                    var e = c = c.clone(), h = Math.max(e.left + e.width, f.left + f.width), k = Math.max(e.top + e.height, f.top + f.height);
                    e.left = Math.min(e.left, f.left);
                    e.top = Math.min(e.top, f.top);
                    e.width = h - e.left;
                    e.height = k - e.top
                } else c = null
            }
        }
        return c
    }
}
function Ng(a) {
    var b = 0;
    switch (a) {
        case 1:
            b = 6;
            break;
        case 2:
            b = 0;
            break;
        case 3:
            b = 1;
            break;
        default:
            b = 4
    }
    return b
}
function Og(a) {
    var b = a & 4, c = a & 2, d = a & 1;
    return function (a, f) {
        var h = a.L(), k = f.L(), m = c ? k.left - h.left : h.left - k.left, h = d ? k.top - h.top : h.top - k.top;
        return b ? m || h : h || m
    }
}
function Pg(a) {
    a = Va(a.Aa);
    if (0 < a.length) {
        Ya(a, Og(0));
        for (var b = a[0].L(), c = 1, d = a.length; c < d; ++c) {
            var e = a[c].L();
            if (e.left < b.left + b.width)return !1;
            b = e
        }
    }
    return !0
}
function Qg(a) {
    a = a.Aa;
    if (0 < a.length) {
        a = Va(a);
        Ya(a, Og(0));
        for (var b = a[0].L(), c = 1, d = a.length; c < d; ++c) {
            var e = a[c].L();
            if (e.top < b.top + b.height)return !1;
            b = e
        }
    }
    return !0
}
Lg.prototype.Zc = function () {
    var a, b, c, d, e = this.Aa;
    this.Aa = [];
    var f = W(".qpaper", this.a);
    a = 0;
    for (b = f.length; a < b; ++a) {
        var h = null;
        if (e)for (c = 0, d = e.length; c < d; ++c)if (e[c].b() === f[a]) {
            h = Wa(e, c, 1)[0];
            break
        }
        this.Aa[a] = h || new yg(f[a])
    }
    if (e)for (a = 0, b = e.length; a < b; ++a)e[a].Za()
};
Lg.prototype.update = function () {
    this.Zc()
};
function Rg(a) {
    for (var b = [], c = 0, d = a.Aa.length; c < d; ++c) {
        var e;
        e = a.Aa[c];
        e.a.parentNode ? (e = Jg(e.a), e = 0 < e.width && 0 < e.height) : e = !1;
        e && b.push(a.Aa[c])
    }
    return b
}
function Sg() {
    R.call(this);
    this.V = null
}
z(Sg, R);
Sg.prototype.l = function () {
    this.V && (vd(this.V), this.V.cancel(), this.V = null);
    R.l.call(this)
};
function Tg(a) {
    a.V && (vd(a.V), a.V.cancel());
    a.V = new vg;
    a.V.add(a.ca, a);
    a.zb(a.V);
    a.V.Xa(a.Xa, a);
    return a.V
}
Sg.prototype.ca = function () {
};
Sg.prototype.zb = function () {
};
Sg.prototype.Xa = function () {
};
function Ug(a) {
    Sg.call(this);
    this.target = a
}
z(Ug, Sg);
Ug.prototype.ca = function () {
    this.B = pg();
    this.I = new yg;
    this.M = new Kg;
    zg(this.I, !1);
    var a = this.target.clone();
    this.Ba && (a.size.width = this.Ba.width, a.size.height = this.Ba.height);
    a.transform = this.Rh;
    this.qg = a;
    this.I.update(this.qg);
    this.M.update(this.qg);
    this.I.v();
    this.M.v();
    qc(this.B, this.M.b(), this.I.b())
};
Ug.prototype.zb = function () {
    throw"Implementations should override build.";
};
Ug.prototype.Xa = function () {
    sc(this.I.b());
    sc(this.M.b());
    qg(this.B);
    this.B = null
};
function Vg(a, b, c, d) {
    this.Rh = b;
    this.bd = d || ig;
    this.Ba = c;
    Ug.call(this, a)
}
z(Vg, Ug);
Vg.prototype.zb = function (a) {
    a.aa(100);
    a.add(function (a) {
        this.I.show();
        this.M.show();
        Y(a, this.I, "transEnd");
        this.I.update(this.target, this.bd);
        this.M.update(this.target, this.bd)
    }, this)
};
function Wg(a, b, c, d) {
    Sg.call(this);
    this.Ac = a;
    this.target = b;
    this.Ug = d || 3;
    this.of = c;
    this.m = [];
    this.T = []
}
z(Wg, Sg);
g = Wg.prototype;
g.ff = function () {
    return .1
};
g.ca = function (a) {
    this.B = pg();
    this.c = Rg(this.Ac);
    if (this.c.length) {
        Ya(this.c, Og(this.Ug));
        if (this.of)for (var b = 0, c = this.c.length - 1; b < c; ++b)if (this.c[b].b() === this.of) {
            var d = this.c[c];
            this.c[c] = this.c[b];
            this.c[b] = d;
            break
        }
        d = this.ff(this.c);
        b = 0;
        for (c = this.c.length; b < c; ++b)this.T[b] = new vg, this.m[b] = new yg, this.m[b].v(), this.B.appendChild(this.m[b].b()), d && this.T[b].aa(b * d * 1E3), Y(this.T[b].add(function () {
            Bg(this)
        }, this.c[b]), this.c[b], "contentTransEnd"), this.T[b].add(u(this.Nh, this, b)), Y(a, this.T[b],
            "end"), this.T[b].start()
    }
};
g.zb = function (a) {
    a.aa(100)
};
g.Nh = function (a, b) {
    var c = xg(this.c[a].L());
    this.m[a].update(c);
    this.m[a].show();
    this.c[a].v();
    this.wg(this.m[a], a, c, b)
};
g.Xa = function () {
    for (var a = 0; a < this.m.length; ++a)sc(this.m[a].b());
    qg(this.B);
    this.B = null
};
function Xg(a, b, c) {
    Wg.call(this, a, b, c, 3)
}
z(Xg, Wg);
Xg.prototype.wg = function (a, b, c, d) {
    Y(d, a, "transEnd");
    this.target && this.c && b === this.c.length - 1 ? a.update(this.target, 1.5 * ig) : (c.translate(0, M().height, 0), c.rotate((.5 < Math.random() ? 1 : -1) * (.5 * Math.PI - .5 * Math.random()), 0, 0, 1), a.update(c, ig, og("all", ig, "cubic-bezier(.93,0,.97,.48)")))
};
function Yg(a, b, c) {
    var d = Ng(c);
    Wg.call(this, a, b, null, d & -5 | 0);
    this.We = ig;
    this.Od = c
}
z(Yg, Wg);
Wg.prototype.ff = function (a) {
    return .3 / a.length
};
Yg.prototype.wg = function (a, b, c, d) {
    Y(d, a, "transEnd");
    if (this.target && this.c && b === this.c.length - 1)a.update(this.target, 1.5 * ig); else {
        switch (this.Od) {
            case 1:
                c.translate(-M().width, 0, 0);
                break;
            case 2:
                c.translate(0, M().height, 0);
                break;
            case 3:
                c.translate(0, -M().height, 0);
                break;
            default:
                c.translate(M().width, 0, 0)
        }
        a.update(c, ig)
    }
};
function Zg(a, b, c) {
    Sg.call(this);
    this.Ac = b;
    this.target = a;
    this.We = ig;
    this.Od = 0 <= c && 4 > c ? c : 0;
    this.m = [new yg, new yg]
}
z(Zg, Sg);
g = Zg.prototype;
g.ca = function () {
    this.B = pg();
    this.c = Rg(this.Ac);
    this.B.appendChild(this.m[0].b());
    this.B.appendChild(this.m[1].b());
    this.m[1].v();
    this.m[0].update(this.target);
    for (var a = 0, b = this.c.length; a < b; ++a)Bg(this.c[a], !0), this.c[a].v();
    1 < this.c.length && (Ya(this.c, Og(Ng(this.Od))), this.Hc = Va(this.c))
};
g.zb = function (a) {
    a.add(function (a) {
        if (1 < this.c.length) {
            var c, d, e = new vg;
            c = 0;
            for (d = this.c.length - 1; c < d; ++c)e.add(this.Kh, this), e.add(u(this.Lh, this, c)), e.add(u(this.Oh, this, c)), e.aa(250);
            Y(a, e, "end");
            e.start()
        }
    }, this);
    a.aa(250);
    a.add(function () {
        1 < this.c.length ? this.m[1].v() : this.m[0].v();
        0 < this.c.length && (this.c[this.c.length - 1].show(), Dg(this.c[this.c.length - 1]))
    }, this)
};
g.Xa = function () {
    sc(this.m[0].b());
    sc(this.m[1].b());
    qg(this.B);
    this.B = null
};
g.Kh = function () {
    this.m[0].update(xg(Mg(this.Hc)));
    var a = Qc(this.Hc[0].b(), "margin");
    this.Hc.shift();
    var b = Mg(this.Hc);
    switch (this.Od) {
        case 1:
            b.left -= a.left + a.right;
            b.width = 0;
            break;
        case 2:
            b.top += b.height + a.bottom + a.top;
            b.height = 0;
            break;
        case 3:
            b.top -= a.top + a.bottom;
            b.height = 0;
            break;
        default:
            b.left += b.width + a.left + a.right, b.width = 0
    }
    this.m[1].update(xg(b))
};
g.Lh = function (a, b) {
    Y(b, this.m[0], "transEnd");
    Y(b, this.m[1], "transEnd");
    this.m[0].update(xg(this.c[a].L()), this.We);
    this.m[1].update(xg(Mg(this.Hc)), this.We);
    this.m[0].show();
    this.m[1].show()
};
g.Oh = function (a) {
    this.m[0].v();
    this.c[a].show();
    Dg(this.c[a])
};
function $g(a, b) {
    Sg.call(this);
    this.Ac = b;
    this.target = a;
    this.Cg = 100;
    this.Mh = .1;
    this.og = ig;
    this.u = [];
    this.T = []
}
z($g, Sg);
g = $g.prototype;
g.ca = function () {
    var a = this.target.transform[14];
    this.B = pg();
    this.c = Rg(this.Ac);
    this.Uf = this.target.clone().translate(0, 0, this.Cg - a);
    this.I = new yg;
    this.M = new Kg;
    zg(this.I, !0, 0);
    this.I.update(this.target);
    this.M.update(this.target);
    Ya(this.c, Og(3))
};
g.zb = function (a) {
    var b = this.target.transform[14];
    a.add(this.qh, this);
    a.split(function () {
        var a;
        1 == this.c.length ? (a = new vg, a.add(u(this.pg, this, 0)), a.add(u(this.tg, this, 0))) : a = 0 == this.c.length ? new vg : null;
        return a
    }, this);
    b < this.Cg && a.add(function (a) {
        var b = Fg(this.I, this.Uf, this.M);
        Y(a, b, "end");
        b.start()
    }, this);
    this.df(a);
    a.add(function (a) {
        for (var b = 0, e = this.c.length; b < e; ++b)this.T[b] = new vg, this.T[b].aa(b * this.Mh * 1E3), this.T[b].add(u(this.pg, this, b)), this.T[b].add(u(this.tg, this, b)), Y(a, this.T[b], "end"),
            this.T[b].start()
    }, this)
};
g.df = function () {
};
g.Xa = function () {
    sc(this.I.b());
    sc(this.M.b());
    for (var a = 0, b = this.u.length; a < b - 1; ++a)sc(this.u[a].b());
    qg(this.B);
    this.B = null
};
g.qh = function () {
    this.B.appendChild(this.M.b());
    for (var a = 0, b = this.c.length; a < b; ++a)Bg(this.c[a], !0), this.c[a].v(), a < b - 1 && (this.u[a] = new yg, this.u[a].v(), this.u[a].update(this.target), this.B.appendChild(this.u[a].b()));
    this.u[this.c.length - 1] = this.I;
    this.B.appendChild(this.I.b())
};
g.pg = function (a, b) {
    var c = this.c[a].L(), c = xg(c);
    this.u[a].show();
    Y(b, this.u[a], "transEnd");
    this.u[a].update(c, this.og);
    a == this.u.length - 1 && this.M.update(c, this.og, null, {opacity: "0"})
};
g.tg = function (a) {
    this.u[a].v();
    a == this.u.length - 1 && this.M.v();
    this.c[a].show();
    Dg(this.c[a])
};
function ah(a, b) {
    $g.call(this, a, b)
}
z(ah, $g);
ah.prototype.df = function (a) {
    a.add(function (a) {
        var c = .5 * Math.PI / (7 <= this.u.length ? this.u.length - 1 : 6), d = 30 * this.u.length;
        200 < d && (d = 200);
        for (var e = d / (this.u.length - 1), f = 0; f < this.u.length; ++f) {
            this.u[f].show();
            var h = this.Uf.clone(), k = this.u.length - 1 - f;
            h.rotate(c * k, 0, 0, 1);
            h.translate(.5 * -d + k * e, 0, 0);
            Y(a, this.u[f], "transEnd");
            this.u[f].update(h, .5);
            this.u[f] == this.I && this.M.update(h, .5)
        }
    }, this);
    a.aa(200)
};
var bh = -1 != bb.indexOf("CrOS"), ch = !rb && !tb && !bh && !ub && !vb && (!B || G(9)), dh = fg && !he, eh = cg && !he && !tb;
function fh(a, b, c, d) {
    this.path = a;
    this.width = b;
    this.height = c;
    this.Xf = d || ""
}
function gh(a) {
    R.call(this);
    this.a = a;
    this.xg = 3;
    this.xb = 1;
    this.f = L("video-main", this.a);
    this.g = L("video-loop", this.a);
    this.ra = !1;
    this.Z = L("video-poster", this.a);
    this.qa = this.Gc = this.Fe = this.Cc = this.ta = this.ec = !1;
    this.Z = L("video-poster", this.a);
    this.Ec = new Bd(1E3);
    this.Ee = new Bd(1E3);
    this.rd = this.sd = this.zc = 0;
    this.Ua = ch;
    P(this.Ec, "tick", this.ih, !1, this);
    P(this.Ee, "tick", this.gh, !1, this);
    N(this.f, {width: "100%"});
    N(this.f, {height: "100%"});
    N(this.f, {position: "absolute"});
    N(this.g, {width: "100%"});
    N(this.g,
        {height: "100%"});
    N(this.g, {position: "absolute"})
}
z(gh, R);
var hh = 0, ih = 0;
g = gh.prototype;
g.resize = function () {
    if (this.a && this.a.parentNode) {
        var a = Mc(this.a.parentNode);
        if (0 < a.width && 0 < a.height) {
            var b = new H(0, 0);
            this.xb < a.width / a.height ? (b.height = Math.ceil(a.width / this.xb), b.width = Math.ceil(b.height * this.xb)) : (b.width = Math.ceil(a.height * this.xb), b.height = Math.ceil(b.width / this.xb));
            N(this.a, {width: b.width + "px"});
            N(this.a, {height: b.height + "px"});
            N(this.a, {left: Math.floor(.5 * (a.width - b.width)) + "px"});
            N(this.a, {top: Math.floor(.5 * (a.height - b.height)) + "px"})
        } else S(this.resize, 100, this)
    }
};
g.b = function () {
    return this.a
};
function jh(a) {
    a.Ua && (a.ta ? a.qa ? (a.Z && N(a.Z, {"z-index": 204}), a.f && N(a.f, {"z-index": 205}), a.g && N(a.g, {"z-index": 206})) : (a.Z && N(a.Z, {"z-index": 205}), a.f && N(a.f, {"z-index": 206}), a.g && N(a.g, {"z-index": 204})) : (a.Z && N(a.Z, {"z-index": 206}), a.f && N(a.f, {"z-index": 205}), a.g && N(a.g, {"z-index": 204})))
}
g.Af = function () {
    this.qa && 0 < this.g.readyState && (this.g.load(), this.g.play())
};
g.ih = function () {
    if (this.f)if (0 < this.f.readyState && 0 < this.f.duration) {
        var a = 0;
        try {
            a = this.f.buffered.end(0)
        } catch (b) {
        }
        a > this.sd && (this.zc = x(), this.sd = a);
        var c = 5E3 < x() - this.zc;
        (a >= .5 * this.f.duration || c) && this.qe()
    } else 8E3 < x() - this.zc && kh(this)
};
function kh(a) {
    hh++;
    a.Ua = !1;
    a.f && (vd(a.f), N(a.f, {display: "none"}));
    a.g && (vd(a.g), N(a.g, {display: "none"}));
    a.dispatchEvent("ready");
    a.ra && lh(a)
}
g.load = function (a, b, c, d) {
    if (c != this.Ne) {
        this.pause();
        this.f && (Q(this.f, "timeupdate", this.Hf, !1, this), Q(this.f, "ended", this.Kf, !1, this), Q(this.f, "canplaythrough", this.qe, !1, this));
        this.g && (Q(this.g, "ended", this.Af, !1, this), Q(this.g, "timeupdate", this.Cf, !1, this), Q(this.g, "canplaythrough", this.Bf, !1, this));
        this.Oc = a;
        this.De = b;
        this.Ne = c;
        this.xg = d || 3;
        this.xb = a[0].width / a[0].height;
        this.Fe = this.Cc = this.ta = !1;
        N(this.Z, {"background-image": "url(" + this.Ne + ")"});
        this.ec = this.Gc = !1;
        a:if (!this.Gc) {
            this.Gc = !0;
            0 < ih ? this.Ua = !0 : 0 < hh && (this.Ua = !1);
            if (!this.Ua)this.f && N(this.f, {display: "none"}), this.g && N(this.g, {display: "none"}), this.dispatchEvent("ready"); else if (this.Oc && this.De) {
                d = c = "";
                a = 0;
                for (b = this.Oc.length; a < b; ++a) {
                    var e = "";
                    try {
                        e = this.f.canPlayType(this.Oc[a].Xf)
                    } catch (f) {
                    }
                    if (e && e.length) {
                        c = this.Oc[a].path;
                        break
                    }
                }
                a = 0;
                for (b = this.De.length; a < b; ++a) {
                    e = "";
                    try {
                        e = this.f.canPlayType(this.Oc[a].Xf)
                    } catch (h) {
                    }
                    if (e && e.length) {
                        d = this.De[a].path;
                        break
                    }
                }
                if (c.length && d.length)if (P(this.f, "timeupdate", this.Hf, !1, this),
                        P(this.f, "ended", this.Kf, !1, this), P(this.f, "canplaythrough", this.qe, !1, this), P(this.g, "ended", this.Af, !1, this), P(this.g, "timeupdate", this.Cf, !1, this), P(this.g, "canplaythrough", this.Bf, !1, this), this.zc = x(), this.sd = 0, this.Ec.start(), this.f.src = c, this.g.src = d, this.ra)this.play(); else {
                    try {
                        this.f.load()
                    } catch (k) {
                        this.Ec.stop();
                        kh(this);
                        break a
                    }
                    this.f.play();
                    this.f.pause()
                } else this.Ua = !1, this.f && N(this.f, {display: "none"}), this.g && N(this.g, {display: "none"}), this.Gc = !0, this.dispatchEvent("ready"), this.ra &&
                this.play()
            }
            jh(this)
        }
        jh(this)
    }
};
g.reset = function () {
    this.ec = !1;
    this.f && this.f.pause();
    this.g && this.g.pause();
    jh(this)
};
g.play = function () {
    this.ra = !0;
    if (this.Gc)if (this.qa && (this.qa = !1, this.g && this.g.pause()), this.Ua)if (N(this.f, {visibility: ""}), this.ta) {
        try {
            this.f.play()
        } catch (a) {
            this.ta = !1, kh(this)
        }
        jh(this)
    } else this.$e && (this.f.play(), this.f.pause()); else lh(this)
};
function lh(a) {
    a.ec || (a.ec = !0, a.dispatchEvent("trigger"))
}
function mh(a) {
    return !a.Ua || a.ta
}
g.Hf = function () {
    this.ta && this.ra && (!this.Fe && this.f.currentTime > .75 * this.f.duration && (this.Fe = !0, this.Cc = !1, this.g.load()), !this.ec && this.f.currentTime > this.xg && lh(this))
};
g.Cf = function () {
    this.qa && (this.rd = x())
};
g.gh = function () {
    this.qa && this.g && 0 < this.g.readyState && 3E3 < x() - this.rd && (this.rd = x() + 5E3, this.g.pause(), this.g.currentTime = 0, this.g.play())
};
g.qe = function () {
    !this.ta && 3 <= this.f.readyState && (this.Ec.stop(), ih++, this.ta = !0, this.dispatchEvent("ready"), this.ra && (this.f.play(), jh(this)))
};
g.Bf = function () {
    !this.Cc && 0 < this.g.readyState && (this.Cc = !0, nh(this))
};
function nh(a) {
    a.qa && a.Cc && (N(a.g, {visibility: ""}), a.rd = x(), a.g.play(), a.Ee.start(), jh(a))
}
g.Kf = function () {
    this.ra && (lh(this), this.qa = !0, nh(this), this.dispatchEvent("loop"))
};
g.pause = function () {
    this.Ec.stop();
    this.Ee.stop();
    this.zc = this.sd = 0;
    this.ra && (this.f && this.ta && this.f.pause(), this.qa && this.g && 0 < this.g.readyState && this.g.pause());
    this.ta && this.ra && this.Z && N(this.Z, {"background-image": "none"});
    this.Ne = null;
    this.ec = this.qa = this.ra = !1
};
g.clear = function () {
    this.Z && N(this.Z, {"background-image": "none"});
    this.f && N(this.f, {visibility: "hidden"});
    this.g && N(this.f, {visibility: "hidden"})
};
function Z(a) {
    Sf.call(this);
    this.kd = a;
    this.a = J(a);
    this.vd = new Lg(this.a)
}
z(Z, Sf);
g = Z.prototype;
g.resize = function () {
};
g.wb = function () {
};
g.lc = function () {
};
g.Pa = function () {
    V(this.a, "preload-assets");
    new Pf
};
g.Dc = function () {
    this.qb()
};
g.qb = function () {
    this.dispatchEvent("readyForTransitionOff")
};
g.vb = function () {
    V(this.a, "trans-on");
    var a = this.cb();
    if (a)for (var b = 0; b < a.length; ++b)V(a[b], "trans-on");
    N(this.a, {display: "block"});
    N(this.a, {visibility: ""});
    if (a = this.cb())for (b = 0; b < a.length; ++b)N(a[b], {display: "block"}), N(a[b], {visibility: ""});
    S(this.Mg, 500, this)
};
g.Mg = function () {
    V(this.a, "on");
    var a = this.cb();
    if (a)for (var b = 0; b < a.length; ++b)V(a[b], "on")
};
g.cb = function () {
    return null
};
function oh(a) {
    V(a.a, "trans-off");
    var b = a.cb();
    if (b)for (var c = 0; c < b.length; ++c)V(b[c], "trans-off");
    S(a.Lg, 50, a)
}
g.Lg = function () {
    ge(this.a);
    var a = this.cb();
    if (a)for (var b = 0; b < a.length; ++b)ge(a[b])
};
g.Ia = function () {
};
function ph(a) {
    N(a.a, {display: "none"});
    ee(a.a, "trans-on", "on", "trans-off", "off");
    if (a = a.cb())for (var b = 0; b < a.length; ++b)N(a[b], {display: "none"}), ee(a[b], "trans-on", "on", "trans-off", "off")
}
g.ed = function () {
    return this.kd
};
g.b = function () {
    return this.a
};
function qh(a, b, c) {
    Sf.call(this, b);
    this.name = a;
    this.Xc = !1;
    this.Fd = 0;
    this.ce = this.Bb = this.Cb = null;
    this.sb = [];
    this.Qb = new pe;
    this.wd = -1;
    re(this.Qb, "poster", c);
    P(this.Qb, "load", this.pe, !1, this)
}
z(qh, Sf);
qh.prototype.pe = function () {
    this.Qb && (Q(this.Qb, "load", this.pe, !1, this), this.Qb = null);
    -1 < this.wd && (U(this.wd), this.wd = -1);
    2 > this.Fd && (this.Fd = 2, 0 == this.ga && Uf(this))
};
qh.prototype.mg = function () {
    this.Xc = !1;
    N(this.element, {display: "inline-block"});
    this.Cb && this.ce || (this.Cb = L("caption", this.element), this.ce = L("qpaper", this.element), this.Bb = Kc(this.Cb));
    var a = Kc(this.ce);
    0 >= a.height && (a.height = 300);
    N(this.Cb, {top: -this.Bb.height + "px"});
    N(this.element, {top: M().height + "px"});
    this.element.style[gg] = "50% " + .5 * a.height / (a.height + this.Bb.height) * 100 + "%";
    this.element.style[X] = "translateY(" + .5 * this.Bb.height + "px) scale(1.2)";
    0 == this.Fd ? (this.Fd = 1, this.wd = S(this.pe, 5E3, this),
        this.Qb.start()) : Uf(this)
};
qh.prototype.Mf = function () {
    for (var a = 0; a < this.sb.length; ++a)-1 < this.sb[a] && (U(this.sb[a]), this.sb[a] = -1);
    this.Xc ? (this.Xc = !1, V(this.element, "off-trans"), S(function () {
        N(this.Cb, {top: -this.Bb.height + "px"});
        N(this.element, {top: Math.round(.5 * this.Bb.height) + "px"});
        S(function () {
            V(this.element, "off-trans-fall");
            S(function () {
                this.element.style.top = M().height + "px";
                this.element.style[X] = "rotate(" + 15 * (.5 < Math.random() ? 1 : -1) + "deg)"
            }, 50, this)
        }, 300, this)
    }, 50, this), S(this.pc, 1200, this)) : this.pc()
};
function rh(a) {
    a.Xc = !0;
    V(a.element, "on");
    a.sb[0] = S(function () {
        V(this.element, "on-trans");
        this.sb[1] = S(function () {
            N(this.element, {top: "0px"});
            this.sb[2] = S(function () {
                this.element.style[X] = "translateY(0px)";
                N(this.Cb, {top: "0px"})
            }, 1E3, this)
        }, 50, this)
    }, 50, a)
}
qh.prototype.pc = function () {
    N(this.element, {display: "none"});
    ee(this.element, "on", "on-trans", "off", "off-trans", "off-trans-fall");
    Vf(this)
};
function sh(a) {
    Z.call(this, "intro");
    this.s = [];
    this.Tc = null;
    this.ib = !1;
    this.gg = this.Tf = null;
    this.yb = [];
    this.Ob = this.qd = -1;
    this.H = 1;
    this.Sa = new Xf;
    this.pf = !0;
    this.bf = 10;
    this.K = -1;
    this.Zd = this.bb = !1;
    this.Oa = null;
    this.Gd = !0;
    this.Na = null;
    this.Yb = -1;
    this.wf = !0;
    this.$e = !1;
    this.G = [];
    this.sg = a;
    this.Ub = !ch && 768 >= window.screen.width;
    this.Ya = -1
}
z(sh, Z);
g = sh.prototype;
g.ca = function () {
    this.ib = !0;
    this.Oa = L("preload", this.b());
    this.Na = L("navigation", this.b());
    var a = W(".intro-section", this.b());
    this.gg = W(".right-arrow", this.b())[0];
    this.Tf = W(".left-arrow", this.b())[0];
    var b = W(".background", this.b());
    if (this.Ub)V(this.b(), "mobile"); else {
        for (var c = 0; c < b.length; ++c)if (Ta(ce(b[c]), "black"))this.cf = b[c]; else {
            var d = b[c], e = L("now-video", d), e = new gh(e);
            P(e, "trigger", this.nh, !1, this);
            this.yb.push(d);
            this.G.push(e)
        }
        P(this.Tf, "click", this.Fh, !1, this);
        P(this.gg, "click", this.yd,
            !1, this);
        P(this.Sa, "transitionStart", this.Th, !1, this);
        P(this.Sa, "transitionEnd", this.F, !1, this);
        P(this.Sa, "transitionEnd", this.Sh, !1, this);
        N(this.Na, {display: "none"});
        for (c = 0; c < a.length; ++c) {
            var e = a[c].getAttribute("data-subsection"), b = a[c], d = c, f = this.sg[e];
            if (f) {
                var h = f.firstFrame, f = f.poster;
                V(b, "vcenter");
                this.s[d] = new qh(e, b, ch ? h : f);
                Yf(this.Sa, e, this.s[d])
            }
        }
    }
};
function wh(a, b, c) {
    var d = a.sg[a.s[c].name];
    if (d) {
        a = d.firstFrame;
        c = d.poster;
        for (var e = d.delay, f = d.videos, h = d.loops, k = d.width, m = d.height, q = [], n = [], d = 0; d < f.length; ++d)q.push(new fh(f[d].src, k, m, f[d].type));
        for (d = 0; d < h.length; ++d)n.push(new fh(h[d].src, k, m, h[d].type));
        b.load(q, n, ch ? a : c, e);
        b.resize()
    }
}
g.wb = function () {
    this.Ub || P(this.b(), "click", this.zf, !1, this)
};
g.lc = function () {
    this.Ub || (Q(this.b(), "click", this.zf, !1, this), Q(window, ["blur", "unblur"], this.dh, !1, this))
};
g.Pa = function (a) {
    this.ib || this.ca();
    Z.prototype.Pa.call(this, a);
    this.Ub && N(this.Oa, {visibility: ""});
    this.bb = !1
};
g.Ia = function () {
    Z.prototype.Ia.call(this);
    V(J("header-background"), "off");
    this.Ub || (S(function () {
        Nc(this.cf, 1)
    }, 100, this), 0 > xh(this) && (wh(this, this.G[this.H], 0), this.wf || !mh(this.G[this.H]) ? (this.Gd = !0, N(this.Oa, {display: ""}), Nc(this.Oa, 1), N(this.Na, {display: "none"}), this.Yb = S(this.hh, 3E3, this)) : Nc(this.Na, 1), this.wf = !1, yh(this, 0)))
};
g.Dc = function () {
    this.bb = !0;
    U(this.Ya);
    this.Ya = -1;
    this.Ub ? (N(this.Oa, {visibility: "hidden"}), setTimeout(function () {
        ee(J("header-background"), "off")
    }, 500), this.qb()) : (-1 < this.K && (U(this.K), this.K = -1), -1 < this.Yb && (U(this.Yb), this.Yb = -1), Nc(this.Oa, 0), Nc(this.Na, 0), this.Sa.navigate(null))
};
g.resize = function () {
    if (!this.bb)for (var a = 0; a < this.G.length; ++a)this.G[a].resize(), this.G[a].resize()
};
function xh(a) {
    var b = -1;
    a.Sa.w && (b = Ma(a.s, a.Sa.w));
    return b
}
g.yd = function (a) {
    if (a)try {
        a.stopPropagation()
    } catch (b) {
    }
    a = xh(this) + 1;
    a >= this.s.length && (a = 0);
    yh(this, a)
};
g.Fh = function (a) {
    if (a)try {
        a.stopPropagation()
    } catch (b) {
    }
    a = xh(this) - 1;
    0 > a && (a = this.s.length - 1);
    yh(this, a)
};
g.F = function (a) {
    this.qd = a.dd ? Ma(this.s, a.dd) : -1;
    a = a.Rd ? Ma(this.s, a.Rd) : -1;
    U(this.Ya);
    var b = this.H;
    this.Gd && (b = 1 - this.H);
    this.Ob = b;
    this.H = 1 - b;
    this.yb[b].style.zIndex = 100;
    this.yb[this.H].style.zIndex = 200;
    -1 < a && (this.Gd ? mh(this.G[this.H]) ? this.se() : P(this.G[this.H], "ready", this.se, !1, this) : (b = this.G[this.H], wh(this, b, a), b.play()));
    Nc(this.yb[this.Ob], 0);
    fg ? this.Ya = S(function () {
        this.Ya = -1;
        -1 < this.Ob && this.G[this.Ob].clear()
    }, 1E3, this) : this.G[this.Ob].clear();
    -1 < a && S(function () {
        this.bb || Nc(this.yb[this.H],
            1)
    }, 500, this)
};
g.Th = function (a) {
    this.qd = a.dd ? Ma(this.s, a.dd) : -1;
    a = a.Rd ? Ma(this.s, a.Rd) : -1;
    -1 < this.qd && (this.Tc && ee(this.Tc[this.qd], "selected"), this.G[this.H].pause(), Q(this.G[this.H], "loop", this.re, !1, this));
    -1 < a && this.Tc && V(this.Tc[a], "selected")
};
g.Sh = function () {
    this.bb ? (Nc(this.yb[this.H], 0), Nc(this.cf, 0), setTimeout(function () {
        ee(J("header-background"), "off")
    }, 500), S(this.qb, 1500, this)) : P(this.G[this.H], "loop", this.re, !1, this)
};
g.re = function (a) {
    Q(a.currentTarget, "loop", this.re, !1, this);
    var b = xh(this), c = b + 1;
    c < this.s.length && S(function () {
        this.bb || xh(this) != b || (U(this.Ya), this.Ya = -1, wh(this, this.G[this.Ob], c))
    }, 5E3, this)
};
g.se = function (a) {
    a && Q(a.currentTarget, "ready", this.se, !1, this);
    this.$e = !0;
    zh(this)
};
function zh(a) {
    a.$e && -1 === a.Yb && (a.Gd = !1, Nc(a.Na, 0), N(a.Na, {display: ""}), Nc(a.Oa, 0), S(function () {
        N(this.Oa, {display: "none"});
        Nc(this.Na, 1)
    }, 500, a), a.G[a.H].play())
}
function yh(a, b) {
    -1 < a.K && (U(a.K), a.K = -1);
    !a.bb && 0 <= b && b < a.s.length && a.Sa.navigate(a.s[b])
}
g.nh = function (a) {
    a.currentTarget == this.G[this.H] && (a = xh(this), rh(this.s[a]), this.pf && !this.Zd && (-1 < this.K && (U(this.K), this.K = -1), this.K = S(this.yd, 1E3 * this.bf, this)))
};
g.hh = function () {
    this.Yb = -1;
    zh(this)
};
g.dh = function (a) {
    -1 < this.K && (U(this.K), this.K = -1);
    "blur" === a.type ? this.Zd = !0 : (this.Zd = !1, this.pf && (this.K = S(this.yd, 1E3 * this.bf, this)))
};
g.zf = function (a) {
    if (480 >= M().width) {
        for (a = a.target; a;) {
            if ("a" === (a.tagName || a.nodeName) || "A" === a.nodeName)return;
            a = a.parentNode
        }
        this.yd()
    }
};
function Ah(a) {
    Z.call(this, a);
    this.Ic = new se(this.fc, 500, this);
    this.nc = W(".qpaper .content", this.b());
    this.Pc = [];
    for (a = 0; a < this.nc.length; ++a)this.Pc[a] = !1
}
z(Ah, Z);
Ah.prototype.wb = function () {
    P(window, "scroll", this.Ic.vf, !1, this.Ic)
};
Ah.prototype.lc = function () {
    Q(window, "scroll", this.Ic.vf, !1, this.Ic);
    this.Ic.stop()
};
Ah.prototype.Ia = function () {
    Z.prototype.Ia.call(this);
    this.fc()
};
Ah.prototype.fc = function () {
    for (var a = 0, b = this.nc.length; a < b; ++a) {
        var c = Jg(this.nc[a]), d = 0 >= c.width || 50 > c.height;
        0 < c.width && 300 <= c.height ? this.Pc[a] || (this.Pc[a] = !0, c = L("zoom", this.nc[a]), void 0 != c && V(c, "on")) : d && this.Pc[a] && (c = L("zoom", this.nc[a]), void 0 != c && ee(c, "on"), this.Pc[a] = !1)
    }
};
function Bh(a, b) {
    this.element = a;
    this.z = b
}
Bh.prototype.update = function (a) {
    this.element.style[X] = "translateY(" + Math.round(a * this.z) + "px)"
};
function Ch() {
    Z.call(this, "what-is-it");
    this.Wb = W(".qpaper .content", this.b());
    this.Cd = [];
    this.Ke = 0;
    this.Dd = [];
    for (var a = 0; a < this.Wb.length; ++a) {
        var b = W("[data-parallax]", this.Wb[a]);
        this.Cd[a] = [];
        for (var c = 0; c < b.length; ++c)this.Cd[a][c] = new Bh(b[c], parseInt(je(b[c], "parallax")))
    }
}
z(Ch, Z);
g = Ch.prototype;
g.resize = function () {
    Dh(this)
};
g.wb = function () {
    eh && P(window, "scroll", this.Je, !1, this)
};
g.lc = function () {
    eh && Q(window, "scroll", this.Je, !1, this)
};
g.vb = function () {
    Z.prototype.vb.call(this);
    Dh(this)
};
g.Dc = function () {
    this.qb()
};
function Dh(a) {
    if (eh) {
        a.Ke = M().height;
        for (var b = 0; b < a.Wb.length; ++b)a.Dd[b] = Mc(a.Wb[b]);
        a.Je()
    }
}
g.Je = function () {
    for (var a = Fc().y + .5 * this.Ke, b = 0, c = this.Wb.length; b < c; ++b) {
        var d = (this.Dd[b].top + .5 * this.Dd[b].height - a) / (.5 * this.Ke + .5 * this.Dd[b].height);
        if (1 > Math.abs(d) && (N(this.Wb[b], {"background-position": "50% " + (50 + 50 * d).toFixed(3) + "%"}), cg))for (var e = 0, f = this.Cd[b].length; e < f; ++e)this.Cd[b][e].update(d)
    }
};
function Eh() {
    Z.call(this, "how-to-get-it");
    this.ib = !1;
    this.c = [];
    this.oa = [];
    this.Ud = 0
}
z(Eh, Z);
g = Eh.prototype;
g.Pa = function (a) {
    if (!this.ib)for (var b = this.vd.Aa, c = 0; c < b.length; ++c)this.c[c] = b[c], this.oa[c] = null;
    Z.prototype.Pa.call(this, a)
};
g.wb = function () {
    if (dh)for (var a = 0; a < this.c.length; ++a)P(this.c[a].b(), ["mouseover", "mouseout"], this.Df, !1, this)
};
g.lc = function () {
    if (dh)for (var a = 0; a < this.c.length; ++a)Q(this.c[a].b(), ["mouseover", "mouseout"], this.Df, !1, this)
};
g.Dc = function () {
    for (var a = this.Ud = 0; a < this.oa.length; ++a)this.oa[a] && (this.oa[a].cancel(), this.oa[a] = null, this.Ud++, P(this.c[a], "transEnd", this.Jf, !1, this), this.c[a].update(null, ig));
    0 == this.Ud && this.qb()
};
g.Jf = function (a) {
    Q(a.currentTarget, "transEnd", this.Jf, !1, this);
    0 == --this.Ud && this.qb()
};
g.Df = function (a) {
    if (dh) {
        for (var b = -1, c = null, d = 0; d < this.c.length; ++d)if (this.c[d].b() == a.currentTarget) {
            b = d;
            c = this.c[d];
            break
        }
        a.relatedTarget && uc(c.a, a.relatedTarget) || (this.oa[b] && (this.oa[b].cancel(), this.oa[b] = null), "mouseover" === a.type ? (a = xg(c.L()), a.translate(0, 0, 50), this.oa[b] = Fg(c, a, null, .3), this.oa[b].start()) : c.update(null, ig))
    }
};
function Fh(a, b, c, d, e, f, h, k, m) {
    this.id = a;
    this.title = b;
    this.Rg = c;
    this.description = d;
    this.La = f;
    this.Of = h;
    this.sh = k;
    this.Jg = m
}
function Gh(a) {
    var b;
    1 < window.devicePixelRatio ? (b = a.La.split("."), b = b[0] + "_2x." + b[1]) : b = a.La;
    return a.La && a.La.length && a.Of ? "images/cards/" + b : "images/cards_fpo.png"
}
function Hh(a) {
    var b;
    1 < window.devicePixelRatio ? (b = a.La.split("."), b = b[0] + "_2x." + b[1]) : b = a.La;
    return a.La && a.La.length && a.Of ? "images/cards/featured/" + b : "images/cards_fpo.png"
}
function Ih(a) {
    return a.title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
}
Fh.prototype.id = Fh.prototype.id;
Fh.prototype.title = Fh.prototype.title;
Fh.prototype.description = Fh.prototype.description;
function Jh() {
    R.call(this);
    this.le = J("cards-filter");
    this.Xg = new Je;
    this.Vc = J("card-categories");
    this.Rb = J("card-locations");
    this.cc = J("card-search");
    this.Ih = L("search-icon", this.le);
    this.Jh = new ye(this.cc);
    this.ig = this.Vf = this.kf = "";
    this.ib = !1;
    this.xc = new Bd(500);
    this.Sf = "";
    P(this.Jh, "key", this.kh, !1, this);
    P(this.xc, "tick", this.Hh, !1, this);
    P(this.Vc, "change", this.oc, !1, this);
    P(this.Vc, ["focus", "unfocus"], this.me, !1, this);
    this.Rb && (P(this.Rb, "change", this.oc, !1, this), P(this.Rb, ["focus", "unfocus"],
        this.me, !1, this));
    P(this.Ih, "click", this.oc, !1, this);
    P(this.cc, ["focus", "unfocus"], this.me, !1, this)
}
z(Jh, R);
g = Jh.prototype;
g.b = function () {
    return this.le
};
g.show = function () {
    if (!this.ib) {
        this.ib = !0;
        var a = this.Xg, b = this.le;
        if (a.hb)throw Error("Component already rendered");
        if (b) {
            a.Bg = !0;
            var c = hc(b);
            a.mc && a.mc.ba == c || (a.mc = fc(b));
            a.Yc(b);
            a.cd()
        } else throw Error("Invalid element to decorate");
    }
};
g.kh = function (a) {
    13 == a.keyCode ? (this.xc.stop(), this.oc(), a.preventDefault()) : this.xc.start()
};
g.me = function () {
    for (var a = document.activeElement, b = [this.Rb, this.Vc, this.cc], c = 0; c < b.length; ++c)b[c] && (b[c] === a ? V(b[c].parentNode, "focused") : ee(b[c].parentNode, "focused"))
};
g.Hh = function () {
    this.cc.value != this.Sf ? (this.Sf = this.cc.value, this.oc()) : this.xc.stop()
};
g.v = function () {
    this.xc.stop()
};
g.oc = function () {
    this.kf = this.Vc.value;
    this.Vf = this.Rb ? this.Rb.value : "";
    this.ig = this.cc.value.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
    this.dispatchEvent(new O("filter"))
};
function Kh(a) {
    R.call(this);
    this.j = J("cards-detail");
    this.th = L("ios-available", this.j);
    this.Kg = L("android-available", this.j);
    this.O = W(".flipper", this.j)[0];
    this.be = W(".front img", this.O)[0];
    this.Qg = W(".back h2", this.O)[0];
    this.Pg = W(".back p", this.O)[0];
    this.tf = a;
    this.S = this.$ = 1;
    this.te = this.Nd = !1;
    this.J = this.Eb = null;
    this.ve = {};
    this.X = !1
}
z(Kh, R);
function Lh(a, b, c) {
    a.ve[b] || (c || (c = mc("img"), c.src = b), a.ve[b] = c);
    return a.ve[b]
}
Kh.prototype.show = function (a, b, c) {
    this.Nd = !0;
    this.X = !!c;
    c = null;
    var d = Fc(), e = M();
    b && (this.J = W(".qpaper", b)[0], this.Eb = W("img", this.J)[0]);
    c = this.X ? Lh(this, Hh(a)) : Lh(this, Gh(a));
    c != this.be && (tc(c, this.be), this.be = c);
    wc(this.Qg, a.title);
    wc(this.Pg, a.description);
    this.th.style.display = a.sh ? "" : "none";
    this.Kg.style.display = a.Jg ? "" : "none";
    a = Mc(this.tf);
    b = this.J ? Mc(this.J) : null;
    if (!b || 0 >= b.width || 0 >= b.height) {
        var f;
        this.X && 1 < window.devicePixelRatio ? (b = c.width / 2, f = c.height / 2) : (b = c.width || 304, f = c.height || 300);
        b = new Ac(.5 * e.width - .5 * b, e.height + d.y, b, f)
    }
    var h, k, m, q = a.top + a.height, n = e.height + d.y;
    m = n - q;
    this.$ = this.S = 1.37;
    this.X && (this.$ = this.S = 417 / b.width);
    f = this.X ? Math.max(200, e.height - 100) : Math.max(200, m - 40);
    h = e.width - 30;
    b.width * this.$ > h && (this.S = this.$ = h / b.width);
    309 > b.width * this.$ && (this.S = this.$ = 309 / b.width);
    300 > b.height * this.S && (this.S = 300 / b.height);
    b.height * this.S > f && (this.S = f / b.height);
    f = b.width * this.$;
    h = b.height * this.S;
    k = Math.round(.5 * (e.width - f));
    this.X ? (d = d.y + .5 * (e.height - c.height), 100 > d && (d = 100)) :
        (d = q + Math.round(.5 * (m - h)), d < q && (d = q + 5));
    d + h > n && (h = n - d - 5, 300 > h && (h = 300), this.S = h / b.height);
    var w = L("front", this.O), v = L("back", this.O);
    if (dg && eg && fg) {
        v.style[X] = "rotateY(180deg)";
        e = Math.round(b.left - (k + .5 * (f - b.width)));
        m = Math.round(b.top - (d + .5 * (h - b.height)));
        var e = "translate(" + e + "px," + m + "px) scale(" + 1 / this.$ + "," + 1 / this.S + ")", T = "translate(0px,0px) scale(" + 1 / this.$ + "," + 1 / this.S + ")";
        this.X && (q = 1 < window.devicePixelRatio ? c.width / 2 : c.width, m = 1 < window.devicePixelRatio ? c.height / 2 : c.height, T = "translate(0px," +
            Math.round(.5 * (c.height - h)) + "px) scale(" + q / f + "," + m / h + ")");
        var E = this.X ? 2E3 : 0;
        !this.X && b.top < a.top + a.height && (E += 300);
        N(this.j, {width: f + "px"});
        N(this.j, {height: h + "px"});
        N(this.j, {left: k + "px"});
        N(this.j, {top: d + "px"});
        !this.X && E || N(this.j, {"z-index": 700});
        this.O.style[X] = e;
        N(this.j, {display: "block"});
        S(function () {
            this.J && N(this.J, {visibility: "hidden"});
            this.O.style[X] = E ? T : "translate(0px,0px) scale(1) rotateY(180deg)";
            E || S(function () {
                N(w, {visibility: "hidden"});
                N(v, {visibility: ""})
            }, 315, this)
        }, 60, this);
        E && S(function () {
            N(this.j, {"z-index": 700});
            this.O.style[X] = "translate(0px,0px) scale(1) rotateY(180deg)";
            S(function () {
                N(w, {visibility: "hidden"});
                N(v, {visibility: ""})
            }, 315, this)
        }, 60 + E, this);
        S(function () {
            this.X || N(this.j, {"z-index": ""});
            V(this.j, "unflip");
            this.Nd = !1;
            this.te && (this.te = !1, this.v())
        }, 660 + E, this)
    } else this.j.style[hg] = "none", this.O.style[hg] = "none", N(this.j, {width: f + "px"}), N(this.j, {height: h + "px"}), N(this.j, {left: k + "px"}), N(this.j, {top: d + "px"}), N(this.j, {display: "block"}), this.j.style.zIndex =
        this.X ? "700" : "", dg && eg || (N(w, {visibility: "hidden"}), N(v, {visibility: ""})), this.Nd = !1
};
Kh.prototype.v = function () {
    if (this.Nd)this.te = !0; else {
        var a = Fc(), b = Mc(this.j), c = M(), d = !dg || !fg || !eg;
        b.top > a.y + c.height ? d = !0 : b.top + b.height < a.y && (d = !0);
        var e = L("front", this.O), f = L("back", this.O);
        if (d)N(this.j, {"z-index": ""}), ee(this.j, "unflip"), this.J && N(this.J, {visibility: ""}), N(e, {visibility: ""}), N(f, {visibility: ""}), this.J = this.Eb = null, N(this.j, {display: "none"}), this.dispatchEvent(new O("hide")); else {
            d = this.Eb ? Mc(this.Eb) : null;
            if (!d || 0 >= d.width || 0 >= d.height)d = new Ac(.5 * c.width - 150, c.height + a.y, 304,
                300);
            var a = Mc(this.tf), c = Math.round(d.left - b.left - .5 * (b.width - d.width)), h = Math.ceil(d.top - b.top - .5 * (b.height - d.height)), k = 1 / this.S, m = Math.round(1 / this.$ * b.width) / b.width, k = Math.round(b.height * k) / b.height, q = "translate(" + c + "px," + h + "px) scale(" + m + "," + k + ")", c = "translate(0px,0px) scale(" + m + "," + k + ")", n = 0;
            d.top < a.top + a.height && (n = 450);
            b.top > a.top + a.height ? N(this.j, {"z-index": "700"}) : n = 0;
            S(function () {
                N(e, {visibility: ""});
                N(f, {visibility: ""})
            }, 50, this);
            this.O.style[X] = n ? c : q;
            S(function () {
                N(this.j, {"z-index": ""});
                n ? this.O.style[X] = q : (ee(this.j, "unflip"), this.J && (this.J.style.visibility = ""), this.J = this.Eb = null, N(this.j, {display: "none"}));
                S(function () {
                    ee(this.j, "unflip");
                    this.J && N(this.J, {visibility: ""});
                    this.J = this.Eb = null;
                    N(this.j, {display: "none"});
                    this.dispatchEvent(new O("hide"))
                }, 40 + n, this)
            }, 400, this)
        }
    }
};
function Mh() {
    this.Fb = [];
    this.Ag = !1;
    this.xd = null;
    this.fe = !1
}
Mh.prototype.search = function (a) {
    for (var b = [], c = a.split(" "), d = 0; d < c.length; ++d) {
        a = c[d];
        32 < a.length && (a = a.substring(0, 32));
        var e;
        if (this.Ag) {
            if (!this.xd || this.fe) {
                this.fe = !1;
                this.xd = window.lunr(function () {
                    this.field("title", {boost: 10});
                    this.field("description")
                });
                for (var f = 0; f < this.Fb.length; ++f)this.xd.add(this.Fb[f])
            }
            e = [];
            a = this.xd.search(a);
            for (f = 0; f < a.length; ++f)(.005 < a[f].score || !e.length) && e.push(a[f].ref)
        } else {
            e = [];
            a = a.toLowerCase();
            for (var f = 0, h = this.Fb.length; f < h; ++f)-1 < this.Fb[f].indexOf(a) &&
            e.push(f)
        }
        if (b && b.length)for (f = 0; f < e.length; f++)-1 === Ma(b, e[f]) && b.push(e[f]); else b = e
    }
    return b
};
function Nh() {
    Z.call(this, "cards");
    this.va = W(".column", this.b());
    this.Zf = J("cards-noresults");
    this.Qc = new Re;
    this.pb = this.Db = -1;
    this.ia = [];
    this.ja = [];
    this.tb = [];
    this.de = [];
    this.fa = -1;
    this.Jc = !1;
    this.sa = [];
    this.jg = new Mh;
    this.jf = [];
    this.Ea = new Jh;
    this.ic = new Kh(this.Ea.b());
    this.Hd = !1;
    this.Ha = this.ag = -1;
    this.$c = null;
    this.Mb = new Jd;
    this.xf = !0;
    this.ye = !1;
    P(this.ic, "hide", this.bh, !1, this);
    P(this.Ea, "filter", this.ke, !1, this)
}
z(Nh, Z);
g = Nh.prototype;
g.cb = function () {
    return [this.Ea.b()]
};
g.vb = function () {
    Z.prototype.vb.call(this);
    this.resize()
};
g.Ia = function () {
    Z.prototype.Ia.call(this);
    this.Ea.show();
    Oh(this)
};
g.Dc = function () {
    this.ye = !1;
    this.Ha = -1;
    this.$c = null;
    this.Hd = !0;
    -1 < this.Db ? Ph(this) : this.pc()
};
g.Pa = function (a) {
    Z.prototype.Pa.call(this, a);
    this.ye = !0;
    a && a.length && (this.$c = a[0]);
    this.ke();
    this.Hd = !1
};
g.pc = function () {
    Qh(this);
    this.pb = -1;
    this.Jc = !1;
    this.Ea.v();
    this.Hd = !1;
    this.qb()
};
function Rh(a, b) {
    if (t(b))Ff(b, u(function (a) {
        a = a.target;
        a = a.i ? Se(a.i.responseText) : void 0;
        Rh(this, a)
    }, a)); else {
        b = Sh(b);
        for (var c = 0, d = b.length; c < d; ++c)Th(a, b[c]);
        if (a.ye)a.ke(), Oh(a); else for (d = 10 < b.length ? 10 : b.length, c = 0; c < d; ++c)Uh(a, c)
    }
}
function Sh(a) {
    return a.filter(function (a) {
        a = a.os_availability;
        return ub || vb ? /ios/.test(a) : tb ? /android/.test(a) : !0
    })
}
function Oh(a) {
    if (a.$c && a.ja.length) {
        for (var b = 0; b < a.ja.length; ++b)if (Ih(a.ja[b]) == a.$c) {
            a.Ha = b;
            break
        }
        -1 < a.Ha && (b = new pe, P(b, "load", function (a) {
            -1 < this.Ha && (Lh(this.ic, Hh(this.ja[this.Ha]), a.target), Vh(this, this.Ha, !0))
        }, !1, a), re(b, "deep", Hh(a.ja[a.Ha])), b.start())
    }
}
function Th(a, b) {
    var c = a.ja.length, d = b.title || "";
    if (d.length) {
        var e = b.category || "Unknown", f = b.description || "No description", h = b.image_file || "", k = (b.os_availability || "").toLowerCase(), m = h && h.length, q = -1 < k.indexOf("ios"), k = -1 < k.indexOf("android") || -1 < k.indexOf("andriod");
        if (!ub && !vb || q)d = new Fh(c, d, e, f, 0, h, m, q, k), a.ja[c] = d, a.ia[c] = null, a.jf[c] = c, c = a.jg, c.Ag ? c.Fb.push(d) : c.Fb.push((d.title + " " + d.description).toLowerCase()), c.fe = !0
    }
}
g.Wg = function (a) {
    a = this.ja[a];
    var b = this.Ea.kf, c = this.Ea.Vf;
    return b && b != a.Rg || c && c != a.location ? !1 : !0
};
function Uh(a, b) {
    if (!a.ia[b]) {
        var c = a.ja[b], d;
        a.ia[b] = mc("div", {
            "class": "card",
            "data-index": b
        }, mc("h3", null, c.title), d = mc("div", "qpaper full", mc("img", {src: Gh(c), "class": "result-card"})));
        1 < window.devicePixelRatio && (d = L("result-card", d), Ic(d, "100%", "auto"));
        Lh(a.ic, Gh(c));
        P(a.ia[b], "click", a.Zg, !1, a)
    }
}
g.Zg = function (a) {
    var b = Ma(this.ia, a.currentTarget);
    -1 < b && b !== this.Db && (Vh(this, b), a.stopPropagation())
};
function Vh(a, b, c) {
    a.Ha = -1;
    -1 < a.Db ? (a.pb = b, Ph(a)) : Wh(a, b, c)
}
function Wh(a, b, c) {
    a.Db = b;
    var d = a.ja[b];
    b = a.ia[b];
    var e = a.Kc + "/" + Ih(d);
    Td(a.Mb, e);
    a.ic.show(d, b, c);
    P(J("now"), "click", a.sf, !1, a)
}
g.resize = function () {
    var a = Xh();
    if (a != this.ag && (this.ag = a, this.sa && this.sa.length)) {
        for (var b, c = Xh(), a = 0; a < this.va.length; ++a)rc(this.va[a]);
        a = 0;
        for (b = this.sa.length; a < b; ++a) {
            var d = this.va[a % c], e = this.ia[this.sa[a]];
            e.style[X] = "";
            qc(d, e)
        }
    }
};
g.sf = function () {
    Ph(this)
};
function Ph(a) {
    Q(J("now"), "click", a.sf, !1, a);
    a.ic.v()
}
g.bh = function () {
    this.Db = -1;
    if (this.Hd)this.pb = -1, this.pc(); else if (this.Jc)this.pb = -1, this.Jc = !1, Yh(this); else if (-1 < this.pb) {
        var a = this.pb;
        this.pb = -1;
        Wh(this, a)
    }
};
function Qh(a) {
    var b, c;
    b = 0;
    for (c = a.de.length; b < c; ++b)U(a.de[b]), a.de[b] = -1;
    b = 0;
    for (c = a.tb.length; b < c; ++b)U(a.tb[b]), a.tb[b] = -1;
    clearInterval(a.fa);
    a.fa = -1
}
function Yh(a) {
    if (-1 < a.Db)a.Jc = !0, Ph(a); else {
        a.Jc = !1;
        var b, c, d = a.Qc.fd();
        if (0 == document.body.scrollTop || (ub || vb) && 600 > d.width) {
            var e = Fc(), d = a.Qc.fd(), f = [];
            b = 0;
            for (c = a.ia.length; b < c; ++b) {
                var h = a.ia[b];
                if (h.parentNode) {
                    var k = Mc(h);
                    k.top > e.y + d.height || k.top + k.height < e.y ? sc(h) : f.push({hf: h, ha: k})
                }
            }
            Qh(a);
            if (f.length) {
                Ya(f, function (a, b) {
                    return Math.sqrt(b.ha.top * b.ha.top + b.ha.left * b.ha.left) - Math.sqrt(a.ha.top * a.ha.top + a.ha.left * a.ha.left)
                });
                b = 0;
                for (c = f.length; b < c; ++b)a.tb[b] = S(function () {
                    this.hf.style[X] =
                        "translateX(" + (2E3 - this.ha.left) + "px) rotate(-30deg) translateX(-" + (2E3 - this.ha.left) + "px)"
                }, 150 * b, f[b]), a.tb[b + 2 * c] = S(function () {
                    N(this.hf, {visibility: "hidden"})
                }, 150 * b + 500, f[b]);
                a.tb[b] = S(a.ng, 150 * (b - 1) + 300, a)
            } else a.ng()
        } else-1 === a.fa && (a.fa = setInterval(function () {
            var b = document.body.scrollTop;
            1.25 > b ? (document.body.scrollTop = 0, clearInterval(a.fa), a.fa = -1, Yh(a)) : document.body.scrollTop = .8 * b
        }, 15))
    }
}
function Xh() {
    return Math.max(Math.min(Math.floor(M().width / 334), 3), 1)
}
g.ng = function () {
    var a = this.xf;
    this.xf = !1;
    Qh(this);
    var b, c;
    c = this.va.length;
    var d = Xh();
    for (b = 0; b < c; ++b)rc(this.va[b]), N(this.va[b], {display: "none"}), Nc(this.va[b], 1), N(this.va[b], {display: ""});
    if (this.sa.length) {
        this.Qc.fd();
        b = 0;
        for (c = this.sa.length; b < c; ++b) {
            var e = this.va[b % d], f = this.ia[this.sa[b]];
            a || (N(f, {display: "none"}), f.style[X] = "translateX(-2000px) rotate(30deg) translateX(2000px)", N(f, {visibility: "hidden"}), N(f, {display: ""}), this.tb[b] = S(function () {
                N(this, {visibility: ""});
                this.style[X] = dg ?
                    "translateZ(0px)" : "translateX(0px)"
            }, 350 + 150 * b, f));
            qc(e, f)
        }
        this.vd.update()
    } else N(this.Zf, {display: ""})
};
g.ke = function () {
    var a = this.Ea.ig, a = /^[\s\xa0]*$/.test(a) ? this.jf.concat() : this.jg.search(a), a = Oa(a, this.Wg, this);
    if (a.length == this.sa.length) {
        for (var b = !0, c = 0, d = a.length; c < d; ++c)if (a[c] !== this.sa[c]) {
            b = !1;
            break
        }
        if (b)return
    }
    this.sa = a;
    N(this.Zf, {display: "none"});
    b = 0;
    for (c = a.length; b < c; ++b)Uh(this, a[b]);
    Yh(this)
};
function Zh() {
    R.call(this);
    this.D = this.w = null;
    this.fa = -1;
    this.td = document.body.scrollTop;
    P(window, "scroll", this.Kb, !1, this)
}
z(Zh, R);
g = Zh.prototype;
g.l = function () {
    Q(window, "scroll", this.Kb, !1, this);
    R.l.call(this)
};
g.Pe = function () {
};
g.yg = function () {
};
g.Kb = function () {
    this.td = document.body.scrollTop
};
g.transition = function (a, b) {
    if (this.w)if (this.w.lc(), document.body.scrollTop = this.td, 0 != document.body.scrollTop) {
        if (-1 === this.fa) {
            var c = this;
            this.fa = setInterval(function () {
                var b = document.body.scrollTop;
                1.25 > b ? (document.body.scrollTop = c.td = 0, clearInterval(c.fa), c.fa = -1, c.transition(a)) : document.body.scrollTop = c.td = .8 * b
            }, 15)
        }
    } else P(this.w, "readyForTransitionOff", this.rf, !1, this), this.D = a, this.D.resize(), this.D.Pa(b), this.w.Dc(); else a.resize(), a.Pa(b), a.vb(), a.wb(), a.Ia(), this.dispatchEvent(new Wf(this.w =
        a))
};
g.rf = function (a) {
    a && Q(a.currentTarget, "readyForTransitionOff", this.rf, !1, this);
    var b = this.w, c = this.D;
    this.w = this.D;
    this.D = null;
    a = new vg;
    if (dh) {
        var d = M(), e = b.vd, f = c.vd, h = b.ed(), k = c.ed(), m, q, n, w = 0 == Rg(e).length, v = !1, T = Qg(e);
        Rg(e);
        N(b.b(), {display: "none"});
        N(c.b(), {display: "block"});
        var E = Pg(f), I = Mg(Rg(f)), v = 0 == Rg(f).length, la = 1 == Rg(f).length;
        N(b.b(), {display: "block"});
        N(c.b(), {display: "none"});
        if (!v)switch (k) {
            case "how-to-get-it":
            case "cards":
                la ? m = xg(I) : (m = "cards" == k ? new H(300, 300) : new H(350, 300), m =
                    xg(new Ac(.5 * (d.width - m.width), .5 * (d.height - m.height), m.width, m.height)));
                break;
            default:
                m = xg(I)
        }
        if (w)v || (e = $d(), ae(e, d.height + (I.width > I.height ? I.width : I.height), 0), be(e, .5 * Math.PI, 0, 1, 1), q = new Vg(m, e)); else switch (h) {
            case "how-to-get-it":
                d = "get-it-android" === k;
                q = "get-it-chrome" === k || "get-it-chromewin" === k || "get-it-chromeos" === k;
                I = "get-it-glass" === k;
                h = "get-it-wear" === k;
                w = null;
                "get-it-ios" === k && (w = L("ios", b.b()));
                q && (w = L("chrome", b.b()));
                d && (w = L("android", b.b()));
                I && (w = L("glass", b.b()));
                h && (w = L("wear",
                    b.b()));
                q = new Xg(e, m, w);
                break;
            default:
                q = new Yg(e, m, T ? 2 : 0)
        }
        if (!v)switch (k) {
            case "how-to-get-it":
                n = new ah(m, f);
                break;
            case "cards":
                n = new $g(m, f);
                break;
            default:
                n = new Zg(m, f, E ? 0 : 2)
        }
        a.add(function () {
            oh(b)
        });
        q ? a.add(Tg(q)) : a.aa(100);
        a.add(function () {
            ph(b);
            c.vb()
        });
        n && a.add(Tg(n))
    } else a.add(function () {
        oh(b)
    }), a.aa(100), a.add(function () {
        ph(b);
        c.vb()
    }), a.aa(100);
    a.add(function () {
        c.wb();
        c.Ia()
    });
    P(a, "end", this.hd, !1, this);
    a.start()
};
g.hd = function (a) {
    Q(a.currentTarget, "end", this.hd, !1, this);
    this.dispatchEvent(new Wf)
};
function $h() {
    Xf.call(this, new Zh);
    this.Qc = new Re;
    this.$f = J("now");
    this.oh = J("maia-header");
    this.fb = W("li a", this.oh);
    this.fb.push(J("main-logo"))
}
z($h, Xf);
$h.prototype.ca = function (a) {
    var b;
    Yf(this, "", new sh(a.intro));
    Yf(this, "whatisit", new Ch);
    Yf(this, "howtogetit", new Eh);
    Yf(this, "cards", b = new Nh);
    Yf(this, "getitios", new Ah("get-it-ios"));
    Yf(this, "getitandroid", new Ah("get-it-android"));
    Yf(this, "getitchrome", new Ah("get-it-chrome"));
    Yf(this, "getitchromewin", new Ah("get-it-chrome-win"));
    Yf(this, "getitchromeos", new Ah("get-it-chrome-cb"));
    Yf(this, "getitglass", new Ah("get-it-glass"));
    Yf(this, "getitwear", new Ah("get-it-wear"));
    var c = window.navigator.userAgent,
        d = c.match(/MSIE [67]\./), e = c.match(/MSIE [8]\./);
    d && Ee(document.body, "ie");
    e && Ee(document.body, "ie8");
    d = document.getElementById("getitchromebtn");
    -1 < c.toLowerCase().search("cros") ? d.href = "#getitchromeos" : -1 < c.toLowerCase().search("windows") && (d.href = "#getitchromewin");
    this.rb(!0);
    a.cards && Rh(b, a.cards);
    P(this.Qc, "resize", this.Qe, !1, this);
    this.Qe();
    -1 != window.location.hash.indexOf("#cards") || N(J("cards-filter"), {display: "none"})
};
$h.prototype.ne = function (a) {
    if ("howtogetit" === a)if (tb)a = "getitandroid"; else if (ub || vb)a = "getitios";
    return Xf.prototype.ne.call(this, a)
};
$h.prototype.vg = function (a) {
    a = "#" + a;
    for (var b = 0; b < this.fb.length; ++b)ee(this.fb[b], "selected"), this.fb[b].href.indexOf(a) == this.fb[b].href.length - a.length && V(this.fb[b], "selected"), "#getitandroid" != a && "#getitios" != a || V(this.fb[1], "selected");
    this.Qe()
};
$h.prototype.Qe = function () {
    var a = M(), b = Mc(this.$f), a = a.height - b.top + 4 - 94;
    -1 != window.location.hash.indexOf("#howtogetit") && (a = Math.max(a, 500), a += 94);
    "" == window.location.hash && (a += 94);
    N(this.$f, {minHeight: a + "px"});
    (a = this.w) && a.resize()
};
qa("now.init", function (a) {
    (new $h).ca(a)
});