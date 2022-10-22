const client = require("../index");

client.on("ready", async () => {
    console.log(`${client.user.tag} is now online ok?`);
    console.log("A music bot made by !xd.Haris.#0001");
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 
        let serverIn = numberWithCommas(client.guilds.cache.size);
        let totalMembers = numberWithCommas(client.guilds.cache.reduce((a,b) => a + b.memberCount, 0));

        client.user?.setPresence({
            status: "idle", 
            activities: [   
                {
                    name: `/help | Monster Music ♪`,
                    type: "STREAMING", 
                    url: "https://twitch.tv/xdharis55" 
                }
            ]
    });
});