var aa = Object.create;
var en = Object.defineProperty;
var la = Object.getOwnPropertyDescriptor;
var ua = Object.getOwnPropertyNames;
var ca = Object.getPrototypeOf,
  pa = Object.prototype.hasOwnProperty;
var me = (e, t) => () => (e && (t = e((e = 0))), t);
var Fe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  ir = (e, t) => {
    for (var r in t) en(e, r, { get: t[r], enumerable: !0 });
  },
  ma = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of ua(t))
        !pa.call(e, i) &&
          i !== r &&
          en(e, i, {
            get: () => t[i],
            enumerable: !(n = la(t, i)) || n.enumerable,
          });
    return e;
  };
var Qe = (e, t, r) => (
  (r = e != null ? aa(ca(e)) : {}),
  ma(
    t || !e || !e.__esModule
      ? en(r, "default", { value: e, enumerable: !0 })
      : r,
    e,
  )
);
var y,
  u = me(() => {
    y = {
      nextTick: (e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      },
      env: {},
      version: "",
      cwd: () => "/",
      stderr: {},
      argv: ["/bin/node"],
    };
  });
var b,
  c = me(() => {
    b =
      globalThis.performance ??
      (() => {
        let e = Date.now();
        return { now: () => Date.now() - e };
      })();
  });
var E,
  p = me(() => {
    E = () => {};
    E.prototype = E;
  });
var m = me(() => {});
var Ei = Fe((Ke) => {
  d();
  u();
  c();
  p();
  m();
  var oi = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    da = oi((e) => {
      (e.byteLength = l), (e.toByteArray = g), (e.fromByteArray = S);
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (o = 0, s = i.length; o < s; ++o)
        (t[o] = i[o]), (r[i.charCodeAt(o)] = o);
      var o, s;
      (r[45] = 62), (r[95] = 63);
      function a(A) {
        var R = A.length;
        if (R % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var D = A.indexOf("=");
        D === -1 && (D = R);
        var M = D === R ? 0 : 4 - (D % 4);
        return [D, M];
      }
      function l(A) {
        var R = a(A),
          D = R[0],
          M = R[1];
        return ((D + M) * 3) / 4 - M;
      }
      function f(A, R, D) {
        return ((R + D) * 3) / 4 - D;
      }
      function g(A) {
        var R,
          D = a(A),
          M = D[0],
          B = D[1],
          k = new n(f(A, M, B)),
          F = 0,
          ie = B > 0 ? M - 4 : M,
          G;
        for (G = 0; G < ie; G += 4)
          (R =
            (r[A.charCodeAt(G)] << 18) |
            (r[A.charCodeAt(G + 1)] << 12) |
            (r[A.charCodeAt(G + 2)] << 6) |
            r[A.charCodeAt(G + 3)]),
            (k[F++] = (R >> 16) & 255),
            (k[F++] = (R >> 8) & 255),
            (k[F++] = R & 255);
        return (
          B === 2 &&
            ((R = (r[A.charCodeAt(G)] << 2) | (r[A.charCodeAt(G + 1)] >> 4)),
            (k[F++] = R & 255)),
          B === 1 &&
            ((R =
              (r[A.charCodeAt(G)] << 10) |
              (r[A.charCodeAt(G + 1)] << 4) |
              (r[A.charCodeAt(G + 2)] >> 2)),
            (k[F++] = (R >> 8) & 255),
            (k[F++] = R & 255)),
          k
        );
      }
      function h(A) {
        return (
          t[(A >> 18) & 63] + t[(A >> 12) & 63] + t[(A >> 6) & 63] + t[A & 63]
        );
      }
      function v(A, R, D) {
        for (var M, B = [], k = R; k < D; k += 3)
          (M =
            ((A[k] << 16) & 16711680) +
            ((A[k + 1] << 8) & 65280) +
            (A[k + 2] & 255)),
            B.push(h(M));
        return B.join("");
      }
      function S(A) {
        for (
          var R, D = A.length, M = D % 3, B = [], k = 16383, F = 0, ie = D - M;
          F < ie;
          F += k
        )
          B.push(v(A, F, F + k > ie ? ie : F + k));
        return (
          M === 1
            ? ((R = A[D - 1]), B.push(t[R >> 2] + t[(R << 4) & 63] + "=="))
            : M === 2 &&
              ((R = (A[D - 2] << 8) + A[D - 1]),
              B.push(t[R >> 10] + t[(R >> 4) & 63] + t[(R << 2) & 63] + "=")),
          B.join("")
        );
      }
    }),
    fa = oi((e) => {
      (e.read = (t, r, n, i, o) => {
        var s,
          a,
          l = o * 8 - i - 1,
          f = (1 << l) - 1,
          g = f >> 1,
          h = -7,
          v = n ? o - 1 : 0,
          S = n ? -1 : 1,
          A = t[r + v];
        for (
          v += S, s = A & ((1 << -h) - 1), A >>= -h, h += l;
          h > 0;
          s = s * 256 + t[r + v], v += S, h -= 8
        );
        for (
          a = s & ((1 << -h) - 1), s >>= -h, h += i;
          h > 0;
          a = a * 256 + t[r + v], v += S, h -= 8
        );
        if (s === 0) s = 1 - g;
        else {
          if (s === f) return a ? NaN : (A ? -1 : 1) * (1 / 0);
          (a = a + Math.pow(2, i)), (s = s - g);
        }
        return (A ? -1 : 1) * a * Math.pow(2, s - i);
      }),
        (e.write = (t, r, n, i, o, s) => {
          var a,
            l,
            f,
            g = s * 8 - o - 1,
            h = (1 << g) - 1,
            v = h >> 1,
            S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            A = i ? 0 : s - 1,
            R = i ? 1 : -1,
            D = r < 0 || (r === 0 && 1 / r < 0) ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? ((l = isNaN(r) ? 1 : 0), (a = h))
                : ((a = Math.floor(Math.log(r) / Math.LN2)),
                  r * (f = Math.pow(2, -a)) < 1 && (a--, (f *= 2)),
                  a + v >= 1 ? (r += S / f) : (r += S * Math.pow(2, 1 - v)),
                  r * f >= 2 && (a++, (f /= 2)),
                  a + v >= h
                    ? ((l = 0), (a = h))
                    : a + v >= 1
                      ? ((l = (r * f - 1) * Math.pow(2, o)), (a = a + v))
                      : ((l = r * Math.pow(2, v - 1) * Math.pow(2, o)),
                        (a = 0)));
            o >= 8;
            t[n + A] = l & 255, A += R, l /= 256, o -= 8
          );
          for (
            a = (a << o) | l, g += o;
            g > 0;
            t[n + A] = a & 255, A += R, a /= 256, g -= 8
          );
          t[n + A - R] |= D * 128;
        });
    }),
    tn = da(),
    We = fa(),
    ti =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  Ke.Buffer = T;
  Ke.SlowBuffer = ba;
  Ke.INSPECT_MAX_BYTES = 50;
  var or = 2147483647;
  Ke.kMaxLength = or;
  T.TYPED_ARRAY_SUPPORT = ga();
  !T.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function ga() {
    try {
      let e = new Uint8Array(1),
        t = { foo: () => 42 };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(T.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(T.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (T.isBuffer(this)) return this.byteOffset;
    },
  });
  function be(e) {
    if (e > or)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, T.prototype), t;
  }
  function T(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      return on(e);
    }
    return si(e, t, r);
  }
  T.poolSize = 8192;
  function si(e, t, r) {
    if (typeof e == "string") return ya(e, t);
    if (ArrayBuffer.isView(e)) return wa(e);
    if (e == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    if (
      de(e, ArrayBuffer) ||
      (e && de(e.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (de(e, SharedArrayBuffer) || (e && de(e.buffer, SharedArrayBuffer))))
    )
      return li(e, t, r);
    if (typeof e == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return T.from(n, t, r);
    let i = Ea(e);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    )
      return T.from(e[Symbol.toPrimitive]("string"), t, r);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  T.from = (e, t, r) => si(e, t, r);
  Object.setPrototypeOf(T.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(T, Uint8Array);
  function ai(e) {
    if (typeof e != "number")
      throw new TypeError('"size" argument must be of type number');
    if (e < 0)
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
  }
  function ha(e, t, r) {
    return (
      ai(e),
      e <= 0
        ? be(e)
        : t !== void 0
          ? typeof r == "string"
            ? be(e).fill(t, r)
            : be(e).fill(t)
          : be(e)
    );
  }
  T.alloc = (e, t, r) => ha(e, t, r);
  function on(e) {
    return ai(e), be(e < 0 ? 0 : sn(e) | 0);
  }
  T.allocUnsafe = (e) => on(e);
  T.allocUnsafeSlow = (e) => on(e);
  function ya(e, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !T.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let r = ui(e, t) | 0,
      n = be(r),
      i = n.write(e, t);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function rn(e) {
    let t = e.length < 0 ? 0 : sn(e.length) | 0,
      r = be(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  function wa(e) {
    if (de(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return li(t.buffer, t.byteOffset, t.byteLength);
    }
    return rn(e);
  }
  function li(e, t, r) {
    if (t < 0 || e.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && r === void 0
        ? (n = new Uint8Array(e))
        : r === void 0
          ? (n = new Uint8Array(e, t))
          : (n = new Uint8Array(e, t, r)),
      Object.setPrototypeOf(n, T.prototype),
      n
    );
  }
  function Ea(e) {
    if (T.isBuffer(e)) {
      let t = sn(e.length) | 0,
        r = be(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0)
      return typeof e.length != "number" || ln(e.length) ? be(0) : rn(e);
    if (e.type === "Buffer" && Array.isArray(e.data)) return rn(e.data);
  }
  function sn(e) {
    if (e >= or)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          or.toString(16) +
          " bytes",
      );
    return e | 0;
  }
  function ba(e) {
    return +e != e && (e = 0), T.alloc(+e);
  }
  T.isBuffer = (e) => e != null && e._isBuffer === !0 && e !== T.prototype;
  T.compare = (e, t) => {
    if (
      (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      de(t, Uint8Array) && (t = T.from(t, t.offset, t.byteLength)),
      !T.isBuffer(e) || !T.isBuffer(t))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (e === t) return 0;
    let r = e.length,
      n = t.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (e[i] !== t[i]) {
        (r = e[i]), (n = t[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  T.isEncoding = (e) => {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  T.concat = (e, t) => {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0) return T.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = T.allocUnsafe(t),
      i = 0;
    for (r = 0; r < e.length; ++r) {
      let o = e[r];
      if (de(o, Uint8Array))
        i + o.length > n.length
          ? (T.isBuffer(o) || (o = T.from(o)), o.copy(n, i))
          : Uint8Array.prototype.set.call(n, o, i);
      else if (T.isBuffer(o)) o.copy(n, i);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      i += o.length;
    }
    return n;
  };
  function ui(e, t) {
    if (T.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || de(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    let r = e.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return nn(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return wi(e).length;
        default:
          if (i) return n ? -1 : nn(e).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  T.byteLength = ui;
  function xa(e, t, r) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        ((r >>>= 0), (t >>>= 0), r <= t))
    )
      return "";
    for (e || (e = "utf8"); ; )
      switch (e) {
        case "hex":
          return Oa(this, t, r);
        case "utf8":
        case "utf-8":
          return pi(this, t, r);
        case "ascii":
          return ka(this, t, r);
        case "latin1":
        case "binary":
          return Ia(this, t, r);
        case "base64":
          return Ra(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Da(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          (e = (e + "").toLowerCase()), (n = !0);
      }
  }
  T.prototype._isBuffer = !0;
  function Le(e, t, r) {
    let n = e[t];
    (e[t] = e[r]), (e[r] = n);
  }
  T.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2) Le(this, t, t + 1);
    return this;
  };
  T.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4) Le(this, t, t + 3), Le(this, t + 1, t + 2);
    return this;
  };
  T.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      Le(this, t, t + 7),
        Le(this, t + 1, t + 6),
        Le(this, t + 2, t + 5),
        Le(this, t + 3, t + 4);
    return this;
  };
  T.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
        ? pi(this, 0, e)
        : xa.apply(this, arguments);
  };
  T.prototype.toLocaleString = T.prototype.toString;
  T.prototype.equals = function (e) {
    if (!T.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : T.compare(this, e) === 0;
  };
  T.prototype.inspect = function () {
    let e = "",
      t = Ke.INSPECT_MAX_BYTES;
    return (
      (e = this.toString("hex", 0, t)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">"
    );
  };
  ti && (T.prototype[ti] = T.prototype.inspect);
  T.prototype.compare = function (e, t, r, n, i) {
    if (
      (de(e, Uint8Array) && (e = T.from(e, e.offset, e.byteLength)),
      !T.isBuffer(e))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    if (
      (t === void 0 && (t = 0),
      r === void 0 && (r = e ? e.length : 0),
      n === void 0 && (n = 0),
      i === void 0 && (i = this.length),
      t < 0 || r > e.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && t >= r) return 0;
    if (n >= i) return -1;
    if (t >= r) return 1;
    if (((t >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === e)) return 0;
    let o = i - n,
      s = r - t,
      a = Math.min(o, s),
      l = this.slice(n, i),
      f = e.slice(t, r);
    for (let g = 0; g < a; ++g)
      if (l[g] !== f[g]) {
        (o = l[g]), (s = f[g]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  };
  function ci(e, t, r, n, i) {
    if (e.length === 0) return -1;
    if (
      (typeof r == "string"
        ? ((n = r), (r = 0))
        : r > 2147483647
          ? (r = 2147483647)
          : r < -2147483648 && (r = -2147483648),
      (r = +r),
      ln(r) && (r = i ? 0 : e.length - 1),
      r < 0 && (r = e.length + r),
      r >= e.length)
    ) {
      if (i) return -1;
      r = e.length - 1;
    } else if (r < 0)
      if (i) r = 0;
      else return -1;
    if ((typeof t == "string" && (t = T.from(t, n)), T.isBuffer(t)))
      return t.length === 0 ? -1 : ri(e, t, r, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : ri(e, [t], r, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function ri(e, t, r, n, i) {
    let o = 1,
      s = e.length,
      a = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (a /= 2), (r /= 2);
    }
    function l(g, h) {
      return o === 1 ? g[h] : g.readUInt16BE(h * o);
    }
    let f;
    if (i) {
      let g = -1;
      for (f = r; f < s; f++)
        if (l(e, f) === l(t, g === -1 ? 0 : f - g)) {
          if ((g === -1 && (g = f), f - g + 1 === a)) return g * o;
        } else g !== -1 && (f -= f - g), (g = -1);
    } else
      for (r + a > s && (r = s - a), f = r; f >= 0; f--) {
        let g = !0;
        for (let h = 0; h < a; h++)
          if (l(e, f + h) !== l(t, h)) {
            g = !1;
            break;
          }
        if (g) return f;
      }
    return -1;
  }
  T.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  T.prototype.indexOf = function (e, t, r) {
    return ci(this, e, t, r, !0);
  };
  T.prototype.lastIndexOf = function (e, t, r) {
    return ci(this, e, t, r, !1);
  };
  function Pa(e, t, r, n) {
    r = Number(r) || 0;
    let i = e.length - r;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (ln(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  function va(e, t, r, n) {
    return sr(nn(t, e.length - r), e, r, n);
  }
  function Ta(e, t, r, n) {
    return sr(Fa(t), e, r, n);
  }
  function Ca(e, t, r, n) {
    return sr(wi(t), e, r, n);
  }
  function Aa(e, t, r, n) {
    return sr(La(t, e.length - r), e, r, n);
  }
  T.prototype.write = function (e, t, r, n) {
    if (t === void 0) (n = "utf8"), (r = this.length), (t = 0);
    else if (r === void 0 && typeof t == "string")
      (n = t), (r = this.length), (t = 0);
    else if (isFinite(t))
      (t = t >>> 0),
        isFinite(r)
          ? ((r = r >>> 0), n === void 0 && (n = "utf8"))
          : ((n = r), (r = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    let i = this.length - t;
    if (
      ((r === void 0 || r > i) && (r = i),
      (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return Pa(this, e, t, r);
        case "utf8":
        case "utf-8":
          return va(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return Ta(this, e, t, r);
        case "base64":
          return Ca(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Aa(this, e, t, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  };
  T.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Ra(e, t, r) {
    return t === 0 && r === e.length
      ? tn.fromByteArray(e)
      : tn.fromByteArray(e.slice(t, r));
  }
  function pi(e, t, r) {
    r = Math.min(e.length, r);
    let n = [],
      i = t;
    for (; i < r; ) {
      let o = e[i],
        s = null,
        a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + a <= r) {
        let l, f, g, h;
        switch (a) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (l = e[i + 1]),
              (l & 192) === 128 &&
                ((h = ((o & 31) << 6) | (l & 63)), h > 127 && (s = h));
            break;
          case 3:
            (l = e[i + 1]),
              (f = e[i + 2]),
              (l & 192) === 128 &&
                (f & 192) === 128 &&
                ((h = ((o & 15) << 12) | ((l & 63) << 6) | (f & 63)),
                h > 2047 && (h < 55296 || h > 57343) && (s = h));
            break;
          case 4:
            (l = e[i + 1]),
              (f = e[i + 2]),
              (g = e[i + 3]),
              (l & 192) === 128 &&
                (f & 192) === 128 &&
                (g & 192) === 128 &&
                ((h =
                  ((o & 15) << 18) |
                  ((l & 63) << 12) |
                  ((f & 63) << 6) |
                  (g & 63)),
                h > 65535 && h < 1114112 && (s = h));
        }
      }
      s === null
        ? ((s = 65533), (a = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += a);
    }
    return Sa(n);
  }
  var ni = 4096;
  function Sa(e) {
    let t = e.length;
    if (t <= ni) return String.fromCharCode.apply(String, e);
    let r = "",
      n = 0;
    for (; n < t; )
      r += String.fromCharCode.apply(String, e.slice(n, (n += ni)));
    return r;
  }
  function ka(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
    return n;
  }
  function Ia(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
    return n;
  }
  function Oa(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = t; o < r; ++o) i += Ba[e[o]];
    return i;
  }
  function Da(e, t, r) {
    let n = e.slice(t, r),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  T.prototype.slice = function (e, t) {
    let r = this.length;
    (e = ~~e),
      (t = t === void 0 ? r : ~~t),
      e < 0 ? ((e += r), e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? ((t += r), t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, T.prototype), n;
  };
  function W(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  T.prototype.readUintLE = T.prototype.readUIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return n;
  };
  T.prototype.readUintBE = T.prototype.readUIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e + --t],
      i = 1;
    for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
    return n;
  };
  T.prototype.readUint8 = T.prototype.readUInt8 = function (e, t) {
    return (e = e >>> 0), t || W(e, 1, this.length), this[e];
  };
  T.prototype.readUint16LE = T.prototype.readUInt16LE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), this[e] | (this[e + 1] << 8)
    );
  };
  T.prototype.readUint16BE = T.prototype.readUInt16BE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 2, this.length), (this[e] << 8) | this[e + 1]
    );
  };
  T.prototype.readUint32LE = T.prototype.readUInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
        this[e + 3] * 16777216
    );
  };
  T.prototype.readUint32BE = T.prototype.readUInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] * 16777216 +
        ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
    );
  };
  T.prototype.readBigUInt64LE = Ae(function (e) {
    (e = e >>> 0), He(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && bt(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  });
  T.prototype.readBigUInt64BE = Ae(function (e) {
    (e = e >>> 0), He(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && bt(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  });
  T.prototype.readIntLE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = this[e],
      i = 1,
      o = 0;
    for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * t)), n;
  };
  T.prototype.readIntBE = function (e, t, r) {
    (e = e >>> 0), (t = t >>> 0), r || W(e, t, this.length);
    let n = t,
      i = 1,
      o = this[e + --n];
    for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o;
  };
  T.prototype.readInt8 = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    );
  };
  T.prototype.readInt16LE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e] | (this[e + 1] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt16BE = function (e, t) {
    (e = e >>> 0), t || W(e, 2, this.length);
    let r = this[e + 1] | (this[e] << 8);
    return r & 32768 ? r | 4294901760 : r;
  };
  T.prototype.readInt32LE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
    );
  };
  T.prototype.readInt32BE = function (e, t) {
    return (
      (e = e >>> 0),
      t || W(e, 4, this.length),
      (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
    );
  };
  T.prototype.readBigInt64LE = Ae(function (e) {
    (e = e >>> 0), He(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && bt(e, this.length - 8);
    let n =
      this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24)
    );
  });
  T.prototype.readBigInt64BE = Ae(function (e) {
    (e = e >>> 0), He(e, "offset");
    let t = this[e],
      r = this[e + 7];
    (t === void 0 || r === void 0) && bt(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r)
    );
  });
  T.prototype.readFloatLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), We.read(this, e, !0, 23, 4)
    );
  };
  T.prototype.readFloatBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 4, this.length), We.read(this, e, !1, 23, 4)
    );
  };
  T.prototype.readDoubleLE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), We.read(this, e, !0, 52, 8)
    );
  };
  T.prototype.readDoubleBE = function (e, t) {
    return (
      (e = e >>> 0), t || W(e, 8, this.length), We.read(this, e, !1, 52, 8)
    );
  };
  function te(e, t, r, n, i, o) {
    if (!T.isBuffer(e))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  T.prototype.writeUintLE = T.prototype.writeUIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      te(this, e, t, r, s, 0);
    }
    let i = 1,
      o = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256); )
      this[t + o] = (e / i) & 255;
    return t + r;
  };
  T.prototype.writeUintBE = T.prototype.writeUIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), (r = r >>> 0), !n)) {
      let s = Math.pow(2, 8 * r) - 1;
      te(this, e, t, r, s, 0);
    }
    let i = r - 1,
      o = 1;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      this[t + i] = (e / o) & 255;
    return t + r;
  };
  T.prototype.writeUint8 = T.prototype.writeUInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 1, 255, 0),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeUint16LE = T.prototype.writeUInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 65535, 0),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeUint16BE = T.prototype.writeUInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 65535, 0),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeUint32LE = T.prototype.writeUInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 4294967295, 0),
      (this[t + 3] = e >>> 24),
      (this[t + 2] = e >>> 16),
      (this[t + 1] = e >>> 8),
      (this[t] = e & 255),
      t + 4
    );
  };
  T.prototype.writeUint32BE = T.prototype.writeUInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 4294967295, 0),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  function mi(e, t, r, n, i) {
    yi(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o),
      (o = o >> 8),
      (e[r++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      (s = s >> 8),
      (e[r++] = s),
      r
    );
  }
  function di(e, t, r, n, i) {
    yi(t, n, i, e, r, 7);
    let o = Number(t & BigInt(4294967295));
    (e[r + 7] = o),
      (o = o >> 8),
      (e[r + 6] = o),
      (o = o >> 8),
      (e[r + 5] = o),
      (o = o >> 8),
      (e[r + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (e[r + 3] = s),
      (s = s >> 8),
      (e[r + 2] = s),
      (s = s >> 8),
      (e[r + 1] = s),
      (s = s >> 8),
      (e[r] = s),
      r + 8
    );
  }
  T.prototype.writeBigUInt64LE = Ae(function (e, t = 0) {
    return mi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeBigUInt64BE = Ae(function (e, t = 0) {
    return di(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  T.prototype.writeIntLE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      te(this, e, t, r, a - 1, -a);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256); )
      e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeIntBE = function (e, t, r, n) {
    if (((e = +e), (t = t >>> 0), !n)) {
      let a = Math.pow(2, 8 * r - 1);
      te(this, e, t, r, a - 1, -a);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[t + i] = e & 255; --i >= 0 && (o *= 256); )
      e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1),
        (this[t + i] = (((e / o) >> 0) - s) & 255);
    return t + r;
  };
  T.prototype.writeInt8 = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      (this[t] = e & 255),
      t + 1
    );
  };
  T.prototype.writeInt16LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 32767, -32768),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      t + 2
    );
  };
  T.prototype.writeInt16BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 2, 32767, -32768),
      (this[t] = e >>> 8),
      (this[t + 1] = e & 255),
      t + 2
    );
  };
  T.prototype.writeInt32LE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 2147483647, -2147483648),
      (this[t] = e & 255),
      (this[t + 1] = e >>> 8),
      (this[t + 2] = e >>> 16),
      (this[t + 3] = e >>> 24),
      t + 4
    );
  };
  T.prototype.writeInt32BE = function (e, t, r) {
    return (
      (e = +e),
      (t = t >>> 0),
      r || te(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      (this[t] = e >>> 24),
      (this[t + 1] = e >>> 16),
      (this[t + 2] = e >>> 8),
      (this[t + 3] = e & 255),
      t + 4
    );
  };
  T.prototype.writeBigInt64LE = Ae(function (e, t = 0) {
    return mi(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  T.prototype.writeBigInt64BE = Ae(function (e, t = 0) {
    return di(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function fi(e, t, r, n, i, o) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  function gi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || fi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      We.write(e, t, r, n, 23, 4),
      r + 4
    );
  }
  T.prototype.writeFloatLE = function (e, t, r) {
    return gi(this, e, t, !0, r);
  };
  T.prototype.writeFloatBE = function (e, t, r) {
    return gi(this, e, t, !1, r);
  };
  function hi(e, t, r, n, i) {
    return (
      (t = +t),
      (r = r >>> 0),
      i || fi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      We.write(e, t, r, n, 52, 8),
      r + 8
    );
  }
  T.prototype.writeDoubleLE = function (e, t, r) {
    return hi(this, e, t, !0, r);
  };
  T.prototype.writeDoubleBE = function (e, t, r) {
    return hi(this, e, t, !1, r);
  };
  T.prototype.copy = function (e, t, r, n) {
    if (!T.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      !n && n !== 0 && (n = this.length),
      t >= e.length && (t = e.length),
      t || (t = 0),
      n > 0 && n < r && (n = r),
      n === r || e.length === 0 || this.length === 0)
    )
      return 0;
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let i = n - r;
    return (
      this === e && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(t, r, n)
        : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      i
    );
  };
  T.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        (typeof t == "string"
          ? ((n = t), (t = 0), (r = this.length))
          : typeof r == "string" && ((n = r), (r = this.length)),
        n !== void 0 && typeof n != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof n == "string" && !T.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (e.length === 1) {
        let o = e.charCodeAt(0);
        ((n === "utf8" && o < 128) || n === "latin1") && (e = o);
      }
    } else
      typeof e == "number"
        ? (e = e & 255)
        : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= t) return this;
    (t = t >>> 0), (r = r === void 0 ? this.length : r >>> 0), e || (e = 0);
    let i;
    if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
    else {
      let o = T.isBuffer(e) ? e : T.from(e, n),
        s = o.length;
      if (s === 0)
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
    }
    return this;
  };
  var Je = {};
  function an(e, t, r) {
    Je[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${e}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  an(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    (e) =>
      e
        ? `${e} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds",
    RangeError,
  );
  an(
    "ERR_INVALID_ARG_TYPE",
    (e, t) =>
      `The "${e}" argument must be of type number. Received type ${typeof t}`,
    TypeError,
  );
  an(
    "ERR_OUT_OF_RANGE",
    (e, t, r) => {
      let n = `The value of "${e}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = ii(String(r)))
          : typeof r == "bigint" &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = ii(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
  function ii(e) {
    let t = "",
      r = e.length,
      n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  function Ma(e, t, r) {
    He(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && bt(t, e.length - (r + 1));
  }
  function yi(e, t, r, n, i, o) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "",
        a;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}`)
          : (a = `>= ${t}${s} and <= ${r}${s}`),
        new Je.ERR_OUT_OF_RANGE("value", a, e))
      );
    }
    Ma(n, i, o);
  }
  function He(e, t) {
    if (typeof e != "number") throw new Je.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  function bt(e, t, r) {
    throw Math.floor(e) !== e
      ? (He(e, r), new Je.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
        ? new Je.ERR_BUFFER_OUT_OF_BOUNDS()
        : new Je.ERR_OUT_OF_RANGE(
            r || "offset",
            `>= ${r ? 1 : 0} and <= ${t}`,
            e,
          );
  }
  var _a = /[^+/0-9A-Za-z-_]/g;
  function Na(e) {
    if (((e = e.split("=")[0]), (e = e.trim().replace(_a, "")), e.length < 2))
      return "";
    for (; e.length % 4 !== 0; ) e = e + "=";
    return e;
  }
  function nn(e, t) {
    t = t || 1 / 0;
    let r,
      n = e.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((r = e.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!i) {
          if (r > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
          continue;
        }
        r = (((i - 55296) << 10) | (r - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), r < 128)) {
        if ((t -= 1) < 0) break;
        o.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        o.push((r >> 6) | 192, (r & 63) | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (r & 63) | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (r & 63) | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Fa(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  function La(e, t) {
    let r,
      n,
      i,
      o = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
      (r = e.charCodeAt(s)), (n = r >> 8), (i = r % 256), o.push(i), o.push(n);
    return o;
  }
  function wi(e) {
    return tn.toByteArray(Na(e));
  }
  function sr(e, t, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
      t[i + r] = e[i];
    return i;
  }
  function de(e, t) {
    return (
      e instanceof t ||
      (e != null &&
        e.constructor != null &&
        e.constructor.name != null &&
        e.constructor.name === t.name)
    );
  }
  function ln(e) {
    return e !== e;
  }
  var Ba = (() => {
    let e = "0123456789abcdef",
      t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
    }
    return t;
  })();
  function Ae(e) {
    return typeof BigInt > "u" ? Ua : e;
  }
  function Ua() {
    throw new Error("BigInt not supported");
  }
});
var w,
  d = me(() => {
    w = Qe(Ei());
  });
function Qa() {
  return !1;
}
function Bi() {
  return {
    dev: 0,
    ino: 0,
    mode: 0,
    nlink: 0,
    uid: 0,
    gid: 0,
    rdev: 0,
    size: 0,
    blksize: 0,
    blocks: 0,
    atimeMs: 0,
    mtimeMs: 0,
    ctimeMs: 0,
    birthtimeMs: 0,
    atime: new Date(),
    mtime: new Date(),
    ctime: new Date(),
    birthtime: new Date(),
  };
}
function Ja() {
  return Bi();
}
function Wa() {
  return [];
}
function Ha(e) {
  e(null, []);
}
function Ka() {
  return "";
}
function za() {
  return "";
}
function Ya() {}
function Za() {}
function Xa() {}
function el() {}
function tl() {}
function rl() {}
var nl,
  il,
  Ui,
  qi = me(() => {
    d();
    u();
    c();
    p();
    m();
    (nl = {}),
      (il = {
        existsSync: Qa,
        lstatSync: Bi,
        statSync: Ja,
        readdirSync: Wa,
        readdir: Ha,
        readlinkSync: Ka,
        realpathSync: za,
        chmodSync: Ya,
        renameSync: Za,
        mkdirSync: Xa,
        rmdirSync: el,
        rmSync: tl,
        unlinkSync: rl,
        promises: nl,
      }),
      (Ui = il);
  });
function ol(...e) {
  return e.join("/");
}
function sl(...e) {
  return e.join("/");
}
function al(e) {
  let t = $i(e),
    r = ji(e),
    [n, i] = t.split(".");
  return { root: "/", dir: r, base: t, ext: i, name: n };
}
function $i(e) {
  let t = e.split("/");
  return t[t.length - 1];
}
function ji(e) {
  return e.split("/").slice(0, -1).join("/");
}
var Vi,
  ll,
  ul,
  cr,
  Gi = me(() => {
    d();
    u();
    c();
    p();
    m();
    (Vi = "/"),
      (ll = { sep: Vi }),
      (ul = {
        basename: $i,
        dirname: ji,
        join: sl,
        parse: al,
        posix: ll,
        resolve: ol,
        sep: Vi,
      }),
      (cr = ul);
  });
var Qi = Fe((sd, cl) => {
  cl.exports = {
    name: "@prisma/internals",
    version: "6.6.0",
    description: "This package is intended for Prisma's internal use",
    main: "dist/index.js",
    types: "dist/index.d.ts",
    repository: {
      type: "git",
      url: "https://github.com/prisma/prisma.git",
      directory: "packages/internals",
    },
    homepage: "https://www.prisma.io",
    author: "Tim Suchanek <suchanek@prisma.io>",
    bugs: "https://github.com/prisma/prisma/issues",
    license: "Apache-2.0",
    scripts: {
      dev: "DEV=true tsx helpers/build.ts",
      build: "tsx helpers/build.ts",
      test: "dotenv -e ../../.db.env -- jest --silent",
      prepublishOnly: "pnpm run build",
    },
    files: [
      "README.md",
      "dist",
      "!**/libquery_engine*",
      "!dist/get-generators/engines/*",
      "scripts",
    ],
    devDependencies: {
      "@babel/helper-validator-identifier": "7.25.9",
      "@opentelemetry/api": "1.9.0",
      "@swc/core": "1.11.5",
      "@swc/jest": "0.2.37",
      "@types/babel__helper-validator-identifier": "7.15.2",
      "@types/jest": "29.5.14",
      "@types/node": "18.19.76",
      "@types/resolve": "1.20.6",
      archiver: "6.0.2",
      "checkpoint-client": "1.1.33",
      "cli-truncate": "4.0.0",
      dotenv: "16.4.7",
      esbuild: "0.25.1",
      "escape-string-regexp": "5.0.0",
      execa: "5.1.1",
      "fast-glob": "3.3.3",
      "find-up": "7.0.0",
      "fp-ts": "2.16.9",
      "fs-extra": "11.3.0",
      "fs-jetpack": "5.1.0",
      "global-dirs": "4.0.0",
      globby: "11.1.0",
      "identifier-regex": "1.0.0",
      "indent-string": "4.0.0",
      "is-windows": "1.0.2",
      "is-wsl": "3.1.0",
      jest: "29.7.0",
      "jest-junit": "16.0.0",
      kleur: "4.1.5",
      "mock-stdin": "1.0.0",
      "new-github-issue-url": "0.2.1",
      "node-fetch": "3.3.2",
      "npm-packlist": "5.1.3",
      open: "7.4.2",
      "p-map": "4.0.0",
      "read-package-up": "11.0.0",
      resolve: "1.22.10",
      "string-width": "7.2.0",
      "strip-ansi": "6.0.1",
      "strip-indent": "4.0.0",
      "temp-dir": "2.0.0",
      tempy: "1.0.1",
      "terminal-link": "4.0.0",
      tmp: "0.2.3",
      "ts-node": "10.9.2",
      "ts-pattern": "5.6.2",
      "ts-toolbelt": "9.6.0",
      typescript: "5.4.5",
      yarn: "1.22.22",
    },
    dependencies: {
      "@prisma/config": "workspace:*",
      "@prisma/debug": "workspace:*",
      "@prisma/dmmf": "workspace:*",
      "@prisma/driver-adapter-utils": "workspace:*",
      "@prisma/engines": "workspace:*",
      "@prisma/fetch-engine": "workspace:*",
      "@prisma/generator": "workspace:*",
      "@prisma/generator-helper": "workspace:*",
      "@prisma/get-platform": "workspace:*",
      "@prisma/prisma-schema-wasm":
        "6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a",
      "@prisma/schema-engine-wasm":
        "6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a",
      "@prisma/schema-files-loader": "workspace:*",
      arg: "5.0.2",
      prompts: "2.4.2",
    },
    peerDependencies: { typescript: ">=5.1.0" },
    peerDependenciesMeta: { typescript: { optional: !0 } },
    sideEffects: !1,
  };
});
var Ki = Fe((Cd, Hi) => {
  d();
  u();
  c();
  p();
  m();
  Hi.exports = (e, t = 1, r) => {
    if (
      ((r = { indent: " ", includeEmptyLines: !1, ...r }), typeof e != "string")
    )
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``,
      );
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var Zi = Fe((Ld, Yi) => {
  d();
  u();
  c();
  p();
  m();
  Yi.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var eo = Fe((Vd, Xi) => {
  d();
  u();
  c();
  p();
  m();
  var yl = Zi();
  Xi.exports = (e) => (typeof e == "string" ? e.replace(yl(), "") : e);
});
var Pn = Fe((Dy, Eo) => {
  d();
  u();
  c();
  p();
  m();
  Eo.exports = (() => {
    function e(t, r, n, i, o) {
      return t < r || n < r ? (t > n ? n + 1 : t + 1) : i === o ? r : r + 1;
    }
    return (t, r) => {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        (t = r), (r = n);
      }
      for (
        var i = t.length, o = r.length;
        i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1);
      )
        i--, o--;
      for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
      if (((i -= s), (o -= s), i === 0 || o < 3)) return o;
      var a = 0,
        l,
        f,
        g,
        h,
        v,
        S,
        A,
        R,
        D,
        M,
        B,
        k,
        F = [];
      for (l = 0; l < i; l++) F.push(l + 1), F.push(t.charCodeAt(s + l));
      for (var ie = F.length - 1; a < o - 3; )
        for (
          D = r.charCodeAt(s + (f = a)),
            M = r.charCodeAt(s + (g = a + 1)),
            B = r.charCodeAt(s + (h = a + 2)),
            k = r.charCodeAt(s + (v = a + 3)),
            S = a += 4,
            l = 0;
          l < ie;
          l += 2
        )
          (A = F[l]),
            (R = F[l + 1]),
            (f = e(A, f, g, D, R)),
            (g = e(f, g, h, M, R)),
            (h = e(g, h, v, B, R)),
            (S = e(h, v, S, k, R)),
            (F[l] = S),
            (v = h),
            (h = g),
            (g = f),
            (f = A);
      for (; a < o; )
        for (D = r.charCodeAt(s + (f = a)), S = ++a, l = 0; l < ie; l += 2)
          (A = F[l]), (F[l] = S = e(A, f, S, D, F[l + 1])), (f = A);
      return S;
    };
  })();
});
var To = me(() => {
  d();
  u();
  c();
  p();
  m();
});
var Co = me(() => {
  d();
  u();
  c();
  p();
  m();
});
var Jo = Fe((e1, ac) => {
  ac.exports = {
    name: "@prisma/engines-version",
    version: "6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a",
    main: "index.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    author: "Tim Suchanek <suchanek@prisma.io>",
    prisma: { enginesVersion: "f676762280b54cd07c770017ed3711ddde35f37a" },
    repository: {
      type: "git",
      url: "https://github.com/prisma/engines-wrapper.git",
      directory: "packages/engines-version",
    },
    devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" },
    files: ["index.js", "index.d.ts"],
    scripts: { build: "tsc -d" },
  };
});
var Lr,
  Wo = me(() => {
    d();
    u();
    c();
    p();
    m();
    Lr = class {
      events = {};
      on(t, r) {
        return (
          this.events[t] || (this.events[t] = []), this.events[t].push(r), this
        );
      }
      emit(t, ...r) {
        return this.events[t]
          ? (this.events[t].forEach((n) => {
              n(...r);
            }),
            !0)
          : !1;
      }
    };
  });
d();
u();
c();
p();
m();
var Pi = {};
ir(Pi, { defineExtension: () => bi, getExtensionContext: () => xi });
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function bi(e) {
  return typeof e == "function" ? e : (t) => t.$extends(e);
}
d();
u();
c();
p();
m();
function xi(e) {
  return e;
}
var Ti = {};
ir(Ti, { validator: () => vi });
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function vi(...e) {
  return (t) => t;
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var un,
  Ci,
  Ai,
  Ri,
  Si = !0;
typeof y < "u" &&
  (({
    FORCE_COLOR: un,
    NODE_DISABLE_COLORS: Ci,
    NO_COLOR: Ai,
    TERM: Ri,
  } = y.env || {}),
  (Si = y.stdout && y.stdout.isTTY));
var qa = {
  enabled:
    !Ci && Ai == null && Ri !== "dumb" && ((un != null && un !== "0") || Si),
};
function j(e, t) {
  let r = new RegExp(`\\x1b\\[${t}m`, "g"),
    n = `\x1B[${e}m`,
    i = `\x1B[${t}m`;
  return (o) =>
    !qa.enabled || o == null
      ? o
      : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
}
var um = j(0, 0),
  ar = j(1, 22),
  lr = j(2, 22),
  cm = j(3, 23),
  ki = j(4, 24),
  pm = j(7, 27),
  mm = j(8, 28),
  dm = j(9, 29),
  fm = j(30, 39),
  ze = j(31, 39),
  Ii = j(32, 39),
  Oi = j(33, 39),
  Di = j(34, 39),
  gm = j(35, 39),
  Mi = j(36, 39),
  hm = j(37, 39),
  _i = j(90, 39),
  ym = j(90, 39),
  wm = j(40, 49),
  Em = j(41, 49),
  bm = j(42, 49),
  xm = j(43, 49),
  Pm = j(44, 49),
  vm = j(45, 49),
  Tm = j(46, 49),
  Cm = j(47, 49);
d();
u();
c();
p();
m();
var $a = 100,
  Ni = ["green", "yellow", "blue", "magenta", "cyan", "red"],
  ur = [],
  Fi = Date.now(),
  ja = 0,
  cn = typeof y < "u" ? y.env : {};
globalThis.DEBUG ??= cn.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= cn.DEBUG_COLORS ? cn.DEBUG_COLORS === "true" : !0;
var xt = {
  enable(e) {
    typeof e == "string" && (globalThis.DEBUG = e);
  },
  disable() {
    let e = globalThis.DEBUG;
    return (globalThis.DEBUG = ""), e;
  },
  enabled(e) {
    let t = globalThis.DEBUG.split(",").map((i) =>
        i.replace(/[.+?^${}()|[\]\\]/g, "\\$&"),
      ),
      r = t.some((i) =>
        i === "" || i[0] === "-"
          ? !1
          : e.match(RegExp(i.split("*").join(".*") + "$")),
      ),
      n = t.some((i) =>
        i === "" || i[0] !== "-"
          ? !1
          : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")),
      );
    return r && !n;
  },
  log: (...e) => {
    let [t, r, ...n] = e;
    (console.warn ?? console.log)(`${t} ${r}`, ...n);
  },
  formatters: {},
};
function Va(e) {
  let t = {
      color: Ni[ja++ % Ni.length],
      enabled: xt.enabled(e),
      namespace: e,
      log: xt.log,
      extend: () => {},
    },
    r = (...n) => {
      let { enabled: i, namespace: o, color: s, log: a } = t;
      if (
        (n.length !== 0 && ur.push([o, ...n]),
        ur.length > $a && ur.shift(),
        xt.enabled(o) || i)
      ) {
        let l = n.map((g) => (typeof g == "string" ? g : Ga(g))),
          f = `+${Date.now() - Fi}ms`;
        (Fi = Date.now()), a(o, ...l, f);
      }
    };
  return new Proxy(r, { get: (n, i) => t[i], set: (n, i, o) => (t[i] = o) });
}
var Y = new Proxy(Va, { get: (e, t) => xt[t], set: (e, t, r) => (xt[t] = r) });
function Ga(e, t = 2) {
  let r = new Set();
  return JSON.stringify(
    e,
    (n, i) => {
      if (typeof i == "object" && i !== null) {
        if (r.has(i)) return "[Circular *]";
        r.add(i);
      } else if (typeof i == "bigint") return i.toString();
      return i;
    },
    t,
  );
}
function Li() {
  ur.length = 0;
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var pl = Qi(),
  pn = pl.version;
d();
u();
c();
p();
m();
var Ji = "library";
function Ye(e) {
  let t = ml();
  return (
    t ||
    (e?.config.engineType === "library"
      ? "library"
      : e?.config.engineType === "binary"
        ? "binary"
        : e?.config.engineType === "client"
          ? "client"
          : Ji)
  );
}
function ml() {
  let e = y.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library"
    ? "library"
    : e === "binary"
      ? "binary"
      : e === "client"
        ? "client"
        : void 0;
}
d();
u();
c();
p();
m();
var Wi = "prisma+postgres",
  pr = `${Wi}:`;
function mn(e) {
  return e?.startsWith(`${pr}//`) ?? !1;
}
var vt = {};
ir(vt, {
  error: () => gl,
  info: () => fl,
  log: () => dl,
  query: () => hl,
  should: () => zi,
  tags: () => Pt,
  warn: () => dn,
});
d();
u();
c();
p();
m();
var Pt = {
    error: ze("prisma:error"),
    warn: Oi("prisma:warn"),
    info: Mi("prisma:info"),
    query: Di("prisma:query"),
  },
  zi = { warn: () => !y.env.PRISMA_DISABLE_WARNINGS };
function dl(...e) {
  console.log(...e);
}
function dn(e, ...t) {
  zi.warn() && console.warn(`${Pt.warn} ${e}`, ...t);
}
function fl(e, ...t) {
  console.info(`${Pt.info} ${e}`, ...t);
}
function gl(e, ...t) {
  console.error(`${Pt.error} ${e}`, ...t);
}
function hl(e, ...t) {
  console.log(`${Pt.query} ${e}`, ...t);
}
d();
u();
c();
p();
m();
function xe(e, t) {
  throw new Error(t);
}
d();
u();
c();
p();
m();
function fn(e, t) {
  return Object.hasOwn(e, t);
}
d();
u();
c();
p();
m();
function Ze(e, t) {
  let r = {};
  for (let n of Object.keys(e)) r[n] = t(e[n], n);
  return r;
}
d();
u();
c();
p();
m();
function gn(e, t) {
  if (e.length === 0) return;
  let r = e[0];
  for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
  return r;
}
d();
u();
c();
p();
m();
function N(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
u();
c();
p();
m();
var to = new Set(),
  mr = (e, t, ...r) => {
    to.has(e) || (to.add(e), dn(t, ...r));
  };
var Q = class e extends Error {
  clientVersion;
  errorCode;
  retryable;
  constructor(t, r, n) {
    super(t),
      (this.name = "PrismaClientInitializationError"),
      (this.clientVersion = r),
      (this.errorCode = n),
      Error.captureStackTrace(e);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
N(Q, "PrismaClientInitializationError");
d();
u();
c();
p();
m();
var oe = class extends Error {
  code;
  meta;
  clientVersion;
  batchRequestIdx;
  constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
    super(t),
      (this.name = "PrismaClientKnownRequestError"),
      (this.code = r),
      (this.clientVersion = n),
      (this.meta = i),
      Object.defineProperty(this, "batchRequestIdx", {
        value: o,
        enumerable: !1,
        writable: !0,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
N(oe, "PrismaClientKnownRequestError");
d();
u();
c();
p();
m();
var Re = class extends Error {
  clientVersion;
  constructor(t, r) {
    super(t),
      (this.name = "PrismaClientRustPanicError"),
      (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
N(Re, "PrismaClientRustPanicError");
d();
u();
c();
p();
m();
var se = class extends Error {
  clientVersion;
  batchRequestIdx;
  constructor(t, { clientVersion: r, batchRequestIdx: n }) {
    super(t),
      (this.name = "PrismaClientUnknownRequestError"),
      (this.clientVersion = r),
      Object.defineProperty(this, "batchRequestIdx", {
        value: n,
        writable: !0,
        enumerable: !1,
      });
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
N(se, "PrismaClientUnknownRequestError");
d();
u();
c();
p();
m();
var X = class extends Error {
  name = "PrismaClientValidationError";
  clientVersion;
  constructor(t, { clientVersion: r }) {
    super(t), (this.clientVersion = r);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
N(X, "PrismaClientValidationError");
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Xe = 9e15,
  Oe = 1e9,
  hn = "0123456789abcdef",
  gr =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  hr =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  yn = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -Xe,
    maxE: Xe,
    crypto: !1,
  },
  so,
  Pe,
  _ = !0,
  wr = "[DecimalError] ",
  Ie = wr + "Invalid argument: ",
  ao = wr + "Precision limit exceeded",
  lo = wr + "crypto unavailable",
  uo = "[object Decimal]",
  Z = Math.floor,
  J = Math.pow,
  wl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  El = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  bl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  co = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  ce = 1e7,
  O = 7,
  xl = 9007199254740991,
  Pl = gr.length - 1,
  wn = hr.length - 1,
  C = { toStringTag: uo };
C.absoluteValue = C.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), I(e);
};
C.ceil = function () {
  return I(new this.constructor(this), this.e + 1, 2);
};
C.clampedTo = C.clamp = function (e, t) {
  var r,
    i = this.constructor;
  if (((e = new i(e)), (t = new i(t)), !e.s || !t.s)) return new i(NaN);
  if (e.gt(t)) throw Error(Ie + t);
  return (r = this.cmp(e)), r < 0 ? e : this.cmp(t) > 0 ? t : new i(this);
};
C.comparedTo = C.cmp = function (e) {
  var t,
    r,
    n,
    i,
    s = this.d,
    a = (e = new this.constructor(e)).d,
    l = this.s,
    f = e.s;
  if (!s || !a)
    return !l || !f ? NaN : l !== f ? l : s === a ? 0 : !s ^ (l < 0) ? 1 : -1;
  if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -f : 0;
  if (l !== f) return l;
  if (this.e !== e.e) return (this.e > e.e) ^ (l < 0) ? 1 : -1;
  for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (s[t] !== a[t]) return (s[t] > a[t]) ^ (l < 0) ? 1 : -1;
  return n === i ? 0 : (n > i) ^ (l < 0) ? 1 : -1;
};
C.cosine = C.cos = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.d
    ? r.d[0]
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = vl(n, ho(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(Pe == 2 || Pe == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
C.cubeRoot = C.cbrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    h = this.constructor;
  if (!this.isFinite() || this.isZero()) return new h(this);
  for (
    _ = !1,
      o = this.s * J(this.s * this, 1 / 3),
      !o || Math.abs(o) == 1 / 0
        ? ((r = K(this.d)),
          (e = this.e),
          (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"),
          (o = J(r, 1 / 3)),
          (e = Z((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
          o == 1 / 0
            ? (r = "5e" + e)
            : ((r = o.toExponential()),
              (r = r.slice(0, r.indexOf("e") + 1) + e)),
          (n = new h(r)),
          (n.s = this.s))
        : (n = new h(o.toString())),
      s = (e = h.precision) + 3;
    ;
  )
    if (
      ((a = n),
      (l = a.times(a).times(a)),
      (f = l.plus(this)),
      (n = q(f.plus(this).times(a), f.plus(l), s + 2, 1)),
      K(a.d).slice(0, s) === (r = K(n.d)).slice(0, s))
    )
      if (((r = r.slice(s - 3, s + 1)), r == "9999" || (!i && r == "4999"))) {
        if (!i && (I(a, e + 1, 0), a.times(a).times(a).eq(this))) {
          n = a;
          break;
        }
        (s += 4), (i = 1);
      } else {
        (!+r || (!+r.slice(1) && r.charAt(0) == "5")) &&
          (I(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
        break;
      }
  return (_ = !0), I(n, e, h.rounding, t);
};
C.decimalPlaces = C.dp = function () {
  var e,
    t = this.d,
    r = NaN;
  if (t) {
    if (((e = t.length - 1), (r = (e - Z(this.e / O)) * O), (e = t[e]), e))
      for (; e % 10 == 0; e /= 10) r--;
    r < 0 && (r = 0);
  }
  return r;
};
C.dividedBy = C.div = function (e) {
  return q(this, new this.constructor(e));
};
C.dividedToIntegerBy = C.divToInt = function (e) {
  var r = this.constructor;
  return I(q(this, new r(e), 0, 1, 1), r.precision, r.rounding);
};
C.equals = C.eq = function (e) {
  return this.cmp(e) === 0;
};
C.floor = function () {
  return I(new this.constructor(this), this.e + 1, 3);
};
C.greaterThan = C.gt = function (e) {
  return this.cmp(e) > 0;
};
C.greaterThanOrEqualTo = C.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
C.hyperbolicCosine = C.cosh = function () {
  var e,
    t,
    r,
    n,
    i,
    o = this,
    s = o.constructor,
    a = new s(1);
  if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
  if (o.isZero()) return a;
  (r = s.precision),
    (n = s.rounding),
    (s.precision = r + Math.max(o.e, o.sd()) + 4),
    (s.rounding = 1),
    (i = o.d.length),
    i < 32
      ? ((e = Math.ceil(i / 3)), (t = (1 / br(4, e)).toString()))
      : ((e = 16), (t = "2.3283064365386962890625e-10")),
    (o = et(s, 1, o.times(t), new s(1), !0));
  for (var l, f = e, g = new s(8); f--; )
    (l = o.times(o)), (o = a.minus(l.times(g.minus(l.times(g)))));
  return I(o, (s.precision = r), (s.rounding = n), !0);
};
C.hyperbolicSine = C.sinh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  if (!i.isFinite() || i.isZero()) return new o(i);
  if (
    ((t = o.precision),
    (r = o.rounding),
    (o.precision = t + Math.max(i.e, i.sd()) + 4),
    (o.rounding = 1),
    (n = i.d.length),
    n < 3)
  )
    i = et(o, 2, i, i, !0);
  else {
    (e = 1.4 * Math.sqrt(n)),
      (e = e > 16 ? 16 : e | 0),
      (i = i.times(1 / br(5, e))),
      (i = et(o, 2, i, i, !0));
    for (var s, a = new o(5), l = new o(16), f = new o(20); e--; )
      (s = i.times(i)), (i = i.times(a.plus(s.times(l.times(s).plus(f)))));
  }
  return (o.precision = t), (o.rounding = r), I(i, t, r, !0);
};
C.hyperbolicTangent = C.tanh = function () {
  var e,
    t,
    n = this.constructor;
  return this.isFinite()
    ? this.isZero()
      ? new n(this)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 7),
        (n.rounding = 1),
        q(this.sinh(), this.cosh(), (n.precision = e), (n.rounding = t)))
    : new n(this.s);
};
C.inverseCosine = C.acos = function () {
  var e = this,
    t = e.constructor,
    r = e.abs().cmp(1),
    n = t.precision,
    i = t.rounding;
  return r !== -1
    ? r === 0
      ? e.isNeg()
        ? fe(t, n, i)
        : new t(0)
      : new t(NaN)
    : e.isZero()
      ? fe(t, n + 4, i).times(0.5)
      : ((t.precision = n + 6),
        (t.rounding = 1),
        (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
        (t.precision = n),
        (t.rounding = i),
        e.times(2));
};
C.inverseHyperbolicCosine = C.acosh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
      ? ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
        (n.rounding = 1),
        (_ = !1),
        (r = r.times(r).minus(1).sqrt().plus(r)),
        (_ = !0),
        (n.precision = e),
        (n.rounding = t),
        r.ln())
      : new n(r);
};
C.inverseHyperbolicSine = C.asinh = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : ((e = n.precision),
      (t = n.rounding),
      (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
      (n.rounding = 1),
      (_ = !1),
      (r = r.times(r).plus(1).sqrt().plus(r)),
      (_ = !0),
      (n.precision = e),
      (n.rounding = t),
      r.ln());
};
C.inverseHyperbolicTangent = C.atanh = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isFinite()
    ? i.e >= 0
      ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
      : ((e = o.precision),
        (t = o.rounding),
        (n = i.sd()),
        Math.max(n, e) < 2 * -i.e - 1
          ? I(new o(i), e, t, !0)
          : ((o.precision = r = n - i.e),
            (i = q(i.plus(1), new o(1).minus(i), r + e, 1)),
            (o.precision = e + 4),
            (o.rounding = 1),
            (i = i.ln()),
            (o.precision = e),
            (o.rounding = t),
            i.times(0.5)))
    : new o(NaN);
};
C.inverseSine = C.asin = function () {
  var e,
    t,
    r,
    n,
    i = this,
    o = i.constructor;
  return i.isZero()
    ? new o(i)
    : ((t = i.abs().cmp(1)),
      (r = o.precision),
      (n = o.rounding),
      t !== -1
        ? t === 0
          ? ((e = fe(o, r + 4, n).times(0.5)), (e.s = i.s), e)
          : new o(NaN)
        : ((o.precision = r + 6),
          (o.rounding = 1),
          (i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan()),
          (o.precision = r),
          (o.rounding = n),
          i.times(2)));
};
C.inverseTangent = C.atan = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f = this,
    g = f.constructor,
    h = g.precision,
    v = g.rounding;
  if (f.isFinite()) {
    if (f.isZero()) return new g(f);
    if (f.abs().eq(1) && h + 4 <= wn)
      return (s = fe(g, h + 4, v).times(0.25)), (s.s = f.s), s;
  } else {
    if (!f.s) return new g(NaN);
    if (h + 4 <= wn) return (s = fe(g, h + 4, v).times(0.5)), (s.s = f.s), s;
  }
  for (
    g.precision = a = h + 10,
      g.rounding = 1,
      r = Math.min(28, (a / O + 2) | 0),
      e = r;
    e;
    --e
  )
    f = f.div(f.times(f).plus(1).sqrt().plus(1));
  for (
    _ = !1, t = Math.ceil(a / O), n = 1, l = f.times(f), s = new g(f), i = f;
    e !== -1;
  )
    if (
      ((i = i.times(l)),
      (o = s.minus(i.div((n += 2)))),
      (i = i.times(l)),
      (s = o.plus(i.div((n += 2)))),
      s.d[t] !== void 0)
    )
      for (e = t; s.d[e] === o.d[e] && e--; );
  return (
    r && (s = s.times(2 << (r - 1))),
    (_ = !0),
    I(s, (g.precision = h), (g.rounding = v), !0)
  );
};
C.isFinite = function () {
  return !!this.d;
};
C.isInteger = C.isInt = function () {
  return !!this.d && Z(this.e / O) > this.d.length - 2;
};
C.isNaN = function () {
  return !this.s;
};
C.isNegative = C.isNeg = function () {
  return this.s < 0;
};
C.isPositive = C.isPos = function () {
  return this.s > 0;
};
C.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
C.lessThan = C.lt = function (e) {
  return this.cmp(e) < 0;
};
C.lessThanOrEqualTo = C.lte = function (e) {
  return this.cmp(e) < 1;
};
C.logarithm = C.log = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    g = this.constructor,
    h = g.precision,
    v = g.rounding,
    S = 5;
  if (e == null) (e = new g(10)), (t = !0);
  else {
    if (((e = new g(e)), (r = e.d), e.s < 0 || !r || !r[0] || e.eq(1)))
      return new g(NaN);
    t = e.eq(10);
  }
  if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
    return new g(r && !r[0] ? -1 / 0 : this.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (t)
    if (r.length > 1) o = !0;
    else {
      for (i = r[0]; i % 10 === 0; ) i /= 10;
      o = i !== 1;
    }
  if (
    ((_ = !1),
    (a = h + S),
    (s = ke(this, a)),
    (n = t ? yr(g, a + 10) : ke(e, a)),
    (l = q(s, n, a, 1)),
    Tt(l.d, (i = h), v))
  )
    do
      if (
        ((a += 10),
        (s = ke(this, a)),
        (n = t ? yr(g, a + 10) : ke(e, a)),
        (l = q(s, n, a, 1)),
        !o)
      ) {
        +K(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = I(l, h + 1, 0));
        break;
      }
    while (Tt(l.d, (i += 10), v));
  return (_ = !0), I(l, h, v);
};
C.minus = C.sub = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    A = this.constructor;
  if (((e = new A(e)), !this.d || !e.d))
    return (
      !this.s || !e.s
        ? (e = new A(NaN))
        : this.d
          ? (e.s = -e.s)
          : (e = new A(e.d || this.s !== e.s ? this : NaN)),
      e
    );
  if (this.s != e.s) return (e.s = -e.s), this.plus(e);
  if (
    ((f = this.d),
    (v = e.d),
    (a = A.precision),
    (l = A.rounding),
    !f[0] || !v[0])
  ) {
    if (v[0]) e.s = -e.s;
    else if (f[0]) e = new A(this);
    else return new A(l === 3 ? -0 : 0);
    return _ ? I(e, a, l) : e;
  }
  if (
    ((r = Z(e.e / O)), (g = Z(this.e / O)), (f = f.slice()), (o = g - r), o)
  ) {
    for (
      h = o < 0,
        h
          ? ((t = f), (o = -o), (s = v.length))
          : ((t = v), (r = g), (s = f.length)),
        n = Math.max(Math.ceil(a / O), s) + 2,
        o > n && ((o = n), (t.length = 1)),
        t.reverse(),
        n = o;
      n--;
    )
      t.push(0);
    t.reverse();
  } else {
    for (n = f.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++)
      if (f[n] != v[n]) {
        h = f[n] < v[n];
        break;
      }
    o = 0;
  }
  for (
    h && ((t = f), (f = v), (v = t), (e.s = -e.s)),
      s = f.length,
      n = v.length - s;
    n > 0;
    --n
  )
    f[s++] = 0;
  for (n = v.length; n > o; ) {
    if (f[--n] < v[n]) {
      for (i = n; i && f[--i] === 0; ) f[i] = ce - 1;
      --f[i], (f[n] += ce);
    }
    f[n] -= v[n];
  }
  for (; f[--s] === 0; ) f.pop();
  for (; f[0] === 0; f.shift()) --r;
  return f[0]
    ? ((e.d = f), (e.e = Er(f, r)), _ ? I(e, a, l) : e)
    : new A(l === 3 ? -0 : 0);
};
C.modulo = C.mod = function (e) {
  var t,
    n = this.constructor;
  return (
    (e = new n(e)),
    !this.d || !e.s || (e.d && !e.d[0])
      ? new n(NaN)
      : !e.d || (this.d && !this.d[0])
        ? I(new n(this), n.precision, n.rounding)
        : ((_ = !1),
          n.modulo == 9
            ? ((t = q(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
            : (t = q(this, e, 0, n.modulo, 1)),
          (t = t.times(e)),
          (_ = !0),
          this.minus(t))
  );
};
C.naturalExponential = C.exp = function () {
  return En(this);
};
C.naturalLogarithm = C.ln = function () {
  return ke(this);
};
C.negated = C.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), I(e);
};
C.plus = C.add = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    v = this.constructor;
  if (((e = new v(e)), !this.d || !e.d))
    return (
      !this.s || !e.s
        ? (e = new v(NaN))
        : this.d || (e = new v(e.d || this.s === e.s ? this : NaN)),
      e
    );
  if (this.s != e.s) return (e.s = -e.s), this.minus(e);
  if (
    ((f = this.d),
    (g = e.d),
    (a = v.precision),
    (l = v.rounding),
    !f[0] || !g[0])
  )
    return g[0] || (e = new v(this)), _ ? I(e, a, l) : e;
  if (
    ((o = Z(this.e / O)), (n = Z(e.e / O)), (f = f.slice()), (i = o - n), i)
  ) {
    for (
      i < 0
        ? ((r = f), (i = -i), (s = g.length))
        : ((r = g), (n = o), (s = f.length)),
        o = Math.ceil(a / O),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (r.length = 1)),
        r.reverse();
      i--;
    )
      r.push(0);
    r.reverse();
  }
  for (
    s = f.length,
      i = g.length,
      s - i < 0 && ((i = s), (r = g), (g = f), (f = r)),
      t = 0;
    i;
  )
    (t = ((f[--i] = f[i] + g[i] + t) / ce) | 0), (f[i] %= ce);
  for (t && (f.unshift(t), ++n), s = f.length; f[--s] == 0; ) f.pop();
  return (e.d = f), (e.e = Er(f, n)), _ ? I(e, a, l) : e;
};
C.precision = C.sd = function (e) {
  var t;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ie + e);
  return (
    this.d
      ? ((t = po(this.d)), e && this.e + 1 > t && (t = this.e + 1))
      : (t = NaN),
    t
  );
};
C.round = function () {
  var t = this.constructor;
  return I(new t(this), this.e + 1, t.rounding);
};
C.sine = C.sin = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + Math.max(r.e, r.sd()) + O),
        (n.rounding = 1),
        (r = Cl(n, ho(n, r))),
        (n.precision = e),
        (n.rounding = t),
        I(Pe > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.squareRoot = C.sqrt = function () {
  var e,
    t,
    r,
    n,
    i,
    o,
    a = this.d,
    l = this.e,
    f = this.s,
    g = this.constructor;
  if (f !== 1 || !a || !a[0])
    return new g(!f || (f < 0 && (!a || a[0])) ? NaN : a ? this : 1 / 0);
  for (
    _ = !1,
      f = Math.sqrt(+this),
      f == 0 || f == 1 / 0
        ? ((t = K(a)),
          (t.length + l) % 2 == 0 && (t += "0"),
          (f = Math.sqrt(t)),
          (l = Z((l + 1) / 2) - (l < 0 || l % 2)),
          f == 1 / 0
            ? (t = "5e" + l)
            : ((t = f.toExponential()),
              (t = t.slice(0, t.indexOf("e") + 1) + l)),
          (n = new g(t)))
        : (n = new g(f.toString())),
      r = (l = g.precision) + 3;
    ;
  )
    if (
      ((o = n),
      (n = o.plus(q(this, o, r + 2, 1)).times(0.5)),
      K(o.d).slice(0, r) === (t = K(n.d)).slice(0, r))
    )
      if (((t = t.slice(r - 3, r + 1)), t == "9999" || (!i && t == "4999"))) {
        if (!i && (I(o, l + 1, 0), o.times(o).eq(this))) {
          n = o;
          break;
        }
        (r += 4), (i = 1);
      } else {
        (!+t || (!+t.slice(1) && t.charAt(0) == "5")) &&
          (I(n, l + 1, 1), (e = !n.times(n).eq(this)));
        break;
      }
  return (_ = !0), I(n, l, g.rounding, e);
};
C.tangent = C.tan = function () {
  var e,
    t,
    r = this,
    n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : ((e = n.precision),
        (t = n.rounding),
        (n.precision = e + 10),
        (n.rounding = 1),
        (r = r.sin()),
        (r.s = 1),
        (r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
        (n.precision = e),
        (n.rounding = t),
        I(Pe == 2 || Pe == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
C.times = C.mul = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    h = this.constructor,
    v = this.d,
    S = (e = new h(e)).d;
  if (((e.s *= this.s), !v || !v[0] || !S || !S[0]))
    return new h(
      !e.s || (v && !v[0] && !S) || (S && !S[0] && !v)
        ? NaN
        : !v || !S
          ? e.s / 0
          : e.s * 0,
    );
  for (
    r = Z(this.e / O) + Z(e.e / O),
      l = v.length,
      f = S.length,
      l < f && ((o = v), (v = S), (S = o), (s = l), (l = f), (f = s)),
      o = [],
      s = l + f,
      n = s;
    n--;
  )
    o.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      (a = o[i] + S[n] * v[i - n - 1] + t),
        (o[i--] = (a % ce) | 0),
        (t = (a / ce) | 0);
    o[i] = ((o[i] + t) % ce) | 0;
  }
  for (; !o[--s]; ) o.pop();
  return (
    t ? ++r : o.shift(),
    (e.d = o),
    (e.e = Er(o, r)),
    _ ? I(e, h.precision, h.rounding) : e
  );
};
C.toBinary = function (e, t) {
  return bn(this, 2, e, t);
};
C.toDecimalPlaces = C.toDP = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (re(e, 0, Oe),
        t === void 0 ? (t = n.rounding) : re(t, 0, 8),
        I(r, e + r.e + 1, t))
  );
};
C.toExponential = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = ge(n, !0))
      : (re(e, 0, Oe),
        t === void 0 ? (t = i.rounding) : re(t, 0, 8),
        (n = I(new i(n), e + 1, t)),
        (r = ge(n, !0, e + 1))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toFixed = function (e, t) {
  var r,
    n,
    o = this.constructor;
  return (
    e === void 0
      ? (r = ge(this))
      : (re(e, 0, Oe),
        t === void 0 ? (t = o.rounding) : re(t, 0, 8),
        (n = I(new o(this), e + this.e + 1, t)),
        (r = ge(n, !1, e + n.e + 1))),
    this.isNeg() && !this.isZero() ? "-" + r : r
  );
};
C.toFraction = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    A = this.d,
    R = this.constructor;
  if (!A) return new R(this);
  if (
    ((f = r = new R(1)),
    (n = l = new R(0)),
    (t = new R(n)),
    (o = t.e = po(A) - this.e - 1),
    (s = o % O),
    (t.d[0] = J(10, s < 0 ? O + s : s)),
    e == null)
  )
    e = o > 0 ? t : f;
  else {
    if (((a = new R(e)), !a.isInt() || a.lt(f))) throw Error(Ie + a);
    e = a.gt(t) ? (o > 0 ? t : f) : a;
  }
  for (
    _ = !1,
      a = new R(K(A)),
      g = R.precision,
      R.precision = o = A.length * O * 2;
    (h = q(a, t, 0, 1, 1)), (i = r.plus(h.times(n))), i.cmp(e) != 1;
  )
    (r = n),
      (n = i),
      (i = f),
      (f = l.plus(h.times(i))),
      (l = i),
      (i = t),
      (t = a.minus(h.times(i))),
      (a = i);
  return (
    (i = q(e.minus(r), n, 0, 1, 1)),
    (l = l.plus(i.times(f))),
    (r = r.plus(i.times(n))),
    (l.s = f.s = this.s),
    (v =
      q(f, n, o, 1)
        .minus(this)
        .abs()
        .cmp(q(l, r, o, 1).minus(this).abs()) < 1
        ? [f, n]
        : [l, r]),
    (R.precision = g),
    (_ = !0),
    v
  );
};
C.toHexadecimal = C.toHex = function (e, t) {
  return bn(this, 16, e, t);
};
C.toNearest = function (e, t) {
  var r = this,
    n = r.constructor;
  if (((r = new n(r)), e == null)) {
    if (!r.d) return r;
    (e = new n(1)), (t = n.rounding);
  } else {
    if (((e = new n(e)), t === void 0 ? (t = n.rounding) : re(t, 0, 8), !r.d))
      return e.s ? r : e;
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return (
    e.d[0]
      ? ((_ = !1), (r = q(r, e, 0, t, 1).times(e)), (_ = !0), I(r))
      : ((e.s = r.s), (r = e)),
    r
  );
};
C.toNumber = function () {
  return +this;
};
C.toOctal = function (e, t) {
  return bn(this, 8, e, t);
};
C.toPower = C.pow = function (e) {
  var t,
    r,
    n,
    i,
    o,
    s,
    a = this,
    l = a.constructor,
    f = +(e = new l(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(J(+a, f));
  if (((a = new l(a)), a.eq(1))) return a;
  if (((n = l.precision), (o = l.rounding), e.eq(1))) return I(a, n, o);
  if (((t = Z(e.e / O)), t >= e.d.length - 1 && (r = f < 0 ? -f : f) <= xl))
    return (i = mo(l, a, r, n)), e.s < 0 ? new l(1).div(i) : I(i, n, o);
  if (((s = a.s), s < 0)) {
    if (t < e.d.length - 1) return new l(NaN);
    if (
      ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
    )
      return (a.s = s), a;
  }
  return (
    (r = J(+a, f)),
    (t =
      r == 0 || !isFinite(r)
        ? Z(f * (Math.log("0." + K(a.d)) / Math.LN10 + a.e + 1))
        : new l(r + "").e),
    t > l.maxE + 1 || t < l.minE - 1
      ? new l(t > 0 ? s / 0 : 0)
      : ((_ = !1),
        (l.rounding = a.s = 1),
        (r = Math.min(12, (t + "").length)),
        (i = En(e.times(ke(a, n + r)), n)),
        i.d &&
          ((i = I(i, n + 5, 1)),
          Tt(i.d, n, o) &&
            ((t = n + 10),
            (i = I(En(e.times(ke(a, t + r)), t), t + 5, 1)),
            +K(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = I(i, n + 1, 0)))),
        (i.s = s),
        (_ = !0),
        (l.rounding = o),
        I(i, n, o))
  );
};
C.toPrecision = function (e, t) {
  var r,
    n = this,
    i = n.constructor;
  return (
    e === void 0
      ? (r = ge(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
      : (re(e, 1, Oe),
        t === void 0 ? (t = i.rounding) : re(t, 0, 8),
        (n = I(new i(n), e, t)),
        (r = ge(n, e <= n.e || n.e <= i.toExpNeg, e))),
    n.isNeg() && !n.isZero() ? "-" + r : r
  );
};
C.toSignificantDigits = C.toSD = function (e, t) {
  var n = this.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (re(e, 1, Oe), t === void 0 ? (t = n.rounding) : re(t, 0, 8)),
    I(new n(this), e, t)
  );
};
C.toString = function () {
  var t = this.constructor,
    r = ge(this, this.e <= t.toExpNeg || this.e >= t.toExpPos);
  return this.isNeg() && !this.isZero() ? "-" + r : r;
};
C.truncated = C.trunc = function () {
  return I(new this.constructor(this), this.e + 1, 1);
};
C.valueOf = C.toJSON = function () {
  var t = this.constructor,
    r = ge(this, this.e <= t.toExpNeg || this.e >= t.toExpPos);
  return this.isNeg() ? "-" + r : r;
};
function K(e) {
  var t,
    r,
    n,
    i = e.length - 1,
    o = "",
    s = e[0];
  if (i > 0) {
    for (o += s, t = 1; t < i; t++)
      (n = e[t] + ""), (r = O - n.length), r && (o += Se(r)), (o += n);
    (s = e[t]), (n = s + ""), (r = O - n.length), r && (o += Se(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0; ) s /= 10;
  return o + s;
}
function re(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Ie + e);
}
function Tt(e, t, r, n) {
  var i, o, s, a;
  for (o = e[0]; o >= 10; o /= 10) --t;
  return (
    --t < 0 ? ((t += O), (i = 0)) : ((i = Math.ceil((t + 1) / O)), (t %= O)),
    (o = J(10, O - t)),
    (a = (e[i] % o) | 0),
    n == null
      ? t < 3
        ? (t == 0 ? (a = (a / 100) | 0) : t == 1 && (a = (a / 10) | 0),
          (s =
            (r < 4 && a == 99999) ||
            (r > 3 && a == 49999) ||
            a == 5e4 ||
            a == 0))
        : (s =
            (((r < 4 && a + 1 == o) || (r > 3 && a + 1 == o / 2)) &&
              ((e[i + 1] / o / 100) | 0) == J(10, t - 2) - 1) ||
            ((a == o / 2 || a == 0) && ((e[i + 1] / o / 100) | 0) == 0))
      : t < 4
        ? (t == 0
            ? (a = (a / 1e3) | 0)
            : t == 1
              ? (a = (a / 100) | 0)
              : t == 2 && (a = (a / 10) | 0),
          (s = ((n || r < 4) && a == 9999) || (!n && r > 3 && a == 4999)))
        : (s =
            (((n || r < 4) && a + 1 == o) || (!n && r > 3 && a + 1 == o / 2)) &&
            ((e[i + 1] / o / 1e3) | 0) == J(10, t - 3) - 1),
    s
  );
}
function dr(e, t, r) {
  for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
    for (o = i.length; o--; ) i[o] *= t;
    for (i[0] += hn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
      i[n] > r - 1 &&
        (i[n + 1] === void 0 && (i[n + 1] = 0),
        (i[n + 1] += (i[n] / r) | 0),
        (i[n] %= r));
  }
  return i.reverse();
}
function vl(e, t) {
  var r, n, i;
  if (t.isZero()) return t;
  (n = t.d.length),
    n < 32
      ? ((r = Math.ceil(n / 3)), (i = (1 / br(4, r)).toString()))
      : ((r = 16), (i = "2.3283064365386962890625e-10")),
    (e.precision += r),
    (t = et(e, 1, t.times(i), new e(1)));
  for (var o = r; o--; ) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return (e.precision -= r), t;
}
var q = (() => {
  function e(n, i, o) {
    var s,
      a = 0,
      l = n.length;
    for (n = n.slice(); l--; )
      (s = n[l] * i + a), (n[l] = (s % o) | 0), (a = (s / o) | 0);
    return a && n.unshift(a), n;
  }
  function t(n, i, o, s) {
    var a, l;
    if (o != s) l = o > s ? 1 : -1;
    else
      for (a = l = 0; a < o; a++)
        if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, o, s) {
    for (var a = 0; o--; )
      (n[o] -= a), (a = n[o] < i[o] ? 1 : 0), (n[o] = a * s + n[o] - i[o]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return (n, i, o, s, a, l) => {
    var f,
      g,
      h,
      v,
      S,
      A,
      R,
      D,
      M,
      B,
      k,
      F,
      ie,
      G,
      Yr,
      tr,
      Et,
      Zr,
      ue,
      rr,
      nr = n.constructor,
      Xr = n.s == i.s ? 1 : -1,
      z = n.d,
      $ = i.d;
    if (!z || !z[0] || !$ || !$[0])
      return new nr(
        !n.s || !i.s || (z ? $ && z[0] == $[0] : !$)
          ? NaN
          : (z && z[0] == 0) || !$
            ? Xr * 0
            : Xr / 0,
      );
    for (
      l
        ? ((S = 1), (g = n.e - i.e))
        : ((l = ce), (S = O), (g = Z(n.e / S) - Z(i.e / S))),
        ue = $.length,
        Et = z.length,
        M = new nr(Xr),
        B = M.d = [],
        h = 0;
      $[h] == (z[h] || 0);
      h++
    );
    if (
      ($[h] > (z[h] || 0) && g--,
      o == null
        ? ((G = o = nr.precision), (s = nr.rounding))
        : a
          ? (G = o + (n.e - i.e) + 1)
          : (G = o),
      G < 0)
    )
      B.push(1), (A = !0);
    else {
      if (((G = (G / S + 2) | 0), (h = 0), ue == 1)) {
        for (v = 0, $ = $[0], G++; (h < Et || v) && G--; h++)
          (Yr = v * l + (z[h] || 0)), (B[h] = (Yr / $) | 0), (v = (Yr % $) | 0);
        A = v || h < Et;
      } else {
        for (
          v = (l / ($[0] + 1)) | 0,
            v > 1 &&
              (($ = e($, v, l)),
              (z = e(z, v, l)),
              (ue = $.length),
              (Et = z.length)),
            tr = ue,
            k = z.slice(0, ue),
            F = k.length;
          F < ue;
        )
          k[F++] = 0;
        (rr = $.slice()), rr.unshift(0), (Zr = $[0]), $[1] >= l / 2 && ++Zr;
        do
          (v = 0),
            (f = t($, k, ue, F)),
            f < 0
              ? ((ie = k[0]),
                ue != F && (ie = ie * l + (k[1] || 0)),
                (v = (ie / Zr) | 0),
                v > 1
                  ? (v >= l && (v = l - 1),
                    (R = e($, v, l)),
                    (D = R.length),
                    (F = k.length),
                    (f = t(R, k, D, F)),
                    f == 1 && (v--, r(R, ue < D ? rr : $, D, l)))
                  : (v == 0 && (f = v = 1), (R = $.slice())),
                (D = R.length),
                D < F && R.unshift(0),
                r(k, R, F, l),
                f == -1 &&
                  ((F = k.length),
                  (f = t($, k, ue, F)),
                  f < 1 && (v++, r(k, ue < F ? rr : $, F, l))),
                (F = k.length))
              : f === 0 && (v++, (k = [0])),
            (B[h++] = v),
            f && k[0] ? (k[F++] = z[tr] || 0) : ((k = [z[tr]]), (F = 1));
        while ((tr++ < Et || k[0] !== void 0) && G--);
        A = k[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (S == 1) (M.e = g), (so = A);
    else {
      for (h = 1, v = B[0]; v >= 10; v /= 10) h++;
      (M.e = h + g * S - 1), I(M, a ? o + M.e + 1 : o, s, A);
    }
    return M;
  };
})();
function I(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    S = e.constructor;
  e: if (t != null) {
    if (((h = e.d), !h)) return e;
    for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
    if (((o = t - i), o < 0))
      (o += O),
        (s = t),
        (g = h[(v = 0)]),
        (l = ((g / J(10, i - s - 1)) % 10) | 0);
    else if (((v = Math.ceil((o + 1) / O)), (a = h.length), v >= a))
      if (n) {
        for (; a++ <= v; ) h.push(0);
        (g = l = 0), (i = 1), (o %= O), (s = o - O + 1);
      } else break e;
    else {
      for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
      (o %= O),
        (s = o - O + i),
        (l = s < 0 ? 0 : ((g / J(10, i - s - 1)) % 10) | 0);
    }
    if (
      ((n =
        n ||
        t < 0 ||
        h[v + 1] !== void 0 ||
        (s < 0 ? g : g % J(10, i - s - 1))),
      (f =
        r < 4
          ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : l > 5 ||
            (l == 5 &&
              (r == 4 ||
                n ||
                (r == 6 &&
                  ((o > 0 ? (s > 0 ? g / J(10, i - s) : 0) : h[v - 1]) % 10) &
                    1) ||
                r == (e.s < 0 ? 8 : 7)))),
      t < 1 || !h[0])
    )
      return (
        (h.length = 0),
        f
          ? ((t -= e.e + 1), (h[0] = J(10, (O - (t % O)) % O)), (e.e = -t || 0))
          : (h[0] = e.e = 0),
        e
      );
    if (
      (o == 0
        ? ((h.length = v), (a = 1), v--)
        : ((h.length = v + 1),
          (a = J(10, O - o)),
          (h[v] = s > 0 ? (((g / J(10, i - s)) % J(10, s)) | 0) * a : 0)),
      f)
    )
      for (;;)
        if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == ce && (h[0] = 1));
          break;
        } else {
          if (((h[v] += a), h[v] != ce)) break;
          (h[v--] = 0), (a = 1);
        }
    for (o = h.length; h[--o] === 0; ) h.pop();
  }
  return (
    _ &&
      (e.e > S.maxE
        ? ((e.d = null), (e.e = NaN))
        : e.e < S.minE && ((e.e = 0), (e.d = [0]))),
    e
  );
}
function ge(e, t, r) {
  if (!e.isFinite()) return go(e);
  var n,
    i = e.e,
    o = K(e.d),
    s = o.length;
  return (
    t
      ? (r && (n = r - s) > 0
          ? (o = o.charAt(0) + "." + o.slice(1) + Se(n))
          : s > 1 && (o = o.charAt(0) + "." + o.slice(1)),
        (o = o + (e.e < 0 ? "e" : "e+") + e.e))
      : i < 0
        ? ((o = "0." + Se(-i - 1) + o), r && (n = r - s) > 0 && (o += Se(n)))
        : i >= s
          ? ((o += Se(i + 1 - s)),
            r && (n = r - i - 1) > 0 && (o = o + "." + Se(n)))
          : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)),
            r && (n = r - s) > 0 && (i + 1 === s && (o += "."), (o += Se(n)))),
    o
  );
}
function Er(e, t) {
  var r = e[0];
  for (t *= O; r >= 10; r /= 10) t++;
  return t;
}
function yr(e, t, r) {
  if (t > Pl) throw ((_ = !0), r && (e.precision = r), Error(ao));
  return I(new e(gr), t, 1, !0);
}
function fe(e, t, r) {
  if (t > wn) throw Error(ao);
  return I(new e(hr), t, r, !0);
}
function po(e) {
  var t = e.length - 1,
    r = t * O + 1;
  if (((t = e[t]), t)) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
function Se(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function mo(e, t, r, n) {
  var i,
    o = new e(1),
    s = Math.ceil(n / O + 4);
  for (_ = !1; ; ) {
    if (
      (r % 2 && ((o = o.times(t)), io(o.d, s) && (i = !0)),
      (r = Z(r / 2)),
      r === 0)
    ) {
      (r = o.d.length - 1), i && o.d[r] === 0 && ++o.d[r];
      break;
    }
    (t = t.times(t)), io(t.d, s);
  }
  return (_ = !0), o;
}
function no(e) {
  return e.d[e.d.length - 1] & 1;
}
function fo(e, t, r) {
  for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
    if (((i = new e(t[s])), !i.s)) {
      o = i;
      break;
    }
    (n = o.cmp(i)), (n === r || (n === 0 && o.s === r)) && (o = i);
  }
  return o;
}
function En(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    f = 0,
    g = 0,
    h = 0,
    v = e.constructor,
    S = v.rounding,
    A = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(
      e.d
        ? e.d[0]
          ? e.s < 0
            ? 0
            : 1 / 0
          : 1
        : e.s
          ? e.s < 0
            ? 0
            : e
          : NaN,
    );
  for (
    t == null ? ((_ = !1), (l = A)) : (l = t), a = new v(0.03125);
    e.e > -2;
  )
    (e = e.times(a)), (h += 5);
  for (
    n = ((Math.log(J(2, h)) / Math.LN10) * 2 + 5) | 0,
      l += n,
      r = o = s = new v(1),
      v.precision = l;
    ;
  ) {
    if (
      ((o = I(o.times(e), l, 1)),
      (r = r.times(++g)),
      (a = s.plus(q(o, r, l, 1))),
      K(a.d).slice(0, l) === K(s.d).slice(0, l))
    ) {
      for (i = h; i--; ) s = I(s.times(s), l, 1);
      if (t == null)
        if (f < 3 && Tt(s.d, l - n, S, f))
          (v.precision = l += 10), (r = o = a = new v(1)), (g = 0), f++;
        else return I(s, (v.precision = A), S, (_ = !0));
      else return (v.precision = A), s;
    }
    s = a;
  }
}
function ke(e, t) {
  var r,
    n,
    i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    S = 1,
    A = 10,
    R = e,
    D = R.d,
    M = R.constructor,
    B = M.rounding,
    k = M.precision;
  if (R.s < 0 || !D || !D[0] || (!R.e && D[0] == 1 && D.length == 1))
    return new M(D && !D[0] ? -1 / 0 : R.s != 1 ? NaN : D ? 0 : R);
  if (
    (t == null ? ((_ = !1), (g = k)) : (g = t),
    (M.precision = g += A),
    (r = K(D)),
    (n = r.charAt(0)),
    Math.abs((o = R.e)) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (R = R.times(e)), (r = K(R.d)), (n = r.charAt(0)), S++;
    (o = R.e),
      n > 1 ? ((R = new M("0." + r)), o++) : (R = new M(n + "." + r.slice(1)));
  } else
    return (
      (f = yr(M, g + 2, k).times(o + "")),
      (R = ke(new M(n + "." + r.slice(1)), g - A).plus(f)),
      (M.precision = k),
      t == null ? I(R, k, B, (_ = !0)) : R
    );
  for (
    h = R,
      l = s = R = q(R.minus(1), R.plus(1), g, 1),
      v = I(R.times(R), g, 1),
      i = 3;
    ;
  ) {
    if (
      ((s = I(s.times(v), g, 1)),
      (f = l.plus(q(s, new M(i), g, 1))),
      K(f.d).slice(0, g) === K(l.d).slice(0, g))
    )
      if (
        ((l = l.times(2)),
        o !== 0 && (l = l.plus(yr(M, g + 2, k).times(o + ""))),
        (l = q(l, new M(S), g, 1)),
        t == null)
      )
        if (Tt(l.d, g - A, B, a))
          (M.precision = g += A),
            (f = s = R = q(h.minus(1), h.plus(1), g, 1)),
            (v = I(R.times(R), g, 1)),
            (i = a = 1);
        else return I(l, (M.precision = k), B, (_ = !0));
      else return (M.precision = k), l;
    (l = f), (i += 2);
  }
}
function go(e) {
  return String((e.s * e.s) / 0);
}
function fr(e, t) {
  var r, n, i;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (i = t.length; t.charCodeAt(i - 1) === 48; --i);
  if (((t = t.slice(n, i)), t)) {
    if (
      ((i -= n),
      (e.e = r = r - n - 1),
      (e.d = []),
      (n = (r + 1) % O),
      r < 0 && (n += O),
      n < i)
    ) {
      for (n && e.d.push(+t.slice(0, n)), i -= O; n < i; )
        e.d.push(+t.slice(n, (n += O)));
      (t = t.slice(n)), (n = O - t.length);
    } else n -= i;
    for (; n--; ) t += "0";
    e.d.push(+t),
      _ &&
        (e.e > e.constructor.maxE
          ? ((e.d = null), (e.e = NaN))
          : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
  } else (e.e = 0), (e.d = [0]);
  return e;
}
function Tl(e, t) {
  var r, n, i, o, s, a, l, f, g;
  if (t.indexOf("_") > -1) {
    if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), co.test(t))) return fr(e, t);
  } else if (t === "Infinity" || t === "NaN")
    return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
  if (El.test(t)) (r = 16), (t = t.toLowerCase());
  else if (wl.test(t)) r = 2;
  else if (bl.test(t)) r = 8;
  else throw Error(Ie + t);
  for (
    o = t.search(/p/i),
      o > 0
        ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
        : (t = t.slice(2)),
      o = t.indexOf("."),
      s = o >= 0,
      n = e.constructor,
      s &&
        ((t = t.replace(".", "")),
        (a = t.length),
        (o = a - o),
        (i = mo(n, new n(r), o, o * 2))),
      f = dr(t, r, ce),
      g = f.length - 1,
      o = g;
    f[o] === 0;
    --o
  )
    f.pop();
  return o < 0
    ? new n(e.s * 0)
    : ((e.e = Er(f, g)),
      (e.d = f),
      (_ = !1),
      s && (e = q(e, i, a * 4)),
      l && (e = e.times(Math.abs(l) < 54 ? J(2, l) : Be.pow(2, l))),
      (_ = !0),
      e);
}
function Cl(e, t) {
  var r,
    n = t.d.length;
  if (n < 3) return t.isZero() ? t : et(e, 2, t, t);
  (r = 1.4 * Math.sqrt(n)),
    (r = r > 16 ? 16 : r | 0),
    (t = t.times(1 / br(5, r))),
    (t = et(e, 2, t, t));
  for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
    (i = t.times(t)), (t = t.times(o.plus(i.times(s.times(i).minus(a)))));
  return t;
}
function et(e, t, r, n, i) {
  var o,
    s,
    a,
    l,
    f = 1,
    g = e.precision,
    h = Math.ceil(g / O);
  for (_ = !1, l = r.times(r), a = new e(n); ; ) {
    if (
      ((s = q(a.times(l), new e(t++ * t++), g, 1)),
      (a = i ? n.plus(s) : n.minus(s)),
      (n = q(s.times(l), new e(t++ * t++), g, 1)),
      (s = a.plus(n)),
      s.d[h] !== void 0)
    ) {
      for (o = h; s.d[o] === a.d[o] && o--; );
      if (o == -1) break;
    }
    (o = a), (a = n), (n = s), (s = o), f++;
  }
  return (_ = !0), (s.d.length = h + 1), s;
}
function br(e, t) {
  for (var r = e; --t; ) r *= e;
  return r;
}
function ho(e, t) {
  var r,
    n = t.s < 0,
    i = fe(e, e.precision, 1),
    o = i.times(0.5);
  if (((t = t.abs()), t.lte(o))) return (Pe = n ? 4 : 1), t;
  if (((r = t.divToInt(i)), r.isZero())) Pe = n ? 3 : 2;
  else {
    if (((t = t.minus(r.times(i))), t.lte(o)))
      return (Pe = no(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
    Pe = no(r) ? (n ? 1 : 4) : n ? 3 : 2;
  }
  return t.minus(i).abs();
}
function bn(e, t, r, n) {
  var i,
    o,
    s,
    a,
    l,
    f,
    g,
    h,
    v,
    S = e.constructor,
    A = r !== void 0;
  if (
    (A
      ? (re(r, 1, Oe), n === void 0 ? (n = S.rounding) : re(n, 0, 8))
      : ((r = S.precision), (n = S.rounding)),
    !e.isFinite())
  )
    g = go(e);
  else {
    for (
      g = ge(e),
        s = g.indexOf("."),
        A
          ? ((i = 2), t == 16 ? (r = r * 4 - 3) : t == 8 && (r = r * 3 - 2))
          : (i = t),
        s >= 0 &&
          ((g = g.replace(".", "")),
          (v = new S(1)),
          (v.e = g.length - s),
          (v.d = dr(ge(v), 10, i)),
          (v.e = v.d.length)),
        h = dr(g, 10, i),
        o = l = h.length;
      h[--l] == 0;
    )
      h.pop();
    if (!h[0]) g = A ? "0p+0" : "0";
    else {
      if (
        (s < 0
          ? o--
          : ((e = new S(e)),
            (e.d = h),
            (e.e = o),
            (e = q(e, v, r, n, 0, i)),
            (h = e.d),
            (o = e.e),
            (f = so)),
        (s = h[r]),
        (a = i / 2),
        (f = f || h[r + 1] !== void 0),
        (f =
          n < 4
            ? (s !== void 0 || f) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              (s === a &&
                (n === 4 ||
                  f ||
                  (n === 6 && h[r - 1] & 1) ||
                  n === (e.s < 0 ? 8 : 7)))),
        (h.length = r),
        f)
      )
        for (; ++h[--r] > i - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
      for (l = h.length; !h[l - 1]; --l);
      for (s = 0, g = ""; s < l; s++) g += hn.charAt(h[s]);
      if (A) {
        if (l > 1)
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += "0";
            for (h = dr(g, i, t), l = h.length; !h[l - 1]; --l);
            for (s = 1, g = "1."; s < l; s++) g += hn.charAt(h[s]);
          } else g = g.charAt(0) + "." + g.slice(1);
        g = g + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; ) g = "0" + g;
        g = "0." + g;
      } else if (++o > l) for (o -= l; o--; ) g += "0";
      else o < l && (g = g.slice(0, o) + "." + g.slice(o));
    }
    g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
  }
  return e.s < 0 ? "-" + g : g;
}
function io(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Al(e) {
  return new this(e).abs();
}
function Rl(e) {
  return new this(e).acos();
}
function Sl(e) {
  return new this(e).acosh();
}
function kl(e, t) {
  return new this(e).plus(t);
}
function Il(e) {
  return new this(e).asin();
}
function Ol(e) {
  return new this(e).asinh();
}
function Dl(e) {
  return new this(e).atan();
}
function Ml(e) {
  return new this(e).atanh();
}
function _l(e, t) {
  (e = new this(e)), (t = new this(t));
  var r,
    n = this.precision,
    i = this.rounding,
    o = n + 4;
  return (
    !e.s || !t.s
      ? (r = new this(NaN))
      : !e.d && !t.d
        ? ((r = fe(this, o, 1).times(t.s > 0 ? 0.25 : 0.75)), (r.s = e.s))
        : !t.d || e.isZero()
          ? ((r = t.s < 0 ? fe(this, n, i) : new this(0)), (r.s = e.s))
          : !e.d || t.isZero()
            ? ((r = fe(this, o, 1).times(0.5)), (r.s = e.s))
            : t.s < 0
              ? ((this.precision = o),
                (this.rounding = 1),
                (r = this.atan(q(e, t, o, 1))),
                (t = fe(this, o, 1)),
                (this.precision = n),
                (this.rounding = i),
                (r = e.s < 0 ? r.minus(t) : r.plus(t)))
              : (r = this.atan(q(e, t, o, 1))),
    r
  );
}
function Nl(e) {
  return new this(e).cbrt();
}
function Fl(e) {
  return I((e = new this(e)), e.e + 1, 2);
}
function Ll(e, t, r) {
  return new this(e).clamp(t, r);
}
function Bl(e) {
  if (!e || typeof e != "object") throw Error(wr + "Object expected");
  var t,
    r,
    n,
    i = e.defaults === !0,
    o = [
      "precision",
      1,
      Oe,
      "rounding",
      0,
      8,
      "toExpNeg",
      -Xe,
      0,
      "toExpPos",
      0,
      Xe,
      "maxE",
      0,
      Xe,
      "minE",
      -Xe,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < o.length; t += 3)
    if (((r = o[t]), i && (this[r] = yn[r]), (n = e[r]) !== void 0))
      if (Z(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Ie + r + ": " + n);
  if (((r = "crypto"), i && (this[r] = yn[r]), (n = e[r]) !== void 0))
    if (n === !0 || n === !1 || n === 0 || n === 1)
      if (n)
        if (
          typeof crypto < "u" &&
          crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        )
          this[r] = !0;
        else throw Error(lo);
      else this[r] = !1;
    else throw Error(Ie + r + ": " + n);
  return this;
}
function Ul(e) {
  return new this(e).cos();
}
function ql(e) {
  return new this(e).cosh();
}
function yo(e) {
  var t, r, n;
  function i(o) {
    var s, a, l;
    if (!(this instanceof i)) return new i(o);
    if (((this.constructor = i), oo(o))) {
      (this.s = o.s),
        _
          ? !o.d || o.e > i.maxE
            ? ((this.e = NaN), (this.d = null))
            : o.e < i.minE
              ? ((this.e = 0), (this.d = [0]))
              : ((this.e = o.e), (this.d = o.d.slice()))
          : ((this.e = o.e), (this.d = o.d ? o.d.slice() : o.d));
      return;
    }
    if (((l = typeof o), l === "number")) {
      if (o === 0) {
        (this.s = 1 / o < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
        return;
      }
      if (
        (o < 0 ? ((o = -o), (this.s = -1)) : (this.s = 1), o === ~~o && o < 1e7)
      ) {
        for (s = 0, a = o; a >= 10; a /= 10) s++;
        _
          ? s > i.maxE
            ? ((this.e = NaN), (this.d = null))
            : s < i.minE
              ? ((this.e = 0), (this.d = [0]))
              : ((this.e = s), (this.d = [o]))
          : ((this.e = s), (this.d = [o]));
        return;
      }
      if (o * 0 !== 0) {
        o || (this.s = NaN), (this.e = NaN), (this.d = null);
        return;
      }
      return fr(this, o.toString());
    }
    if (l === "string")
      return (
        (a = o.charCodeAt(0)) === 45
          ? ((o = o.slice(1)), (this.s = -1))
          : (a === 43 && (o = o.slice(1)), (this.s = 1)),
        co.test(o) ? fr(this, o) : Tl(this, o)
      );
    if (l === "bigint")
      return (
        o < 0 ? ((o = -o), (this.s = -1)) : (this.s = 1), fr(this, o.toString())
      );
    throw Error(Ie + o);
  }
  if (
    ((i.prototype = C),
    (i.ROUND_UP = 0),
    (i.ROUND_DOWN = 1),
    (i.ROUND_CEIL = 2),
    (i.ROUND_FLOOR = 3),
    (i.ROUND_HALF_UP = 4),
    (i.ROUND_HALF_DOWN = 5),
    (i.ROUND_HALF_EVEN = 6),
    (i.ROUND_HALF_CEIL = 7),
    (i.ROUND_HALF_FLOOR = 8),
    (i.EUCLID = 9),
    (i.config = i.set = Bl),
    (i.clone = yo),
    (i.isDecimal = oo),
    (i.abs = Al),
    (i.acos = Rl),
    (i.acosh = Sl),
    (i.add = kl),
    (i.asin = Il),
    (i.asinh = Ol),
    (i.atan = Dl),
    (i.atanh = Ml),
    (i.atan2 = _l),
    (i.cbrt = Nl),
    (i.ceil = Fl),
    (i.clamp = Ll),
    (i.cos = Ul),
    (i.cosh = ql),
    (i.div = $l),
    (i.exp = jl),
    (i.floor = Vl),
    (i.hypot = Gl),
    (i.ln = Ql),
    (i.log = Jl),
    (i.log10 = Hl),
    (i.log2 = Wl),
    (i.max = Kl),
    (i.min = zl),
    (i.mod = Yl),
    (i.mul = Zl),
    (i.pow = Xl),
    (i.random = eu),
    (i.round = tu),
    (i.sign = ru),
    (i.sin = nu),
    (i.sinh = iu),
    (i.sqrt = ou),
    (i.sub = su),
    (i.sum = au),
    (i.tan = lu),
    (i.tanh = uu),
    (i.trunc = cu),
    e === void 0 && (e = {}),
    e && e.defaults !== !0)
  )
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ],
        t = 0;
      t < n.length;
    )
      Object.hasOwn(e, (r = n[t++])) || (e[r] = this[r]);
  return i.config(e), i;
}
function $l(e, t) {
  return new this(e).div(t);
}
function jl(e) {
  return new this(e).exp();
}
function Vl(e) {
  return I((e = new this(e)), e.e + 1, 3);
}
function Gl() {
  var e,
    t,
    r = new this(0);
  for (_ = !1, e = 0; e < arguments.length; )
    if (((t = new this(arguments[e++])), t.d)) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return (_ = !0), new this(1 / 0);
      r = t;
    }
  return (_ = !0), r.sqrt();
}
function oo(e) {
  return e instanceof Be || (e && e.toStringTag === uo) || !1;
}
function Ql(e) {
  return new this(e).ln();
}
function Jl(e, t) {
  return new this(e).log(t);
}
function Wl(e) {
  return new this(e).log(2);
}
function Hl(e) {
  return new this(e).log(10);
}
function Kl() {
  return fo(this, arguments, -1);
}
function zl() {
  return fo(this, arguments, 1);
}
function Yl(e, t) {
  return new this(e).mod(t);
}
function Zl(e, t) {
  return new this(e).mul(t);
}
function Xl(e, t) {
  return new this(e).pow(t);
}
function eu(e) {
  var t,
    r,
    n,
    i,
    o = 0,
    s = new this(1),
    a = [];
  if (
    (e === void 0 ? (e = this.precision) : re(e, 1, Oe),
    (n = Math.ceil(e / O)),
    this.crypto)
  )
    if (crypto.getRandomValues)
      for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
        (i = t[o]),
          i >= 429e7
            ? (t[o] = crypto.getRandomValues(new Uint32Array(1))[0])
            : (a[o++] = i % 1e7);
    else if (crypto.randomBytes) {
      for (t = crypto.randomBytes((n *= 4)); o < n; )
        (i =
          t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24)),
          i >= 214e7
            ? crypto.randomBytes(4).copy(t, o)
            : (a.push(i % 1e7), (o += 4));
      o = n / 4;
    } else throw Error(lo);
  else for (; o < n; ) a[o++] = (Math.random() * 1e7) | 0;
  for (
    n = a[--o],
      e %= O,
      n && e && ((i = J(10, O - e)), (a[o] = ((n / i) | 0) * i));
    a[o] === 0;
    o--
  )
    a.pop();
  if (o < 0) (r = 0), (a = [0]);
  else {
    for (r = -1; a[0] === 0; r -= O) a.shift();
    for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
    n < O && (r -= O - n);
  }
  return (s.e = r), (s.d = a), s;
}
function tu(e) {
  return I((e = new this(e)), e.e + 1, this.rounding);
}
function ru(e) {
  return (e = new this(e)), e.d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
}
function nu(e) {
  return new this(e).sin();
}
function iu(e) {
  return new this(e).sinh();
}
function ou(e) {
  return new this(e).sqrt();
}
function su(e, t) {
  return new this(e).sub(t);
}
function au() {
  var e = 0,
    t = arguments,
    r = new this(t[e]);
  for (_ = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
  return (_ = !0), I(r, this.precision, this.rounding);
}
function lu(e) {
  return new this(e).tan();
}
function uu(e) {
  return new this(e).tanh();
}
function cu(e) {
  return I((e = new this(e)), e.e + 1, 1);
}
C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
C[Symbol.toStringTag] = "Decimal";
var Be = (C.constructor = yo(yn));
gr = new Be(gr);
hr = new Be(hr);
var ve = Be;
function Ct(e) {
  return e === null
    ? e
    : Array.isArray(e)
      ? e.map(Ct)
      : typeof e == "object"
        ? pu(e)
          ? mu(e)
          : Ze(e, Ct)
        : e;
}
function pu(e) {
  return e !== null && typeof e == "object" && typeof e.$type == "string";
}
function mu({ $type: e, value: t }) {
  switch (e) {
    case "BigInt":
      return BigInt(t);
    case "Bytes": {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, "base64");
      return new Uint8Array(r, n, i);
    }
    case "DateTime":
      return new Date(t);
    case "Decimal":
      return new ve(t);
    case "Json":
      return JSON.parse(t);
    default:
      xe(t, "Unknown tagged value");
  }
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var he = class {
  _map = new Map();
  get(t) {
    return this._map.get(t)?.value;
  }
  set(t, r) {
    this._map.set(t, { value: r });
  }
  getOrCreate(t, r) {
    let n = this._map.get(t);
    if (n) return n.value;
    let i = r();
    return this.set(t, i), i;
  }
};
d();
u();
c();
p();
m();
function De(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
d();
u();
c();
p();
m();
function wo(e, t) {
  let r = {};
  for (let n of e) {
    let i = n[t];
    r[i] = n;
  }
  return r;
}
d();
u();
c();
p();
m();
function At(e) {
  let t;
  return {
    get() {
      return t || (t = { value: e() }), t.value;
    },
  };
}
d();
u();
c();
p();
m();
function du(e) {
  return { models: xn(e.models), enums: xn(e.enums), types: xn(e.types) };
}
function xn(e) {
  let t = {};
  for (let { name: r, ...n } of e) t[r] = n;
  return t;
}
d();
u();
c();
p();
m();
function tt(e) {
  return (
    e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
  );
}
function xr(e) {
  return e.toString() !== "Invalid Date";
}
d();
u();
c();
p();
m();
function rt(e) {
  return Be.isDecimal(e)
    ? !0
    : e !== null &&
        typeof e == "object" &&
        typeof e.s == "number" &&
        typeof e.e == "number" &&
        typeof e.toFixed == "function" &&
        Array.isArray(e.d);
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Pr = {};
ir(Pr, { ModelAction: () => Rt, datamodelEnumToSchemaEnum: () => fu });
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function fu(e) {
  return { name: e.name, values: e.values.map((t) => t.name) };
}
d();
u();
c();
p();
m();
var Rt = ((k) => (
  (k.findUnique = "findUnique"),
  (k.findUniqueOrThrow = "findUniqueOrThrow"),
  (k.findFirst = "findFirst"),
  (k.findFirstOrThrow = "findFirstOrThrow"),
  (k.findMany = "findMany"),
  (k.create = "create"),
  (k.createMany = "createMany"),
  (k.createManyAndReturn = "createManyAndReturn"),
  (k.update = "update"),
  (k.updateMany = "updateMany"),
  (k.updateManyAndReturn = "updateManyAndReturn"),
  (k.upsert = "upsert"),
  (k.delete = "delete"),
  (k.deleteMany = "deleteMany"),
  (k.groupBy = "groupBy"),
  (k.count = "count"),
  (k.aggregate = "aggregate"),
  (k.findRaw = "findRaw"),
  (k.aggregateRaw = "aggregateRaw"),
  k
))(Rt || {});
var gu = Qe(Ki());
var hu = {
    red: ze,
    gray: _i,
    dim: lr,
    bold: ar,
    underline: ki,
    highlightSource: (e) => e.highlight(),
  },
  yu = {
    red: (e) => e,
    gray: (e) => e,
    dim: (e) => e,
    bold: (e) => e,
    underline: (e) => e,
    highlightSource: (e) => e,
  };
function wu({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
  return {
    functionName: `prisma.${t}()`,
    message: e,
    isPanic: r ?? !1,
    callArguments: n,
  };
}
function Eu(
  {
    functionName: e,
    location: t,
    message: r,
    isPanic: n,
    contextLines: i,
    callArguments: o,
  },
  s,
) {
  let a = [""],
    l = t ? " in" : ":";
  if (
    (n
      ? (a.push(
          s.red(
            `Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`,
          ),
        ),
        a.push(
          s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`),
        ))
      : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)),
    t && a.push(s.underline(bu(t))),
    i)
  ) {
    a.push("");
    let f = [i.toString()];
    o && (f.push(o), f.push(s.dim(")"))), a.push(f.join("")), o && a.push("");
  } else a.push(""), o && a.push(o), a.push("");
  return (
    a.push(r),
    a.join(`
`)
  );
}
function bu(e) {
  let t = [e.fileName];
  return (
    e.lineNumber && t.push(String(e.lineNumber)),
    e.columnNumber && t.push(String(e.columnNumber)),
    t.join(":")
  );
}
function vr(e) {
  let t = e.showColors ? hu : yu,
    r;
  return (
    typeof $getTemplateParameters < "u"
      ? (r = $getTemplateParameters(e, t))
      : (r = wu(e)),
    Eu(r, t)
  );
}
d();
u();
c();
p();
m();
var Ro = Qe(Pn());
d();
u();
c();
p();
m();
function Po(e, t, r) {
  let n = vo(e),
    i = xu(n),
    o = vu(i);
  o ? Tr(o, t, r) : t.addErrorMessage(() => "Unknown error");
}
function vo(e) {
  return e.errors.flatMap((t) => (t.kind === "Union" ? vo(t) : [t]));
}
function xu(e) {
  let t = new Map(),
    r = [];
  for (let n of e) {
    if (n.kind !== "InvalidArgumentType") {
      r.push(n);
      continue;
    }
    let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`,
      o = t.get(i);
    o
      ? t.set(i, {
          ...n,
          argument: {
            ...n.argument,
            typeNames: Pu(o.argument.typeNames, n.argument.typeNames),
          },
        })
      : t.set(i, n);
  }
  return r.push(...t.values()), r;
}
function Pu(e, t) {
  return [...new Set(e.concat(t))];
}
function vu(e) {
  return gn(e, (t, r) => {
    let n = bo(t),
      i = bo(r);
    return n !== i ? n - i : xo(t) - xo(r);
  });
}
function bo(e) {
  let t = 0;
  return (
    Array.isArray(e.selectionPath) && (t += e.selectionPath.length),
    Array.isArray(e.argumentPath) && (t += e.argumentPath.length),
    t
  );
}
function xo(e) {
  switch (e.kind) {
    case "InvalidArgumentValue":
    case "ValueTooLarge":
      return 20;
    case "InvalidArgumentType":
      return 10;
    case "RequiredArgumentMissing":
      return -10;
    default:
      return 0;
  }
}
d();
u();
c();
p();
m();
var ae = class {
  constructor(t, r) {
    this.name = t;
    this.value = r;
  }
  isRequired = !1;
  makeRequired() {
    return (this.isRequired = !0), this;
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.addMarginSymbol(r(this.isRequired ? "+" : "?")),
      t.write(r(this.name)),
      this.isRequired || t.write(r("?")),
      t.write(r(": ")),
      typeof this.value == "string"
        ? t.write(r(this.value))
        : t.write(this.value);
  }
};
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
Co();
d();
u();
c();
p();
m();
var nt = class {
  constructor(t = 0, r) {
    this.context = r;
    this.currentIndent = t;
  }
  lines = [];
  currentLine = "";
  currentIndent = 0;
  marginSymbol;
  afterNextNewLineCallback;
  write(t) {
    return typeof t == "string" ? (this.currentLine += t) : t.write(this), this;
  }
  writeJoined(t, r, n = (i, o) => o.write(i)) {
    let i = r.length - 1;
    for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
    return this;
  }
  writeLine(t) {
    return this.write(t).newLine();
  }
  newLine() {
    this.lines.push(this.indentedCurrentLine()),
      (this.currentLine = ""),
      (this.marginSymbol = void 0);
    let t = this.afterNextNewLineCallback;
    return (this.afterNextNewLineCallback = void 0), t?.(), this;
  }
  withIndent(t) {
    return this.indent(), t(this), this.unindent(), this;
  }
  afterNextNewline(t) {
    return (this.afterNextNewLineCallback = t), this;
  }
  indent() {
    return this.currentIndent++, this;
  }
  unindent() {
    return this.currentIndent > 0 && this.currentIndent--, this;
  }
  addMarginSymbol(t) {
    return (this.marginSymbol = t), this;
  }
  toString() {
    return this.lines.concat(this.indentedCurrentLine()).join(`
`);
  }
  getCurrentLineLength() {
    return this.currentLine.length;
  }
  indentedCurrentLine() {
    let t = this.currentLine.padStart(
      this.currentLine.length + 2 * this.currentIndent,
    );
    return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
  }
};
To();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Cr = class {
  constructor(t) {
    this.value = t;
  }
  write(t) {
    t.write(this.value);
  }
  markAsError() {
    this.value.markAsError();
  }
};
d();
u();
c();
p();
m();
var Ar = (e) => e,
  Rr = { bold: Ar, red: Ar, green: Ar, dim: Ar, enabled: !1 },
  Ao = { bold: ar, red: ze, green: Ii, dim: lr, enabled: !0 },
  it = {
    write(e) {
      e.writeLine(",");
    },
  };
d();
u();
c();
p();
m();
var ye = class {
  constructor(t) {
    this.contents = t;
  }
  isUnderlined = !1;
  color = (t) => t;
  underline() {
    return (this.isUnderlined = !0), this;
  }
  setColor(t) {
    return (this.color = t), this;
  }
  write(t) {
    let r = t.getCurrentLineLength();
    t.write(this.color(this.contents)),
      this.isUnderlined &&
        t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(
            this.color("~".repeat(this.contents.length)),
          );
        });
  }
};
d();
u();
c();
p();
m();
var Me = class {
  hasError = !1;
  markAsError() {
    return (this.hasError = !0), this;
  }
};
var ot = class extends Me {
  items = [];
  addItem(t) {
    return this.items.push(new Cr(t)), this;
  }
  getField(t) {
    return this.items[t];
  }
  getPrintWidth() {
    return this.items.length === 0
      ? 2
      : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
  }
  write(t) {
    if (this.items.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithItems(t);
  }
  writeEmpty(t) {
    let r = new ye("[]");
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithItems(t) {
    let { colors: r } = t.context;
    t
      .writeLine("[")
      .withIndent(() => t.writeJoined(it, this.items).newLine())
      .write("]"),
      this.hasError &&
        t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
  }
  asObject() {}
};
var st = class e extends Me {
  fields = {};
  suggestions = [];
  addField(t) {
    this.fields[t.name] = t;
  }
  addSuggestion(t) {
    this.suggestions.push(t);
  }
  getField(t) {
    return this.fields[t];
  }
  getDeepField(t) {
    let [r, ...n] = t,
      i = this.getField(r);
    if (!i) return;
    let o = i;
    for (let s of n) {
      let a;
      if (
        (o.value instanceof e
          ? (a = o.value.getField(s))
          : o.value instanceof ot && (a = o.value.getField(Number(s))),
        !a)
      )
        return;
      o = a;
    }
    return o;
  }
  getDeepFieldValue(t) {
    return t.length === 0 ? this : this.getDeepField(t)?.value;
  }
  hasField(t) {
    return !!this.getField(t);
  }
  removeAllFields() {
    this.fields = {};
  }
  removeField(t) {
    delete this.fields[t];
  }
  getFields() {
    return this.fields;
  }
  isEmpty() {
    return Object.keys(this.fields).length === 0;
  }
  getFieldValue(t) {
    return this.getField(t)?.value;
  }
  getDeepSubSelectionValue(t) {
    let r = this;
    for (let n of t) {
      if (!(r instanceof e)) return;
      let i = r.getSubSelectionValue(n);
      if (!i) return;
      r = i;
    }
    return r;
  }
  getDeepSelectionParent(t) {
    let r = this.getSelectionParent();
    if (!r) return;
    let n = r;
    for (let i of t) {
      let o = n.value.getFieldValue(i);
      if (!o || !(o instanceof e)) return;
      let s = o.getSelectionParent();
      if (!s) return;
      n = s;
    }
    return n;
  }
  getSelectionParent() {
    let t = this.getField("select")?.value.asObject();
    if (t) return { kind: "select", value: t };
    let r = this.getField("include")?.value.asObject();
    if (r) return { kind: "include", value: r };
  }
  getSubSelectionValue(t) {
    return this.getSelectionParent()?.value.fields[t].value;
  }
  getPrintWidth() {
    let t = Object.values(this.fields);
    return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
  }
  write(t) {
    let r = Object.values(this.fields);
    if (r.length === 0 && this.suggestions.length === 0) {
      this.writeEmpty(t);
      return;
    }
    this.writeWithContents(t, r);
  }
  asObject() {
    return this;
  }
  writeEmpty(t) {
    let r = new ye("{}");
    this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
  }
  writeWithContents(t, r) {
    t.writeLine("{").withIndent(() => {
      t.writeJoined(it, [...r, ...this.suggestions]).newLine();
    }),
      t.write("}"),
      this.hasError &&
        t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
  }
};
d();
u();
c();
p();
m();
var H = class extends Me {
  constructor(r) {
    super();
    this.text = r;
  }
  getPrintWidth() {
    return this.text.length;
  }
  write(r) {
    let n = new ye(this.text);
    this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
  }
  asObject() {}
};
d();
u();
c();
p();
m();
var St = class {
  fields = [];
  addField(t, r) {
    return (
      this.fields.push({
        write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        },
      }),
      this
    );
  }
  write(t) {
    let {
      colors: { green: r },
    } = t.context;
    t.writeLine(r("{"))
      .withIndent(() => {
        t.writeJoined(it, this.fields).newLine();
      })
      .write(r("}"))
      .addMarginSymbol(r("+"));
  }
};
function Tr(e, t, r) {
  switch (e.kind) {
    case "MutuallyExclusiveFields":
      Tu(e, t);
      break;
    case "IncludeOnScalar":
      Cu(e, t);
      break;
    case "EmptySelection":
      Au(e, t, r);
      break;
    case "UnknownSelectionField":
      Iu(e, t);
      break;
    case "InvalidSelectionValue":
      Ou(e, t);
      break;
    case "UnknownArgument":
      Du(e, t);
      break;
    case "UnknownInputField":
      Mu(e, t);
      break;
    case "RequiredArgumentMissing":
      _u(e, t);
      break;
    case "InvalidArgumentType":
      Nu(e, t);
      break;
    case "InvalidArgumentValue":
      Fu(e, t);
      break;
    case "ValueTooLarge":
      Lu(e, t);
      break;
    case "SomeFieldsMissing":
      Bu(e, t);
      break;
    case "TooManyFieldsGiven":
      Uu(e, t);
      break;
    case "Union":
      Po(e, t, r);
      break;
    default:
      throw new Error("not implemented: " + e.kind);
  }
}
function Tu(e, t) {
  let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  r &&
    (r.getField(e.firstField)?.markAsError(),
    r.getField(e.secondField)?.markAsError()),
    t.addErrorMessage(
      (n) =>
        `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`,
    );
}
function Cu(e, t) {
  let [r, n] = kt(e.selectionPath),
    i = e.outputType,
    o = t.arguments.getDeepSelectionParent(r)?.value;
  if (o && (o.getField(n)?.markAsError(), i))
    for (let s of i.fields)
      s.isRelation && o.addSuggestion(new ae(s.name, "true"));
  t.addErrorMessage((s) => {
    let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
    return (
      i ? (a += ` on model ${s.bold(i.name)}. ${It(s)}`) : (a += "."),
      (a += `
Note that ${s.bold("include")} statements only accept relation fields.`),
      a
    );
  });
}
function Au(e, t, r) {
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getField("omit")?.value.asObject();
    if (i) {
      Ru(e, t, i);
      return;
    }
    if (n.hasField("select")) {
      Su(e, t);
      return;
    }
  }
  if (r?.[De(e.outputType.name)]) {
    ku(e, t);
    return;
  }
  t.addErrorMessage(
    () => `Unknown field at "${e.selectionPath.join(".")} selection"`,
  );
}
function Ru(e, t, r) {
  r.removeAllFields();
  for (let n of e.outputType.fields) r.addSuggestion(new ae(n.name, "false"));
  t.addErrorMessage(
    (n) =>
      `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`,
  );
}
function Su(e, t) {
  let r = e.outputType,
    n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value,
    i = n?.isEmpty() ?? !1;
  n && (n.removeAllFields(), Io(n, r)),
    t.addErrorMessage((o) =>
      i
        ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${It(o)}`
        : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`,
    );
}
function ku(e, t) {
  let r = new St();
  for (let i of e.outputType.fields)
    i.isRelation || r.addField(i.name, "false");
  let n = new ae("omit", r).makeRequired();
  if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
  else {
    let [i, o] = kt(e.selectionPath),
      a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
    if (a) {
      let l = a?.value.asObject() ?? new st();
      l.addSuggestion(n), (a.value = l);
    }
  }
  t.addErrorMessage(
    (i) =>
      `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`,
  );
}
function Iu(e, t) {
  let r = Oo(e.selectionPath, t);
  if (r.parentKind !== "unknown") {
    r.field.markAsError();
    let n = r.parent;
    switch (r.parentKind) {
      case "select":
        Io(n, e.outputType);
        break;
      case "include":
        qu(n, e.outputType);
        break;
      case "omit":
        $u(n, e.outputType);
        break;
    }
  }
  t.addErrorMessage((n) => {
    let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
    return (
      r.parentKind !== "unknown" &&
        i.push(`for ${n.bold(r.parentKind)} statement`),
      i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`),
      i.push(It(n)),
      i.join(" ")
    );
  });
}
function Ou(e, t) {
  let r = Oo(e.selectionPath, t);
  r.parentKind !== "unknown" && r.field.value.markAsError(),
    t.addErrorMessage(
      (n) =>
        `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`,
    );
}
function Du(e, t) {
  let r = e.argumentPath[0],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && (n.getField(r)?.markAsError(), ju(n, e.arguments)),
    t.addErrorMessage((i) =>
      So(
        i,
        r,
        e.arguments.map((o) => o.name),
      ),
    );
}
function Mu(e, t) {
  let [r, n] = kt(e.argumentPath),
    i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (i) {
    i.getDeepField(e.argumentPath)?.markAsError();
    let o = i.getDeepFieldValue(r)?.asObject();
    o && Do(o, e.inputType);
  }
  t.addErrorMessage((o) =>
    So(
      o,
      n,
      e.inputType.fields.map((s) => s.name),
    ),
  );
}
function So(e, t, r) {
  let n = [`Unknown argument \`${e.red(t)}\`.`],
    i = Gu(t, r);
  return (
    i && n.push(`Did you mean \`${e.green(i)}\`?`),
    r.length > 0 && n.push(It(e)),
    n.join(" ")
  );
}
function _u(e, t) {
  let r;
  t.addErrorMessage((l) =>
    r?.value instanceof H && r.value.text === "null"
      ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.`
      : `Argument \`${l.green(o)}\` is missing.`,
  );
  let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (!n) return;
  let [i, o] = kt(e.argumentPath),
    s = new St(),
    a = n.getDeepFieldValue(i)?.asObject();
  if (a)
    if (
      ((r = a.getField(o)),
      r && a.removeField(o),
      e.inputTypes.length === 1 && e.inputTypes[0].kind === "object")
    ) {
      for (let l of e.inputTypes[0].fields)
        s.addField(l.name, l.typeNames.join(" | "));
      a.addSuggestion(new ae(o, s).makeRequired());
    } else {
      let l = e.inputTypes.map(ko).join(" | ");
      a.addSuggestion(new ae(o, l).makeRequired());
    }
}
function ko(e) {
  return e.kind === "list" ? `${ko(e.elementType)}[]` : e.name;
}
function Nu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = Sr(
        "or",
        e.argument.typeNames.map((s) => i.green(s)),
      );
      return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
    });
}
function Fu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  n && n.getDeepFieldValue(e.argumentPath)?.markAsError(),
    t.addErrorMessage((i) => {
      let o = [`Invalid value for argument \`${i.bold(r)}\``];
      if (
        (e.underlyingError && o.push(`: ${e.underlyingError}`),
        o.push("."),
        e.argument.typeNames.length > 0)
      ) {
        let s = Sr(
          "or",
          e.argument.typeNames.map((a) => i.green(a)),
        );
        o.push(` Expected ${s}.`);
      }
      return o.join("");
    });
}
function Lu(e, t) {
  let r = e.argument.name,
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i;
  if (n) {
    let s = n.getDeepField(e.argumentPath)?.value;
    s?.markAsError(), s instanceof H && (i = s.text);
  }
  t.addErrorMessage((o) => {
    let s = ["Unable to fit value"];
    return (
      i && s.push(o.red(i)),
      s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``),
      s.join(" ")
    );
  });
}
function Bu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
  if (n) {
    let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
    i && Do(i, e.inputType);
  }
  t.addErrorMessage((i) => {
    let o = [
      `Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1
        ? e.constraints.requiredFields
          ? o.push(
              `${i.green("at least one of")} ${Sr(
                "or",
                e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``),
              )} arguments.`,
            )
          : o.push(`${i.green("at least one")} argument.`)
        : o.push(
            `${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`,
          ),
      o.push(It(i)),
      o.join(" ")
    );
  });
}
function Uu(e, t) {
  let r = e.argumentPath[e.argumentPath.length - 1],
    n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(),
    i = [];
  if (n) {
    let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
    o && (o.markAsError(), (i = Object.keys(o.getFields())));
  }
  t.addErrorMessage((o) => {
    let s = [
      `Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`,
    ];
    return (
      e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1
        ? s.push(`${o.green("exactly one")} argument,`)
        : e.constraints.maxFieldCount == 1
          ? s.push(`${o.green("at most one")} argument,`)
          : s.push(
              `${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`,
            ),
      s.push(
        `but you provided ${Sr(
          "and",
          i.map((a) => o.red(a)),
        )}. Please choose`,
      ),
      e.constraints.maxFieldCount === 1
        ? s.push("one.")
        : s.push(`${e.constraints.maxFieldCount}.`),
      s.join(" ")
    );
  });
}
function Io(e, t) {
  for (let r of t.fields)
    e.hasField(r.name) || e.addSuggestion(new ae(r.name, "true"));
}
function qu(e, t) {
  for (let r of t.fields)
    r.isRelation &&
      !e.hasField(r.name) &&
      e.addSuggestion(new ae(r.name, "true"));
}
function $u(e, t) {
  for (let r of t.fields)
    !e.hasField(r.name) &&
      !r.isRelation &&
      e.addSuggestion(new ae(r.name, "true"));
}
function ju(e, t) {
  for (let r of t)
    e.hasField(r.name) ||
      e.addSuggestion(new ae(r.name, r.typeNames.join(" | ")));
}
function Oo(e, t) {
  let [r, n] = kt(e),
    i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
  if (!i) return { parentKind: "unknown", fieldName: n };
  let o = i.getFieldValue("select")?.asObject(),
    s = i.getFieldValue("include")?.asObject(),
    a = i.getFieldValue("omit")?.asObject(),
    l = o?.getField(n);
  return o && l
    ? { parentKind: "select", parent: o, field: l, fieldName: n }
    : ((l = s?.getField(n)),
      s && l
        ? { parentKind: "include", field: l, parent: s, fieldName: n }
        : ((l = a?.getField(n)),
          a && l
            ? { parentKind: "omit", field: l, parent: a, fieldName: n }
            : { parentKind: "unknown", fieldName: n }));
}
function Do(e, t) {
  if (t.kind === "object")
    for (let r of t.fields)
      e.hasField(r.name) ||
        e.addSuggestion(new ae(r.name, r.typeNames.join(" | ")));
}
function kt(e) {
  let t = [...e],
    r = t.pop();
  if (!r) throw new Error("unexpected empty path");
  return [t, r];
}
function It({ green: e, enabled: t }) {
  return (
    "Available options are " +
    (t ? `listed in ${e("green")}` : "marked with ?") +
    "."
  );
}
function Sr(e, t) {
  if (t.length === 1) return t[0];
  let r = [...t],
    n = r.pop();
  return `${r.join(", ")} ${e} ${n}`;
}
var Vu = 3;
function Gu(e, t) {
  let r = 1 / 0,
    n;
  for (let i of t) {
    let o = (0, Ro.default)(e, i);
    o > Vu || (o < r && ((r = o), (n = i)));
  }
  return n;
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Ot = class {
  modelName;
  name;
  typeName;
  isList;
  isEnum;
  constructor(t, r, n, i, o) {
    (this.modelName = t),
      (this.name = r),
      (this.typeName = n),
      (this.isList = i),
      (this.isEnum = o);
  }
  _toGraphQLInputType() {
    let t = this.isList ? "List" : "",
      r = this.isEnum ? "Enum" : "";
    return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
  }
};
function at(e) {
  return e instanceof Ot;
}
d();
u();
c();
p();
m();
var kr = Symbol(),
  Tn = new WeakMap(),
  Te = class {
    constructor(t) {
      t === kr
        ? Tn.set(this, `Prisma.${this._getName()}`)
        : Tn.set(
            this,
            `new Prisma.${this._getNamespace()}.${this._getName()}()`,
          );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Tn.get(this);
    }
  },
  Dt = class extends Te {
    _getNamespace() {
      return "NullTypes";
    }
  },
  Mt = class extends Dt {
    _brand_DbNull;
  };
An(Mt, "DbNull");
var _t = class extends Dt {
  _brand_JsonNull;
};
An(_t, "JsonNull");
var Nt = class extends Dt {
  _brand_AnyNull;
};
An(Nt, "AnyNull");
var Cn = {
  classes: { DbNull: Mt, JsonNull: _t, AnyNull: Nt },
  instances: { DbNull: new Mt(kr), JsonNull: new _t(kr), AnyNull: new Nt(kr) },
};
function An(e, t) {
  Object.defineProperty(e, "name", { value: t, configurable: !0 });
}
d();
u();
c();
p();
m();
var Mo = ": ",
  Ir = class {
    constructor(t, r) {
      this.name = t;
      this.value = r;
    }
    hasError = !1;
    markAsError() {
      this.hasError = !0;
    }
    getPrintWidth() {
      return this.name.length + this.value.getPrintWidth() + Mo.length;
    }
    write(t) {
      let r = new ye(this.name);
      this.hasError && r.underline().setColor(t.context.colors.red),
        t.write(r).write(Mo).write(this.value);
    }
  };
var Rn = class {
  arguments;
  errorMessages = [];
  constructor(t) {
    this.arguments = t;
  }
  write(t) {
    t.write(this.arguments);
  }
  addErrorMessage(t) {
    this.errorMessages.push(t);
  }
  renderAllMessages(t) {
    return this.errorMessages
      .map((r) => r(t))
      .join(`
`);
  }
};
function lt(e) {
  return new Rn(_o(e));
}
function _o(e) {
  let t = new st();
  for (let [r, n] of Object.entries(e)) {
    let i = new Ir(r, No(n));
    t.addField(i);
  }
  return t;
}
function No(e) {
  if (typeof e == "string") return new H(JSON.stringify(e));
  if (typeof e == "number" || typeof e == "boolean") return new H(String(e));
  if (typeof e == "bigint") return new H(`${e}n`);
  if (e === null) return new H("null");
  if (e === void 0) return new H("undefined");
  if (rt(e)) return new H(`new Prisma.Decimal("${e.toFixed()}")`);
  if (e instanceof Uint8Array)
    return w.Buffer.isBuffer(e)
      ? new H(`Buffer.alloc(${e.byteLength})`)
      : new H(`new Uint8Array(${e.byteLength})`);
  if (e instanceof Date) {
    let t = xr(e) ? e.toISOString() : "Invalid Date";
    return new H(`new Date("${t}")`);
  }
  return e instanceof Te
    ? new H(`Prisma.${e._getName()}`)
    : at(e)
      ? new H(`prisma.${De(e.modelName)}.$fields.${e.name}`)
      : Array.isArray(e)
        ? Qu(e)
        : typeof e == "object"
          ? _o(e)
          : new H(Object.prototype.toString.call(e));
}
function Qu(e) {
  let t = new ot();
  for (let r of e) t.addItem(No(r));
  return t;
}
function Or(e, t) {
  let r = t === "pretty" ? Ao : Rr,
    n = e.renderAllMessages(r),
    i = new nt(0, { colors: r }).write(e).toString();
  return { message: n, args: i };
}
function Dr({
  args: e,
  errors: t,
  errorFormat: r,
  callsite: n,
  originalMethod: i,
  clientVersion: o,
  globalOmit: s,
}) {
  let a = lt(e);
  for (let h of t) Tr(h, a, s);
  let { message: l, args: f } = Or(a, r),
    g = vr({
      message: l,
      callsite: n,
      originalMethod: i,
      showColors: r === "pretty",
      callArguments: f,
    });
  throw new X(g, { clientVersion: o });
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function we(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
d();
u();
c();
p();
m();
function Lo(e, t, r) {
  let n = we(r);
  return !t.result || !(t.result.$allModels || t.result[n])
    ? e
    : Ju({
        ...e,
        ...Fo(t.name, e, t.result.$allModels),
        ...Fo(t.name, e, t.result[n]),
      });
}
function Ju(e) {
  let t = new he(),
    r = (n, i) =>
      t.getOrCreate(n, () =>
        i.has(n)
          ? [n]
          : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]),
      );
  return Ze(e, (n) => ({ ...n, needs: r(n.name, new Set()) }));
}
function Fo(e, t, r) {
  return r
    ? Ze(r, ({ needs: n, compute: i }, o) => ({
        name: o,
        needs: n ? Object.keys(n).filter((s) => n[s]) : [],
        compute: Wu(t, o, i),
      }))
    : {};
}
function Wu(e, t, r) {
  let n = e?.[t]?.compute;
  return n ? (i) => r({ ...i, [t]: n(i) }) : r;
}
function Bo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (e[n.name]) for (let i of n.needs) r[i] = !0;
  return r;
}
function Uo(e, t) {
  if (!t) return e;
  let r = { ...e };
  for (let n of Object.values(t))
    if (!e[n.name]) for (let i of n.needs) delete r[i];
  return r;
}
var Mr = class {
    constructor(t, r) {
      this.extension = t;
      this.previous = r;
    }
    computedFieldsCache = new he();
    modelExtensionsCache = new he();
    queryCallbacksCache = new he();
    clientExtensions = At(() =>
      this.extension.client
        ? {
            ...this.previous?.getAllClientExtensions(),
            ...this.extension.client,
          }
        : this.previous?.getAllClientExtensions(),
    );
    batchCallbacks = At(() => {
      let t = this.previous?.getAllBatchQueryCallbacks() ?? [],
        r = this.extension.query?.$__internalBatch;
      return r ? t.concat(r) : t;
    });
    getAllComputedFields(t) {
      return this.computedFieldsCache.getOrCreate(t, () =>
        Lo(this.previous?.getAllComputedFields(t), this.extension, t),
      );
    }
    getAllClientExtensions() {
      return this.clientExtensions.get();
    }
    getAllModelExtensions(t) {
      return this.modelExtensionsCache.getOrCreate(t, () => {
        let r = we(t);
        return !this.extension.model ||
          !(this.extension.model[r] || this.extension.model.$allModels)
          ? this.previous?.getAllModelExtensions(t)
          : {
              ...this.previous?.getAllModelExtensions(t),
              ...this.extension.model.$allModels,
              ...this.extension.model[r],
            };
      });
    }
    getAllQueryCallbacks(t, r) {
      return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
        let n = this.previous?.getAllQueryCallbacks(t, r) ?? [],
          i = [],
          o = this.extension.query;
        return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations)
          ? n
          : (o[t] !== void 0 &&
              (o[t][r] !== void 0 && i.push(o[t][r]),
              o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)),
            t !== "$none" &&
              o.$allModels !== void 0 &&
              (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]),
              o.$allModels.$allOperations !== void 0 &&
                i.push(o.$allModels.$allOperations)),
            o[r] !== void 0 && i.push(o[r]),
            o.$allOperations !== void 0 && i.push(o.$allOperations),
            n.concat(i));
      });
    }
    getAllBatchQueryCallbacks() {
      return this.batchCallbacks.get();
    }
  },
  ut = class e {
    constructor(t) {
      this.head = t;
    }
    static empty() {
      return new e();
    }
    static single(t) {
      return new e(new Mr(t));
    }
    isEmpty() {
      return this.head === void 0;
    }
    append(t) {
      return new e(new Mr(t, this.head));
    }
    getAllComputedFields(t) {
      return this.head?.getAllComputedFields(t);
    }
    getAllClientExtensions() {
      return this.head?.getAllClientExtensions();
    }
    getAllModelExtensions(t) {
      return this.head?.getAllModelExtensions(t);
    }
    getAllQueryCallbacks(t, r) {
      return this.head?.getAllQueryCallbacks(t, r) ?? [];
    }
    getAllBatchQueryCallbacks() {
      return this.head?.getAllBatchQueryCallbacks() ?? [];
    }
  };
d();
u();
c();
p();
m();
var _r = class {
  constructor(t) {
    this.name = t;
  }
};
function qo(e) {
  return e instanceof _r;
}
function Hu(e) {
  return new _r(e);
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var $o = Symbol(),
  Ft = class {
    constructor(t) {
      if (t !== $o)
        throw new Error("Skip instance can not be constructed directly");
    }
    ifUndefined(t) {
      return t === void 0 ? Sn : t;
    }
  },
  Sn = new Ft($o);
function Ee(e) {
  return e instanceof Ft;
}
var Ku = {
    findUnique: "findUnique",
    findUniqueOrThrow: "findUniqueOrThrow",
    findFirst: "findFirst",
    findFirstOrThrow: "findFirstOrThrow",
    findMany: "findMany",
    count: "aggregate",
    create: "createOne",
    createMany: "createMany",
    createManyAndReturn: "createManyAndReturn",
    update: "updateOne",
    updateMany: "updateMany",
    updateManyAndReturn: "updateManyAndReturn",
    upsert: "upsertOne",
    delete: "deleteOne",
    deleteMany: "deleteMany",
    executeRaw: "executeRaw",
    queryRaw: "queryRaw",
    aggregate: "aggregate",
    groupBy: "groupBy",
    runCommandRaw: "runCommandRaw",
    findRaw: "findRaw",
    aggregateRaw: "aggregateRaw",
  },
  jo = "explicitly `undefined` values are not allowed";
function In({
  modelName: e,
  action: t,
  args: r,
  runtimeDataModel: n,
  extensions: i = ut.empty(),
  callsite: o,
  clientMethod: s,
  errorFormat: a,
  clientVersion: l,
  previewFeatures: f,
  globalOmit: g,
}) {
  let h = new kn({
    runtimeDataModel: n,
    modelName: e,
    action: t,
    rootArgs: r,
    callsite: o,
    extensions: i,
    selectionPath: [],
    argumentPath: [],
    originalMethod: s,
    errorFormat: a,
    clientVersion: l,
    previewFeatures: f,
    globalOmit: g,
  });
  return { modelName: e, action: Ku[t], query: Lt(r, h) };
}
function Lt({ select: e, include: t, ...r } = {}, n) {
  let i = r.omit;
  return delete r.omit, { arguments: Go(r, n), selection: zu(e, t, i, n) };
}
function zu(e, t, r, n) {
  return e
    ? (t
        ? n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "include",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          })
        : r &&
          n.throwValidationError({
            kind: "MutuallyExclusiveFields",
            firstField: "omit",
            secondField: "select",
            selectionPath: n.getSelectionPath(),
          }),
      ec(e, n))
    : Yu(n, t, r);
}
function Yu(e, t, r) {
  let n = {};
  return (
    e.modelOrType &&
      !e.isRawAction() &&
      ((n.$composites = !0), (n.$scalars = !0)),
    t && Zu(n, t, e),
    Xu(n, r, e),
    n
  );
}
function Zu(e, t, r) {
  for (let [n, i] of Object.entries(t)) {
    if (Ee(i)) continue;
    let o = r.nestSelection(n);
    if ((On(i, o), i === !1 || i === void 0)) {
      e[n] = !1;
      continue;
    }
    let s = r.findField(n);
    if (
      (s &&
        s.kind !== "object" &&
        r.throwValidationError({
          kind: "IncludeOnScalar",
          selectionPath: r.getSelectionPath().concat(n),
          outputType: r.getOutputTypeDescription(),
        }),
      s)
    ) {
      e[n] = Lt(i === !0 ? {} : i, o);
      continue;
    }
    if (i === !0) {
      e[n] = !0;
      continue;
    }
    e[n] = Lt(i, o);
  }
}
function Xu(e, t, r) {
  let n = r.getComputedFields(),
    i = { ...r.getGlobalOmit(), ...t },
    o = Uo(i, n);
  for (let [s, a] of Object.entries(o)) {
    if (Ee(a)) continue;
    On(a, r.nestSelection(s));
    let l = r.findField(s);
    (n?.[s] && !l) || (e[s] = !a);
  }
}
function ec(e, t) {
  let r = {},
    n = t.getComputedFields(),
    i = Bo(e, n);
  for (let [o, s] of Object.entries(i)) {
    if (Ee(s)) continue;
    let a = t.nestSelection(o);
    On(s, a);
    let l = t.findField(o);
    if (!(n?.[o] && !l)) {
      if (s === !1 || s === void 0 || Ee(s)) {
        r[o] = !1;
        continue;
      }
      if (s === !0) {
        l?.kind === "object" ? (r[o] = Lt({}, a)) : (r[o] = !0);
        continue;
      }
      r[o] = Lt(s, a);
    }
  }
  return r;
}
function Vo(e, t) {
  if (e === null) return null;
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
  if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
  if (tt(e)) {
    if (xr(e)) return { $type: "DateTime", value: e.toISOString() };
    t.throwValidationError({
      kind: "InvalidArgumentValue",
      selectionPath: t.getSelectionPath(),
      argumentPath: t.getArgumentPath(),
      argument: { name: t.getArgumentName(), typeNames: ["Date"] },
      underlyingError: "Provided Date object is invalid",
    });
  }
  if (qo(e)) return { $type: "Param", value: e.name };
  if (at(e))
    return {
      $type: "FieldRef",
      value: { _ref: e.name, _container: e.modelName },
    };
  if (Array.isArray(e)) return tc(e, t);
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return { $type: "Bytes", value: w.Buffer.from(r, n, i).toString("base64") };
  }
  if (rc(e)) return e.values;
  if (rt(e)) return { $type: "Decimal", value: e.toFixed() };
  if (e instanceof Te) {
    if (e !== Cn.instances[e._getName()])
      throw new Error("Invalid ObjectEnumValue");
    return { $type: "Enum", value: e._getName() };
  }
  if (nc(e)) return e.toJSON();
  if (typeof e == "object") return Go(e, t);
  t.throwValidationError({
    kind: "InvalidArgumentValue",
    selectionPath: t.getSelectionPath(),
    argumentPath: t.getArgumentPath(),
    argument: { name: t.getArgumentName(), typeNames: [] },
    underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it`,
  });
}
function Go(e, t) {
  if (e.$type) return { $type: "Raw", value: e };
  let r = {};
  for (let n in e) {
    let i = e[n],
      o = t.nestArgument(n);
    Ee(i) ||
      (i !== void 0
        ? (r[n] = Vo(i, o))
        : t.isPreviewFeatureOn("strictUndefinedChecks") &&
          t.throwValidationError({
            kind: "InvalidArgumentValue",
            argumentPath: o.getArgumentPath(),
            selectionPath: t.getSelectionPath(),
            argument: { name: t.getArgumentName(), typeNames: [] },
            underlyingError: jo,
          }));
  }
  return r;
}
function tc(e, t) {
  let r = [];
  for (let n = 0; n < e.length; n++) {
    let i = t.nestArgument(String(n)),
      o = e[n];
    if (o === void 0 || Ee(o)) {
      let s = o === void 0 ? "undefined" : "Prisma.skip";
      t.throwValidationError({
        kind: "InvalidArgumentValue",
        selectionPath: i.getSelectionPath(),
        argumentPath: i.getArgumentPath(),
        argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] },
        underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values`,
      });
    }
    r.push(Vo(o, i));
  }
  return r;
}
function rc(e) {
  return typeof e == "object" && e !== null && e.__prismaRawParameters__ === !0;
}
function nc(e) {
  return typeof e == "object" && e !== null && typeof e.toJSON == "function";
}
function On(e, t) {
  e === void 0 &&
    t.isPreviewFeatureOn("strictUndefinedChecks") &&
    t.throwValidationError({
      kind: "InvalidSelectionValue",
      selectionPath: t.getSelectionPath(),
      underlyingError: jo,
    });
}
var kn = class e {
  constructor(t) {
    this.params = t;
    this.params.modelName &&
      (this.modelOrType =
        this.params.runtimeDataModel.models[this.params.modelName] ??
        this.params.runtimeDataModel.types[this.params.modelName]);
  }
  modelOrType;
  throwValidationError(t) {
    Dr({
      errors: [t],
      originalMethod: this.params.originalMethod,
      args: this.params.rootArgs ?? {},
      callsite: this.params.callsite,
      errorFormat: this.params.errorFormat,
      clientVersion: this.params.clientVersion,
      globalOmit: this.params.globalOmit,
    });
  }
  getSelectionPath() {
    return this.params.selectionPath;
  }
  getArgumentPath() {
    return this.params.argumentPath;
  }
  getArgumentName() {
    return this.params.argumentPath[this.params.argumentPath.length - 1];
  }
  getOutputTypeDescription() {
    if (!(!this.params.modelName || !this.modelOrType))
      return {
        name: this.params.modelName,
        fields: this.modelOrType.fields.map((t) => ({
          name: t.name,
          typeName: "boolean",
          isRelation: t.kind === "object",
        })),
      };
  }
  isRawAction() {
    return [
      "executeRaw",
      "queryRaw",
      "runCommandRaw",
      "findRaw",
      "aggregateRaw",
    ].includes(this.params.action);
  }
  isPreviewFeatureOn(t) {
    return this.params.previewFeatures.includes(t);
  }
  getComputedFields() {
    if (this.params.modelName)
      return this.params.extensions.getAllComputedFields(this.params.modelName);
  }
  findField(t) {
    return this.modelOrType?.fields.find((r) => r.name === t);
  }
  nestSelection(t) {
    let r = this.findField(t),
      n = r?.kind === "object" ? r.type : void 0;
    return new e({
      ...this.params,
      modelName: n,
      selectionPath: this.params.selectionPath.concat(t),
    });
  }
  getGlobalOmit() {
    return this.params.modelName && this.shouldApplyGlobalOmit()
      ? (this.params.globalOmit?.[De(this.params.modelName)] ?? {})
      : {};
  }
  shouldApplyGlobalOmit() {
    switch (this.params.action) {
      case "findFirst":
      case "findFirstOrThrow":
      case "findUniqueOrThrow":
      case "findMany":
      case "upsert":
      case "findUnique":
      case "createManyAndReturn":
      case "create":
      case "update":
      case "updateManyAndReturn":
      case "delete":
        return !0;
      case "executeRaw":
      case "aggregateRaw":
      case "runCommandRaw":
      case "findRaw":
      case "createMany":
      case "deleteMany":
      case "groupBy":
      case "updateMany":
      case "count":
      case "aggregate":
      case "queryRaw":
        return !1;
      default:
        xe(this.params.action, "Unknown action");
    }
  }
  nestArgument(t) {
    return new e({
      ...this.params,
      argumentPath: this.params.argumentPath.concat(t),
    });
  }
};
d();
u();
c();
p();
m();
function Qo(e) {
  if (!e._hasPreviewFlag("metrics"))
    throw new X(
      "`metrics` preview feature must be enabled in order to access metrics API",
      { clientVersion: e._clientVersion },
    );
}
var Bt = class {
  _client;
  constructor(t) {
    this._client = t;
  }
  prometheus(t) {
    return (
      Qo(this._client),
      this._client._engine.metrics({ format: "prometheus", ...t })
    );
  }
  json(t) {
    return (
      Qo(this._client), this._client._engine.metrics({ format: "json", ...t })
    );
  }
};
d();
u();
c();
p();
m();
function ic(e, t) {
  let r = At(() => oc(t));
  Object.defineProperty(e, "dmmf", { get: () => r.get() });
}
function oc(e) {
  return {
    datamodel: { models: Dn(e.models), enums: Dn(e.enums), types: Dn(e.types) },
  };
}
function Dn(e) {
  return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
}
d();
u();
c();
p();
m();
var Mn = new WeakMap(),
  Nr = "$$PrismaTypedSql",
  Ut = class {
    constructor(t, r) {
      Mn.set(this, { sql: t, values: r }),
        Object.defineProperty(this, Nr, { value: Nr });
    }
    get sql() {
      return Mn.get(this).sql;
    }
    get values() {
      return Mn.get(this).values;
    }
  };
function sc(e) {
  return (...t) => new Ut(e, t);
}
function Fr(e) {
  return e != null && e[Nr] === Nr;
}
d();
u();
c();
p();
m();
var sa = Qe(Jo());
d();
u();
c();
p();
m();
Wo();
qi();
Gi();
d();
u();
c();
p();
m();
var le = class e {
  constructor(t, r) {
    if (t.length - 1 !== r.length)
      throw t.length === 0
        ? new TypeError("Expected at least 1 string")
        : new TypeError(
            `Expected ${t.length} strings to have ${t.length - 1} values`,
          );
    let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
    (this.values = new Array(n)),
      (this.strings = new Array(n + 1)),
      (this.strings[0] = t[0]);
    let i = 0,
      o = 0;
    for (; i < r.length; ) {
      let s = r[i++],
        a = t[i];
      if (s instanceof e) {
        this.strings[o] += s.strings[0];
        let l = 0;
        for (; l < s.values.length; )
          (this.values[o++] = s.values[l++]), (this.strings[o] = s.strings[l]);
        this.strings[o] += a;
      } else (this.values[o++] = s), (this.strings[o] = a);
    }
  }
  get sql() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `?${this.strings[r++]}`;
    return n;
  }
  get statement() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `:${r}${this.strings[r++]}`;
    return n;
  }
  get text() {
    let t = this.strings.length,
      r = 1,
      n = this.strings[0];
    for (; r < t; ) n += `$${r}${this.strings[r++]}`;
    return n;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values,
    };
  }
};
function lc(e, t = ",", r = "", n = "") {
  if (e.length === 0)
    throw new TypeError(
      "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
    );
  return new le([r, ...Array(e.length - 1).fill(t), n], e);
}
function Ho(e) {
  return new le([e], []);
}
var uc = Ho("");
function Ko(e, ...t) {
  return new le(e, t);
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function qt(e) {
  return {
    getKeys() {
      return Object.keys(e);
    },
    getPropertyValue(t) {
      return e[t];
    },
  };
}
d();
u();
c();
p();
m();
function ee(e, t) {
  return {
    getKeys() {
      return [e];
    },
    getPropertyValue() {
      return t();
    },
  };
}
d();
u();
c();
p();
m();
function Ue(e) {
  let t = new he();
  return {
    getKeys() {
      return e.getKeys();
    },
    getPropertyValue(r) {
      return t.getOrCreate(r, () => e.getPropertyValue(r));
    },
    getPropertyDescriptor(r) {
      return e.getPropertyDescriptor?.(r);
    },
  };
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Br = { enumerable: !0, configurable: !0, writable: !0 };
function Ur(e) {
  let t = new Set(e);
  return {
    getPrototypeOf: () => Object.prototype,
    getOwnPropertyDescriptor: () => Br,
    has: (r, n) => t.has(n),
    set: (r, n, i) => t.add(n) && Reflect.set(r, n, i),
    ownKeys: () => [...t],
  };
}
var zo = Symbol.for("nodejs.util.inspect.custom");
function pe(e, t) {
  let r = cc(t),
    n = new Set(),
    i = new Proxy(e, {
      get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      },
      has(o, s) {
        if (n.has(s)) return !0;
        let a = r.get(s);
        return a ? (a.has?.(s) ?? !0) : Reflect.has(o, s);
      },
      ownKeys(o) {
        let s = Yo(Reflect.ownKeys(o), r),
          a = Yo(Array.from(r.keys()), r);
        return [...new Set([...s, ...a, ...n])];
      },
      set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === !1
          ? !1
          : (n.add(s), Reflect.set(o, s, a));
      },
      getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l
          ? l.getPropertyDescriptor
            ? { ...Br, ...l?.getPropertyDescriptor(s) }
            : Br
          : a;
      },
      defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      },
      getPrototypeOf: () => Object.prototype,
    });
  return (
    (i[zo] = function () {
      let o = { ...this };
      return delete o[zo], o;
    }),
    i
  );
}
function cc(e) {
  let t = new Map();
  for (let r of e) {
    let n = r.getKeys();
    for (let i of n) t.set(i, r);
  }
  return t;
}
function Yo(e, t) {
  return e.filter((r) => t.get(r)?.has?.(r) ?? !0);
}
d();
u();
c();
p();
m();
function ct(e) {
  return {
    getKeys() {
      return e;
    },
    has() {
      return !1;
    },
    getPropertyValue() {},
  };
}
d();
u();
c();
p();
m();
function qr(e, t) {
  return {
    batch: e,
    transaction:
      t?.kind === "batch"
        ? { isolationLevel: t.options.isolationLevel }
        : void 0,
  };
}
d();
u();
c();
p();
m();
function Zo(e) {
  if (e === void 0) return "";
  let t = lt(e);
  return new nt(0, { colors: Rr }).write(t).toString();
}
d();
u();
c();
p();
m();
var pc = "P2037";
function $r({ error: e, user_facing_error: t }, r, n) {
  return t.error_code
    ? new oe(mc(t, n), {
        code: t.error_code,
        clientVersion: r,
        meta: t.meta,
        batchRequestIdx: t.batch_request_idx,
      })
    : new se(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
}
function mc(e, t) {
  let r = e.message;
  return (
    (t === "postgresql" || t === "postgres" || t === "mysql") &&
      e.error_code === pc &&
      (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`),
    r
  );
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var _n = class {
  getLocation() {
    return null;
  }
};
function _e(e) {
  return typeof $EnabledCallSite == "function" && e !== "minimal"
    ? new $EnabledCallSite()
    : new _n();
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Xo = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function pt(e = {}) {
  let t = fc(e);
  return Object.entries(t).reduce(
    (n, [i, o]) => (
      Xo[i] !== void 0 ? (n.select[i] = { select: o }) : (n[i] = o), n
    ),
    { select: {} },
  );
}
function fc(e = {}) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
function jr(e = {}) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
function es(e, t) {
  let r = jr(e);
  return t({ action: "aggregate", unpacker: r, argsMapper: pt })(e);
}
d();
u();
c();
p();
m();
function gc(e = {}) {
  let { select: t, ...r } = e;
  return typeof t == "object"
    ? pt({ ...r, _count: t })
    : pt({ ...r, _count: { _all: !0 } });
}
function hc(e = {}) {
  return typeof e.select == "object"
    ? (t) => jr(e)(t)._count
    : (t) => jr(e)(t)._count._all;
}
function ts(e, t) {
  return t({ action: "count", unpacker: hc(e), argsMapper: gc })(e);
}
d();
u();
c();
p();
m();
function yc(e = {}) {
  let t = pt(e);
  if (Array.isArray(t.by))
    for (let r of t.by) typeof r == "string" && (t.select[r] = !0);
  else typeof t.by == "string" && (t.select[t.by] = !0);
  return t;
}
function wc(e = {}) {
  return (t) => (
    typeof e?._count == "boolean" &&
      t.forEach((r) => {
        r._count = r._count._all;
      }),
    t
  );
}
function rs(e, t) {
  return t({ action: "groupBy", unpacker: wc(e), argsMapper: yc })(e);
}
function ns(e, t, r) {
  if (t === "aggregate") return (n) => es(n, r);
  if (t === "count") return (n) => ts(n, r);
  if (t === "groupBy") return (n) => rs(n, r);
}
d();
u();
c();
p();
m();
function is(e, t) {
  let r = t.fields.filter((i) => !i.relationName),
    n = wo(r, "name");
  return new Proxy(
    {},
    {
      get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Ot(e, o, s.type, s.isList, s.kind === "enum");
      },
      ...Ur(Object.keys(n)),
    },
  );
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var os = (e) => (Array.isArray(e) ? e : e.split(".")),
  Nn = (e, t) => os(t).reduce((r, n) => r && r[n], e),
  ss = (e, t, r) =>
    os(t).reduceRight(
      (n, i, o, s) => Object.assign({}, Nn(e, s.slice(0, o)), { [i]: n }),
      r,
    );
function Ec(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
function bc(e, t, r) {
  return t === void 0 ? (e ?? {}) : ss(t, r, e || !0);
}
function Fn(e, t, r, n, i, o) {
  let a = e._runtimeDataModel.models[t].fields.reduce(
    (l, f) => ({ ...l, [f.name]: f }),
    {},
  );
  return (l) => {
    let f = _e(e._errorFormat),
      g = Ec(n, i),
      h = bc(l, o, g),
      v = r({ dataPath: g, callsite: f })(h),
      S = xc(e, t);
    return new Proxy(v, {
      get(A, R) {
        if (!S.includes(R)) return A[R];
        let M = [a[R].type, r, R],
          B = [g, h];
        return Fn(e, ...M, ...B);
      },
      ...Ur([...S, ...Object.getOwnPropertyNames(v)]),
    });
  };
}
function xc(e, t) {
  return e._runtimeDataModel.models[t].fields
    .filter((r) => r.kind === "object")
    .map((r) => r.name);
}
var Pc = [
    "findUnique",
    "findUniqueOrThrow",
    "findFirst",
    "findFirstOrThrow",
    "create",
    "update",
    "upsert",
    "delete",
  ],
  vc = ["aggregate", "count", "groupBy"];
function Ln(e, t) {
  let r = e._extensions.getAllModelExtensions(t) ?? {},
    n = [
      Tc(e, t),
      Ac(e, t),
      qt(r),
      ee("name", () => t),
      ee("$name", () => t),
      ee("$parent", () => e._appliedParent),
    ];
  return pe({}, n);
}
function Tc(e, t) {
  let r = we(t),
    n = Object.keys(Rt).concat("count");
  return {
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = i,
        s = (a) => (l) => {
          let f = _e(e._errorFormat);
          return e._createPrismaPromise(
            (g) => {
              let h = {
                args: l,
                dataPath: [],
                action: o,
                model: t,
                clientMethod: `${r}.${i}`,
                jsModelName: r,
                transaction: g,
                callsite: f,
              };
              return e._request({ ...h, ...a });
            },
            { action: o, args: l, model: t },
          );
        };
      return Pc.includes(o) ? Fn(e, t, s) : Cc(i) ? ns(e, i, s) : s({});
    },
  };
}
function Cc(e) {
  return vc.includes(e);
}
function Ac(e, t) {
  return Ue(
    ee("fields", () => {
      let r = e._runtimeDataModel.models[t];
      return is(t, r);
    }),
  );
}
d();
u();
c();
p();
m();
function as(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
var Bn = Symbol();
function $t(e) {
  let t = [
      Rc(e),
      Sc(e),
      ee(Bn, () => e),
      ee("$parent", () => e._appliedParent),
    ],
    r = e._extensions.getAllClientExtensions();
  return r && t.push(qt(r)), pe(e, t);
}
function Rc(e) {
  let t = Object.getPrototypeOf(e._originalClient),
    r = [...new Set(Object.getOwnPropertyNames(t))];
  return {
    getKeys() {
      return r;
    },
    getPropertyValue(n) {
      return e[n];
    },
  };
}
function Sc(e) {
  let t = Object.keys(e._runtimeDataModel.models),
    r = t.map(we),
    n = [...new Set(t.concat(r))];
  return Ue({
    getKeys() {
      return n;
    },
    getPropertyValue(i) {
      let o = as(i);
      if (e._runtimeDataModel.models[o] !== void 0) return Ln(e, o);
      if (e._runtimeDataModel.models[i] !== void 0) return Ln(e, i);
    },
    getPropertyDescriptor(i) {
      if (!r.includes(i)) return { enumerable: !1 };
    },
  });
}
function ls(e) {
  return e[Bn] ? e[Bn] : e;
}
function us(e) {
  if (typeof e == "function") return e(this);
  if (e.client?.__AccelerateEngine) {
    let r = e.client.__AccelerateEngine;
    this._originalClient._engine = new r(
      this._originalClient._accelerateEngineConfig,
    );
  }
  let t = Object.create(this._originalClient, {
    _extensions: { value: this._extensions.append(e) },
    _appliedParent: { value: this, configurable: !0 },
    $use: { value: void 0 },
    $on: { value: void 0 },
  });
  return $t(t);
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function cs({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
  let o = i.getAllComputedFields(t);
  if (!o) return e;
  let s = [],
    a = [];
  for (let l of Object.values(o)) {
    if (n) {
      if (n[l.name]) continue;
      let f = l.needs.filter((g) => n[g]);
      f.length > 0 && a.push(ct(f));
    } else if (r) {
      if (!r[l.name]) continue;
      let f = l.needs.filter((g) => !r[g]);
      f.length > 0 && a.push(ct(f));
    }
    kc(e, l.needs) && s.push(Ic(l, pe(e, s)));
  }
  return s.length > 0 || a.length > 0 ? pe(e, [...s, ...a]) : e;
}
function kc(e, t) {
  return t.every((r) => fn(e, r));
}
function Ic(e, t) {
  return Ue(ee(e.name, () => e.compute(t)));
}
d();
u();
c();
p();
m();
function Vr({
  visitor: e,
  result: t,
  args: r,
  runtimeDataModel: n,
  modelName: i,
}) {
  if (Array.isArray(t)) {
    for (let s = 0; s < t.length; s++)
      t[s] = Vr({
        result: t[s],
        args: r,
        modelName: i,
        runtimeDataModel: n,
        visitor: e,
      });
    return t;
  }
  let o = e(t, i, r) ?? t;
  return (
    r.include &&
      ps({
        includeOrSelect: r.include,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    r.select &&
      ps({
        includeOrSelect: r.select,
        result: o,
        parentModelName: i,
        runtimeDataModel: n,
        visitor: e,
      }),
    o
  );
}
function ps({
  includeOrSelect: e,
  result: t,
  parentModelName: r,
  runtimeDataModel: n,
  visitor: i,
}) {
  for (let [o, s] of Object.entries(e)) {
    if (!s || t[o] == null || Ee(s)) continue;
    let l = n.models[r].fields.find((g) => g.name === o);
    if (!l || l.kind !== "object" || !l.relationName) continue;
    let f = typeof s == "object" ? s : {};
    t[o] = Vr({
      visitor: i,
      result: t[o],
      args: f,
      modelName: l.type,
      runtimeDataModel: n,
    });
  }
}
function ms({
  result: e,
  modelName: t,
  args: r,
  extensions: n,
  runtimeDataModel: i,
  globalOmit: o,
}) {
  return n.isEmpty() || e == null || typeof e != "object" || !i.models[t]
    ? e
    : Vr({
        result: e,
        args: r ?? {},
        modelName: t,
        runtimeDataModel: i,
        visitor: (a, l, f) => {
          let g = we(l);
          return cs({
            result: a,
            modelName: g,
            select: f.select,
            omit: f.select ? void 0 : { ...o?.[g], ...f.omit },
            extensions: n,
          });
        },
      });
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Oc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"],
  ds = Oc;
function fs(e) {
  if (e instanceof le) return Dc(e);
  if (Fr(e)) return Mc(e);
  if (Array.isArray(e)) {
    let r = [e[0]];
    for (let n = 1; n < e.length; n++) r[n] = jt(e[n]);
    return r;
  }
  let t = {};
  for (let r in e) t[r] = jt(e[r]);
  return t;
}
function Dc(e) {
  return new le(e.strings, e.values);
}
function Mc(e) {
  return new Ut(e.sql, e.values);
}
function jt(e) {
  if (typeof e != "object" || e == null || e instanceof Te || at(e)) return e;
  if (rt(e)) return new ve(e.toFixed());
  if (tt(e)) return new Date(+e);
  if (ArrayBuffer.isView(e)) return e.slice(0);
  if (Array.isArray(e)) {
    let t = e.length,
      r;
    for (r = Array(t); t--; ) r[t] = jt(e[t]);
    return r;
  }
  if (typeof e == "object") {
    let t = {};
    for (let r in e)
      r === "__proto__"
        ? Object.defineProperty(t, r, {
            value: jt(e[r]),
            configurable: !0,
            enumerable: !0,
            writable: !0,
          })
        : (t[r] = jt(e[r]));
    return t;
  }
  xe(e, "Unknown value");
}
function hs(e, t, r, n = 0) {
  return e._createPrismaPromise((i) => {
    let o = t.customDataProxyFetch;
    return (
      "transaction" in t &&
        i !== void 0 &&
        (t.transaction?.kind === "batch" && t.transaction.lock.then(),
        (t.transaction = i)),
      n === r.length
        ? e._executeRequest(t)
        : r[n]({
            model: t.model,
            operation: t.model ? t.action : t.clientMethod,
            args: fs(t.args ?? {}),
            __internalParams: t,
            query: (s, a = t) => {
              let l = a.customDataProxyFetch;
              return (
                (a.customDataProxyFetch = bs(o, l)),
                (a.args = s),
                hs(e, a, r, n + 1)
              );
            },
          })
    );
  });
}
function ys(e, t) {
  let { jsModelName: r, action: n, clientMethod: i } = t,
    o = r ? n : i;
  if (e._extensions.isEmpty()) return e._executeRequest(t);
  let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
  return hs(e, t, s);
}
function ws(e) {
  return (t) => {
    let r = { requests: t },
      n = t[0].extensions.getAllBatchQueryCallbacks();
    return n.length ? Es(r, n, 0, e) : e(r);
  };
}
function Es(e, t, r, n) {
  if (r === t.length) return n(e);
  let i = e.customDataProxyFetch,
    o = e.requests[0].transaction;
  return t[r]({
    args: {
      queries: e.requests.map((s) => ({
        model: s.modelName,
        operation: s.action,
        args: s.args,
      })),
      transaction: o
        ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 }
        : void 0,
    },
    __internalParams: e,
    query(s, a = e) {
      let l = a.customDataProxyFetch;
      return (a.customDataProxyFetch = bs(i, l)), Es(a, t, r + 1, n);
    },
  });
}
var gs = (e) => e;
function bs(e = gs, t = gs) {
  return (r) => e(t(r));
}
d();
u();
c();
p();
m();
var xs = Y("prisma:client"),
  Ps = { Vercel: "vercel", "Netlify CI": "netlify" };
function vs({ postinstall: e, ciName: t, clientVersion: r }) {
  if (
    (xs("checkPlatformCaching:postinstall", e),
    xs("checkPlatformCaching:ciName", t),
    e === !0 && t && t in Ps)
  ) {
    let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${Ps[t]}-build`;
    throw (console.error(n), new Q(n, r));
  }
}
d();
u();
c();
p();
m();
function Ts(e, t) {
  return e
    ? e.datasources
      ? e.datasources
      : e.datasourceUrl
        ? { [t[0]]: { url: e.datasourceUrl } }
        : {}
    : {};
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var _c = () => globalThis.process?.release?.name === "node",
  Nc = () => !!globalThis.Bun || !!globalThis.process?.versions?.bun,
  Fc = () => !!globalThis.Deno,
  Lc = () => typeof globalThis.Netlify == "object",
  Bc = () => typeof globalThis.EdgeRuntime == "object",
  Uc = () => globalThis.navigator?.userAgent === "Cloudflare-Workers";
function qc() {
  return (
    [
      [Lc, "netlify"],
      [Bc, "edge-light"],
      [Uc, "workerd"],
      [Fc, "deno"],
      [Nc, "bun"],
      [_c, "node"],
    ]
      .flatMap((r) => (r[0]() ? [r[1]] : []))
      .at(0) ?? ""
  );
}
var $c = {
  node: "Node.js",
  workerd: "Cloudflare Workers",
  deno: "Deno and Deno Deploy",
  netlify: "Netlify Edge Functions",
  "edge-light":
    "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)",
};
function Un() {
  let e = qc();
  return {
    id: e,
    prettyName: $c[e] || e,
    isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e),
  };
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function mt({
  inlineDatasources: e,
  overrideDatasources: t,
  env: r,
  clientVersion: n,
}) {
  let i,
    o = Object.keys(e)[0],
    s = e[o]?.url,
    a = t[o]?.url;
  if (
    (o === void 0
      ? (i = void 0)
      : a
        ? (i = a)
        : s?.value
          ? (i = s.value)
          : s?.fromEnvVar && (i = r[s.fromEnvVar]),
    s?.fromEnvVar !== void 0 && i === void 0)
  )
    throw Un().id === "workerd"
      ? new Q(
          `error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`,
          n,
        )
      : new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
  if (i === void 0)
    throw new Q(
      "error: Missing URL environment variable, value, or override.",
      n,
    );
  return i;
}
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var Gr = class extends Error {
  clientVersion;
  cause;
  constructor(t, r) {
    super(t), (this.clientVersion = r.clientVersion), (this.cause = r.cause);
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
var ne = class extends Gr {
  isRetryable;
  constructor(t, r) {
    super(t, r), (this.isRetryable = r.isRetryable ?? !0);
  }
};
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
function L(e, t) {
  return { ...e, isRetryable: t };
}
var dt = class extends ne {
  name = "ForcedRetryError";
  code = "P5001";
  constructor(t) {
    super("This request must be retried", L(t, !0));
  }
};
N(dt, "ForcedRetryError");
d();
u();
c();
p();
m();
var qe = class extends ne {
  name = "InvalidDatasourceError";
  code = "P6001";
  constructor(t, r) {
    super(t, L(r, !1));
  }
};
N(qe, "InvalidDatasourceError");
d();
u();
c();
p();
m();
var $e = class extends ne {
  name = "NotImplementedYetError";
  code = "P5004";
  constructor(t, r) {
    super(t, L(r, !1));
  }
};
N($e, "NotImplementedYetError");
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var V = class extends ne {
  response;
  constructor(t, r) {
    super(t, r), (this.response = r.response);
    let n = this.response.headers.get("prisma-request-id");
    if (n) {
      let i = `(The request id was: ${n})`;
      this.message = this.message + " " + i;
    }
  }
};
var je = class extends V {
  name = "SchemaMissingError";
  code = "P5005";
  constructor(t) {
    super("Schema needs to be uploaded", L(t, !0));
  }
};
N(je, "SchemaMissingError");
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var qn = "This request could not be understood by the server",
  Vt = class extends V {
    name = "BadRequestError";
    code = "P5000";
    constructor(t, r, n) {
      super(r || qn, L(t, !1)), n && (this.code = n);
    }
  };
N(Vt, "BadRequestError");
d();
u();
c();
p();
m();
var Gt = class extends V {
  name = "HealthcheckTimeoutError";
  code = "P5013";
  logs;
  constructor(t, r) {
    super("Engine not started: healthcheck timeout", L(t, !0)), (this.logs = r);
  }
};
N(Gt, "HealthcheckTimeoutError");
d();
u();
c();
p();
m();
var Qt = class extends V {
  name = "EngineStartupError";
  code = "P5014";
  logs;
  constructor(t, r, n) {
    super(r, L(t, !0)), (this.logs = n);
  }
};
N(Qt, "EngineStartupError");
d();
u();
c();
p();
m();
var Jt = class extends V {
  name = "EngineVersionNotSupportedError";
  code = "P5012";
  constructor(t) {
    super("Engine version is not supported", L(t, !1));
  }
};
N(Jt, "EngineVersionNotSupportedError");
d();
u();
c();
p();
m();
var $n = "Request timed out",
  Wt = class extends V {
    name = "GatewayTimeoutError";
    code = "P5009";
    constructor(t, r = $n) {
      super(r, L(t, !1));
    }
  };
N(Wt, "GatewayTimeoutError");
d();
u();
c();
p();
m();
var jc = "Interactive transaction error",
  Ht = class extends V {
    name = "InteractiveTransactionError";
    code = "P5015";
    constructor(t, r = jc) {
      super(r, L(t, !1));
    }
  };
N(Ht, "InteractiveTransactionError");
d();
u();
c();
p();
m();
var Vc = "Request parameters are invalid",
  Kt = class extends V {
    name = "InvalidRequestError";
    code = "P5011";
    constructor(t, r = Vc) {
      super(r, L(t, !1));
    }
  };
N(Kt, "InvalidRequestError");
d();
u();
c();
p();
m();
var jn = "Requested resource does not exist",
  zt = class extends V {
    name = "NotFoundError";
    code = "P5003";
    constructor(t, r = jn) {
      super(r, L(t, !1));
    }
  };
N(zt, "NotFoundError");
d();
u();
c();
p();
m();
var Vn = "Unknown server error",
  ft = class extends V {
    name = "ServerError";
    code = "P5006";
    logs;
    constructor(t, r, n) {
      super(r || Vn, L(t, !0)), (this.logs = n);
    }
  };
N(ft, "ServerError");
d();
u();
c();
p();
m();
var Gn = "Unauthorized, check your connection string",
  Yt = class extends V {
    name = "UnauthorizedError";
    code = "P5007";
    constructor(t, r = Gn) {
      super(r, L(t, !1));
    }
  };
N(Yt, "UnauthorizedError");
d();
u();
c();
p();
m();
var Qn = "Usage exceeded, retry again later",
  Zt = class extends V {
    name = "UsageExceededError";
    code = "P5008";
    constructor(t, r = Qn) {
      super(r, L(t, !0));
    }
  };
N(Zt, "UsageExceededError");
async function Gc(e) {
  let t;
  try {
    t = await e.text();
  } catch {
    return { type: "EmptyError" };
  }
  try {
    let r = JSON.parse(t);
    if (typeof r == "string")
      switch (r) {
        case "InternalDataProxyError":
          return { type: "DataProxyError", body: r };
        default:
          return { type: "UnknownTextError", body: r };
      }
    if (typeof r == "object" && r !== null) {
      if ("is_panic" in r && "message" in r && "error_code" in r)
        return { type: "QueryEngineError", body: r };
      if (
        "EngineNotStarted" in r ||
        "InteractiveTransactionMisrouted" in r ||
        "InvalidRequestError" in r
      ) {
        let n = Object.values(r)[0].reason;
        return typeof n == "string" &&
          !["SchemaMissing", "EngineVersionNotSupported"].includes(n)
          ? { type: "UnknownJsonError", body: r }
          : { type: "DataProxyError", body: r };
      }
    }
    return { type: "UnknownJsonError", body: r };
  } catch {
    return t === ""
      ? { type: "EmptyError" }
      : { type: "UnknownTextError", body: t };
  }
}
async function Xt(e, t) {
  if (e.ok) return;
  let r = { clientVersion: t, response: e },
    n = await Gc(e);
  if (n.type === "QueryEngineError")
    throw new oe(n.body.message, { code: n.body.error_code, clientVersion: t });
  if (n.type === "DataProxyError") {
    if (n.body === "InternalDataProxyError")
      throw new ft(r, "Internal Data Proxy error");
    if ("EngineNotStarted" in n.body) {
      if (n.body.EngineNotStarted.reason === "SchemaMissing") return new je(r);
      if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
        throw new Jt(r);
      if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, logs: o } =
          n.body.EngineNotStarted.reason.EngineStartupError;
        throw new Qt(r, i, o);
      }
      if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
        let { msg: i, error_code: o } =
          n.body.EngineNotStarted.reason.KnownEngineStartupError;
        throw new Q(i, t, o);
      }
      if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
        let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
        throw new Gt(r, i);
      }
    }
    if ("InteractiveTransactionMisrouted" in n.body) {
      let i = {
        IDParseError: "Could not parse interactive transaction ID",
        NoQueryEngineFoundError:
          "Could not find Query Engine for the specified host and transaction ID",
        TransactionStartError: "Could not start interactive transaction",
      };
      throw new Ht(r, i[n.body.InteractiveTransactionMisrouted.reason]);
    }
    if ("InvalidRequestError" in n.body)
      throw new Kt(r, n.body.InvalidRequestError.reason);
  }
  if (e.status === 401 || e.status === 403) throw new Yt(r, gt(Gn, n));
  if (e.status === 404) return new zt(r, gt(jn, n));
  if (e.status === 429) throw new Zt(r, gt(Qn, n));
  if (e.status === 504) throw new Wt(r, gt($n, n));
  if (e.status >= 500) throw new ft(r, gt(Vn, n));
  if (e.status >= 400) throw new Vt(r, gt(qn, n));
}
function gt(e, t) {
  return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
}
d();
u();
c();
p();
m();
function Cs(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((i) => setTimeout(() => i(n), n));
}
d();
u();
c();
p();
m();
var Ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function As(e) {
  let t = new TextEncoder().encode(e),
    r = "",
    n = t.byteLength,
    i = n % 3,
    o = n - i,
    s,
    a,
    l,
    f,
    g;
  for (let h = 0; h < o; h = h + 3)
    (g = (t[h] << 16) | (t[h + 1] << 8) | t[h + 2]),
      (s = (g & 16515072) >> 18),
      (a = (g & 258048) >> 12),
      (l = (g & 4032) >> 6),
      (f = g & 63),
      (r += Ce[s] + Ce[a] + Ce[l] + Ce[f]);
  return (
    i == 1
      ? ((g = t[o]),
        (s = (g & 252) >> 2),
        (a = (g & 3) << 4),
        (r += Ce[s] + Ce[a] + "=="))
      : i == 2 &&
        ((g = (t[o] << 8) | t[o + 1]),
        (s = (g & 64512) >> 10),
        (a = (g & 1008) >> 4),
        (l = (g & 15) << 2),
        (r += Ce[s] + Ce[a] + Ce[l] + "=")),
    r
  );
}
d();
u();
c();
p();
m();
function Rs(e) {
  if (
    !!e.generator?.previewFeatures.some((r) =>
      r.toLowerCase().includes("metrics"),
    )
  )
    throw new Q(
      "The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate",
      e.clientVersion,
    );
}
d();
u();
c();
p();
m();
function Qc(e) {
  return e[0] * 1e3 + e[1] / 1e6;
}
function Jn(e) {
  return new Date(Qc(e));
}
d();
u();
c();
p();
m();
var Ss = {
  "@prisma/debug": "workspace:*",
  "@prisma/engines-version":
    "6.6.0-53.f676762280b54cd07c770017ed3711ddde35f37a",
  "@prisma/fetch-engine": "workspace:*",
  "@prisma/get-platform": "workspace:*",
};
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var er = class extends ne {
  name = "RequestError";
  code = "P5010";
  constructor(t, r) {
    super(
      `Cannot fetch data from service:
${t}`,
      L(r, !0),
    );
  }
};
N(er, "RequestError");
async function Ve(e, t, r = (n) => n) {
  let { clientVersion: n, ...i } = t,
    o = r(fetch);
  try {
    return await o(e, i);
  } catch (s) {
    let a = s.message ?? "Unknown error";
    throw new er(a, { clientVersion: n, cause: s });
  }
}
var Wc = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  ks = Y("prisma:client:dataproxyEngine");
async function Hc(e, t) {
  let r = Ss["@prisma/engines-version"],
    n = t.clientVersion ?? "unknown";
  if (y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
    return y.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
  let [i, o] = n?.split("-") ?? [];
  if (o === void 0 && Wc.test(i)) return i;
  if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
    if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
    let [s] = r.split("-") ?? [],
      [a, l, f] = s.split("."),
      g = Kc(`<=${a}.${l}.${f}`),
      h = await Ve(g, { clientVersion: n });
    if (!h.ok)
      throw new Error(
        `Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${(await h.text()) || "<empty body>"}`,
      );
    let v = await h.text();
    ks("length of body fetched from unpkg.com", v.length);
    let S;
    try {
      S = JSON.parse(v);
    } catch (A) {
      throw (
        (console.error("JSON.parse error: body fetched from unpkg.com: ", v), A)
      );
    }
    return S.version;
  }
  throw new $e(
    "Only `major.minor.patch` versions are supported by Accelerate.",
    { clientVersion: n },
  );
}
async function Is(e, t) {
  let r = await Hc(e, t);
  return ks("version", r), r;
}
function Kc(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
var Os = 3,
  Qr = Y("prisma:client:dataproxyEngine"),
  Wn = class {
    apiKey;
    tracingHelper;
    logLevel;
    logQueries;
    engineHash;
    constructor({
      apiKey: t,
      tracingHelper: r,
      logLevel: n,
      logQueries: i,
      engineHash: o,
    }) {
      (this.apiKey = t),
        (this.tracingHelper = r),
        (this.logLevel = n),
        (this.logQueries = i),
        (this.engineHash = o);
    }
    build({ traceparent: t, interactiveTransaction: r } = {}) {
      let n = {
        Authorization: `Bearer ${this.apiKey}`,
        "Prisma-Engine-Hash": this.engineHash,
      };
      this.tracingHelper.isEnabled() &&
        (n.traceparent = t ?? this.tracingHelper.getTraceParent()),
        r && (n["X-transaction-id"] = r.id);
      let i = this.buildCaptureSettings();
      return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
    }
    buildCaptureSettings() {
      let t = [];
      return (
        this.tracingHelper.isEnabled() && t.push("tracing"),
        this.logLevel && t.push(this.logLevel),
        this.logQueries && t.push("query"),
        t
      );
    }
  },
  ht = class {
    name = "DataProxyEngine";
    inlineSchema;
    inlineSchemaHash;
    inlineDatasources;
    config;
    logEmitter;
    env;
    clientVersion;
    engineHash;
    tracingHelper;
    remoteClientVersion;
    host;
    headerBuilder;
    startPromise;
    constructor(t) {
      Rs(t),
        (this.config = t),
        (this.env = { ...t.env, ...(typeof y < "u" ? y.env : {}) }),
        (this.inlineSchema = As(t.inlineSchema)),
        (this.inlineDatasources = t.inlineDatasources),
        (this.inlineSchemaHash = t.inlineSchemaHash),
        (this.clientVersion = t.clientVersion),
        (this.engineHash = t.engineVersion),
        (this.logEmitter = t.logEmitter),
        (this.tracingHelper = t.tracingHelper);
    }
    apiKey() {
      return this.headerBuilder.apiKey;
    }
    version() {
      return this.engineHash;
    }
    async start() {
      this.startPromise !== void 0 && (await this.startPromise),
        (this.startPromise = (async () => {
          let [t, r] = this.extractHostAndApiKey();
          (this.host = t),
            (this.headerBuilder = new Wn({
              apiKey: r,
              tracingHelper: this.tracingHelper,
              logLevel: this.config.logLevel,
              logQueries: this.config.logQueries,
              engineHash: this.engineHash,
            })),
            (this.remoteClientVersion = await Is(t, this.config)),
            Qr("host", this.host);
        })()),
        await this.startPromise;
    }
    async stop() {}
    propagateResponseExtensions(t) {
      t?.logs?.length &&
        t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "trace":
              Qr(r);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(r.level, {
                timestamp: Jn(r.timestamp),
                message: r.attributes.message ?? "",
                target: r.target,
              });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", {
                query: r.attributes.query ?? "",
                timestamp: Jn(r.timestamp),
                duration: r.attributes.duration_ms ?? 0,
                params: r.attributes.params ?? "",
                target: r.target,
              });
              break;
            }
            default:
              r.level;
          }
        }),
        t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
    }
    onBeforeExit() {
      throw new Error(
        '"beforeExit" hook is not applicable to the remote query engine',
      );
    }
    async url(t) {
      return (
        await this.start(),
        `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`
      );
    }
    async uploadSchema() {
      let t = { name: "schemaUpload", internal: !0 };
      return this.tracingHelper.runInChildSpan(t, async () => {
        let r = await Ve(await this.url("schema"), {
          method: "PUT",
          headers: this.headerBuilder.build(),
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        });
        r.ok || Qr("schema response status", r.status);
        let n = await Xt(r, this.clientVersion);
        if (n)
          throw (
            (this.logEmitter.emit("warn", {
              message: `Error while uploading schema: ${n.message}`,
              timestamp: new Date(),
              target: "",
            }),
            n)
          );
        this.logEmitter.emit("info", {
          message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
          timestamp: new Date(),
          target: "",
        });
      });
    }
    request(
      t,
      { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i },
    ) {
      return this.requestInternal({
        body: t,
        traceparent: r,
        interactiveTransaction: n,
        customDataProxyFetch: i,
      });
    }
    async requestBatch(
      t,
      { traceparent: r, transaction: n, customDataProxyFetch: i },
    ) {
      let o = n?.kind === "itx" ? n.options : void 0,
        s = qr(t, n);
      return (
        await this.requestInternal({
          body: s,
          customDataProxyFetch: i,
          interactiveTransaction: o,
          traceparent: r,
        })
      ).map(
        (l) => (
          l.extensions && this.propagateResponseExtensions(l.extensions),
          "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l
        ),
      );
    }
    requestInternal({
      body: t,
      traceparent: r,
      customDataProxyFetch: n,
      interactiveTransaction: i,
    }) {
      return this.withRetry({
        actionGerund: "querying",
        callback: async ({ logHttpCall: o }) => {
          let s = i
            ? `${i.payload.endpoint}/graphql`
            : await this.url("graphql");
          o(s);
          let a = await Ve(
            s,
            {
              method: "POST",
              headers: this.headerBuilder.build({
                traceparent: r,
                interactiveTransaction: i,
              }),
              body: JSON.stringify(t),
              clientVersion: this.clientVersion,
            },
            n,
          );
          a.ok || Qr("graphql response status", a.status),
            await this.handleError(await Xt(a, this.clientVersion));
          let l = await a.json();
          if (
            (l.extensions && this.propagateResponseExtensions(l.extensions),
            "errors" in l)
          )
            throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        },
      });
    }
    async transaction(t, r, n) {
      let i = {
        start: "starting",
        commit: "committing",
        rollback: "rolling back",
      };
      return this.withRetry({
        actionGerund: `${i[t]} transaction`,
        callback: async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({
                max_wait: n.maxWait,
                timeout: n.timeout,
                isolation_level: n.isolationLevel,
              }),
              a = await this.url("transaction/start");
            o(a);
            let l = await Ve(a, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              body: s,
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Xt(l, this.clientVersion));
            let f = await l.json(),
              { extensions: g } = f;
            g && this.propagateResponseExtensions(g);
            let h = f.id,
              v = f["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Ve(s, {
              method: "POST",
              headers: this.headerBuilder.build({ traceparent: r.traceparent }),
              clientVersion: this.clientVersion,
            });
            await this.handleError(await Xt(a, this.clientVersion));
            let l = await a.json(),
              { extensions: f } = l;
            f && this.propagateResponseExtensions(f);
            return;
          }
        },
      });
    }
    extractHostAndApiKey() {
      let t = { clientVersion: this.clientVersion },
        r = Object.keys(this.inlineDatasources)[0],
        n = mt({
          inlineDatasources: this.inlineDatasources,
          overrideDatasources: this.config.overrideDatasources,
          clientVersion: this.clientVersion,
          env: this.env,
        }),
        i;
      try {
        i = new URL(n);
      } catch {
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      }
      let { protocol: o, host: s, searchParams: a } = i;
      if (o !== "prisma:" && o !== pr)
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``,
          t,
        );
      let l = a.get("api_key");
      if (l === null || l.length < 1)
        throw new qe(
          `Error validating datasource \`${r}\`: the URL must contain a valid API key`,
          t,
        );
      return [s, l];
    }
    metrics() {
      throw new $e("Metrics are not yet supported for Accelerate", {
        clientVersion: this.clientVersion,
      });
    }
    async withRetry(t) {
      for (let r = 0; ; r++) {
        let n = (i) => {
          this.logEmitter.emit("info", {
            message: `Calling ${i} (n=${r})`,
            timestamp: new Date(),
            target: "",
          });
        };
        try {
          return await t.callback({ logHttpCall: n });
        } catch (i) {
          if (!(i instanceof ne) || !i.isRetryable) throw i;
          if (r >= Os) throw i instanceof dt ? i.cause : i;
          this.logEmitter.emit("warn", {
            message: `Attempt ${r + 1}/${Os} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`,
            timestamp: new Date(),
            target: "",
          });
          let o = await Cs(r);
          this.logEmitter.emit("warn", {
            message: `Retrying after ${o}ms`,
            timestamp: new Date(),
            target: "",
          });
        }
      }
    }
    async handleError(t) {
      if (t instanceof je)
        throw (
          (await this.uploadSchema(),
          new dt({ clientVersion: this.clientVersion, cause: t }))
        );
      if (t) throw t;
    }
    convertProtocolErrorsToClientError(t) {
      return t.length === 1
        ? $r(t[0], this.config.clientVersion, this.config.activeProvider)
        : new se(JSON.stringify(t), {
            clientVersion: this.config.clientVersion,
          });
    }
    applyPendingMigrations() {
      throw new Error("Method not implemented.");
    }
  };
function Ds({ copyEngine: e = !0 }, t) {
  let r;
  try {
    r = mt({
      inlineDatasources: t.inlineDatasources,
      overrideDatasources: t.overrideDatasources,
      env: { ...t.env, ...y.env },
      clientVersion: t.clientVersion,
    });
  } catch {}
  let n = !!(r?.startsWith("prisma://") || mn(r));
  e &&
    n &&
    mr(
      "recommend--no-engine",
      "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)",
    );
  let i = Ye(t.generator),
    o = n || !e,
    s = !!t.adapter,
    a = i === "library",
    l = i === "binary",
    f = i === "client";
  if ((o && s) || s) {
    let g;
    throw (
      ((g = [
        "Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.",
        "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor.",
      ]),
      new X(
        g.join(`
`),
        { clientVersion: t.clientVersion },
      ))
    );
  }
  return o ? new ht(t) : new ht(t);
}
d();
u();
c();
p();
m();
function Jr({ generator: e }) {
  return e?.previewFeatures ?? [];
}
d();
u();
c();
p();
m();
var Ms = (e) => ({ command: e });
d();
u();
c();
p();
m();
d();
u();
c();
p();
m();
var _s = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
d();
u();
c();
p();
m();
function yt(e) {
  try {
    return Ns(e, "fast");
  } catch {
    return Ns(e, "slow");
  }
}
function Ns(e, t) {
  return JSON.stringify(e.map((r) => Ls(r, t)));
}
function Ls(e, t) {
  if (Array.isArray(e)) return e.map((r) => Ls(r, t));
  if (typeof e == "bigint")
    return { prisma__type: "bigint", prisma__value: e.toString() };
  if (tt(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
  if (ve.isDecimal(e))
    return { prisma__type: "decimal", prisma__value: e.toJSON() };
  if (w.Buffer.isBuffer(e))
    return { prisma__type: "bytes", prisma__value: e.toString("base64") };
  if (zc(e))
    return {
      prisma__type: "bytes",
      prisma__value: w.Buffer.from(e).toString("base64"),
    };
  if (ArrayBuffer.isView(e)) {
    let { buffer: r, byteOffset: n, byteLength: i } = e;
    return {
      prisma__type: "bytes",
      prisma__value: w.Buffer.from(r, n, i).toString("base64"),
    };
  }
  return typeof e == "object" && t === "slow" ? Bs(e) : e;
}
function zc(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
      ? e[Symbol.toStringTag] === "ArrayBuffer" ||
        e[Symbol.toStringTag] === "SharedArrayBuffer"
      : !1;
}
function Bs(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Fs);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Fs(e[r]);
  return t;
}
function Fs(e) {
  return typeof e == "bigint" ? e.toString() : Bs(e);
}
var Yc = /^(\s*alter\s)/i,
  Us = Y("prisma:client");
function Hn(e, t, r, n) {
  if (
    !(e !== "postgresql" && e !== "cockroachdb") &&
    r.length > 0 &&
    Yc.exec(t)
  )
    throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
}
var Kn =
    ({ clientMethod: e, activeProvider: t }) =>
    (r) => {
      let n = "",
        i;
      if (Fr(r))
        (n = r.sql),
          (i = { values: yt(r.values), __prismaRawParameters__: !0 });
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        (n = o), (i = { values: yt(s || []), __prismaRawParameters__: !0 });
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            (n = r.sql),
              (i = { values: yt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            (n = r.text),
              (i = { values: yt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          case "sqlserver": {
            (n = _s(r)),
              (i = { values: yt(r.values), __prismaRawParameters__: !0 });
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return (
        i?.values
          ? Us(`prisma.${e}(${n}, ${i.values})`)
          : Us(`prisma.${e}(${n})`),
        { query: n, parameters: i }
      );
    },
  qs = {
    requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    },
    middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new le(t, r);
    },
  },
  $s = {
    requestArgsToMiddlewareArgs(e) {
      return [e];
    },
    middlewareArgsToRequestArgs(e) {
      return e[0];
    },
  };
d();
u();
c();
p();
m();
function zn(e) {
  return (r, n) => {
    let i,
      o = (s = e) => {
        try {
          return s === void 0 || s?.kind === "itx"
            ? (i ??= js(r(s)))
            : js(r(s));
        } catch (a) {
          return Promise.reject(a);
        }
      };
    return {
      get spec() {
        return n;
      },
      then(s, a) {
        return o().then(s, a);
      },
      catch(s) {
        return o().catch(s);
      },
      finally(s) {
        return o().finally(s);
      },
      requestTransaction(s) {
        let a = o(s);
        return a.requestTransaction ? a.requestTransaction(s) : a;
      },
      [Symbol.toStringTag]: "PrismaPromise",
    };
  };
}
function js(e) {
  return typeof e.then == "function" ? e : Promise.resolve(e);
}
d();
u();
c();
p();
m();
var Zc = pn.split(".")[0],
  Xc = {
    isEnabled() {
      return !1;
    },
    getTraceParent() {
      return "00-10-10-00";
    },
    dispatchEngineSpans() {},
    getActiveContext() {},
    runInChildSpan(e, t) {
      return t();
    },
  },
  Yn = class {
    isEnabled() {
      return this.getGlobalTracingHelper().isEnabled();
    }
    getTraceParent(t) {
      return this.getGlobalTracingHelper().getTraceParent(t);
    }
    dispatchEngineSpans(t) {
      return this.getGlobalTracingHelper().dispatchEngineSpans(t);
    }
    getActiveContext() {
      return this.getGlobalTracingHelper().getActiveContext();
    }
    runInChildSpan(t, r) {
      return this.getGlobalTracingHelper().runInChildSpan(t, r);
    }
    getGlobalTracingHelper() {
      let t = globalThis[`V${Zc}_PRISMA_INSTRUMENTATION`],
        r = globalThis.PRISMA_INSTRUMENTATION;
      return t?.helper ?? r?.helper ?? Xc;
    }
  };
function Vs() {
  return new Yn();
}
d();
u();
c();
p();
m();
function Gs(e, t = () => {}) {
  let r,
    n = new Promise((i) => (r = i));
  return {
    then(i) {
      return --e === 0 && r(t()), i?.(n);
    },
  };
}
d();
u();
c();
p();
m();
function Qs(e) {
  return typeof e == "string"
    ? e
    : e.reduce(
        (t, r) => {
          let n = typeof r == "string" ? r : r.level;
          return n === "query"
            ? t
            : t && (r === "info" || t === "info")
              ? "info"
              : n;
        },
        void 0,
      );
}
d();
u();
c();
p();
m();
var Wr = class {
  _middlewares = [];
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
d();
u();
c();
p();
m();
var Ws = Qe(eo());
d();
u();
c();
p();
m();
function Hr(e) {
  return typeof e.batchRequestIdx == "number";
}
d();
u();
c();
p();
m();
function Js(e) {
  if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
  let t = [];
  return (
    e.modelName && t.push(e.modelName),
    e.query.arguments && t.push(Zn(e.query.arguments)),
    t.push(Zn(e.query.selection)),
    t.join("")
  );
}
function Zn(e) {
  return `(${Object.keys(e)
    .sort()
    .map((r) => {
      let n = e[r];
      return typeof n == "object" && n !== null ? `(${r} ${Zn(n)})` : r;
    })
    .join(" ")})`;
}
d();
u();
c();
p();
m();
var ep = {
  aggregate: !1,
  aggregateRaw: !1,
  createMany: !0,
  createManyAndReturn: !0,
  createOne: !0,
  deleteMany: !0,
  deleteOne: !0,
  executeRaw: !0,
  findFirst: !1,
  findFirstOrThrow: !1,
  findMany: !1,
  findRaw: !1,
  findUnique: !1,
  findUniqueOrThrow: !1,
  groupBy: !1,
  queryRaw: !1,
  runCommandRaw: !0,
  updateMany: !0,
  updateManyAndReturn: !0,
  updateOne: !0,
  upsertOne: !0,
};
function Xn(e) {
  return ep[e];
}
d();
u();
c();
p();
m();
var Kr = class {
  constructor(t) {
    this.options = t;
    this.batches = {};
  }
  batches;
  tickActive = !1;
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
          ((this.batches[r] = []),
          this.tickActive ||
            ((this.tickActive = !0),
            y.nextTick(() => {
              this.dispatchBatches(), (this.tickActive = !1);
            }))),
        new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options
              .singleLoader(r[0].request)
              .then((n) => {
                n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
              })
              .catch((n) => {
                r[0].reject(n);
              })
          : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)),
            this.options
              .batchLoader(r.map((n) => n.request))
              .then((n) => {
                if (n instanceof Error)
                  for (let i = 0; i < r.length; i++) r[i].reject(n);
                else
                  for (let i = 0; i < r.length; i++) {
                    let o = n[i];
                    o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
                  }
              })
              .catch((n) => {
                for (let i = 0; i < r.length; i++) r[i].reject(n);
              }));
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
d();
u();
c();
p();
m();
function Ge(e, t) {
  if (t === null) return t;
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes": {
      let {
        buffer: r,
        byteOffset: n,
        byteLength: i,
      } = w.Buffer.from(t, "base64");
      return new Uint8Array(r, n, i);
    }
    case "decimal":
      return new ve(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "bigint-array":
      return t.map((r) => Ge("bigint", r));
    case "bytes-array":
      return t.map((r) => Ge("bytes", r));
    case "decimal-array":
      return t.map((r) => Ge("decimal", r));
    case "datetime-array":
      return t.map((r) => Ge("datetime", r));
    case "date-array":
      return t.map((r) => Ge("date", r));
    case "time-array":
      return t.map((r) => Ge("time", r));
    default:
      return t;
  }
}
function ei(e) {
  let t = [],
    r = tp(e);
  for (let n = 0; n < e.rows.length; n++) {
    let i = e.rows[n],
      o = { ...r };
    for (let s = 0; s < i.length; s++) o[e.columns[s]] = Ge(e.types[s], i[s]);
    t.push(o);
  }
  return t;
}
function tp(e) {
  let t = {};
  for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
  return t;
}
var rp = Y("prisma:client:request_handler"),
  zr = class {
    client;
    dataloader;
    logEmitter;
    constructor(t, r) {
      (this.logEmitter = r),
        (this.client = t),
        (this.dataloader = new Kr({
          batchLoader: ws(async ({ requests: n, customDataProxyFetch: i }) => {
            let { transaction: o, otelParentCtx: s } = n[0],
              a = n.map((h) => h.protocolQuery),
              l = this.client._tracingHelper.getTraceParent(s),
              f = n.some((h) => Xn(h.protocolQuery.action));
            return (
              await this.client._engine.requestBatch(a, {
                traceparent: l,
                transaction: np(o),
                containsWrite: f,
                customDataProxyFetch: i,
              })
            ).map((h, v) => {
              if (h instanceof Error) return h;
              try {
                return this.mapQueryEngineResult(n[v], h);
              } catch (S) {
                return S;
              }
            });
          }),
          singleLoader: async (n) => {
            let i = n.transaction?.kind === "itx" ? Hs(n.transaction) : void 0,
              o = await this.client._engine.request(n.protocolQuery, {
                traceparent: this.client._tracingHelper.getTraceParent(),
                interactiveTransaction: i,
                isWrite: Xn(n.protocolQuery.action),
                customDataProxyFetch: n.customDataProxyFetch,
              });
            return this.mapQueryEngineResult(n, o);
          },
          batchBy: (n) =>
            n.transaction?.id
              ? `transaction-${n.transaction.id}`
              : Js(n.protocolQuery),
          batchOrder(n, i) {
            return n.transaction?.kind === "batch" &&
              i.transaction?.kind === "batch"
              ? n.transaction.index - i.transaction.index
              : 0;
          },
        }));
    }
    async request(t) {
      try {
        return await this.dataloader.request(t);
      } catch (r) {
        let {
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
        } = t;
        this.handleAndLogRequestError({
          error: r,
          clientMethod: n,
          callsite: i,
          transaction: o,
          args: s,
          modelName: a,
          globalOmit: t.globalOmit,
        });
      }
    }
    mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
      let i = n?.data,
        o = this.unpack(i, t, r);
      return y.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
    }
    handleAndLogRequestError(t) {
      try {
        this.handleRequestError(t);
      } catch (r) {
        throw (
          (this.logEmitter &&
            this.logEmitter.emit("error", {
              message: r.message,
              target: t.clientMethod,
              timestamp: new Date(),
            }),
          r)
        );
      }
    }
    handleRequestError({
      error: t,
      clientMethod: r,
      callsite: n,
      transaction: i,
      args: o,
      modelName: s,
      globalOmit: a,
    }) {
      if ((rp(t), ip(t, i))) throw t;
      if (t instanceof oe && op(t)) {
        let f = Ks(t.meta);
        Dr({
          args: o,
          errors: [f],
          callsite: n,
          errorFormat: this.client._errorFormat,
          originalMethod: r,
          clientVersion: this.client._clientVersion,
          globalOmit: a,
        });
      }
      let l = t.message;
      if (
        (n &&
          (l = vr({
            callsite: n,
            originalMethod: r,
            isPanic: t.isPanic,
            showColors: this.client._errorFormat === "pretty",
            message: l,
          })),
        (l = this.sanitizeMessage(l)),
        t.code)
      ) {
        let f = s ? { modelName: s, ...t.meta } : t.meta;
        throw new oe(l, {
          code: t.code,
          clientVersion: this.client._clientVersion,
          meta: f,
          batchRequestIdx: t.batchRequestIdx,
        });
      } else {
        if (t.isPanic) throw new Re(l, this.client._clientVersion);
        if (t instanceof se)
          throw new se(l, {
            clientVersion: this.client._clientVersion,
            batchRequestIdx: t.batchRequestIdx,
          });
        if (t instanceof Q) throw new Q(l, this.client._clientVersion);
        if (t instanceof Re) throw new Re(l, this.client._clientVersion);
      }
      throw ((t.clientVersion = this.client._clientVersion), t);
    }
    sanitizeMessage(t) {
      return this.client._errorFormat && this.client._errorFormat !== "pretty"
        ? (0, Ws.default)(t)
        : t;
    }
    unpack(t, r, n) {
      if (!t || (t.data && (t = t.data), !t)) return t;
      let i = Object.keys(t)[0],
        o = Object.values(t)[0],
        s = r.filter((f) => f !== "select" && f !== "include"),
        a = Nn(o, s),
        l = i === "queryRaw" ? ei(a) : Ct(a);
      return n ? n(l) : l;
    }
    get [Symbol.toStringTag]() {
      return "RequestHandler";
    }
  };
function np(e) {
  if (e) {
    if (e.kind === "batch")
      return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
    if (e.kind === "itx") return { kind: "itx", options: Hs(e) };
    xe(e, "Unknown transaction kind");
  }
}
function Hs(e) {
  return { id: e.id, payload: e.payload };
}
function ip(e, t) {
  return Hr(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
}
function op(e) {
  return e.code === "P2009" || e.code === "P2012";
}
function Ks(e) {
  if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Ks) };
  if (Array.isArray(e.selectionPath)) {
    let [, ...t] = e.selectionPath;
    return { ...e, selectionPath: t };
  }
  return e;
}
d();
u();
c();
p();
m();
var zs = "6.6.0";
var Ys = zs;
d();
u();
c();
p();
m();
var ra = Qe(Pn());
d();
u();
c();
p();
m();
var U = class extends Error {
  constructor(t) {
    super(
      t +
        `
Read more at https://pris.ly/d/client-constructor`,
    ),
      (this.name = "PrismaClientConstructorValidationError");
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
N(U, "PrismaClientConstructorValidationError");
var Zs = [
    "datasources",
    "datasourceUrl",
    "errorFormat",
    "adapter",
    "log",
    "transactionOptions",
    "omit",
    "__internal",
  ],
  Xs = ["pretty", "colorless", "minimal"],
  ea = ["info", "query", "warn", "error"],
  ap = {
    datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new U(
            `Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`,
          );
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = wt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(
              `Unknown datasource ${r} provided to PrismaClient constructor.${i}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    },
    adapter: (e, t) => {
      if (!e && Ye(t.generator) === "client")
        throw new U(
          'Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.',
        );
      if (e === null) return;
      if (e === void 0)
        throw new U(
          '"adapter" property must not be undefined, use null to conditionally disable driver adapters.',
        );
      if (!Jr(t).includes("driverAdapters"))
        throw new U(
          '"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.',
        );
      if (Ye(t.generator) === "binary")
        throw new U(
          'Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.',
        );
    },
    datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    },
    errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new U(
            `Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`,
          );
        if (!Xs.includes(e)) {
          let t = wt(e, Xs);
          throw new U(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e))
        throw new U(
          `Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`,
        );
      function t(r) {
        if (typeof r == "string" && !ea.includes(r)) {
          let n = wt(r, ea);
          throw new U(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (i) => {
            let o = ["stdout", "event"];
            if (!o.includes(i)) {
              let s = wt(i, o);
              throw new U(
                `Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i]) n[i](o);
            else
              throw new U(
                `Invalid property ${i} for "log" provided to PrismaClient constructor`,
              );
      }
    },
    transactionOptions: (e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0)
        throw new U(
          `Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`,
        );
      let r = e.timeout;
      if (r != null && r <= 0)
        throw new U(
          `Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`,
        );
    },
    omit: (e, t) => {
      if (typeof e != "object")
        throw new U('"omit" option is expected to be an object.');
      if (e === null) throw new U('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = up(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((f) => f.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" &&
            r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new U(cp(e, r));
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object")
        throw new U(
          `Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`,
        );
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = wt(r, t);
          throw new U(
            `Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
    },
  };
function na(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Zs.includes(r)) {
      let i = wt(r, Zs);
      throw new U(
        `Unknown property ${r} provided to PrismaClient constructor.${i}`,
      );
    }
    ap[r](n, t);
  }
  if (e.datasourceUrl && e.datasources)
    throw new U(
      'Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them',
    );
}
function wt(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = lp(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
function lp(e, t) {
  if (t.length === 0) return null;
  let r = t.map((i) => ({ value: i, distance: (0, ra.default)(e, i) }));
  r.sort((i, o) => (i.distance < o.distance ? -1 : 1));
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
function up(e, t) {
  return ta(t.models, e) ?? ta(t.types, e);
}
function ta(e, t) {
  let r = Object.keys(e).find((n) => De(n) === t);
  if (r) return e[r];
}
function cp(e, t) {
  let r = lt(e);
  for (let o of t)
    switch (o.kind) {
      case "UnknownModel":
        r.arguments.getField(o.modelKey)?.markAsError(),
          r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
        break;
      case "UnknownField":
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`,
          );
        break;
      case "RelationInOmit":
        r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(
            () =>
              'Relations are already excluded by default and can not be specified in "omit".',
          );
        break;
      case "InvalidFieldValue":
        r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(),
          r.addErrorMessage(() => "Omit field option value must be a boolean.");
        break;
    }
  let { message: n, args: i } = Or(r, "colorless");
  return `Error validating "omit" option:

${i}

${n}`;
}
d();
u();
c();
p();
m();
function ia(e) {
  return e.length === 0
    ? Promise.resolve([])
    : new Promise((t, r) => {
        let n = new Array(e.length),
          i = null,
          o = !1,
          s = 0,
          a = () => {
            o || (s++, s === e.length && ((o = !0), i ? r(i) : t(n)));
          },
          l = (f) => {
            o || ((o = !0), r(f));
          };
        for (let f = 0; f < e.length; f++)
          e[f].then(
            (g) => {
              (n[f] = g), a();
            },
            (g) => {
              if (!Hr(g)) {
                l(g);
                return;
              }
              g.batchRequestIdx === f ? l(g) : (i || (i = g), a());
            },
          );
      });
}
var Ne = Y("prisma:client");
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
var pp = {
    requestArgsToMiddlewareArgs: (e) => e,
    middlewareArgsToRequestArgs: (e) => e,
  },
  mp = Symbol.for("prisma.client.transaction.id"),
  dp = {
    id: 0,
    nextId() {
      return ++this.id;
    },
  };
function fp(e) {
  class t {
    _originalClient = this;
    _runtimeDataModel;
    _requestHandler;
    _connectionPromise;
    _disconnectionPromise;
    _engineConfig;
    _accelerateEngineConfig;
    _clientVersion;
    _errorFormat;
    _tracingHelper;
    _middlewares = new Wr();
    _previewFeatures;
    _activeProvider;
    _globalOmit;
    _extensions;
    _engine;
    _appliedParent;
    _createPrismaPromise = zn();
    constructor(n) {
      (e = n?.__internal?.configOverride?.(e) ?? e), vs(e), n && na(n, e);
      let i = new Lr().on("error", () => {});
      (this._extensions = ut.empty()),
        (this._previewFeatures = Jr(e)),
        (this._clientVersion = e.clientVersion ?? Ys),
        (this._activeProvider = e.activeProvider),
        (this._globalOmit = n?.omit),
        (this._tracingHelper = Vs());
      let o = e.relativeEnvPaths && {
          rootEnvPath:
            e.relativeEnvPaths.rootEnvPath &&
            cr.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath:
            e.relativeEnvPaths.schemaEnvPath &&
            cr.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        s;
      if (n?.adapter) {
        s = n.adapter;
        let l =
          e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
        if (s.provider !== l)
          throw new Q(
            `The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`,
            this._clientVersion,
          );
        if (n.datasources || n.datasourceUrl !== void 0)
          throw new Q(
            "Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.",
            this._clientVersion,
          );
      }
      let a = e.injectableEdgeEnv?.();
      try {
        let l = n ?? {},
          f = l.__internal ?? {},
          g = f.debug === !0;
        g && Y.enable("prisma:client");
        let h = cr.resolve(e.dirname, e.relativePath);
        Ui.existsSync(h) || (h = e.dirname),
          Ne("dirname", e.dirname),
          Ne("relativePath", e.relativePath),
          Ne("cwd", h);
        let v = f.engine || {};
        if (
          (l.errorFormat
            ? (this._errorFormat = l.errorFormat)
            : y.env.NODE_ENV === "production"
              ? (this._errorFormat = "minimal")
              : y.env.NO_COLOR
                ? (this._errorFormat = "colorless")
                : (this._errorFormat = "colorless"),
          (this._runtimeDataModel = e.runtimeDataModel),
          (this._engineConfig = {
            cwd: h,
            dirname: e.dirname,
            enableDebugLogs: g,
            allowTriggerPanic: v.allowTriggerPanic,
            prismaPath: v.binaryPath ?? void 0,
            engineEndpoint: v.endpoint,
            generator: e.generator,
            showColors: this._errorFormat === "pretty",
            logLevel: l.log && Qs(l.log),
            logQueries:
              l.log &&
              !!(typeof l.log == "string"
                ? l.log === "query"
                : l.log.find((S) =>
                    typeof S == "string" ? S === "query" : S.level === "query",
                  )),
            env: a?.parsed ?? {},
            flags: [],
            engineWasm: e.engineWasm,
            compilerWasm: e.compilerWasm,
            clientVersion: e.clientVersion,
            engineVersion: e.engineVersion,
            previewFeatures: this._previewFeatures,
            activeProvider: e.activeProvider,
            inlineSchema: e.inlineSchema,
            overrideDatasources: Ts(l, e.datasourceNames),
            inlineDatasources: e.inlineDatasources,
            inlineSchemaHash: e.inlineSchemaHash,
            tracingHelper: this._tracingHelper,
            transactionOptions: {
              maxWait: l.transactionOptions?.maxWait ?? 2e3,
              timeout: l.transactionOptions?.timeout ?? 5e3,
              isolationLevel: l.transactionOptions?.isolationLevel,
            },
            logEmitter: i,
            isBundled: e.isBundled,
            adapter: s,
          }),
          (this._accelerateEngineConfig = {
            ...this._engineConfig,
            accelerateUtils: {
              resolveDatasourceUrl: mt,
              getBatchRequestPayload: qr,
              prismaGraphQLToJSError: $r,
              PrismaClientUnknownRequestError: se,
              PrismaClientInitializationError: Q,
              PrismaClientKnownRequestError: oe,
              debug: Y("prisma:client:accelerateEngine"),
              engineVersion: sa.version,
              clientVersion: e.clientVersion,
            },
          }),
          Ne("clientVersion", e.clientVersion),
          (this._engine = Ds(e, this._engineConfig)),
          (this._requestHandler = new zr(this, i)),
          l.log)
        )
          for (let S of l.log) {
            let A =
              typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
            A &&
              this.$on(A, (R) => {
                vt.log(`${vt.tags[A] ?? ""}`, R.message || R.query);
              });
          }
      } catch (l) {
        throw ((l.clientVersion = this._clientVersion), l);
      }
      return (this._appliedParent = $t(this));
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    $use(n) {
      this._middlewares.use(n);
    }
    $on(n, i) {
      return (
        n === "beforeExit"
          ? this._engine.onBeforeExit(i)
          : n && this._engineConfig.logEmitter.on(n, i),
        this
      );
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      }
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw ((n.clientVersion = this._clientVersion), n);
      } finally {
        Li();
      }
    }
    $executeRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "executeRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: Kn({ clientMethod: i, activeProvider: a }),
        callsite: _e(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $executeRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          let [s, a] = oa(n, i);
          return (
            Hn(
              this._activeProvider,
              s.text,
              s.values,
              Array.isArray(n)
                ? "prisma.$executeRaw`<SQL>`"
                : "prisma.$executeRaw(sql`<SQL>`)",
            ),
            this.$executeRawInternal(o, "$executeRaw", s, a)
          );
        }
        throw new X(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $executeRawUnsafe(n, ...i) {
      return this._createPrismaPromise(
        (o) => (
          Hn(
            this._activeProvider,
            n,
            i,
            "prisma.$executeRawUnsafe(<SQL>, [...values])",
          ),
          this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])
        ),
      );
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb")
        throw new X(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
          { clientVersion: this._clientVersion },
        );
      return this._createPrismaPromise((i) =>
        this._request({
          args: n,
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          argsMapper: Ms,
          callsite: _e(this._errorFormat),
          transaction: i,
        }),
      );
    }
    async $queryRawInternal(n, i, o, s) {
      let a = this._activeProvider;
      return this._request({
        action: "queryRaw",
        args: o,
        transaction: n,
        clientMethod: i,
        argsMapper: Kn({ clientMethod: i, activeProvider: a }),
        callsite: _e(this._errorFormat),
        dataPath: [],
        middlewareArgsMapper: s,
      });
    }
    $queryRaw(n, ...i) {
      return this._createPrismaPromise((o) => {
        if (n.raw !== void 0 || n.sql !== void 0)
          return this.$queryRawInternal(o, "$queryRaw", ...oa(n, i));
        throw new X(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
          { clientVersion: this._clientVersion },
        );
      });
    }
    $queryRawTyped(n) {
      return this._createPrismaPromise((i) => {
        if (!this._hasPreviewFlag("typedSql"))
          throw new X(
            "`typedSql` preview feature must be enabled in order to access $queryRawTyped API",
            { clientVersion: this._clientVersion },
          );
        return this.$queryRawInternal(i, "$queryRawTyped", n);
      });
    }
    $queryRawUnsafe(n, ...i) {
      return this._createPrismaPromise((o) =>
        this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]),
      );
    }
    _transactionWithArray({ promises: n, options: i }) {
      let o = dp.nextId(),
        s = Gs(n.length),
        a = n.map((l, f) => {
          if (l?.[Symbol.toStringTag] !== "PrismaPromise")
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          let g =
              i?.isolationLevel ??
              this._engineConfig.transactionOptions.isolationLevel,
            h = { kind: "batch", id: o, index: f, isolationLevel: g, lock: s };
          return l.requestTransaction?.(h) ?? l;
        });
      return ia(a);
    }
    async _transactionWithCallback({ callback: n, options: i }) {
      let o = { traceparent: this._tracingHelper.getTraceParent() },
        s = {
          maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait,
          timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout,
          isolationLevel:
            i?.isolationLevel ??
            this._engineConfig.transactionOptions.isolationLevel,
        },
        a = await this._engine.transaction("start", o, s),
        l;
      try {
        let f = { kind: "itx", ...a };
        (l = await n(this._createItxClient(f))),
          await this._engine.transaction("commit", o, a);
      } catch (f) {
        throw (
          (await this._engine.transaction("rollback", o, a).catch(() => {}), f)
        );
      }
      return l;
    }
    _createItxClient(n) {
      return pe(
        $t(
          pe(ls(this), [
            ee("_appliedParent", () => this._appliedParent._createItxClient(n)),
            ee("_createPrismaPromise", () => zn(n)),
            ee(mp, () => n.id),
          ]),
        ),
        [ct(ds)],
      );
    }
    $transaction(n, i) {
      let o;
      typeof n == "function"
        ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1"
          ? (o = () => {
              throw new Error(
                "Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.",
              );
            })
          : (o = () =>
              this._transactionWithCallback({ callback: n, options: i }))
        : (o = () => this._transactionWithArray({ promises: n, options: i }));
      let s = { name: "transaction", attributes: { method: "$transaction" } };
      return this._tracingHelper.runInChildSpan(s, o);
    }
    _request(n) {
      n.otelParentCtx = this._tracingHelper.getActiveContext();
      let i = n.middlewareArgsMapper ?? pp,
        o = {
          args: i.requestArgsToMiddlewareArgs(n.args),
          dataPath: n.dataPath,
          runInTransaction: !!n.transaction,
          action: n.action,
          model: n.model,
        },
        s = {
          middleware: {
            name: "middleware",
            middleware: !0,
            attributes: { method: "$use" },
            active: !1,
          },
          operation: {
            name: "operation",
            attributes: {
              method: o.action,
              model: o.model,
              name: o.model ? `${o.model}.${o.action}` : o.action,
            },
          },
        },
        a = -1,
        l = async (f) => {
          let g = this._middlewares.get(++a);
          if (g)
            return this._tracingHelper.runInChildSpan(s.middleware, (D) =>
              g(f, (M) => (D?.end(), l(M))),
            );
          let { runInTransaction: h, args: v, ...S } = f,
            A = { ...n, ...S };
          v && (A.args = i.middlewareArgsToRequestArgs(v)),
            n.transaction !== void 0 && h === !1 && delete A.transaction;
          let R = await ys(this, A);
          return A.model
            ? ms({
                result: R,
                modelName: A.model,
                args: A.args,
                extensions: this._extensions,
                runtimeDataModel: this._runtimeDataModel,
                globalOmit: this._globalOmit,
              })
            : R;
        };
      return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
    }
    async _executeRequest({
      args: n,
      clientMethod: i,
      dataPath: o,
      callsite: s,
      action: a,
      model: l,
      argsMapper: f,
      transaction: g,
      unpacker: h,
      otelParentCtx: v,
      customDataProxyFetch: S,
    }) {
      try {
        n = f ? f(n) : n;
        let A = { name: "serialize" },
          R = this._tracingHelper.runInChildSpan(A, () =>
            In({
              modelName: l,
              runtimeDataModel: this._runtimeDataModel,
              action: a,
              args: n,
              clientMethod: i,
              callsite: s,
              extensions: this._extensions,
              errorFormat: this._errorFormat,
              clientVersion: this._clientVersion,
              previewFeatures: this._previewFeatures,
              globalOmit: this._globalOmit,
            }),
          );
        return (
          Y.enabled("prisma:client") &&
            (Ne("Prisma Client call:"),
            Ne(`prisma.${i}(${Zo(n)})`),
            Ne("Generated request:"),
            Ne(
              JSON.stringify(R, null, 2) +
                `
`,
            )),
          g?.kind === "batch" && (await g.lock),
          this._requestHandler.request({
            protocolQuery: R,
            modelName: l,
            action: a,
            clientMethod: i,
            dataPath: o,
            callsite: s,
            args: n,
            extensions: this._extensions,
            transaction: g,
            unpacker: h,
            otelParentCtx: v,
            otelChildCtx: this._tracingHelper.getActiveContext(),
            globalOmit: this._globalOmit,
            customDataProxyFetch: S,
          })
        );
      } catch (A) {
        throw ((A.clientVersion = this._clientVersion), A);
      }
    }
    $metrics = new Bt(this);
    _hasPreviewFlag(n) {
      return !!this._engineConfig.previewFeatures?.includes(n);
    }
    $applyPendingMigrations() {
      return this._engine.applyPendingMigrations();
    }
    $extends = us;
  }
  return t;
}
function oa(e, t) {
  return gp(e) ? [new le(e, t), qs] : [e, $s];
}
function gp(e) {
  return Array.isArray(e) && Array.isArray(e.raw);
}
d();
u();
c();
p();
m();
var hp = new Set([
  "toJSON",
  "$$typeof",
  "asymmetricMatch",
  Symbol.iterator,
  Symbol.toStringTag,
  Symbol.isConcatSpreadable,
  Symbol.toPrimitive,
]);
function yp(e) {
  return new Proxy(e, {
    get(t, r) {
      if (r in t) return t[r];
      if (!hp.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
    },
  });
}
d();
u();
c();
p();
m();
var export_warnEnvConflicts = void 0;
export {
  Pr as DMMF,
  Y as Debug,
  ve as Decimal,
  Pi as Extensions,
  Bt as MetricsClient,
  Q as PrismaClientInitializationError,
  oe as PrismaClientKnownRequestError,
  Re as PrismaClientRustPanicError,
  se as PrismaClientUnknownRequestError,
  X as PrismaClientValidationError,
  Ti as Public,
  le as Sql,
  Hu as createParam,
  ic as defineDmmfProperty,
  Ct as deserializeJsonResponse,
  ei as deserializeRawResult,
  du as dmmfToRuntimeDataModel,
  uc as empty,
  fp as getPrismaClient,
  Un as getRuntime,
  lc as join,
  yp as makeStrictEnum,
  sc as makeTypedQueryFactory,
  Cn as objectEnumValues,
  Ho as raw,
  In as serializeJsonQuery,
  Sn as skip,
  Ko as sqltag,
  export_warnEnvConflicts as warnEnvConflicts,
  mr as warnOnce,
};
//# sourceMappingURL=edge-esm.js.map
