// 4位代表常见10，16进制
const n = "1111";

function to10(ws) {
  const w1 = ws[0];
  const w2 = ws[1];
  const w3 = ws[2];
  const w4 = ws[3];

  return (
    Math.pow(2, 0) * w1 +
    Math.pow(2, 1) * w2 +
    Math.pow(2, 2) * w3 +
    Math.pow(2, 3) * w4
  );
}

function toHex(ws) {
  const r = to10(ws);

  if (r < 10) return r;

  switch (r) {
    case 10:
      return "A";
      break;
    case 11:
      return "B";
      break;
    default:
    case 12:
      return "C";
      break;
    case 13:
      return "D";
      break;
    case 14:
      return "E";
      break;
    case 15:
      return "F";
    case 16:
      return "ERROR";
      break;
  }
}

const con = (n,t,v) => console.log(`${n}转换为${t}为${v}`);

con(n,10,to10(n));
con(n,16,toHex(n));
