export const generateSelectAmount = (amount) => {
    return Array.from({length: amount}, (_, index) => {
        const amount = index + 1
        return (
            <option value={amount} key={amount}>
                {amount}
            </option>
        )
    })
}


 export const priceFormat = (price) => {
    const rupiahFormat = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(price)
    return rupiahFormat
  }