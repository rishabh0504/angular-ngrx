export const CCValidation = {
    cardNumber: '^[0-9]{16}$',
    cardHolder: '^[a-zA-Z_ ]*$',
    expiry: '.*',
    cvv: '^[0-9]{3}$',
    amount: '^[0-9]+(?:\.[0-9]+)?$'
}