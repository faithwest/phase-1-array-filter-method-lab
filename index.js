// This function to take drivers and a name as instructions.
// filter through and pick the given driver names., 
// regardless if upper or lowercase).
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  //  function to take drivers and a group of letters as instructions.
  // filter through and pick the given driver names.
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
  }
  
  //  function to take drivers and a name as instructions.
  // filter through and pick the given driver names.
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  