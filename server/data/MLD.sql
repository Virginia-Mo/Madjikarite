
Role ( id, name )
Address ( id, address, zip_code, city, country )
Live_in ( id, #user_id, #address_id )
User_review ( id, note, content, #product_id, #user_id )
Category ( id, name )
Picture ( id, name, description, url)
Represent ( id, #picture_id, #product_id )
Order ( id, cart, message, final_price, #user_id, #address_id )
Product ( id, name, short_description, full_description, ingredients, packaging, price, stock, picture, #category_id )
User ( id, last_name, first_name, email, phone_number, password, #role_id )