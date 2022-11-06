const e = React.createElement;

// Klasse für Namenseingabe
class eingabe_input extends React.Component {
    render() {
        return (
            <input type = "text" name="user_name"></input>
        )
    }  
}

const domContainer = document.querySelector('#eingabe_input');
const root = ReactDOM.createRoot(domContainer);

root.render(e(eingabe_input));

