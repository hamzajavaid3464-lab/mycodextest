# AdMobAllFormats

Minimal Android app demonstrating all Google AdMob formats in a single activity using Kotlin, XML layouts, and view binding.

## Features
- Adaptive banner defined in XML and sized at runtime
- Interstitial, rewarded, and rewarded interstitial ads with load/show controls
- Native ad templated with view binding and Material styling
- Central `AdManager` that handles lifecycle-aware loading and cleanup for all formats
- Configured for compile/target SDK 35 and min SDK 21 using Kotlin 2.0.21 and AGP 8.6.0

## Requirements
- Android Studio Hedgehog (2023.1.1) or newer (including Iguana/Jellyfish builds)
- Android SDK Platform 35
- An emulator or device with Google Play services

## Getting Started
1. If you need the Gradle wrapper jar, regenerate it locally by running `gradle wrapper` (the binary jar is intentionally excluded).
2. Open the project in Android Studio.
3. Allow Gradle sync to complete. Google Mobile Ads test IDs are already configured.
4. Run the `app` configuration on an emulator or device. Each card in the scroll view demonstrates a different AdMob format.

All ad units use Google's official test identifiers, so the project is safe to run without additional configuration.
