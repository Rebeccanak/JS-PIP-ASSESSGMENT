//  Nolly Wood Movie Planner:AS a producer in the booming Nollywood movie industry , 
// you are in charge of multiple film projects at once.Each movie has different cast members
//  , shooting schedules , and budgets . You want to write a program to help manage your film projects
//   efficiently . The software should be able to handle he complexities of scheduling ,budgeting and 
//   coordinating between different movie projects. do it in kotlin , javascript and  python

class MovieProject{
    constructor(title,cast,shootingSchedule,budgets){
        this.title =title;
        this.cast =cast;
        this.shootingSchedule=shootingSchedule;
        this.budgets=budgets;
    }
AddCastMember() {
  

}
}

class AnkaraFabbric{
    constructor(design,temperature,mood){
        this.design=design;
        this.temperature=temperature;
        this.mood=mood;

    }
    changeDesign(){
        const temperatureValue =this.temperature.getValue();
        const moodValue =this.mood.getValue();

        const predictedDesign =predictDesign(temperatureValue,moodValue);
        
        //here we are creating a new object that takes in from the 
        //constructor class and changeDesign method

        const prediction=new Prediction(predictedDesign);

    }
}

class MigrationForecast {
    constructor(weather, riverLevel, predatorLocation) {
      this.weather = weather;
      this.riverLevel = riverLevel;
      this.predatorLocation = predatorLocation;
    }
  
    predictMovement() {
      if (this.weather === 'sunny' && this.riverLevel < 5 && this.predatorLocation === 'south') {
        return 'The herds will move north';
      } else if (this.weather === 'rainy' && this.riverLevel > 10 && this.predatorLocation === 'west') {
        return 'The herds will move east';
      } else {
        return 'The herds will stay put';
      }
      
        
      }

      }

const forecast = new MigrationForecast('sunny', 3, 'south');
console.log(forecast.predictMovement()); // Output: The herds will move north




// The Ever-changing Ankara you are a fashion designer known for your unique and vibrant Ankara designs
// . Recently , you have discovered that some of your fabric patterns change their designs based
// on the temperature and mood of the wearer.You want to create a software application that can predict
//   the changes in the fabric design given the mood and temperature data . Think about the classesyou will need to model the changing Ankara and how to predict the changes 
//  do it in the languages below 
// . Python , Javascript, kotlin

// Javascript

class AnkaraDesigns{
  constructor(temperature,mood){
    this.temperature = temperature,
    this.mood = mood
  }

}

// class LegendaryDrum {
//   constructor(material, size) {
//     this.material = material;
//     this.size = size;
//   }
//   playSound(tone) {
//     console.log(`The drum produces ${tone} sound`);
//   }
//   printDetails() {
//     console.log(`This drum is made of ${this.material} and is ${this.size} in size`);
//     console.log(`The ${this.constructor.name} drum is made of ${this.material} and is of size ${this.size}`);

//     }
// }
// class Djembe extends LegendaryDrum {
//   playSound(tone) {
//     // super.playSound(tone)
//     console.log(`The Djembe drum produces ${tone} sound`);
//   }
// }
// class TalkingDrum extends LegendaryDrum {
//   playSound(tone) {
//     // super.playSound(tone)
//     console.log(`The Talking Drum produces ${tone} sound`);
//   }
// }
// class Bouragarabou extends LegendaryDrum {
//   playSound(tone) {
//     // super.playSound(tone)
//     console.log(`The Bouragarabou drum produces ${tone} sound`);
//   }
// }
// const myTalkingDrum = new TalkingDrum("wood", "large");
// myTalkingDrum.playSound("deep");
// myTalkingDrum.printDetails();

// const myDjembe  = new Djembe ("wood", "large");
// myDjembe.playSound("deep");
// myDjembe.printDetails();

// const myBouragarabou = new Bouragarabou("wood", "large");
// myBouragarabou.playSound("deep");
// myBouragarabou.printDetails();

//yesteto examople

// class LegendaryDrum {
//   constructor(material, size) {
//     this.material = material;
//     this.size = size;
//   }
//   playSound(tone) {
//     console.log(`The drum produces ${tone} sound`);
//     console.log(`The ${this.constructor.name} drum is made of ${this.material} and is of size ${this.size}`);
//   }
// }

// class Djembe extends LegendaryDrum {
//   playSound(tone) {
//     super.playSound(tone);
//     console.log(`The Djembe drum produces ${tone} sound`);
//   }
// }

// class TalkingDrum extends LegendaryDrum {
//   playSound(tone) {
//     super.playSound(tone);
//     console.log(`The Talking Drum produces ${tone} sound`);
//   }
// }

// class Bouragarabou extends LegendaryDrum {
//   playSound(tone) {
//     super.playSound(tone);
//     console.log(`The Bouragarabou drum produces ${tone} sound`);
//   }
// }

// const myTalkingDrum = new TalkingDrum("wood", "large");
// myTalkingDrum.playSound("deep");

// const myDjembe  = new Djembe ("wood", "large");
// myDjembe.playSound("deep");

// const myBouragarabou = new Bouragarabou("wood", "large");
// myBouragarabou.playSound("deep");
  
 




class Druming{
  constructor(material,size){
    this.material=material
    this.size=size

  }
  playSounds(tones){
    console.log(`produces high ${tones} tones of sounds`)
    console.log(`This ${this.constructor.name} drum is made of ${this.material} and is of size  ${this.size}`);


  }
}

class TheDjembe extends Druming{
  playSounds(tones){
    super.playSounds(tones);
    console.log(`theDjembe Produces a wide range of ${tones} of sound`)
  }
}
class TalkingDruming extends Druming{
  constructor(material,size,height){
    super(material,size)
    this.height=height
  }

  playSounds(tones){
    super.playSounds(tones);
    console.log(`mimics the lines of human ${tones} speech and has ${this.height} `)
    return this.height
  }
}

class Bougarabous extends Druming{
  playSounds(tones){
    super.playSounds(tones);
    console.log(`produces deep rich base ${tones}`)
  }
}

const theDjembeing = new TheDjembe("wood","small");
theDjembeing.playSounds("heavy");

const theTalkingDrum =new TalkingDruming("leather","huge","3 feet");
theTalkingDrum.playSounds("much");

const theBougarabous =new Bougarabous("animalskin","big");
theBougarabous.playSounds("deep");







class Baobab {
  constructor(fruit, season, power, effects) {
    this.fruit = fruit;
    this.season = season;
    this.power = power;
    this.effects = effects;
  }
}

let fruits = [];
let firstfruits = new Baobab("baobab fruit", "dry", "energetic", "strength");
fruits.push(firstfruits);

class Seasons {
  constructor(season) {
    this.season = season;
  }
  predictFruit() {
    let fruit = fruits.filter((item) => item.season === this.season);
    return fruit;
  }
}

let drySeason = new Seasons("dry");
console.log(drySeason.predictFruit()); // Output: [ { fruit: 'baobab fruit', season: 'dry', power: 'energetic', effects: 'strength' } ]



// class ManageProject{
//   constructor(schedule,castMember,budget,scene){
//     this.schedule=schedule
//     this.castMember=castMember
//     this.budget=budget
//     this.scene=scene
//   }
//   getSchedule(){
//     const oneScene=this.schedule/this.scene
//     return oneScene;
//     }
//     getBudget(allocatedBudget){
//       this.budget.map(budget=>
//         let values=object value(budget))
//         {values.reduce(a,b)=>(a+b>0)
//           console.log(totalBudget)
//         })
//         if(totalBudget >allocatedBudget){
//           return ("total budget excceds $allocatedBudget")
//         }
//         else{
//           "budget is within allocated budget"
//           // this.schedule => total days of shooting
//         }
//         Budget = [{
//           castsalary= 20,000,
//           transport =10,000,
//           location = uganda
//         }]
//     }
// }


class Movie {
  constructor(title, cast, schedule, budget) {
    this.title = title;
    this.cast = cast;
    this.schedule = schedule;
    this.budget = budget;
  }

  addCastMember(member) {
    this.cast.push(member);
  }

  removeCastMember(member) {
    const index = this.cast.indexOf(member);
    if (index > -1) {
      this.cast.splice(index, 1);
    }
  }

  updateSchedule(schedule) {
    this.schedule = schedule;
  }

  calculateRemainingBudget(expenses) {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    return this.budget - totalExpenses;
  }
}


class MoviePlanner {
  constructor() {
    this.movies = [];
    this.budget = 0;
  }

  addMovie(movie) {
    this.movies.push(movie);
    this.budget += movie.budget;
  }

  removeMovie(movie) {
    const index = this.movies.indexOf(movie);
    if (index > -1) {
      this.movies.splice(index, 1);
      this.budget -= movie.budget;
    }
  }

  updateBudget(amount) {
    this.budget += amount;
  }

  generateReport() {
    let report = '';
    this.movies.forEach((movie) => {
      report += `Title: ${movie.title}\n`;
      report += `Cast: ${movie.cast.join(', ')}\n`;
      report += `Schedule: ${movie.schedule}\n`;
      report += `Budget: ${movie.budget}\n\n`;
    });
    report += `Total Budget: ${this.budget}\n`;
    return report;
  }
}

const movie1 = new Movie('The Nollywood Movie', ['Actor 1', 'Actor 2'], 'June 1 - June 30', 1000000);
const movie2 = new Movie('The Blockbuster Movie', ['Actor 3', 'Actor 4'], 'July 1 - July 31', 2000000);
const movie3 = new Movie('The Avengers',['Actor 5', 'Actor 6'],'August 2 -August 30',250000);

const planner = new MoviePlanner();
planner.addMovie(movie1);
planner.addMovie(movie2);
planner.addMovie(movie3);

console.log(planner.generateReport());





class GreatMigration{
  constructor(weatherPatterns,riverlevels){
    this.weatherPatterns=weatherPatterns
    this.riverlevels=riverlevels

  }
  migratingAnimals(){
    if(this.weather==="dry"  || this.riverlevels ==="low"){
      console.log("The migration will occur");
    }
    else if(this.weather ==="wet" || this.riverlevels ==="high"){
      console.log("Migration will not occur")
    }
    else{
      console.log("Migration did not change")
    }
  }
}
const newMigrate = new GreatMigration("dry","low");
newMigrate.migratingAnimals();




class AnkaraDesign{
  constructor(temperature,mood){
    this.temperature=temperature
    this.mood=mood
  }
  predictDesign(){
    const temp = 20;
    const mood = 5;
    if(this.temprature >= temp || this.mood == mood){
      console.log("the design changed to floral");
    }
    else if(this.temperature < temp || this.mood !== mood ){
      console.log("the design changed to black paterns");
    }
    else{
      console.log("The design was detained")
    }
  }

}
let pattern = new AnkaraDesign(25,3);
pattern.predictDesign();
