import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const ONE_DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;
const SECRET = "jstack";

const token = sign({
  exp: Date.now() + ONE_DAY_IN_MILISECONDS,
  data: {
    sub: "@jao",
  },
  secret: SECRET,
});
const decoded = verify({
  secret: SECRET,
  token,
});
console.log({ token });
console.log({ decoded });
