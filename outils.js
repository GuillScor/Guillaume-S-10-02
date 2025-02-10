function comparaisonAlgos(func1, func2, n, ...args){
    
    let tabresults = [];
    //pour chaque version de l'algo
    let temps = averageTimeAlgo(func1, n, ...args);
    tabresults.add((func1.name, temps));
    console.log("L'algo " + func1.name + "avec un temps moyen de " + temps + "ms");
    temps = averageTimeAlgo(func2, n, ...args);
    tabresults.add((func2.name, averageTimeAlgo(func2, n, ...args)));
    console.log("L'algo " + func2.name + "avec un temps moyen de " + temps + "ms");
    tabresults.sort();

}

function averageTimeAlgo(algo, n, ...args){
    let average = 0;
    for (let i = 0; i <n; i++){
        let start = performance.now();
        let r = algo(...args);
        let end = performance.now();
        average += ((end-start)/n);
    }
    return average;
}


function containsDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }

  function containsDuplicatev2(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          return true;
        }
      }
    }
    return false;
  }