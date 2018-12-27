class Auth extends React.Component {
    state = {
        login: '',
        password: '',
        token: null,
        errors: []
    };

    handleInput = ({target: {name, value}}) => this.setState({[name]: value});

    handleLogIn = () => {
        let done = ({token}) => {
            document.cookie = `token=${token}`;
            this.setState({token: token, errors: []})
        };

        let fail = ({errors}) => {
            let err = [];
            for (let key in errors) {
                err.push(errors[key].join('; '))
            }
            this.setState({errors: err});
        };

        const data = {
            login: this.state.login,
            password: this.state.password
        };

        $.ajax({
            url: 'http://www.smart-house.ru/api/login',
            data: data,
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            success: (result) => result.token
                ? done(result)
                : fail(result)
        });
    };

    render = () => {
        return <div className="row">
            <div className="col-xs-0 col-sm-1 col-md-2 col-lg-2"></div>
            <div className="form col-xs-6 col-sm-4 col-md-2 col-lg-2">
                <div className="form__form-group">
                    <div className="form__form-label">Логин:</div>
                    <div className="form__form-item">
                        <input type="text"
                               className="form__form-input"
                               name='login'
                               onChange={this.handleInput}
                               value={this.state.login}/>
                    </div>
                </div>
                <div className="form__form-group">
                    <div className="form__form-label">Пароль:</div>
                    <div className="form__form-item">
                        <input type="password"
                               className="form__form-input"
                               name='password'
                               onChange={this.handleInput}
                               value={this.state.password}/>
                    </div>
                </div>
                <div className="form__form-separator"></div>
                <div className="form__form-group">
                    <div className="form__form-item">
                        <button className="form__form-button" onClick={this.handleLogIn}>Войти</button>
                    </div>
                </div>
                <div className="form__form-group">
                    {this.state.errors && this.state.errors.length
                        ? this.state.errors.map((err, i) =>
                            <div key={i} className="errors__item errors__item_red">
                                {err}
                            </div>
                        ): <React.Fragment></React.Fragment>
                    }
                </div>
            </div>
            <div className="col-xs-0 col-sm-1 col-md-2 col-lg-2"></div>
        </div>
    }
}