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