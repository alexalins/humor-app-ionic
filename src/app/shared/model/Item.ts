import { Feeling } from "./Feeling";
import { User } from "./User";

export class Item {
    date ?: string;
    feeling ?: Feeling;
    user ?: User;

    constructor() {}
}