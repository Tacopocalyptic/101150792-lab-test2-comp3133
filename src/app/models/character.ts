export class Character {
    constructor(
        public id: string,
        public name : string,
        public species : string,
        public house : string, 
        public wizard : boolean,
        public ancestry : string,
        public wand : {
            wood : string,
            core : string,
            length : number,
        },
        public actor : string,
        public image : string,
    ) { }
}