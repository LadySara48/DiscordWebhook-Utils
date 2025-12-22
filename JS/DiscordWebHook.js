/**
 * @WebhookUtil
 *
 * EN: This software was developed by hearlov. It works with NodeJS and JS software!
 * TR: Bu yazılım hearlov tarafından üretilmiştir. NodeJS ve JS yazılımlarında çalışır!
 */
class WebhookUtil {

    /**
     * @var json_array
     * Object Discord Webhook JSON Decode
     */
    json_array = {};

    /**
     * @var embed
     * Object Discord Webhook Embed JSON Decode
     */
    embed = {};

    /**
     * new webhook utilization
     * yeni webhooku başlatır
     */
    constructor() {}

    /**
     * @param {string} name
     */
    setUsername(name) {
        this.json_array["username"] = name;
        return this;
    }

    /**
     * @param {string} message
     * set Message Content in Discord
     */
    setContent(message) {
        this.json_array["content"] = message;
        return this;
    }

    /**
     * @param {string} avt
     * set Discord sender profile Avatar
     */
    setAvatarURL(avt) {
        this.json_array["avatar_url"] = avt;
        return this;
    }

    /**
     * @param {boolean} tf
     * Enable or Disable Message Read Voice
     */
    setTTS(tf) {
        this.json_array["tts"] = tf;
        return this;
    }

    /**
     * @param {string} title
     * new Embed Maker
     */
    newEmbed(title) {
        this.embed["title"] = title;
        return this;
    }

    /**
     * @param {string} url
     * Embed Title URL
     */
    setEmbedTitleURL(url) {
        this.embed["url"] = url;
        return this;
    }

    /**
     * @param {string} txt
     * Embed content
     */
    setEmbedDescription(txt) {
        this.embed["description"] = txt;
        return this;
    }

    /**
     * add Embed to current Timestamp
     */
    setEmbedCurrentTimestamp() {
        this.embed["timestamp"] = new Date().toISOString();
        return this;
    }

    /**
     * @param {string} hexcolor
     * Set Embed Color
     * set 6 length hex color or "random"
     */
    setEmbedColor(hexcolor) {
        if (hexcolor === "random") {
            const rand = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
            const color = rand[Math.floor(Math.random() * 16)] + rand[Math.floor(Math.random() * 16)] + 
                         rand[Math.floor(Math.random() * 16)] + rand[Math.floor(Math.random() * 16)] + 
                         rand[Math.floor(Math.random() * 16)] + rand[Math.floor(Math.random() * 16)];
            this.embed["color"] = parseInt(color, 16);
            return this;
        }
        this.embed["color"] = parseInt(hexcolor, 16);
        return this;
    }

    /**
     * @param {string} text
     * @param {string} icon_url
     * add Embed footer
     */
    setEmbedFooter(text, icon_url) {
        this.embed["footer"] = { text: text, icon_url: icon_url };
        return this;
    }

    /**
     * @param {string} url
     * add Embed Image
     */
    setEmbedImage(url) {
        this.embed["image"] = { url: url };
        return this;
    }

    /**
     * @param {string} url
     * add Embed Thumbnail
     */
    setEmbedThumbnail(url) {
        this.embed["thumbnail"] = { url: url };
        return this;
    }

    /**
     * @param {string} name
     * @param {string} imageurl
     * add Embed Author
     */
    setEmbedAuthor(name, imageurl) {
        this.embed["author"] = { name: name, url: imageurl };
        return this;
    }

    /**
     * @param {string} name
     * @param {string} content
     * @param {boolean} inline
     * add Embed Field
     */
    addEmbedField(name, content, inline = false) {
        if (!this.embed["fields"]) {
            this.embed["fields"] = [];
        }
        this.embed["fields"].push({ name: name, value: content, inline: inline });
        return this;
    }

    /**
     * add Embed for all Last changes
     */
    addLatestEmbed() {
        if (!this.embed["title"]) return this;
        if (!this.json_array["embeds"]) {
            this.json_array["embeds"] = [];
        }
        this.json_array["embeds"].push(this.embed);
        this.embed = {};
        return this;
    }

    /**
     * @param {string} url
     * @return {Promise<void>}
     *
     * send webhook
     */
    async sendWebhook(url){
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.json_array)
            });
        }catch (error){
            console.log("Hata: ", error);
        }
    }
}

export default WebhookUtil;