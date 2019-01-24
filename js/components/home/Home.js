class Home extends React.Component {
  state = {
    isLoading: true,
    rooms: []
  };

  componentDidMount() {
    $.ajax({
      url: `${urls.api}/rooms`,
      type: 'GET',
      headers: {
        "Authorization": `Bearer ${getToken()}`
      },
      success: result => this.setState({rooms: result, isLoading: false}),
      error: () => alert('Вы не авторизованы')
    });
  }


  render() {
    return <div className="container">
      <div className="row">
        {this.state.isLoading && <React.Fragment>
          <div style={{paddingTop:"100%", position:"relative"}}>
            <iframe src="https://gifer.com/embed/U4Ai"
                    width="100%"
                    height="75%"
                    style={{position:"absolute", top:0, left:0}}
                    frameBorder="0"
                    allowFullScreen/>
          </div>
        </React.Fragment>}
        {!!this.state.rooms.length && this.state.rooms.map(room =>
          <a key={room.id} href="#">
            <div className="item col-xs-6 col-sm-3 col-md-2 col-lg-2">
              <div className="item-name">{room.name}</div>
              <img className="item-image"
                   src="https://auto.mail.ru/image/215459-f82c28ad4edc72eb6ce5cc488b957486/1000x0/"
                   alt={room.name}/>
            </div>
          </a>
        )}
      </div>
    </div>
  }
}