# JTGeats - Home Food Delivery Platform

JTGeats is a web-based platform that connects customers with authentic home-cooked food delivery services. The project is built using vanilla HTML, CSS, and JavaScript.

## Features

### 🏠 Home Page
- Search functionality
- Featured home kitchen items display
- Popular items carousel/slider
- Video demonstration section
- Contact form for inquiries and seller registration

### 🛒 Shopping Experience
- Interactive food item cards with ratings and delivery times
- Add to cart functionality
- Empty cart modal
- Request a dish feature

### 🎨 Design Elements
- Consistent color scheme using:
  - Primary Green: #1AC073
  - Secondary Blue: #2EBF91
  - Accent Yellow: #F3BA00
  - Background White: #F0FAF7
- Modern card design with hover effects
- Custom video player controls
- Interactive modals

### 💫 Interactive Components
- Carousel slider for popular items
- Video player with custom play/pause functionality
- Interactive food cards with hover effects
- Modal windows for cart and dish requests
- Dynamic navigation menu

## Technical Details

### JavaScript Optimization Techniques

#### Data-Driven HTML Generation
The project uses several optimization techniques to handle repeated HTML content efficiently:

1. **Centralized Data Objects**
```javascript
const cardsData = [
  {
    imgSrc: "images/unsplash_MqT0asuoIcU.png",
    title: "Home made pizza",
    price: "₹190",
    rating: "3.7",
    time: "50-79 min",
  },
  // Additional card data...
];
```
- Separates data from presentation logic
- Makes content updates easier and more maintainable
- Enables dynamic data loading capabilities
- Reduces code duplication

2. **Template Generation Using Array Methods**
```javascript
document.getElementById("middle3").innerHTML = userDetail
  .map((user) => `
    
      
        
      
    
  `)
  .join("");
```
Benefits:
- Efficient array processing with `.map()`
- Clean HTML structure using template literals
- Minimal DOM manipulation
- Better performance through single innerHTML update

3. **Carousel Optimization**
```javascript
function renderCards() {
  cardsData.forEach((card) => {
    const cardElement = document.createElement("div");
    // Card creation logic
  });
  updateMiddleCard();
}
```
Features:
- Dynamic card creation
- Efficient DOM updates
- Reusable card generation logic
- Automated middle card highlighting

4. **Event Handling Optimization**
```javascript
function updateMiddleCard() {
  const cards = scroll.querySelectorAll(".block");
  cards.forEach((card) =>
    card.querySelector(".details").classList.remove("shadow")
  );
  // Middle card calculation and highlighting
}
```
Benefits:
- Efficient event delegation
- Optimized DOM querying
- Reduced memory usage
- Improved performance for dynamic content

### File Structure
```
JTGeats/
├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── cart.js
│   ├── carousel.js
│   ├── video.js
│   └── request-dish.js
├── icons/
├── images/
├── video/
└── index.html
```

### Key Components

#### Navigation
- Navigation links
- Search and cart icons
- Cart notification badge

#### Home Kitchen Section
- Grid layout for food items
- Individual cards with:
  - Food image
  - Title and price
  - Rating and delivery time
  - Add to cart button

#### Carousel
- Custom-built carousel for popular items
- Previous/Next navigation
- Auto-highlighting of center item
- Smooth transitions

#### Contact Section
- Two-column layout
- Form with input validation
- Submit button with hover effects

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/shahidusmaniii/JTGeatsAssignment.git
```

2. Open `index.html` in your preferred browser

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Credits

- Design inspiration: [Figma Design]
- Icons: Custom SVG icons
- Images: Sample food images from Unsplash
- Fonts: Roboto, Lato from Google Fonts