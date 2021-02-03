var client;

document.onreadystatechange = function() {
  if (document.readyState === 'interactive') renderApp();

  function renderApp() {
    var onInit = app.initialized();

    onInit.then(getClient).catch(handleErr);
    
    function getClient(_client) {
      client = _client;
      client.events.on('app.activated');

      client.data.get("conversation").then(function(data) {
        console.log("conversation",data);
      });

    }
  }
};

function handleErr(err = 'None') {
  console.error(`Error occured. Details:`, err);
}
