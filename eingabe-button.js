const e = React.createElement;
const form = document.getElementById('form');
const formData = new FormData(form);

const output = document.getElementById('output');

for (const [key,value] of formData) {
    output.textContent += `${key}: ${value}`;
}
class eingabe_button extends React.Component {
    send() {
          fetch('https://ptsv2.com/t/r4qqa-1667579801/post', {
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(output.textContent),
                window: null
          })
          open('Teilnehmer.html', '_blank')
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