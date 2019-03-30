var deck =[
    {
        image: "https://cdn.pixabay.com/photo/2018/02/28/23/00/bear-3189349_960_720.png",
        imageVisible: true,
        pairId: 1,
        id: 1
    },
    {
        image: "https://cdn.pixabay.com/photo/2018/02/28/23/00/bear-3189349_960_720.png",
        imageVisible: true,
        pairId: 1,
        id: 2
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/04/15/04/39/redpanda-1330306_960_720.jpg",
        imageVisible: true,
        pairId: 2,
        id: 3
    },
    {
        image: "https://cdn.pixabay.com/photo/2016/04/15/04/39/redpanda-1330306_960_720.jpg",
        imageVisible: true,
        pairId: 2,
        id: 4
    }
];

var main = document.querySelector('main');
deck.forEach(function (card) {
    let newCard = document.createElement('div');
    newCard.innerHTML = `<img src="${card.image}" />`;
    main.appendChild(newCard);

})
deck.sort(function (a, b) {
    return 0.5 - Math.random()
});
