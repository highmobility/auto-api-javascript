export function capitalize(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function snakeCaseToPascalCase(name: string) {
  return name.split('_').map(capitalize).join('');
}

/**
 * Copyright 2008 The Closure Library Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
export const byteArrayToUtfString = (byteArray: number[]) => {
  const out = [];

  let pos = 0;
  let c = 0;
  while (pos < byteArray.length) {
    const c1 = byteArray[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = byteArray[pos++];
      out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      const c2 = byteArray[pos++];
      const c3 = byteArray[pos++];
      const c4 = byteArray[pos++];
      const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      const c2 = byteArray[pos++];
      const c3 = byteArray[pos++];
      out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
    }
  }

  return out.join('');
};

/**
 * Copyright 2008 The Closure Library Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
export function utfStringToByteArray(string: string) {
  const out = [];

  let p = 0;
  for (let i = 0; i < string.length; i++) {
    let c = string.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = (c >> 6) | 192;
      out[p++] = (c & 63) | 128;
    } else if (
      (c & 0xfc00) == 0xd800 &&
      i + 1 < string.length &&
      (string.charCodeAt(i + 1) & 0xfc00) == 0xdc00
    ) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (string.charCodeAt(++i) & 0x03ff);
      out[p++] = (c >> 18) | 240;
      out[p++] = ((c >> 12) & 63) | 128;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    } else {
      out[p++] = (c >> 12) | 224;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    }
  }

  return out;
}
