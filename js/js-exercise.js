const users = [
    {
      firstName: 'Justin',
      lastName: 'Reich',
      dob: '1923-01-01',
      username: 'jreich',
      password: '$2y$10$UJlsa5vWq5DUKJjyO38gM.dCZfudWOFCrLWQosh0mhXKaZmRmvDse'
    },
    {
      firstName: 'Sally',
      lastName: 'Smith',
      dob: '1935-03-11',
      username: 'ssmith',
      password: '$2y$10$VaLGU5.7uQLr.eg6kSI9seOcP4JY4XktWt28I9JgblAGIDpkDXbya'
    },
    {
      firstName: 'Fred',
      lastName: 'Smith',
      dob: '1999-01-21',
      username: 'fsmith',
      password: '$2y$10$3USt6Dl8TNMkeh0KioPnfeVpynAotXvSIJ5xrzAHragPEAWMYEBNS'
    },
  ];
  
  
  function getUserCredentials(users){
      let userInfo = [];
      for(let i = 0; i < users.length; i++){
          const user = users[i];
          userInfo.push({
              username: user.username,
              password: user.password,
           }
          )
          }
          return userInfo;
  }
        
  
          
    
      
  
  
  
  
  
  
  console.log(getUserCredentials(users));