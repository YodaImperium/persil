const e = React.createElement;


// Teilnehmer Button

let jsonData = {
    eingabe: 'test'
}

class Button extends React.Component {

     cock() {
      //https://ptsv2.com/t/r4qqa-1667579801/post
        fetch('http://127.0.0.1:1337/post', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '127.0.0.1'
            },
            body: JSON.stringify(jsonData)
        }).then(() => {
          //open('Erster.html', '_self')
        })
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