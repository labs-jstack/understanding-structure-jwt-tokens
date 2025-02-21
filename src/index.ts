import { sign } from "./jwt/sign";

const ONE_DAY_IN_MILISECONDS = 24 * 60 * 60 * 1000;

const token = sign({
  exp: Date.now() + ONE_DAY_IN_MILISECONDS,
  data: {
    sub: "@jao",
  },
  secret: "secreta",
});

console.log({ token });
