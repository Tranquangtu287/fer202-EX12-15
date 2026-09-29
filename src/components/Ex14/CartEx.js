import React, { createContext, useContext, useState } from 'react';

// Dữ liệu mẫu dishes từ đề bài
const dishesData = [
  {
    id: 0,
    name: "Uthappizza",
    category: "mains",
    price: "4.99",
    description: "A unique combination of Indian Uthappam and Italian pizza..."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    category: "appetizer",
    price: "1.99",
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter..."
  },
  {
    id: 2,
    name: "Vadonut",
    category: "appetizer",
    price: "1.99",
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    category: "dessert",
    price: "2.99",
    description: "A delectable, semi-sweet New York Style Cheese Cake..."
  }
];

// Tạo CartContext
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Thêm món vào giỏ hàng
  const addToCart = (dish) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  };

  // Xóa một món khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Làm trống giỏ hàng
  const clearCart = () => {
    setCartItems([]);
  };

  // Tính tổng số lượng và tổng tiền real-time
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ dishes: dishesData, cartItems, addToCart, removeFromCart, clearCart, totalCount, totalValue }}>
      {children}
    </CartContext.Provider>
  );
}

// Component hiển thị danh sách món ăn
function DishesList() {
  const { dishes, addToCart } = useContext(CartContext);

  return (
    <div style={{ flex: 1, marginRight: '20px' }}>
      <h4>Menu Dishes</h4>
      {dishes.map((dish) => (
        <div key={dish.id} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
          <h5>{dish.name} - ${dish.price}</h5>
          <p style={{ fontSize: '13px', color: '#666' }}>{dish.description}</p>
          <button 
            onClick={() => addToCart(dish)}
            style={{ padding: '5px 10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

// Component hiển thị giỏ hàng
function Cart() {
  const { cartItems, removeFromCart, clearCart, totalCount, totalValue } = useContext(CartContext);

  return (
    <div style={{ flex: 1, border: '1px solid #ccc', padding: '15px', borderRadius: '5px', backgroundColor: '#f9f9f9' }}>
      <h4>Shopping Cart</h4>
      <p><strong>Total Items:</strong> {totalCount}</p>
      <p><strong>Total Value:</strong> ${totalValue}</p>

      {cartItems.length === 0 ? (
        <p style={{ color: '#888' }}>Giỏ hàng trống.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', borderBottom: '1px dashed #eee', paddingBottom: '5px' }}>
              <span>{item.name} (x{item.quantity}) - ${(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                style={{ padding: '3px 8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '12px' }}
              >
                Remove
              </button>
            </div>
          ))}
          <button 
            onClick={clearCart}
            style={{ marginTop: '10px', padding: '6px 12px', backgroundColor: '#ffc107', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default function CartEx() {
  return (
    <CartProvider>
      <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <DishesList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}