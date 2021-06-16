import ieee754 from 'ieee754';

export function assertByteCount(bytes: number[] | undefined, count: number) {
  if (!bytes || bytes.length < count) {
    throw new Error('Invalid byte range.');
  }
  return true;
}

export function base10ToIeee754(value: number, count = 4) {
  const ieeeArray = [] as unknown as Uint8Array;
  ieee754.write(ieeeArray, value, 0, false, 23, count);
  return [...ieeeArray];
}

export function base10ToIeee754Double(value: number, count = 8) {
  const ieeeArray = [] as unknown as Uint8Array;
  ieee754.write(ieeeArray, value, 0, false, 52, count);
  return [...ieeeArray];
}

export function bytesToChunk(
  bytes: number[],
  size: number | undefined,
  isVariableSize: () => boolean,
): [number, number[]] {
  let count = 0;
  let offset = 0;

  if (size) {
    count = size;
  } else if (isVariableSize()) {
    assertByteCount(bytes, 2);
    count = bytesToInt(bytes.slice(0, 2));
    offset += 2;
  } else {
    count += bytes.length;
  }

  const total = offset + count;
  assertByteCount(bytes, total - 1);

  return [total, bytes.slice(offset, total)];
}

export function* bytesToChunks(bytes: number[]) {
  let offset = 0;

  while (offset < bytes.length) {
    const [id, msb, lsb, ...rest] = bytes.slice(offset);
    const count = bytesToInt([msb, lsb]);

    assertByteCount(rest, count - 1);

    yield [id, rest.slice(0, count)] as [number, number[]];

    offset += count + 3;
  }
}

export function bytesToInt(bytes: number[]) {
  return hexToInt(hexArrayToHex(bytes));
}

export function bytesToTimestamp(bytes: number[]) {
  return new Date(bytesToInt(bytes));
}

export function bytesToUint8Array(bytes: number[]) {
  return bytes instanceof Uint8Array ? bytes : Uint8Array.from(bytes);
}

export function bytesWithSize(bytes: number[]) {
  return [...intToTwoBytes(bytes.length), ...bytes];
}

export function decimalToHexArray(value: number | string, bytes = 1) {
  let hex = intToHex(typeof value === 'string' ? parseInt(value, 10) : value);

  while (hex.length % (bytes * 2) !== 0) {
    hex = `0${hex}`;
  }

  return hex.match(/.{1,2}/g)!.map((hexItem) => Number(`0x${hexItem}`));
}

export function hexArrayToHex(hexArray: number[]) {
  return hexArray.reduce((memo, i) => memo + intToHex(i).padStart(2, '0'), '');
}

export function hexToInt(hex: string) {
  return parseInt(hex, 16);
}

export function hexToUint8Array(value: string) {
  const byteArray = [];

  for (let i = 0, len = value.length; i < len; i += 2) {
    byteArray.push(parseInt(value.substr(i, 2), 16));
  }

  return new Uint8Array(byteArray);
}

export function ieee754DoubleToBase10(bytes: number[], count = 8) {
  return ieee754.read(bytesToUint8Array(bytes), 0, false, 52, count);
}

export function ieee754ToBase10(bytes: number[], count = 4) {
  return ieee754.read(bytesToUint8Array(bytes), 0, false, 23, count);
}

export function intToHex(int: number) {
  return int.toString(16);
}

export function intToTwoBytes(int: number) {
  return hexToUint8Array(intToHex(int).padStart(4, '0'));
}

export function utfStringToByteArray(string: string, minLength?: number) {
  const byteArray = unescape(encodeURIComponent(string))
    .split('')
    .map((char) => char.charCodeAt(0));

  if (minLength !== undefined) {
    while (byteArray.length < minLength) {
      byteArray.unshift(0);
    }
  }

  return byteArray;
}
