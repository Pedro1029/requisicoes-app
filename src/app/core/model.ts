import { classToPlain } from "class-transformer";

export abstract class Model {
    id: string | undefined;
    tObject(): object {
        let obj: any = classToPlain(this.id);
        delete obj.id;
        return obj;
    }
}