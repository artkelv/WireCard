import {v4} from "uuid"

export class GenerateID{
    newId() {
        const id:string = v4()
        return id
    }
}