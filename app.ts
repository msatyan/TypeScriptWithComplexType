import {IObject, IMember, IMemberProperty, 
    ITeam, ITeamProperty, IGame} from "./MyModel";

    /////////////////////////////
    abstract class CObject implements IObject
    {
        constructor( public id:number, public name: string )
        {
        }
    }

    class CMember extends CObject implements IMember
    {
        constructor( id: number, name: string, public ppt: IMemberProperty)
        {
            super(id, name);
        }
    }


    class CTeam implements ITeam
    {
        private MemberList: IMember[] = [];
        constructor(  
            public id:number,  
            public name: string,
            public ppt:ITeamProperty )
        {
        }

        // no set property, to make it read only
        get Memers()
        {
            return(this.MemberList);
        }

        public AddMember( team: CMember): void
        {
            this.MemberList.push(team);
        }
    }

    ////////////////////////
    class CModelGame
    {
        private TeamList :ITeam[] = [];
        public CreateTeam( id:number, name: string, ppt:ITeamProperty)
        {
            let team = new CTeam( id, name, ppt);
            this.TeamList.push(team);
            return(team);
        }

        public GetJson():ITeam[]
        {
            return(this.TeamList);
        }
    }

    /////////////////////////////////////
    class TestGame
    {
        public static PlayGame():any
        {
            let max_team = 3;
            let max_members = 5;

            let game = new CModelGame();

            // Add a set of Team to the model
            for (var id_team = 1; id_team <= max_team; id_team++) 
            {
                let team = game.CreateTeam ( 
                    id_team,
                    `Team-${id_team} Name`,
                    { img:`Team-${id_team} Logo`, status:2} );

                // Add a set of members to the Team
                for (var id_member = 1; id_member <= max_members; id_member++)
                {
                    let member = new CMember(  id_member, `Player-${id_member} Name`,
                        { img: `Player-${id_member} Image`, desc: `Player-${id_member} Description`} );

                    team.AddMember(member);
                }
            }

            let JsonGameData = game.GetJson();

            return(JsonGameData);
        }
    }
