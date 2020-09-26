const model = {
    current: {
        company: null,
        weeksToSum: 4,
        fromDate: null,
        toDate: null,
        user: "admin",
        page: "login",
        date: "99.99.99",
        lastLogin: "", // insert current date and time down to minutes, display on page as "5 hours ago", "2 minutes ago", "6 months ago", etc.
    },
    loginStuff: {
        username: "",
        password: ""
    },
    inputs: {
        newProfile: {
            name: "",
            address: "",
            weight: "",
            industry: "",
            id: "",
            description: "",
        },
        income: {
            id: "",
            date: "",
            percent: ""
        }


    },
    // Modell For Bedrifter
    companies: [{
            name: "Super Store 300",
            address: "Examplestreet 2",
            industry: "Electronics",
            id: 0000,
            weight: 2,
            logo: "some picture",
            description: "En Super Butikk!",
            sortIndex: 0,
        },

        {
            name: "Another Business",
            address: "Some Gate",
            industry: "Food",
            id: 0001,
            weight: 3,
            logo: "some picture",
            description: "En eller annen butikk",
            sortIndex: 1,
        },

        {
            name: "Magiske Tepper AS",
            address: "Some Address",
            industry: "Tekstiler",
            id: 0002,
            weight: 65,
            logo: "some picture",
            description: "Importerte tepper fra midt-østen, får snart lamper også.",
            sortIndex: 2,
        },

        {
            name: "Nesegreier",
            address: "Somergata 14",
            industry: "Food",
            id: 0003,
            weight: 1,
            logo: "some picture",
            description: "Jobbet med tette neser og plastisk kirurgi siden 1745.",
            sortIndex: 3,
        },

        {
            name: "Ablegoier",
            address: "Breiflabbsen34",
            industry: "Food",
            id: 0004,
            weight: 5,
            logo: "some picture",
            description: "Slik et morsomt sted :)",
            sortIndex: 4,
        },
    ],
    income: [
        { id: 0002, date: 38, percent: 45, },
        { id: 0000, date: 35, percent: 3 },
        { id: 0000, date: 36, percent: 13 },
        { id: 0000, date: 38, percent: 35 },
        { id: 0001, date: 37, percent: 3 },
        { id: 0001, date: 35, percent: 234 },
    ]
}