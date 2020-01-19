import {observable} from "mobx"

class Store {
    @observable
    count: number = 0

    @observable
    someText: string = ""
}

export const store = new Store()