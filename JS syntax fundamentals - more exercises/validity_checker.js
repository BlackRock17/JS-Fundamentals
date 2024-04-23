function validityChecker(x1, y1, x2, y2) {

    function calculateDistance(x1, y1, x2, y2) {
      const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return Number.isInteger(distance);
    }
  
    const distance1 = calculateDistance(x1, y1, 0, 0);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${distance1 ? 'valid' : 'invalid'}`);
  
    const distance2 = calculateDistance(x2, y2, 0, 0);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distance2 ? 'valid' : 'invalid'}`);
  
    const distance3 = calculateDistance(x1, y1, x2, y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distance3 ? 'valid' : 'invalid'}`);
  }
  
  validityChecker(3, 0, 0, 4); 
  
  validityChecker(2, 1, 1, 1);