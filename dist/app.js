var dummyData = [
  "تهران",
  "اصفحان",
  "شیراز",
  "مشهد",
  "تبریز",
  "گلستان",
  "مازندران"
];

document.addEventListener("DOMContentLoaded", function() {
  // Input element
  var inputElem = document.getElementById("myinput");

  var ourAutocomplete = new Awesomplete(inputElem, {
    minChars: 1,
    list: dummyData,
    item: function(text, input) {
      // We don't seperate matched text; So, We will not have any <mark> element
      var element = document.createElement('li');
      element.innerHTML = text;
      element.setAttribute('aria-selected', 'false');

      // Hightlight creation
      var highlightElem = document.createElement('span');
      highlightElem.className = 'highlight';
      element.appendChild(highlightElem);
      var width = 0;
      // font-size / 2
      var characterWidth = 10;
      var characterPosition = 0;
      if (text.indexOf(input) !== -1) {
        width = input.length * characterWidth;
        characterPosition = text.indexOf(input) * characterWidth - 2;
        highlightElem.setAttribute('style', 'width:' + width + 'px; right:' + characterPosition + 'px;');
      } else {
        width = 0;
        characterPosition = 0;
        highlightElem.setAttribute('style', '');
      }

      return element;
    }
  });
});