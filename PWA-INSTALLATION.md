# 📱 SAMRAT - Mobile App Installation Guide (PWA)

## What is a Progressive Web App (PWA)?

A **Progressive Web App (PWA)** is a web application that works like a native mobile app. SAMRAT can be installed directly on your phone/tablet as an app!

## ✨ Features as a Mobile App

- **Offline Support**: Works even without internet connection
- **Native-like Experience**: Launches like a regular app
- **No App Store Required**: Install directly from browser
- **Fast Loading**: Cached assets load instantly
- **Push Notifications Ready**: Can receive alerts
- **Full Screen Mode**: Takes up entire screen like native app

---

## 📲 Installation on Mobile Devices

### Android (Chrome/Firefox)

1. Open SAMRAT in **Chrome** or **Firefox**
2. Tap the **Menu** (⋮) at top right
3. Select **"Install app"** or **"Add to Home screen"**
4. Confirm by tapping **"Install"**
5. SAMRAT now appears on your home screen! 🎉

**Or:**
1. Look for **"Install"** banner that appears at bottom of screen
2. Tap **"Install"** when prompted

### iPhone/iPad (Safari)

1. Open SAMRAT in **Safari**
2. Tap **Share** icon (square with arrow)
3. Scroll and tap **"Add to Home Screen"**
4. Name it **"SAMRAT"** (or your preference)
5. Tap **"Add"**
6. SAMRAT appears on your home screen! 🎉

### Desktop (Windows/Mac/Linux)

#### Chrome:
1. Visit SAMRAT website
2. Click **⊕ Install** in address bar (or Menu → Install)
3. Click **"Install"**
4. Opens as standalone desktop app

#### Edge:
1. Visit SAMRAT website
2. Click **Settings** (⋯) → **Apps** → **Install this site as app**
3. Click **"Install"**

#### Firefox:
1. Coming soon in Firefox 127+
2. Currently, save as booklet or use desktop shortcut

---

## 🔄 Auto-Update

- Service Worker checks for updates automatically
- New version loads when you restart the app
- No manual update needed!

## 💾 Offline Features

- **Cached Pages**: HTML, CSS, JavaScript cached locally
- **Recent Chats**: Last 50 conversations stored
- **API Calls**: New messages sync when reconnected
- **Smart Caching**: Background sync enabled

## ⚙️ Technical Details

### Files Involved:
- `manifest.json` - App metadata & icons
- `service-worker.js` - Offline caching logic
- `logo.svg` - App icon (Trojan horse logo)

### Service Worker Strategy:
- **Network First**: Try to fetch from internet
- **Cache Fallback**: Use cached version if offline
- **API Calls**: Skip for POST requests (always fresh)

## 🗑️ Uninstall

### Android:
1. Long-press SAMRAT icon
2. Select **"Uninstall"**

### iPhone:
1. Long-press SAMRAT icon
2. Select **"Remove App"**
3. Tap **"Delete from Home Screen"**

### Desktop:
- Chrome: Settings → Apps → Remove SAMRAT
- Edge: Settings → Apps → Uninstall SAMRAT

## 🚀 First Launch Tips

1. **Grant Permissions**: Allow notifications (optional)
2. **Internet Required First Time**: To download assets
3. **Works Offline**: After first launch
4. **Bookmark Backend**: Remember server URL

## 🔧 Troubleshooting

### "Install button doesn't appear"
- Update your browser to latest version
- Clear browser cache and cookies
- Try with Chrome or Safari (most compatible)

### "App won't start"
- Clear app cache (Settings → Apps → SAMRAT → Storage)
- Check internet connection first time
- Reinstall the app

### "Offline mode not working"
- Service Worker not registered (check console)
- Disable offline toggle in service-worker.js
- Try with Chrome (best PWA support)

### "Can't find install option"
- Browser may not support PWA (use Chrome/Safari)
- App must be on HTTPS (security requirement)
- Some browsers need manual "Add to Home Screen"

## 📊 Browser Support

| Browser | Android | iPhone | Desktop |
|---------|---------|--------|----------|
| Chrome  | ✅      | ✅     | ✅       |
| Safari  | ❌      | ✅     | ✅       |
| Firefox | ✅      | ❌     | 🔄 Soon |
| Edge    | ✅      | ✅     | ✅       |

## 🎯 Future Enhancements

- [ ] Push notifications
- [ ] File sharing from device
- [ ] Voice input on mobile
- [ ] Share to SAMRAT from other apps
- [ ] Background sync for chats
- [ ] Widget support (Android 12+)

---

**Made with ❤️ | Questions? Open an issue on GitHub!**
