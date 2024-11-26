import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const clickHandleLogout = () => {
        localStorage.removeItem("userData");
    };
    return (
        <div>
            {/*Navbar*/}
            <nav class="navbar navbar-expand-md navbar-light homenav" >
                <div class="container">
                    <Link class="navbar-brand" to="/">NetCart</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/product">Products</Link>
                            </li>
                            
                            <li class="nav-item">
                                <Link class="nav-link" to="/order">Order</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Cart</Link>
                            </li>
                           
                            <li class="nav-item">
                                <Link class="btn nav-link" to="/login">SignIn</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="btn nav-link" onClick={clickHandleLogout} to="/login">SignOut</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleIndicators" class="carousel carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"> {/* Add "active" class to the first item */}
                        <img src="https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688502.jpg?w=996&t=st=1688152791~exp=1688153391~hmac=6eb455eed7ed1bafadd0fcb1b3d4c890d3ac2ef195b2848dd3588ca6a659faf6" class="d-block w-100" alt="Slide 1" style={{ height: 800 }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?w=996" class="d-block w-100" alt="Slide 2" style={{ height: 800 }} />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/toy-shopping-trolley-with-gifts-packets_23-2147955415.jpg?w=740&t=st=1688153194~exp=1688153794~hmac=23e6be38e752542513b85b8d59bb396f4f29326bee7e0b7af8f3ffdcb7b560ff" class="d-block w-100" alt="Slide 3" style={{ height: 800 }} />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <header class="jumbotron jumbotron-fluid  herosection">
                <div class="container">
                    <h1 class="display-4">Welcome to NetCart</h1>
                    <p class="lead">Discover the best products at the best prices.</p>
                    <Link to="/product" class="btn-home btn btn-light btn-lg">Shop Now</Link>
                </div>
            </header>
            
            
            <section class="container mt-5">
                <div class="row">
                    <div class="col-md-4">
                        <div class="card mb-4 " style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 1" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 1</h5>
                                <p class="card-text">Description of Product 1.</p>
                                <Link to="/product/1" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-4 " style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 2" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 2</h5>
                                <p class="card-text">Description of Product 2.</p>
                                <Link to="/product/2" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-4" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 3</h5>
                                <p class="card-text">Description of Product 3.</p>
                                <Link to="/product/3" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 4</h5>
                                <p class="card-text">Description of Product 4.</p>
                                <Link to="/product/4" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 5</h5>
                                <p class="card-text">Description of Product 5.</p>
                                <Link to="/product/5" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 6</h5>
                                <p class="card-text">Description of Product 6.</p>
                                <Link to="/product/6" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>
                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 7</h5>
                                <p class="card-text">Description of Product 7.</p>
                                <Link to="/product/7" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>

                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 8</h5>
                                <p class="card-text">Description of Product 8.</p>
                                <Link to="/product/8" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>

                    
                    <div class="col-md-4">
                        <div class="card mb-4 shadow" style={{ background: "#FFF7D4" }}>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.IPKX1ZeXZbZuz9q0ssROvgHaEK&pid=Api&P=0&h=180" alt="Product 3" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title">Product 9</h5>
                                <p class="card-text">Description of Product 9.</p>
                                <Link to="/product/9" class="btn button-buynow">Buy Now</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <footer class=" text-white mt-5 hello" >
                <div class="container">
                    <div class="row py-4">
                        <div class="col-md-6">
                            <h4>About Us</h4>
                            <p>NetCart was founded with a simple vision - to provide customers with unique, stylish, and affordable products that enhance their lives. </p>
                        </div>
                        <div class="col-md-3">
                            <h4>Links</h4>
                            <ul class="list-unstyled">
                                <li><Link to="/" className="nav-link text-light">Home</Link></li>
                                <li><Link to="/product" className="nav-link text-light">Products</Link></li>
                                <li><Link to="#" className="nav-link text-light">Contact</Link></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h4>Contact Us</h4>
                            <Link to="/login" class="btn btn-primary">Login</Link>
                            <p>Email: netcart.info@example.com</p>
                            <p><span><i class="fa-solid fa-phone fa-bounce"></i></span> (+91) 93363-64565</p>
                        </div>
                    </div>
                </div>
                <div class="bg-secondary text-center py-2">
                    <p class="mb-0">&copy; 2023 NetCart. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;