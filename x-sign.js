function safeAdd(d, r) {
    var t = (65535 & d) + (65535 & r);
    return (d >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t
}

function bitRotateLeft(d, r) {
    return d << r | d >>> 32 - r
}

function md5cmn(d, r, t, n, i, m) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(r, d), safeAdd(n, m)), i), t)
}

function md5ff(d, r, t, n, i, m, f) {
    return md5cmn(r & t | ~r & n, d, r, i, m, f)
}

function md5gg(d, r, t, n, i, m, f) {
    return md5cmn(r & n | t & ~n, d, r, i, m, f)
}

function md5hh(d, r, t, n, i, m, f) {
    return md5cmn(r ^ t ^ n, d, r, i, m, f)
}

function md5ii(d, r, t, n, i, m, f) {
    return md5cmn(t ^ (r | ~n), d, r, i, m, f)
}

function binlMD5(d, r) {
    d[r >> 5] |= 128 << r % 32, d[14 + (r + 64 >>> 9 << 4)] = r;
    var t = void 0,
        n = void 0,
        i = void 0,
        m = void 0,
        f = void 0,
        e = 1732584193,
        h = -271733879,
        o = -1732584194,
        g = 271733878;
    for (t = 0; t < d.length; t += 16) n = e, i = h, m = o, f = g, e = md5ff(e, h, o, g, d[t], 7, -680876936), g = md5ff(g, e, h, o, d[t + 1], 12, -389564586), o = md5ff(o, g, e, h, d[t + 2], 17, 606105819), h = md5ff(h, o, g, e, d[t + 3], 22, -1044525330), e = md5ff(e, h, o, g, d[t + 4], 7, -176418897), g = md5ff(g, e, h, o, d[t + 5], 12, 1200080426), o = md5ff(o, g, e, h, d[t + 6], 17, -1473231341), h = md5ff(h, o, g, e, d[t + 7], 22, -45705983), e = md5ff(e, h, o, g, d[t + 8], 7, 1770035416), g = md5ff(g, e, h, o, d[t + 9], 12, -1958414417), o = md5ff(o, g, e, h, d[t + 10], 17, -42063), h = md5ff(h, o, g, e, d[t + 11], 22, -1990404162), e = md5ff(e, h, o, g, d[t + 12], 7, 1804603682), g = md5ff(g, e, h, o, d[t + 13], 12, -40341101), o = md5ff(o, g, e, h, d[t + 14], 17, -1502002290), h = md5ff(h, o, g, e, d[t + 15], 22, 1236535329), e = md5gg(e, h, o, g, d[t + 1], 5, -165796510), g = md5gg(g, e, h, o, d[t + 6], 9, -1069501632), o = md5gg(o, g, e, h, d[t + 11], 14, 643717713), h = md5gg(h, o, g, e, d[t], 20, -373897302), e = md5gg(e, h, o, g, d[t + 5], 5, -701558691), g = md5gg(g, e, h, o, d[t + 10], 9, 38016083), o = md5gg(o, g, e, h, d[t + 15], 14, -660478335), h = md5gg(h, o, g, e, d[t + 4], 20, -405537848), e = md5gg(e, h, o, g, d[t + 9], 5, 568446438), g = md5gg(g, e, h, o, d[t + 14], 9, -1019803690), o = md5gg(o, g, e, h, d[t + 3], 14, -187363961), h = md5gg(h, o, g, e, d[t + 8], 20, 1163531501), e = md5gg(e, h, o, g, d[t + 13], 5, -1444681467), g = md5gg(g, e, h, o, d[t + 2], 9, -51403784), o = md5gg(o, g, e, h, d[t + 7], 14, 1735328473), h = md5gg(h, o, g, e, d[t + 12], 20, -1926607734), e = md5hh(e, h, o, g, d[t + 5], 4, -378558), g = md5hh(g, e, h, o, d[t + 8], 11, -2022574463), o = md5hh(o, g, e, h, d[t + 11], 16, 1839030562), h = md5hh(h, o, g, e, d[t + 14], 23, -35309556), e = md5hh(e, h, o, g, d[t + 1], 4, -1530992060), g = md5hh(g, e, h, o, d[t + 4], 11, 1272893353), o = md5hh(o, g, e, h, d[t + 7], 16, -155497632), h = md5hh(h, o, g, e, d[t + 10], 23, -1094730640), e = md5hh(e, h, o, g, d[t + 13], 4, 681279174), g = md5hh(g, e, h, o, d[t], 11, -358537222), o = md5hh(o, g, e, h, d[t + 3], 16, -722521979), h = md5hh(h, o, g, e, d[t + 6], 23, 76029189), e = md5hh(e, h, o, g, d[t + 9], 4, -640364487), g = md5hh(g, e, h, o, d[t + 12], 11, -421815835), o = md5hh(o, g, e, h, d[t + 15], 16, 530742520), h = md5hh(h, o, g, e, d[t + 2], 23, -995338651), e = md5ii(e, h, o, g, d[t], 6, -198630844), g = md5ii(g, e, h, o, d[t + 7], 10, 1126891415), o = md5ii(o, g, e, h, d[t + 14], 15, -1416354905), h = md5ii(h, o, g, e, d[t + 5], 21, -57434055), e = md5ii(e, h, o, g, d[t + 12], 6, 1700485571), g = md5ii(g, e, h, o, d[t + 3], 10, -1894986606), o = md5ii(o, g, e, h, d[t + 10], 15, -1051523), h = md5ii(h, o, g, e, d[t + 1], 21, -2054922799), e = md5ii(e, h, o, g, d[t + 8], 6, 1873313359), g = md5ii(g, e, h, o, d[t + 15], 10, -30611744), o = md5ii(o, g, e, h, d[t + 6], 15, -1560198380), h = md5ii(h, o, g, e, d[t + 13], 21, 1309151649), e = md5ii(e, h, o, g, d[t + 4], 6, -145523070), g = md5ii(g, e, h, o, d[t + 11], 10, -1120210379), o = md5ii(o, g, e, h, d[t + 2], 15, 718787259), h = md5ii(h, o, g, e, d[t + 9], 21, -343485551), e = safeAdd(e, n), h = safeAdd(h, i), o = safeAdd(o, m), g = safeAdd(g, f);
    return [e, h, o, g]
}

function binl2rstr(d) {
    var r = void 0,
        t = "",
        n = 32 * d.length;
    for (r = 0; r < n; r += 8) t += String.fromCharCode(d[r >> 5] >>> r % 32 & 255);
    return t
}

function rstr2binl(d) {
    var r = void 0,
        t = [];
    for (t[(d.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
    var n = 8 * d.length;
    for (r = 0; r < n; r += 8) t[r >> 5] |= (255 & d.charCodeAt(r / 8)) << r % 32;
    return t
}

function rstrMD5(d) {
    return binl2rstr(binlMD5(rstr2binl(d), 8 * d.length))
}

function rstrHMACMD5(d, r) {
    var t = void 0,
        n = rstr2binl(d),
        i = [],
        m = [],
        f = void 0;
    for (i[15] = m[15] = void 0, n.length > 16 && (n = binlMD5(n, 8 * d.length)), t = 0; t < 16; t += 1) i[t] = 909522486 ^ n[t], m[t] = 1549556828 ^ n[t];
    return f = binlMD5(i.concat(rstr2binl(r)), 512 + 8 * r.length), binl2rstr(binlMD5(m.concat(f), 640))
}

function rstr2hex(d) {
    var r = "0123456789abcdef",
        t = "",
        n = void 0,
        i = void 0;
    for (i = 0; i < d.length; i += 1) n = d.charCodeAt(i), t += r.charAt(n >>> 4 & 15) + r.charAt(15 & n);
    return t
}

function str2rstrUTF8(d) {
    return unescape(encodeURIComponent(d))
}

function rawMD5(d) {
    return rstrMD5(str2rstrUTF8(d))
}

function hexMD5(d) {
    return rstr2hex(rawMD5(d))
}

function rawHMACMD5(d, r) {
    return rstrHMACMD5(str2rstrUTF8(d), str2rstrUTF8(r))
}

function hexHMACMD5(d, r) {
    return rstr2hex(rawHMACMD5(d, r))
}

function md5(d, r, t) {
    return r ? t ? rawHMACMD5(r, d) : hexHMACMD5(r, d) : t ? rawMD5(d) : hexMD5(d)
}

function transformKey(e) {
    return e.replace(/([A-Z])/g, "_$1").toLowerCase()
}

function getQueryByParams(e, r) {
    var t = [];
    return Object.keys(e).forEach(function (_) {
        if (void 0 !== e[_]) {
            var n = r ? transformKey(_) : _;
            t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[_]))
        }
    }), t.join("&")
}

function encryptFeApiToken(e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DEFAULT_SIGN_VERSION,
        t = e.url,
        _ = void 0 === t ? "" : t,
        n = e.params,
        o = e.transform,
        i = void 0 !== o && o;
    _ = _.slice(_.indexOf(DEFAULT_SIGN_API_PATH), _.length);
    var E = "";
    return n && (E = getQueryByParams(n, i)), E = E ? "?" + E : "", r === DEFAULT_SIGN_VERSION ? "" + r + md5(_ + E + SECRET_KEY) : ""
}

var SECRET_KEY = "WSUDD",
    DEFAULT_SIGN_HEADER = exports.DEFAULT_SIGN_HEADER = "X-Sign",
    DEFAULT_SIGN_API_PATH = exports.DEFAULT_SIGN_API_PATH = "/fe_api/",
    DEFAULT_SIGN_VERSION = "X";

//endId没有就删除该字段，不要设为空
var sign = encryptFeApiToken({
    url: "/fe_api/burdock/weixin/v2/notes/5f852b720000000001009a41/comments",
    params: {
        pageSize: 10,
        endId: "5f859b880000000001027560"
    },
})

console.log(sign);