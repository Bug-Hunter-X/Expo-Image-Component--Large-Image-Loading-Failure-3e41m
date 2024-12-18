# Expo Image Component: Large Image Loading Failure

This repository demonstrates a bug where Expo's `Image` component fails to load large images, particularly on devices with limited resources or slow network connections. The issue is characterized by a missing image or extremely slow loading times, without clear error messages.

## Bug Description
The `Image` component from Expo often fails to render large images, especially when network conditions are suboptimal. This leads to a poor user experience.

## Solution
The provided solution addresses this issue by implementing image resizing and optimized loading techniques. The solution includes image caching and fallback mechanisms to enhance performance and reliability.

## Steps to Reproduce
1. Clone the repository
2. Run `npm install`
3. Run `expo start`
4. Observe the behavior of the image component when loading a large image.