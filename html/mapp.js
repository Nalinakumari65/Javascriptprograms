const people=[{
    name:"emma",age:27, position:"leader"},
{ name:"daneail",age:28, position:"traine"},
{name:"ron", age:29,postion:"software"}
];
      const ages =people.map(function(person){
        //console.log(pesron.age);
        return person.age;
      });
      console.log(ages);