// APIの設定
const apiKey = 'YOUR_API_KEY'; // ここにAPIキーを入力してください
const apiUrl = symbol => `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${apiKey}`;

// 要素を取得
const symbolInput = document.getElementById('symbol');
const priceDisplay = document.getElementById('price');
const watchButton = document.querySelector('button');

// 株価を取得する関数
async function fetchStockPrice() {
    const symbol = symbolInput.value.trim().toUpperCase();

    // 入力が空の場合の処理
    if (!symbol) {
        displayMessage('Please enter a stock symbol', 'error');
        return;
    }

    displayMessage('Loading...', 'loading'); // 読み込み中の表示

    try {
        const response = await fetch(apiUrl(symbol));
        const data = await response.json();

        // APIレスポンスが存在しない場合の処理
        if (!data || data.length === 0) {
            displayMessage('Stock symbol not found', 'error');
            return;
        }

        const price = data[0].price;
        displayMessage(`$${price.toFixed(2)}`, 'success');
    } catch (error) {
        console.error("Error fetching stock price:", error);
        displayMessage('Error fetching data', 'error');
    }
}

// メッセージを表示する関数
function displayMessage(message, status) {
    priceDisplay.innerText = message;
    priceDisplay.className = ''; // クラスをリセット
    priceDisplay.classList.add(status);
}

// ボタンのクリックイベント
watch
