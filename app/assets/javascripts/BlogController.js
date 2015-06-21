var app = angular.module('blogApp', []);
app.controller('BlogController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    //$scope.toggle = function () {
    //    $scope.myVar = !$scope.myVar;
    //};



    $scope.entries = [
            {
                body: {
                    name: 'Maryse M.',
                    title: 'What is Code?',
                    date: new Date('2015,05,03'),
                    img: 'Images/candy.jpg',
                    description: 'For your entire working memory, some Internet thing has come along every two years and suddenly hundreds of thousands of dollars (inevitably millions) must be poured into amorphous projects with variable deadlines. Content management projects, customer relationship management integration projects, mobile apps, paperless office things, global enterprise resource planning initiatives—no matter how tightly you clutch the purse strings, software finds a way to pry open your fingers.',
                    //avatar: 'img/cbj.svg'
                },
                comment: {
                    //img: 'img/dog.jpg',
                    text: 'How much for that dogg in the window?'
                }
            },

{
    body: {
        name: 'Bob',
        title: 'Grace Hopper',
        date: new Date('2015,06,01'),
        img: 'Images/candy.jpg',
        description: 'Grace Murray Hopper (December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral.[1] She was one of the first programmers of the Harvard Mark I computer in 1944,[2] and invented the first compiler for a computer programming language,[3][4][5][6][7] and was one of those who popularized the idea of machine-independent programming languages, which led to the development of COBOL, one of the first high-level programming languages. She is credited with popularizing the term "debugging" for fixing computer glitches (inspired by an actual moth removed from the computer). Owing to her accomplishments and her naval rank, she is sometimes referred to as "Amazing Grace".[8][9] The U.S. Navy Arleigh Burke class guided-missile destroyer USS Hopper (DDG-70) is named for her, as was the Cray XE6 "Hopper" supercomputer at NERSC.',
    },
    comment: {
        text: 'I used to have a recurring dream when I was younger.'
    }
},
{
    body: {
        name: 'Steve',
        title: 'Superfun Hacks',
        date: new Date('2015,06,12'),
        img: 'Images/candy.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    comment: {
        text: 'I used to have a recurring dream when I was younger.'
    }
},

{
    body: {
        name: 'Mary',
        title: 'Enigma',
        date: new Date('2015,06,12'),
        img: 'Images/candy.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    comment: {
        text: 'Jon Snow'
    }
},
    ]

}]);
