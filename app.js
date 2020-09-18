const companies = [
    {name: 'Company One', category: 'Finance', start: 1996, end: 2001},
    {name: 'Company Two', category: 'Retail', start: 1997, end: 2002},
    {name: 'Company Three', category: 'Auto', start: 1961, end: 2003},
    {name: 'Company Four', category: 'Retail', start: 1971, end: 2010},
    {name: 'Company Five', category: 'Finance', start: 1991, end: 2011},
    {name: 'Company Six', category: 'Auto', start: 1989, end: 2020},
    {name: 'Company Seven', category: 'Finance', start: 1987, end: 2012},
    {name: 'Company Eight', category: 'Auto', start: 1991, end: 2019},
    {name: 'Company Nine', category: 'Retail', start: 1988, end: 2017}
]

const ages = [12, 44, 41, 15, 20, 25, 29, 19, 30];

//forEach
// for(i=0; i< companies.length; i++){
//     console.log(companies[i]);
// }

// forEach takes 3 parameters one is simple item, two is index, third is array itself
// companies.forEach(company=> console.log(company));

//filter
// let canDrink = [];
// for(i=0;i<ages.length;i++){
//     if(ages[i]>21){
//     canDrink.push(ages[i]);
//     }
// }
// let canDrink = ages.filter(age=> age>21);
// console.log(canDrink);

// let retailCompanies = companies.filter(company=> company.category === 'Retail');
// console.log(retailCompanies);

// let beforeCompany = companies.filter(company=> company.start>1970 && company.end<2010);
// console.log(beforeCompany);

// let lastedTen = companies.filter(company=> (company.end - company.start > 10));
// console.log(lastedTen);

//Map
// const companyNames = companies.map(company=> `${company.name} ${company.start} ${company.end}`);
// console.log(companyNames);

// const sqrtAges = ages.map(age=> Math.sqrt(age));
// console.log(sqrtAges);

// const sqrAges = ages.map(age=> age*age);
// console.log(sqrAges);

// const dualAges = ages
//                     .map(age=> Math.sqrt(age))
//                     .map(age=> age*age);
// console.log(dualAges);

//Sort
// const sortCompanies = companies.sort((a,b)=> a.start>b.start ? 1 : -1);
// console.log(sortCompanies);

// const sortAges = ages.sort((a,b)=> a-b);
// console.log(sortAges);

//for descending order 'a-b' and for ascending order 'b-a'

//Reduce
// const sumAges = ages.reduce((total,age)=> total + age,0);
// console.log(sumAges);

// const totalYears = companies.reduce((total,company)=> total + (company.end - company.start),0);
// console.log(totalYears);


//map, filter, sort, reduce all combined
const combined = ages
                    .map(age=>age*2)
                    .filter(age=> age >=40)
                    .sort((a,b)=> a-b)
                    .reduce((total,age)=> total+age,0);
console.log(combined);