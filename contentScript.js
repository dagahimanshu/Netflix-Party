console.log("Hello World");

function getPlayer() {
  try {
    const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
    const playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
    const player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);

    return player;
  } catch (err) {
    alert("Netflix link sync unable to access player on page");
    console.error(err);
  }
}

const player = getPlayer();

console.log(player);
