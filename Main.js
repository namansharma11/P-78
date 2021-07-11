var nameslist= [
    "Pankaj (Dad)",
    "Shuchi (Mom)", 
    "Ridhi and Namridhi (Sister and Me)",
    "Aman and Neha (Uncle and Aunt)",
    "Kamal dev and Suntosh (GrandFather and GrandMother)",
  ]; 
  var lookslist= [
    "https://image.shutterstock.com/image-vector/portrait-handsome-man-shirt-jeans-600w-582282625.jpg",
    "https://image.shutterstock.com/image-vector/illustration-that-moms-wearing-shortsleeved-260nw-754802350.jpg", 
    "https://image.shutterstock.com/image-vector/cute-cartoon-children-smiling-waving-600w-430214611.jpg", 
    "https://image.shutterstock.com/image-vector/uncle-aunt-happy-family-having-600w-557191507.jpg",
    "https://image.shutterstock.com/image-vector/elderly-couple-full-body-asian-600w-1890612514.jpg"
  ];
  var ring = 0 ; 
  function next() {
    document.getElementById("images").src = lookslist[ring];
    document.getElementById("names").innerHTML=nameslist[ring];
    ring++;
  if(ring==4)
  ring=0;}
  