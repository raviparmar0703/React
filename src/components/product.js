export default function Product(){
    // const products =["leptop","mobile","TV","modem"]
    const products =[{id:1,"name":"Laptop","price":200},
    {id:2,"name":"Mobile","price":300},
    {id:3,"name":"Modem","price":400},
    {id:4,"name":"Computer","price":500},
    ]
    
    
    return(
        <div >{products.map((dis)=>(
            <h3>{dis}</h3>
        ))}
        </div>
    )
}