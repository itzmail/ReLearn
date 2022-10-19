import {sendNotification, sendAGIF} from '../services/telegramService';

let getHomePage = (req, res) => {
    return res.render("homepage.ejs");
}

let handlePushTeleNotification = async (req, res) => {
    let user = {
        fullName: req.body.fullName,
        email: req.body.email,
        description: req.body.description,
    }
    // send notif to telegram
    await sendNotification(user);
    //then redirect to the telegram page
    return res.redirect("/telegram");
}

let getTelegramPage = (req, res) => {
    return res.render("telegram.ejs");
}

let sendAnimation = async (req, res) => {
    await sendAGIF();
    return res.redirect("/")
}

module.exports = {
    getHomePage,
    handlePushTeleNotification,
    getTelegramPage,
    sendAnimation
}