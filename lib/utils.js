export function isAlphanumeric(string) {
    let code, i, len;

    for (i = 0, len = string.length; i < len; i++) {
      code = string.charCodeAt(i);
      if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {
        return false;
      }
    }
    return true;
}
export function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}
