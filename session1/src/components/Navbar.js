function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg   bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-3" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
};

export default Navbar;
