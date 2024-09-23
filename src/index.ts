function getCard() {
  const url = 'https://api.magicthegathering.io/v1/cards?name=Black%20Lotus';
  const response = UrlFetchApp.fetch(url);
  const json = response.getContentText();
  const data = JSON.parse(json);
  Logger.log(data);
}

getCard();
