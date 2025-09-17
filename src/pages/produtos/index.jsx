const Produtos = () => {

    const pizzas = [
        'Pizza Mussarela',
        'Pizza Calabreza',
        'Pizza Portuguesa',
        'Pizza Quatro Queijos'
    ]

    const listaPizzas = pizzas.map(pizza=><li>{pizza}</li>)

    return (
        <div>
            <h3>Listagem de Produtos</h3>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}

export default Produtos
