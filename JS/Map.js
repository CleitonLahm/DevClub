const list = [
  {name: 'Rodolfo', vip: true},
  {name: 'Maria', vip: false},
  {name: 'Cleiton', vip: true},
  {name: 'Adriana', vip: false},
  {name: 'Ana', vip: false},
  {name: 'Julio', vip: true},
  {name: 'Carla', vip: false},
]

const newList = list.map( user => {
  const newUser = {
    name: user.name,
    braceletColor: user.vip ? 'Black' : 'Green'
  }
  return newUser
})

console.log(newList)

const students = [
  {name: 'Rodolfo', testGrade: 7},
  {name: 'Maria', testGrade: 4},
  {name: 'Cleiton', testGrade: 6},
  {name: 'Adriana', testGrade: 2},
  {name: 'Ana', testGrade: 6},
  {name: 'Julio', testGrade: 9},
  {name: 'Carla', testGrade: 5},
]

const ApprovedStudents = students.map( student => {
  let approved

  if(student.testGrade > 5){
    approved = 'Yes'
  } else {
    approved = 'No'
  }

  return {
    name: student.name,
  approved: approved
  }
})

console.log(ApprovedStudents)