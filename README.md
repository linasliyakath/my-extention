# Center Focus Dock

A minimal, animated dock Chrome extension that replaces your new tab page with a beautiful, focused interface featuring quick access to your favorite apps and a Google search bar.

## Features

- 🎨 **Minimal Design**: Clean, dark-themed interface with smooth animations
- 🚀 **Animated Dock**: Interactive dock with app icons that scale and animate on navigation
- 🔍 **Quick Search**: Integrated Google search bar with autofocus
- 💡 **Motivational Message**: Daily motivation text displayed on the new tab
- 🎯 **Smooth Interactions**: Fluid animations when navigating through dock items
- ⚡ **Lightweight**: Fast and efficient extension

## Installation

1. Clone this repository or download the ZIP file
   ```bash
   git clone https://github.com/linasliyakath/my-extention.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (toggle in the top right)

4. Click **Load unpacked**

5. Select the `my-extention` folder

6. The extension is now installed! Open a new tab to see it in action.

## Usage

- **Search**: Type in the search bar and press Enter to search on Google
- **Navigate Dock**: Click on any dock icon to navigate through apps
- **Open App**: Click the center (active) icon to open the linked website
- **Smooth Scrolling**: The dock automatically animates when you select different apps

## Customization

You can customize the dock by editing `dock.js` and modifying the `apps` array:

```javascript
const apps = [
  { icon: "./icons/linkedin (2).png", link: "https://linkedin.com" },
  { icon: "./icons/gmail (1).png", link: "https://mail.google.com/mail/u/1/#inbox" },
  // Add your own apps here
];
```

To add your own icons:
1. Place icon images in the `icons/` folder
2. Update the `apps` array with your icon path and link

## Project Structure

```
my-extention/
├── icons/              # App icons
├── dock.js            # Dock logic and navigation
├── index.html         # Main HTML structure
├── manifest.json      # Chrome extension manifest
└── README.md          # This file
```

## Technologies Used

- HTML5
- CSS3 (with animations)
- Vanilla JavaScript
- Chrome Extensions API (Manifest V3)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## Author

**linasliyakath**

- GitHub: [@linasliyakath](https://github.com/linasliyakath)

