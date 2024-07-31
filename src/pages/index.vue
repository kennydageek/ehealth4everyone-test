<template>
  <div class="md:flex py-10 h-dvh md:justify-center items-center">
    <div class="md:w-1/2">
      <img
        src="@/assets/images/logo.png"
        class="w-[200px] mx-auto mb-6"
        alt=""
      />
      <div id="container" style="height: 400px"></div>
    </div>
  </div>
</template>

<script setup>
import { db } from '@/main.js';
import { collection, getDocs } from 'firebase/firestore';
import { ref, onMounted } from 'vue';
import { defineComponent } from 'vue';

const persons = ref([]);

const fetchPersons = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'ehealth4everyone'));
    persons.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const seriesData = processData(persons.value);
    updateChart(seriesData);

    // Store the processed data in localStorage
    localStorage.setItem('chartData', JSON.stringify(seriesData));

    console.log(persons.value);
  } catch (error) {
    console.log(error);
  }
};

const loadChartDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('chartData');
  if (storedData) {
    const seriesData = JSON.parse(storedData);
    console.log(seriesData);
    updateChart(seriesData);
  } else {
    // Fetch data from Firestore if not available in localStorage
    fetchPersons();
  }
};

onMounted(() => {
  loadChartDataFromLocalStorage();
});

const processData = (persons) => {
  const ageRanges = ['10-19', '20-29', '30-39'];
  const bloodGroups = ['A', 'B', 'AB', 'O'];

  const data = {
    A: Array(ageRanges.length).fill(0),
    B: Array(ageRanges.length).fill(0),
    AB: Array(ageRanges.length).fill(0),
    O: Array(ageRanges.length).fill(0),
  };

  persons.forEach((person) => {
    const age = person.age;
    const bloodGroup = person['blood-group'];
    const rangeIndex = ageRanges.findIndex((range) => {
      const [min, max] = range.split('-').map(Number);
      return age >= min && age <= max;
    });

    if (rangeIndex !== -1) {
      data[bloodGroup][rangeIndex]++;
    }
  });

  return bloodGroups.map((group) => ({
    name: group,
    data: data[group],
  }));
};

const updateChart = (seriesData) => {
  Highcharts.chart('container', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Blood Group Data of 20 Patients',
      align: 'center',
    },
    xAxis: {
      categories: ['10-19', '20-29', '30-39'],
      crosshair: true,
      accessibility: {
        description: 'Ages',
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Patients',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: seriesData,
  });
};
</script>
