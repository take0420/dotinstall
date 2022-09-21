'use strict';

{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    
    // targetNode.textContent = 'Dotinstall';
    
  // 動かない
    // targetNode.textContent = targetNode.data-translation;
  
  // 動く
    targetNode.textContent = targetNode.dataset.translation;

  }); 
}