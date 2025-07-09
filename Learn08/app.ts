type Combined = string | number;
type conversionType = "as-number" | "as-string";

function combine(a: Combined, b: Combined, resultConversion: conversionType) {
  let res;
  if (
    (typeof a == "number" && typeof b == "number") ||
    resultConversion === "as-number"
  ) {
    res = +a + +b;
  }
}
