<template>
  <div>
    <button @click="fetchPersons">Fetch Persons</button>
    <ul>
      <li v-for="person in persons" :key="person.id">
        {{ person.name }} - {{ person.age }}
      </li>
    </ul>
  </div>

  <high-charts-vue :options="chartOptions"></high-charts-vue>
</template>

<script setup>
import { db } from '@/main.js';
import { collection, getDocs } from 'firebase/firestore';
import { ref, onMounted } from 'vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
const persons = ref([]);

const fetchPersons = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'ehealth4everyone'));
    console.log(querySnapshot);
    persons.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchPersons();
});

const chartOptions = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'My Chart',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Value',
    },
  },
  series: [
    {
      name: 'Sample Data',
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
    },
  ],
};
</script>
