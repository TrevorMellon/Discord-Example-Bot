module.exports = {

    // =================================================
    //
    // Help Functions
    //
    // =================================================

    help: function(msg) {
        var r = "";
        r = "To get help on the example-bot call:\n";
        r += "!example-bot help";
        msg.reply(r);
    },

	example_bot_help: function(msg) {
		var r = "";
		r = "This bot has two functions, \"help\" & \"testing\"\n"
		msg.reply(r);
	}
}

