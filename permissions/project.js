// Import role constant from data file
const { ROLE } = require('../data');

// Function to check if user can view a project
function canViewProject(user, project) {
  return (
    user.role === ROLE.ADMIN || 
    project.userId === user.id
  );
}

// Function to filter projects based on user role
function scopedProjects(user, projects) {
  // If user is admin, return all projects
  if (user.role === ROLE.ADMIN) return projects;
  // If user is not admin, filter projects based on user id
  return projects.filter(project => project.userId === user.id);
}

// Function to check if user can delete a project
function canDeleteProject(user, project) {
  return project.userId === user.id;
}

// Export functions for use in other modules
module.exports = {
  canViewProject,
  scopedProjects,
  canDeleteProject
};