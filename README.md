# PT Banyumas Arga Resty Website - User Guide

This is the official documentation for your new company profile website.

## Project Structure
- `index.html`: The main file containing all the text and structure.
- `styles.css`: Contains all the colors, fonts, and styling rules.
- `script.js`: Handles the interactive parts like the mobile menu and scroll animations.

## How to Edit Content

### Changing Text
1. Open `index.html` in a text editor (like Notepad or VS Code).
2. Use `Ctrl+F` to find the text you want to change (e.g., "Mitra Terpercaya").
3. Replace the text between the tags, for example:
   ```html
   <!-- Before -->
   <h2>Mitra Terpercaya</h2>
   
   <!-- After -->
   <h2>Solusi Bisnis Utama</h2>
   ```
4. Save the file and refresh your browser.

### Changing Links (WhatsApp / Social Media)
- **WhatsApp**: Search for `class="whatsapp-float"` in `index.html` and change the number in `href="https://wa.me/..."`.
- **Social Media**: Look for the footer section and update the `href="#"` with your actual profile URLs.

### Changing Images
Currently, the site uses CSS gradients for a premium, fast-loading look. If you want to add real images:
1. Place your image files in a folder (e.g., named `images`).
2. Open `styles.css`.
3. Search for `.hero` or `.img-wrapper`.
4. Replace the `background` property with `background-image: url('images/your-photo.jpg');`.

## Color Scheme
The colors are defined at the top of `styles.css` under `:root`. You can easily change the theme by editing these hex codes:
- `--primary-color`: #0A192F (Deep Navy)
- `--accent-color`: #D4AF37 (Gold)

## Support
For any major layout changes, please feel free to ask!
