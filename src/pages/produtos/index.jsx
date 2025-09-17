import{useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {

    const [pizzas, setPizzas] = useState([])

    axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
    .then(response=>{
        console.log(response.data)
    })
    .catch(errp=>{response.data})

    
    // Iteração da lista de pizzas - pizza a pizza (um a um)

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
