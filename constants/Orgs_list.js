export default [
    {
        Org_id:{
            name:'WSB',
            events:{
                event_id_1:{
                    date: new Date('2020-4-26T03:24:00'),
                    event_name:'practice',
                    event_description:'We will be having practice for the ending choreo and getting ready for competition season',
                    participants: {
                        user_id:[],
                        num:0
                    },
                    points: 5,
                },
                event_id_2:{
                    date: new Date('2020-4-29T03:24:00'),
                    event_name:'practice',
                    event_description:'We will be having practice for the ending choreo and getting ready for competition season',
                    participants: {
                        user_id:[],
                        num:0
                    },
                    points: 5,
                }
            },
            members:{
                userID: {
                    total_points:0,
                    hours:0,
                    percent_activity:0
                },
            },
            club_exec:[],
            logo_path:'test',
            university:['University of Wisconsin-Madison'],
            org_description:"Wisconsin School of Bhangra is a Bhangra dance competitive team. We go to many diffrent competitions every year.",
        },
    },
];