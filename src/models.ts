export interface ILink{
    name:string;
    url: string;
    tags: ITag[];
}

export interface ITag{ // self-defined
    name: string;
}
