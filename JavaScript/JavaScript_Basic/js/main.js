'use strict';

{ 
  function update() {
    document.getElementById('target').textContent = 'Changed!';
  }
  
  setTimeout(update, 1000)
}