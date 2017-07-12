 let title = '<h1>Infernal Internal Company Directory</h1>';
 let titleSelect = document.querySelector(".container")
 titleSelect.innerHTML = title;





function pooperScooper(thing) {

  var pageInfo = document.querySelector(".container");
  var hereItIs = "";

 for (let i = 0; i < customers.results.length; i++) {


   hereItIs += `
   <article>
     <div class = "firstRow">
       <img src="${customers.results[i].picture.large}"></img>
       <div class="employeeName">
         ${customers.results[i].name.first} ${customers.results[i].name.last}
       </div>
       <div class="email">
         ${customers.results[i].email}
       </div>
       <div ="addressLine1">
         ${customers.results[i].location.street}
       </div>
       <div class = "addressLine2">
         ${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i].location.postcode}
       </div>
       <div class="phoneNumber">
         ${customers.results[i].cell}
       </div>
       <div class"ssn">
         ${customers.results[i].id.value}
       </div>
     </div>

     </div>
   </article>
   `;

pageInfo.innerHTML = hereItIs;
   }
}

pooperScooper(customers);
