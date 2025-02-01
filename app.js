// 7gacha darsda korganmiz/
// 1
// function getLevel2(n) {
//      let result = []
//      for (let i=1; i<=n; i++){
//           result.push(2 ** i);
//      }
//      return result
// }
// console.log(getLevel2(5));


// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]
// function sonlar() {
//      let n = 5; 
//      let a = 2; 
//      let b = 3;
//      let sum = a + b;
//      let result = [a, b];  
 
//      for (let i = 2; i < n; i++) {
//          result[i] = sum;
//          sum += result[i];  
//      }
 
//      console.log(result);
//      return result;
//  }
//  sonlar();
// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
// function sonlar() {
//      const son = [1, 2, 3, 4, 5, 6];
//      son.reverse();  
//      return son;  
//  }
//  console.log(sonlar());
// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3
// function toqSonlar() {
//      const massiv = [4, 5, 7, 8, 6, 9]; 
//      const toqSonlar = [];  
 
//      for (let i = 0; i < massiv.length; i++) {
//          if (massiv[i] % 2 !== 0) {  
//              toqSonlar.push(massiv[i]);  
//          }
//      }
 
//      console.log(toqSonlar.join(" "), `toq sonlar soni = ${toqSonlar.length}`);
//  }
 
//  toqSonlar(); 

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// function toqSonlar() {
//      const massiv = [4, 5, 7, 8, 6, 9];  
//      const toqSonlar = [];  
 

//      for (let i = 0; i < massiv.length; i++) {
//          if (massiv[i] % 2 !== 0) {  
//              toqSonlar.push(massiv[i]); 
//          }
//      }
 
//      console.log(toqSonlar.join(" "), `toq sonlar soni = ${toqSonlar.length}`);
//  }
 
//  toqSonlar(); 
 
// Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.

// function juftIndeksElementlari() {
//      const massiv = [1, 2, 3, 4, 5, 6, 7, 8];  
//      const natija = [];
//      for (let i = 0; i < massiv.length; i += 2) {
//          natija.push(massiv[i]);  
//      }
//      console.log(natija.join(" ")); 
//  }
//  juftIndeksElementlari();  
 
// Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
// function chiqarish(A) {
//      let n = A.length; 
//      if (n % 2 === 0) { 
//          for (let i = n - 1; i >= 0; i -= 2) {
//              console.log(A[i]);
//          }
//      } 
//  }
//  let A = [1, 2, 3, 4, 5, 6, 7, 8];
//  chiqarish(A);

// Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
// A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

// function printEvenOddIndices(arr) {
//      for (let i = 0; i < arr.length; i += 2) {
//        console.log(arr[i]);
//      }
//      for (let i = 1; i < arr.length; i += 2) {
//        console.log(arr[i]);
//      }
//    }
//    let A = [1, 2, 3, 4, 5, 6, 7, 8];
//    printEvenOddIndices(A);

// Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.

// function printOddEvenIndices(arr) {
//      let oddIndices = [];
//      let evenIndices = [];
//      for (let i = 1; i < arr.length; i += 2) {
//        oddIndices.push(arr[i]);
//      }
//      for (let i = 0; i < arr.length; i += 2) {
//        evenIndices.push(arr[i]);
//      }
//      oddIndices.sort((a, b) => a - b);
//      oddIndices.forEach(element => console.log(element));
//      evenIndices.sort((a, b) => b - a);
//      evenIndices.forEach(element => console.log(element));
//    }
//    let A = [6, 5, 4, 3, 2, 1];
//    printOddEvenIndices(A);

// Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], 

// function printCustomOrder(arr) {
//      let n = arr.length;
//      let i = 0, j = n - 1;
     
//      while (i <= j) {
//        if (i < n) {
//          console.log(arr[i]);
//          i++;
//        }
//        if (j >= i) {
//          console.log(arr[j]);
//          j--;
//        }
//      }
//    }
//    let A = [1, 2, 3, 4, 5, 6, 7, 8];
//    printCustomOrder(A);
// Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
// function rangeOutSum(arr, K, L) {
//      if (K < 0 || L >= arr.length || K > L) {
//          return null; 
//      }
//      let sum = 0;
//      for (let i = 0; i < arr.length; i++) {
//          if (i < K || i > L) {
//              sum += arr[i];
//          }
//      }
//      return sum;
//  }
//  const arr = [3, 7, 1, 9, 2, 5, 8, 6];
//  const K = 2, L = 5;
//  console.log(rangeOutSum(arr, K, L)); 
 
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]
// function separateTruthyFalsy(arr) {
//      let truthy = arr.filter(item => Boolean(item));
//      let falsy = arr.filter(item => !Boolean(item));
//      return { truthy, falsy };
//  }
//  const inputArr = [10, false, "", "Abdulaziz", null];
//  const { truthy, falsy } = separateTruthyFalsy(inputArr);
//  console.log("Truthy:", truthy); 
//  console.log("Falsy:", falsy); 

// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.
// function getOddMin(arr) {
//      if (!arr || arr.length === 0) {
//          return null; // Juft indeksli elementlar mavjud emas
//      }
//      let min_value = Infinity;
//      for (let i = 0; i < arr.length; i += 2) { // Faqat juft indekslarni tekshiramiz
//          min_value = Math.min(min_value, arr[i]);
//      }
//      return min_value;
//  }
//  const arr = [3, 7, 1, 9, 2, 5, 8, 6];
//  console.log(getOddMin(arr)); 
 
// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.
// function getEvenMax(arr) {
//      if (!arr || arr.length < 2) {
//          return null; 
//      }
//      let max_value = -Infinity;
//      for (let i = 1; i < arr.length; i += 2) { // Faqat toq indekslarni tekshiramiz
//          max_value = Math.max(max_value, arr[i]);
//      }
//      return max_value;
//  }
//  const arr = [3, 7, 1, 9, 2, 5, 8, 6];
//  console.log(getEvenMax(arr)); 
// Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
// function findLastLocalMaxIndex(arr) {
//      let lastIndex = -1;
 
//      for (let i = 1; i < arr.length - 1; i++) {
//          if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//              lastIndex = i;
//          }
//      }
//      return lastIndex;
//  }
//  let arr = [3, 7, 1, 8, 5, 6, 2, 4];
//  let lastLocalMaxIndex = findLastLocalMaxIndex(arr);
//  console.log(`Oxirgi lokal maksimum elementi indeksi: ${lastLocalMaxIndex}`);
// Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// function findClosestNumber(arr, R) {
//      let closest = arr[0];
//      let minDiff = Math.abs(arr[0] - R);
//      for (let i = 1; i < arr.length; i++) {
//          let diff = Math.abs(arr[i] - R);
//          if (diff < minDiff) {
//              minDiff = diff;
//              closest = arr[i];
//          }
//      }
//      return closest;
//  }
//  let arr = [3, 8, 15, 22, 27, 30];
//  let R = 20;
//  let closestNumber = findClosestNumber(arr, R);
//  console.log(`R (${R}) ga eng yaqin son: ${closestNumber}`);
// Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.

// function findMaxSumPair(arr) {
//     let maxSum = -Infinity;
//     let maxPair = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         let sum = arr[i] + arr[i + 1];
//         if (sum > maxSum) {
//             maxSum = sum;
//             maxPair = [arr[i], arr[i + 1]];
//         }
//     }
//     return maxPair;
// }
// let arr = [3, 5, 7, 2, 8, 1, 4];
// let pair = findMaxSumPair(arr);
// console.log(`Yig'indisi eng katta bo'lgan qo'shni elementlar: ${pair[0]} va ${pair[1]}`);
// Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.

// function findDuplicate(arr) {
//     let seen = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (seen[arr[i]] !== undefined) {
//             return [seen[arr[i]], i]; 
//         }
//         seen[arr[i]] = i;
//     }
// }
// let arr = [3, 5, 7, 2, 5, 9, 8];
// let indices = findDuplicate(arr);
// console.log(`Bir xil qiymatli elementlarning indekslari: ${indices[0]}, ${indices[1]}`);
// array 19
// function engKoPqatnashganElement(a) {
//      if (a.length === 0) {
//        console.log("Massiv bo'sh");
//        return;
//      }
//      let elementCount = {};  
//      let maxElement = a[0]; 
//      let maxCount = 1;
//      for (let i = 0; i < a.length; i++) {
//        let element = a[i];
//        elementCount[element] = (elementCount[element] || 0) + 1;
//        if (elementCount[element] > maxCount) {
//          maxCount = elementCount[element];
//          maxElement = element;
//        }
//      }
//      let maxElements = Object.keys(elementCount).filter(key => elementCount[key] === maxCount);
   
//      console.log("Eng ko'p qatnashgan element(lar):", maxElements);
//      console.log("Elementning soni:", maxCount);
//    }
//    let a = [3, 5, 2, 3, 5, 3, 7, 8, 5, 5];
//    engKoPqatnashganElement(a);

// Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.

// function juftElementlarMassivi(a) {
//      let b = [];  // Juft elementlar massivini saqlash uchun
//      for (let i = 0; i < a.length; i++) {
//        if (a[i] % 2 === 0) {  // Agar element juft bo'lsa
//          b.push(a[i]);
//        }
//      }
//      console.log("b massivining elementlari:", b);
//      console.log("b massivining uzunligi:", b.length);
//    }
//    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//    juftElementlarMassivi(a);
// Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.
// function increaseByK(arr, k) {
//      return arr.map(num => num + k);
//  }
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//  let k = 3;
//  console.log(increaseByK(arr, k));
 
// Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.
// function swapHalves(arr) {
//      let n = arr.length;
//      if (n % 2 !== 0) {
//          throw new Error("Massiv uzunligi juft bo'lishi kerak");
//      }
//      let half = n / 2;
//      for (let i = 0; i < half; i++) {
//          [arr[i], arr[i + half]] = [arr[i + half], arr[i]];
//      }
//      return arr;
//  }
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//  console.log(swapHalves(arr));
// Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)
// function reverseArray(arr) {
//      let left = 0, right = arr.length - 1;
//      while (left < right) {
//          [arr[left], arr[right]] = [arr[right], arr[left]];
//          left++;
//          right--;
//      }
//      return arr;
//  }
//  let arr = [3, 7, 2, 9, 4, 6, 1, 5, 8];
//  console.log(reverseArray(arr)); 
// Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
// function replaceBetweenMinMax(arr) {
//      if (!arr.length) return arr;
//      let minVal = Math.min(...arr);
//      let maxVal = Math.max(...arr);
//      let minIndex = arr.indexOf(minVal);
//      let maxIndex = arr.indexOf(maxVal);
//      if (minIndex > maxIndex) {
//          [minIndex, maxIndex] = [maxIndex, minIndex];
//      }
//      for (let i = minIndex + 1; i < maxIndex; i++) {
//          arr[i] = 0;
//      }
//      return arr;
//  }
//  let arr = [3, 7, 2, 9, 4, 6, 1, 5, 8];
//  console.log(replaceBetweenMinMax(arr));
// Array25. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.
// function searchAllElements(arr, k) {
//      let indices = [];
//      arr.forEach((value, index) => {
//          if (value === k) {
//              indices.push(index);
//          }
//      });
//      return indices;
//  }
//  function getElementsOneTime(arr) {
//      let counts = {};
//      arr.forEach(value => {
//          counts[value] = (counts[value] || 0) + 1;
//      });
//      return arr.filter(value => counts[value] === 1);
//  }
//  function removeDuplicateNeighbors(arr) {
//      return arr.filter((value, index) => index === 0 || value !== arr[index - 1]);
//  }
//  function removeElementsInRange(arr, k, m) {
//      if (k >= 0 && m < arr.length && k < m) {
//          arr.splice(k, m - k + 1);
//      }
//      return { length: arr.length, array: arr };
//  }
//  function shiftLeft(arr) {
//      if (arr.length > 1) {
//          let firstElement = arr.shift();
//          arr.push(firstElement);
//      }
//      return arr;
//  }
//  let arr = [1, 5, 6, 1, 5, 7, 2];
//  console.log(getElementsOneTime(arr)); 
//  console.log(removeDuplicateNeighbors([1, 1, 2, 2, 3, 3, 3, 4, 4, 5])); 
//  console.log(removeElementsInRange([1, 2, 3, 4, 5, 6, 7, 8], 2, 5)); 
//  console.log(shiftLeft([1, 2, 3, 4, 5])); 
 
// Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
// function searchAllElements(arr, k) {
//      let indices = [];
//      arr.forEach((value, index) => {
//          if (value === k) {
//              indices.push(index);
//          }
//      });
//      return indices;
//  }
//  function getElementsOneTime(arr) {
//      let counts = {};
//      arr.forEach(value => {
//          counts[value] = (counts[value] || 0) + 1;
//      });
//      return arr.filter(value => counts[value] === 1);
//  }
//  function removeDuplicateNeighbors(arr) {
//      return arr.filter((value, index) => index === 0 || value !== arr[index - 1]);
//  }
//  function removeElementsInRange(arr, k, m) {
//      if (k >= 0 && m < arr.length && k < m) {
//          arr.splice(k, m - k + 1);
//      }
//      return { length: arr.length, array: arr };
//  }
//  let arr = [1, 5, 6, 1, 5, 7, 2];
//  console.log(getElementsOneTime(arr)); // Natija: [6, 7, 2]
//  console.log(removeDuplicateNeighbors([1, 1, 2, 2, 3, 3, 3, 4, 4, 5])); 
//  console.log(removeElementsInRange([1, 2, 3, 4, 5, 6, 7, 8], 2, 5)); 
// Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
// function searchAllElements(arr, k) {
//      let indices = [];
//      arr.forEach((value, index) => {
//          if (value === k) {
//              indices.push(index);
//          }
//      });
//      return indices;
//  }
//  function getElementsOneTime(arr) {
//      let counts = {};
//      arr.forEach(value => {
//          counts[value] = (counts[value] || 0) + 1;
//      });
//      return arr.filter(value => counts[value] === 1);
//  }
//  function removeDuplicateNeighbors(arr) {
//      return arr.filter((value, index) => index === 0 || value !== arr[index - 1]);
//  }
//  let arr = [1, 5, 6, 1, 5, 7, 2];
//  console.log(getElementsOneTime(arr));
//  console.log(removeDuplicateNeighbors([1, 1, 2, 2, 3, 3, 3, 4, 4, 5])); 
// Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

// function searchAllElements(arr, k) {
//      let indices = [];
//      arr.forEach((value, index) => {
//          if (value === k) {
//              indices.push(index);
//          }
//      });
//      return indices;
//  }
//  function getElementsOneTime(arr) {
//      let counts = {};
//      arr.forEach(value => {
//          counts[value] = (counts[value] || 0) + 1;
//      });
//      return arr.filter(value => counts[value] === 1);
//  }
//  let arr = [1, 5, 6, 1, 5, 7, 2];
//  console.log(getElementsOneTime(arr));

//30 arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !
// function searchAllElements(arr, k) {
//      let indices = [];
//      arr.forEach((value, index) => {
//          if (value === k) {
//              indices.push(index);
//          }
//      });
//      return indices;
//  }
//  let arr = [1, 3, 7, 8, 7, 5, 6, 7];
//  let k = 7;
//  console.log(searchAllElements(arr, k));

 
   
   

 

 
