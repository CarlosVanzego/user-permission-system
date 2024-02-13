const ROLE = {
  ADMIN:'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  user: [
  { id: 1, name: 'Carlos', role: ROLE.ADMIN },
  { id: 2, name: 'Taylor', role: ROLE.BASIC },
  { id: 3, name: 'Robert', role: ROLE.BASIC }
],
  projects: [
    { id: 1, name: "Carlos' Project", userId: 1 },
    { id: 1, name: "Taylors's Project", userId: 2 },
    { id: 1, name: "Robert's Project", userId: 3 },
  ]
}