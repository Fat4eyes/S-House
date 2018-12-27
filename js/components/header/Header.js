class Header extends React.Component {
    action = {
        b1: () => ReactDOM.render(<div>dssdssdds</div>, document.getElementById('page')),
        b2: () => ReactDOM.render(<div>121112</div>, document.getElementById('page'))
    };

    render = () => <div>
        <button onClick={b1}>button1</button>
        <button onClick={b2}>button1</button>
        <button>button1</button>
        <button>button1</button>
        <button>button1</button>
    </div>;
}