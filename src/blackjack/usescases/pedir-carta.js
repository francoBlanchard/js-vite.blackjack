/**
 * Esta función me permite tomar una carta del deck
 * @param {array<String>} deck Ejemplo: ['C','D','H','S']
 * @returns {String} retorna la ultima carta del deck
 */
export const pedirCarta = (deck) => {


    if ( !deck || deck.length === 0 ) 
        throw new Error('Deck es obligatorio como arraglo de String');
    
    const carta = deck.pop();
    return carta;
}