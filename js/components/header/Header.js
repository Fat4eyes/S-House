const renderPage = page => ReactDOM.render(page, document.getElementById('page'));

const Header = () => <div className="row header">
    <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1 header__logo">
        <div className="header__logo-text">S-House</div>
    </div>
    <div className="col-xs-6 col-sm-5 col-md-5 col-lg-5 header__menu">
        <ul className="header__menu-list">
            <li className="header__menu-item">
                <a href="#"
                   className="header__menu-item-link"
                   onClick={() => renderPage(<React.Fragment/>)}
                >Главная</a>
            </li>
            <li className="header__menu-item">
                <a href="#"
                   className="header__menu-item-link"
                   onClick={() => renderPage(<Auth/>)}
                >Авторизация</a>
            </li>
            <li className="header__menu-item">
                <a href="#"
                   className="header__menu-item-link"
                   onClick={() => renderPage(<React.Fragment/>)}
                >Устройства и Датчики</a>
            </li>
        </ul>
    </div>
</div>;