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
          <td>{{ grade.hw1 }} </td>
          <td>{{ grade.hw2 }} </td>
          <td>{{ grade.exam }} </td>
          <td class='red' v-if="grade.final <= 20 || grade.exam <= 20" @click="justifyGrade(grade)"> {{ grade.final }}
          </td>
          <td class='green' v-else @click="justifyGrade(grade)">{{ grade.final }}</td>
        </tr>
      </table>
      <div class="p" v-if="justification != ''">
        <h2>Grade justification: </h2>
        <p>{{ justification }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Students",
  data() {
    return {
      grades: [],
      justification: '',
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/grades`)
        .then((response) => response.json())
        .then((data) => (this.grades = data))
        .catch((err) => console.log(err.message));
    },
    justifyGrade(grade) {
      if (grade.exam < 21 && grade.final < 51) {
        this.justification = 'You failed because you need to get 21 points or more in the exam to pass the course and you also need to get 51 or more in the HWs and exam to pass the course.';
      }
      else if (grade.exam < 21) {
        this.justification = 'You failed because you need to get 21 points or more in the exam to pass the course.';
      }
      else if (grade.final < 51) {
        this.justification = 'You failed because you need to get 51 points or more in the HWs and exam to pass the course.';
      }
      else {
        this.justification = 'You have passed because you got over 20 points in the exam and over 50 points in the HWs and exam.';
      }
    }
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

table,
th,
td {
  border: 3px solid;
  border-color: #d5d7d8;
  padding: 5px;
}

h2,
p {
  display: inline;
}

h2 {
  font-size: 18px;
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
  flex-direction: column;
}

.green {
  background: rgb(0, 171, 0);
}

.red {
  background: red;
}
</style>
