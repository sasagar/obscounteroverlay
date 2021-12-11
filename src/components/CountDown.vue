<template>
  <template v-if="!this.elapsedFlag">
    <vue3-flip-countdown
      :deadline="this.deadline"
      :showDays="this.showDays"
      :showHours="this.showHours"
      :showMinutes="this.showMinutes"
      :showSeconds="this.showSeconds"
      :showLabels="this.showLabels"
      :flipAnimation="this.enableAnimation"
      :countdownSize="this.countdownSize"
      :labelSize="this.labelSize"
      :mainColor="this.mainColor"
      :secondFlipColor="this.secondFlipColor"
      :mainFlipBackgroundColor="this.mainFlipBackgroundColor"
      :secondFlipBackgroundColor="this.secondFlipBackgroundColor"
      :labelColor="this.labelColor"
    />
  </template>
  <template v-else>
    <h1>{{ elapsedText }}</h1>
  </template>
</template>

<script>
import { onBeforeMount, computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "CountDown",

  setup() {
    const route = useRoute();

    const tempNow = new Date();

    // to watch end
    let now = ref(Math.trunc(new Date().getTime() / 1000));
    let diff = ref(0);
    let elapseTimer;
    let elapsed = ref(false);

    // Default Date/Time
    let queryDate = "21000101";
    let queryTime = "000000";

    // return variables
    let date;
    let targetTime;

    // elapsed text
    let elapsedTxt = ref("Elapsed!!");

    // Flags for options
    let showD = true;
    let showH = true;
    let showM = true;
    let showS = true;
    let showL = true;
    let enableA = true;

    // Sizes params
    let cdSize = "3rem";
    let lbSize = "1.2rem";

    // Color params
    let mainC = "#ec685c";
    let secondFC = "#ec685c";
    let mainFBC = "#222222";
    let secondFBC = "#393939";
    let lbC = "#222222";

    onBeforeMount(() => {
      if (typeof route.query.date != "undefined") {
        queryDate = route.query.date;
      }
      if (typeof route.query.time != "undefined") {
        queryTime = route.query.time;
        const tempNowString = formatDate(tempNow, "HHmmss");

        if (tempNowString * 1 >= queryTime * 1) {
          if (typeof route.query.date == "undefined") {
            const newDate = new Date(tempNow);
            newDate.setDate(tempNow.getDate() + 1);
            queryDate = formatDate(newDate, "yyyyMMdd");
          }
        } else {
          if (typeof route.query.date == "undefined") {
            const newDate = new Date(tempNow);
            queryDate = formatDate(newDate, "yyyyMMdd");
          }
        }
      }

      if (typeof route.query.duration != "undefined") {
        const duration = route.query.duration;

        const newDate = new Date(tempNow);
        const durH = Number(duration.substr(0, 2));
        const durM = Number(duration.substr(2, 2));
        const durS = Number(duration.substr(4, 2));
        newDate.setHours(tempNow.getHours() + durH);
        newDate.setMinutes(tempNow.getMinutes() + durM);
        newDate.setSeconds(tempNow.getSeconds() + durS);

        queryTime = formatDate(newDate, "HHmmss");
        queryDate = formatDate(newDate, "yyyyMMdd");
      }

      // Show date flag
      if (
        typeof route.query.d != "undefined" &&
        (route.query.d == "false" || route.query.d == 0)
      ) {
        showD = false;
      }

      // Show hour flag
      if (
        typeof route.query.h != "undefined" &&
        (route.query.h == "false" || route.query.h == 0)
      ) {
        showH = false;
      }

      // Show minutes flag
      if (
        typeof route.query.m != "undefined" &&
        (route.query.m == "false" || route.query.m == 0)
      ) {
        showM = false;
      }

      // Show seconds flag
      if (
        typeof route.query.s != "undefined" &&
        (route.query.s == "false" || route.query.s == 0)
      ) {
        showS = false;
      }

      // Show label flag
      if (
        typeof route.query.l != "undefined" &&
        (route.query.l == "false" || route.query.l == 0)
      ) {
        showL = false;
      }

      // Enable flip animation flag
      if (
        typeof route.query.a != "undefined" &&
        (route.query.a == "false" || route.query.a == 0)
      ) {
        enableA = false;
      }

      let dateStr =
        queryDate.substr(0, 4) +
        "-" +
        queryDate.substr(4, 2) +
        "-" +
        queryDate.substr(6, 2) +
        " " +
        queryTime.substr(0, 2) +
        ":" +
        queryTime.substr(2, 2) +
        ":" +
        queryTime.substr(4, 2);
      date = new Date(dateStr);

      targetTime = new Date(date).toLocaleString();

      // Sizes
      if (typeof route.query.cds != "undefined") {
        cdSize = route.query.cds + "rem";
      }

      if (typeof route.query.lbs != "undefined") {
        lbSize = route.query.lbs + "rem";
      }

      // Colors
      if (typeof route.query.mc != "undefined") {
        mainC = "#" + route.query.mc;
      }

      if (typeof route.query.sfc != "undefined") {
        secondFC = "#" + route.query.sfc;
      }

      if (typeof route.query.mfbc != "undefined") {
        mainFBC = "#" + route.query.mfbc;
      }

      if (typeof route.query.sfbc != "undefined") {
        secondFBC = "#" + route.query.sfbc;
      }

      if (typeof route.query.lc != "undefined") {
        lbC = "#" + route.query.lc;
      }

      if (typeof route.query.et != "undefined") {
        elapsedTxt.value = route.query.et;
      }

      elapseTimer = setInterval(() => {
        now.value = Math.trunc(new Date().getTime() / 1000);
      }, 1000);
    });

    watch(now, () => {
      diff.value = date.getTime() / 1000 - now.value;
      if (diff.value < 0 || stop.value) {
        diff.value = 0;
      }
    });

    watch(diff, (newVal) => {
      if (newVal === 0) {
        clearInterval(elapseTimer);
        elapsed.value = true;
      } else {
        elapsed.value = false;
      }
    });

    const deadline = computed(() => targetTime);
    const showDays = computed(() => showD);
    const showHours = computed(() => showH);
    const showMinutes = computed(() => showM);
    const showSeconds = computed(() => showS);
    const showLabels = computed(() => showL);
    const enableAnimation = computed(() => enableA);
    const countdownSize = computed(() => cdSize);
    const labelSize = computed(() => lbSize);
    const mainColor = computed(() => mainC);
    const secondFlipColor = computed(() => secondFC);
    const mainFlipBackgroundColor = computed(() => mainFBC);
    const secondFlipBackgroundColor = computed(() => secondFBC);
    const labelColor = computed(() => lbC);
    const elapsedFlag = computed(() => elapsed.value);
    const elapsedText = computed(() => elapsedTxt.value);

    const formatDate = (date, format) => {
      format = format.replace(/yyyy/g, date.getFullYear());
      format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
      format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
      format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
      format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
      format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
      format = format.replace(
        /SSS/g,
        ("00" + date.getMilliseconds()).slice(-3)
      );
      return format;
    };

    return {
      deadline,
      showDays,
      showHours,
      showMinutes,
      showSeconds,
      showLabels,
      enableAnimation,
      countdownSize,
      labelSize,
      mainColor,
      secondFlipColor,
      mainFlipBackgroundColor,
      secondFlipBackgroundColor,
      labelColor,
      elapsedFlag,
      elapsedText,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
