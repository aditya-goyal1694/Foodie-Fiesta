CREATE DATABASE IF NOT EXISTS `railway`;
USE `railway`;

DROP TABLE IF EXISTS `order_tracking`;
DROP TABLE IF EXISTS `orders`;
DROP TABLE IF EXISTS `food_items`;

CREATE TABLE `food_items` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) UNIQUE NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `orders` (
  `order_id` INT NOT NULL,
  `item_id` INT NOT NULL,
  `quantity` INT NOT NULL CHECK (`quantity` > 0),
  `total_price` DECIMAL(10,2) GENERATED ALWAYS AS (quantity * (SELECT price FROM food_items WHERE food_items.item_id = orders.item_id)) VIRTUAL,
  PRIMARY KEY (`order_id`,`item_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `food_items` (`item_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `order_tracking` (
  `order_id` INT NOT NULL,
  `status` ENUM('pending', 'in transit', 'delivered') NOT NULL,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`order_id`),
  CONSTRAINT `order_tracking_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- Populate food_items
INSERT INTO food_items (item_id, name, price) VALUES
(1, 'Margherita Pizza', 299.00),
(2, 'Farmhouse Pizza', 349.00),
(3, 'Red Sauce Pasta', 249.00),
(4, 'White Sauce Pasta', 269.00),
(5, 'Spaghetti', 229.00),
(6, 'Masala Dosa', 129.00),
(7, 'Rava Dosa', 119.00),
(8, 'Idli', 89.00),
(9, 'Vada', 79.00),
(10, 'Hyderabadi Biryani', 299.00),
(11, 'Traditional Lassi', 79.00),
(12, 'Mango Lassi', 89.00),
(13, 'Lemon Soda', 49.00),
(14, 'Virgin Mojito', 99.00),
(15, 'Mint Mojito', 109.00),
(16, 'Strawberry Shake', 129.00),
(17, 'Blueberry Shake', 139.00),
(18, 'Hot Chocolate', 119.00),
(19, 'Coffee', 89.00),
(20, 'Tea', 59.00),
(21, 'Chole Bhature', 169.00),
(22, 'Paneer Butter Masala', 249.00),
(23, 'Paneer Lababdaar', 259.00),
(24, 'Palak Paneer', 239.00),
(25, 'Mutter Paneer', 229.00),
(26, 'Dal Makhani', 199.00),
(27, 'Tandoori Roti', 35.00),
(28, 'Garlic Naan', 45.00),
(29, 'Butter Naan', 40.00),
(30, 'Samosa', 49.00),
(31, 'Kachori', 45.00),
(32, 'Pav Bhaji', 149.00),
(33, 'Pani Puri', 59.00),
(34, 'Peri Peri Fries', 79.00);


-- Populate orders
INSERT INTO `orders` (`order_id`, `item_id`, `quantity`) VALUES
(40, 1, 2),
(40, 3, 1),
(41, 4, 3),
(41, 6, 2),
(41, 9, 4);

-- Populate order_tracking
INSERT INTO `order_tracking` VALUES (40,'delivered'),(41,'in transit');

-- Function to get price of an item
DELIMITER ;;
CREATE FUNCTION `get_price_for_item`(p_item_name VARCHAR(255)) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_price DECIMAL(10,2);
    SELECT COALESCE(price, -1) INTO v_price FROM food_items WHERE name = p_item_name LIMIT 1;
    RETURN v_price;
END;;
DELIMITER ;

-- Function to get total price of an order
DELIMITER ;;
CREATE FUNCTION `get_total_order_price`(p_order_id INT) RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE v_total_price DECIMAL(10,2);
    SELECT COALESCE(SUM(total_price), -1) INTO v_total_price FROM orders WHERE order_id = p_order_id;
    RETURN v_total_price;
END;;
DELIMITER ;

-- Procedure to insert an order item
DELIMITER ;;
CREATE PROCEDURE `insert_order_item`(
  IN p_food_item VARCHAR(255),
  IN p_quantity INT,
  IN p_order_id INT
)
BEGIN
    DECLARE v_item_id INT;
    DECLARE v_price DECIMAL(10,2);

    -- Validate input
    IF p_quantity <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Quantity must be greater than zero';
    END IF;

    -- Get item_id and price
    SELECT item_id, price INTO v_item_id, v_price FROM food_items WHERE name = p_food_item LIMIT 1;

    -- Validate food item
    IF v_item_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Invalid food item';
    END IF;

    -- Insert order item
    INSERT INTO orders (order_id, item_id, quantity) VALUES (p_order_id, v_item_id, p_quantity);
END;;
DELIMITER ;
