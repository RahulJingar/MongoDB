C:\Users\rahul>mongosh
Current Mongosh Log ID: 68ca64b1e57019201fb71235
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.4.2
Using MongoDB:          8.0.5
Using Mongosh:          2.4.2
mongosh 2.5.8 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-09-17T10:52:24.358+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
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
...   { name: "Geeta", age: 25, course: "B.Tech", marks: 70 }
... ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68ca64d3e57019201fb71236'),
    '1': ObjectId('68ca64d3e57019201fb71237'),
    '2': ObjectId('68ca64d3e57019201fb71238'),
    '3': ObjectId('68ca64d3e57019201fb71239'),
    '4': ObjectId('68ca64d3e57019201fb7123a'),
    '5': ObjectId('68ca64d3e57019201fb7123b'),
    '6': ObjectId('68ca64d3e57019201fb7123c'),
    '7': ObjectId('68ca64d3e57019201fb7123d'),
    '8': ObjectId('68ca64d3e57019201fb7123e'),
    '9': ObjectId('68ca64d3e57019201fb7123f'),
    '10': ObjectId('68ca64d3e57019201fb71240'),
    '11': ObjectId('68ca64d3e57019201fb71241'),
    '12': ObjectId('68ca64d3e57019201fb71242'),
    '13': ObjectId('68ca64d3e57019201fb71243'),
    '14': ObjectId('68ca64d3e57019201fb71244'),
    '15': ObjectId('68ca64d3e57019201fb71245'),
    '16': ObjectId('68ca64d3e57019201fb71246'),
    '17': ObjectId('68ca64d3e57019201fb71247'),
    '18': ObjectId('68ca64d3e57019201fb71248'),
    '19': ObjectId('68ca64d3e57019201fb71249')
  }
}
test> 

//Q.1 find students whose age is 22 year old and enroll bca

test> db.students.find({$and: [{age: 22}, {course: 'BCA'}]})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
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
    _id: ObjectId('68ca393959add38808b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca393959add38808b71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca393959add38808b71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b7124a'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b71255'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b7125b'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68ca49403d488aa028b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca49403d488aa028b71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca49403d488aa028b71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68ca64d3e57019201fb71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca64d3e57019201fb71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca64d3e57019201fb71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  }
]
test> 

//Q.2 find students who bgm main ya bca main ho ya mca main

test> db.students.find({$or: [{course: 'BCA'}, {course: 'MCA'}]})
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
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
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
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  },
  {
    _id: ObjectId('68ca393959add38808b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca393959add38808b71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68ca393959add38808b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca393959add38808b7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68ca393959add38808b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  }
]
Type "it" for more
test> 

//Q.3 find the students who are not 22 year old

test> db.students.find({age: {$ne: 22}})
[
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
  }
]
Type "it" for more
test> 

//Q.4 find students who are either in bca nor mca

test> db.students.find({course: {$in: ['BCA','MCA']}})
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
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
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
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  },
  {
    _id: ObjectId('68ca393959add38808b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca393959add38808b71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68ca393959add38808b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca393959add38808b7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68ca393959add38808b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  }
]
Type "it" for more

test> 

//Q.5 find students who the are bca or mca and marks is gt 70

test> db.students.find({$or: [{course: 'BCA'}, {course: 'MCA'}]})
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
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
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
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  },
  {
    _id: ObjectId('68ca393959add38808b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca393959add38808b71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68ca393959add38808b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca393959add38808b7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68ca393959add38808b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  }
]
Type "it" for more

test> 

//Q.6 find students who the are bca or mca and marks is gt 70

test> db.students.find({$and: [{$or: [{course: 'BCA'}, {course: 'MCA'}]} ,{marks: {$gt: 70}}]})
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
    _id: ObjectId('68c91b674ed5bb48ccb71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
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
  },
  {
    _id: ObjectId('68ca393959add38808b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca393959add38808b71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68ca393959add38808b7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68ca393959add38808b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68ca393959add38808b71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca393959add38808b71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71236'),
    name: 'Kuldeep',
    age: 22,
    course: 'BCA',
    marks: 75
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71237'),
    name: 'Ravi',
    age: 23,
    course: 'MCA',
    marks: 82
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b7123a'),
    name: 'Pooja',
    age: 24,
    course: 'MCA',
    marks: 90
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71247'),
    name: 'Jyoti',
    age: 22,
    course: 'BCA',
    marks: 85
  }
]
Type "it" for more

test> 

//Q.7 find the students whose age is 20 or marks are lt 50

test> db.students.find({$or: [{age: 20}, {marks: {$lt: 50}}]})
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
    _id: ObjectId('68c91b674ed5bb48ccb7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
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
    _id: ObjectId('68c91b674ed5bb48ccb7124c'),
    name: 'Lokesh',
    age: 23,
    course: 'MCA',
    marks: 47
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
    _id: ObjectId('68ca393959add38808b71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca393959add38808b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca393959add38808b7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68ca393959add38808b7123f'),
    name: 'Simran',
    age: 23,
    course: 'MCA',
    marks: 49
  },
  {
    _id: ObjectId('68ca393959add38808b71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  },
  {
    _id: ObjectId('68ca393959add38808b71241'),
    name: 'Deepak',
    age: 22,
    course: 'BCA',
    marks: 40
  },
  {
    _id: ObjectId('68ca393959add38808b71244'),
    name: 'Preeti',
    age: 19,
    course: 'BCA',
    marks: 30
  }
]
Type "it" for more

test> 

//Q.8 find the students who are not enrolled in these courses bca,mca,b-tech

test> db.students.find({course: {$nin: ['BCA','MCA','B-Tech']}})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
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
  },
  {
    _id: ObjectId('68ca393959add38808b71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca393959add38808b7123b'),
    name: 'Suresh',
    age: 19,
    course: 'BBA',
    marks: 55
  },
  {
    _id: ObjectId('68ca393959add38808b7123c'),
    name: 'Ankit',
    age: 22,
    course: 'B.Tech',
    marks: 38
  },
  {
    _id: ObjectId('68ca393959add38808b7123e'),
    name: 'Rahul',
    age: 25,
    course: 'MBA',
    marks: 68
  },
  {
    _id: ObjectId('68ca393959add38808b71240'),
    name: 'Vikas',
    age: 20,
    course: 'B.Com',
    marks: 60
  }
]
Type "it" for more

test> 

//Q.8 find the students who are lt 21 and have marks gt 60

test> db.students.find({$and: [{age: {$lt: 21}}, {marks: {$gt:60}}]})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
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
    _id: ObjectId('68c91b674ed5bb48ccb71250'),
    name: 'Swati',
    age: 20,
    course: 'BCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca393959add38808b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca393959add38808b71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b7124d'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b71259'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68ca49403d488aa028b71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca49403d488aa028b71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  },
  {
    _id: ObjectId('68ca64d3e57019201fb71239'),
    name: 'Neha',
    age: 20,
    course: 'BCA',
    marks: 65
  },
  {
    _id: ObjectId('68ca64d3e57019201fb71245'),
    name: 'Manoj',
    age: 20,
    course: 'BBA',
    marks: 77
  }
]
test>

//Q.9 find the students who are either age is 21 year old or in b-tech course

test> db.students.find({$or: [{age: 21}, {course: 'B-Tech'}]})
[
  {
    _id: ObjectId('68c91b674ed5bb48ccb71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
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
    _id: ObjectId('68c91b674ed5bb48ccb71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
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
  },
  {
    _id: ObjectId('68ca393959add38808b71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca393959add38808b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68ca393959add38808b71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca393959add38808b71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71242'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca48a2add889dcf0b71248'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b7124c'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b71251'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b71256'),
    name: 'Kavita',
    age: 21,
    course: 'MCA',
    marks: 88
  },
  {
    _id: ObjectId('68ca48e4add889dcf0b7125c'),
    name: 'Ashok',
    age: 21,
    course: 'MCA',
    marks: 33
  },
  {
    _id: ObjectId('68ca49403d488aa028b71238'),
    name: 'Amit',
    age: 21,
    course: 'B.Tech',
    marks: 45
  },
  {
    _id: ObjectId('68ca49403d488aa028b7123d'),
    name: 'Meena',
    age: 21,
    course: 'BCA',
    marks: 72
  }
]
Type "it" for more

test> 

//Q.10 find students who are niether 22 year old nor enrolled in bca

test> db.students.find({$nor: [{course: 'BCA'}, {age: 22}]})
[
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
    _id: ObjectId('68c91b674ed5bb48ccb7124f'),
    name: 'Ramesh',
    age: 19,
    course: 'B.Tech',
    marks: 42
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71252'),
    name: 'Divya',
    age: 23,
    course: 'MCA',
    marks: 59
  },
  {
    _id: ObjectId('68c91b674ed5bb48ccb71253'),
    name: 'Sachin',
    age: 21,
    course: 'BBA',
    marks: 81
  }
]
Type "it" for more
