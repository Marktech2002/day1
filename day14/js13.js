let age = 100;
    let age2 = age;
    // console.log(age, age2); 100 100
    age = 200;
    // console.log(age, age2); 200 100

    let name = 'Wes';
    let name2 = name;
    // console.log(name, name2);
    name = 'wesley';
    // console.log(name, name2);
   
    const players = ['weevil' , 'ahmed' , 'soft' , 'surpy'];
    const team = players ;

    // or create a new array and concat the old one in
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'heeee hawww';
    console.log(team4);

    const team5 = Array.from(players);

   // with Objects
   const person = {
    name: 'Wes Bos',
    age: 80
  };

  // and i make a copy:
  const captain = person;
  captain.number = 99; // this will not work cos of the refering

  // how do we take a copy instead?
  const cap2 = Object.assign({} , person , {age : 100})
    
    const maktech = {
        name: 'soft' ,
        age : '20' ,
        socialMedia :  {
          twitter : 'badman' ,
          instagram : 'badwoman' ,
          facebook : 'omo olope oporr' 
  
        }
      };
  
      console.clear();
      console.log(maktech);
  
      const dev = Object.assign({}, maktech);
  
      const dev2 = JSON.parse(JSON.stringify(maktech));
  