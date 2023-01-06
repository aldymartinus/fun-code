class getElementBy {
  static id (_id) {
      return document.getElementById(_id);
  };

  static queryAll (_query) {
      return document.querySelectorAll(_query);
  };

  static class (_class) {
      return document.getElementsByClassName(_class);
  }
};

const date = new Date();

class dateTools {

    static getStrMonth() {
        switch (date.getMonth()) {
            case 0:
                return 'January';   
            break;
            case 1:
                return 'February';   
            break;
            case 2:
                return 'March';   
            break;   
            case 3:
                return 'April';   
            break;
            case 4:
                return 'May';   
            break;
            case 5:
                return 'June';   
            break; 
            case 6:
                return 'July';   
            break;
            case 7:
                return 'August';   
            break;
            case 8:
                return 'September';   
            break;
            case 9:
                return 'October';   
            break;
            case 10:
                return 'November';   
            break;
            case 11:
                return 'December';   
            break;
        }; 
    };

    static getCurrentFullDate() {
        let currentDate = `${date.getDate()} ${this.getStrMonth()} ${date.getFullYear()}`;
        return currentDate;
    };

    static toEpoch(str) {
        let dateString = new Date(str);
        return dateString.getTime()/1000.0;
    };

    static decodeEpoch(str) {
        let epoch = new Date(str);
        return epoch.toLocaleString('en-ID', { hour12: false} );
    };
};

setInterval(() => {
    const epochTime = Date.now();
    getElementBy.id("hour").textContent = dateTools.decodeEpoch(epochTime);
}, 1);

const t = {
    hours: date.getHours(),
    minute: date.getMinutes(),
    seconds: date.getSeconds(),
    miliseconds: date.getMilliseconds()
};

const { hours, minute, seconds, miliseconds } = t;

const dayInMiliseconds = (hours*3600+minute*60+seconds+miliseconds/1000);

getElementBy.id("day-percentage").min = 0;
getElementBy.id("day-percentage").max = 86400;
getElementBy.id("day-percentage").value = (Math.round( dayInMiliseconds ));

getElementBy.id("percentage-of-day").textContent = (`${Math.round(dayInMiliseconds/86400*100)}%`);

console.log(`${Math.round(dayInMiliseconds/86400*100)}%`);
