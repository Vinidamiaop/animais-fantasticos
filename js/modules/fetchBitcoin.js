export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
