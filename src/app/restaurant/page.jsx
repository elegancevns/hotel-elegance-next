import React from 'react'

export default function RestaurantPage() {
    return (
        <>
            {/* Breadcrumb */}
            <section className="section-breadcrumb">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h2>Restaurant</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rx-banner-breadcrumb">
                            <div className="container">
                                <div className="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Menu */}
            <section className="section-menu padding-t-100 padding-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="rx-banner text-center rx-banner-effects">
                                <p>
                                    <img
                                        src="assets/img/banner/left-shape.svg"
                                        alt="banner-left-shape"
                                        className="svg-img left-side"
                                    />
                                    Our Menu
                                    <img
                                        src="assets/img/banner/right-shape.svg"
                                        alt="banner-right-shape"
                                        className="svg-img right-side"
                                    />
                                </p>
                                <h4>
                                    Delicious <span>Dishes</span>
                                </h4>
                            </div>
                        </div>
                        <div
                            className="col-12"
                            data-aos="fade-up"
                            data-aos-duration={1000}
                            data-aos-delay={200}
                        >
                            <div className="rx-menu-tabs">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            type="button"
                                            className="nav-link active"
                                            id="starters-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#starters"
                                            role="tab"
                                            aria-controls="starters"
                                            aria-selected="true"
                                        >
                                            Starters
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            type="button"
                                            className="nav-link"
                                            id="breakfast-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#breakfast"
                                            role="tab"
                                            aria-controls="breakfast"
                                            aria-selected="false"
                                        >
                                            Breakfast
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            type="button"
                                            className="nav-link"
                                            id="lunch-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#lunch"
                                            role="tab"
                                            aria-controls="lunch"
                                            aria-selected="false"
                                        >
                                            Lunch
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            type="button"
                                            className="nav-link"
                                            id="dinner-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#dinner"
                                            role="tab"
                                            aria-controls="dinner"
                                            aria-selected="false"
                                        >
                                            Dinner
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content rx-menutab">
                                <div
                                    className="tab-pane fade show active"
                                    id="starters"
                                    role="tabpanel"
                                    aria-labelledby="starters-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-lg-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                <div className="inner-menu active-menu">
                                                    <div className="sub-contact">
                                                        <h5>Vegetable spring rolls</h5>
                                                        <p>
                                                            A crispy and famous vegetarian starter filled with a
                                                            mix.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$60</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Mozzarella Sticks</h5>
                                                        <p>
                                                            Fried mozzarella cheese served with marinara sauce.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$30</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Spinach and Artichoke Dip</h5>
                                                        <p>A creamy dip made with tortilla chips or bread.</p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$45</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Nachos</h5>
                                                        <p>Tortilla chips topped with sometimes ground beef.</p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$40</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Stuffed Mushrooms</h5>
                                                        <p>Mushrooms filled with often baked until golden.</p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="breakfast"
                                    role="tabpanel"
                                    aria-labelledby="breakfast-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-lg-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                <div className="inner-menu active-menu">
                                                    <div className="sub-contact">
                                                        <h5>Breakfast Burrito</h5>
                                                        <p>
                                                            A large tortilla filled with scrambled cheese or
                                                            potatoes.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$10</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Hash Browns</h5>
                                                        <p>Crisp romaine, parmesan, and Caesar dressing</p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$20</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>French Toast</h5>
                                                        <p>
                                                            Bread soaked in an egg mixture, then fried and served.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$45</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Waffles Bread</h5>
                                                        <p>
                                                            Crisp and golden waffles, typically served with
                                                            butter, syrup.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$35</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Cinnamon Rolls</h5>
                                                        <p>
                                                            Sweet rolls made with cinnamon and sugar, often
                                                            topped.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="lunch"
                                    role="tabpanel"
                                    aria-labelledby="lunch-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-lg-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                <div className="inner-menu active-menu">
                                                    <div className="sub-contact">
                                                        <h5>Avocado Sandwich</h5>
                                                        <p>
                                                            Sliced turkey, avocado, lettuce, and tomato, often
                                                            served.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Shrimp Scampi</h5>
                                                        <p>
                                                            Shrimp sautéed in garlic, butter, and white wine,
                                                            often served.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$25</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Stuffed Peppers</h5>
                                                        <p>
                                                            Bell peppers filled with rice, vegetables, and
                                                            sometimes.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$45</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Zucchini Noodles (Zoodles)</h5>
                                                        <p>
                                                            Spiralized zucchini served like pasta, often with a
                                                            light sauce.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$40</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Portobello Mushroom Burger</h5>
                                                        <p>
                                                            A large grilled portobello mushroom cap served as a
                                                            burger.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="dinner"
                                    role="tabpanel"
                                    aria-labelledby="dinner-tab"
                                >
                                    <div className="row mb-minus-24 rx-relative">
                                        <div className="col-lg-6 col-12 mb-24">
                                            <div className="rx-menu-tabs-contact">
                                                <div className="inner-menu active-menu">
                                                    <div className="sub-contact">
                                                        <h5>Risotto alla Milanese</h5>
                                                        <p>
                                                            A creamy rice dish made with saffron, giving it a
                                                            distinctive.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Lasagna al Forno</h5>
                                                        <p>
                                                            Layers of pasta, Bolognese sauce, béchamel, and
                                                            cheese, baked.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$25</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Yorkshire Pudding</h5>
                                                        <p>
                                                            A traditional Sunday roast with roasted beef, served.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$45</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Beef Stroganoff</h5>
                                                        <p>
                                                            Sautéed beef strips served in a creamy mushroom sauce.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$40</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inner-menu">
                                                    <div className="sub-contact">
                                                        <h5>Steak Frites</h5>
                                                        <p>
                                                            Grilled steak served with French fries, often with a
                                                            side.
                                                        </p>
                                                    </div>
                                                    <div className="sub-prices">
                                                        <h4>$15</h4>
                                                    </div>
                                                    <div className="rx-side-menu-image">
                                                        <div className="row mb-minus-24">
                                                            <div className="col-lg-6 col-12 mb-24">
                                                                <div className="inner-img radius-one">
                                                                    <img src="assets/img/menu/1.jpg" alt="menu-1" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-two">
                                                                    <img src="assets/img/menu/2.jpg" alt="menu-2" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-three">
                                                                    <img src="assets/img/menu/3.jpg" alt="menu-3" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-12 mb-24 d-none-991">
                                                                <div className="inner-img radius-four">
                                                                    <img src="assets/img/menu/4.jpg" alt="menu-4" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
