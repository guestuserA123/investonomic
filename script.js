function calculateBrokerage() {
    const buyAmount = parseFloat(document.getElementById('buyAmount').value);
    const sellAmount = parseFloat(document.getElementById('sellAmount').value);
    const numShares = parseInt(document.getElementById('numShares').value);
    const brokerageApp = parseFloat(document.getElementById('brokerageApp').value);
    const currency = document.querySelector('input[name="currency"]:checked').value;

    if (isNaN(buyAmount) || isNaN(sellAmount) || isNaN(numShares)) {
        alert('Please enter valid numbers.');
        return;
    }

    let totalAmount;
    if (currency === 'rupees') {
        totalAmount = (buyAmount * numShares) + (sellAmount * numShares);
    } else {
        // Assuming 1 Dollar = 83.5 Rupees for conversion
        totalAmount = ((buyAmount * numShares) + (sellAmount * numShares)) / 83.5;
    }

    const brokerageAmount = totalAmount * (brokerageApp / 100);

    if (currency === 'rupees') {
        document.getElementById('result').innerHTML = `Brokerage Amount: ₹${brokerageAmount.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById('result').innerHTML = `Brokerage Amount: $${brokerageAmount.toFixed(2)}<br>Total Amount: $${totalAmount.toFixed(2)}`;
    }
}
