function comparaisonAlgos(arrayfunc, n, ...args){
    //arrayfunc est un tableau des algos qu'on veut comparer
    //n est le nombre de fois que l'on souhaite tester chaque algo
    
    let tabresults = [];
    //pour chaque version de l'algo
    for(func in arrayfunc){
        let temps = averageTimeAlgo(func, n, ...args);
        tabresults.push({ temps: temps, name: func.name });
        console.log("L'algo " + func.name + "avec un temps moyen de " + temps + "ms");
    }
    tabresults.sort((a, b) => a.temps - b.temps);

    console.log("Algo plus rapide:"+ tabresults[0].name +" pour " +tabresults[0].temps+" ms");
    console.log("Algo plus lent:"+ tabresults[tabresults.length-1].name +" pour " +tabresults[tabresults.length-1].temps+" ms");
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
    const checked = new Set();
    for (let i = 0; i < array.length; i++) { 
        if (checked.has(array[i])) { 
          return true;
        }
        checked.add(array[i]); 
    }
    return false;
  }

  function findCommonElements(array1, array2) {
    let commonElements = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          commonElements.push(array1[i]);
        }
      }
    }
    return commonElements;
  }

  function findCommonElementsv2(array1, array2) {
    let commonElements = [];
    const checked = new Set();
    for (let i = 0; i < array1.length; i++) { 
      checked.add(array1[i]);
    }
  
    for (let i = 0; i < array2.length; i++) {
      if (checked.has(array2[i])) { 
        commonElements.push(array2[i]);  
      }
    }
    return commonElements;
  }

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  function fibonacciv2(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacciv2(n - 1, memo) + fibonacciv2(n - 2, memo);
    return memo[n];
  }
let tabAlgo = [containsDuplicate(), containsDuplicatev2()];
let arrayArg = [1,5,3,4,5];
comparaisonAlgos(tabAlgo, 3, 0);