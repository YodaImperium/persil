
const e = React.createElement;
const form = document.getElementById('form');
var formData = new FormData(form);
const output = document.getElementById('output');

for (const [key,value] of formData) {
    output.textContent += `${key}: ${value}`;
}

class eingabe_button extends React.Component {
    send() {
        formData = new FormData(form);
        // https://ptsv2.com/t/r4qqa-1667579801/post
        fetch('http://127.0.0.1:1337/post', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.get('user_name')), 
            window: null
          }).then(() => {
            console.log(formData)
            open('Teilnehmer.html', '_self')
          })
      }  

      render(){
         return (
             <button type="button" className="bbbutton" onClick={this.send}>Eingabe</button>
          )
      }
  };

const domContainer = document.querySelector('#eingabe_button');
const root = ReactDOM.createRoot(domContainer);

root.render(e(eingabe_button));