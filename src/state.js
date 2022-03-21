const state = {
    dialogPage: {
        dialogs: [
            {id:1, name: 'Anya'},
            {id:2, name: 'Bogdan'},
            {id:3, name: 'Demon'},
            {id:4, name: 'Johney'},
            {id:5, name: 'Kurama'},
            {id:6, name: 'Matataby'},
            {id:7, name: 'Marik'}
        ],
        messanges: [
            {id:1, author:"Anya", content:"Hi!"},
            {id:2, author:"Andrey", content:"Hello!"},
            {id:3, author:"Andrey", content:"How Are U?"}
        ]
    },
    profilePage: {
        posts:  [
            {id:1, message:":33 OwO", likes: 0},
            {id:2, message:"The tuna is a sleek and streamlined fish, adapted for speed. It has two closely spaced dorsal fins on its back; VERYYYY TAAASSSTYYY!! MEUW", likes: 8},
            {id:3, message:"First Post", likes: 3}
        ]
    }
}

export default state;