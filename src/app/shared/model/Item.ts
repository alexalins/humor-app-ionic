import { Feeling } from "./Feeling";
import { User } from "./User";

export class Item {
    id ?: string
    date ?: string;
    feeling ?: Feeling;
    user ?: User;

    constructor() {}
}