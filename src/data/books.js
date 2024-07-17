const data = [
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633097753i/40132775.jpg",
    title: "House of Sky",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy",
    rating: 3,
    price: 90,
    createdAt: "2024-07-15",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
    title: "Book Lovers",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action",
    rating: 4,
    price: 100,
    createdAt: "2024-05-14",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1649848581i/60435878.jpg",
    title: "Carrie Soto Is Back",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy",
    rating: 5,
    price: 140,
    createdAt: "2024-05-30",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626710416i/58446227.jpg",
    title: "Sea of Tranquility",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Thriller",
    rating: 4,
    price: 250,
    createdAt: "2024-07-13",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg",
    title: "Hidden Pictures",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action",
    rating: 5,
    price: 100,
    createdAt: "2024-05-19",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634068432i/59233594.jpg",
    title: "The Final Gambit",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Sci-fi",
    rating: 5,
    price: 100,
    createdAt: "2024-07-11",
    upcoming: true,
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1640745736i/56060300.jpg",
    title: "The Lincoln Highway",
    description:
      "A novel by Amor Towles that follows the journey of Emmett Watson as he travels across America with his younger brother Billy, after being released from a juvenile work farm.",
    genre: "Historical",
    rating: 4,
    price: 190,
    createdAt: "2024-07-20",
    upcoming: true,
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634748496i/58065033.jpg",
    title: "Project Hail Mary",
    description:
      "A science fiction novel by Andy Weir about Ryland Grace, a lone astronaut on a mission to save Earth from disaster.",
    genre: "Science",
    rating: 3,
    price: 390,
    createdAt: "2024-07-10",
    upcoming: true,
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696612003i/158107897.jpg",
    title: "Lessons in Chemistry",
    description:
      "A novel by Bonnie Garmus featuring Elizabeth Zott, a chemist in the 1960s who becomes an unlikely TV cooking show host.",
    genre: "Historical",
    rating: 5,
    price: 100,
    createdAt: "2024-07-05",
    upcoming: true,
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6WcR5PBRLMyXS4W3NNcGBVU6_0k8oP_Mjg&s",
    title: "A Little Life",
    description:
      "A novel by Hanya Yanagihara, A Little Life follows the lives of four college friends in New York City.",
    genre: "Psychological",
    rating: 4,
    price: 250,
    createdAt: "2024-07-15",
    upcoming: true,
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1600266794i/53431508.jpg",
    title: "Leave the World Behind",
    description:
      "A novel by Rumaan Alam that explores a vacation-turned-nightmare when a mysterious disaster strikes, forcing two families to confront their fears and each other.",
    genre: "Thriller",
    rating: 3,
    price: 200,
    createdAt: "2024-07-01",
  },
  {
    id: crypto.randomUUID(),
    cover:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645385346i/58438579.jpg",
    title: "The Final Girl Support Group",
    description:
      "A thriller novel by Grady Hendrix that follows a group of women who survived mass murders in their youth, now brought together to confront their past and a new threat.",
    genre: "Fiction",
    rating: 5,
    price: 270,
    createdAt: "2024-07-09",
  },
  {
    id: crypto.randomUUID(),
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1564254918i/44165800.jpg",
    title: "The Turn of the Key",
    description: "A thriller novel by Ruth Ware that follows a nanny who becomes entangled in the mysterious and dark secrets of the family she works for.",
    genre: "Fiction",
    rating: 3,
    price: 110,
    createdAt: "2024-07-12"
  },
  {
    id: crypto.randomUUID(),
    cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702893790i/200020832.jpg",
    title: "The Maidens",
    description: "A thriller novel by Alex Michaelides that follows a group of students and a professor drawn into a murder investigation at Cambridge University, where secrets and suspicions unravel.",
    genre: "Thriller",
    rating: 4,
    price: 150,
    createdAt: "2024-07-18"
  }
];

function getAllBooks() {
  return data;
}

export { getAllBooks };
