// Sessions
db.sessions.insertMany([
  {
    _id: ObjectId("5e3609dd3a957000387b4eda"),
    nom_promo: "mock_nom_promo_1",
    annee_promo: new Date("2017"),
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4edb"),
    nom_promo: "mock_nom_promo_2",
    annee_promo: new Date("2018"),
    created_at:  Date.now.apply()
  },
  {
    _id: ObjectId("5e3659dd3a957000387b4edb"),
    nom_promo: "mock_nom_promo_3",
    annee_promo: new Date("2019"),
    created_at: Date.now.apply()
  }
]);

// Modules
db.modules.insertMany([
  {
    _id: ObjectId("5e3609dd3a957000387b4edc"),
    nom_module: "mock_module_1",
    date_debut: new Date("2017-01-01"),
    date_fin: new Date("2017-06-01"),
    id_intervenant: "5e3609dd3a957000387b4ede",
    id_session: "5e3609dd3a957000387b4eda",
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4edd"),
    nom_module: "mock_module_2",
    date_debut: new Date("2017-06-01"),
    date_fin: new Date("2017-12-01"),
    id_intervenant: "5e3609dd3a957000387b4ede",
    id_session: "5e3609dd3a957000387b4eda",
    created_at: Date.now.apply()
  },
]);

// Utilisateurs
db.users.insertMany([
  // Intervenant
  {
    _id: ObjectId("5e3609dd3a957000387b4ede"),
    nom: "mock_nom_1",
    prenom: "mock_prenom_1",
    role: "intervenant",
    pseudo: "intervenant1",
    password: "$2a$10$vmTfwHejp/GbMFgDfh6XFetVP6ChS5pgWAKyZ3.3Lgfu0kfr3a1wC", // mdp = intervenant1
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4edf"),
    nom: "mock_nom_2",
    prenom: "mock_prenom_2",
    role: "intervenant",
    pseudo: "intervenant2",
    password: "$2a$10$3bVl7EkhrAZcBOxe6W3I9.7L2incQh1e3nj6n1wfZpwrAOJOElqBi", // mdp = intervenant2
    created_at: Date.now.apply()
  },
  // Etudiant
  {
    _id: ObjectId("5e3609dd3a957000387b4eef"),
    nom: "mock_nom_3",
    prenom: "mock_prenom_3",
    role: "etudiant",
    pseudo: "etudiant1",
    password: "$2a$10$XgySW3xKDoVp/wq79XMKs.f.PnCGbi6/wBYKMoeI4nKravs0LQ.B2", // mdp = etudiant1
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4eff"),
    nom: "mock_nom_4",
    prenom: "mock_prenom_4",
    role: "etudiant",
    pseudo: "etudiant2",
    password: "$2a$10$pSF1D/.kaHcjOWx59rAEMuuodywjbOHemGNwCccVWhfAXlxv6N/26", // mdp = etudiant2
    created_at: Date.now.apply()
  },
  // Admin
  {
    _id: ObjectId("5e3609dd3a957000387b4fff"),
    nom: "mock_nom_5",
    prenom: "mock_prenom_5",
    role: "admin",
    pseudo: "admin",
    password: "$2a$10$uDlj0JXL9AUp6ZJkTesOt.qYf5KUzITch6T8CEP0my0lgOCRpGHh6", // mdp = admin
    created_at: Date.now.apply()
  }
]);

// Notes
db.notes.insertMany([
  {
    _id: ObjectId("5e3609dd3a957000387b5fff"),
    note: 10,
    message: "mock_message_1",
    id_etudiant: "5e3609dd3a957000387b4eef",
    id_module: "5e3609dd3a957000387b4edc",
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609ad3a957000387b5fff"),
    note: 5,
    message: "mock_message_2",
    id_etudiant: "5e3609dd3a957000387b4eef",
    id_module: "5e3609dd3a957000387b4edc",
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3309ad3a957000387b5fff"),
    note: 18,
    message: "mock_message_3",
    id_etudiant: "5e3609dd3a957000387b4eef",
    id_module: "5e3609dd3a957000387b4edc",
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b6fff"),
    note: 15,
    message: "mock_message_4",
    id_etudiant: "5e3609dd3a957000387b4eef",
    id_module: "5e3609dd3a957000387b4edd",
    created_at: Date.now.apply()
  }
]);

