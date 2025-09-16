C:\Users\rahul>mongosh
Current Mongosh Log ID: 68c91b634ed5bb48ccb71235
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
Using MongoDB:          8.0.5
Using Mongosh:          2.4.2
mongosh 2.5.8 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-09-16T09:12:54.061+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> db.students.insertMany([
...   { name: "Kuldeep", age: 22, course: "BCA", marks: 75 },
...   { name: "Ravi", age: 23, course: "MCA", marks: 82 },
...   { name: "Amit", age: 21, course: "B.Tech", marks: 45 },
...   { name: "Neha", age: 20, course: "BCA", marks: 65 },
...   { name: "Pooja", age: 24, course: "MCA", marks: 90 },
...   { name: "Suresh", age: 19, course: "BBA", marks: 55 },
...   { name: "Ankit", age: 22, course: "B.Tech", marks: 38 },
...   { name: "Meena", age: 21, course: "BCA", marks: 72 },
...   { name: "Rahul", age: 25, course: "MBA", marks: 68 },
...   { name: "Simran", age: 23, course: "MCA", marks: 49 },
...   { name: "Vikas", age: 20, course: "B.Com", marks: 60 },
...   { name: "Deepak", age: 22, course: "BCA", marks: 40 },
...   { name: "Kavita", age: 21, course: "MCA", marks: 88 },
...   { name: "Arjun", age: 24, course: "B.Tech", marks: 95 },
...   { name: "Preeti", age: 19, course: "BCA", marks: 30 },
...   { name: "Manoj", age: 20, course: "BBA", marks: 77 },
...   { name: "Rohit", age: 23, course: "MBA", marks: 52 },
...   { name: "Jyoti", age: 22, course: "BCA", marks: 85 },
...   { name: "Ashok", age: 21, course: "MCA", marks: 33 },
...   { name: "Geeta", age: 25, course: "B.Tech", marks: 70 },
...   { name: "Tarun", age: 20, course: "BBA", marks: 61 },
...   { name: "Sneha", age: 22, course: "BCA", marks: 93 },
...   { name: "Lokesh", age: 23, course: "MCA", marks: 47 },
...   { name: "Anjali", age: 21, course: "MBA", marks: 79 },
...   { name: "Karan", age: 24, course: "B.Com", marks: 55 },
...   { name: "Ramesh", age: 19, course: "B.Tech", marks: 42 },
...   { name: "Swati", age: 20, course: "BCA", marks: 88 },
...   { name: "Mohit", age: 22, course: "MBA", marks: 66 },
...   { name: "Divya", age: 23, course: "MCA", marks: 59 },
...   { name: "Sachin", age: 21, course: "BBA", marks: 81 }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68c91b674ed5bb48ccb71236'),
    '1': ObjectId('68c91b674ed5bb48ccb71237'),
    '2': ObjectId('68c91b674ed5bb48ccb71238'),
    '3': ObjectId('68c91b674ed5bb48ccb71239'),
    '4': ObjectId('68c91b674ed5bb48ccb7123a'),
    '5': ObjectId('68c91b674ed5bb48ccb7123b'),
    '6': ObjectId('68c91b674ed5bb48ccb7123c'),
    '7': ObjectId('68c91b674ed5bb48ccb7123d'),
    '8': ObjectId('68c91b674ed5bb48ccb7123e'),
    '9': ObjectId('68c91b674ed5bb48ccb7123f'),
    '10': ObjectId('68c91b674ed5bb48ccb71240'),
    '11': ObjectId('68c91b674ed5bb48ccb71241'),
    '12': ObjectId('68c91b674ed5bb48ccb71242'),
    '13': ObjectId('68c91b674ed5bb48ccb71243'),
    '14': ObjectId('68c91b674ed5bb48ccb71244'),
    '15': ObjectId('68c91b674ed5bb48ccb71245'),
    '16': ObjectId('68c91b674ed5bb48ccb71246'),
    '17': ObjectId('68c91b674ed5bb48ccb71247'),
    '18': ObjectId('68c91b674ed5bb48ccb71248'),
    '19': ObjectId('68c91b674ed5bb48ccb71249'),
    '20': ObjectId('68c91b674ed5bb48ccb7124a'),
    '21': ObjectId('68c91b674ed5bb48ccb7124b'),
    '22': ObjectId('68c91b674ed5bb48ccb7124c'),
    '23': ObjectId('68c91b674ed5bb48ccb7124d'),
    '24': ObjectId('68c91b674ed5bb48ccb7124e'),
    '25': ObjectId('68c91b674ed5bb48ccb7124f'),
    '26': ObjectId('68c91b674ed5bb48ccb71250'),
    '27': ObjectId('68c91b674ed5bb48ccb71251'),
    '28': ObjectId('68c91b674ed5bb48ccb71252'),
    '29': ObjectId('68c91b674ed5bb48ccb71253')
  }
}
test> db.students.find({age: {$gt: 23}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  }
]
test> db.students.find()
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  }
]
Type "it" for more
test> 
//Q.1 Find students whose age is greater than 23.
test> db.students.find({age: {$gt: 23}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  }
]
test> 
//Q.2 Find students whose age is less than 22.
test> db.students.find({age: {$lt: 22}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.3 Find students whose age is greater than or equal to 24.
test> db.students.find({age: {$gt: 24}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  }
]
test> 
//Q.4 Find students whose age is not equal to 20.
test> db.students.find({age: {$ne: 20}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  }
]
Type "it" for more
test> 
//Q.5 Find students whose age is 19 or 25.
test> db.students.find({age: {$gt: 19, $lt: 25}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  }
]
Type "it" for more
test> 
//Q.6 Find students whose marks are greater than 85.
test> db.students.find({marks: {$gt: 85}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  }
]
test> 
//Q.7 Find students whose marks are less than or equal to 40.
test> db.students.find({marks: {$lte: 40}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  }
]
test> 
//Q.8 Find students whose marks are not equal to 70.
test> db.students.find({marks: {$ne: 70}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  }
]
Type "it" for more
test> 
  //Q.9 Find students whose marks are between 60 and 80 (inclusive).
test> db.students.find({marks: {$gt: 60, $lt: 80}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  }
]
test> 
//Q.10 Find students whose marks are greater than 80 and age is less than 22.
test> db.students.find({marks: {$gt: 80}, age: {$lt: 22}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.11 Find students whose course is BCA and marks are more than 70.
test> db.students.find({course: 'BCA', marks: {$gt: 70}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  }
]
test> 
//Q.12 Find students whose course is MCA and age is less than 23.
test> db.students.find({course: 'MCA', age: {$lt: 23}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  }
]
test> 
//Q.13 Find students whose course is not MBA.
test> db.students.find({ course: { $ne: "MBA" } })
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  }
]
Type "it" for more
test> 
//Q.14 Find students whose age is between 20 and 22 (inclusive).
test> db.students.find({age: {$gte: 20, $lte: 22}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.15 Find students whose marks are less than 50 and course is B.Tech.
test> db.students.find({marks: {$lt: 50}, course: 'B.Tech'})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  }
]
test> 
//Q.16 Find students whose age is greater than 22.
test> db.students.find({age: {$gt: 22}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  }
]
test> 
//Q.17 Find students whose age is less than 23
test> db.students.find({age: {$lt: 23}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.18 Find students whose age is greater than or equal to 21
test> db.students.find({age: {$gte: 21}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  }
]
Type "it" for more
test> 
//Q.19 Find students whose age is less than or equal to 19.
test> db.students.find({age: {$lte: 19}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  }
]
test> 
//Q.20 Find students whose age is not equal to 20.
test>  db.students.find({age: {$ne: 20}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  }
]
Type "it" for more
test> 
//Q.21 Find students whose age is either 23 or 24.
test> db.students.find({age: {$gte: 23, $lte: 24}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  }
]
test> 
//Q.22 Find students whose marks are greater than 85.
test> db.students.find({marks: {$gt: 85}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  }
]
test> 
//Q.23 Find students whose marks are less than 45.
test> db.students.find({marks: {$lt: 45}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  }
]
test> 
//Q.24 Find students whose marks are not equal to 60.
test> db.students.find({marks: {$ne: 60}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  }
]
Type "it" for more
test> 
//Q.25 Find students whose marks are between 50 and 70 (inclusive).
test> db.students.find({marks: {$gte: 50, $lte: 70}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  }
]
test> 
//Q.26 Find students whose marks are between 40 and 90 but age is less than 22.
test> db.students.find({marks: {$gte: 40, $lte: 90}, age: {$lt: 22}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.27 Find students whose course is BCA.
test> db.students.find({course: 'BCA'})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  }
]

test> 
//Q.28 Find students whose course is not MCA.
test> db.students.find({course: {$ne: 'MCA'}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71243'),
    name: 'Arjun',
    age: 24,
    course: 'B.Tech',
    marks: 95
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124b'),
    name: 'Sneha',
    age: 22,
    course: 'BCA',
    marks: 93
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124e'),
    name: 'Karan',
    age: 24,
    course: 'B.Com',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  }
]
Type "it" for more
test> 
test> 
//Q.29 Find students whose course is either MBA or BBA.

test> db.students.find({course: /MBA|BBA/})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
//Q.30 Find students whose course is either MBA or BBA.
test> db.students.find({course: /MBA|BBA/})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71246'),
    name: 'Rohit',
    age: 23,
    course: 'MBA',
    marks: 52
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.31 Find students whose marks are more than 80 and course is MCA.

test> db.students.find({marks: {$gt: 80}, course: 'MCA'})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  }
]
test> 
//Q.32 Find students whose marks are less than 50 and course is B.Tech.

test> db.students.find({marks: {$lt: 50}, course: 'B.Tech'})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  }
]
test> 
//Q.33 Find students whose age is 21 and marks are greater than 70.

test> db.students.find({age: 21, marks: {$gt: 70}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
test> 
//Q.34 Find students whose course is B.Com and marks greater than 55.

test> db.students.find({course: 'B.Com', marks: {$gt: 55}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  }
]
test> 
//Q.35 Find students whose course is not BCA but age is 22.

test> db.students.find({course: {$ne: 'BCA'}, age: 22})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  }
]
test> 
// Q.36 Find students whose marks are between 60 and 90 and course is MBA.

test> db.students.find({marks: {$gte: 60, $lte: 90}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71249'),
    name: 'Geeta',
    age: 25,
    course: 'B.Tech',
    marks: 70
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124a'),
    name: 'Tarun',
    age: 20,
    course: 'BBA',
    marks: 61
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb7124d'),
    name: 'Anjali',
    age: 21,
    course: 'MBA',
    marks: 79
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71251'),
    name: 'Mohit',
    age: 22,
    course: 'MBA',
    marks: 66
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
