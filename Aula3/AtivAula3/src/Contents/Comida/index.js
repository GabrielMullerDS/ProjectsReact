function Comida(props){
  return(
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.desc}</p>
      <a href={props.link}>Clique para ver a receita</a>
    </div>
  );
}
export default Comida;