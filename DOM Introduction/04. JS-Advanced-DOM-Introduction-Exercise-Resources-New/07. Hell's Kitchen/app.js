function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('textarea').value);
      let restaurants = {};

      for (let entry of input) {
         let [restaurantName, workersString] = entry.split(' - ');
         let workers = workersString.split(', ').map(w => {
            let [name, salary] = w.split(' ');
            return { name, salary: Number(salary) };
         });

         if (restaurants[restaurantName]) {
            restaurants[restaurantName].workers = restaurants[restaurantName].workers.concat(workers);
         } else {
            restaurants[restaurantName] = { workers };
         }

         // Calculate average and best salary
         let totalSalary = restaurants[restaurantName].workers.reduce((sum, worker) => sum + worker.salary, 0);
         restaurants[restaurantName].avgSalary = totalSalary / restaurants[restaurantName].workers.length;
         restaurants[restaurantName].bestSalary = Math.max(...restaurants[restaurantName].workers.map(w => w.salary));
      }

      // Find the best restaurant
      let bestRestaurant = Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
      let bestRestaurantName = bestRestaurant[0];
      let bestRestaurantData = bestRestaurant[1];

      // Display best restaurant info
      document.querySelector('#bestRestaurant p').textContent = 
         `Name: ${bestRestaurantName} Average Salary: ${bestRestaurantData.avgSalary.toFixed(2)} Best Salary: ${bestRestaurantData.bestSalary.toFixed(2)}`;

      // Display workers
      let workersOutput = bestRestaurantData.workers
         .sort((a, b) => b.salary - a.salary)
         .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
         .join(' ');
      document.querySelector('#workers p').textContent = workersOutput;
   }
}