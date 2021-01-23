webpackJsonp([1,5],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsService = (function () {
    function ProductsService() {
        this.products = [
            {
                id: '1',
                categoryId: '1',
                title: 'Croissants',
                price: 0.5,
                isSpecial: true,
                imageL: 'http://www.wallpapermaiden.com/image/2016/12/23/lasagna-tomatoe-cheese-food-11072-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2016/12/23/lasagna-tomatoe-cheese-food-11072-thumb.jpg',
                desc: 'A	croissant	is	a	buttery,	flaky,	viennoiserie-pastry	named	for	its	well-known	crescent	shape.'
            },
            {
                id: '2',
                categoryId: '2',
                title: 'Pizza',
                price: 1.2,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/03/17/pizza-olive-tomato-sauce-vegetables-fast-food-food-14443-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/03/17/pizza-olive-tomato-sauce-vegetables-fast-food-food-14443-thumb.jpg',
                desc: 'Pizza	is	a	flatbread	generally	topped	with	tomato	sauce	and	cheese	and	baked	in	an	oven.'
            },
            {
                id: '3',
                categoryId: '3',
                title: 'Milk',
                price: 1.7,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/03/22/cake-desserts-food-14585-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/03/22/cake-desserts-food-14585-thumb.jpg',
                desc: 'Milk	is	a	pale	liquid	produced	by	the	mammary	glands	of	mammals'
            },
            {
                id: '4',
                categoryId: '1',
                title: 'Baguette/French	Bread',
                price: 1.5,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/03/27/meat-lemon-vegetables-food-14751-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/03/27/meat-lemon-vegetables-food-14751-thumb.jpg',
                desc: 'Great	eaten	fresh	from	oven.	Used	to	make	sub	sandwiches,	etc.'
            },
            {
                id: '5',
                categoryId: '3',
                title: 'Cream	Cheese',
                price: 2.35,
                isSpecial: false,
                imageL: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
                imageS: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
                desc: 'Cream	cheese	is	a	soft,	mild-tasting	fresh	cheese	with	a	high	fat	content.'
            },
            {
                id: '6',
                categoryId: '4',
                title: 'Pork	Tenderloin',
                price: 5.60,
                isSpecial: false,
                imageL: 'http://www.bellybytes.com/foodfacts/images/beet-greens.png',
                imageS: 'http://www.bellybytes.com/foodfacts/images/beet-greens.png',
                desc: 'The	pork	tenderloin,	in	some	countries	called	pork	fillet,	is	a	cut	of	pork.	'
            },
            {
                id: '7',
                categoryId: '4',
                title: 'Ribs,	Baby	Back',
                price: 4.85,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/01/24/cookies-chocolate-dessert-food-12468-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/01/24/cookies-chocolate-dessert-food-12468-thumb.jpg',
                desc: 'Pork	ribs	are	a	cut	of	pork	popular	in	North	American	and	Asian	cuisines.	'
            },
            {
                id: '8',
                categoryId: '4',
                title: 'Ground	Beef',
                price: 9.20,
                isSpecial: false,
                imageL: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
                imageS: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
                desc: 'Ground	beef,	beef	mince,	minced	beef,	minced	meat	is	a	ground	meat	made	of	beef	that	has	been	finely	chopped	with	a	large	knife	or	a	meat	grinder.'
            },
            {
                id: '9',
                categoryId: '5',
                title: 'Tuna',
                price: 3.45,
                isSpecial: false,
                imageL: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
                imageS: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
                desc: 'A	tuna	is	a	saltwater	finfish	that	belongs	to	the	tribe	Thunnini,	a	sub-grouping	of	the	mackerel	family	-	which	together	with	the	tunas,	also	includes	the	bonitos,	ackerels,	and	Spanish	mackerels.'
            }, {
                id: '10',
                categoryId: '5',
                title: 'Salmon',
                price: 4.55,
                isSpecial: false,
                imageL: 'http://placehold.it/1110x480',
                imageS: 'http://placehold.it/270x171',
                desc: 'Salmon	is	the	common	name	for	several	species	of	ray-finned	fish	in	the	family	Salmonidae.'
            },
            {
                id: '11',
                categoryId: '5',
                title: 'Oysters',
                price: 7.80,
                isSpecial: false,
                imageL: 'http://www.aqmeal.com/images/about/diet-food.jpg',
                imageS: 'http://www.aqmeal.com/images/about/diet-food.jpg',
                desc: 'The	word	oyster	is	used	as	a	common	name	for	a	number	of	different	families	of	saltwater	clams,	bivalve	molluscs	that	live	in	marine	or	brackish	habitats.'
            }, {
                id: '12',
                categoryId: '5',
                title: 'Scalops',
                price: 2.70,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/02/15/egg-breakfast-vegetable-bagel-food-13360-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/02/15/egg-breakfast-vegetable-bagel-food-13360-thumb.jpg',
                desc: 'Scallop	is	a	common	name	that	is	primarily	applied	to	any	one	of	numerous	species	of	saltwater	clams	or	marine	bivalve	mollusks	in	the	taxonomic	family	Pectinidae,	the	scallops.'
            },
            {
                id: '13',
                categoryId: '6',
                title: 'Banana',
                price: 1.55,
                isSpecial: false,
                imageL: 'http://www.hdfinewallpapers.com/HDWallpapers/Thumb/Food-and-Drinks/Foods_Wallpaper_Download.jpg',
                imageS: 'http://www.hdfinewallpapers.com/HDWallpapers/Thumb/Food-and-Drinks/Foods_Wallpaper_Download.jpg',
                desc: 'The	banana	is	an	edible	fruit,	botanically	a	berry,	produced	by	several	kinds	of	large	herbaceous	flowering	plants	in	the	genus	Musa.'
            },
            {
                id: '14',
                categoryId: '6',
                title: 'Cucumber',
                price: 1.05,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2016/12/24/strawberries-fruits-close-up-food-11138-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2016/12/24/strawberries-fruits-close-up-food-11138-thumb.jpg',
                desc: 'Cucumber	is	a	widely	cultivated	plant	in	the	gourd	family,	Cucurbitaceae.	'
            },
            {
                id: '15',
                categoryId: '6',
                title: 'Apple',
                price: 0.80,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/01/27/sushi-rice-japanese-food-sesame-seeds-food-12573-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/01/27/sushi-rice-japanese-food-sesame-seeds-food-12573-thumb.jpg',
                desc: 'The	apple	tree	is	a	deciduous	tree	in	the	rose	family	best	known	for	its	sweet,	pomaceous	fruit,	the	apple.'
            },
            {
                id: '16',
                categoryId: '6',
                title: 'Lemon',
                price: 3.20,
                isSpecial: false,
                imageL: 'http://www.wallpapermaiden.com/image/2017/02/03/sandwich-cheese-vegetables-meat-bread-lunch-food-12878-thumb.jpg',
                imageS: 'http://www.wallpapermaiden.com/image/2017/02/03/sandwich-cheese-vegetables-meat-bread-lunch-food-12878-thumb.jpg',
                desc: 'The	lemon	is	a	species	of	small	evergreen	tree	native	to	Asia.'
            },
            {
                id: '17',
                categoryId: '6',
                title: 'Pear',
                price: 4.25,
                isSpecial: false,
                imageL: 'http://www.greekonthestreetbaltimore.com/wp-content/uploads/2017/01/slider6-270x170.jpg',
                imageS: 'http://www.greekonthestreetbaltimore.com/wp-content/uploads/2017/01/slider6-270x170.jpg',
                desc: 'The	pear	is	any	of	several	tree	and	shrub	species	of	genus	Pyrus,	in	the	family	Rosaceae.'
            }];
    }
    ProductsService.prototype.getProducts = function () {
        return this.products;
    };
    ProductsService.prototype.getProduct = function (id) {
        return this.products.filter(function (product) { return product.id == id; })[0];
    };
    ProductsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ProductsService);
    return ProductsService;
}());
//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Category */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Categories; });
var Category = (function () {
    function Category(id, title, desc, image, link) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.link = link;
    }
    return Category;
}());
var ProductsCategories = [
    { categoryId: '0', title: 'All' },
    { categoryId: '1', title: 'Meat' },
    { categoryId: '2', title: 'SeaFood' },
    { categoryId: '3', title: 'Diary' },
    { categoryId: '4', title: 'Bakery' },
    { categoryId: '5', title: 'Fruit' }
];
var Categories = [
    new Category(1, "Meat", "find the new models of your future car", "http://www.asianfoodchannel.com/application/files/thumbnails/sidebar_feature_small/6114/9084/9271/tn-shows-comfort-food.jpg", "#"),
    new Category(2, "SeaFood", "new mobiles are shipped every day", "http://assets.epicurious.com/photos/5764583142e4a5ed66d1df6c/2:1/w_400%2Ch_200/seafood-paella.jpg", "#"),
    new Category(3, "Dairy", "choose your favourite labtop manifacturer", "http://cf.nearsay.com/sites/default/files/styles/400x200/public/content_images/bread_rolls_baked_goods.18339921.jpg?itok=phAdHmlb", "#"),
    new Category(4, "Bakery", "customise your own device with different styles and colors", "http://www.healthyfoodhouse.com/wp-content/uploads/2012/12/foods-to-boost-your-immune-system2.jpg", "#")
];
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Category = (function () {
    function Category(id, title, desc, image, link) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.image = image;
        this.link = link;
    }
    return Category;
}());
var CategoryService = (function () {
    function CategoryService() {
        this.ProductsCategories = [
            { categoryId: '0', title: 'All' },
            { categoryId: '1', title: 'Meat' },
            { categoryId: '2', title: 'SeaFood' },
            { categoryId: '3', title: 'Diary' },
            { categoryId: '4', title: 'Bakery' },
            { categoryId: '5', title: 'Fruit' }
        ];
        this.Categories = [
            new Category(1, "Meat", "find the new models of your future car", "http://www.asianfoodchannel.com/application/files/thumbnails/sidebar_feature_small/6114/9084/9271/tn-shows-comfort-food.jpg", "#"),
            new Category(2, "SeaFood", "new mobiles are shipped every day", "http://assets.epicurious.com/photos/5764583142e4a5ed66d1df6c/2:1/w_400%2Ch_200/seafood-paella.jpg", "#"),
            new Category(3, "Dairy", "choose your favourite labtop manifacturer", "http://cf.nearsay.com/sites/default/files/styles/400x200/public/content_images/bread_rolls_baked_goods.18339921.jpg?itok=phAdHmlb", "#"),
            new Category(4, "Bakery", "customise your own device with different styles and colors", "http://www.healthyfoodhouse.com/wp-content/uploads/2012/12/foods-to-boost-your-immune-system2.jpg", "#")
        ];
    }
    CategoryService.prototype.getCategoriesList = function () {
        return this.ProductsCategories;
    };
    CategoryService.prototype.getHomeCategories = function () {
        return this.Categories;
    };
    CategoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CategoryService);
    return CategoryService;
}());
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.navItems = [
            { 'title': 'Home', 'href': 'home', 'active': false },
            { 'title': 'Products', 'href': 'products', 'active': false },
            { 'title': 'CheckOut', 'href': 'checkout', 'active': false },
            { 'title': 'SignOut', 'href': 'signout', 'active': false }
        ];
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(551),
            styles: [__webpack_require__(537)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 341;


/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(477);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'let\'s start templating the e-commerce app';
        this.hideAnchor = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        //console.log(this.ChildNavbar.navItems);
        console.log("After view init", this.ChildProducts.navItems);
    };
    AppComponent.prototype.toTop = function (subtract) {
        subtract = window.scrollY / 40;
        var scrollInterval = setInterval(function () {
            var windowScroll = window.scrollY;
            if (windowScroll > 0) {
                windowScroll -= subtract;
                window.scrollTo(0, windowScroll);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 5);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_component__["a" /* NavbarComponent */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "ChildProducts", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(546),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_repeat_pipe__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_category_pipe__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_products_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_productpage_productpage_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signout_signout_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_products_list_products_list_component__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__products_products_list_product_product_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_services_category_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_services_products_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cart_cart_component__ = __webpack_require__(465);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_repeat_pipe__["a" /* RepeatPipe */],
                __WEBPACK_IMPORTED_MODULE_9__products_category_pipe__["a" /* CategoryPipe */],
                __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__products_productpage_productpage_component__["a" /* ProductpageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signout_signout_component__["a" /* SignoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__products_products_list_products_list_component__["a" /* ProductsListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__products_products_list_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__homepage_homepage_component__["a" /* HomepageComponent */] },
                    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */] },
                    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_11__products_products_component__["a" /* ProductsComponent */] },
                    { path: 'products/product/:id', component: __WEBPACK_IMPORTED_MODULE_12__products_productpage_productpage_component__["a" /* ProductpageComponent */] },
                    { path: 'signout', component: __WEBPACK_IMPORTED_MODULE_13__signout_signout_component__["a" /* SignoutComponent */] },
                    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_14__checkout_checkout_component__["a" /* CheckoutComponent */] },
                    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_19__cart_cart_component__["a" /* CartComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_17__app_services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_18__app_services_products_service__["a" /* ProductsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export Cart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Cart = (function () {
    function Cart() {
        this.count = 0;
        this.amount = 0;
        this.items = [];
    }
    return Cart;
}());
var CartComponent = (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.findItem = function (id) {
        for (var i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === id) {
                return this.cart.items[i];
            }
        }
        return null;
    };
    CartComponent.prototype.addProduct = function (product) {
        //	Find	CartItem	in	items
        var item = this.findItem(product.id);
        //	Check	was	it	found?
        if (item) {
            //	Item	was	found.
            //	Increase	the	count	of	the	same	products
            item.count++;
            //	Increase	amount	of	the	same	products
            item.amount += product.price;
        }
        else {
            //	Item	was	not	found.
            // 	Create	the	cart	item
            item = {
                product: product,
                count: 1,
                amount: product.price
            }; //	Add	item	to	items
            this.cart.items.push(item);
        }
        //	Increase	count	in	the	cart
        this.cart.count++;
        //  	Increase	amount	in	the	cart
        this.cart.amount += product.price;
    };
    CartComponent.prototype.remove = function (item) {
    };
    CartComponent.prototype.removeProduct = function (product) {
        //	Find	CartItem	in	items
        var item = this.findItem(product.id);
        //	Check	is	item	found?
        if (item) {
            //	Decrease	the	count
            item.count--;
        }
        //	Check	was	that	the	last	product?
        if (!item.count) {
            //	It	was	last	product
            // 	Delete	item	from	items
            this.remove(item);
        }
        //	Decrease	count	in	the	cart
        this.cart.count--;
        //	Decrease	amount	in	the	cart
        this.cart.amount -= product.price;
    };
    CartComponent.prototype.removeItem = function (item) {
        //	Delete	item	from	items
        this.remove(item);
        //	Decrease	count	in	the	cart
        this.cart.count -= item.count;
        //	Decrease	amount	in	the	cart
        this.cart.amount -= item.amount;
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(547),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__(548),
            styles: [__webpack_require__(534)]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(549),
            styles: [__webpack_require__(535)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SliderClass */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sliders; });
var SliderClass = (function () {
    function SliderClass(title, desc, image) {
        this.title = title;
        this.desc = desc;
        this.image = image;
    }
    return SliderClass;
}());
var Sliders = [
    new SliderClass("Great	eaten	fresh	from	oven. Used	to	make	sub sandwiches,	etc.", "first description", "http://www.farmaciamontecalcoli.it/wp-content/uploads/2017/02/healthy-food-web.jpg"),
    new SliderClass("Pork	ribs	are	a	cut	of	pork popular	in	North	American and	Asian	cuisines", "second description", "https://menu-vegetarien.com/wp-content/uploads/2015/09/slider3.jpg"),
    new SliderClass("Cucumber	is	a	widely cultivated	plant	in	the	gourd family,	Cucurbitaceae", "third description", "http://ipalate.com/img/spaoils%20slide3.jpg"),
    new SliderClass("title four", "forth description", "https://www.zaggle.in/assets/images/group_dining_main_banner.jpg"),
    new SliderClass("The	pork	tenderloin,	in	some countries	called	pork	fillet,	is a	cut	of	pork", "fifth description", "http://krishistar.com/wp-content/themes/biznaz/images/preview/wide-img-1.jpg"),
];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_categories__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_slider__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_category_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_services_products_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomepageComponent = (function () {
    function HomepageComponent(router, categoryService, productsServices) {
        this.router = router;
        this.categoryService = categoryService;
        this.productsServices = productsServices;
        console.log(this.categoryService.getHomeCategories());
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.categories = __WEBPACK_IMPORTED_MODULE_1__classes_categories__["b" /* Categories */];
        this.sliders = __WEBPACK_IMPORTED_MODULE_2__classes_slider__["a" /* Sliders */];
    };
    HomepageComponent.prototype.filterProducts = function (category) {
        this.router.navigate(['/products'], {
            queryParams: { category: category.id }
        });
        window.scrollTo(0, 61);
    };
    HomepageComponent.prototype.randomProducts = function (number) {
        if (number === void 0) { number = 4; }
        return this.productsServices.getProducts().slice(0, number);
    };
    HomepageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__(550),
            styles: [__webpack_require__(536)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_services_category_service__["a" /* CategoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__app_services_category_service__["a" /* CategoryService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__app_services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], HomepageComponent);
    return HomepageComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeatPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RepeatPipe = (function () {
    function RepeatPipe() {
    }
    RepeatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var num = (args && args[0]) ? args[0] : 3;
        return value.repeat(num);
    };
    RepeatPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'testPipe'
        }), 
        __metadata('design:paramtypes', [])
    ], RepeatPipe);
    return RepeatPipe;
}());
//# sourceMappingURL=repeat.pipe.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homepage_classes_categories__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryPipe = (function () {
    function CategoryPipe() {
    }
    CategoryPipe.prototype.transform = function (value) {
        var newValue = parseInt(value);
        var allCategories = __WEBPACK_IMPORTED_MODULE_1__homepage_classes_categories__["a" /* ProductsCategories */].map(function (product) { return product.title; });
        return allCategories.filter(function (productTitle, index) { return index == newValue; });
    };
    CategoryPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({
            name: 'categorytype'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryPipe);
    return CategoryPipe;
}());
//# sourceMappingURL=category.pipe.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_products_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductpageComponent = (function () {
    function ProductpageComponent(pageLink, productsService) {
        this.pageLink = pageLink;
        this.productsService = productsService;
    }
    ProductpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageLink.params.subscribe(function (params) { _this.product = _this.productsService.getProduct(params['id'].toString()); });
        // print the path of the page relative to the absolute home path
        this.pageLink.url.subscribe(function (url) { var myUrl = url.map(function (x) { return x.path; }); console.log(myUrl.toString().replace(/,/g, '/')); });
    };
    ProductpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-productpage',
            template: __webpack_require__(552),
            styles: [__webpack_require__(538)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_services_products_service__["a" /* ProductsService */]) === 'function' && _b) || Object])
    ], ProductpageComponent);
    return ProductpageComponent;
    var _a, _b;
}());
//# sourceMappingURL=productpage.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Object)
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-single-product',
            template: __webpack_require__(553),
            styles: [__webpack_require__(539)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
}());
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsListComponent = (function () {
    function ProductsListComponent() {
    }
    ProductsListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', Array)
    ], ProductsListComponent.prototype, "products", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', String)
    ], ProductsListComponent.prototype, "productsLabel", void 0);
    ProductsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-products-list',
            template: __webpack_require__(554),
            styles: [__webpack_require__(540)]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsListComponent);
    return ProductsListComponent;
}());
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_classes_categories__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_products_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(router, route, productsService) {
        this.router = router;
        this.route = route;
        this.productsService = productsService;
        this.productsCat = __WEBPACK_IMPORTED_MODULE_2__homepage_classes_categories__["a" /* ProductsCategories */];
        this.productsLabel = 'all';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (qString) {
            var category = qString['category'];
            var filteredCategories = _this.productsService.getProducts().filter(function (item) { return item.categoryId == category; });
            console.log(qString, category);
            if (category == 0 || category == undefined) {
                _this.products = _this.productsService.getProducts();
                _this.productsLabel = '0';
            }
            else {
                _this.products = filteredCategories;
                _this.productsLabel = filteredCategories[0].categoryId;
            }
        });
    };
    ProductsComponent.prototype.searchProducts = function (value) {
        this.products = this.productsService.getProducts().filter(function (item) { return item.title.toLowerCase().search(value) != -1; });
        window.scrollTo(0, document.getElementById('full-shop').offsetTop);
    };
    /*    showProducts(category, title): void	{
          this.scrollToTop(10);
          if (category == 'all') {
              this.products = this.productsService.getProducts();
          } else {
              this.products = this.productsService.getProducts().filter((item:Product)=> item.categoryId == category);
          }
            this.productsLabel = title
        }
    */
    ProductsComponent.prototype.filterProducts = function (category, event) {
        var target = event.target;
        var targetClass = target.classList[0];
        var allLists = document.querySelectorAll("." + targetClass);
        for (var i = 0; i < allLists.length; i++)
            allLists[i].classList.remove('active');
        target.classList.add('active');
        this.route.navigate(['/products'], {
            queryParams: { category: category.categoryId }
        });
        window.scrollTo(0, 61);
    };
    ProductsComponent.prototype.scrollToTop = function (subtract) {
        if (subtract === void 0) { subtract = 1; }
        var scrollInterval = setInterval(function () {
            var windowScroll = window.scrollY;
            if (windowScroll > 0) {
                windowScroll -= subtract;
                window.scrollTo(0, windowScroll);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 5);
    };
    ProductsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__(555),
            styles: [__webpack_require__(541)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_services_products_service__["a" /* ProductsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_services_products_service__["a" /* ProductsService */]) === 'function' && _c) || Object])
    ], ProductsComponent);
    return ProductsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignoutComponent = (function () {
    function SignoutComponent() {
    }
    SignoutComponent.prototype.ngOnInit = function () {
    };
    SignoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-signout',
            template: __webpack_require__(556),
            styles: [__webpack_require__(542)]
        }), 
        __metadata('design:paramtypes', [])
    ], SignoutComponent);
    return SignoutComponent;
}());
//# sourceMappingURL=signout.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#scroll-to-top {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: 1rem;\r\n    background-color: #555;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    z-index: 999;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "#checkout {\r\n    height: 90vh;\r\n    background-color: #eee;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "footer {\r\n  padding-top: 20px;\r\n  color: #858585;\r\n  background-color: #eee;\r\n    position: relative;\r\n    margin-top: 70px\r\n\r\n}\r\nfooter .container {\r\n    position: relative;\r\n    z-index: 9;\r\n}\r\n#footer-end {\r\n  padding: 10px 0\r\n}\r\n\r\nfooter:before {\r\n\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 130%;\r\n    height: 200px;\r\n    background-color: #eee;\r\n    top: -20px;\r\n    left: -55px;\r\n    transform: rotate(2deg);\r\n    z-index: 4;\r\n    border-radius: 200px / 65px;\r\n    border-top: 5px solid #d0d5d8;\r\n    box-shadow: 0 -2px  #d0d5d8;\r\n}\r\n\r\nfooter .nav .nav-item a {\r\n    color: #ccc\r\n}\r\nfooter .nav .nav-item a:hover {\r\n    text-decoration: none;\r\n    transition: color 0.3s ease;\r\n    color: #999;\r\n\r\n}\r\nfooter .col .socials a:hover{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\nfooter .col .socials a {\r\n    color : #414345;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\r\n#categories .col {\r\n  padding-right:0;\r\n  padding-left:0;\r\n\r\n}\r\n#categories .card {\r\n  border: none;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n#categories .card .card-block {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-flow: column;\r\n        flex-flow: column;\r\n    background: rgba(0, 0, 0, 0.37);\r\n    padding-top: 32px;\r\n    color: #eee;\r\n\r\n}\r\n#categories .card .card-block:hover {\r\n    background: rgba(0, 0, 0, 0.2);\r\n}\r\n#categories .card .card-block p {\r\n    font-size: 12px;\r\n    color: #ddd\r\n}#categories .card .card-block h4{\r\n    letter-spacing: 1px;\r\n }\r\n#categories .card .card-block .btn:hover {\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n}\r\n#categories .card .card-img-top img{\r\n  height: 200px;\r\n  width: 100%;\r\n}\r\n\r\n#new-products .col .card {\r\n  margin-bottom: 8px;\r\n}\r\n/* my carousel*/\r\n#myCarousel {\r\n    min-height: 350px;\r\n}\r\n#myCarousel .carousel-item {\r\n    height: 100%\r\n}\r\n#myCarousel .carousel-inner .carousel-caption {\r\n    background-color: rgba(0,0,0,0.4);\r\n    border: 1px solid rgba(0,0,0,0.45);\r\n    width: auto;\r\n    bottom: 25%;\r\n    /*display: table !important;*/\r\n}\r\n\r\n.jumbotron {\r\n    background:  linear-gradient(to top right, rgba(40, 15, 14, 0.4), rgba(27, 35, 40, 0.4)), url('http://www.mangiarevegan.it/wp-content/uploads/2016/08/slider3.jpg');\r\n    color: #eee;\r\n    background-size: cover;\r\n    border-radius: 0;\r\n}\r\n/* home page*/\r\n.bg-inverse {\r\n  background-color: #485660 !important;\r\n}\r\n.jumbotron {\r\n  margin-bottom: 0;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\r\nnav .dropdown-btn {\r\n  background-color: #293136;\r\n  color: #8997a1;\r\n  border-radius: 0;\r\n  border: 1px solid #57646e;\r\n}\r\nnav .dropdown-menu {\r\n  left: -13%;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n  border-radius: 0;\r\n  /*background-color: #595e60;*/\r\n  /*color: #eee;*/\r\n}\r\nnav .dropdown-menu:after {\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 0;height: 0;\r\n  /*border: 10px solid transparent;*/\r\n\r\n  border: 10px solid transparent;\r\n\r\n  border-bottom-color: #595e60 !important;\r\n\r\n  top: -20px;\r\n  left: calc(50% - 10px)\r\n}\r\nnav .dropdown thead , nav .dropdown thead th{\r\n  border-top-color: transparent !important;\r\n}\r\nnav .dropdown-menu p.lead {\r\n  margin-bottom: 0;\r\n}\r\n.breadcrumb-container {\r\n  background-color: #363a3b;\r\n}\r\n.breadcrumb {\r\n  background-color: #363a3b;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.currency-converter {\r\n  max-width: 75px;\r\n}\r\n.navbar-nav .nav-link{\r\n    overflow: hidden;\r\n}\r\na.nav-link.active{position: relative}\r\na.nav-link.active::before {\r\n    content: '';\r\n    position: absolute;\r\n    bottom:-20px;left:50%;\r\n    transform: translateX(-50%) rotate(45deg);\r\n    background-color: #d50b3e;\r\n    box-shadow: -2px -2px 2px #d50b3e;\r\n    border-radius: 50%;\r\n    width: 22px;\r\n    height: 22px\r\n}\r\n.navbar-nav .nav-item:nth-child(2) a.nav-link.active::before{\r\n    background-color: #2aabd2;\r\n    box-shadow: -2px -2px 2px #2aabd2;\r\n}\r\n.navbar-nav .nav-item:nth-child(3) a.nav-link.active::before{\r\n    background-color: #70d234;\r\n    box-shadow: -2px -2px 2px #70d234;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, " #products .card .card-img-top {\r\n    min-height: 170px;\r\n}\r\nsection.col-md-9 {\r\n    padding-right: 0;\r\n}\r\n#products .card {\r\n    padding-right:0;\r\n    padding-left: 0;\r\n    margin-bottom: 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "/* products page */\r\n#full-shop .col-md-3 .card {\r\n  margin-bottom: 10px;\r\n}\r\n#full-shop .col-md-3 .card:nth-child(2) .card-block {\r\n  padding: 0\r\n}\r\n\r\n#products .card .card-img-top {\r\n    min-height: 170px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n<div id=\"scroll-to-top\" class=\"p-1 pl-2 pr-2\" (click)=\"toTop()\" *ngIf = 'hideAnchor'>\r\n    <span>up</span>\r\n</div>\r\n<!--<div class=\"card center-block\">-->\r\n  <!--<div class=\"card-header\">test</div>-->\r\n  <!--<div class=\"card-block\">-->\r\n    <!--<input type=\"text\" value=\"Hosam\" (keyup)=\"logOut(inputTest, $event)\" [(ngModel)]=\"inputTest\">-->\r\n    <!--{{title | testPipe:5}}-->\r\n    <!--<br>-->\r\n    <!--<div\t#product>-->\r\n      <!--<input\t[value]=\"product.name\"-->\r\n              <!--(input)=\"product.name = $event.target.value\"><br>-->\r\n      <!--{{product.name}}-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

module.exports = "<br><br><div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-9\">\r\n            <table class=\"table table-hover text-center bg-faded\">\r\n                <thead class=\"thead-faded\">\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th >Amount</th>\r\n                    <th>Quantity</th>\r\n                    <th>Sum</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                    <th\tscope=\"row\">product 1</th>\r\n                    <td> 10$</td>\r\n                    <td>1x</td>\r\n                    <td>10$</td>\r\n                </tr>\r\n                <tr>\r\n                    <th\tscope=\"row\">Product 2</th>\r\n                    <td>90$</td>\r\n                    <td>2x</td>\r\n                    <td>180$</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <button class=\"btn btn-block\">continue</button>\r\n            <button class=\"btn btn-block\">continue</button>\r\n            <button class=\"btn btn-block\">continue</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports) {

module.exports = "<section id=\"checkout\">\r\n    <div class=\"container\">\r\n        <div class=\"row \">\r\n            <h1 class=\"text-center text-muted\">Checkout page</h1>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

module.exports = "<!-- Footer section-->\r\n\r\n<footer class=\"mt-12\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h4>useful links</h4>\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\"><a href=\"\">Home</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">Best sales</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">Hot Products</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">New products</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">Best Offers</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h4>Support Services</h4>\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\"><a href=\"\">services</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">support</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">have a problem</a></li>\r\n          <li class=\"nav-item\"><a href=\"\">live chat</a></li>\r\n        </ul>\r\n      </div>\r\n      <address class=\"col\">\r\n        <h4>contact</h4>\r\n        <ul class=\"nav flex-column\">\r\n          <li class=\"nav-item\">0000\tMarket\tSt,\tSuite\t000,\tSan\tFrancisco,\tCA\t00000</li>\r\n          <li class=\"nav-item\">\t(123)\t456-789</li>\r\n          <li class=\"nav-item\"><a\thref=\"mailto:#\">support@dream-bean.com</a></li>\r\n          <li class=\"dropdown-divider\"></li>\r\n          <li class=\"nav-item\">\r\n            <h5>follow us </h5>\r\n            <div class=\"socials\">\r\n              <a class=\"btn btn-sm btn-outline-primary\">facebook</a> | <a class=\"btn btn-sm btn-outline-danger\">instagram</a> | <a class=\"btn btn-sm btn-outline-primary\">twitter</a> | <a class=\"btn btn-sm btn-outline-danger\" >youtube</a>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </address>\r\n    </div>\r\n  </div>\r\n  <section id=\"footer-end \" class=\"text-center\">\r\n    <span>CopyRight&copy; 2017 All Rights reserved made by <b>HSA</b> </span>\r\n  </section>\r\n</footer>\r\n"

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "\r\n<!-- start coding and styling the carousel -->\r\n<section id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\r\n  <ol class=\"carousel-indicators\" >\r\n    <li *ngFor=\"let slider of sliders; let i=index\"\r\n        data-target=\"#myCarousel\"\r\n        [attr.data-slide-to]=\"i\"\r\n        [ngClass]=\"{active: i ==0}\"></li>\r\n  </ol><!-- carousel indicators -->\r\n\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"carousel-item \"\r\n         *ngFor=\"let slide of sliders ;let i = index\"\r\n          [ngClass]=\"{active: i ==0}\">\r\n      <img class=\"d-block img-fluid \" width=\"100%\" [src]=\"slide.image\" [attr.alt]=\"slide.title\">\r\n      <div class=\"carousel-caption d-none d-md-block\">\r\n        <h3>{{slide.title}}</h3>\r\n        <p>{{slide.desc}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!--get customers attention-->\r\n<div\tclass=\"jumbotron\">\r\n  <h1\tclass=\"display-3\">FRESH\tORGANIC\tMARKET</h1>\r\n  <p\tclass=\"lead\">Nice\tchance\tto\tsave\ta\tlot\tof\tmoney</p>\r\n  <hr\tclass=\"m-y-2\">\r\n  <p>We\tare\topen\t7\tDays\ta\tWeek\t7:00am\tto\t10:00pm</p>\r\n</div>\r\n\r\n<!-- coding categories cards-->\r\n<div class=\"container-fluid\">\r\n  <section id=\"categories\">\r\n    <div class=\"row\">\r\n      <div class=\"col \"\r\n           *ngFor=\"let category of categories\"\r\n      >\r\n        <div class=\"card\" >\r\n          <div class=\"card-img-top\">\r\n            <img [src]=\"category.image\"  [attr.alt]=\"category.title\">\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <h4 class=\"card-title text-center\">{{category.title}}</h4>\r\n            <p class=\"lead\">{{category.desc}}</p>\r\n              <button class=\"btn btn-outline-secondary unrounded\" (click)=\"filterProducts(category)\">explore</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n<br><br>\r\n<!-- new products section-->\r\n<section id=\"new-products\">\r\n  <div class=\"container\">\r\n    <h3 class=\"product-header text-danger\">watch new products on store</h3>\r\n    <hr>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"card-deck\">\r\n        <app-single-product\r\n            class=\"col-md-3\"\r\n            *ngFor=\"let product of randomProducts(8)\"\r\n            [product]=\"product\"\r\n        ></app-single-product>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n\r\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-inverse bg-inverse navbar-toggleable-md\">\r\n\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand mb-0\" [routerLink]=\"['home']\">\r\n    <img src=\"../assets/fmLogo.png\" alt=\"icon\" height=\"37px\">\r\n  </a>\r\n\r\n  <!-- items in navbar and links -->\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li\r\n        class=\"nav-item\"\r\n        *ngFor=\"let navItem of navItems\"\r\n        >\r\n        <a  class=\"nav-link\"\r\n            [routerLink]=\"[navItem.href]\"\r\n            [routerLinkActive]=\"['active']\"\r\n        >{{navItem.title}}</a>\r\n      </li>\r\n    </ul>\r\n    <div\tclass=\"dropdown \">\r\n      <button\tclass=\"btn\tbtn-secondary\t dropdown-btn\"\ttype=\"button\" id=\"dropdownMenu1\"\tdata-toggle=\"dropdown\"\t\t\t\t\t\t\t\t\t\t\t\taria-haspopup=\"true\"\taria-expanded=\"false\">you have <b>2</b> item(s) - 200,00$</button>\r\n      <div   \tclass=\"dropdown-menu\"\taria-labelledby=\"dropdownMenu1\">\r\n        <table class=\"table table-hover table-sm text-center bg-faded\">\r\n\r\n\r\n          <thead class=\"thead-faded\">\r\n          <tr>\r\n            <th>Name</th>\r\n            <th >Amount</th>\r\n            <th>Quantity</th>\r\n            <th>Sum</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <th\tscope=\"row\">product 1</th>\r\n            <td> 10$</td>\r\n            <td>1x</td>\r\n            <td>10$</td>\r\n          </tr>\r\n          <tr>\r\n            <th\tscope=\"row\">Product 2</th>\r\n            <td>90$</td>\r\n            <td>2x</td>\r\n            <td>180$</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n        <div class=\"center-block text-center\">\r\n          <div class=\"btn-group \">\r\n            <a class=\"btn btn-sm btn-success\" [routerLink]=\"['/cart']\">view cart</a>\r\n            <a class=\"btn btn-sm btn-primary\" [routerLink]=\"['/checkout']\">checkout</a>\r\n          </div>\r\n        </div>\r\n\r\n        <p class=\"total lead text-center\">Total <b>200,00$</b></p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav><!-- End of the navbar -->\r\n\r\n<!--<div class=\"breadcrumb-container\">-->\r\n  <!--<ol class=\"breadcrumb container\">-->\r\n    <!--<li class=\"breadcrumb-item\"><a href=\"\">Home</a></li>-->\r\n    <!--<li class=\"breadcrumb-item\"><a href=\"#\">Market</a></li>-->\r\n    <!--<li class=\"breadcrumb-item active\" href=\"/products\">Product</li>-->\r\n    <!--<li class=\" float-right\">-->\r\n      <!--<div class=\"input-group input-group-sm\">-->\r\n        <!--<input type=\"text\" class=\"form-control currency-converter\">-->\r\n        <!--<button class=\"btn btn-sm input-group-addon\">convert</button>-->\r\n      <!--</div>-->\r\n    <!--</li>-->\r\n  <!--</ol>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n    <div class=\"card\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <div class=\"card-img\">\r\n                    <img [src]=\"product.imageL\" [attr.alt]=\"product.title\" width=\"100%\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col pt-4\">\r\n                <ul class=\"list-group\">\r\n                    <li class=\"list-group-item list-group-item-action\">\r\n                        <b>Title</b>: {{product.title}}\r\n                    </li>\r\n                    <li class=\"list-group-item list-group-item-action\">\r\n                        <b>id</b>: {{product.id}}\r\n                    </li>\r\n                    <li class=\"list-group-item list-group-item-action\">\r\n                        <b>category</b>: {{product.categoryId | categorytype}}\r\n                    </li>\r\n                    <li class=\"list-group-item list-group-item-action\">\r\n                        <b>description</b>: {{product.desc}}\r\n                    </li>\r\n                    <li class=\"list-group-item list-group-item-action bg-danger \"\r\n                    >\r\n                        <p class=\"text-center\" [ngStyle]=\"{color:'#eee', 'text-align': 'center'}\"><b>Price</b>: {{product.price | currency:'usd':true}}</p>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-2\" >\r\n    <div class=\"card-img-top\">\r\n        <img [src]=\"product.imageS\" alt=\"product1\" class=\"img-fluid center-block\" width=\"100%\">\r\n    </div>\r\n    <div class=\"card-block text-xs-center\">\r\n        <h6 class=\"card-title\">{{product.title}}\r\n            <span class=\"badge badge-pill badge-default\" >{{product.categoryId | categorytype}}</span>\r\n            <span class=\"badge badge-pill badge-success float-right\">{{product.price | currency:'usd':true}}</span>\r\n        </h6>\r\n        <hr>\r\n        <p>{{product.desc}}</p>\r\n        <div class=\"btn-group pl-md-4\" role=\"group\">\r\n            <button class=\"btn\tbtn-primary\">Add to cart</button>\r\n            <a class=\"btn\tbtn-info\"\r\n               [routerLink]=\"['/products/product', product.id]\"\r\n               (click)=\"scrollToTop()\">Info</a>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<section >\r\n    <h3 class=\"text-muted\">{{productsLabel | uppercase | categorytype}} Products</h3>\r\n    <div class=\"row\">\r\n        <div class=\"card-deck\">\r\n            <app-single-product\r\n                class=\"card\"\r\n                *ngFor=\"let product of products\"\r\n                [product]=\"product\"\r\n            ></app-single-product>\r\n        </div>\r\n    </div>\r\n</section> <!-- end of products section -->\r\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<!-- shop products -->\r\n<section id=\"full-shop\">\r\n    <br>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <!--the list of all products-->\r\n            <app-products-list\r\n                [products]=\"products\"\r\n                [productsLabel]=\"productsLabel\"\r\n                id=\"products\" class=\"col-md-9\"></app-products-list>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"card shop-search\">\r\n                    <div class=\"card-header\">\r\n                        <h6>search</h6>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"search for...\" #productSearch>\r\n                            <button class=\"btn btn-primary input-group-addon\" (click)=\"searchProducts(productSearch.value)\"> search</button>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div><!-- end of search card -->\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h6>Categories</h6>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-group\">\r\n\r\n                            <li\r\n\r\n                                *ngFor=\"let category of productsCat; let i= index\"\r\n                                class=\"list-group-item list-group-item-action\"\r\n                                (click) = \"filterProducts(category, $event)\"\r\n                                [ngClass]=\"{active:i==0}\"\r\n                                [routerLink] = \"['/products', category.categoryId]\"\r\n                                >{{category.title}}</li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div><!-- end of the category card -->\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h4>Tags</h4>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <span class=\"badge badge-default bg-inverse\">cars</span>\r\n                        <span class=\"badge badge-default\">mobile</span>\r\n                        <span class=\"badge badge-default\">tablets</span>\r\n                        <span class=\"badge badge-default\">shoes</span>\r\n                        <span class=\"badge badge-default\">fruits</span>\r\n                        <span class=\"badge badge-default\">bakery</span>\r\n                        <span class=\"badge badge-default\">sea food</span>\r\n                        <span class=\"badge badge-default\">salt food</span>\r\n                    </div>\r\n                </div>\r\n            </div> <!-- end of side cards -->\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n<br>\r\n<section id=\"signout\">\r\n\r\n\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-6 \">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <h4>Are you sure you want to sign out?</h4>\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <p class=\"lead\"> you are about to leave the website and logout.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ipsum laudantium placeat similique. Animi asperiores</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <div class=\"btn-group center-block float-right\">\r\n                        <button class=\"btn btn-default\">yes</button>\r\n                        <button class=\"btn btn-danger\">no</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n<br>\r\n</section>\r\n"

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);


/***/ })

},[588]);
//# sourceMappingURL=main.bundle.js.map