<?php

declare(strict_types=1);

require_once __DIR__ . "/WebHookUtil.php";

use hearlov\webhook\WebHookUtil;

/**
 * Discord Webhook URL
 */
$webhookUrl = "https://discord.com/api/webhooks/XXXX/XXXX";

/**
 * Create new webhook instance
 */
$webhook = new WebHookUtil($webhookUrl);

/**
 * Basic message settings
 */
$webhook->setUsername("System Bot");
$webhook->setAvatarURL("https://i.imgur.com/4M34hi2.png");
$webhook->setContent("🚀 A new system notification has been triggered.");
$webhook->setTTS(false);

/**
 * Create a new embed
 */
$webhook->newEmbed("⚠️ Server Status Report");
$webhook->setEmbedTitleURL("https://example.com/status");
$webhook->setEmbedDescription(
    "Below is the current status of the server with detailed metrics."
);
$webhook->setEmbedColor("random");
$webhook->setEmbedCurrentTimestamp();

/**
 * Embed author, images and thumbnails
 */
$webhook->setEmbedAuthor(
    "Hearlov Monitoring",
    "https://i.imgur.com/4M34hi2.png"
);

$webhook->setEmbedThumbnail(
    "https://i.imgur.com/ZcLLrkY.png"
);

$webhook->setEmbedImage(
    "https://i.imgur.com/wSTFkRM.png"
);

/**
 * Embed fields
 */
$webhook->addEmbedField("🖥 Server", "EU-1", true);
$webhook->addEmbedField("📡 Status", "ONLINE", true);
$webhook->addEmbedField("🧠 Memory Usage", "3.2 GB / 8 GB", true);
$webhook->addEmbedField("🔥 CPU Load", "27%", true);
$webhook->addEmbedField("⏱ Uptime", "12 hours 43 minutes", false);

/**
 * Embed footer
 */
$webhook->setEmbedFooter(
    "Automated system notification",
    "https://i.imgur.com/4M34hi2.png"
);

/**
 * Finalize embed
 */
$webhook->addLatestEmbed();

/**
 * Send webhook
 */
$webhook->sendWebhook();
