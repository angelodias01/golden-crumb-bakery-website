# Golden Crumb Bakery Website

This repository contains the source code for the Golden Crumb Bakery website. It is a visually appealing, responsive website designed to showcase baked goods, savory snacks, and custom catering services. The project is built with a focus on mobile usability and clean visual aesthetics using a pink and white color palette.

## Project Overview

The website serves as a digital catalog for a small business. It allows customers to browse menus for both sweet and savory items via interactive carousels, view a gallery of past work, and easily contact the business via WhatsApp for orders.

## Key Features

### Product Carousels
The "Savory" and "Sweets" sections utilize a custom JavaScript carousel. This allows users to swipe or click through a list of products (cards) without cluttering the page. Each card displays an image, product title, description, and price.

### Photo Gallery
A dedicated `galeria.html` page displays a grid of high-quality images. The grid uses CSS Grid Layout to ensure images are responsive and scale correctly on different device sizes.

### Smooth Navigation
* **Internal Anchors:** Clicking links in the navigation bar smoothly scrolls the user to the specific section on the homepage.
* **Smart Header:** The navigation bar is sticky (stays at the top of the screen) and includes a "hamburger" toggle for mobile devices.

### Design System
* **Typography:** Uses a combination of 'Fredoka' for friendly headings, 'Dancing Script' for handwritten accents, and 'Roboto' for readable body text.
* **Color Palette:** Defines a consistent theme using CSS variables (Primary Pink, Light Pink Background, Dark Text).

## Technologies Used

* **HTML5:** Semantic structure for the Home and Gallery pages.
* **CSS3:** Custom styling using CSS Grid, Flexbox, and CSS Variables.
* **JavaScript (Vanilla):**
    * Carousel logic (scroll left/right).
    * Mobile menu toggle logic.
    * Smooth scrolling behavior for anchor links.
* **External Libraries:**
    * **FontAwesome:** For interface icons (arrows, social media, contact icons).
    * **Google Fonts:** For typography.

## File Structure

* **index.html:** The main landing page containing the Hero, Savory Menu, Sweets Menu, and Contact sections.
* **galeria.html:** A separate page specifically for the image gallery.
* **style.css:** The global stylesheet handling layout, typography, and responsiveness for all pages.
* **script.js:** Contains the logic for the carousels, smooth scrolling, and mobile menu interaction.

## Usage

This is a static website. To view it:
1. Download the files.
2. Ensure all files (`index.html`, `galeria.html`, `style.css`, `script.js`) are in the same folder.
3. Open `index.html` in your web browser.
