const e = React.createElement;


// Teilnehmer Button

let jsonData = {
    "users": [
        {
            "name": "alan", 
            "age": 23,
            "username": "aturing"
        },
        {
            "name": "john", 
            "age": 29,
            "username": "__john__"
        }
    ]
}

class Button extends React.Component {

     cock() {
        fetch('https://ptsv2.com/t/alelelelale/post', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(jsonData)
        })
    }

    render() {
      return (
        <button className="bbutton" onClick={this.cock}>
            CoCK
        </button>
      );
    }
}

const domContainer = document.querySelector('#Teilnehmer-Button');
const root = ReactDOM.createRoot(domContainer);

root.render(e(Button));