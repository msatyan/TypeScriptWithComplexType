    interface IObject
    {
        id: number;
        name: string;
    }

    interface IMemberProperty
    {
        img:string;
        desc:string;
    }

    interface ITeamMember extends IObject
    {
        ppt:IMemberProperty;
    }

    // interface ITeam extends IObject
    // {
    //     //id:number;
    //     //name: string;
    //     MemberList?: ITeamMember[];
    // }

    /////////////////////////////
    abstract class CObject implements IObject
    {
        constructor( public id:number, public name: string )
        {
        }
    }

    class CTeamMember extends CObject implements ITeamMember
    {
        constructor( id: number, name: string,
                     public ppt: IMemberProperty)
        {
            super(id, name);
        }
    }


    class CTeam
    {
        private MemberList: ITeamMember[] = [];
        constructor(  public id:number,  public name: string )
        {
        }

        // no set property, to make it read only
        get Memers()
        {
            return(this.MemberList);
        }

        public AddMember( team: CTeamMember): void
        {
            this.MemberList.push(team);
        }
    }

    //////////////////////////////////
    class CModelGame
    {
        private TeamList :CTeam[] = [];

        public CreateTeam( id:number, name: string)
        {
            let team = new CTeam( id, name);
            this.TeamList.push(team);
            return(team);
        }

        public GetJson()
        {
            return(this.TeamList);
        }
    }

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
                let team = game.CreateTeam ( id_team,`Team-${id_team}`);

                // Add a set of members to the Team
                for (var id_member = 1; id_member <= max_members; id_member++)
                {
                    let member = new CTeamMember(  id_member, `Member-${id_member}`,
                        { img: `img-${id_member}`, desc: `desc-${id_member}`} );

                    team.AddMember(member);
                }
            }

            let JsonGameData = game.GetJson();

            return(JsonGameData);
        }
    }
