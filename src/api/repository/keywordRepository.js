const Keyword = require("../model/keywordModel");

exports.CreateKeyword = (keyword, tweets_number) => {
    try {
        let new_keyword = new Keyword({
            keyword,
            tweets_number
        });

        new_keyword.save((error, keyword) => {
            if (!error && keyword) {
                console.log("Saved with success")

            } else {
                console.log(error);
            }
        })
    } catch (e) {
        console.log(e);
    }
}