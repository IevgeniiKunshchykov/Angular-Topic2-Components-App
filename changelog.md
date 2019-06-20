## Actions - Components 
1. Add Product component
2. Add ProductList component to display all products. Each product is represented with Product component
3. Add ProductsService and use it to deliver data to ProductList component
4. Add CartItem component
5. Add CartList component to display all item added to cart. Each CartItem is represented with CartItem component
6. Add CartService to manage add/remove logic
7. Add functionality to ProductList component to add items to CartList using CartService
8. Add OrderList component to display all orders. 
9. Add OrderService. User it from CartList component to buy all items from cart.
10. Add ability to Cart Component to specify amount of products we want to buy
11. Implemented remove from the cart logic
12. Implemented directive to change back color of cart items when mouse is over.
13. Implemented blur event to validate amount. If amount is less that 1 then value is set to 1.
14. Add template variable to appcomponent and set title with it AppComponent.
15. When mouse is over input that sets amount  of items in the cart and wheel is used then amount is changed. 
16. If product is not available then Product component is greyed out.

## Actions - Services and DI
1. Change cart service to have all required methods.
2. Create LocalStorageService
3. Create ConfigOptionsService
4. Create ConstantsService. Register it with UseValue
5. Create GeneratorService. Create factory GeneratorServiceFactory to generate service.  Register it with useFactory.
6. Add AboutComponent and use all services above.
7. Add ChangeStyleDirective which changes font size inside each orange block inside AboutComponent.

## Actions - pipes
1. Use uppercase pipe in ProductComponent for name
2. Use currency pipe in ProductComponent for price
3. Use lowercase pipe in ProductComponent for ingredient
4. Change productservice to return promise when getting all products. Use async pipe to display products
5. Add OrderByPipe, register it in shared module. Use it in product list component to sort by name or price, asc or desc.

## Actions - Navigation
1. Implemented menu items and vagiation to them: Products, Cart, About, Admin, Login
2. Implemented secondary router-outlet to show comments about product. 'Show comments' button is located near each product in the list.
3. Implemented navigation to cart from product list and back to product list from cart.
4. Implemented admin module which is lazy loaded.
5. Implemented guard for admin module so that it is loaded only if user is logged in.
6. Implemented navigation inside admin module: Products, Orders.
7. You can create and edit product in admin module.
8. You can watch list of orders in admin module. Orders are created from the cart.
9. If user is logged in then 'Edit' button also appears on products-list page near each product
10. Implemented product resolve guard and it is used to resolve product when you navigate to ProductComponent either to watch detailed info or edit or create product.

## Actions - HttpClient
1. Changed OrdersService to work with help of json-server. Some methods retirn Promise and some Observable
2. Implemented TimingInterceptor that logs to console duration of only GET requests.
3. IMplemented AppSettings service. It is used by OrdersService and also uses LocalStorageService to store OrdersURL

## Actions - NgRx
1. Create app state that contains products state.
2. Created actions, reducer, selectors for products state
3. Created same things for router
4. Use it in product-list.component, products-admin.component, product.guard