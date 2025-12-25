# 🌟 WebhookUtil

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Made with Love](https://img.shields.io/badge/made%20with-%E2%9D%A4-red.svg)

*A beautiful and powerful Discord Webhook utility for multiple platforms*

[Features](#-features) • [Usage](#-usage) • [Examples](#-examples) • [Credits](#-credits)

</div>

---

## ✨ Features

- 🎨 **Rich Embeds** - Create beautiful Discord embeds with ease
- 🔗 **Method Chaining** - Fluent API for seamless development
- 🎯 **Multi-Platform** - Works with PocketMine-MP, PHP, and Node.js
- ⚡ **Lightweight** - Minimal dependencies, maximum performance
- 🛠️ **Customizable** - Full control over webhook appearance
- 📝 **Well Documented** - Clear examples and comprehensive docs

---

## 🚀 Usage

### PocketMine-MP

```php
use hearlov\webhook\Webhookutil; //Usage

class ClassName{

  function sendWebhook(){
    $webhook = new WebhookUtil("Discord Webhook URL");

    $webhook->setUsername("Dummy");
    $webhook->setContent("Hello World!");

    //Send
    $webhook->sendWebhook();
  }

}
```

### PHP

```php
  //It's the same as PocketMine, but you should use require_once instead of usage.
  require_once __DIR__ . "/WebHookUtil.php";

  $webhook = new WebhookUtil("Discord Webhook URL");

  $webhook->setUsername("Dummy");
  $webhook->setContent("Hello World!");

  //Send
  $webhook->sendWebhook();
```

### Node.js

```javascript
  // ESM
  import WebhookUtil from './DiscordWebhook.js';

  // CommonJS
  const WebhookUtil = require('./DiscordWebhook.js');

  const Webhook = new Webhookutil()
  .setUsername('Dummy')
  .setContent('Hello World!');

  $webhook->sendWebhook('Webhook URL');
```

---

## 📚 Examples

### Basic Message

### Embed with Fields

### Advanced Embed

### Multiple Embeds

---

## 🎨 Available Methods

### Message Configuration
- `setUsername(name)` - Set the webhook bot username
- `setAvatarURL(url)` - Set the webhook bot avatar
- `setContent(message)` - Set the message content
- `setTTS(boolean)` - Enable/disable text-to-speech

### Embed Configuration
- `newEmbed(title)` - Create a new embed
- `setEmbedTitleURL(url)` - Set clickable title URL
- `setEmbedDescription(text)` - Set embed description
- `setEmbedColor(hexcolor)` - Set embed color (hex or "random")
- `setEmbedFooter(text, icon_url)` - Add footer with icon
- `setEmbedImage(url)` - Add large image
- `setEmbedThumbnail(url)` - Add thumbnail image
- `setEmbedAuthor(name, imageurl)` - Add author section
- `addEmbedField(name, value, inline)` - Add field to embed
- `setEmbedCurrentTimestamp()` - Add current timestamp
- `addLatestEmbed()` - Finalize and add embed to message

### Sending
- `sendWebhook()` - Send the webhook message (PHP)
- `sendWebhook(URL)` - Send the webhook message (NodeJS)

### Get Data
- `<WebhookUtil>.get("title")` - Get the webhook data (NodeJS)
- `<Webhookutil>->title` - Get the webhook data (PHP)

---

## 🎯 Color Options

Use hex colors without the `#` symbol, or use `"random"` for a random color:

```php
// Hex color
$webhook->setEmbedColor("FF5733");

// Random color
$webhook->setEmbedColor("random");
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/LadySara48/DiscordWebhook-Utils/tree/stable).

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💝 Credits

<div align="center">

**Made with ❤️ by [Hearlov](https://github.com/LadySara48)**

*If you found this useful, consider giving it a ⭐!*

</div>

---

<div align="center">

### 🌐 Connect

[ArtStation](https://www.artstation.com/esrakanat55) • [Discord](https://discord.gg/7M2YECG4fZ) • [GitHub](https://github.com/LadySara48)

</div>
