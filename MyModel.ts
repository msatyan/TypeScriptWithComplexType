    export interface IObject
    {
        id: number;
        name: string;
    }

    export interface IMemberProperty
    {
        img:string;
        desc:string;
    }

    export interface IMember extends IObject
    {
        ppt:IMemberProperty;
    }


    export interface ITeamProperty
    {
        img:string;
        status:number;
    }

    export interface ITeam extends IObject
    {
        ppt:ITeamProperty;
    }

    export interface IGame
    {
         TeamList:ITeam[];
    }


