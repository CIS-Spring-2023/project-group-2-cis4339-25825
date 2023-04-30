<script>
import { DateTime } from "luxon";
import axios from "axios";
import pieChart from "./pieChart.vue";
import MainLayout from "./mainLayout.vue";
const apiURL = import.meta.env.VITE_ROOT_API;

export default {
  components: {
    pieChart,
    MainLayout,
  },

  data() {
    return {
      recentEvents: [],
      labels: [],
      chartData: [],
      loading: false,
      error: null,
    };
  },
  mounted() {
    this.getAttendanceData();
  },

  methods: {
    async getAttendanceData() {
      try {
        this.error = null;
        this.loading = true;
        const response = await axios.get(`${apiURL}/events/attendance`);
        this.recentEvents = response.data;
        this.labels = response.data.map(
          (item) => `${item.name} (${this.formattedDate(item.date)})`
        );
        this.chartData = response.data.map((item) => item.attendees.length);
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
    formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: "utc",
      });
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString();
    },
    // method to allow click through table to event details
    editEvent(eventID) {
      this.$router.push({ name: "eventdetails", params: { id: eventID } });
    },
  },
};
</script>

<template>
  <MainLayout>
    <template v-slot:header>
      <div class="mt-10">
        <h1
          class="text-red-700 tracking-widest text-4xl mb-6 font-bold text-center"
        >
          Welcome
        </h1>

        <div class="flex m-auto w-[50%] mb-10">
          <table class="min-w-full shadow-md rounded">
            <thead class="bg-gray-50 text-xl">
              <tr class="p-4 text-left">
                <th class="p-4 text-left">Event Name</th>
                <th class="p-4 text-left">Event Date</th>
                <th class="p-4 text-left">Number of Attendees</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-300"></tbody>
          </table>
        </div>
        <pieChart class="w-[35%] h-[40vh] m-auto" />
      </div>
    </template>
  </MainLayout>
</template>
