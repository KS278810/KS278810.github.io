// 要素を取得
const symbolInput = document.getElementById('symbol');
const priceDisplay = document.getElementById('price');
const watchButton = document.querySelector('button');

// 株価シミュレーションの初期値
let currentPrice = 100.00;
let intervalId; // インターバルIDを管理する変数

// 株価をランダムに更新する関数
function simulateStockPrice() {
    // 現在の価格を基にランダムな変動を追加
    const fluctuation = (Math.random() - 0.5) * 2; // -1 から +1 までのランダムな値
    currentPrice += fluctuation;
    displayMessage(`$${currentPrice.toFixed(2)}`, 'success');
}

// メッセージを表示する関数
function displayMessage(message, status) {
    priceDisplay.innerText = message;
    priceDisplay.className = ''; // クラスをリセット
    priceDisplay.classList.add(status);
}

// ボタンのクリックイベント
watchButton.addEventListener('click', () => {
    const symbol = symbolInput.value.trim().toUpperCase();

    // 入力が空の場合の処理
    if (!symbol) {
        displayMessage('Please enter a stock symbol', 'error');
        return;
    }

    // インターバルが既に動いている場合は停止してリセット
    if (intervalId) {
        clearInterval(intervalId);
    }

    // 初期メッセージと初期価格の設定
    displayMessage('Loading...', 'loading'); // 読み込み中の表示
    currentPrice = 100.00; // 初期価格にリセット
    simulateStockPrice(); // 最初の価格表示

    // 一定時間ごとに価格を更新
    intervalId = setInterval(simulateStockPrice, 2000); // 2秒ごとに更新
});
