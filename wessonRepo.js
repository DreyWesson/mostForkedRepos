

// async function gitHub() {
//   try {const res = await fetch('https://api.github.com/users/DreyWesson/repos');
//     const data = await res.json();
//     data.map((element, index) => {
//       if (index < 10) 
//         console.log(`0${index}. ${element.full_name} (${element.id})`)
//       else
//         console.log(`${index}. ${element.full_name}`)
//     });
//   } catch (error) {
//     console.log(`An error occurred ${error}`)
//   }
//   console.log(data);
// }
// gitHub);


// Using promise.all for concurrency sake 
// since the two fetch are not dependent on each other
async function gitHub(id) {
  try {const res = fetch(`https://api.github.com/users/${id}/repos`);
    const response = fetch(`https://api.github.com/users/${id}`);
    
    // Using promise.all for concurrency sake 
    // since the two fetch are not dependent on each other
    const encaps = await Promise.all([res, response])

    // Using destructuring to get the res and response from the encaps array
    const [resDestructure, responseDestructure] = encaps;
    const data = await resDestructure.json();
    const data2 = await responseDestructure.json();
    console.log(data);
    console.log(data2);
    data.map((element, index) => {
      if (index < 10) 
        console.log(`0${index}. ${element.full_name} (${element.id})`)
      else
        console.log(`${index}. ${element.full_name}`)
    });
  } catch (error) {
    console.log(`An error occurred ${error}`)
  }
}
gitHub('DreyWesson');
