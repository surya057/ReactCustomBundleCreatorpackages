const divStyle = {
    color: 'blue',
    backgroundImage: 'url(../assets/hero_desktop_1920x600_2.jpg)',
  };

const JumbotronConst = () => (
<div className="jumbotron">
    <div className="container-fluid">
    <h1 className="display-4">Welcome to BT</h1>
    <p className="lead">Get more from your broadband this Black Friday</p>
    <hr className="my-4"/>
    <p>Now's the time to renew or upgrade to a package that suits you. And most broadband upgrades don’t need an engineer visit.</p>
    <p> All TV packages half price for three months</p>
    <p className="lead">
      <a  className="bt-color btn btn-lg" href="/loginForm" role="button">Log in for your deals</a>
    </p>
    </div>
</div>
);

export default JumbotronConst;