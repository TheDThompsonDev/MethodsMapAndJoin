const namesOfPeople = [
    {firstName: "Danny", lastName: "Thompson"},
    {firstName: "Brad", lastName: "Traversy"},
    {firstName: "Florin", lastName: "Pop"},
    {firstName: "Kevin", lastName: "Powell"},
];

function myFunction(){
    document.getElementById("names").innerHTML = namesOfPeople.map(person => [person.firstName, person.lastName].join(" ")).join(", ");
   
}