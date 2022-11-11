
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
        fetch('https://ptsv2.com/t/r4qqa-1667579801/post', {
            method: "POST",
            mode: 'cors',
            body: formData, 
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