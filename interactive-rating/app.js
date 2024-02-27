let selection = '5';

updateSelection = (value) => {
    document.getElementById(selection).style.backgroundColor = 'hsl(213, 19%, 25%)';
    document.getElementById(selection).style.color = 'hsl(217, 12%, 63%)';
    document.getElementById(value).style.backgroundColor = 'hsl(217, 12%, 63%)';
    document.getElementById(value).style.color = 'hsl(0, 0%, 100%)';
    selection = value;
    document.getElementById('submit').disabled = false;
    document.getElementById("user-selection").innerHTML = `You selected ${selection} out of 5`;
}

switchCard = () => {
    document.getElementById('thank-you').style.display = 'flex';
    document.getElementById('rating').style.display = 'none';
}