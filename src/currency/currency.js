export function switchCurrency(currency) {
    switch(currency) {
        case 'USD': return '$'
        case 'GRN': return '₴'
        case 'GBP': return '£'
        case 'PLN': return 'zł'
        case 'EUR': return '€'
        default: return '$'
    }
}