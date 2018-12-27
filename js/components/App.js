class App extends React.Component{
    state = {
    };
    render() {
        return <React.Fragment>
            <Header/>
            <div id='page'></div>
        </React.Fragment>
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));