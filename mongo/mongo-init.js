// Utilisateurs
db.users.insertMany([
  // Etudiant
  {
    _id: ObjectId("5e3609dd3a957000387b4eef"),
    pseudo: "etudiant1",
    password: "$2a$10$XgySW3xKDoVp/wq79XMKs.f.PnCGbi6/wBYKMoeI4nKravs0LQ.B2", // mdp = etudiant1
    created_at: Date.now.apply()
  },
  {
    _id: ObjectId("5e3609dd3a957000387b4eff"),
    pseudo: "etudiant2",
    password: "$2a$10$pSF1D/.kaHcjOWx59rAEMuuodywjbOHemGNwCccVWhfAXlxv6N/26", // mdp = etudiant2
    created_at: Date.now.apply()
  }
]);
