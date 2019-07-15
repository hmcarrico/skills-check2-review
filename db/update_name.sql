update products
set name = $1
where name = $2;

select * from products;