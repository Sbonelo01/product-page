export function increaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
export function decreaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    // value < 1 ? value = 1 : '';
    value--;
  }  