export default function initFetchBitcoin() {
  fetch("https://api.blockchain.com/ticker")
    .then((res) => res.json())
    .then((json) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / json.BRL.buy).toFixed(4);
    })
    .catch((erro) => {
      console.log("Erro", erro);
    });
}
