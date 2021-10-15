const character = {
    name: 'Simon',
    getCharacter() {
      return {function(){this.name}};
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;