/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {number}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const conversions: Record<string, Record<string, (value: number) => number>> = {
    m: { mi: value => value / 1609.34 },
    mi: { m: value => value * 1609.34 },
    gr: { pound: value => value / 453.592 },
    pound: { gr: value => value * 453.592 },
    C: { K: value => value + 273.15 },
    K: { C: value => value - 273.15 }
  };

  if (!conversions[from] || !conversions[from][to]) {
    throw new Error('Conversion not supported');
  }

  return parseFloat(conversions[from][to](value).toFixed(2));
}



