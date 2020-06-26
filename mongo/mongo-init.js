const date = new Date();

// Utilisateurs
db.users.insertMany([
  // Etudiant
  {
    _id: ObjectId("5e3609dd3a957000387b4eef"),
    pseudo: "etudiant1",
    password: "$2a$10$XgySW3xKDoVp/wq79XMKs.f.PnCGbi6/wBYKMoeI4nKravs0LQ.B2", // mdp = etudiant1
    created_at: date
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4eff"),
    pseudo: "etudiant2",
    password: "$2a$10$pSF1D/.kaHcjOWx59rAEMuuodywjbOHemGNwCccVWhfAXlxv6N/26", // mdp = etudiant2
    created_at: date
  }
]);

// Keywords
db.keywords.insertMany([
  {
    _id: ObjectId("5e3609dd3a957000387b4eec"),
    keyword: "covid19",
    tweets_number: "500",
    created_at: "2020-05-28T18:47:07.037Z"
  },
  {
    _id: ObjectId("5e3609dd3a957000384b4eec"),
    keyword: "covid19",
    tweets_number: "535",
    created_at: "2020-05-29T18:47:07.037Z"
  },
  {
    _id: ObjectId("5e3609da3a957340384b4eec"),
    keyword: "covid19",
    tweets_number: "555",
    created_at: "2020-05-30T18:47:07.037Z"
  },
  {
    _id: ObjectId("5e3604da3a957056384b4eec"),
    keyword: "covid19",
    tweets_number: "600",
    created_at: "2020-05-31T18:47:07.037Z"
  },
  {
    _id: ObjectId("5e3604da3a957056384b3eec"),
    keyword: "covid19",
    tweets_number: "700",
    created_at: "2020-06-01T18:47:07.037Z"
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4eed"),
    keyword: "trump",
    tweets_number: "850",
    created_at: date
  },
  {
    _id: ObjectId("5e3609dd3a957000387b3eed"),
    keyword: "valorant",
    created_at: date
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4edd"),
    keyword: "tpmp",
    tweets_number: "250",
    created_at: date
  }
])