
Admin ( id, email, password )
Address ( id, address, zip_code, city, country )
Live ( id, #user_id, #address_id )
User_review ( id, note, content, #product_id, #user_id )
Category ( id, name )
Shopping_cart_lign ( id, quantity, #shopping_cart_id, #product_id )
Shopping_cart ( id, total_price, message, #user_id )
Product ( id, name, short_description, full_description, ingredients, packaging, price, stock, picture, #admin_id, #category_id )
User ( id, civility, last_name, first_name, email, phone_number, password, #shopping-cart )