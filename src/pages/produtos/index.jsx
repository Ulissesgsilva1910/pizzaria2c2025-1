const Produtos = () => {

<<<<<<< HEAD
    const pizzas = [
        'Pizza Mussarela',
        'Pizza Calabreza',
        'Pizza Portuguesa',
        'Pizza Quatro Queijos'
    ]

=======
    // Objeto da lista de pizzas
    const pizzas = [
        'Pizza Muçarela', 
        'Pizza Calabreza',
        'Pizza Portuguesa', 'Pizza Baiana', 'Pizza Frita'
    ]
    // Iteração da lista de pizzas - pizza a pizza (um a um)
>>>>>>> a07790cb35f4a9ef7bec4c459944b92ffd6ae657
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
