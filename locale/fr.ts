import { fr, en } from "../lib/locales.ts";
import { Faker } from "../lib/mod.ts";

export const faker = new Faker({
  locales: { fr, en },
  locale: "fr",
  localeFallback: "en",
});
