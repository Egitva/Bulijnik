class Button{
    constructor(width, height, text){
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showBtn() {
        document.write(`<button style="width: ${this.width}; height: ${this.height};">${this.text}</button>`)
    }
}
class BootstrapButton{
    constructor(width, height, text, color){
        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
    }
    showBtn() {
        document.write(`<button style="width: ${this.width}; height: ${this.height}; color: ${this.color};">${this.text}</button>`)
    }
}
class News {
    constructor(title, text, tags, publishDate) {
      this.title = title;
      this.text = text;
      this.tags = tags;
      this.publishDate = new Date(publishDate);
    }
  
    getFormattedDate() {
      const now = new Date();
      const diffTime = now - this.publishDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
      if (diffDays < 1) {
        return "сегодня";
      } else if (diffDays < 7) {
        return `${diffDays} ${this.getDayWord(diffDays)} назад`;
      } else {
        const day = String(this.publishDate.getDate()).padStart(2, '0');
        const month = String(this.publishDate.getMonth() + 1).padStart(2, '0');
        const year = this.publishDate.getFullYear();
        return `${day}.${month}.${year}`;
      }
    }
  
    getDayWord(days) {
      if (days % 10 === 1 && days % 100 !== 11) return 'день';
      if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) return 'дня';
      return 'дней';
    }
  
    print() {
      const dateStr = this.getFormattedDate();
      const tagsStr = this.tags.join(', ');
  
      document.write(`
        <div style="border: 1px solid #ccc; padding: 15px; margin-bottom: 20px; max-width: 600px;">
          <h2 style="margin-top: 0;">${this.title}</h2>
          <p>${this.text}</p>
          <div style="display: flex; justify-content: space-between; color: #666;">
            <span>Теги: ${tagsStr}</span>
            <span>${dateStr}</span>
          </div>
        </div>
      `);
    }
  }
  
  // Демонс
  const news1 = new News(
    "Новый курс по JavaScript", 
    "В университете запустили новый курс по современному JavaScript.", 
    ["образование", "IT"], 
    new Date() // сегодня
  );
  
  const news2 = new News(
    "Открытие нового кафе", 
    "В центре города открылось новое кафе с интересным интерьером.", 
    ["город", "еда"], 
    new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) // 3 дня назад
  );
  
  news1.print();
  news2.print();

  class NewsFeed {
    constructor() {
      this.newsList = [];
    }
  
    get count() {
      return this.newsList.length;
    }
  
    addNews(news) {
      this.newsList.push(news);
    }
  
    removeNews(index) {
      if (index >= 0 && index < this.newsList.length) {
        this.newsList.splice(index, 1);
      }
    }
  
    displayAll() {
      document.write('<h1>Новостная лента</h1>');
      this.newsList.forEach(news => news.print());
    }
  
    sortByDate() {
      this.newsList.sort((a, b) => b.publishDate - a.publishDate);
    }
  
    searchByTag(tag) {
      return this.newsList.filter(news => news.tags.includes(tag));
    }
  }
  
  // Демон
  const feed = new NewsFeed();
  
  feed.addNews(new News(
    "Вышел новый фильм", 
    "На этой неделе в кинотеатрах появился новый фильм известного режиссера.", 
    ["кино", "культура"], 
    new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
  ));
  
  feed.addNews(new News(
    "Изменения в расписании", 
    "С понедельника изменится расписание автобусов на центральном маршруте.", 
    ["город", "транспорт"], 
    new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
  ));
  
  feed.addNews(new News(
    "IT-конференция", 
    "В следующем месяце пройдет крупная IT-конференция с участием международных экспертов.", 
    ["IT", "образование"], 
    new Date()
  ));
  
  console.log(`Количество новостей: ${feed.count}`);
  
  feed.sortByDate();
  feed.displayAll();
  
  console.log("Поиск новостей по тегу 'IT':");
  const itNews = feed.searchByTag("IT");
  itNews.forEach(news => news.print());
  
  feed.removeNews(1);
  console.log(`После удаления количество новостей: ${feed.count}`);