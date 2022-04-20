module.exports = mongoose => {
    const Products = mongoose.model(
        "products",
        mongoose.Schema(
            {
                title: String,
                description: String,
                price: Number,
                published: Boolean,
                img: String
            },
            {timestamps: true}
        )
    );
    return Products;
}