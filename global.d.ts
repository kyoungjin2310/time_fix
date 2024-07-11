type Messages = typeof import("./src/app/message/en.json");
type KrMessages = typeof import("./src/app/message/kr.json");

declare interface IntlMessage extends Messages, KrMessages {}
