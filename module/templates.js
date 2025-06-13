/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function() {

  // Define template paths to load
  const templatePaths = [
      // attr list
  "systems/worldbuilding/templates/parts/sheet-attributes.html",
    "systems/worldbuilding/templates/parts/sheet-groups.html"
  ];

  // Load the template parts
  return foundry.applications.handlebars.loadTemplates(templatePaths);
};