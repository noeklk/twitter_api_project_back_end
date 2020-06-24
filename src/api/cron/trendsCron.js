const cron = require("node-schedule");
const twitClientHelper = require("../helper/twitClientHelper");
const keywordRepository = require("../repository/keywordRepository");

module.exports = () => {
    const twit = twitClientHelper.GenerateTwitAppOnlyClient();

    cron.scheduleJob("*/30 * * * * *", () => {

        try {
            twit.get("trends/place", { id: "23424819" }, (err, data) => {
                if (!err) {
                    for (let i = 0; i < data[0].trends.length; i++) {
                        let trendTweet = data[0].trends[i];

                        // On va sauvegarder dans la base de données seulement les keywords qui contiennent un volume
                        if (trendTweet.tweet_volume == null) {
                            continue;
                        }

                        keywordRepository.CreateKeyword(trendTweet.name, trendTweet.tweet_volume);
                    }
                } else {
                    console.log(err);
                }
            });
        } catch (error) {
            console.log("Erreur API");
        }
    });
}