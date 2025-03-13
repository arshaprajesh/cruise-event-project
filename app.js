      function loginDetails(){
        console.log("give username");

        const userName=document.getElementById("userName").value;
        console.log("user name" ,userName);

        const password=document.getElementById("password").value;
        console.log("password" ,password);

        if(userName === "admin" && password === "admin"){
          window.location.href = "welcome.html";
        }
       else{
        console.log("invalid");
         alert("invalid email id or password");
        }

      }


      
    function logOut(){
         
      const button = document.getElementById("index-login");

      button.addEventListener("click", function() {
        window.location.href = "index.html"; 
              
   });

  }
    function cancelDetails(){
      const email=document.getElementById("email").value;
      
            console.log("email" ,email);
    
            const password=document.getElementById("password").value;
            console.log("password" ,password);
    
            const cancelButton=document.getElementById("cancel-button");
            cancelButton.addEventListener('click', function() {
              email.remove(); // Clear the username field
              password.remove();
            
            });
           
    }  
   
    /*function geekfun()    {
     // gfg.style.background = "green"; 

      document.getElementById( 
        "fname").addEventListener( 
        "focus", Geeksfun); 
          
        function Geeksfun() { 
          let item2=document.getElementById("fname").value;
      console.log("number",item2);

      let cost2=document.getElementById("cost2")
      let cost2Text = cost2.textContent;
      let number2 = parseInt(cost2Text);
      console.log("cost1",number2);

      let itemTotal2=item2*number2;
      console.log("item price total");
          const mySpan2=document.getElementById("totalDisplay2");
          mySpan2.textContent = itemTotal2;
        } 

    }*/
    function itemTotalPrice1()    {
      debugger

      console.log("items number started");
      let item1=document.getElementById("form1").value;
      console.log("number",item1);

      let cost1=document.getElementById("cost1")
      let cost1Text = cost1.textContent;
     let number1 = parseInt(cost1Text);;
      console.log("cost1",number1);

      let itemTotal1=item1*number1;
      console.log("cost total1",itemTotal1);

      

      const firstItem=document.getElementById("itemTotal1");
      console.log("secItem  ",firstItem);

      firstItem.addEventListener('click', function() {
        firstItem.textContent = itemTotal1;
      }) ;
    }
   
    function itemTotalPrice2()    {
debugger
      let item2=document.getElementById("form2").value;
      console.log("number",item2);

      let cost2=document.getElementById("cost2")
      let cost2Text = cost2.textContent;
      let number2 = parseInt(cost2Text);
      console.log("cost2",number2);

      let itemTotal=item2*number2;
      console.log("item price total");

      

      const secItem=document.getElementById("itemTotal2");
      console.log("secItem  ",secItem);

      secItem.addEventListener('click', function() {
        secItem.textContent = itemTotal;
      
    }) ;
    
     } 
    
    function totalPrice(){ 
 debugger
      console.log("item price started");
     
     let price2 = document.getElementById("itemTotal1");
     let price2Text = price2.textContent;
     let num2 = parseInt(price2Text);
      console.log(num2);

       
      let price1 = document.getElementById("itemTotal2");
      let price1Text = price1.textContent;
      let num1 = parseInt(price1Text);
      
      console.log(num1);

      let shipping = document.getElementById("shipping");
      let shipFee = shipping.textContent;
      let shippingCost = parseInt(shipFee);
      
      console.log("shipping",shippingCost);

   let priceTotal=num1+num2+shippingCost;
     console.log("total price",priceTotal);
     
      
      const totalButton=document.getElementById("button");
      totalButton.addEventListener('click', function() {
        totalButton.textContent = priceTotal;
  
      }) ; } 
      
      
      function textDetails(){

        
        const message=document.getElementById("message");
       
        message.addEventListener('click', function() {
          alert("message sent successfully");
    
          }) ;
       
        }
    
      
 