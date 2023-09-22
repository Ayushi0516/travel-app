const tours = [
  {
    "title": "Machu Picchu",
    "city": "Cusco",
    "address": "Somewhere in Peru",
    "distance": 300,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 10,
    "desc": "this is the description",
    "photo": "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "featured": true
  },
  {
    "title": "Cappadocia, Turkey",
    "city": "Nevsehir",
    "address": "Somewhere in Turkey",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://images.unsplash.com/photo-1569530593440-e48dc137f7d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "featured": true
  },
  {
    "title": "The Great Wall of China",
    "city": "Liaoning",
    "address": "Somewhere in China",
    "distance": 400,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://plus.unsplash.com/premium_photo-1664304488525-44a96338c0cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    "featured": true
  },
  {
    "title": "Santorini, Greece",
    "city": "Oia",
    "address": "Somewhere in Greece",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://images.unsplash.com/photo-1548580392-8d9c772d854e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    "featured": true
  },
  {
    "title": "The Grand Canyon, USA,",
    "city": "Las Vegas",
    "address": "Somewhere in USA",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://plus.unsplash.com/premium_photo-1689635690273-849284a10734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "featured": true
  },
  {
    "title": "Venice, Italy",
    "city": "Venice City",
    "address": "Somewhere in Italy",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://plus.unsplash.com/premium_photo-1676120651951-c84af43eaf9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "featured": true
  },
  {
    "title": "Bora Bora, French Polynesia",
    "city": "French Polynesia",
    "address": "Somewhere in France",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "featured": true
  },
  {
    "title": "Kyoto, Japan",
    "city": "Kansai region of Japan",
    "address": "Somewhere in Japan",
    "distance": 500,
    "price": 99,
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    "maxGroupSize": 8,
    "desc": "this is the description",
    "photo": "https://images.unsplash.com/photo-1580639613257-5b1a20fe3760?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
    "featured": true
  },
];

export default tours;
