let items = [
    { id: 1, name: 'Blusa', isAvailable: true },
    { id: 2, name: 'Calça', isAvailable: false },
    { id: 3, name: 'Bermuda', isAvailable: true }
  ];
  
  // Condição: alterar a disponibilidade da 'Calça'
  const itemToUpdate = items.find(item => item.name === 'Calça');
  
  if (itemToUpdate) {
    itemToUpdate.isAvailable = true; // Modificando a propriedade
    console.log('Item modificado:', itemToUpdate);
  } else {
    console.log('Item não encontrado!');
  }
  
  console.log(items); // Exibe o vetor com a modificação
  