class Newspaper {

  newspaperFunction() {
    var person = prompt("Namn:");
    var email = prompt("Email:");
    if (email == "" || person == "" || email == null || person == null) {
      alert("Avbrutet! Tryck på OK för att stänga");
    } else {
      alert(person + " with email: " + email + " is subcribed!");
    }
  }
}