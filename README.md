# Accessibility Toolbar Fragment for Liferay DXP

This fragment provides a floating accessibility toolbar for Liferay DXP pages. It offers basic accessibility features such as font size adjustments, high contrast mode, and text alignment options.

## ✨ Features

- 🔠 Increase / Decrease font size
- 🎨 High contrast toggle
- 📏 Text alignment: Left, Center, Right, Justify
- ♻️ Reset all settings
- ♿ Floating button available on all pages

## 📦 Files

This fragment contains the following files:

- `index.html`: HTML structure of the toolbar
- `styles.css`: Styling for toolbar, buttons, and accessibility modes
- `main.js`: Functional logic for each accessibility feature

## 🛠️ How to Use

1. **Import the Fragment**  
   Go to **Site Builder > Fragments** and upload the ZIP file in your fragment collection.

2. **Add to a Page**  
   Drag and drop the fragment into your desired page layout.

3. **Use the Toolbar**  
   Click on the ♿ icon to open the accessibility options. Use the buttons to adjust font size, contrast, or text alignment.

4. **Reset Settings**  
   Click on the "Reset" button to restore the default layout and text.

## ⚠️ Limitations

- Changes are applied live to the page but are **not persisted** after reload (no use of `localStorage`).
- This fragment is **designed to work within the visible body of the site**.

## ✅ Compatibility

- Liferay DXP 7.4+
- Tested on Chrome, Firefox, and Edge

## 📄 License

MIT – free to use, modify, and distribute.

---

**Author:** Guilherme Colonnese  
**Version:** 1.0.0  
**Language:** English  
