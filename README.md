# DHL Courier App (iPhone 11 Pro Max)

Ready-to-use React Native + Expo courier application with **barcode scanner**.

Optimized for **iPhone 11 Pro Max** (6.5" Super Retina XDR, 2688×1242).

## Features
- Live barcode / QR code scanner (Expo Camera)
- Home dashboard with stops and quick-scan button
- Shipment tracking details
- Scan history
- Driver profile
- Bottom tab navigation
- Camera permission handling
- DHL red/yellow branding

## Quick Start
```bash
npm install
npx expo start
```
Open Expo Go on your iPhone 11 Pro Max and scan the QR code. Grant camera permission to use the scanner.

## Requirements
- Node.js
- Expo Go app (iOS)
- Physical iPhone recommended for camera/barcode scanning

## Structure
- `App.js` — Navigation root
- `src/screens/ScanScreen.js` — Barcode scanner
- `src/screens/` — Other screens
- `app.json` — Expo config (camera permissions included)

## License
MIT
