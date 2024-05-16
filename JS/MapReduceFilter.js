const companies = [
  { name: "Samsung", marketValue: 50, CEO: "kim Hyum Suk", foundedOn: 1938 },
  {
    name: "Microsoft",
    marketValue: 415,
    CEO: "Satya Nadella",
    foundedOn: 1975,
  },
  { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn: 1968 },
  {
    name: "Facebook",
    marketValue: 383,
    CEO: "Mark Zuckenberg",
    foundedOn: 2004,
  },
  { name: "Spotify", marketValue: 30, CEO: "Daniel Ek", foundedOn: 2006 },
  { name: "Apple", marketValue: 845, CEO: "Tim Cook", foundedOn: 1976 },
];

const companiesAtt = companies.map((company) => {
  company.marketValue = (company.marketValue * 1.1)
  return company;
});

const companiesFoundedBeforeNinety = companiesAtt.filter((company) => {
  return company.foundedOn < 1990;
});

const totalValuecompanysBeforeNinety = companiesFoundedBeforeNinety
  .reduce((acc, value) => {
    return acc + value.marketValue;
  }, 0)
  .toFixed(2);

  console.log(
    `O valor de mercado das empresas foi atualizado e o filtro pegando empresas fundadas antes de 1990 foi aplicado, somando todo o valor de mercado dessas empresas filtradas chegamos ao valor de R$ ${totalValuecompanysBeforeNinety}`
  );


//-----------MODO QUE O PROF FEZ, MAIS SIMPLES E CURTO----------------


const companiesAtt2 = companies
  .map((company) => {
    company.marketValue = (company.marketValue * 1.1)
    return company
  })
  .filter((company) => company.foundedOn < 1990)
  .reduce( (acc, company) => acc + company.marketValue, 0 );

console.log(companiesAtt2.toFixed(2));


//-----------OUTRO MODO AINDA MAIS SIMPLIFICADO----------------

const add10Percent = (company) => {
  company.marketValue = company.marketValue * 1.1
  return company
}

const filterCompanies = (company) => {
  return company.foundedOn < 1990
}

const calculateTotalMarketValue = (acc, company) => { 
  return acc + company.marketValue
}

const marketValueOldCompanies = companies
.map(add10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue, 0)

console.log(marketValueOldCompanies.toFixed(2))