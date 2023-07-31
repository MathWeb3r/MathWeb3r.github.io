class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid navbar-mod"> 
                    <a href="./index.html" class="navbar-brand">
                        <img src="./_img/goestech_nav_logo.png" width=200/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    
                    <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item nav-item-deco px-3">
                            <a class="nav-link active text-body" aria-current="page" href="./index.html">Home</a>
                        </li>
                        <li class="nav-item nav-item-deco px-3">
                            <a class="nav-link active text-body" aria-current="page" href="./_pages/quem_somos.html">Quem somos</a>
                        </li>
                        <li class="nav-item dropdown px-3">
                            <a class="nav-link dropdown-toggle text-body" href="./_pages/servico.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Serviços
                            </a>
                            <ul class="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item text-body" href="./_pages/servico.html">Levantamento de Defeitos</a></li>
                            <li><a class="dropdown-item text-body" href="./_pages/servico.html">Avaliação de FWD</a></li>
                            <li><a class="dropdown-item text-body" href="./_pages/servico.html">Estaqueamento</a></li>
                            <li><a class="dropdown-item text-body" href="./_pages/servico.html">Ensaio de Atrito</a></li>
                            <li><a class="dropdown-item text-body" href="./_pages/servico.html">Pavimento Rígido</a></li>
                            </ul>
                        </li>
                        <li class="nav-item nav-item-deco px-3">
                            <a class="nav-link text-body" href="./_pages/contato.html">Contato</a>
                        </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>`
    }
  }
  
customElements.define('header-custom', Header);