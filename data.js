// Define roles as constants
const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
};

// Export roles and user data
module.exports = {
  ROLE: ROLE, // Exporting ROLE object
  users: [ // Exporting user data
    { id: 1, name: 'Carlos', role: ROLE.ADMIN },
    { id: 2, name: 'Taylor', role: ROLE.BASIC },
    { id: 3, name: 'Robert', role: ROLE.BASIC }
  ],
  projects: [ // Exporting project data
    { id: 1, name: "Carlos' Project", userId: 1 },
    { id: 1, name: "Taylors's Project", userId: 2 },
    { id: 1, name: "Robert's Project", userId: 3 },
  ]
};