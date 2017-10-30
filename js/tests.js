function load() {

	new testInjector("users moving tests",
		[
			{
				func: moveFromFolloweesToUsersTest,
				desc: "Move From Followees To Users"
			},

			{
				func: moveFromUsersToFolloweesTest,
				desc: "Move From Users To Followees"
			}]).inject();

	new testInjector("button change tests",
		[
			{
				func: changeButtonColorTest,
				desc: "Add Tweet Test"
			},

			{
				func: changeButtonTextTest,
				desc: "text Box Clear Test"
			}]).inject();

	new testInjector("index.js tests",
		[
			{
				func: addTweetTest,
				desc: "Add Tweet Test"
			},

			{
				func: textBoxClearAfterAddTweetTest,
				desc: "text Box Clear Test"
			}]).inject();

}

window.onload = load();
