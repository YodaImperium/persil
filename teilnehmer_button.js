const e = React.createElement;


// Teilnehmer Button

let jsonData = {
    "metadata": [
        Date.now()
    ]
}

class Button extends React.Component {

     cock() {
        fetch('https://ptsv2.com/t/r4qqa-1667579801/post', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData)
        })
        open('Main.html')
    }

    render() {
      return (
        <button className="bbutton" onClick={this.cock}>
        </button>
      );
    }
}

const domContainer = document.querySelector('#Teilnehmer-Button');
const root = ReactDOM.createRoot(domContainer);

root.render(e(Button));