# Omar Kitmitto — Portfolio ("Field Report")

## Files
- `index.html` — page structure/content
- `style.css` — all styling
- `script.js` — scroll-reveal animation
- `assets/` — put your photo here

## Adding your photo
1. Drop your image file into the `assets` folder (e.g. `assets/omar.jpg`).
2. In `index.html`, find this line inside the `.photo-frame` div:
   ```html
   <img src="assets/photo.jpg" alt="Portrait of Omar Kitmitto">
   ```
3. Change `assets/photo.jpg` to match your actual filename.

The frame is fixed at 184px wide × 230px tall with `object-fit: cover`,
so any photo (portrait or landscape) will crop nicely to fill it —
no need to pre-resize.

## Other things to personalize
- In `index.html`, section 06 (Contact), replace the `#` in the LinkedIn
  link with your real LinkedIn URL:
  ```html
  <a href="#" id="linkedin-link">Add your LinkedIn URL here</a>
  ```

## Running it
Just open `index.html` in a browser, or use VS Code's Live Server
extension for auto-reload while you edit.
