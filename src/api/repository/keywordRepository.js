const Keyword = require("../model/keywordModel");

exports.CreateKeyword = (keyword, tweets_number) => {
    try {
        let new_keyword = new Keyword({
            keyword,
            tweets_number
        });

        new_keyword.save((error, data) => {
            if (error) {
                console.log(`le keyword: ${keyword} avec comme volume: ${tweets_number} n'est pas rentré en base de donnée`)
            }
        })
    } catch (e) {
        console.log(e);
    }
}