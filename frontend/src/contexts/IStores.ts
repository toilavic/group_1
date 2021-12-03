export default interface IStore {
    id: string,
    name: String,
    address: String,
    rate: Array<Number>,
    price: Number,
    opentime: Date,
    contact_number: String,
    description: String,
    discount_rate: Number,
    instagram: String,
    createAt: Date,
    updateAt: Date,
    location: any,
    rateArv?: Number
}