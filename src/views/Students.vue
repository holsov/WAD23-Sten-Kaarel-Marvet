<template>
  <div>
<h3> Students grades </h3>


<div class="container">
  <table>
          <tr>
            <th>St. Code</th>
            <th>Homework 1</th>
            <th>Homework 2</th>
            <th>Exam</th>
            <th>Final Grade</th>
          </tr>
          <tr class="item" v-for="grade in grades" :key="grade.id">
            <td>{{ grade.studentcode }} </td>
            <td>{{ grade.hw1}} </td>
            <td>{{ grade.hw2}} </td>
            <td>{{ grade.exam }} </td>
            <td>{{ grade.final }} </td> 
          </tr>
          </table>
</div>
</div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
  },
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
table, th, td {
  border: 3px solid;
  border-color:  #d5d7d8;
  padding:5px;
}
table {
  border-collapse: collapse;
}
th {
  background: rgb(88, 125, 142);
}
td {
  background: rgb(123, 175, 199);
}
.container {
  background: #d5d7d8;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
  margin: auto;
  width: 40%;
  display: flex;
  justify-content: center;
}
</style>
