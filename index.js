function countVowelConsonant() {
  const inputString = document.getElementById('in1').value.toLowerCase();
  let vowelCount = 0;
  let consonantCount = 0;

  for (const char of inputString) {
      if ('aeiou'.includes(char)) {
          vowelCount++;
      } else if ('abcdefghijklmnopqrstuvwxyz'.includes(char)) {
          consonantCount++;
      }
  }

  const result = `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
  document.getElementById('result-1').textContent = result;
}

  function checkPalindrome() {
    const inputString = document.getElementById('in2').value;
    const reversedString = inputString.split('').reverse().join('');
  
    if (inputString === reversedString) {
      document.getElementById('result-2').textContent = `${inputString} is a palindrome`;
    } else {
      document.getElementById('result-2').textContent = `${inputString} is not a palindrome`;
    }
  }
  function calculateSubTotal() {
    
    const subtotalElement = document.getElementById('billAmount');
    const tipPercentageElement = document.getElementById('tipPercentage');
    
  
    const subtotal = parseFloat(subtotalElement.value);
    const tipPercentage = parseFloat(tipPercentageElement.value);
  
    const total= subtotal + (subtotal*tipPercentage) / 100;
    
  
    document.getElementById('result-3').textContent = `Total: $${total}`;
  }
  