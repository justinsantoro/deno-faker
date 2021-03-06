const en_GB: {
  [key: string]: any;
} = {};

en_GB.title = "Great Britain (English)";
en_GB.address = await import("./address/mod.ts");
en_GB.internet = await import("./internet/mod.ts");
en_GB.phone_number = await import("./phone_number/mod.ts");
en_GB.cell_phone = await import("./cell_phone/mod.ts");

export { en_GB };
