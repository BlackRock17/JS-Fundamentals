function createObjects(townsInfo) {

    townsInfo.forEach(row => {
        
        let [town, latitude, longitude] = row.split(' | ');

        
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        
        let obj = { town, latitude, longitude };
        console.log(obj);
    });
}


createObjects (['Plovdiv | 136.45 | 812.575'])