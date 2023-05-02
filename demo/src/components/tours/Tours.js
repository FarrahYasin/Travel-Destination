export default function Tours(props) {
    return(
<div>
{props.d1.map(item =>{
return(
<div>
<p>{item.name}</p>
<img src = {item.image} alt={item.name}/>
</div>
)
}
)
}
</div>

    )
}
