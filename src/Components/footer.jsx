const Footer = () => {
  return (
    <div>
      <footer class="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
        <div class="col-md-4 d-flex">
          <span class="mb-3 mb-md-0 text-muted">&copy; 2024 FIAP, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#twitter" />
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#instagram" />
              </svg>
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <svg class="bi" width="24" height="24">
                <use xlink:href="#facebook" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
