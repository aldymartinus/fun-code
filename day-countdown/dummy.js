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

const epochTime = Date.now();

setInterval(() => {
    getElementBy.id("hour").textContent = dateTools.decodeEpoch(epochTime);
}, 1);

getElementBy.id("day-percentage").min = dateTools.toEpoch("12/29/2022, 00:00:00");
getElementBy.id("day-percentage").max = dateTools.toEpoch("12/29/2022, 23:59:59");
getElementBy.id("day-percentage").value = dateTools.toEpoch(dateTools.decodeEpoch(epochTime));

console.log(dateTools.toEpoch("12/29/2022, 00:00:00"));
console.log(dateTools.toEpoch("12/29/2022, 23:59:59"));
console.log(dateTools.toEpoch(dateTools.decodeEpoch(epochTime)));
