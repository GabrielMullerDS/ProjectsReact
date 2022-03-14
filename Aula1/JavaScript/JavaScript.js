//querySelector varre o html procurando o id "root"
//cria uma variável pra receber a div
const container = document.querySelector("#root");
//cria um componente React de h1
const element = React.createElement("h1", {id: "meuId"}, "Primeiro elemento react");
//exibe o componente React na div
ReactDOM.render(element, container);