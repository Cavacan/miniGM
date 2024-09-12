const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// フルデッキを初期化する関数
function initializeDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ suit, rank });
    }
  }
  return deck;
}

// デッキからカードをランダムに選んでデッキから削除する関数
function drawRandomCard(deck) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0]; // デッキからカードを削除
  return card;
}

// 画像パスを生成する関数
function getCardImagePath(card) {
  return `/assets/${card.suit}_${card.rank}.png`;
}

// カードを画面に表示する関数
function displayHand(cards) {
  const handElement = document.getElementById('playerHand');
  handElement.innerHTML = ''; // 手札をリセット
  cards.forEach(card => {
    const img = document.createElement('img');
    img.src = getCardImagePath(card);
    img.alt = `${card.suit}の${card.rank}`;
    handElement.appendChild(img);
  });
}

// カードを配布する関数
function dealCards() {
  const deck = initializeDeck(); // デッキを初期化
  const playerHand = [];
  
  // プレイヤーに2枚のカードを配る
  for (let i = 0; i < 2; i++) {
    playerHand.push(drawRandomCard(deck));
  }
  
  displayHand(playerHand); // プレイヤーの手札を表示
}

// ボタンクリックでカードを配る
document.getElementById('dealCardsButton').addEventListener('click', dealCards);