<template>
  <div class="pb-10">
    <!-- <Appbar /> -->
    <HeroHeader />
    <AboutMe />
    <div v-for="(program, idx) in config.programs" :key="idx">
      <MentoringProgram :program="program"/>
    </div>
    <MonthlyFee :plans="config.plans" />
    <Mentees :mentees="config.mentees" />
    <MyReviews />
  </div>
</template>

<script>
export default {}
</script>
