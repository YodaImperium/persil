const e = React.createElement;

class eingabe_button extends React.Component {
    send() {
          fetch('https://ptsv2.com/t/r4qqa-1667579801/post', {
              method: "POST",
              mode: 'cors',
             body: JSON.stringify()
          })
      }  

      render(){
         return (
             <button className="bbbutton" onclick={this.send}>Eingabe</button>
          )
      }
  };

const domContainer = document.querySelector('#eingabe_button');
const root = ReactDOM.createRoot(domContainer);

root.render(e(eingabe_button));